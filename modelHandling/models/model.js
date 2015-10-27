var BModel = Backbone.Model.extend({
	url: function(){
		var user = $('.selectuser').val();
		return 'data/'+ user +'.json';
	}
});
