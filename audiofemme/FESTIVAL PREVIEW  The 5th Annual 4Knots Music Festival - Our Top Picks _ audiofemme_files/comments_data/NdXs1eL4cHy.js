/*!CK:4132416016!*//*1436153268,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["6OREU"]); }

__d("UFIOrderingModeSelector.react",["InlineBlock.react","Link.react","React","Image.react","ReactXUIMenu","PopoverMenu.react","cx","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o=i,p=o.PropTypes,q=k.SelectableMenu,r=k.SelectableItem,s=i.createClass({displayName:"UFIOrderingModeSelector",propTypes:{onOrderChanged:p.func,orderingmodes:p.array.isRequired},getInitialState:function(){var t=null;this.props.orderingmodes.map(function(u){if(u.selected)t=u;});return {selectedMode:t};},onMenuItemClick:function(t,u){var v=u.item.getValue();this.props.orderingmodes.map(function(w){if(w.value===v)this.setState({selectedMode:w});}.bind(this));this.props.onOrderChanged(v);},render:function(){var t=i.createElement(q,{onItemClick:this.onMenuItemClick},this.props.orderingmodes.map(function(u){return i.createElement(r,{key:u.value,value:u.value,selected:u.value===this.state.selectedMode.value},u.name);}.bind(this)));return (i.createElement("div",{className:"UFIOrderingModeSelector"},i.createElement(g,null,i.createElement(l,{className:"UFIOrderingModeSelectorPopover",menu:t,alignh:"right"},i.createElement(h,null,this.state.selectedMode.name,i.createElement(j,{className:"UFIOrderingModeSelectorDownCaret",src:n('/images/ui/xhp/link/more/down_caret.gif')}))))));}});e.exports=s;},null);
__d("BanzaiNectar",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(j){return {log:function(k,l,m){var n={e:l,a:m};g.post('nectar:'+k,n,j);}};}var i=h();i.create=h;e.exports=i;},null);
__d("AccessibilityLogger",["AsyncSignal","Cookie"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={COOKIE:'a11y',DECAY_MS:6*60*60*1000,DEFAULT:{sr:0,'sr-ts':Date.now(),jk:0,'jk-ts':Date.now(),kb:0,'kb-ts':Date.now(),hcm:0,'hcm-ts':Date.now()},getCookie:function(){var j=i.DEFAULT,k=h.get(i.COOKIE);if(k){k=JSON.parse(k);for(var l in j)if(l in k)j[l]=k[l];}return j;},logKey:function(j,k){var l=i.getCookie();l[j]++;var m=Date.now();if(m-l[j+'-ts']>i.DECAY_MS){new g('/ajax/accessibilitylogging',{eventName:k,times_pressed:l[j]}).send();l[j+'-ts']=m;l[j]=0;}h.set(i.COOKIE,JSON.stringify(l));},logHCM:function(){i.logKey('hcm','hcm_users');},logSRKey:function(){i.logKey('sr','sr_users');},logJKKey:function(){i.logKey('jk','jk_users');},logFocusIn:function(){i.logKey('kb','kb_users');}};e.exports=i;},null);
__d("KeyboardShortcuts",["KeyEventController","Layer","ModalLayer"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(l,m,n){"use strict";this.key=l;this.handler=m;this.filter=n;this.register();}j.prototype.register=function(){"use strict";this.token=g.registerKey(this.key,this.handler,this.filter);};j.prototype.remove=function(){"use strict";this.token.remove();};var k={_tokens:[[]],register:function(l,m,n){n=n||{};var o=n.allowDefault?m:function(event,s){m.apply(this,arguments);event.prevent();},p=n.baseFilters||[g.defaultFilter],q=function(event,s){for(var t=0,u=p.length;t<u;t++)if(!p[t](event,s))return false;return !n.filter||n.filter(event,s);},r=new j(l,o,q);this._tokens[this._tokens.length-1].push(r);return r;},init:function(){h.subscribe('show',function(l,m){if(m.hasBehavior(i))this.pushLayer();}.bind(this));h.subscribe('hide',function(l,m){if(m.hasBehavior(i))this.popLayer();}.bind(this));},pushLayer:function(){var l=this._tokens[this._tokens.length-1];l&&l.forEach(function(m){m.remove();});this._tokens.push([]);},popLayer:function(){var l=this._tokens.length-1;if(l<0)return;var m=this._tokens[l];m.forEach(function(o){o.remove();});this._tokens.pop();var n=this._tokens[l-1];n&&n.forEach(function(o){o.register();});}};k.init();e.exports=k;},null);
__d("LikeConfirmer",["AsyncDialog","AsyncRequest"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=false,j=false,k={likeContent:function(){},like:function(l,m){this.likeContent=l;if(j)return;if(i){this.likeContent();}else{var n=new h().setURI('/like/confirm_like.php').setRelativeTo(m);g.send(n,function(o){j=true;o.subscribe('hide',this.onCloseLikeConfirmDialog.bind(this));o.setCausalElement(m);}.bind(this));}return false;},isShowingConfirmation:function(){return j;},onCloseLikeConfirmDialog:function(){j=false;},likeSkipConfirmation:function(l){i=l;this.likeContent();}};e.exports=k;},null);
__d("FeedBaseKeyboardController",["$","AccessibilityLogger","Arbiter","AsyncDialog","AsyncRequest","Banzai","BanzaiODS","BanzaiNectar","CSS","DOM","DOMScroll","DOMQuery","Event","Focus","KeyboardShortcuts","LikeConfirmer","NavigationMessage","Parent","ReactComposerEvents","ReactComposerIDGenerator","Run","Scroll","SubscriptionsHandler","UITinyViewportAction","Vector","ViewportBounds","csx","emptyFunction","ge","getActiveElement","isAsyncScrollQuery","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la){b.__markCompiled&&b.__markCompiled();var ma;function na(){ma=da.isTiny()?0:g('pagelet_bluebar').offsetTop+g('pagelet_bluebar').offsetHeight;}setTimeout(na,0);s.listen(window,'resize',la(na));function oa(pa){"use strict";this.root=pa;this.init();}oa.prototype.getStories=function(){"use strict";};oa.prototype.getParentStory=function(pa){"use strict";};oa.prototype.isStory=function(pa){"use strict";};oa.prototype.isHoldoutStory=function(pa){"use strict";};oa.prototype.getHeadline=function(pa){"use strict";};oa.prototype.getPreviousStory=function(pa){"use strict";};oa.prototype.getNextStory=function(pa){"use strict";};oa.prototype.setSelected=function(pa,qa){"use strict";};oa.prototype.clickLike=function(){"use strict";};oa.prototype.clickComment=function(){"use strict";};oa.prototype.clickShare=function(){"use strict";};oa.prototype.clickSeeMore=function(){"use strict";};oa.prototype.clickLeft=function(){"use strict";};oa.prototype.clickRight=function(){"use strict";};oa.prototype.openAttachment=function(){"use strict";};oa.prototype.focusComposer=function(){"use strict";var pa=ia('pagelet_composer');if(!pa)pa=ia('pagelet_group_composer');if(pa){var qa=p.scry(pa,'textarea')[0];if(qa){t.set(qa);q.scrollToTop(true);}else{var ra=p.scry(pa,"div._36bx")[0],sa=ra&&ra.id;if(z.isComposerID(sa)){i.inform(y.FOCUS,{composerID:ra.id});q.scrollToTop(true);}}}};oa.prototype.getScrollOffset=function(){"use strict";return 10;};oa.prototype.getAnimationLength=function(pa){"use strict";return Math.min(Math.abs(ea.getElementPosition(pa).y-fa.getTop()-ba.getTop(document.body)),400);};oa.prototype.findTop=function(){"use strict";var pa=this.getStories();for(var qa=0;qa<pa.length;qa++)if(ea.getElementPosition(pa[qa]).y>ea.getScrollPosition().y)return pa[qa];};oa.prototype.onLeave=function(){"use strict";this.subscriptions&&this.subscriptions.release();};oa.prototype.getHelpDialogRequest=function(){"use strict";if(!this.dialogRequest){this.dialogRequest=new k('/ajax/keyboard_shortcuts');this.dialogRequest.setReadOnly(true);}else if(this.dialogRequest.transport)return null;return this.dialogRequest;};oa.prototype.init=function(){"use strict";aa.onLeave(this.onLeave.bind(this));this.subscriptions=new ca();this.subscriptions.addSubscriptions(i.subscribe(w.NAVIGATION_BEGIN,this.onLeave.bind(this)),u.register('j',this.vert.bind(this,1)),u.register('k',this.vert.bind(this,-1)),u.register('l',function(){var pa=this.getParentStory(ja());v.like(function(){this.setSelected(pa,false);this.clickLike();}.bind(this),ja());}.bind(this),{filter:this.hasActiveStory.bind(this)}),u.register('c',this.clickComment.bind(this),{filter:this.hasActiveStory.bind(this)}),u.register('o',this.openAttachment.bind(this),{filter:this.hasActiveStory.bind(this)}),u.register('p',this.focusComposer.bind(this)),u.register('s',this.clickShare.bind(this),{filter:this.hasActiveStory.bind(this)}),u.register('SLASH',function(){var pa=this.getHelpDialogRequest();if(pa){pa.setRelativeTo(ja());j.send(pa);}}.bind(this),{filter:function(event,pa){return event.getModifiers().shift;}}),u.register('RETURN',this.clickSeeMore.bind(this),{filter:this.hasExpandableStoryInFocus.bind(this)}),u.register('LEFT',this.clickLeft.bind(this),{filter:this.hasActiveStory.bind(this)}),u.register('RIGHT',this.clickRight.bind(this),{filter:this.hasActiveStory.bind(this)}),s.listen(this.root,'focusin',function(event){var pa=event.getTarget();if(!this.isStory(pa)){var qa=(pa.nodeName=='OBJECT'||pa.nodeName=='EMBED'||pa.nodeName=='IFRAME'),ra=this.getParentStory(pa),sa=this.selected;if(ra&&!qa&&sa){this.setSelected(ra,true);this.selected=ra;}}}.bind(this)));};oa.prototype.hasActiveStory=function(event,pa){"use strict";var qa=ja();return !(qa&&o.shown(qa))||!!this.getParentStory(qa);};oa.prototype.hasExpandableStoryInFocus=function(event,pa){"use strict";var qa=ja();return !!(qa.getElementsByClassName('text_exposed_root').length&&!qa.getElementsByClassName('text_exposed_root text_exposed').length);};oa.prototype.click=function(pa){"use strict";if(!this.selected)return;var qa;for(var ra=0,sa=arguments.length;ra<sa;ra++){qa=p.scry(this.selected,arguments[ra])[0];if(qa&&o.shown(qa)){qa.click();return;}}};oa.prototype.vert=function(pa){"use strict";if(!this.scrollInitialized){this.subscriptions.addSubscriptions(s.listen(document,'scroll',function(){if(this.selected&&!this.scrolling)this.setSelected(null,false);}.bind(this)));this.scrollInitialized=true;}var qa,ra;if(this.selected){if(l.isEnabled('kbshortcuts_feed')){ra=pa>0?'kbshortcuts.scroll_down':'kbshortcuts.scroll_up';m.bumpEntityKey('kbshortcuts_feed',ra);n.log('feed_scroll',ra,{});}h.logJKKey();if(this.selected.id=='pagelet_composer'){qa=pa>0?this.getStories()[0]:null;if(this.isHoldoutStory(qa))qa=this.getPreviousStory(qa);}else if(pa===0){qa=this.selected;}else qa=pa>0?this.getNextStory(this.selected):(this.getPreviousStory(this.selected)||ia('pagelet_composer'));if(!qa){return;}else if(!r.isElementNode(qa)){o.removeClass(this.selected,'selectedStorySimple');this.selected=qa;return this.vert(pa);}}if(!qa||x.byClass(qa,'hidden_elem')||!p.contains(document,qa)){qa=this.findTop();if(qa&&pa<0)qa=this.getPreviousStory(qa);if(this.isHoldoutStory(qa))qa=this.getPreviousStory(qa);}if(!qa)return;this.anim&&this.anim.stop();var sa=(Date.now()-(this.lastScroll||0)>30);if(pa!==0)var ta=this.setFocused.bind(this,qa);if(ka()){sa=false;ta();ta=ha;}this.scrolling=true;this.scrollingTimer&&window.clearTimeout(this.scrollingTimer);this.anim=q.scrollTo(qa,sa?this.getAnimationLength(qa):0,false,ea.getViewportDimensions().y-ma-this.getScrollOffset(),0,function(){this.scrollingTimer=window.setTimeout(function(){this.scrolling=false;}.bind(this),300);var ua=ea.getScrollPosition();ta();if(ua.distanceTo(ea.getScrollPosition())!==0)q.scrollTo(ua,0);}.bind(this));this.setSelected(qa,true);this.lastScroll=Date.now();};oa.prototype.isInteractive=function(pa){"use strict";return ((pa.nodeName=='INPUT')||(pa.nodeName=='BUTTON')||(pa.nodeName=='TEXTAREA')||(pa.nodeName=='A')||!!x.byAttribute(pa,'contenteditable'));};oa.prototype.setTabindexOnHeadline=function(pa,qa){"use strict";if(this.isStory(pa)){var ra=this.getHeadline(pa);if(ra)ra.tabIndex=qa;}};oa.prototype.setTabindexOnStory=function(pa,qa){"use strict";if(this.isStory(pa))pa.tabIndex=qa;};oa.prototype.setFocused=function(pa){"use strict";if(this.isStory(pa))t.setWithoutOutline(pa);};e.exports=oa;},null);
__d("ModalMask",["DOM"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=null,i=0,j={show:function(){i++;if(!h){h=g.create('div',{id:'modalMaskOverlay'});g.appendContent(document.body,h);}},hide:function(){if(i){i--;if(!i&&h){g.remove(h);h=null;}}},getNode:function(){return h;}};e.exports=j;},null);
__d("LitestandComposer",["Arbiter","Bootloader","ReactComposerIDGenerator","Run","SubscriptionsHandler"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=600;function m(o,p){h.loadModules(["Animation","ComposerXController","ComposerXMarauderLogger","DOM","LitestandStream"],function(q,r,s,t,u){if(!i.isComposerID(o))r.reset(o);if(!u||!p)return;t.prependContent(u.getStreamRoot(),p);new q(p).from('opacity',0).to('opacity',1).duration(l).go();s.logCompleted(o);});}var n={initComposer:function(o){var p=new k();p.addSubscriptions(g.subscribe('LitestandComposer/publish',function(q,r){if(r.composer_id===o)m(o,r.markup);}.bind(this)));j.onLeave(function(){p.release();});}};e.exports=n;},null);
__d("LitestandStream",["Arbiter","DOMQuery","LitestandMessages","LitestandStoryInsertionStatus","ViewportBounds","csx","ge","getElementPosition","getOrCreateDOMID"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p,q,r,s={init:function(t,u,v){p=u;q=v;r=t;g.subscribe(i.STORIES_INSERTED,function(w,x){if(!x||!x.substream_id||!p)return;var y=h.scry(m(x.substream_id),s.getStoriesSelector());y.forEach(function(z){var aa=h.scry(z,"._5pbw"),ba=h.scry(z,"._5pcp")[0],ca=h.scry(z,"._5pbx")[0];if(aa[0]&&ba&&ca){var da='';for(var ea=0;ea<aa.length;ea++)da+=o(aa[ea])+' ';da.trim();z.setAttribute('aria-labelledby',da+' '+o(ba)+' '+o(ca));}});});},getStoriesSelector:function(){return "._5jmm";},getStreamRoot:function(){return r;},getSectionID:function(){return q;},canInsertNewerStories:function(){if(k.getTop()>n(s.getStreamRoot()).y)return false;return j.canInsert();},getFeedStreamID:function(){return parseInt(r.id.split('feed_stream_')[1],16)%1e+08;}};e.exports=s;},null);
__d("FbFeedKeyboardController",["CSS","DOM","DOMQuery","FeedBaseKeyboardController","Focus","JSXDOM","Parent","FbFeedHighlight","csx","cx","ge","getActiveElement"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();function s(x){if(x.previousElementSibling)return x.previousElementSibling;x=x.previousSibling;while(x&&!i.isElementNode(x))x=x.previousSibling;return x||null;}function t(x){if(x.nextElementSibling)return x.nextElementSibling;x=x.nextSibling;while(x&&!i.isElementNode(x))x=x.nextSibling;return x||null;}for(var u in j)if(j.hasOwnProperty(u))w[u]=j[u];var v=j===null?null:j.prototype;w.prototype=Object.create(v);w.prototype.constructor=w;w.__superConstructor__=j;function w(){"use strict";if(j!==null)j.apply(this,arguments);}w.prototype.getStories=function(x){"use strict";return i.scry(x||this.root,"._5jmm");};w.prototype.isHoldoutStory=function(x){"use strict";return !!x&&g.hasClass(x,'holdoutAdStory');};w.prototype.isRelevantStory=function(x){"use strict";return i.isElementNode(x)&&!this.isHoldoutStory(x);};w.prototype.isStory=function(x){"use strict";return g.hasClass(x,"_5jmm");};w.prototype.clickLike=function(){"use strict";this.click('.UFILikeLink');var x=this.getParentStory(r());if(x){var y=i.scry(x,'.UFILikeLink');for(var z=0;z<y.length;z++)if(!g.hasClass(y[z],'accessible_elem'))k.setWithoutOutline(y[z]);}};w.prototype.clickComment=function(){"use strict";this.click('.comment_link');};w.prototype.clickShare=function(){"use strict";this.click('.share_action_link');};w.prototype.clickSeeMore=function(){"use strict";this.click('.see_more_link');};w.prototype.clickLeft=function(){"use strict";this.click("._1mri");};w.prototype.clickRight=function(){"use strict";this.click("._2fu-");};w.prototype.openAttachment=function(){"use strict";this.click("._5dec","a._52c6","._4-eo",'.uiVideoThumb');};w.prototype.getHeadline=function(x){"use strict";return i.scry(x,"h5._5pbw")[0];};w.prototype.getPreviousSibling=function(x){"use strict";var y=s(x);if(y&&this.getParentStory(y))return y;y=null;var z=m.byClass(x,"_5pcb");if(z){var aa=i.scry(this.root,"._5jmm"),ba=aa.indexOf(x);while(ba>-1){if(ba===0){y=q('pagelet_composer');y=y&&m.byClass(y,"_5jmm");}else if(ba>0){y=aa[ba-1];if(y.offsetHeight>0)break;}ba--;}}return y||this.selected;};w.prototype.getPreviousStory=function(x){"use strict";var y=this.getPreviousSibling(x);while(y&&!this.isStory(y))y=this.getPreviousSibling(y);return y;};w.prototype.getParentStory=function(x){"use strict";return m.byClass(x,"_5jmm");};w.prototype.getNextSibling=function(x){"use strict";var y=t(x);if(y&&this.getParentStory(y))return y;y=null;var z=m.byClass(x,"_5pcb");if(z){var aa=i.scry(this.root,"._5jmm"),ba=aa.indexOf(x);if(ba>-1){y=aa[++ba];while(y&&y.offsetHeight===0)y=aa[++ba];}}else if(q('pagelet_composer',x))y=i.scry(document,"div._5pcb ._5jmm")[0];return y||this.selected;};w.prototype.getNextStory=function(x){"use strict";var y=this.getNextSibling(x);while(y&&!this.isStory(y))y=this.getNextSibling(y);return y;};w.prototype.setSelected=function(x,y){"use strict";if(x){var z="_5qdu",aa=i.scry(x,"._5qdu");if(!aa.length&&y)h.prependContent(x,l.div({className:z}));}if(y){this.selected&&this.setTabindexOnStory(this.selected,'-1');this.selected&&g.removeClass(this.selected,"_5qdv");this.selected=x;x&&this.setTabindexOnStory(x,'0');x&&g.addClass(x,"_5qdv");n.highlightSingle(x);}};w.init=function(x){"use strict";new w(x);};e.exports=w;},null);