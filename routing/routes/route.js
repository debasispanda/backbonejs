var EventRoute = Backbone.Router.extend({
  routes: {
    "":                 "home",    
    "/#event":     "event" 
  },

  home: function() {
  	console.log('home page');
  },

  event: function(query, page) {
    console.log('event details page');
  }

});


var eventRoute = new EventRoute();

Backbone.history.start();

