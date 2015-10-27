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
	url: baseUrl + "events/getEvents",
	async: false,
	dataType:'jsonp',
	success: function(response){
		window.eventModel  = new EventModel(response).toJSON();	
		var eventRoute = new EventRoute();	
		Backbone.history.start();
	}
});


var EventRoute = Backbone.Router.extend({
  routes: {
  	"" : "home"   ,
  	"events" : "home"   ,
    "events/:eventId": "eventDetails",
    "speakers" : "showSpeakers"   ,
    "events/:eventId/:speakerId": "speakerDetails"  
  },

  home: function() {
  	eventView.model = window.eventModel;
  	eventView.templateUrl = 'templates/events.html';
	eventView.render();	
  },

  eventDetails: function(eventId) {
  	for(event in window.eventModel){
  		if(window.eventModel[event]['id'] === eventId)
  			eventView.model = window.eventModel[event];
  	}    
  	eventView.templateUrl = 'templates/eventDetails.html';
	eventView.render();	
  },

  speakerDetails: function(eventId, speakerId) {     

  	$.ajax({
		method: "GET",
		url: baseUrl + "events/getSpeakers/" + speakerId,
		async: false,
		dataType:'jsonp',
		success: function(response){
			eventView.model  = new EventModel(response).toJSON();	
			eventView.templateUrl = 'templates/speakerDetails.html';
			eventView.render();	
		}
	});
  	
  },
  showSpeakers : function(){
  	$.ajax({
		method: "GET",
		url: baseUrl + "events/getSpeakers/",
		async: false,
		dataType:'jsonp',
		success: function(response){
			eventView.model  = new EventModel(response).toJSON();	
			eventView.templateUrl = 'templates/speakers.html';
			eventView.render();	
		}
	});

  }

});

 




