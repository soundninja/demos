jQuery(document).ready(function($) {

	"use strict";

	// Tabs

	//When page loads...
	$('.tabs-wrapper').each(function() {
		$(this).find(".tab_content").hide(); //Hide all content
		$(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(this).find(".tab_content:first").show(); //Show first tab content
	});
	
	//On Click Event
	$("ul.tabs li").click(function(e) {
		$(this).parents('.tabs-wrapper').find("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(this).parents('.tabs-wrapper').find(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(this).parents('.tabs-wrapper').find(activeTab).fadeIn(); //Fade in the active ID content
		
		e.preventDefault();
	});
	
	$("ul.tabs li a").click(function(e) {
		e.preventDefault();
	})
	
	// Flex Slider
    jQuery('.flexslider').flexslider({
		animation: "slide",
		controlNav: false,
	});
	
	// Google Plus Button
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	
	// fitvids
	$(document).ready(function(){
		// Target your .container, .wrapper, .post, etc.
		$("#wrapper").fitVids();
	});
	
	/*** Gallery ***/
    jQuery('.post, .page').each(function(i, el){
    	var $post     = $(this),
    	    $entry    = $post.find('> .post-entry'),
    	    groupName = 'group-';

    	// normal image in entry
    	groupName += i;
    	$entry.find('a > img').parent().colorbox({rel: groupName});

    	if($post.hasClass('single')){
    		// not full
    		$post.find('> .post-img').find('a > img').parent().colorbox({rel: groupName});
    		// full width
    		$('.post-full-heading').find('> .post-img').find('a > img').parent().colorbox({rel: groupName});
    		
    		// cassia gallery
    		$('.post-full-heading').find('> .gallery li:not(.clone)').find('a > img').parent().colorbox({rel: 'cassia-g'});
    	}

    	// wp gallery in entry
    	$entry.find('.gallery').each(function(i, el){
    		groupName += i;
    		$(el).find('a > img').parent().colorbox({rel: groupName});
    	});

    	// cassia gallery
    	$post.find('> .gallery li:not(.clone)').find('a > img').parent().colorbox({rel: 'cassia-g-' + i});

    });
	
	// Mobile menu
	$('#navigation ul.menu').mobileMenu({
		defaultText: 'Navigation',
		className: 'mobile-nav',
		subMenuDash: '&ndash;'
	});
	$('#navigation2 ul.menu').mobileMenu({
		defaultText: 'Navigation',
		className: 'mobile-nav',
		subMenuDash: '&ndash;'
	});
	
});