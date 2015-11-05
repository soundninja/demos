/*
	Name: Loud Multimedia Javascript
	Author: Sakwa Design Studio
	Description: Loud Multimedia jquery control
	version: 1.0
*/

var $ = jQuery.noConflict();

$(function(){
	$('.sds_lazy_load').css('display','block');

	var carouselSettings = {
			items : 3 ,//3 items above 1000px browser width
	      	itemsDesktop : [1000,3], //3 items between 1000px and 901px
	      	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	      	itemsTablet: [600,2], //2 items between 600 and 0
	      	itemsMobile : 1, // itemsMobile disabled - inherit from itemsTablet option
	      	lazyLoad:true,
	};

	var discographyCarousel = $('.discography_carousel');
	var artistNewsCarousel = $('.artist_news_carousel');
	var artistVideoCarousel = $('.artist_video_carousel');
	var popuplarArtistsCarousel = $('.popular_artists_carousel');
	var otherArtistAlbums = $('.other_albums_carousel');

	discographyCarousel.owlCarousel({
		items : 4 ,//3 items above 1000px browser width
	      	itemsDesktop : [1000,4], //3 items between 1000px and 901px
	      	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	      	itemsTablet: [600,2], //2 items between 600 and 0
	      	itemsMobile : 1, // itemsMobile disabled - inherit from itemsTablet option
	      	lazyLoad:true,
	});

	artistNewsCarousel.owlCarousel({
		items : 4 ,//3 items above 1000px browser width
	      	itemsDesktop : [1000,4], //3 items between 1000px and 901px
	      	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	      	itemsTablet: [600,2], //2 items between 600 and 0
	      	itemsMobile : 1, // itemsMobile disabled - inherit from itemsTablet option
	      	lazyLoad:true,
	});

	artistVideoCarousel.owlCarousel({
		items : 4 ,//3 items above 1000px browser width
	      	itemsDesktop : [1000,4], //3 items between 1000px and 901px
	      	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	      	itemsTablet: [600,2], //2 items between 600 and 0
	      	itemsMobile : 1, // itemsMobile disabled - inherit from itemsTablet option
	      	lazyLoad:true,
	});

	popuplarArtistsCarousel.owlCarousel({
		items : 4 ,//3 items above 1000px browser width
	      	itemsDesktop : [1000,4], //3 items between 1000px and 901px
	      	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	      	itemsTablet: [600,2], //2 items between 600 and 0
	      	itemsMobile : 1, // itemsMobile disabled - inherit from itemsTablet option
	      	lazyLoad:true,
	});

	otherArtistAlbums.owlCarousel({
		items : 4 ,//3 items above 1000px browser width
	      	itemsDesktop : [1000,4], //3 items between 1000px and 901px
	      	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	      	itemsTablet: [600,2], //2 items between 600 and 0
	      	itemsMobile : 1, // itemsMobile disabled - inherit from itemsTablet option
	      	lazyLoad:true,
	});

	//Discography
	$('.sds_disco_nav_left').click(function(){
		discographyCarousel.trigger('owl.prev');
	});

	$('.sds_disco_nav_right').click(function(){
		discographyCarousel.trigger('owl.next');
	});

	//Videography
	$('.sds_videography_nav_left').click(function(){
		artistVideoCarousel.trigger('owl.prev');
	});

	$('.sds_videography_nav_right').click(function(){
		artistVideoCarousel.trigger('owl.next');
	});

	//artist news
	$('.sds_artist_news_nav_left').click(function(){
		artistNewsCarousel.trigger('owl.prev');
	});

	$('.sds_artist_news_nav_right').click(function(){
		artistNewsCarousel.trigger('owl.next');
	});

	$('.sds_popular_artists_left_nav').click(function(){
		popuplarArtistsCarousel.trigger('owl.prev');
	});

	$('.sds_popular_artists_right_nav').click(function(){
		popuplarArtistsCarousel.trigger('owl.next');
	});

	//black dropdown
	$('.sds_dropdown_title').toggle(function(){
		$('.sds_black_dropdown_la').slideDown(700);
		$('.sds_black_dropdown_la').css('display','block');

	},function(){
		$('.sds_black_dropdown_la').slideUp(1200);
	});

	//other albums
	$('.sds_other_albums_left_nav').click(function(){
		otherArtistAlbums.trigger('owl.prev');
	})

	$('.sds_other_albums_right_nav').click(function(){
		otherArtistAlbums.trigger('owl.next');
	})

});

