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
        Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
                Ext.Msg.alert(JSON.stringify(position.coords));
            },
            failure: function() {
                Ext.Msg.alert('something went wrong!');
            }
        });
    }
});