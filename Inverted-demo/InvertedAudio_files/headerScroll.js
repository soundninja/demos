// Tiny script to make the header stick at the top when scrolling.

$(document).ready(function() {
	var adHeight = $('div.main_ad_container').outerHeight(true);
	var $header = $('header.hlarge');
	var $sectionContent = $('#section-content');
	
	$(window).on('scroll', function() {
		var currentPosition = $(this).scrollTop();		
		if (currentPosition > adHeight) {
			$header.css({ position : "fixed", top : 0 });
			$sectionContent.css({ marginTop : 106 });
		} else {
			$header.css({ position : "static", top : "auto" });
			$sectionContent.css({ marginTop : "auto" });
		}
	});
});