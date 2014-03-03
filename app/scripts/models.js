var EtsyItems = Backbone.Model.extend({
	idAttribute: '_.id'
});

var EtsyItemsCollection = Backbone.Collection.extend({
	model: EtsyItems,
// you can put in the etsy api here so that the items will be run through the constructor
// Use the parse function in backbone to grab just the results
// Be sure to append '=?' to the query string to signal that you are using jsonp

	url: 'https://openapi.etsy.com/v2/listings/active.js?api_key=6ytsbcyaiiafvg560dnhbd8k&fields=title,price,description,listing_id,url&includes=Images&callback=?',   
		  
	parse: function(response) {
    return response.results;
  }

});

// Create model for prices to be pushed to server
var EtsyPrices = Backbone.Model.extend({})

var PricesCollection = Backbone.Collection.extend({
	model: EtsyPrices,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/pricey-words',


});