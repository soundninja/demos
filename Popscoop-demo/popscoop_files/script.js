$(document).ready(function() {
	$('.sidebar-nav>li:last-child').addClass('bot');
	$('.sidebar-nav>li:first-child').addClass('top');
	$('.hot-news ul li:last-child').css("border","none");
	$('.twitter ul li:last-child').css("border","none");
	
	$('.slider').slides({
		effect: 'fade',
		fadeSpeed: 500,
		fadeEasing: 'easeInOutQuad',
		play: 5000,
		pause: 6000,
		hoverPause: true
	});
});