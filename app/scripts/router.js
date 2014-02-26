var MainRouter = Backbone.Router.extend({
	routes: {
		"home"		: "homePage",
		"about"		: "aboutPage",
		"contact"	: "contactPage"

	},

	initialize: function(){
		console.log('Hey dude, A router was just born!');
	},

	homePage: function(name){

	},

	aboutPage: function(){
		$('.page-copy').html('');
		new AboutPageView();
		console.log('testing')
	}

})