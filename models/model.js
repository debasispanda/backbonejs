var EventModel = Backbone.Model.extend({});

$.get("models/events.json",function(response){
	var eventModel1  = new EventModel(response);
});
