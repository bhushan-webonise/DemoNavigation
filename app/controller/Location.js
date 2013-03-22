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
        console.log('The panel was rendered');
//        Ext.device.Geolocation.watchPosition({
//            frequency: 3000, // Update every 3 seconds
//            callback: function(position) {
//                console.log('Position updated!', position.coords);
//            },
//            failure: function() {
//                console.log('something went wrong!');
//            }
//        });
        Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
//                console.log(JSON.stringify(position.coords));
                Ext.Msg.alert(JSON.stringify(position.coords));
            },
            failure: function() {
//                console.log('something went wrong!');
                Ext.Msg.alert('something went wrong!');
            }
        });
    }
});