/*
	Version: 1.0
	Author: Sakwa Design Studio
*/
jQuery(document).ready(function(){
	$('.lpp_wrapper').css('display','block');
	var loudPostsPlayer = $('.lpp_carousel');
		loudPostsPlayer.owlCarousel({
			items:1,
			itemsDesktop: [1000,1],
			itemsDesktopSmall: [900,1],
			itemsTablet:[600,1],
			itemsMobile:1,
			paginationSpeed:600
		});

	$('.lpp_previous_nav').click(function(){
		loudPostsPlayer.trigger('owl.prev');
	});

	$('.lpp_next_nav').click(function(){
		loudPostsPlayer.trigger('owl.next');
	});

});