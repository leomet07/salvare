# An express backend
The Server is used to manage the backend of this project. We use Express to manage it.

## Basic Detail
The index accepts asteroid data through post requests. The server is also given jpgs of NASA asteroid paths. These pictures will be given to the frontend when a user requests to view the information of an asteroid.

## Data:
Each asteroid has a boolean called is_potentially_hazardous and is accpeted into our database if it is true. Other attributes of asteroids include an ID, a URL, and approach data.

Approach data includes a subset of data with information on asteroid velocity, its distance from the Earth, the day it should approach Earth the closest, and orbit detail. It will also include a snapshot taken from our parser bot.

## Env:
DB_CONNECT is the connection to firebase

PORT is the port that the server runs on.
