/*!
 * [CBS] Sharing Floater
 *		Floating your "SHARE THIS NOW" window like it nobody's business!
 *
 *	Version 1.0.2
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Using:
 *		jQuery(function($) {
 *			$('body').sharing_floater({
 *				header_text: 'CBS Local New York',
 *				timer_appear: 100
 *			});
 *		});
 *
 */

(function($) {
	$.sharing_floater = function(el, options) {
		var base = this;
		var $container = null; //container block refference

		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;

		// Add a reverse reference to the DOM object
		base.$el.data("sharing_floater", base);

		base.init = function() {
			base.options = $.extend({},$.sharing_floater.defaultOptions, options);

			// Initialization code goes here

			if (base.options.html_title.length < 1) {
				base.options.html_title = $('meta[property="og:title"]').attr("content");
			}
			if (base.options.html_image.length < 1) {
				base.options.html_image = $('meta[property="og:image"]').attr("content");
			}
			if (base.options.html_description.length < 1) {
				base.options.html_description = $('meta[property="og:description"]').attr("content");
			}
			if (base.options.html_url.length < 1) {
				base.options.html_url = $('meta[property="og:url"]').attr("content");
			}

			if (base.options.html_description.length > 75) {
				base.options.html_description = (base.options.html_description).substring(0, 75) + '...';
			}
		};

		// Sample Function
		// base.functionName = function(paramaters){ /*code here*/ };

		base.add = function(paramaters){
			if (base.$container != null) return;

			var header = $('<div>')
				.addClass('sharing-floater-header')
				.css({
					'background-color': base.options.header_style_bg_color,
					'color': base.options.header_style_font_color,
					'font-size': '20px',
					'padding': '13px 10px',
					'text-align': 'center'
				})
				.html('Share <strong>' + base.options.header_text + '</strong> with your friends');

			var body = $('<div>').addClass('sharing-floater-body');

			if (base.options.html_image.length > 1) {
				var thumb = $('<img>')
					.addClass('sharing-floater-thumb')
					.attr('title', '')
					.attr('src', base.options.html_image)
					.css({
						'display': 'block',
						'float': 'left',
						'height': 'auto',
						'margin': '0 10px 10px 0',
						'max-height': '100px',
						'max-width': '100px',
						'width': 'auto'
					});
				body.append(thumb);
			}

			var title = $('<strong>')
				.html(base.options.html_title)
				.css({
					'display': 'block',
					'font-weight': 'bold',
					'margin': '0',
					'padding': '0',
					'text-align': 'left'
				});
			body.append(title);

			var text_for_url = base.options.html_url;
			if (text_for_url.length > 40) {
				text_for_url = text_for_url.substring(0, 40) + '...';
			}

			var url = $('<div>')
				.attr('href', base.options.html_url)
				.html(text_for_url)
				.css({
					'color': '#333',
					'display': 'block',
					'font-weight': 'normal',
					'margin': '0',
					'padding': '0',
					'text-align': 'left',
					'text-decoration': 'none'
				});
			body.append(url);

			var description = $('<p>')
				.html(base.options.html_description)
				.css({
					'font-weight': 'bold',
					'margin': '10px 0 0',
					'padding': '0',
					'text-align': 'left'
				});
			body.append(description);

			body.wrapInner('<div class="sharing-floater-body-wrapper" style="margin:20px auto 0;overflow:hidden;padding:0;width:77%;" />');

			// we need to include AddThis for the button
			if (typeof(addthis) === 'undefined') {
				var scriptElm = document.createElement('script');
				scriptElm.type = 'text/javascript';
				scriptElm.src = 'http://s7.addthis.com/js/300/addthis_widget.js#pubid=' + base.options.AddThis_id;
				document.body.appendChild(scriptElm);
			};

			var share_buttons = $('<div>').addClass('addthis_toolbox').attr('id', 'sharing_floater_addthis_toolbox');
			share_buttons.css({
				'margin': '5px auto 10px',
				'overflow': 'hidden',
				'width': '77%'
			});

			var share_buttons_facebook = $('<img/>')
				.addClass('addthis_toolbox')
				.attr({
					'alt': "Share on Facebook",
					'border': 0,
					'height': '34',
					'src': 'http://ajax.s3.amazonaws.com/bundles/sharing-floater/1.0.0/images/facebook.png',
					'width': '188'
				})
				.css({
					'overflow': 'hidden',
					'margin': '0 auto'
				});
			share_buttons_facebook = $('<a>').addClass('addthis_button_facebook').append(share_buttons_facebook);
			share_buttons.append(share_buttons_facebook);

			share_buttons.wrapInner('<div class="custom_images" />');

			var no_thanks = $('<div>')
				.addClass('sharing-floater-no-thanks')
				.append('<a href="#">No thanks</a>')
				.css({
					'color': '#486a9f',
					'margin': '0 0 20px',
					'text-decoration': 'underline'
				});

			var overlay_gradient = 'background:transparent;';
			overlay_gradient += 'background:-webkit-gradient(linear,left top,left bottom,color-stop(0%, transparent),color-stop(100%, #000));';
			overlay_gradient += 'background:-webkit-linear-gradient(top,transparent 0%,#000 100%);';
			overlay_gradient += 'background:-moz-linear-gradient(top,transparent 0%,#000 100%);';
			overlay_gradient += 'background:linear-gradient(top,transparent 0%,#000 100%);';

			base.$container = $('<div>')
				.attr('id', 'sharing-floater')
				.attr('style', overlay_gradient)
				.css({
					'bottom': '0',
					'color': '#000',
					'display': 'none',
					'font': 'normal 11px/130% Arial,sans-serif',
					'left': '0',
					'margin': '0',
					'padding': '0',
					'position': 'fixed',
					'width': '100%',
					'z-index': '99000'
				});

			var box_shadow = '-moz-box-shadow:0 0 15px 1px #000;-webkit-box-shadow:0 0 15px 1px #000;box-shadow:0 0 15px 1px #000;';

			(base.$container)
				.append(header)
				.append(body)
				.append(share_buttons)
				.append(no_thanks)
				.wrapInner('<div class="sharing-floater-box" style="background-color:#fff;' + box_shadow + 'margin:10px auto 80px;overflow:hidden;padding:0;width:520px;" />');

			(base.$el).append(base.$container);
		};

		base.show = function(paramaters) {
			if(!base.check_should_show()) return; //check if should show or skip

			base.add();

			if (base.$container != null) {
				setTimeout(function() {
					addthis.toolbox('#sharing_floater_addthis_toolbox');

					(base.$container).fadeIn('slow', function() {

						$('a, #sharing-floater').bind('click', base.click_hide);
						$('#sharing-floater').children().bind('click', function(e) {
							if (!$(this).parent().hasClass('sharing-floater-no-thanks')) {
								return false;
							}
						});

						if (base.options.timer_disappear > 0) {
							setTimeout(function() {
								base.hide();
							}, base.options.timer_disappear);
						}
					});
				}, base.options.timer_appear);
			}
		};

		base.hide = function(paramaters) {
			if (base.$container != null) {
				(base.$container).fadeOut('fast');
			}
		};

		base.click_hide = function(e) {
			if ($(this).parent().hasClass('sharing-floater-no-thanks')) {
				e.preventDefault();
				// Add a cookie to not bother for X amount of time
			}
			base.set_cookie_views(1);
			base.hide();

			$('a, div#sharing-floater').unbind('click', base.click_hide);
			$('#sharing-floater').children().unbind('click');
		};

		base.check_should_show = function() {
			var view_count = base.get_cookie_views(); //get cookie values

			if (typeof(view_count) === 'undefined' || (view_count*1) >= base.options.cookie_views) {
				return true;
			} else {
				base.set_cookie_views((view_count*1) + 1);
			}
		};

		base.get_cookie_views = function() {
			var i, key, value, cookies = document.cookie.split(";");
			for (i=0; i < cookies.length; i++) {
				key = cookies[i].substr(0,cookies[i].indexOf("="));
				value = cookies[i].substr(cookies[i].indexOf("=") + 1);
				key = key.replace(/^\s+|\s+$/g,"");
				if (key == "sharing_floater_view_count") return unescape(value);
			}
		}
		base.set_cookie_views = function(value) {
			if (base.options.cookie_expiration) {
				var expire_date = new Date();
				expire_date.setTime(expire_date.getTime()+(base.options.cookie_expiration*24*60*60*1000));
				var expires = "; expires="+expire_date.toGMTString();
			} else {
				var expires = "";
			}
			var path = '; path=/';

			document.cookie = "sharing_floater_view_count=" + escape(value) + expires + path;
		}

		// Run initializer
		base.init();
		base.show();
	};

	$.sharing_floater.defaultOptions = {
		header_text: 'This Site',
		header_style_bg_color: '#56a8e3',
		header_style_font_color: '#fff',

		html_title: '',
		html_image: '',
		html_description: '',
		html_url: '',

		timer_appear: 5000,
		timer_disappear: 0,
		timer_dontbother: 8, //in minutes

		AddThis_id: '',

		cookie_expiration: 3, //3 days
		cookie_views: 5
	};

	$.fn.sharing_floater = function(options) {
		return this.each(function(){
			(new $.sharing_floater(this, options));
		});
	}
})(jQuery);