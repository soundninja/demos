__twttrll([2],{107:function(t,e,n){var r=n(71);t.exports=r.build([n(108),n(128),n(129),n(130),n(132),n(133),n(135),n(136),n(139),n(142),n(143),n(144),n(145),n(147),n(148),n(149),n(150),n(152),n(154),n(155)],{pageForAudienceImpression:"timeline",productName:"embeddedtimeline",breakpoints:{320:"env-wide"}})},108:function(t,e,n){function r(t){t.params({widgetId:{required:!0},instanceId:{required:!0,fallback:d.deterministic},lang:{required:!0,transform:w.matchLanguage,fallback:"en"},width:{required:!0,fallback:"520px",validate:m,transform:m},height:{validate:m,transform:m},theme:{fallback:[h(u.val,u,"widgets:theme")],validate:b},tweetLimit:{fallback:0,transform:c.asInt},partner:{fallback:h(u.val,u,"partner")},previewParams:{},profileScreenName:{},profileUserId:{},profileShowReplies:{fallback:!1,transform:c.asBoolean},favoritesScreenName:{},favoritesUserId:{},listOwnerScreenName:{},listOwnerUserId:{},listId:{},listSlug:{},customTimelineId:{}}),t.selectors({header:".timeline-header",footer:".timeline-footer",viewport:".stream",tweetList:".h-feed",tweetsInStream:".h-feed .tweet"}),t.around("scribeNamespace",function(t){return l.aug(t(),{page:"timeline"})}),t.around("scribeData",function(t){return l.aug(t(),{widget_id:this.params.widgetId,message:this.params.partner,query:this.el&&this.el.getAttribute("data-search-query"),profile_id:this.el&&this.el.getAttribute("data-profile-id")})}),t.around("widgetDataAttributes",function(t){return l.aug({"widget-id":this.params.widgetId,"user-id":this.el&&this.el.getAttribute("data-profile-id"),"search-query":this.el&&this.el.getAttribute("data-search-query")},t())}),t.define("updateViewportHeight",function(){var t,e=this.sandbox,n=this.selectOne("header"),r=this.selectOne("footer"),i=this.selectOne("viewport");return s.read(function(){t=e.height-2*I,t-=n?n.offsetHeight:0,t-=r?r.offsetHeight:0}),s.write(function(){i.style.height=t+"px"})}),t.define("adjustWidgetSize",function(){return this.isStaticTimeline?this.sandbox.matchHeightToContent():this.updateViewportHeight()}),t.define("reconfigureWithServerSideParams",function(t){t=t||{},this.params.linkColor=this.params.linkColor||t.linkColor,this.params.theme=this.params.theme||t.theme||"light",this.params.height=m(this.params.height||t.height||"600px")}),t.define("scribeImpressionsForInitialTweetSet",function(){var t=p(this.select("tweetsInStream")),e=Object.keys(t),n=e.length?"results":"no_results",r=this.el.getAttribute("data-collection-id");r&&(e.push(r),t[r]={item_type:x.CUSTOM_TIMELINE}),this.scribe({component:"timeline",element:"initial",action:n},{item_ids:e,item_details:t})}),t.override("initialize",function(){this.isStaticTimeline=this.params.tweetLimit>0,this.isPreviewTimeline=!!this.params.previewParams}),t.override("hydrate",function(){var t=this,e=this.isPreviewTimeline?g.preview(this.params.previewParams):g.timeline(this.params);return e.then(function(e){t.html=e.html,t.reconfigureWithServerSideParams(e.config),y(t,e,E.INITIAL)})}),t.override("render",function(){var t=this;return this.el=this.sandbox.htmlToElement(this.html),this.el?(this.el.lang=this.params.lang,"dark"==this.params.theme&&a.add(this.el,"thm-dark"),this.isStaticTimeline&&(this.sandbox.addRootClass("var-static"),v(this.selectOne("tweetList"),this.params.tweetLimit)),this.scribeImpressionsForInitialTweetSet(),i.all([this.sandbox.appendStyleSheet(o.timeline(this.params.lang,this.params.theme)),this.sandbox.styleSelf({display:"inline-block",maxWidth:this.params.width,width:T,minWidth:_,minHeight:this.isStaticTimeline?void 0:A,height:this.params.height,marginTop:0,marginBottom:0})]).then(function(){return t.prepForInsertion(t.el),t.sandbox.injectWidgetEl(t.el)})):i.reject(new Error("unable to render"))}),t.last("render",function(){var t=this.sandbox,e=this.selectOne("viewport"),n=this;return this.adjustWidgetSize().then(function(){return i.all([t.makeVisible(),s.write(function(){e.style.width||(e.style.width="auto")})])}).then(function(){n.resize()})}),t.last("resize",function(){return this.adjustWidgetSize()})}var i=n(2),o=n(109),a=n(24),s=n(58),u=n(16),c=n(15),d=n(27),l=n(14),f=n(71),h=n(20),p=n(111),m=n(113),v=n(114),g=n(115),w=n(83),b=n(120),y=n(121),x=n(112),E=n(122),_="180px",T="100%",A="200px",I=1;t.exports=f.couple(n(123),n(86),r)},114:function(t,e){function n(t,e){var n;if(t)for(;n=t.children[e];)t.removeChild(n)}t.exports=n},115:function(t,e,n){function r(t){return _+t}function i(t){return T+t}function o(t){return"tl_"+t.widgetId+"_"+t.instanceId}function a(t){var e=t.sinceId||t.maxId||t.maxPosition||t.minPosition;return"tlPoll_"+t.widgetId+"_"+t.instanceId+"_"+e}function s(t){if(!t||!t.headers)throw new Error("unexpected response schema");return{html:t.body,config:t.config,pollInterval:1e3*parseInt(t.headers.xPolling,10)||null,maxCursorPosition:t.headers.maxPosition,minCursorPosition:t.headers.minPosition}}function u(t){if(t&&t.headers)throw new Error(t.headers.status);throw t instanceof Error?t:new Error(t)}function c(t){var e=r(t.widgetId),n=o(t),i={lang:t.lang,t:b(),domain:p.host,dnt:v.enabled()},a=g.aug(i,w(t));return a=g.compact(a),f.fetch(e,a,h,n).then(s,u)}function d(t){var e=i(t.widgetId),n=a(t),r=g.compact({lang:t.lang,since_id:t.sinceId,max_id:t.maxId,min_position:t.minPosition,max_position:t.maxPosition,domain:p.host,dnt:v.enabled()}),o=g.aug(r,w(t));return o=g.compact(o),f.fetch(e,o,h,n).then(s,u)}function l(t){return f.fetch(A,t,h).then(s,u)}var f=n(116),h=n(117),p=n(13),m=n(17),v=n(46),g=n(14),w=n(118),b=n(119),y="https://cdn.syndication.twimg.com/widgets/timelines/",x="https://syndication.twitter.com/widgets/timelines/paged/",E="https://syndication.twitter.com/widgets/timelines/preview/",_=m.get("endpoints.timeline")||y,T=m.get("endpoints.timelinePoll")||x,A=m.get("endpoints.timelinePreview")||E;t.exports={timeline:c,poll:d,preview:l}},117:function(t,e,n){function r(t){var e,n;return e=t.headers&&t.headers.status,n=t&&!t.error&&200===e,!n&&t.headers&&t.headers.message&&i.warn(t.headers.message),{success:n,resp:t}}var i=n(12);t.exports=r},118:function(t,e){function n(t){var e={};return t=t||{},t.profileScreenName||t.profileUserId?e={override_type:"user",override_id:t.profileUserId,override_name:t.profileScreenName,with_replies:t.profileShowReplies?"true":"false"}:t.favoritesScreenName||t.favoritesUserId?e={override_type:"favorites",override_id:t.favoritesUserId,override_name:t.favoritesScreenName}:t.listOwnerScreenName||t.listOwnerUserId||t.listId||t.listSlug?e={override_type:"list",override_owner_id:t.listOwnerUserId,override_owner_name:t.listOwnerScreenName,override_id:t.listId,override_name:t.listSlug}:t.customTimelineId&&(e={override_type:"custom",override_id:t.customTimelineId}),e}t.exports=n},119:function(t,e){function n(){var t=9e5;return Math.floor(+new Date/t)}t.exports=n},120:function(t,e){function n(t){return r.test(t)}var r=/^(dark|light)$/;t.exports=n},121:function(t,e,n){function r(t,e,n){switch(t.cursors=t.cursors||{},t.pollInterval=e.pollInterval,n){case i.INITIAL:t.cursors.min=e.minCursorPosition,t.cursors.max=e.maxCursorPosition;break;case i.NEWER:t.cursors.max=e.maxCursorPosition||t.cursors.max;break;case i.OLDER:t.cursors.min=e.minCursorPosition||t.cursors.min}}var i=n(122);t.exports=r},122:function(t,e){t.exports={INITIAL:1,NEWER:2,OLDER:3}},128:function(t,e,n){function r(t){var e={transparent:!1,hideBorder:!1,hideHeader:!1,hideFooter:!1,hideScrollBar:!1};return t=t||"",o.contains(t,"transparent")&&(e.transparent=!0),o.contains(t,"noborders")&&(e.hideBorder=!0),o.contains(t,"noheader")&&(e.hideHeader=!0),o.contains(t,"nofooter")&&(e.hideFooter=!0),o.contains(t,"noscrollbar")&&(e.hideScrollBar=!0),e}function i(t){t.params({chrome:{transform:r,fallback:""}}),t.selectors({streamContainer:".stream",tweetStream:".h-feed"}),t.before("render",function(){this.params.chrome.transparent&&this.sandbox.addRootClass("var-chromeless"),this.params.chrome.hideBorder&&this.sandbox.addRootClass("var-borderless"),this.params.chrome.hideHeader&&this.sandbox.addRootClass("var-headerless"),this.params.chrome.hideFooter&&this.sandbox.addRootClass("var-footerless")}),t.after("render",function(){return this.params.chrome.hideScrollBar?this.hideScrollBar():void 0}),t.after("resize",function(){return this.params.chrome.hideScrollBar?this.hideScrollBar():void 0}),t.define("hideScrollBar",function(){var t=this.selectOne("streamContainer"),e=this.selectOne("tweetStream");return a.defer(function(){var n,r;t.style.width="",n=t.offsetWidth-e.offsetWidth,r=t.offsetWidth+n,t.style.width=r+"px"})})}var o=n(14),a=n(58);t.exports=i},135:function(t,e){function n(t){t.params({ariaLive:{fallback:""}}),t.selectors({newTweetsNotifier:".new-tweets-bar"}),t.after("render",function(){var t=this.selectOne("newTweetsNotifier");"assertive"===this.params.ariaLive&&t&&t.setAttribute("aria-live","assertive")})}t.exports=n},136:function(t,e,n){function r(t){t.selectors({fullTimestampToLocalize:".long-permalink time",relativeTimestampToLocalize:".permalink time"}),t.after("prepForInsertion",function(t){var e=s(this.el);e&&(this.select(t,"fullTimestampToLocalize").forEach(function(t){var n=t.getAttribute("datetime"),r=n&&e.localTimeStamp(n);r&&(t.innerHTML=r)}),this.select(t,"relativeTimestampToLocalize").forEach(function(t){var n=t.getAttribute("datetime"),r=n&&e.timeAgo(n);r&&(t.innerHTML=r)}))}),t.define("updateRelativeTimestamps",function(){var t=s(this.el);if(t){var e=this.select("relativeTimestampToLocalize").reduce(function(e,n){var r=n.getAttribute("datetime"),i=r&&t.timeAgo(r);return i&&e.push(function(){n.innerHTML=i}),e},[]);return i.all(e.map(o.write))}}),t.after("render",function(){var t=this;a.setInterval(function(){t.updateRelativeTimestamps()},u)})}var i=n(2),o=n(58),a=n(7),s=n(137),u=6e4;t.exports=r},137:function(t,e,n){function r(t){return new o(i.compact({months:(t.getAttribute("data-dt-months")||"").split("|"),phrases:{AM:t.getAttribute("data-dt-am"),PM:t.getAttribute("data-dt-pm"),now:t.getAttribute("data-dt-now"),s:t.getAttribute("data-dt-s"),m:t.getAttribute("data-dt-m"),h:t.getAttribute("data-dt-h"),second:t.getAttribute("data-dt-second"),seconds:t.getAttribute("data-dt-seconds"),minute:t.getAttribute("data-dt-minute"),minutes:t.getAttribute("data-dt-minutes"),hour:t.getAttribute("data-dt-hour"),hours:t.getAttribute("data-dt-hours")},formats:{full:t.getAttribute("data-dt-full"),abbr:t.getAttribute("data-dt-abbr"),shortdate:t.getAttribute("data-dt-short"),longdate:t.getAttribute("data-dt-long")}}))}var i=n(14),o=n(138);t.exports=r},138:function(t,e){function n(t){return 10>t?"0"+t:t}function r(t){function e(t,e){return i&&i[t]&&(t=i[t]),t.replace(/%\{([\w_]+)\}/g,function(t,n){return void 0!==e[n]?e[n]:t})}var i=t&&t.phrases,o=t&&t.months||s,a=t&&t.formats||u;this.timeAgo=function(t){var n,i=r.parseDate(t),s=+new Date,u=s-i;return i?isNaN(u)||2*c>u?e("now"):d>u?(n=Math.floor(u/c),e(a.abbr,{number:n,symbol:e(h,{abbr:e("s"),expanded:e(n>1?"seconds":"second")})})):l>u?(n=Math.floor(u/d),e(a.abbr,{number:n,symbol:e(h,{abbr:e("m"),expanded:e(n>1?"minutes":"minute")})})):f>u?(n=Math.floor(u/l),e(a.abbr,{number:n,symbol:e(h,{abbr:e("h"),expanded:e(n>1?"hours":"hour")})})):365*f>u?e(a.shortdate,{day:i.getDate(),month:e(o[i.getMonth()])}):e(a.longdate,{day:i.getDate(),month:e(o[i.getMonth()]),year:i.getFullYear().toString().slice(2)}):""},this.localTimeStamp=function(t){var i=r.parseDate(t),s=i&&i.getHours();return i?e(a.full,{day:i.getDate(),month:e(o[i.getMonth()]),year:i.getFullYear(),hours24:n(s),hours12:13>s?s?s:"12":s-12,minutes:n(i.getMinutes()),seconds:n(i.getSeconds()),amPm:e(12>s?"AM":"PM")}):""}}var i=/(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[\+\-]\d{2}:?\d{2})/,o=/[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([\+\-]\d{2}:?\d{2}) (\d{4})/i,a=/^\d+$/,s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u={abbr:"%{number}%{symbol}",shortdate:"%{day} %{month}",longdate:"%{day} %{month} %{year}",full:"%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}"},c=1e3,d=60*c,l=60*d,f=24*l,h='<abbr title="%{expanded}">%{abbr}</abbr>';r.parseDate=function(t){var e,n,r=t||"",u=r.toString();return(e=function(){var t;return a.test(u)?parseInt(u,10):(t=u.match(o))?Date.UTC(t[7],s.indexOf(t[1]),t[2],t[3],t[4],t[5]):(t=u.match(i))?Date.UTC(t[1],t[2]-1,t[3],t[4],t[5],t[6]):void 0}())?(n=new Date(e),!isNaN(n.getTime())&&n):!1},t.exports=r},144:function(t,e,n){function r(t){t.selectors({followButton:".follow-button"}),t.define("handleFollowButtonClick",function(t,e){var n=s.intentForFollowURL(e.href),r=t.altKey||t.metaKey||t.shiftKey,c=a.ios()||a.android(),d=u.asBoolean(e.getAttribute("data-age-gate"));!n||r||c||d||(o.open(n,this.sandbox.sandboxEl),i.preventDefault(t))}),t.after("render",function(){this.on("click","followButton",function(t,e){this.handleFollowButtonClick(t,e)})})}var i=n(23),o=n(26),a=n(8),s=n(28),u=n(15);t.exports=r},145:function(t,e,n){function r(t,e,n){var r={};return t=t||{},n&&t.max?r.minPosition=t.max:!n&&t.min?r.maxPosition=t.min:n?r.sinceId=e:r.maxId=e,r}function i(t){t.selectors({tweet:".tweet",viewport:".stream",tweetList:".h-feed",tweetsInStream:".h-feed .tweet",newTweetsNotifier:".new-tweets-bar",loadMoreButton:".load-more"}),t.define("gcTweetsSync",function(){var t="custom"===this.el.getAttribute("data-timeline-type"),e=this.selectOne("tweetList");return t?a.resolve():void p(e,y)}),t.define("scribeImpressionsForDynamicTweetSet",function(t,e){var n=l.toRealArray(t.querySelectorAll(this.selectors.tweet)),r=h(n),i=Object.keys(r),o=e?"newer":"older",a=e?w.CLIENT_SIDE_APP:w.CLIENT_SIDE_USER;this.scribe({component:"timeline",element:o,action:"results"},{item_ids:i,item_details:r,event_initiator:a})}),t.define("fetchTweets",function(t,e){function n(t){return"404"===t?o.pollInterval=null:"503"===t&&(o.pollInterval*=1.5),a.reject(t)}function i(n){var r,i=o.sandbox.createFragment(),a=o.sandbox.createElement("ol"),s=e?b.NEWER:b.OLDER;return v(o,n,s),a.innerHTML=n.html,r=a.firstElementChild,r&&"LI"===r.tagName?(r.getAttribute("data-tweet-id")===t&&a.removeChild(r),o.scribeImpressionsForDynamicTweetSet(a,e),o.prepForInsertion(a),l.toRealArray(a.children).forEach(function(t){i.appendChild(t)}),i):i}var o=this,s=r(this.cursors,t,e);return m.poll(l.aug(s,this.params)).then(i,n)}),t.define("loadOldTweets",function(){var t=this,e=this.selectLast("tweetsInStream"),n=e&&e.getAttribute("data-tweet-id");return n?this.fetchTweets(n,!1).then(function(e){var n=t.selectOne("tweetList");return u.write(function(){e.childNodes.length>0?n.appendChild(e):s.add(t.el,"no-more")})}):a.reject(new Error("unable to load more"))}),t.after("loadOldTweets",function(){g.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"older"})}),t.define("loadNewTweets",function(){var t=this,e=this.selectOne("tweetsInStream"),n=e&&e.getAttribute("data-tweet-id");return n?this.fetchTweets(n,!0).then(function(n){var r,i,o=t.selectOne(".stream"),a=t.selectOne(".h-feed");return 0!==n.childNodes.length?(u.read(function(){r=o.scrollTop,i=o.scrollHeight}),u.defer(function(){var c;return a.insertBefore(n,e),c=r+o.scrollHeight-i,r>40||t.mouseIsOverWidget?(o.scrollTop=c,void t.showNewTweetsNotifier()):(s.remove(t.el,"pending-scroll-in"),a.style.marginTop="-"+c+"px",u.write(function(){o.scrollTop=0,s.add(t.el,"pending-scroll-in"),a.style.marginTop="",t.gcTweetsSync()}))})):void 0}):a.reject(new Error("unable to load new tweets"))}),t.after("loadNewTweets",function(){g.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"newer"})}),t.define("showNewTweetsNotifier",function(){var t=this,e=this.selectOne("newTweetsNotifier"),n=e&&e.firstElementChild;return c.setTimeout(function(){t.hideNewTweetsNotifier()},x),u.write(function(){e.removeChild(n),e.appendChild(n),s.add(t.el,"pending-new-tweet-display")}),u.defer(function(){s.add(t.el,"pending-new-tweet")})}),t.define("hideNewTweetsNotifier",function(t){var e=this,n=new o;return t=t||{},!t.force&&this.mouseIsOverNewTweetsNotifier?(n.resolve(),n.promise):(u.write(function(){s.remove(e.el,"pending-new-tweet")}),c.setTimeout(function(){u.write(function(){s.remove(e.el,"pending-new-tweet-display")}).then(n.resolve,n.reject)},E),n.promise)}),t.define("scrollToTopOfViewport",function(){var t=this.selectOne("viewport");return u.write(function(){t.scrollTop=0,t.focus()})}),t.define("schedulePolling",function(){function t(){n.isPollInProgress=!1}function e(){var i=r||n.pollInterval;i&&c.setTimeout(function(){n.isPollInProgress||(n.isPollInProgress=!0,n.loadNewTweets(n.sandbox).then(t,t)),e()},i)}var n=this,r=d.get("timeline.pollInterval");e()}),t.after("initialize",function(){this.isPollInProgress=!1,this.mouseIsOverWidget=!1,this.mouseIsOverNewTweetsNotifier=!1,this.cursors={},this.pollInterval=1e4}),t.after("render",function(){this.isStaticTimeline||this.isPreviewTimeline||(this.select("tweet").length>0&&this.schedulePolling(),this.on("mouseover",function(){this.mouseIsOverWidget=!0}),this.on("mouseout",function(){this.mouseIsOverWidget=!1}),this.on("mouseover","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!0}),this.on("mouseout","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!1}),this.on("click","newTweetsNotifier",function(){this.scrollToTopOfViewport(),this.hideNewTweetsNotifier({force:!0})}),this.on("click","loadMoreButton",function(){this.loadOldTweets()}))})}var o=n(1),a=n(2),s=n(24),u=n(58),c=n(7),d=n(17),l=n(14),f=n(71),h=n(111),p=n(114),m=n(115),v=n(121),g=n(52),w=n(146),b=n(122),y=50,x=5e3,E=500;t.exports=f.couple(n(123),i)},146:function(t,e){t.exports={CLIENT_SIDE_USER:0,CLIENT_SIDE_APP:2}},147:function(t,e,n){function r(t,e){var n,r,i;return(n=e.getAttribute("data-player"))?(r=t.createElement("iframe"),r.src=n):(i=t.createElement("a"),i.href=e.getAttribute("data-href"),r=t.createElement("img"),r.src=e.getAttribute(c.retina()?"data-image-2x":"data-image"),r.alt=e.getAttribute("data-alt"),i.appendChild(r)),r.title=e.getAttribute("data-title"),{mediaEl:r,rootEl:n?r:i}}function i(t){t.selectors({tweet:".tweet",tweetContent:".e-entry-content",showNsfwButton:".display-sensitive-image",nsfwInterstitial:".nsfw",expandoExpander:".detail-expander"}),t.define("displayNsfwMedia",function(t){var e,n,i,o=t.querySelector(this.selectors.nsfwInterstitial),a=t.querySelector(this.selectors.tweetContent),c=t.querySelector(this.selectors.expandoExpander),d=c&&c.children[0];return o&&a&&d?(e=r(this.sandbox,o),n=e.rootEl,i=e.mediaEl,s.read(function(){var t=u.scaleDimensions(o.getAttribute("data-width"),o.getAttribute("data-height"),a.offsetWidth,o.getAttribute("data-height"));i.width=t.width,i.height=t.height}),s.write(function(){o.parentElement.replaceChild(n,o)})):void 0}),t.after("render",function(){this.on("click","showNsfwButton",function(t,e){var n=a.closest(this.selectors.tweet,e,this.el);n&&(this.displayNsfwMedia(n),o.preventDefault(t))})})}var o=n(23),a=n(25),s=n(58),u=n(140),c=n(8);t.exports=i},148:function(t,e,n){function r(t){var e=t&&t.querySelector("b");return e?(u.write(function(){var n=e.innerText||e.textContent;e.innerHTML=t.getAttribute("data-toggled-text"),t.setAttribute("data-toggled-text",n)}),!0):!1}function i(t){t.selectors({tweetContent:".e-entry-content",expandoLink:".expand",tweetWithExpando:".with-expansion",expandoExpander:".detail-expander",expandoContentContainer:".detail-content"}),t.define("toggleExpando",function(t){var e,n=t.querySelector(this.selectors.tweetContent),i=t.querySelector(this.selectors.expandoLink),a=t.querySelector(this.selectors.expandoExpander),s=t.querySelector(this.selectors.expandoContentContainer),h=s&&s.getAttribute("data-expanded-media");return r(i)?o.present(t,d)?u.write(function(){o.remove(t,d),a.style.cssText="",s.innerHTML=""}):h?(u.read(function(){e=n.clientWidth}),u.write(function(){s.innerHTML=h,c.retinize(s),c.setSrcForImgs(s,e,u.sync),c.sizeIframes(s,e,l,u.sync),a.style.maxHeight=f,o.add(t,d)})):u.write(function(){o.add(t,d)}):void 0}),t.after("render",function(){this.isStaticTimeline||(this.on("click","expandoLink",function(t,e){var n=s.closest(this.selectors.tweetWithExpando,e,this.el),r=t.altKey||t.metaKey||t.shiftKey;n&&!r&&(this.toggleExpando(n),a.preventDefault(t))}),this.on("click","tweetWithExpando",function(t,e){s.closest("A",t.target,this.el)||(this.toggleExpando(e),a.preventDefault(t))}))})}var o=n(24),a=n(23),s=n(25),u=n(58),c=n(140),d="expanded",l=375,f="500px";t.exports=i},150:function(t,e,n){function r(t,e){var n=d;return e&&(n=[c+" "+d,c+d].join(",")),n+"{border-color:"+t+";}"}function i(t){t.params({theme:{fallback:[u(o.val,o,"widgets:theme"),"light"],validate:s},borderColor:{fallback:[u(o.val,o,"widgets:border-color")],validate:a}}),t.after("render",function(){var t=this.params.borderColor,e="dark"===this.params.theme;t&&this.sandbox.appendCss(r(t,e))})}var o=n(16),a=n(151),s=n(120),u=n(20),c=".thm-dark",d=".customisable-border";t.exports=i},151:function(t,e){function n(t){return r.test(t)}var r=/^#(?:[a-f\d]{3}){1,2}$/i;t.exports=n},152:function(t,e,n){function r(t){return t}function i(t){return h+" "+t}function o(t,e){return t.map(e?i:r).join(",")}function a(t,e){var n=o(p,e),r=o(m,e),i=o(v,e);return[n+"{color:"+t+";}",i+"{background-color:"+t+";}",r+"{color:"+c.lighten(t,.2)+";}"].join("")}function s(t){t.params({theme:{fallback:[f(u.val,u,"widgets:theme"),"light"],validate:l},linkColor:{fallback:f(u.val,u,"widgets:link-color"),validate:d}}),t.after("render",function(){var t=this.params.linkColor,e="dark"===this.params.theme;t&&this.sandbox.appendCss(a(t,e))})}var u=n(16),c=n(153),d=n(151),l=n(120),f=n(20),h=".thm-dark",p=[".customisable",".customisable:link",".customisable:visited"],m=[".customisable:hover",".customisable:focus",".customisable:active",".customisable-highlight:hover",".customisable-highlight:focus","a:hover .customisable-highlight","a:focus .customisable-highlight"],v=["a:hover .ic-mask","a:focus .ic-mask"];t.exports=s},153:function(t,e,n){function r(t){return u.parseInt(t,16)}function i(t){return c.isType("string",t)?(t=t.replace(d,""),t+=3===t.length?t:""):null}function o(t,e){var n,o,a,s;return t=i(t),e=e||0,t?(n=0>e?0:255,e=0>e?-Math.max(e,-1):Math.min(e,1),o=r(t.substring(0,2)),a=r(t.substring(2,4)),s=r(t.substring(4,6)),"#"+(16777216+65536*(Math.round((n-o)*e)+o)+256*(Math.round((n-a)*e)+a)+(Math.round((n-s)*e)+s)).toString(16).slice(1)):void 0}function a(t,e){return o(t,-e)}function s(t,e){return o(t,e)}var u=n(7),c=n(14),d=/^#/;t.exports={darken:a,lighten:s}}});