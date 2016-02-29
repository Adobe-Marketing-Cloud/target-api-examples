import sys
import requests
import json
import email.utils
import random
import math
import time
import jwt
from jwt.contrib.algorithms.pycrypto import RSAAlgorithm

jwt.register_algorithm('RS256', RSAAlgorithm(RSAAlgorithm.SHA256))
if sys.version_info[0] == 2:
    from ConfigParser import RawConfigParser
    from urllib import urlencode
if sys.version_info[0] >= 3:
    from configparser import RawConfigParser
    from urllib.parse import urlencode


class TargetAPI:
    config_filename = "../../conf/at_adobesummit.conf"
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
        self.host = config.get("server", "host")
        self.endpoint = config.get("server", "endpoint")
        self.ims_host = config.get("server", "ims_host")
        self.ims_endpoint_jwt = config.get("server", "ims_endpoint_jwt")
        self.ims_endpoint_validate = config.get("server", "ims_endpoint_validate")

        # enterprise parameters
        # self.domain = config.get("enterprise", "domain")
        self.org_id = config.get("enterprise", "org_id")
        self.tech_acct = config.get("enterprise", "tech_acct")
        self.api_key = config.get("enterprise", "api_key")
        self.client_secret = config.get("enterprise", "client_secret")
        self.metascope = config.get("enterprise", "metascope")
        self.priv_key_filename = config.get("enterprise", "priv_key_filename")

    def construct_jwt(self):
        if self.verbose:
            print("==> Constructing JWT")

        # set expiry time for JSON Web Token
        expiry_time = int(time.time()) + 60 * 60 * 24

        # create payload
        payload = {
            "exp": expiry_time,
            "iss": self.org_id,
            "sub": self.tech_acct,
            "aud": "https://" + self.ims_host + "/c/" + self.api_key,
            "https://" + self.ims_host + "/s/" + self.metascope: True
        }

        print("==> JWT payload: " + json.dumps(payload, indent=4))

        # read private key from file
        priv_key_file = open(self.priv_key_filename, 'r')
        priv_key = priv_key_file.read()
        priv_key_file.close()

        # create JSON Web Token
        self.jwt_token = jwt.encode(payload, priv_key, algorithm="RS256")

        # decode bytes into string
        self.jwt_token = self.jwt_token.decode("utf-8")

        # print JSON Web Token
        if self.verbose:
            print("==> Constructed JWT is: " + str(self.jwt_token))

    def exchange_jwt(self):
        if self.verbose:
            print("==> Exchanging JWT with an access token")

        # method parameters
        url = "https://" + self.ims_host + self.ims_endpoint_jwt
        headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache"
        }
        body_credentials = {
            "client_id": self.api_key,
            "client_secret": self.client_secret,
            "jwt_token": self.jwt_token
        }
        body = urlencode(body_credentials)
        if self.verbose:
            print("==> Sending request to: " + str(url))

        # send request
        res = requests.post(url, headers=headers, data=body)

        # extract token
        if res.status_code == 200:
            self.access_token = json.loads(res.text)["access_token"]
        else:
            self.access_token = ""

        # print access token
        if self.verbose:
            if self.access_token != "":
                print("==> Your access token is: " + str(self.access_token))
                self.validate_token(self.access_token)
            else:
                print("==> Failed to obtain an access token: " + str(res.text))
                print("==> Response headers: " + str(res.headers))

    def validate_token(self, token):
        url = "https://" + self.ims_host + self.ims_endpoint_validate + "?client_id=monitor&token=" + token
        res = requests.get(url)
        if res.status_code == 200:
            res_json_data = json.loads(res.text)
            print("==> Your decoded access token is: " + json.dumps(res_json_data, indent=4))
        else:
            print("==> Exception decoding token: " + str(res.status_code))

    def obtain_access_token(self):
        self.construct_jwt()
        self.exchange_jwt()

    def send_request(self, endpoint_path, json_data, page, group):
        url = "https://" + self.host + self.endpoint + "/" + endpoint_path

        if self.verbose:
            print("==> Sending request to: " + str(url))

        # method parameters
        headers = {
            "Content-Type": "application/vnd.adobe.target.v1+json",
            "X-Api-Key": self.api_key,
            "Authorization": "Bearer " + self.access_token,
            "x-request-id": "Request" + str(int(round(time.time() * 1000)))
        }

        # send request
        res = requests.get(url, headers=headers)

        # print response status
        if self.verbose:
            if res.status_code == 200:
                print("==> Received response with status code " + str(res.status_code) + "\n:" + json.dumps(
                    json.loads(res.text), indent=4))
            else:
                print("==> Received response with status code " + str(res.status_code) + " and following body: " + str(
                    res.text))

        # return response
        return res

    def send_request_retry(self, endpoint_path, json_data, page, group):

        # initialise
        num_attempts = 0
        num_attempts_max = self.request_retry_attempts_max

        # try sending the request
        while True:

            # increase number of attempts
            num_attempts += 1

            # send request
            res = self.send_request(endpoint_path, json_data, page, group)

            # evaluate response
            if res.status_code in [429, 502, 503, 504]:

                # check number of attempts
                if num_attempts >= num_attempts_max:
                    if self.verbose:
                        print("Aborting after " + str(num_attempts) + " failed attempts")
                    break

                # set backoff time
                if "Retry-After" in res.headers:
                    # parse Retry-After header
                    retry_after_date = email.utils.parsedate_tz(res.headers["Retry-After"])
                    if retry_after_date != None:
                        # header contains date
                        time_backoff = int(email.utils.mktime_tz(retry_after_date) - time.time())
                    else:
                        # header contains delta seconds
                        time_backoff = int(res.headers["Retry-After"])
                else:
                    # use exponential backoff with random delay
                    time_backoff = int(math.pow(2, num_attempts - 1)) * \
                                   self.backoff_exponential_factor + \
                                   random.randint(0, self.backoff_random_delay_max)

                # delay next request
                if self.verbose:
                    print("Retrying in " + str(time_backoff) + " seconds...")
                time.sleep(time_backoff)

            else:

                # stop sending request
                break

        # return response
        return res

    def execute_request(self, endpoint_path, json_data, page, group):
        if self.request_retry:
            return self.send_request_retry(endpoint_path, json_data, page, group)
        else:
            return self.send_request(endpoint_path, json_data, page, group)

    def execute_activities_request(self, json_data):
        return self.execute_request("activities", json_data, None, None)

    def execute_get_ab_activity_request(self, id):
        return self.execute_request("activities/ab/" + str(id), None, None, None)

    def execute_get_audience_request(self, id):
        return self.execute_request("audiences/" + str(id), None, None, None)

    def execute_get_offer_request(self, id):
        return self.execute_request("offers/content/" + str(id), None, None, None)

    def execute_audiences_request(self, json_data):
        return self.execute_request("audiences", json_data, None, None)

    def execute_offers_request(self, json_data):
        return self.execute_request("offers", json_data, None, None)

    def execute_test_request(self, page):
        if self.verbose:
            print("==> Execute test API call")
        return self.execute_users_request(page, None)
