jQuery(document).ready(function($){

	var bgSkinWidth = function(){
		var win_width = $(window).width();
		var wrap_width = $('.site-content').width();
		var bg_skin_width = (win_width - wrap_width) / 2;
		$('.background-skin').width(bg_skin_width);
	}

	bgSkinWidth();

	$(window).resize(function(){
		bgSkinWidth();
	});


});