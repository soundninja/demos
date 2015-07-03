jQuery(function($) {
	var $pageSidebar = $('.page-sidebar');

	$('.menu-close-icon').click(function() {
		$pageSidebar.removeClass('menu-open');
	});

	$('.menu-show-icon').click(function() {
		$pageSidebar.addClass('menu-open');
	});
});