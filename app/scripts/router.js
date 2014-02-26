var MainRouter = Backbone.Router.extend({
	routes: {
		"home"		: "homePage",
		"about"		: "aboutPage",
		"contact"	: "contactPage"

	},

	initialize: function(){
		console.log('Hey dude, A router was just born!');
	},

	homePage: function(){
		$('.page-copy').html('');
		new HomePageView();
		console.log('testing')


	},

	aboutPage: function(){
		$('.page-copy').html('');
		new AboutPageView();
		console.log('testing');

	}, 

	contactPage: function(){
		$('.page-copy').html('');
		new ContactPageView();
		console.log('testing')
	}


})