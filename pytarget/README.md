# pytarget: Python project for Adobe Target API

## Introduction
pytarget is a basic example providing a way to make a calls to Adobe Target rest apis.
TargetAPI.py --> Implementation that takes care of authentication, and exposes methods to make the api calls
TargetApiClient.py --> Sample implementation that makes a call to target apis.

## Features

*  Authenticates with the Adobe MC Gateway using JWT based authentication
*  Fetch listing of Target Activities, Audiences, Offers
*  From the fetched list, fetchs back details of a specific activity, offer or audience

## Pre-requisites:

Generate a API Key from https://marketing.adobe.io, this means that you already have the following elements to make a 
call to target. If you dont have this - please log in to adobe.io.

*   tenant id: Friendly name for your account in Adobe Marketing Cloud.
*   ims_org_id: Displayed in adobe.io portal when you generate your api key
*   api_key: Displayed in adobe.io portal  
*   technical_account:  Displayed in adobe.io portal when you generate your api key
*   client_secret: Displayed in adobe.io portal when you generate your api key

## Setup
pytarget is supposed to run with minimal edits to the code, note that TargetApiClient is a sample code, not a complete
implementation. The only file you need to change is at.conf to get started.


To setup the project, please edit "at.conf" file as follows:

```
[server]
host = mc.adobe.io
endpoint = /<YOUR TENANT CODE HERE>/target
activities = target/activities
offers = target/offers
audiences = target/audiences

ims_host = ims-na1.adobelogin.com
ims_endpoint_jwt = /ims/exchange/jwt
ims_endpoint_validate = /ims/validate_token

[enterprise]
metascope = ent_marketing_sdk
org_id = <YOUR IMS ORG ID HERE> # for example : 643A071A550C49BD0A4C98A6@AdobeOrg
api_key = <YOUR API KEY HERE> # for example : b769d25516cd4e9f90aad9dcd89b09cb
client_secret = <YOUR CLIENT SECRET HERE> # for example: ca0ae982-6c90-4abf-8f21-5c791fe29ccf
tech_acct = <YOUR TECHNICAL ACCOUNT HERE> # example: BF7D76F9564A65207F000101@techacct.adobe.com
priv_key_filename = <LOCAL PATH TO THE PRIVATE KEY> # example /Users/ninair/.ssh/adobe.io/key.pem
```
