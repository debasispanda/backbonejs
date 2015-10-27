var BView = Backbone.View.extend({
	initialize: function(){
		var self = this;
		this.getData();
		$.ajax({
			method: 'GET',
			url: 'templates/user-details.html',
			async : false,
			success: function(d){
				self.template = Handlebars.compile(d);
			}
		});
		this.model.on("change",this.render,this);
	},
	el: 'body',
	events: {
		'change .selectuser': 'getData'
	},
	render: function(){
		this.$el.find('#backbone-view').html(this.template(this.model.toJSON()));
	},
	getData: function(){
		this.model.fetch();	
	}
});

var userView = new BView({model: new BModel()});