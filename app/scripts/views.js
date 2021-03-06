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

var ContactPageView = Backbone.View.extend({
	
	className: 'jumbotron',

	aboutTemplate: _.template($('#contact-page-template').text()),
	
	initialize: function(){
		console.log('You at the Contact Page');
		$('.page-copy').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.aboutTemplate());
	}

});

var HomePageView = Backbone.View.extend({
	
	className: 'jumbotron',

	aboutTemplate: _.template($('#home-page-template').text()),
	
	initialize: function(){
		console.log('You at the Home Page');
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
		// $('.item-list').html('');
		this.setHref();
		this.render(),
		$('.item-list').append( this.el )
	}, 

	renderedTemplate: _.template($('#etsy-item-template').text()),

	render: function(){
		this.$el.html(this.renderedTemplate(this.model));
	},

	setHref: function(){
		console.log('setHref has been invoked')
		var id = this.model.get('listing_id');
		var link = '#/items/' + id;
		this.$el.attr({href: link});
	}

});

var MainView = Backbone.View.extend({
	className: "item-mainview",
	
	renderedTemplate: _.template($('#etsy-MainView-template').text()),

	initialize: function(){
		this.render();
		$('.js-spotlight-box').html( this.el )

	}, 

	render: function(){
		this.$el.html(this.renderedTemplate(this.model))
	}
});
