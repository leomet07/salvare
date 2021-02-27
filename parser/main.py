import requests
import json
from get_ss import get_ss_by_url
import os
url = "https://api.nasa.gov/neo/rest/v1/feed"

querystring = {"start_date":"2021-2-18","api_key":"DEMO_KEY"}

payload = ""
response = requests.request("GET", url, data=payload, params=querystring)

# print(response.text)

json_parsed = json.loads(response.text)

near_earth_objects = json_parsed["near_earth_objects"]
count = 1
for key in near_earth_objects:
	days_objects = near_earth_objects[key]
	
	for i in range(len(days_objects)):
		object = days_objects[i]
		if object["is_potentially_hazardous_asteroid"]:
			# print(object)
			jpl_url = object["nasa_jpl_url"]
			print(jpl_url)
			get_ss_by_url(jpl_url, os.path.join("images" , str(count ) + ".png"))
			print("count: ", count)
			count += 1
			

# print(len(near_earth_objects))
