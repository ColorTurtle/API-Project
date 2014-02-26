var EtsyItems = Backbone.Model.extend({
	idAttribute: '_.id'
});

var EtsyItemsCollection = Backbone.Collection.extend({
	model: EtsyItems,
// you can put in the etsy api here so that the items will be run through the constructor
// Use the parse function in backbone to grab just the results
// Be sure to append '=?' to the query string to signal that you are using jsonp

	url: 'https://api.etsy.com/v2/listings/active.js?api_key=6ytsbcyaiiafvg560dnhbd8k&includes=Images&callback=?',   
																									// ?callback=etsyResults&fields=title,price,description,listing_id,url&includes=Images&api_key=6ytsbcyaiiafvg560dnhbd8k=?',
		  
	parse: function(response) {
    return response.results;
  }
});

var PageView = Backbone.Model.extend({})