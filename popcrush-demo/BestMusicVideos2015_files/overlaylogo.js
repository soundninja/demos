(function( $, w ){
	var Overlaylogo = function(){
		var self = this,
			params = {},

			overlayCallback = function( d ){
				if ( !d.sponsors.length ){
					return false;
				}
				else{
					if( d.sponsors && d.sponsors.length && d.sponsors[0].data.overlaylogo && d.sponsors[0].data.overlaylogo.img ){
						var elem = $( "#overlay_fancybox .overlay_sponsor_wrap" );
						if( d.sponsors[0].clickthru && d.sponsors[0].clickthru.length ){
							elem.append( "<a href="+ d.sponsors[0].clickthru +" target='_blank'><img src="+ d.sponsors[0].data.overlaylogo.img + "></a>" );
						}else{
							elem.append( "<img src="+ d.sponsors[0].data.overlaylogo.img + ">" );
						}
						elem.removeClass( 'hidden' );
					}
				}
			},

			init = function(){
				self.setCallback( 'overlaylogo', overlayCallback );
			};

		self.init = init;

		return self;
	};
	Overlaylogo.prototype = w.TSM.townsquareSponsors;
	var inst = new Overlaylogo();
	inst.init();
})( typeof Zepto !== "undefined" ? Zepto : jQuery, window );