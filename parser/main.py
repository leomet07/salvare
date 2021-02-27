import requests
import json
from get_ss import get_ss_by_url
import os
import shutil

from dotenv import load_dotenv

load_dotenv()

# Clear folder
shutil.rmtree('images/')
os.mkdir("images")

url = "https://api.nasa.gov/neo/rest/v1/feed"

querystring = {"start_date":"2021-2-18","api_key":os.getenv("API_KEY")}

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
			print("Asteroid #" + str(count) + ":")
			jpl_url = object["nasa_jpl_url"]
			print("Nasa jpl info page url: " ,jpl_url)
			filepath = os.path.join("images" , str(count ) + ".png")

			# Scalp for image graph from nasa website
			get_ss_by_url(jpl_url, filepath)

			# Upload file to g cloud
			
			url = "https://salvare-backend.herokuapp.com/api/v1/upload_ss"

			response = None
			with open(filepath, "rb") as a_file:
				file_dict = {"file": a_file}
				response = requests.post(url, files=file_dict)

				

			json_response = json.loads(response.text)

			g_cloud_img= json_response['url']

			print("Gcloud graph public url: " , g_cloud_img)

			

			url = "https://salvare-backend.herokuapp.com/api/v1/db/create_occurrences"

			payload = object
			payload['graph_ss_url'] = g_cloud_img
			# print(payload)
			headers = {'Content-Type': 'application/json'}

			response = requests.post(url, data=json.dumps(payload), headers=headers)

			json_data = json.loads(response.text)

			if json_data['created']:
				print("Successfully registered a dangerous asteroid.")
			else:
				print("Register failed")

			
			print("\n")
			count += 1
			

# print(len(near_earth_objects))
