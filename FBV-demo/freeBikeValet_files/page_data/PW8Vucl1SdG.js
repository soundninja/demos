/*!CK:335290174!*//*1443535771,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["lA4mr"]); }

__d("FBFeedLocations",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NEWSFEED:1,GROUP:2,GROUP_PERMALINK:3,COMMUNITY:4,PERMALINK:5,SHARE_OVERLAY:6,PERMALINK_STREAM:7,GROUP_PINNED:8,FRIEND_LIST:9,TIMELINE:10,HASHTAG_FEED:11,TOPIC_FEED:12,PAGE:13,NOTIFICATION_FEED:14,GROUP_REPORTED:15,GROUP_PENDING:16,PAGES_FEED_IN_PAGES_MANAGER:17,TICKER_CLASSIC:18,PAGES_SUGGESTED_FEED_IN_PAGES_MANAGER:19,SEARCH:20,GROUP_SEARCH:21,NO_ATTACHMENT:22,EMBED:23,EMBED_FEED:24,ATTACHMENT_PREVIEW:25,STORIES_TO_SHARE:26,PROMPT_PERMALINK:27,TREND_HOVERCARD:28,LIKE_BOX:29,OPEN_GRAPH_PREVIEW:30,HOTPOST_IN_PAGES_FEED:31,SCHEDULED_POSTS:32,TIMELINE_NOTES:33,PAGE_INSIGHTS:34,COMMENT_ATTACHMENT:35,PAGE_TIMELINE:36,GOODWILL_THROWBACK_PERMALINK:37,AGGREGATED_STORY_DIALOG:38,LIKE_CONFIRM:39,GOODWILL_THROWBACK_PROMOTION:40,SPACES_FEED:41,BROWSE_CONSOLE:42,GROUP_FOR_SALE_COMPACT:43,ENTITY_FEED:44,GROUP_FOR_SALE_DISCUSSION:45,PAGES_CONTENT_TAB_PREVIEW:46,GOODWILL_THROWBACK_SHARE:47,TIMELINE_VIDEO_SHARES:48,EVENT:49,PAGE_PLUGIN:50,SRT:51,PAGES_CONTENT_TAB_INSIGHTS:52,ADS_PE_CONTENT_TAB_INSIGHTS:53,PAGE_ACTIVITY_FEED:54,VIDEO_CHANNEL:55,POST_TO_PAGE:56,GROUPS_GSYM_HOVERCARD:57,GROUP_POST_TOPIC_FEED:58,FEED_SURVEY:59,PAGES_MODERATION:60,SAVED_DASHBOARD:61,PULSE_SEARCH:62,GROUP_NUX:63,GROUP_NUX_POST_VIEW:64,EVENT_PERMALINK:65};},null,{});
__d('LinkshimAsyncLink',['$','AsyncSignal','DOM','UserAgent_DEPRECATED','LinkshimHandlerConfig'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={swap:function(n,o){var p=k.ie()<=8;if(p){var q=j.create('wbr',{},null);j.appendContent(n,q);}n.href=o;if(p)j.remove(q);},referrer_log:function(n,o,p){var q=h('meta_referrer');q.content='origin';m.swap(n,o);setTimeout(function(){q.content=l.default_meta_referrer_policy;new i(p,{}).send();},100);}};f.exports=m;},null);
__d('legacy:dom-asynclinkshim',['LinkshimAsyncLink'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.LinkshimAsyncLink=c('LinkshimAsyncLink');},3);
__d('randomInt',['invariant'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){var l=arguments.length;!(l>0&&l<=2)?h(0):undefined;if(l===1){k=j;j=0;}!(k>j)?h(0):undefined;var m=this.random||Math.random;return Math.floor(j+m()*(k-j));}f.exports=i;},null);
__d('ClientIDs',['randomInt'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={},j={getNewClientID:function(){var k=Date.now(),l=k+':'+(h(0,4294967295)+1);i[l]=true;return l;},isExistingClientID:function(k){return !!i[k];}};f.exports=j;},null);
__d('ServerTime',['InitialServerTime'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();l(h.serverTime);var i;function j(){return Date.now()-i;}function k(){return i;}function l(m){i=Date.now()-m;}f.exports={getMillis:j,getOffsetMillis:k,update:l,get:j,getSkew:k};},null);
__d("nullthrows",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(i){if(i!=null)return i;throw new Error("Got unexpected null or undefined");};f.exports=h;},null);
__d('AttachmentRelatedShareConstants',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ARTICLE_CLICK:'article_click',VIDEO_CLICK:'video_click',FBVIDEO_CLICK:'fbvideo_click',GAME_CLICK:'game_click',EVENT_DELAY:1000,HIDE_DELAY:100,PHOTO_CLICK:'photo_click',EVENT_JOIN:'event_join'};f.exports=h;},null);
__d('tidyEvent',['Run'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=[];function j(){while(i.length){var m=i.shift();m&&m.remove?m.remove():m.unsubscribe();}}function k(m){var n;function o(){if(!n)return;n.apply(m,arguments);n=null;m=null;}if(m.remove){n=m.remove;m.remove=o;}else{n=m.unsubscribe;m.unsubscribe=o;}return m;}function l(m){if(!i.length)h.onLeave(j);if(Array.isArray(m)){for(var n=0;n<m.length;n++)i.push(k(m[n]));}else i.push(k(m));return m;}f.exports=l;},null);
__d("XPubcontentInlinePhotoPivotsEventsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/inline_photo_pivots_chaining\/events\/",{});},null,{});
__d('EntstreamAttachmentRelatedShare',['Arbiter','AsyncRequest','AttachmentRelatedShareConstants','csx','cx','CSS','DOM','Event','ge','tidyEvent','XPubcontentInlinePhotoPivotsEventsController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=2,t=3,u={loadRelatedAttachment:function(v,w,x){var y=null;if(typeof v==="string"){y=p(v);}else y=v;if(!y)return;var z=o.listen(y,'click',function(){z.remove();h.inform(j.ARTICLE_CLICK,{attachment:y,global_share_id:w,is_right_click:false,share_id:x});}),aa=o.listen(y,'mousedown',function(event){if(event.which===t||event.button===s){aa.remove();h.inform(j.ARTICLE_CLICK,{attachment:y,global_share_id:w,is_right_click:true});}});},loadInlineStoryPivotAttachment:function(v,w){var x=p(v);if(!x)return;var y=o.listen(x,'click',function(){y.remove();h.inform(j.PHOTO_CLICK,{attachment:x,storyid:w});});},loadRelatedGameAttachment:function(v,w){var x=null;if(typeof v==="string"){x=p(v);}else x=v;if(!x)return;q(o.listen(x,'click',function(){h.inform(j.GAME_CLICK,{attachment:x,global_share_id:w});}));q(o.listen(x,'mousedown',function(event){if(event.which===t||event.button===s)h.inform(j.GAME_CLICK,{attachment:x,global_share_id:w});}));},loadRelatedLSCVideoAttachment:function(v,w){var x=null;if(typeof v==='string'){x=p(v);}else x=v;if(!x)return;var y="^div._4-u2",z=n.scry(x,y),aa=o.listen(x,'click',function(){aa.remove();h.inform(j.VIDEO_CLICK,{attachment:x,global_share_id:w});});},loadRelatedLSCInlineVideoAttachment:function(v,w){var x=null;if(typeof v==='string'){x=p(v);}else x=v;if(!x)return;o.listen(x,'click',function(){var y="^div._4-u2",z="_1d8v",aa=n.scry(x,y),ba=aa.length===1?aa[0]:null,ca=ba.parentNode,da=ca.previousSibling;while(!da){ca=ca.parentNode;da=ca.previousSibling;}if(!m.hasClass(da,z)){var ea=n.create('div',{className:z}),fa=n.insertBefore(ba.parentNode,ea),ga=fa.length>=1?fa[0]:null;}else ga=da;var ha=n.getID(ga);new i().setURI('/ajax/flash/expand_inline.php').setData({share_id:w,target_div:ha,max_width:470,max_height:264,replace_target_div:true}).setMethod('GET').setReadOnly(true).setRelativeTo(x.parentNode).send();});},loadRelatedEventsPivotAttachment:function(v,w){var x=null;if(typeof v==="string"){x=p(v);}else x=v;if(!x)return;q(o.listen(x,'click',function(){h.inform(j.EVENT_JOIN,{attachment:x,event_id:w});}));},closeButton:function(v,w){o.listen(v,'click',function(){n.remove(w);});},closeButtonPhotoPivots:function(v,w,x,y){o.listen(v,'click',function(){var z=r.getURIBuilder(),aa={story_id:x,search_query_type:y,event:'hide'};new i().setMethod('POST').setURI(z.getURI()).setData(aa).send();n.remove(w);});},seeAllLinkPhotoPivots:function(v,w,x){o.listen(v,'click',function(){var y=r.getURIBuilder(),z={story_id:w,search_query_type:x,event:'see_all'};new i().setMethod('POST').setURI(y.getURI()).setData(z).send();});},removeOldSuggestions:function(v){var w=p(v);if(!w)return;var x=n.scry(w.parentNode,"._5d73");for(var y=1;y<x.length;y++)n.remove(x[y]);setTimeout(function(){m.show(x[0]);},1000);},showHiddenSuggestions:function(v){var w=o.listen(v,'click',function(){w.remove();var x="^._1ui8",y=n.scry(v,x);if(!y)return;m.hide(y[0]);var z=y[0].previousSibling;while(z){m.show(z);z=z.previousSibling;}});}};f.exports=u;},null);
__d('FeedTrackingAsync',['Arbiter','collectDataAttributes'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(){h.subscribe('AsyncRequest/send',function(k,l){var m=l.request,n=m.getRelativeTo();if(n){var o=m.getData(),p=i(n,['ft']);if(Object.keys(p.ft).length)Object.assign(o,p);}});}f.exports={init:j};},null);
__d('LitestandStoryInsertionStatus',['ArbiterMixin'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='check',j={registerBlocker:function(k){return j.subscribe(i,function(l,m){if(m.can_insert&&k())m.can_insert=false;});},canInsert:function(){var k={can_insert:true};j.inform(i,k);return k.can_insert;}};Object.assign(j,h);f.exports=j;},null);
__d('LitestandStream',['CSS','DOMQuery','LitestandStoryInsertionStatus','ViewportBounds','cx','csx','ge','getElementPosition','getOrCreateDOMID','nullthrows'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r,s,t={init:function(u,v,w){r=w;s=u;},getStoriesSelector:function(){return "._5jmm";},getStreamRoot:function(){return s;},getSectionID:function(){return r;},isStory:function(u){return h.hasClass(u,"_5jmm");},canInsertNewerStories:function(){if(k.getTop()>o(t.getStreamRoot()).y)return false;return j.canInsert();},getFeedStreamID:function(){return parseInt(q(s).id.split('feed_stream_')[1],16)%1e+08;},setAriaLabelledBy:function(u){var v=n(u),w;if(v&&this.isStory(v)){if(v.getAttribute('aria-labelledby'))return;w=[].concat(i.scry(v,"._5pbw")).concat(i.scry(v,"._5pcp")[0]||[]).concat(i.scry(v,"._5pbx")[0]||[]);if(w.length>0)v.setAttribute('aria-labelledby',w.map(function(x){return p(x);}).join(' '));}}};f.exports=t;},null);
__d('LiveTimer',['CSS','DOM','ServerTime','fbt'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=1000,m=60,n=3600,o=43200,p=86400,q=60,r=20000,s={restart:function(t){j.update(t*1000);this.updateTimeStamps();},getApproximateServerTime:function(){return j.get();},getServerTimeOffset:function(){return -1*j.getSkew();},updateTimeStamps:function(){this.timestamps=i.scry(document.body,'abbr.livetimestamp');this.startLoop(r);},addTimeStamps:function(t){if(!t)return;this.timestamps=this.timestamps||[];if(i.isNodeOfType(t,'abbr')&&h.hasClass(t,'livetimestamp')){this.timestamps.push(t);}else{var u=i.scry(t,'abbr.livetimestamp');for(var v=0;v<u.length;++v)this.timestamps.push(u[v]);}this.startLoop(0);},removeTimestamp:function(t){if(!this.timestamps||!t)return;var u=this.timestamps.indexOf(t);if(u>-1)this.timestamps.splice(u,1);},startLoop:function(t){this.stop();this.timeout=setTimeout((function(){this.loop();}).bind(this),t);},stop:function(){clearTimeout(this.timeout);},loop:function(t){if(t)this.updateTimeStamps();var u=Math.floor(j.get()/l),v=-1;this.timestamps&&this.timestamps.forEach((function(x){var y=x.getAttribute('data-utime'),z=x.getAttribute('data-shorten'),aa=x.getAttribute('data-minimize'),ba=this.renderRelativeTime(u,y,z,aa);if(ba.text)i.setContent(x,ba.text);if(ba.next!=-1&&(ba.next<v||v==-1))v=ba.next;}).bind(this));if(v!=-1){var w=Math.max(r,v*l);this.timeout=setTimeout((function(){this.loop();}).bind(this),w);}},renderRelativeTime:function(t,u,v,w){var x={text:"",next:-1};if(t-u>p)return x;var y=t-u,z=Math.floor(y/m),aa=Math.floor(z/q);if(z<1){if(w){x.text=k._("1m");x.next=20-y%20;}else if(v){x.text=k._("Just now");x.next=20-y%20;}else{x.text=k._("a few seconds ago");x.next=m-y%m;}return x;}if(aa<1){if(w){x.text=k._({"*":"{number}m"},[k.param('number',z,[0])]);}else if(v&&z==1){x.text=k._("1 min");}else if(v){x.text=k._({"*":"{number} mins"},[k.param('number',z,[0])]);}else x.text=z==1?k._("about a minute ago"):k._({"*":"{number} minutes ago"},[k.param('number',z,[0])]);x.next=m-y%m;return x;}if(aa<11)x.next=n-y%n;if(w){x.text=k._({"*":"{number}h"},[k.param('number',aa,[0])]);}else if(v&&aa==1){x.text=k._("1 hr");}else if(v){x.text=k._({"*":"{number} hrs"},[k.param('number',aa,[0])]);}else x.text=aa==1?k._("about an hour ago"):k._({"*":"{number} hours ago"},[k.param('number',aa,[0])]);return x;},renderRelativeTimeToServer:function(t,u,v){return this.renderRelativeTime(Math.floor(j.get()/l),t,u,v);}};f.exports=s;f.exports.CONSTS={MS_IN_SEC:l,SEC_IN_MIN:m,SEC_IN_HOUR:n,SEC_IN_12_HOUR:o,SEC_IN_24_HOUR:p,MIN_IN_HOUR:q,HEARTBEAT:r};},null);
__d('AsyncFormRequestUtils',['Arbiter'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={subscribe:function(j,k,l){h.subscribe('AsyncRequest/'+k,function(m,n){var o=n.request.relativeTo;if(o&&o===j)l(n);});}};f.exports=i;},null);
__d('EmbedLikeButton',['Arbiter','AsyncFormRequestUtils','ClientIDs','CSS','DOM','DOMQuery','DOMEventListener','Event','FBFeedLocations','Form','PluginOptin','URI'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();window.resetConfirmStoryLike=function(u){k.show(m.find(document,'#likeStory_'+u));l.remove(m.find(document,'#confirmStory_'+u));};var t={addClientId:function(u){u.setAttribute('value',j.getNewClientID());},loggedOutLikeButton:function(u,v,w){var x='';if(v===p.EMBED){x='post';}else if(v===p.PAGE_PLUGIN){x='page';}else throw new Error('Invalid FBFeedLocation type.');var y=new r(x).addReturnParams({act:'like_'+u});n.add(w,'click',y.start.bind(y));},init:function(u,v,w,x,y){var z=function(ca){return q.bootstrap(y);};o.listen(v,'click',z);o.listen(w,'click',z);var aa=x.getAttribute('value')==='1';i.subscribe(y,'send',function(ca){aa=x.getAttribute('value')==='1';if(aa){k.hide(v);k.show(w);}else{k.hide(w);k.show(v);}h.inform('embeddedUfiToggle');x.setAttribute('value',aa?'':'1');});var ba=new s(window.location.search).getQueryData();if(aa&&ba.act==='like_'+u)q.bootstrap(y);}};f.exports=t;},null);
__d('PluginTabLoadMore',['CSS','Event'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j={noMoreContent:function(){i.fire(this.root,'noMoreContent');h.hide(this.spinner);},setCursor:function(k){i.fire(this.root,'setCursor',k);},init:function(k,l){this.root=k;this.spinner=l;}};f.exports=j;},null);