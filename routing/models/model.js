var EventModel = Backbone.Model.extend({});

$.get("models/events.json",function(response){
	window.eventModel1  = new EventModel(response);
});
