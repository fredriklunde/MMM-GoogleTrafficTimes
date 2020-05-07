# Module: Google Traffic Times

A module for the MagicMirror that displays travel times from a location to one or more destinations based on Google Maps Traffic information.

# Installation
Navigate into your MagicMirror's ~/MagicMirror/modules folder and execute git clone https://github.com/pjestico/MMM-GoogleTrafficTimes.git
A new folder will be created, please navigate into it.
Run npm install in ~/MagicMirror/modules/MMM-GoogleTrafficTimes to install the module and dependencies.

# Google API Key
In order to use this module you will need a Google Maps API which is available from the Google GCP console.
You will need to enable the following APIs for your key, Maps JavaScript API, Geocoding API, Distance Matrix API.
These are all, at the time of writing (May 2020), available under the free allowance as long as hits to the API are sensible and the default refresh rate of 15 minutes has not resulted in a charge.

# Dependencies
Installed via npm install:
fs
path
