var EtsyItems = Backbone.Model.extend({
	idAttribute: '_.id'
});

var EtsyItemsCollection = Backbone.Collection.extend({
	model: EtsyItems,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/pricey-words'
});

var PageView = Backbone.Model.extend({})