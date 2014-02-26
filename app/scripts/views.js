var AboutPageView = Backbone.View.extend({
	
	className: 'jumbotron',

	aboutTemplate: _.template($('#about-page-template').text()),
	
	initialize: function(){
		console.log('You at the About Page');
		$('.page-copy').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.aboutTemplate());
	}

});

var ListView = Backbone.View.extend({
	tagName: 'a',

	className: 'etsy-item',

	initialize: function(){
		this.setHref();
		this.render(),
		$('.item-list').html( this.el )
	}, 

	renderedTemplate: _.template($('#etsy-item-template').text()),

	render: function(){
		this.$el.html(this.renderedTemplate(this.model));
	},

	setHref: function(){
		var id = this.model.get('listing_id');
		var link = '#/items/' + id;
		this.$el.attr({href: link});
	}

});
