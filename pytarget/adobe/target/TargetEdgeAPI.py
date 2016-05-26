import json
import sys

import requests

if sys.version_info[0] == 2:
    from ConfigParser import RawConfigParser
    from urllib import urlencode
if sys.version_info[0] >= 3:
    from configparser import RawConfigParser
    from urllib.parse import urlencode

class TargetEdgeAPI:
    config_filename = "../../conf/at.conf"
    verbose = False
    request_retry = True
    request_retry_attempts_max = 4
    backoff_exponential_factor = 15  # seconds
    backoff_random_delay_max = 5  # seconds

    def __init__(self):

        # read configuration file
        config = RawConfigParser()
        config.read(self.config_filename)

        # server parameters
        self.host = config.get("edge", "mboxedgehost")
        self.client_code = config.get("edge", "client_code")

    def send_request(self, mbox_name, session_id, payload):
        if self.verbose:
            print("==> Calling Target edge")

        # method parameters
        url = "https://" + self.host + "/rest/v1/mbox/" + session_id + "?client=" + self.client_code
        headers = {
            "Content-Type": "application/json"
        }
        if self.verbose:
            print("==> Sending request to: " + str(url))

        # send request
        res = requests.post(url, headers=headers, data=json.dumps(payload))

        # extract token
        if res.status_code == 200:
            self.mbox_content = json.loads(res.content)
        else:
            self.mbox_content = ""

        # print access token
        if self.verbose:
            if self.mbox_content != "":
                print("==> Response is: " + str(self.mbox_content))
            else:
                print("==> Mbox request failed: " + str(res.text))
                print("==> Response headers: " + str(res.headers))
