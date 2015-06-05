(function(win, $) {
	var MediaPoll = {
		listEL: null,
		overlayEL: null,
		lightboxLoaded: false,
		answerText: '',
		pollId: '',
		cookieName: '',
		cookieExpireHours: 4, //hours
		init: function() {
			this.listEL = $('#media-poll-list');
			this.overlayEL = $('#media-poll-message');
			this.pollId = this.listEL.attr('data-poll-id');
			this.cookieName = 'mpoll-' + this.pollId;

			if(!win.ajaxurl) {
				win.ajaxurl = '/wp-admin/admin-ajax.php';
			}

			//del old cookie
			CManager.erase('media-poll-' + this.pollId);

			if(this.listEL.length > 0) {
				this.bindEvents();
			}
		},
		createLightbox: function() {
			var _self = this,
				div = $('<div></div>', {
					'id': 'mp-lightbox'
				});
			div.appendTo('body');
			$('#media-poll-message').appendTo(div);
		 	$('#mp-lightbox').on('click.lbClose', function(e) {
				//e.stopPropagation();
				_self.hideOverlay();
			 });
			this.overlayEL.on('click', '.mp-overlay', function(e) {
				e.stopPropagation();
				return;
			});
			this.overlayEL.on('click.mpClose','.mp-close', function(e) {
				e.stopPropagation();
				_self.hideOverlay();
			});
			this.lightboxLoaded = true;
		},
		hideOverlay: function() {
			$('#mp-lightbox').removeClass('show');
			$('.mp-overlay').removeClass('show');
		},
		showOverlay: function(type) {
			// types: 'thanks', 'sorry', 'poll-closed'
			var classname = '.'+type,
				msg = $('.mp-overlay').filter(classname);

			this.hideOverlay();

			if(!this.lightboxLoaded) {
				this.createLightbox();
			}

			msg.addClass('show');
			$('#mp-lightbox').addClass('show');
		},
		getScreenTopOffset: function () {
			return (screen.height / 2) - 135;
		},
		getScreenLeftOffset: function() {
			return (screen.width / 2) - 250;
		},
		addHours: function(h) {
			var d = new Date();
			d.setTime(d.getTime() + (h * 60 * 60 * 1000));
			return d;
		},
		bindEvents: function() {
			var _self = this;
			$(this.listEL).on('click', '.vote', function(e) {
				var el = $(e.target),
					cookieVal = CManager.read(_self.cookieName);

				//kill poll hack
				_self.showOverlay('poll-closed');
				return false
				//end poll hack

				// e.preventDefault();
				e.stopPropagation();

				if(cookieVal && new Date() < new Date(cookieVal)) {
					_self.showOverlay('sorry');
					return false;
				}

				$.post(ajaxurl, {
					'action': 'media_poll_vote',
					'poll_id': _self.pollId,
					'post_id': _self.listEL.attr('data-post-id'),
					'answer_id': el.attr('data-answer-id')
				}).done(function(res) {
					if(res.status && res.status === 'success') {
						var date = _self.addHours(_self.cookieExpireHours),
								expire = _self.cookieExpireHours / 24;
							CManager.create(_self.cookieName, date.toString(), expire);
							_self.showOverlay('thanks');
							_self.answerText = el.closest('.answer').find('h3').text();
					} else if(parseInt(res) === 0) {
						alert('Please log out to vote');
					} else {
						//show thank you but log error.
						_self.showOverlay('thanks');
						console.log(res.message)
					}
				}).fail(function(e){
					console.log('mp:',e);
				});
			});

			this.overlayEL.on('click', '.icon', function(e) {
				var el = $(e.target),
					type = el.hasClass('facebook') ? 'facebook' : 'twitter',
					name = (_self.answerText) ? _self.answerText + ' for ' : '',
					desc = 'I just voted for ' + name + 'the 2015 #XXLFreshmen 10th Spot.  Vote here:',
					twttrUrl = win.location.href,
					hashtags = '10thSpot',
					href = '';

				e.preventDefault();
				e.stopPropagation();

				if(type === 'facebook') {
					var title = $('#content_main h1').text(),
						host = 'http://www.facebook.com/sharer.php/',
						link = win.location.href,
						tb = 'trackback='+type;

					href = host+'?u='+encodeURIComponent(link)+'?='+tb+'&t='+encodeURIComponent(title);
				}
				else if(type === 'twitter') {
					href = 'https://twitter.com/intent/tweet?',
						obj = {
							'text': encodeURIComponent(desc),
							'url': encodeURIComponent(twttrUrl),
							'hashtags': encodeURIComponent(hashtags)
							//'via': encodeURIComponent(),
						}
					for(var prop in obj) {
						var str = prop + '=' + obj[prop] + '&';
						href += str;
					}
				}
				window.open(href, '', 'width=500,height=270,top=' + _self.getScreenTopOffset() + ',left=' + _self.getScreenLeftOffset());
			});
		}
	}

	var CManager = {
		/**
		 * Creates a cookie
		 * @name create
		 * @param {String} name		The cookie name
		 * @param {*} value			The cookie data
		 * @param {Number} hours 	Lifespan of the cookie in hours
		 */
		create: function (name, value, days) {
			var expires = "";

			if (days) {
				var date = new Date();

				date.setTime(date.getTime() + (days * 86400000)); /* days * 60 * 60 * 1000*/

				expires = "; expires=" + date.toGMTString();
			}

			document.cookie = name + "=" + value + expires + "; path=/";
		},

		/**
		 * Reads a cookie
		 * @name read
		 * @param {String} name		The cookie name
		 * @returns {*} value
		 */
		read: function (name) {
			var cookieName = name + "=",
				chuncks = document.cookie.split(';'),
				count = chuncks.length,
				i,
				c,
				l;

			for (i = 0; i < count; i++) {
				c = chuncks[i];

				while (c.charAt(0) == ' ') c = c.substring(1, (l = c.length));

				if (c.indexOf(cookieName) == 0) return c.substring(cookieName.length, l);
			}

			return null;
		},

		/**
		 * Deletes a cookie
		 * @name erase
		 * @param {String} name		The cookie name
		 */
		erase: function (name) {
			this.create(name, "", -1);
		}
	}


	$(document).ready(function() {
		MediaPoll.init();
	});
})(window, jQuery);