(function ($, root, undefined) {
	
	$(function () {
		'use strict';
		$('.grid article:nth-child(5n)').not('.grid-dates article, #by-artist .grid article, #release-also article').css({'margin-right': '0px'});
		
		$('#by-artist .grid-artists article:nth-child(6n), #release-also article:last').css({'margin-right': '0px'});
		
		$('#related-artists article:eq(1)').css({'margin':'0px 35px'});
		
		$('.release-links a:first').css({'padding-left': '0px'});
		
		$('.release-links a:last').css({'background': 'none'});
		
		//$('.category .news-wrap article:last, .home .news-wrap article:last').css({'margin-right': '0px'});
		$('.category .content article.content-posts:gt(1), .home .content article.content-posts:gt(1)').addClass('bottom-articles');
		
		$(window).load(function(){
			//$('.paged.category .news-wrap:first article, .paged.home .news-wrap:first article').css({'padding-top':'0px'});
		});
		
		$('.grid-dates article:nth-child(3n)').css({'margin-right': '0px'});
		
		$('.single-category-post iframe').attr({'width': '680', 'height': '383'}).wrap('<div class="iframe-wrap"></div>');
		
		$('.sidebar .date-list article:last').addClass('last-item');
		
		
		
		$('#social-media-menu a').attr('target', '_blank');
		
		$('.menu-item-76 a').attr('target', '_blank');
		
		
		newsPostings();
		middleAlignTitles();
		popup();
		gallery();
	});	
	
})(jQuery, this);

var j = jQuery.noConflict();






function popup(){
	
/* 	j('#signedup').click(function(){
		localStorage.setItem('signupAlreadySignedUp', 'fcSignup_2015_02');
		j.fancybox.close();
	});
	j('#nottoday').click(function(){
		sessionStorage.setItem('singupNotToday', 'fcSignup_2015_02')
		j.fancybox.close();
	}); */
	
	j('#signuppopup').submit(function(){
		localStorage.setItem('signupAlreadySignedUp', 'fcSignup_2015_02');
		j.fancybox.close();
	});
	j('#popup .close-btn').click(function(){
		sessionStorage.setItem('singupNotToday', 'fcSignup_2015_02')
		j.fancybox.close();
	});
	
	j(window).load(function(){
		
		if( localStorage.signupAlreadySignedUp != 'fcSignup_2015_02' ){
			if( sessionStorage.singupNotToday != 'fcSignup_2015_02' ){
				j('a#press-popup').fancybox({
					'padding': 0,
					'showNavArrows': false,
					'centerOnScroll': true,
					'hideOnOverlayClick': false,
					'width': '600',
					'showCloseButton': false,
					'overlayColor': '#000',
					'overlayOpacity': 0.3,
					'type': 'inline'
				}).trigger('click');
			}
		}
		
	});
	
	//localStorage.clear();
	
	
}

function gallery(){
	j('.gallery .fancybox').fancybox({
		'padding': 0,
		'showNavArrows': true,
		'centerOnScroll': true,
		'showCloseButton': false
	});
}









function newsPostings(){
	var divs = j(".archive.category .content article, .home .content article").not('.first-post');
	for(var i = 0; i < divs.length; i+=2) {
	  divs.slice(i, i+2).wrapAll("<div class='news-wrap'></div>");
	}
	j(window).load(function(){
		j('.category .news-wrap article:odd, .home .news-wrap article:odd').css({'margin-right': '0px'});
	});
}

function middleAlignTitles(){
	j('.artist-name h3').each(function(){
		var h = j(this).height() / 2;
		var s = j(this).find('span').height() / 2;
		var a = h - s;
		j(this).find('span').css({'padding-top': a});
	});
}

function releaseSorter(sorted){
	j('.release-block.active').slideUp(350, function(){
		j(sorted).slideDown(350).addClass('active');
	}).removeClass('active');
	j('.pagination.active').fadeOut(350, function(){
		//j('.pagination[rel="'+sorted+'"]').fadeIn(350).addClass('active');
	}).removeClass('active');
}

function releasesArtists(){
	//WRAP CRON ITEMS IN CONTAINERS
	j('#pagination-artist').fadeIn(100);
	var divs = j("#by-artist section");
	for(var i = 0; i < divs.length; i+=4) {
	  divs.slice(i, i+4).wrapAll("<div class='artist-wrap'></div>");
	}
	j(window).load(function(){
		//CLASSES WRAPS FOR CONTAINER WRAPPERS
		j('.artist-wrap:first').addClass('active').fadeIn(0);
		
		//PAGINATION UNITS ADDED TO SPAN ITEMS
		var crons = j('.artist-wrap');
		for (var i = 1; i <= crons.length; i++){
			j('#pagination-artist .numbers').append('<span class="items" rel="#artist-wrap-'+ i +'">' + i + '</span>');
		}
		//EACH CRON WRAP IS GIVEN AN INDEX
		j('.artist-wrap').each(function(i){
			j(this).attr({'id': 'artist-wrap-'+(i + 1)});
		});
		//CLASS CLASSES TO SPAN ITEMS FOR PAGINATION
		if(j('#pagination-artist span').size() > 1){
			j('#pagination-artist span.items:first').addClass('active first');
			j('#pagination-artist span.items:last').addClass('last');	
		}else{
			j('#pagination-artist').remove();
		}
		//NEXT CLICK ON PAGINATION
		j('#pagination-artist a[rel="next"]').click(function(){
			if(!j('#pagination-artist span.active').hasClass('last')){
				var activetab = j('#pagination-artist span.active').next().attr('rel');
				//console.log(activetab);
				j('#pagination-artist span.active').removeClass('active').next().addClass('active');
				j('.artist-wrap.active').removeClass('active').fadeOut(350, function(){
					j(activetab).fadeIn(350).addClass('active');
				});
			}
		});
		//PREV CLICK ON PAGINATION
		j('#pagination-artist a[rel="prev"]').click(function(){
			if(!j('#pagination-artist span.active').hasClass('first')){
				var activetab = j('#pagination-artist span.active').prev().attr('rel');
				//console.log(activetab);
				j('#pagination-artist span.active').removeClass('active').prev().addClass('active');
				j('.artist-wrap.active').removeClass('active').fadeOut(350, function(){
					j(activetab).fadeIn(350).addClass('active');
				});
			}
		});
	});
}

function releaseCronological(){
	//WRAP CRON ITEMS IN CONTAINERS
	var divs = j("#by-cat article");
	for(var i = 0; i < divs.length; i+=25) {
	  divs.slice(i, i+25).wrapAll("<div class='cron-wrap'></div>");
	}
	j(window).load(function(){
		//CLASSES WRAPS FOR CONTAINER WRAPPERS
		j('.cron-wrap:first').addClass('active').fadeIn(0);
		
		//PAGINATION UNITS ADDED TO SPAN ITEMS
		var crons = j('.cron-wrap');
		for (var i = 1; i <= crons.length; i++){
			j('#pagination-cron .numbers').append('<span class="items" rel="#cron-wrap-'+ i +'">' + i + '</span>');
		}
		//EACH CRON WRAP IS GIVEN AN INDEX
		j('.cron-wrap').each(function(i){
			j(this).attr({'id': 'cron-wrap-'+(i + 1)});
		});
		//CLASS CLASSES TO SPAN ITEMS FOR PAGINATION
		if(j('#pagination-cron span').size() > 1){
			j('#pagination-cron span.items:first').addClass('active first');
			j('#pagination-cron span.items:last').addClass('last');	
		}else{
			j('#pagination-cron').remove();
		}
		//NEXT CLICK ON PAGINATION
		j('#pagination-cron a[rel="next"]').click(function(){
			if(!j('#pagination-cron span.active').hasClass('last')){
				var activetab = j('#pagination-cron span.active').next().attr('rel');
				//console.log(activetab);
				j('#pagination-cron span.active').removeClass('active').next().addClass('active');
				j('.cron-wrap.active').removeClass('active').fadeOut(350, function(){
					j(activetab).fadeIn(350).addClass('active');
				});
			}
		});
		//PREV CLICK ON PAGINATION
		j('#pagination-cron a[rel="prev"]').click(function(){
			if(!j('#pagination-cron span.active').hasClass('first')){
				var activetab = j('#pagination-cron span.active').prev().attr('rel');
				//console.log(activetab);
				j('#pagination-cron span.active').removeClass('active').prev().addClass('active');
				j('.cron-wrap.active').removeClass('active').fadeOut(350, function(){
					j(activetab).fadeIn(350).addClass('active');
				});
			}
		});
	});
}

// MOBILE SCRIPTS
function navDropper(){
	j('#mob-menu').slideToggle(1250, 'easeOutBounce');
}

function dateSorter(sorted){
	//console.log(sorted);
	if(sorted == 'all'){
		j('.grid-dates article').fadeIn();
	}else{
		j('.grid-dates article').stop(true, true).fadeOut(350, function(){
			j('.grid-dates article[rel*="'+sorted+'"]').stop(true, true).fadeIn(350);
		});
	}
}





