console.log('It is time to rumble.');

$(document).ready(function(){
	
	router = new MainRouter();
	Backbone.history.start();

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
