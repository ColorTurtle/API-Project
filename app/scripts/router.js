var MainRouter = Backbone.Router.extend({
	routes: {
		"home"		: "homePage",
		"about"		: "aboutPage",
		"contact"	: "contactPage",
		"shops"		: "showShops"
// show is an eample from class
	},

	initialize: function(){
		console.log('Hey dude, A router was just born!');
		// this is used to render what is fetched
		// in the 'showShops'
		this.items = new EtsyItemsCollection;
		
		this.items.on('add', function(item){
				new ListView({model: item})
		})

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
	}, 

	showShops: function(keyword){
		console.log('showShops is being called by the router')
		// if (keyword) {
			// this.item.url = "https://api.etsy.com/v2/listings/active.js?keywords="+ keyword +"&includes=Images&api_key=kr9rjq7dc9c24jv6fccq2hus&callback=?"			
		// }
		this.items.fetch();
		// cant loop over items here b/c js will
		// try to loop before the items are even returned

	}


});

var ItemView = Backbone.View.extend({

	initialize: function(){
		$('.item-list').append(this.el);

		this.render()
	},

	render: function(){
		this.$el.html(this.model.get('shop_name'))
	}
})

