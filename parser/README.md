# Asteroid Parser
This parser is used to search NASA's asteroid API. It gives us access to lots of information about asteroids that are close to Earth and are being tracked by NASA.

## Main:
The main uses a GET request to retrieve daily asteroid data. It then gets converted into a python dictionary via json. An asteroid's data will only be saved and reported if marked as potentially hazardous. Its attributes and screenshot are saved locally for a POST request.

Main uses the POST request to send asteroid data to the Google Cloud DB. It will retrieve the local data for the current asteroid and convert everything into a json response. It then attempts to send the response to the DB. If the asteroid is not added to the DB, an error message will be reported.

## Get SS(Screen shot):
If an asteroid is reported, this function will find a picture to save of said asteroid's trajectory. get_ss will navigate to NASA's diagram page with the corresponding asteroid and capture a screenshot to save locally.

## Data:
Asteroid data from NASA's API include various statistics including size, orbit speed, orbital path, possibility of harming Earth, and more.