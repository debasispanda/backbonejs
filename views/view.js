var EventView = Backbone.View.extend({
	initialize: function(){
		//this.render();
	},
	render: function() {
		//var data = this.model;
		var content = this.model.toJSON();
		var self = this;

		$.get('templates/events.html', function (data) {
			var template = Handlebars.compile(data);
			var html    = template({events : content});
			$(self.el).append(html);
		}, 'html');

	}
});
var eventView = new EventView({
	el : "#backbone-view"
});

var EventModel = Backbone.Model.extend({});

$.get("models/events.json",function(response){
	window.eventModel1  = new EventModel(response);
	eventView.model = window.eventModel1;
	eventView.render();	
});
var EventRoute = Backbone.Router.extend({
  routes: {   
    "event/:eventId":     "event" 
  },

  home: function() {
  	console.log('home page');
  },

  event: function(query) {
    console.log(query);
  }

});


var eventRoute = new EventRoute();

Backbone.history.start();
 




