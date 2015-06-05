(function( $, w ){
	w.TSM = w.TSM || {};
	var InternalAdApiAjax = function(){
		var self = this,
			params = {
				apiBaseUrl:'/internal-ad-api/',
				kw:[],
				apiData:{},
				callbacks:{}
			},

			fetchAds = function(){
				params.apiData.kw = params.kw;
				$.ajax({
					url:params.apiBaseUrl,
					data:params.apiData,
					dataType:'json',
					success:function(d){
						if( d ){
							var callbacks = params.callbacks;
							for( var key in callbacks ){
								callbacks[ key ]( d );
							}
						}
					}
				});
			},

			setParam = function( k, v ){
				params[ k ] = v;
				return self;
			},

			init = function(){
				params.callbacks = w.TSM.internalAdApi.getCallbacks();
				fetchAds();
			};

		self.init = init;
		self.setParam = setParam;
		return self;
	};
	var inst = new InternalAdApiAjax(),
		dfpSettingObj = {}, kw = [], templateType = 'base';

	if( w.TSMAdSettings ){
		dfpSettingObj = w.TSMAdSettings.adPageSettings;
	}else if( w.TSM && w.TSM.dfp ){
		dfpSettingObj = w.TSM.dfp.adPageSettings;
		if( w.TSM.deviceType && w.TSM.deviceType === 'phone' ){
			templateType = 'mobile';
		}
	}
	if( dfpSettingObj && dfpSettingObj.attrs && dfpSettingObj.attrs.kw ){
		kw = dfpSettingObj.attrs.kw;
	}

	inst.
		setParam( 'kw', kw.sort() ).
		init();
})( typeof Zepto !== "undefined" ? Zepto : jQuery, window );