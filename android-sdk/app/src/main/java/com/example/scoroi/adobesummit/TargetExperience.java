package com.example.scoroi.adobesummit;

import android.app.Activity;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.adobe.mobile.Config;
import com.adobe.mobile.Target;
import com.adobe.mobile.TargetLocationRequest;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONException;
import org.json.JSONObject;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class TargetExperience extends Activity {

    private ImageView experienceImage;
    private TextView offerName  ;
    private TextView offerContent;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_target_experience);

        final Properties appProperties;
        try {
            appProperties = getProperties(this.getAssets());
        } catch (IOException e) {
            Log.e("app", "Unable to read properties", e);
            return;
        }

        Config.setContext(this.getApplicationContext());
        Config.setDebugLogging(true);

        initTargetExperienceView();

        fetchAndSetExperience(appProperties, Collections.<String, Object>emptyMap());

        findViewById(R.id.buy_now_button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Map<String, Object> purchaseParameters = new HashMap<>();
                purchaseParameters.put(appProperties.getProperty("purchaseProfileParameter"), true);
                fetchAndSetExperience(appProperties, purchaseParameters);
            }
        });
    }

    private void fetchAndSetExperience(Properties appProperties,
                                       Map<String, Object> additionalParameters) {
        Target.clearCookies();

        final String url = appProperties.getProperty("url");
        String mbox = appProperties.getProperty("mbox");
        String nativeAppMboxParameter = appProperties.getProperty("nativeAppMboxParameter");
        String nativeAppMboxValue = appProperties.getProperty("nativeAppMboxParameterValue");

        Map<String, Object> parameters = new HashMap<>();
        parameters.put(nativeAppMboxParameter, nativeAppMboxValue);
        parameters.put("mbox3rdPartyId", getMbox3rdPartyId());
        for (Map.Entry<String, Object> parameterEntry : additionalParameters.entrySet()) {
            parameters.put(parameterEntry.getKey(), parameterEntry.getValue());
        }

        TargetLocationRequest locationRequest = Target.createRequest(mbox, url, parameters);

        final TargetExperience targetExperience = this;
        Target.loadRequest(locationRequest, new Target.TargetCallback<String>() {
            @Override
            public void call(final String content) {
                targetExperience.runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        MobilePayload mobilePayload = getMobilePayload(content);
                        new DownloadImageTask(experienceImage).execute(url + mobilePayload.getImageUrl());
                        offerName.setText(mobilePayload.getOfferName());
                        offerContent.setText(mobilePayload.getOfferContent());
                    }
                });
            }
        });
    }

    private MobilePayload getMobilePayload(String rawResponse) {
        String json = StringUtils.substringBefore(rawResponse, "-->").replace("<!--", "");

        try {
            JSONObject payload = new JSONObject(json);
            String imageUrl = payload.getString("imageUrl");
            String offerName = payload.getString("offerName");
            String offerContent = payload.getString("offerContent");
            return new MobilePayload(imageUrl, offerName, offerContent);
        } catch (JSONException e) {
            Log.e("json", "unable to parse json", e);
        }
        return new MobilePayload("", "Native mobile", "Unable to load offerContent");
    }

    private static class MobilePayload {

        private final String imageUrl;
        private final String offerName;
        private final String offerContent;

        private MobilePayload(String imageUrl, String offerName, String offerContent) {
            this.imageUrl = imageUrl;
            this.offerName = offerName;
            this.offerContent = offerContent;
        }

        public String getImageUrl() {
            return imageUrl;
        }

        public String getOfferName() {
            return offerName;
        }

        public String getOfferContent() {
            return offerContent;
        }

    }
    private Integer getMbox3rdPartyId() {
        return getIntent().getExtras().getInt(Constants.MBOX_THIRD_PARTY_ID);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_target_experience, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        return id == R.id.action_settings || super.onOptionsItemSelected(item);
    }

    private void initTargetExperienceView() {
        experienceImage = (ImageView) findViewById(R.id.experienceImage);
        offerName = (TextView) findViewById(R.id.offerNameText);
        offerContent = (TextView) findViewById(R.id.offerContentText);
    }

    private Properties getProperties(AssetManager assetManager) throws IOException {
        InputStream propertiesInputStream = assetManager.open("app.properties");
        Properties appProperties = new Properties();
        appProperties.load(propertiesInputStream);
        return appProperties;
    }

}
