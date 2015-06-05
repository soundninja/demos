(function( $, w ){
	Array.prototype.indexOf||(Array.prototype.indexOf=function(n,t){if(this===undefined||this===null)throw new TypeError('"this" is null or not defined');var i=this.length>>>0;for(t=+t||0,Math.abs(t)===Infinity&&(t=0),t<0&&(t+=i,t<0&&(t=0));t<i;t++)if(this[t]===n)return t;return-1});
	Array.prototype.filter||(Array.prototype.filter=function(n){"use strict";var i,f,r,e,t,u;if(this===void 0||this===null)throw new TypeError;if(i=Object(this),f=i.length>>>0,typeof n!="function")throw new TypeError;for(r=[],e=arguments.length>=2?arguments[1]:void 0,t=0;t<f;t++)t in i&&(u=i[t],n.call(e,u,t,i)&&r.push(u));return r});
	w.TSM = w.TSM || {};

	var TownsquareHeaders = function(){
		var self = this,
			headerInfo = {},
			headerTemplate = {
				base:{
					selector:'#single_sponsor_header',
					markup:'<a href="{{clickthru}}" {{target}} title="{{title}}"><img src="{{img}}" {{imgStyle}}/></a>{{impression}}',
					markupNoA:'<img src="{{img}}" title="{{title}}" {{imgStyle}}/>',
					imgKey:'img'
				},
				mobile:{
					selector:'#single_sponsor_header',
					markup:'<a href="{{clickthru}}" {{target}} title="{{title}}"><img src="{{mobileImg}}" {{imgStyle}}/></a>{{impression}}',
					markupNoA:'<img src="{{mobileImg}}" title="{{title}} {{imgStyle}}"/>',
					imgKey:'mobileImg'
				}
			},
			hiddenHeadingCss = "background:none;textIndent:-99999px; height:0; padding:0; border:medium none; display:block; overflow:hidden;",
			hrefTarget = 'target="_blank"',
			targets = [
				{
					heading: '.single-post h1',
					insertBefore: '.single-post h1',
					hideHeading: false,
					headingcss:'padding-top:10px;'
				},
				{
					heading: '.single h1',
					insertBefore: '.single h1',
					hideHeading: false,
					headingcss:'padding-top:10px;'
				},
				{
					heading: '.events-list h1',
					insertBefore: '.events-list h1',
					hideHeading: true
				},
				{
					heading: '.single-tribe_events h1',
					insertBefore: '.single-tribe_events h1',
					hideHeading: false
				},
				{
					heading: '.single-page h1',
					insertBefore: '.single-page h1',
					hideHeading: false
				},
				{
					heading: '.archive.tag h1',
					insertBefore: '.archive.tag h1',
					hideHeading: true
				},
				{
					heading: '.archive.category h1',
					insertBefore: '.archive.category h1',
					hideHeading: true
				},
				{
					heading: '.template-landing h1',
					insertBefore: '.template-landing h1',
					hideHeading: true
				},
				{
					heading: '.author h1',
					insertBefore: '#author_block',
					hideHeading: true
				},
				{
					heading: 'body.loyalty-pages .nav',
					insertBefore: 'body.loyalty-pages .nav',
					hideHeading: true
				},
				//mobile
				{	//post page
					heading: '.main-content .post .entry h1',
					insertBefore: '.main-content .post',
					hideHeading: false,
					headercss:'background:#ededed; text-align:center; padding-top:10px;'
				},
				{	//author page
					heading: '.main-content section.author .entry h1',
					insertBefore: '.main-content section.author',
					hideHeading: true,
					cssfix:'#ads-top-leaderboard{border:none;}',
					headercss:'background:#ededed; text-align:center; padding-bottom:10px;'
				},
				{	//enhanced tag page
					heading: '.site-content .list.enhanced h1.title.sub',
					insertBefore: '.site-content .list.enhanced h1.title.sub',
					hideHeading: true,
					cssfix:'#ads-top-leaderboard{border:none;}',
					headercss:'background:#ededed; text-align:center; padding-bottom:10px; padding-top:10px;'
				},
				{	//tag page
					heading: '.site-content h1.title.sub',
					insertBefore: '.site-content h1.title.sub',
					hideHeading: true,
					cssfix:'#ads-top-leaderboard{border:none;}',
					headercss:'background:#ededed; text-align:center; padding-bottom:10px;'
				},
				{	//vertical page
					heading: '.main-content h1.title.main',
					insertBefore: '.main-content h1.title.main',
					hideHeading: true,
					headercss:'background:#ededed; text-align:center; padding:10px 0px;'
				}
			],
			params = {
				kw:{},
				templateType:'base'
			},

			getHeadersFromSponsors = function( sponsors ){
				var headers = [];
				for( var i=0;i<sponsors.length;i++ ){
					sponsors[i].data.header.clickthru = sponsors[i].clickthru;
					sponsors[i].data.header.impression = sponsors[i].impression;
					sponsors[i].data.header.title = sponsors[i].title;
					headers.push( sponsors[i].data.header );
				}
				return headers;
			},

			getTopPriorityHeader = function( sponsorsAfterExclusion ){
				var priorityMap = {},
					priorities = [],
					headersAfterExclusion = getHeadersFromSponsors( sponsorsAfterExclusion );

				for( var i=0;i<headersAfterExclusion.length;i++ ){
					if( headersAfterExclusion[ i ][ 'priority' ] === '' ){	//default to 1 if not present (legacy support)
						headersAfterExclusion[ i ][ 'priority' ] = '4';
					}

					if( priorityMap[ headersAfterExclusion[ i ][ 'priority' ] ] === undefined ){
						priorityMap[ headersAfterExclusion[ i ][ 'priority' ] ] = [];
					}
					priorityMap[ headersAfterExclusion[ i ][ 'priority' ] ].push( headersAfterExclusion[ i ] );
					if( priorities[ headersAfterExclusion[ i ][ 'priority' ] ] === undefined ){
						priorities.push( headersAfterExclusion[ i ][ 'priority' ] );
					}
				}
				priorities.sort();
				if( priorityMap[ priorities[ 0 ] ].length === 1 ){
					return priorityMap[ priorities[ 0 ] ][0];
				}else{
					return priorityMap[ priorities[ 0 ] ][ Math.floor( Math.random()*( priorityMap[ priorities[ 0 ] ].length ) ) ];
				}
			},

			filterHeaderSponsors = function( sponsor ){
				return sponsor.data && sponsor.data.header;
			},

			getHeadersCallback = function( d ){
				var sponsorsWithHeaders = d.sponsors.filter( filterHeaderSponsors );
				if( sponsorsWithHeaders.length ){
					applyHeader( getTopPriorityHeader( sponsorsWithHeaders ) );
				}else{
					self.log( 'This page has no matching header(s).' );
				}
			},

			/*getHeaders = function(){
				if( params.kw.length ){
					Object.getPrototypeOf( self ).setParams({
						apiType:'header',
						apiData:{
							kw:params.kw
						},
						apiCallback:getHeadersCallback
					}).init();
				}
			},*/

			applyHeader = function( d ){
				var templateType = params.templateType,
					template = headerTemplate[ templateType ],
					//elem = document.querySelector( template.selector ),
					markup = template.markup, header;

				headerInfo = d;
				if( d[ template[ 'imgKey' ] ] === '' ){
					return;
				}
				if( d[ 'clickthru' ] === '' ){
					markup = template.markupNoA;
					hrefTarget = '';
				}else{
					if( d[ 'clickthru' ].indexOf( location.hostname ) > -1 ){
						hrefTarget = '';
					}
				}
				if( window.TSM && window.TSM.deviceType && window.TSM.deviceType === 'phone' ){
					d[ 'imgStyle' ] = 'style="width:100%;"';
				}else{
					d[ 'imgStyle' ] = '';
				}
				markup = markup.replace( /{{target}}/g, hrefTarget );
				for( var i in d ){
					var reg = new RegExp( '{{' + i + '}}', 'g' );
					if( i === 'impression' && d[ i ] !== '' ){
						markup = markup.replace( reg, '<img src="' + d[ i ] + '" width="0" height="0" />' );
					}else{
						markup = markup.replace( reg, d[ i ] );
					}
				}

				//elem.innerHTML = markup;
				//applyGeneralCssFixes();
				header = getHeaderElem( markup );
				for( i=0; i<targets.length; i++ ){
					var target = document.querySelector( targets[i].insertBefore );
					if( target ){
						var heading = document.querySelector( targets[i].heading );
						target.parentNode.insertBefore( header, target );
						if( targets[i].hideHeading ){
							if( heading ){
								heading.setAttribute( 'style', hiddenHeadingCss );
								var rssIcon = document.querySelector( '#location_wrap .rss_icon' );
								if( rssIcon ){
									rssIcon.setAttribute( 'style', 'display:none;' );
								}
							}
						}
						if( targets[i].cssfix ){
							Object.getPrototypeOf( self ).insertCss( targets[i].cssfix );
						}
						if( targets[i].headercss ){
							header.setAttribute( 'style', targets[i].headercss );
						}
						if( targets[i].headingcss && heading ){
							heading.setAttribute( 'style', ( heading.getAttribute( 'style' ) ? heading.getAttribute( 'style' ) : '' ) + ';' + targets[i].headingcss );
						}
						break;
					}
				}
				applyGeneralCssFixes();
				initGA( header );
			},

			initGA = function( header ){
				if( typeof _gaq !== "undefined" && w.TSM !== undefined && w.TSM.ga !== undefined && w.TSM.ga.accounts !== undefined ){
					var cat = 'Internal Ads',
						acc = w.TSM.ga.accounts[0],
						header = $( header).find( 'a' );
					gaTrackEvent( acc, cat, 'Header Impression', headerInfo[ 'title' ] );
					if( headerInfo[ 'clickthru' ] !== '' ){
						header.on( 'click', function( e ){
							gaTrackEvent( acc, cat, 'Header Click', headerInfo[ 'title' ] );
							if( header.attr( 'target' ) === '_blank' ){
							}else{
								e.preventDefault();
								w.setTimeout(function(){
									w.location.href = header.attr( 'href' );
								}, 100);
							}
						});
					}
				}
			},

			gaTrackEvent = function( acc, cat, event, label ){
				_gaq.push(
					[ '_setAccount', acc ],
					[ '_trackEvent', cat, event, label ]
				);
			},

			applyGeneralCssFixes = function(){
				var cssfixes = [
					{
						selector:'#content_main .blogroll.row-standard',
						condition:true,
						style:'clear:both;'
					},
					{
						selector:'#content_main .back',
						condition:true,
						style:'margin-top:118px;'
					}/*,
					{
						selector:'.internal-ad.internal-ad-header > a > img',
						condition:function(){ return window.TSM && window.TSM.deviceType && window.TSM.deviceType === 'phone'; }(),
						style:'width:100%;'
					}*/
				];

				for( var i=0; i<cssfixes.length; i++ ){
					var elem = document.querySelector( cssfixes[i].selector );
					if( elem && cssfixes[i].condition ){
						elem.setAttribute( 'style', cssfixes[i].style );
					}
				}
			},

			getHeaderElem = function( html ){
				var d = document.createElement( 'div' );
				d.className = 'internal-ad internal-ad-header';
				d.innerHTML = html;
				return d;
			},

			setParams = function( key, value ){
				params[ key ] = value;
			},

			init = function(){
				//getHeaders();
				self.setCallback( 'header', getHeadersCallback );
			};

		self.setParams = function( key, value ){
			setParams( key, value );
			return self;
		}
		self.init = function(){
			init();
		};
		return self;
	};
	TownsquareHeaders.prototype = w.TSM.townsquareSponsors;
	var inst = new TownsquareHeaders();
	inst.init();
})( typeof Zepto !== "undefined" ? Zepto : jQuery, window );