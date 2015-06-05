(function($){
	typeof Object.getPrototypeOf!="function"&&(Object.getPrototypeOf=typeof"test".__proto__=="object"?function(n){return n.__proto__}:function(n){return n.constructor.prototype});
	var InternalAdApi = function(){
		var self = this,
			apiBaseUrl = '/internal-ad-api',
			params = {
				apiType:'',
				apiData:{},
				callbacks:{},
				apiCallback:function( data ){
					if( !data || data.status === 'error' ){
						log();
					}
				}
			},

			log = function( str ){
				try{console.log( 'Internal Ad Api: ', str );}catch(e){}
			},

			getApiUrl = function(){
				return [ apiBaseUrl, params.apiType ].join( '/' );
			},



			init = function(){
				if( !params.apiType ){
					log( 'No Api requested' );
					return 0;
				}
				$.ajax({
					url:getApiUrl(),
					data:params.apiData || {},
					dataType:'json',
					success:function( d ){
						if( d && d.status && d.status === 'error' ){
							self.log( d.data );
						}
						params.apiCallback.call( this, d );
					}
				});
			};

		self.insertCss = function( styles ){
			var w=window.top,d=w.document,sid = "tsm-css-fix",s = document.getElementById( sid ),isIE=navigator.userAgent.indexOf("MSIE")>-1;
			if( !s ){
				var h=d.getElementsByTagName("head")[0];
				s=d.createElement("style");
				s.type="text/css";
				s.id=sid;
				h.appendChild(s);
			}
			if(isIE){
				s.styleSheet.cssText += styles;
			}else{
				s.innerHTML += styles;
			}
		};

		self.setCallback = function( key, fn ){
			params.callbacks[ key ] = fn;
			return self;
		};

		self.getCallbacks = function(){
			return params.callbacks;
		};

		self.log = function( str ){
			log( str );
		};

		self.setParams = function( obj ){
			params = obj;
			return self;
		};

		self.init = function( obj ){
			if( obj !== undefined ){
				params = obj;
			}
			init();
		};
		return self;
	};
	//window.TSM.InternalAdApi = InternalAdApi;
	window.TSM.internalAdApi = new InternalAdApi();
})( typeof Zepto !== "undefined" ? Zepto : jQuery );