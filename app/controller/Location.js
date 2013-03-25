Ext.define("DemoNavigation.controller.Location", {
    extend: 'Ext.app.Controller',

    config: {
        views: ["Main"]
    },
    init: function() {
        this.control({
            '#locationbtn': {
                tap: this.getLocation
            }
        });
    },

    getLocation: function(button) {
//        Ext.Msg.alert('The panel was rendered');
        Ext.device.Notification.vibrate();
        Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
                console.log(position.coords["latitude"]+ " " +position.coords["longitude"]);
                var geocoder = new google.maps.Geocoder(),
                    latlng   = new google.maps.LatLng(position.coords["latitude"], position.coords["longitude"]);

                geocoder.geocode({'latLng': latlng}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            Ext.Msg.alert(results[0].formatted_address);
                        } else {
                            Ext.Msg.alert("No results found");
                        }
                    } else {
                        Ext.Msg.alert("Geocoder failed due to: " + status);
                    }
                });
            },
            failure: function() {
                Ext.Msg.alert('something went wrong!');
            }
        });
    }
});