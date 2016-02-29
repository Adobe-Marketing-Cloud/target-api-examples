import adobe.target.TargetAPI
import adobe.target.TargetEdgeAPI
import json

targetApi = adobe.target.TargetAPI.TargetAPI()
targetEdgeApi = adobe.target.TargetEdgeAPI.TargetEdgeAPI()

targetApi.verbose = False
targetEdgeApi.verbose = True


def process_response(res, action, resource_type):
    """
    Inspect the response returned by Adobe Target API
    :rtype: None
    """
    res_json_data = json.loads(res.text)
    data_list = res_json_data[action]
    print "Got back", len(data_list), action
    if len(data_list) > 0:
        if resource_type == "activity":
            print "Activity Id = ", data_list[1]["id"]
            res = targetApi.execute_get_ab_activity_request(data_list[1]["id"])
            print("==> Received details with status code " + str(res.status_code) + "\n:" +
                  json.dumps(json.loads(res.text), indent=4))
        elif resource_type == "offer":
            print "Offer Id = ", data_list[1]["id"]
            res = targetApi.execute_get_offer_request(data_list[1]["id"])
            print("==> Received Offer details with status code " + str(res.status_code) + "\n:" +
                  json.dumps(json.loads(res.text), indent=4))
        elif resource_type == "audience":
            print "Audience Id = ", data_list[1]["id"]
            res = targetApi.execute_get_audience_request(data_list[1]["id"])
            print("==> Received details with status code " + str(res.status_code) + "\n:" +
                  json.dumps(json.loads(res.text), indent=4))


def main():
     targetApi.verbose = True
     targetApi.obtain_access_token()
    #
     res = targetApi.execute_activities_request(0)
     process_response(res, "activities", "activity")
    #
    # res = targetApi.execute_audiences_request(0)
    # process_response(res, "audiences", "audience")
    #
    # res = targetApi.execute_offers_request(0)
    # process_response(res, "offers", "offer")
    # targetEdgeApi.verbose = True
    # targetEdgeApi.send_request("imagesappmbox")


if __name__ == "__main__":
    main()
