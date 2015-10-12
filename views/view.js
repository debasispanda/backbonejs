var EventView = Backbone.View.extend({
	initialize: function(){
		//this.render();
	},
	render: function() {
		//var data = this.model;
		var content = this.model;
		var self = this;

		$.get(self.templateUrl , function (data) {
			var template = Handlebars.compile(data);
			var html    = template({events : content});
			$(self.el).html(html);
		}, 'html');

	}
});
var eventView = new EventView({
	el : "#backbone-view"
});

var EventModel = Backbone.Model.extend({});

$.ajax({
	method: "GET",
	url: "models/events.json",
	async: false,
	success: function(response){
		window.eventModel  = new EventModel(response).toJSON();		
	}
});

var EventRoute = Backbone.Router.extend({
  routes: {
  	"" : "home"   ,
    "events/:eventId":     "event" 
  },

  home: function() {
  	eventView.model = window.eventModel;
  	eventView.templateUrl = 'templates/events.html';
	eventView.render();	
  },

  event: function(eventId) {
  	for(event in window.eventModel){
  		if(window.eventModel[event]['id'] === eventId)
  			eventView.model = window.eventModel[event];
  	}    
  	eventView.templateUrl = 'templates/eventDetails.html';
	eventView.render();	
  }

});


var eventRoute = new EventRoute();

Backbone.history.start();
 




