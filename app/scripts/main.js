console.log('It is time to rumble.');

$(document).ready(function(){
	router = new MainRouter();
	Backbone.history.start();

});

$.ajax({

	dataType: 'jsonp',

  url:'https://openapi.etsy.com/v2/listings/active.js?callback=etsyResults&fields=title,price,description,listing_id,url&includes=Images&api_key=6ytsbcyaiiafvg560dnhbd8k',

	data: '',

	success: function(queryResults){

		productItems = new EtsyItemsCollection(queryResults.results);
		var itemCount = 0;

		productItems.each(function(item){
			new ListView({model: item});
		});

	},

	error: function (msg) {
    console.log('Uh-oh. Someting went wrong:', msg.statusText);
  }


});

$('.js-homepage-link').on('click', function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active')
})

$('.js-aboutpage-link').on('click', function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active')
})

$('.js-contactpage-link').on('click', function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active')
})
