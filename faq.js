jQuery(function( $ ){

	$('.faq ul li .question').click( function(){
		
		$(this).parent().find('.answer').slideToggle("500");
		
		return false;
		
	});

});