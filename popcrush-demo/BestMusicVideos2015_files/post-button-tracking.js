(function($){
	var gaPrimaryAccount = '',
		gaAction = '';

	var postButton = {
		init: function(){
			var _self = this;
			if($('.ga_network_button').length === 0 && $('.ga_list_next_button').length === 0 ) return;
			else _self.bindEvents();
		},
		bindEvents: function(){
			$(document).on('click', '.ga_network_button .button_act', function(e) {
				gaAction = $(this).attr('href');
				gaTracker.track(gaPrimaryAccount, 'What\'s_Next', gaAction, window.location.href);
			});
			$(document).on('click', '.ga_list_next_button a', function(e) {
				gaAction = $(this).attr('href');
				gaTracker.track(gaPrimaryAccount, 'List_Next', gaAction, window.location.href);
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

	$(document).ready(function(){
		gaTracker.init();
		postButton.init();
	});
})(jQuery);