Ext.define("DemoNavigation.controller.Main", {
    extend: 'Ext.app.Controller',

    config: {
        views: ["Main"],
        refs: {
            slideNav:                   'slidenavigationview',
            moviePosterListContainer:   'slidenavigationview container[title="Item 8"]'
        },

        control: {
            /**
             *  Here are examples of the various events you can listen for.
             */
            slideNav: {
                open: function(nav, position, duration) {
                    console.log('Container open (position='+position+',duration='+duration+')');
                },

                close: function(nav, position, duration) {
                    console.log('Container close (position='+position+',duration='+duration+')');
                },

                select: function(nav, item, index) {
                    console.log('Selected item (index='+index+')');
                },

                opened: function(nav) {
                    console.log('Container opened');
                },

                closed: function(nav) {
                    console.log('Container closed');
                },

                slideend: function(nav) {
                    console.log('Container slideend');
                },

                slidestart: function(nav) {
                    console.log('Container slidestart');
                },

                dragstart: function(nav) {
                    console.log('Container dragstart');
                },

                dragend: function(nav) {
                    console.log('Container dragend');
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
            },

            /**
             *  The 'activate' event fires on the container, not the child
             *  element.
             *
             */
            moviePosterListContainer: {
                activate: function(container) {
                    console.log('Activate moviePosterListContainer');
                }
            }
        }
    }
});