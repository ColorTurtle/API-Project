var MainRouter = Backbone.Router.extend({
	routes: {
		""								: "homePage",
		"about"						: "aboutPage",
		"contact"					: "contactPage",
		"shops"						: "showShops",
		"shops/:keyword"	: "showShops",
		"shops/:keyword"	: "pushData",
		"items/:itemId" 	: "mainView"
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

		console.log(this.items)
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
		$('.item-list').html('');
		$('.js-spotlight-box').html('');
		// $('.item-list').`html(<img src="images/ajax-loader.gif">);
		if (keyword) {
			this.items.url = "https://api.etsy.com/v2/listings/active.js?keywords="+ keyword +"&includes=Images&api_key=kr9rjq7dc9c24jv6fccq2hus&callback=?"			
		}
		this.items.fetch();

		console.log('Should have sent some data to tiny server')
	},

	pushData: function(keyword){
		if (keyword) {
			this.items.url = "https://api.etsy.com/v2/listings/active.js?keywords="+ keyword +"&includes=Images&api_key=kr9rjq7dc9c24jv6fccq2hus&callback=?"			
		}
		this.items.fetch();

		var rawData = this.items;
		console.log(rawData)

		savedData = new PricesCollection(rawData);

		// var pricesArray = savedData.map(function(){
		// 	return {listing_id: this.items.get(listing_id),
		// 					price: this.items.get(price)
		// 					}
		// });

		// console.log(pricesArray);

		// savedData.save();
		
	},

	mainView: function(itemId){
		console.log('Should be seeing the larger view', this.items)
		// ************   Not Rendering
		var item = this.items.find(function(item){
    console.log('Do you see it?')
      return item.get('listing_id') == itemId;
    });
    new MainView({model: item})

	}




});

