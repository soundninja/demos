/*
	Loud Slider
	Version 1.0
	Sakwa Design Studio
*/
jQuery(document).ready(function(){
	$('.loud_slider_item_pic img').css('display','block');
	var loudSlider =  $('.loud_slider');
		loudSlider.owlCarousel({
			navigation:false,
			slideSpeed:300,
			stopOnHover:true,

			items:1,
			itemsDesktop: [1000,1],
			itemsDesktopSmall: [900,1],
			itemsTablet:[600,1],
			itemsMobile:1,
		});
	
	$('.loud_slider_previous').click(function(){
		loudSlider.trigger('owl.prev');
	})

	$('.loud_slider_next').click(function(){
		loudSlider.trigger('owl.next');	
	})

	//auto play
	loudSlider.trigger('owl.play',7500);

});