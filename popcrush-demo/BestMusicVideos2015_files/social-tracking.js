// added wolstat 2-12-13
(function($){
	var gaPrimaryAccount = '';

	var socialTracker = {
		init: function() {
			var _self = this;
			_self.track();
		},
		track: function() {
			$(document).on('click', '.social_icons a', function( e ){
				var network = "",
					socialAction = "",
					targetUrl = document.URL;
				if ( $(e.target).hasClass( 'print' ) ) {
					network = "print"; socialAction = "Print";
				} else if ( $(e.target).hasClass( 'email' ) ) {
					network = "email"; socialAction = "Email Share";
				} else if ( $(e.target).is( '.facebook, .facebook .social_icon_large, .facebook .social_icon' ) ) {
					if ($(this).parents().hasClass('social-group-top')) {
						network = "facebook_top"; socialAction = "FB Top Share";
					}
					else if ($(this).parents().hasClass('size_large')){
						network = "facebook_bottom"; socialAction = "FB Bottom Share";
					}
					else if ($(this).parents().is('nav')){
						network = "facebook_nav"; socialAction = "FB Visit";
					}
					else {
						network = "facebook"; socialAction = "FB Share";
					}
				} else if ( $(e.target).is( '.twitter, .twitter .social_icon_large, .twitter .social_icon' ) ) {
					if ($(this).parents().hasClass('social-group-top')) {
						network = "twitter_top"; socialAction = "Tweet Top";
					}
					else if ($(this).parents().hasClass('size_large')){
						network = "twitter_bottom"; socialAction = "Tweet Bottom";
					}
					else if ($(this).parents().is('nav')){
						network = "twitter_nav"; socialAction = "Twitter Visit";
					}
					else {
						network = "twitter"; socialAction = "Tweet";
					}
				} else if ( $(e.target).hasClass( 'youtube' ) ) {
					network = "youtube_nav"; socialAction = "YouTube Visit";
				} else if ( $(e.target).hasClass( 'rss' ) ) {
					network = "rss"; socialAction = "RSS";
				} else if ( $(e.target).hasClass( 'tip-us' ) ) {
					network = "tipus"; socialAction = "Tip Us";
				} else if ( $(e.target).hasClass( 'pinterest' ) ) {
					network = "pinterest"; socialAction = "Pinterest Pin";
				} else if ( $(e.target).hasClass( 'reddit' ) ) {
					network = "reddit"; socialAction = "Reddit Submission";
				} else if ( $(e.target).hasClass( 'tumblr' ) ) {
					network = "tumblr"; socialAction = "Tumblr Share";
				}
				if ( network !== "" ) {
					__log.log ( $(e.target).attr( 'class' ) + " : " +network );
					_gaq.push( [ '_trackSocial', network, socialAction, targetUrl ] );
					gaTracker.track(gaPrimaryAccount, 'social', socialAction, targetUrl);
				}
			});

			try {
				if (FB && FB.Event && FB.Event.subscribe) {
					FB.Event.subscribe('edge.create', function(targetUrl) {
						_gaq.push(['_trackSocial', 'facebook', 'like', targetUrl]);
						gaTracker.track(gaPrimaryAccount, 'social', 'Like', targetUrl);
						__log.log ( 'fb like' );
					});

					FB.Event.subscribe('edge.remove', function(targetUrl) {
						_gaq.push(['_trackSocial', 'facebook', 'unlike', targetUrl]);
						gaTracker.track(gaPrimaryAccount, 'social', 'Unlike', targetUrl);
						__log.log ( 'fb unlike' );
					});

					FB.Event.subscribe('message.send', function(targetUrl) {
						_gaq.push(['_trackSocial', 'facebook', 'send', targetUrl]);
						gaTracker.track(gaPrimaryAccount, 'social', 'Send', targetUrl);
						__log.log ( 'fb unlike' );
					});
				}
			} catch(e) {}
		}
	};

	var trackTwitter = {
		init: function() {
			var _self = this;
				_self.track();
		},
		track: function () {
			var _self = this;

			if (typeof window.twttr === 'undefined'){
				window.twttr = (function (d,s,id) {
					var t, js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
					js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
					return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
				}(document, "script", "twitter-wjs"));

				$('#twitter-wjs').load(function() {
					_self.bindEvents();
				});
			}
			else {
				_self.bindEvents();
			}
		},
		bindEvents: function() {
			twttr.events.bind('follow', function(event){
				gaTracker.track(gaPrimaryAccount, 'social', 'Twitter Follow', event.data.screen_name)
			});
		}
	};

	var gaTracker = {
		init: function() {
			var _self = this;
			_self.getAccount();
		},
		getAccount: function() {
			if(typeof window.TSM !== undefined) {
				try {
					gaPrimaryAccount = window.TSM.ga.accounts[0];
				}
				catch(err){
					throw 'primary google analytics account not found';
				}
			}
		},
		track: function(account, category, event, label) {
			if( _gaq !== undefined && gaPrimaryAccount !== ''){
				_gaq.push(
					[ '_setAccount', account ],
					[
						'_trackEvent',
						category,
						event,
						label
					]
				);
			}
		}
	};

	var __log = {
		log: function(message) {
			if ( window.location.search.match(/__log=true/g) !== null )
				console.log( message );
		}
	};

	$(document).ready(function(){
		gaTracker.init();
		socialTracker.init();
		trackTwitter.init();
	});
})(jQuery);