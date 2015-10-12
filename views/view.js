


var EventView = Backbone.View.extend({
	initialize: function(){
		this.render();
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

var EventModel = Backbone.Model.extend({});

$.get("models/events.json",function(response){
	window.eventModel1  = new EventModel(response);

	var eventView = new EventView({
		el : "#backbone-view",
		model : window.eventModel1,
	});
});
// var EventRoute = Backbone.Router.extend({
//   routes: {
//     "":                 "home",    
//     "/#event":     "event" 
//   },

//   home: function() {
//   	console.log('home page');
//   },

//   event: function(query, page) {
//     console.log('event details page');
//   }

// });


// var eventRoute = new EventRoute();

// Backbone.history.start();
 




