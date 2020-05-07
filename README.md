# Module: Google Traffic Times

A module for the MagicMirror that displays driving times from a location to one or more destinations based on Google Maps Traffic information. As it uses the times in traffic the values are dynamic as long as there is reasonaby accurate traffic detail available to Google in your area.

# Installation
Navigate into your MagicMirror's ~/MagicMirror/modules folder and execute git clone https://github.com/pjestico/MMM-GoogleTrafficTimes.git
A new folder will be created, please navigate into it.
Run npm install in ~/MagicMirror/modules/MMM-GoogleTrafficTimes to install the module and dependencies.

# Using the module
To use this module, add it to the modules array in the config/config.js file:
var config = {
    modules: [
        {
            module: 'MMM-GoogleTrafficTimes',
            position: 'top_left',
            config: {
                key: 'YOUR_KEY',
                origin: 'SW1A 1AA',
                destination1: 'Work:XXX',
                destination2: 'Gym:XXX',
                destination3: 'School:XXX',
            },
        }
    ]
}

# Google API Key
In order to use this module you will need a Google Maps API which is available from the Google GCP console.
You will need to enable the following APIs for your key, Maps JavaScript API, Geocoding API, Distance Matrix API.
These are all, at the time of writing (May 2020), available under the free allowance as long as hits to the API are sensible and the default refresh rate of 15 minutes has not resulted in a charge.

# Dependencies
Installed via npm install:
fs
path
