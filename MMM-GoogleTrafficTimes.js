Module.register("MMM-GoogleTrafficTimes",{

        // Module config defaults
        defaults : {
                key: 'AIzaSyC-kfiA4noILxEX7QR-xICbxJySLeql-OA',
                lat: '',
                lng: '',
                home: 'SK9 5QA',
                work: 'M1 3LD',
                yoga: 'Handforth Rd, Handforth, Wilmslow SK9 3PE',
                joe: 'WA9 4DT',
                height: '300px',
                width: '600px',
                zoom: 10,
                mapTypeId: 'roadmap',
                styledMapType: 'standard',
                disableDefaultUI: true,
                updateInterval: 900000,
        backgroundColor: 'rgba(0, 0, 0, 0)'
        },

        start: function() {
        var self = this;
        Log.info("Starting module: " + this.name);

        if (this.config.key === "") {
                Log.error("MMM-GoogleTrafficTimes: key not set!");
                return;
        }

        setInterval(function() {
                self.updateDom();
        }, this.config.updateInterval);
    },

	// Override dom generator.
	getDom: function() {
                var home = this.config.home;
                var work = this.config.work;
                var yoga = this.config.yoga;
                var joe = this.config.joe;

                var wrapper = document.createElement("div");
		wrapper.style = "text-align:left;font-size:0.65em;line-height:normal";


		var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.config.key;
                script.setAttribute('defer','');
                script.setAttribute('async','');
                document.body.appendChild(script);

                var self = this;

        script.onload = function () {
                var geocoder = new google.maps.Geocoder;
                var service = new google.maps.DistanceMatrixService;

        service.getDistanceMatrix({
          origins: [home],
          destinations: [work, yoga, joe],
          travelMode: 'DRIVING',
          drivingOptions: {
                departureTime: new Date(Date.now())
          },
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, function(response, status) {
          if (status !== 'OK') {
            Log.error('Error was: ' + status);
          } else {
            var originList = response.originAddresses;
            var destinationList = response.destinationAddresses;
            let timings = '';

            for (var i = 0; i < originList.length; i++) {
              var results = response.rows[i].elements;
              for (var j = 0; j < results.length; j++) {
			if (destinationList[j].match(/M1/)) {wrapper.innerHTML += results[j].duration_in_traffic.text + ' to Work' + '<br>'};
			if (destinationList[j].match(/SK9/)) {wrapper.innerHTML += results[j].duration_in_traffic.text + ' to Yoga' + '<br>'};
			if (destinationList[j].match(/WA9/)) {wrapper.innerHTML += results[j].duration_in_traffic.text + ' to Parkside Avenue' + '<br>'};
                        //wrapper.innerHTML += results[j].duration.text + ' to ' + destinationList[j] + '<br>';
              }
            }
          }
        });
	}
		//wrapper.innerHTML = this.config.work;
		return wrapper;
	}
});
