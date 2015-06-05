(function( $, w ){
	Array.prototype.indexOf||(Array.prototype.indexOf=function(n,t){if(this===undefined||this===null)throw new TypeError('"this" is null or not defined');var i=this.length>>>0;for(t=+t||0,Math.abs(t)===Infinity&&(t=0),t<0&&(t+=i,t<0&&(t=0));t<i;t++)if(this[t]===n)return t;return-1});
	Array.prototype.filter||(Array.prototype.filter=function(n){"use strict";var i,f,r,e,t,u;if(this===void 0||this===null)throw new TypeError;if(i=Object(this),f=i.length>>>0,typeof n!="function")throw new TypeError;for(r=[],e=arguments.length>=2?arguments[1]:void 0,t=0;t<f;t++)t in i&&(u=i[t],n.call(e,u,t,i)&&r.push(u));return r});
	w.TSM = w.TSM || {};

	var TownsquareSponsors = function(){
		var self = this,

			params = {
				callbacks:{}
			},

			filterExclusions = function( data ){
				if( data.excludeurls !== undefined && data.excludeurls.length ){
					if( data.excludeurls.indexOf( window.location.href.split( '?' )[0] ) > -1 ){
						return false;
					}else{
						return true;
					}
				}else{
					return true;
				}
			},

			sponsorCallback = function( d ){
				if( d && d.sponsors ){
					d.sponsors = d.sponsors.filter( filterExclusions );
					if(d.sponsors.length ){
						var callbacks = params.callbacks;
						for( var k in callbacks ){
							callbacks[ k ]( d );
						}
					}else{
						self.log( 'This URL is excluded for the matching Sponsor(s).' );
					}
				}
			},

			setCallback = function( k, fn ){
				params.callbacks[ k ] = fn;
				Object.getPrototypeOf( self).setCallback( 'sponsors', sponsorCallback );
				//console.log(k, fn );
			};

		self.filterExclusions = filterExclusions;
		self.setCallback = setCallback;
		return self;
	};

	TownsquareSponsors.prototype = w.TSM.internalAdApi;
	w.TSM.townsquareSponsors = new TownsquareSponsors();
})( typeof Zepto !== "undefined" ? Zepto : jQuery, window );