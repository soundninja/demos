jQuery(function($) {
	// show-hide sponsored button
	var $header_sponsored_ad = $('#page-header.page-header-type-modular #component-sponsored-ad');
	if ($header_sponsored_ad.length) {
		setTimeout(function() {
			cbs_ads.showhide_sponsored($header_sponsored_ad.find('.sponsored-by'), function($object) {

				var negative_width = $header_sponsored_ad.width() * 1 + 1;
				var $sibling_container = null;

				if ($('#page-header #page-header-clear-right #component-sponsored-ad').length == 1) {
					// for when SponsoredAd is in CLear-Right position
					$sibling_container = $('#page-header .header-row-top, #page-header .header-row-inner');
				}
				else if ($('#page-header #page-header-tall-right #component-sponsored-ad').length == 1) {
					// for when SponsoredAd is in Tell-Right position
					$sibling_container = $('#page-header .header-row-middle-and-bottom');
				}

				if ($sibling_container !== null) {
					$sibling_container.animate({
						width: $sibling_container.width() - negative_width
					}, 400);

					setTimeout(function(){
						$header_sponsored_ad.animate({
							width: "toggle"
						}, 370);
					}, 30);
				}
			});
		}, 3000);
	}

	$('a.listen-live-logo, a.listen-live-text').on('click', function(e) {
		if($(this).attr('href') !== '#listen-live') { return; }
		e.preventDefault();

		if ($(this).closest('div#cbs-site-ribbon').length) {
			cbs_track_event('Listen Live Play', location.href, 'Ribbon');
		} else {
			cbs_track_event('Listen Live Play', location.href, 'Button');
		}

		$.featherlight($("#listen-live-wrapper").html(), { 
			afterOpen: function(event) {

				var $actual_ad = this.$instance.find('#ad_listenlive');

				if ($actual_ad.length && $actual_ad.hasClass('ad_gpt')) {
					
					$original_ad = $('#listen-live-wrapper .sponsor .cbs-ad-unit');
					$original_ad.attr('id', 'ad_listenlive_skewed');
					cbs_run_ad_listenlive();
					setTimeout(function() {
						$original_ad.attr('id', 'ad_listenlive');
					}, 500);

				} else {
					cbs_refresh_ad($('.listen-live-sponsor'));
				}

				this.$instance.find('.featured-posts').owlCarousel( {
					singleItem: false,
					items: 3,
					navigation: ($('body').hasClass('mobile')) ? false : true,
					pagination: true,
					responsive: false,
					rewindNav: false,
					scrollPerPage: true,
					slideSpeed: 200,
					theme: 'carousel-with-top-arrows',
					afterInit: function(e) {
						e.addClass('full');
					},
					beforeUpdate: function(e) {
						e.removeClass('full');
					},
					afterUpdate: function(e) {
						e.addClass('full');
					}
				});
			}
		});

		$('.featherlight-content .listen-live .stations .list-item a').on('click', function(e) {
			var title = $(this).find('.title-wrapper .title').html();
			setTimeout(function() {
				cbs_track_event('Listen Live Play', location.href, title);
			}, 1000);
		});

	});
});//dom ready
;
function openPlayerWin(link) {
	window.open(link, 'podcast_player', 'height=365, width=410');
};
