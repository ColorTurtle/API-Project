console.log('It is time to rumble.');

$(document).ready(function(){
	router = new MainRouter();
	Backbone.history.start();

});

// $.ajax({

// 	datatype: 'jsonp',

//   // url: "https://openapi.etsy.com/v2/listings/active?q=lights&api_key=6ytsbcyaiiafvg560dnhbd8k",
  
// 	success: function(){
// 		productItems = new EtsyItemsCollection();
// 		productItems.each(function(){
// 			new ListView();
// 		}),

// 		Backbone.history.start()
// 	},


// });

