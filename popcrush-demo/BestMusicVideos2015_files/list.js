

jQuery(document).ready(function($){

	$.fn.playlistBuyButton = function(options){
		if (!$(this).length) {
			return this;
		}
		options = $.extend({}, options);
		$(this).bind('click.playlistBuyButton', function(e){
			var buyBox  = $('#list_playlist_buy_button'),
				target = $(this),
				itunes = target.siblings('.list_playlist_buy_button_itunes').attr('href'),
				amazon = target.siblings('.list_playlist_buy_button_amazon').attr('href');
			if(itunes != '') {
				buyBox.find('.itunes_buy_wrap a').attr('href', itunes).removeAttr('style');
				buyBox.find('.itunes_buy_wrap p').css({display:'none'});
			} else {
				buyBox.find('.itunes_buy_wrap a').css({display:'none'});
				buyBox.find('.itunes_buy_wrap p').removeAttr('style');
			}
			if(amazon != '') {
				buyBox.find('.amazon_buy_wrap a').attr('href', amazon).removeAttr('style');
				buyBox.find('.amazon_buy_wrap p').css({display:'none'});
			} else {
				buyBox.find('.amazon_buy_wrap a').css({display:'none'});
				buyBox.find('.amazon_buy_wrap p').removeAttr('style');
			}
		});
		return this;
	};

	$('.list_playlist_buy_button').playlistBuyButton().fancybox({
		padding     : '20px',
		easingIn    : 'easeOutCubic',
		easingOut   : 'easeOutCubic',
		overlayColor: '#000'
	});
});