var PersonView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	events: {
		"click .info":  "loadInfo"
	},
	render: function() {
		var data = this.model.get('person');
		var content = this.model.toJSON();
		var self = this;

		$.get('templates/person.html', function (data) {
			var template = Handlebars.compile(data);
			var html    = template(content);
			$(self.el).append(html);
		}, 'html');

	},
	loadInfo: function(e){
		alert($(e.target).text());
	}
});

