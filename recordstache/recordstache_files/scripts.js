var scrolled = false;
var distance = 187;
$(window).scroll(function() {
	if (distance < $(window).scrollTop() && !scrolled) {
		$('.navigation').css('position', 'fixed');
		$('.header').css('margin-top', '48px');
		$('.fade').css('opacity', '1');
		scrolled = true;
	}
	if (distance > $(window).scrollTop() && scrolled) {
		$('.navigation').css('position', 'relative');
		$('.header').css('margin-top', '0');
		$('.fade').css('opacity', '0');
		scrolled = false;
	}
});
$(window).resize(function() {
	$('.navigation').css('padding-bottom', '0');
	if  ($('.insta-box').css('display') == 'block') {
	$.getJSON('https://api.instagram.com/v1/users/255890786/media/recent?count=1&amp;client_id=dfc60700d1884413bc7ca303255ecbc3&amp;callback=?', function(data) {
		var instaImg = (data.data[0].images.low_resolution.url);
		$('#insta-img').attr('src', instaImg);
	});
}
});
var clicked = false;
var timer = null;
var curr = ('#slide' + 0);
var prev = ('#slide' + 2);
var next = ('#slide' + 1);
var slideCount = 0;
var linkID = 0;
//slider function
function stacheSlider() {
	$(curr).css('top', '100%').css('z-index', '1');
	$(prev).css('top', '-100%').css('z-index', '0');
	$(next).css('top', '0').css('z-index', '1');
	$('#li' + slideCount).css('background-color', '#c5c5c5');
	if (slideCount < 2) { slideCount++ }
	else { slideCount = 0 }
	next = $(prev);
	prev = $(curr);
	curr = ('#slide' + slideCount);
	$('#li' + slideCount).css('background-color', '#ffffff');
}
//reverse slider function
function reverseSlider() {
	$('#li' + slideCount).css('background-color', '#c5c5c5');
	slideCount = linkID;
	$(curr).css('top', '-100%').css('z-index', '1');
	$(prev).css('top', '0').css('z-index', '1');
	$(next).css('top', '100%').css('z-index', '0');
	prev = $(next);
	next = $(curr);
	curr = ('#slide' + slideCount);
	$('#li' + slideCount).css('background-color', '#ffffff');
}
//slider function
function playSlider() {
	timer = setInterval (stacheSlider, 4000);
}
playSlider();
$(document).ready(function() {
	$('.slider').hover(function() {
		clearInterval(timer)
		}, function() {
		playSlider()
	});
// place instagram image

if  ($('.insta-box').css('display') == 'block') {
	$.getJSON('https://api.instagram.com/v1/users/255890786/media/recent?count=1&amp;client_id=dfc60700d1884413bc7ca303255ecbc3&amp;callback=?', function(data) {
		var instaImg = (data.data[0].images.low_resolution.url);
		$('#insta-img').attr('src', instaImg);
	});
}

$('.slider-nav a').click(function() {
	linkID = $(this).index();
	var nextID = $(next).attr('id');
	if ( linkID != slideCount ) {
		if ( nextID == ('slide' + linkID) ) {
			stacheSlider();
		}
		else {
			reverseSlider();
		}
	}
});	
$('.navigation').click(function() {
		if ( $('.navigation').css('overflow') == 'hidden' ) {
			if (!clicked) {
				$(this).css('padding-bottom', '110px');
				clicked = true;
			}
			else {
				$(this).css('padding-bottom', '0');
				clicked = false;
			}
		}
});
});