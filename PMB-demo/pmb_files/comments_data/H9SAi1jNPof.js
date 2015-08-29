/*!CK:402284390!*//*1440387761,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["f7U\/y"]); }

__d("ComposerTargetType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SELF_USER:"feed",OTHER_USER:"wall",GROUP:"group",PAGE:"page",EVENT:"event",RECOMMENDATION:"recommendation",EXAMPLE:"example"};},null,{});
__d("ComposerType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={INLINE:"inline",ADVANCED:"advanced",NORMAL:"normal"};},null,{});
__d("ComposerWaterfallEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER_CANCEL:"composer_cancel",COMPOSER_CANCEL_INTENT:"intent_composer_cancel",COMPOSER_ENTRY:"composer_entry",COMPOSER_NOT_RENDERED:"composer_not_renderer",COMPOSER_POST:"composer_post",COMPOSER_POST_CANCEL:"composer_post_cancel",COMPOSER_POST_FAILURE:"composer_post_failure",COMPOSER_POST_FAILURE_FATAL:"composer_post_fatal_failure",COMPOSER_POST_FAILURE_GIVEUP:"composer_post_giveup_failure",COMPOSER_POST_SUCCESS:"composer_post_success",COMPOSER_POST_COMPLETED:"composer_post_completed",COMPOSER_WRITTEN:"composer_written",ALBUM_ADD:"add_album",ALBUM_CANCEL:"cancel_album",ALBUM_INTENT:"intent_album",ALBUM_REMOVE:"remove_album",FRIEND_TAG_ADD:"add_friend_tag",FRIEND_TAG_CANCEL:"cancel_friend_tag",FRIEND_TAG_INTENT:"intent_friend_tag",FRIEND_TAG_REMOVE:"remove_friend_tag",FRIEND_TAG_SEARCH:"search_friend_tag",FRIEND_SHOW_MORE:"show_more_friend_tag",LOCATION_ADD:"add_location",LOCATION_CANCEL:"cancel_location",LOCATION_INTENT:"intent_location",LOCATION_REMOVE:"remove_location",LOCATION_SCROLL:"scroll_location",LOCATION_SEARCH:"search_location",EMBEDS_ADD:"add_embed",EMBEDS_CANCEL:"cancel_embed",EMBEDS_INTENT:"intent_embed",MINUTIAE_ADD:"add_minutiae",MINUTIAE_CANCEL:"cancel_minutiae",MINUTIAE_CHANGE_ICON:"change_icon_minutiae",MINUTIAE_CHANGE_ICON_CANCEL:"change_icon_cancel_minutiae",MINUTIAE_CHANGE_ICON_INTENT:"change_icon_intent_minutiae",MINUTIAE_CHANGE_ICON_SEARCH:"change_icon_search_minutiae",MINUTIAE_INTENT:"intent_minutiae",MINUTIAE_REMOVE:"remove_minutiae",MINUTIAE_SCROLL:"scroll_minutiae",MINUTIAE_SEARCH:"search_minutiae",MINUTIAE_TYPE_CLICK:"type_click_minutiae",MINUTIAE_SEE_MORE:"see_more_minutiae",MINUTIAE_CHAIN_SKIP:"skip_chain_minutiae",MINUTIAE_CHAIN_SUGGEST:"suggest_chain_minutiae",MINUTIAE_ICONPICKER_QUERY:"minutiae_iconpicker_query",MINUTIAE_ICONPICKER_BOOTSTRAP:"minutiae_iconpicker_bootstrap",MINUTIAE_ICONPICKER_SELECT:"minutiae_iconpicker_select",MEDIA_INTENT:"intent_media",MEDIA_CANCEL:"cancel_media",PHOTO_ADD:"add_photo",PHOTO_ADD_FAILURE:"add_photo_failure",PHOTO_ADD_SUCCESS:"add_photo_success",PHOTO_REMOVE:"remove_photo",PRIVACY_ADD:"add_privacy",PRIVACY_CANCEL:"cancel_privacy",PRIVACY_INTENT:"intent_privacy",PRIVACY_SCROLL:"scroll_privacy",PRIVACY_SEE_ALL_LISTS:"see_all_lists_privacy",SELECT_FRIEND_TIMELINE_INTENT:"intent_select_friend_timeline",SELECT_FRIEND_TIMELINE_ADD:"add_select_friend_timeline",SELECT_FRIEND_TIMELINE_CANCEL:"cancel_select_friend_timeline",SERVER_POST_BEGIN:"server_composer_post_begin",SERVER_POST_FAILURE:"server_composer_post_failure",SERVER_POST_SUCCESS:"server_composer_post_succeeded",POST_POST_WITH_TAG_BEGIN:"post_post_with_tag_begin",POST_POST_WITH_TAG_FAILURE:"post_post_with_tag_failure",POST_POST_WITH_TAG_SUCCESS:"post_post_with_tag_success",TARGET_SELECTOR_INTENT:"intent_target_selector",TARGET_SELECTOR_CANCEL:"cancel_target_selector",VIDEO_ADD:"add_video",VIDEO_ADD_FAILURE:"add_video_failure",VIDEO_ADD_SUCCESS:"add_video_success",VIDEO_REMOVE:"remove_video"};},null,{});
__d('ComposerXStore',['Arbiter','ge'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={};function k(m,n){return 'ComposerX/'+m+'/'+n;}var l={set:function(m,n,o){if(!j[m])j[m]={};j[m][n]=o;h.inform(k(m,n),{},h.BEHAVIOR_STATE);},get:function(m,n){if(j[m])return j[m][n];return null;},getAllForComposer:function(m){return j[m]||{};},waitForComponents:function(m,n,o){h.registerCallback(o,n.map(k.bind(null,m)));}};h.subscribe('page_transition',function(){for(var m in j)if(!i(m))delete j[m];});f.exports=l;},null);
__d('fileSliceName',['UserAgent_DEPRECATED'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='slice',j;if(j=h.chrome()){if(j<21)i='webkitSlice';}else if(j=h.firefox()){if(j<13)i='mozSlice';}else if(!(j=h.safari()))if(h.webkit())i='webkitSlice';f.exports=i;},null);
__d('fileSlice',['fileSliceName'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=b.File&&b.File.prototype[h];f.exports=i;},null);
__d('VideoUploadFeatureDetector',['UserAgent_DEPRECATED','fileSlice'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={supportsChunking:function(){return typeof i==='function'&&this.supportsXHR();},supportsFullProgress:function(){return !h.firefox();},supportsFileAPI:function(){return 'FileList' in window;},supportsFileReading:function(){return 'FileReader' in window&&'DataView' in window;},supportsXHR:function(){return 'FormData' in window;}};f.exports=j;},null);
__d('ComposerXDragDropUtils',['Arbiter','CSS','DOMQuery','Parent','VideoUploadFeatureDetector','csx','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={handleDragEnterAndLeave:function(p){var q=j.scry(k.byClass(p,"_119"),"._2wr");h.subscribe('dragenter',function(r,s){if(p==s.element)q.forEach(i.hide);});h.subscribe('dragleave',function(r,s){if(p==s.element)q.forEach(i.show);});},filterImages:function(p){var q=l.supportsFileAPI(),r=[];for(var s=0;s<p.length;s++)if(p[s].type.match('image/*')){r.push(p[s]);}else if(q&&p[s].type.match('video/*'))r.push(p[s]);return r;}};f.exports=o;},null);
__d('uuid',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(i){var j=Math.random()*16|0,k=i=='x'?j:j&3|8;return k.toString(16);});}f.exports=h;},null);
__d('ComposerXSessionIDs',['DOM','cx','uuid'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={},l={getSessionID:function(m){return k[m];},resetSessionID:function(m){k[m]=j();},createSessionIDInput:function(m){return h.create('input',{type:'hidden',name:'composer_session_id',className:"_5r_b",value:m});}};f.exports=l;},null);
__d('ShareModeConst',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={SELF_PAGE:'selfpage',PAGE:'page',SELF_POST:'self',FRIEND:'friend',GROUP:'group',ALBUM:'album',MESSAGE:'message',ONE_CLICK:'oneclick',EVENT:'event',UNKNOWN:'unknown'};f.exports=h;},null);
__d('ComposerXMarauderLogger',['Event','ComposerTargetType','ComposerType','ComposerWaterfallEvent','ComposerXSessionIDs','MarauderLogger','ShareModeConst'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={},p=j.NORMAL,q={logEvent:function(r,s,t){if(!t)t={};var u=o[s],v=l.getSessionID(s);if(!u||!v)return;if(t.logOncePerSession){if(!u.loggedEventTypes[v])u.loggedEventTypes[v]={};if(u.loggedEventTypes[v][r])return;u.loggedEventTypes[v][r]=true;}var w=babelHelpers._extends({},t.extraData,{composer_type:p,composer_version:u.composerVersion,target_type:u.targetType,target_id:u.targetID,ref:u.entryPointRef});if(t.logDetails){w.has_photo=u.hasPhoto;w.has_video=u.hasVideo;w.xy_tag_count=u.numXYTags;w.with_tag_count=u.numWithTags;w.tags_user=u.numUserTags;}m.log(r,'composer',w,undefined,undefined,v);},registerComposer:function(r,s,t,u,v){o[r.id]={targetID:v,targetType:s,entryPointRef:t,composerVersion:u,loggedEventTypes:{},hasPhoto:false,hasVideo:false,numWithTags:0,numXYTags:0,numUserTags:0};},getInstance:function(r){return o[r];},updateHasPhoto:function(r,s){if(!o[r])return;o[r].hasPhoto=s;},updateHasVideo:function(r,s){if(!o[r])return;o[r].hasVideo=s;},updateNumWithTags:function(r,s){if(!o[r])return;o[r].numWithTags=s;},updateNumXYTags:function(r,s){if(!o[r])return;o[r].numXYTags=s;o[r].numWithTags=o[r].numWithTags-s;},updateNumUserTags:function(r,s){if(!o[r])return;o[r].numUserTags=s;},listenForPostEvents:function(r,s){if(!s)return [];return [h.listen(s,'submit',function(){q.logPost(r);}),h.listen(s,'success',function(){q.logPostSuccess(r);}),h.listen(s,'error',function(event){q.logPostFailure(r,{error_info:{error_code:event.data.response.error,error_description:event.data.response.errorDescription,error_summary:event.data.response.errorSummary}});})];},setShareMode:function(r,s){var t=o[r];if(!t)return;switch(s){case n.SELF_POST:t.targetType=i.SELF_USER;break;case n.FRIEND:t.targetType=i.OTHER_USER;break;case n.PAGE:case n.SELF_PAGE:t.targetType=i.PAGE;break;case n.GROUP:t.targetType=i.GROUP;break;default:t.targetType=i.OTHER;}},logEntry:function(r,s){if(typeof s==='string')return;q.logEvent(k.COMPOSER_ENTRY,r,{logOncePerSession:true,extraData:s});},logCompleted:function(r,s){q.logEvent(k.COMPOSER_POST_COMPLETED,r,{extraData:s});},logPost:function(r,s){q.logEvent(k.COMPOSER_POST,r,{extraData:s});},logPostSuccess:function(r,s){q.logEvent(k.COMPOSER_POST_SUCCESS,r,{extraData:s});},logPostFailure:function(r,s){q.logEvent(k.COMPOSER_POST_FAILURE,r,{extraData:s});}};f.exports=q;},null);
__d('filterObject',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();'use strict';var h=Object.prototype.hasOwnProperty;function i(j,k,l){if(!j)return null;var m={};for(var n in j)if(h.call(j,n)&&k.call(l,j[n],n,j))m[n]=j[n];return m;}f.exports=i;},null);
__d('PhotosMimeType',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';if(this instanceof h===false)return new h(i);this.$PhotosMimeType1=i.split('/');}h.prototype.isImage=function(){'use strict';return this.$PhotosMimeType1[0]==='image';};h.prototype.isJpeg=function(){'use strict';return this.isImage()&&(this.$PhotosMimeType1[1]==='jpeg'||this.$PhotosMimeType1[1]==='pjpeg');};f.exports=h;},null);
__d('DataTransfer',['PhotosMimeType','createArrayFromMixed','emptyFunction'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=new RegExp('\u000D\u000A','g'),l='\u000A',m={'text/rtf':1,'text/html':1};function n(p){if(p.kind=='file')return p.getAsFile();}function o(p){'use strict';this.data=p;this.types=p.types?i(p.types):[];}o.prototype.isRichText=function(){'use strict';return this.types.some(function(p){return m[p];});};o.prototype.getText=function(){'use strict';var p;if(this.data.getData)if(!this.types.length){p=this.data.getData('Text');}else if(this.types.indexOf('text/plain')!=-1)p=this.data.getData('text/plain');return p?p.replace(k,l):null;};o.prototype.getHTML=function(){'use strict';if(this.data.getData)if(!this.types.length){return this.data.getData('Text');}else if(this.types.indexOf('text/html')!=-1)return this.data.getData('text/html');};o.prototype.isLink=function(){'use strict';return this.types.some(function(p){return p.indexOf('url')!=-1||p.indexOf('text/uri-list')!=-1;});};o.prototype.isImage=function(){'use strict';var p=this.types.some(function(t){return t.indexOf('application/x-moz-file')!=-1;});if(p)return true;var q=this.getFiles();for(var r=0;r<q.length;r++){var s=q[r].type;if(!h(s).isImage())return false;}return true;};o.prototype.getCount=function(){'use strict';if(this.data.hasOwnProperty('items')){return this.data.items.length;}else if(this.data.hasOwnProperty('mozItemCount')){return this.data.mozItemCount;}else if(this.data.files)return this.data.files.length;return null;};o.prototype.getFiles=function(){'use strict';if(this.data.items){return Array.prototype.slice.call(this.data.items).map(n).filter(j.thatReturnsArgument);}else if(this.data.files){return Array.prototype.slice.call(this.data.files);}else return [];};o.prototype.hasFiles=function(){'use strict';return this.getFiles().length>0;};f.exports=o;},null);
__d("DragDropFileUpload",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();g.isSupported=function(){return typeof FileList!=="undefined";};},null);
__d('DocumentDragDrop',['Event','Arbiter','CSS','DOM','DOMQuery','DragDropFileUpload','emptyFunction','getObjectValues'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p={},q=0;function r(){q=0;o(p).forEach(function(w){j.removeClass(w.element,w.className);i.inform('dragleave',{element:w.element});});}var s=null;function t(){s&&clearTimeout(s);s=setTimeout(function(){r();},500);}function u(){if(!m.isSupported())return;h.listen(document,'dragenter',function(w){if(q===0)o(p).forEach(function(x){j.addClass(x.element,x.className);i.inform('dragenter',{element:x.element,event:w});});q++;t();});h.listen(document,'dragleave',function(w){q--;if(q===0)r();t();});h.listen(document,'drop',function(w){r();var x=w.getTarget();if(l.isNodeOfType(w.getTarget(),'input'))if(x.type==='file')return;w.prevent();});h.listen(document,'dragover',h.prevent);document.addEventListener('dragover',t,true);u=n;}var v={init:function(){u();},registerStatusElement:function(w,x){u();p[k.getID(w)]={element:w,className:x};if(q>0)j.addClass(w,x);},removeStatusElement:function(w){var x=k.getID(w),y=p[x];if(y){j.removeClass(y.element,y.className);delete p[x];}}};f.exports=v;},null);
__d('DragDropTarget',['Arbiter','Event','SubscriptionsHandler','CSS','DataTransfer','DocumentDragDrop','DragDropFileUpload','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();function p(q){this._element=q;this._listeners=new j();this._statusElem=q;this._dragEnterCount=0;this._enabled=false;}Object.assign(p.prototype,{_onFilesDropCallback:o,_onURLDropCallback:o,_onPlainTextDropCallback:o,_onDropCallback:o,_fileFilterFn:o.thatReturnsArgument,setOnDocumentDragEnterCallback:function(q){this._onDocumentDragEnterCallback=q;return this;},setOnDocumentDragLeaveCallback:function(q){this._onDocumentDragLeaveCallback=q;return this;},setOnDragEnterCallback:function(q){this._onDragEnterCallback=q;return this;},setOnDragLeaveCallback:function(q){this._onDragLeaveCallback=q;return this;},setOnFilesDropCallback:function(q){this._onFilesDropCallback=q;return this;},setOnURLDropCallback:function(q){this._onURLDropCallback=q;return this;},setOnPlainTextDropCallback:function(q){this._onPlainTextDropCallback=q;return this;},setOnDropCallback:function(q){this._onDropCallback=q;return this;},enable:function(){if(!n.isSupported())return this;this._listeners.engage();m.registerStatusElement(this._statusElem,'fbWantsDragDrop');this._listeners.addSubscriptions(i.listen(this._element,'dragenter',this._onDragEnter.bind(this)),i.listen(this._element,'dragleave',this._onDragLeave.bind(this)),i.listen(this._element,'dragover',this._onDragOver.bind(this)),i.listen(this._element,'drop',(function(q){this._dragEnterCount=0;k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');var r={},s=false,t=this._fileFilterFn(q.dataTransfer.files);if(t.length){this._onFilesDropCallback(t,q);r.files=t;s=true;}var u=q.dataTransfer.getData('url')||q.dataTransfer.getData('text/uri-list');if(u){this._onURLDropCallback(u,q);r.url=u;s=true;}var v=q.dataTransfer.getData('text/plain');if(v){this._onPlainTextDropCallback(v,q);r.plainText=v;s=true;}if(s)this._onDropCallback(r,q);q.kill();}).bind(this)));this._listeners.addSubscriptions(h.subscribe('dragenter',this._onDocumentDragEnter.bind(this)),h.subscribe('dragleave',this._onDocumentDragLeave.bind(this)));this._enabled=true;return this;},disable:function(){if(!this._enabled)return this;m.removeStatusElement(this._statusElem,'fbWantsDragDrop');k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');this._listeners.release();this._enabled=false;return this;},setFileFilter:function(q){this._fileFilterFn=q;return this;},setStatusElement:function(q){this._statusElem=q;return this;},_onDragEnter:function(q){if(this._dragEnterCount===0){var r=new l(q.dataTransfer);k.addClass(this._statusElem,'fbDropReady');if(r.isLink()||!r.isImage()){k.addClass(this._statusElem,'fbDropReadyLink');}else if(r.getCount()>1){k.addClass(this._statusElem,'fbDropReadyPhotos');}else k.addClass(this._statusElem,'fbDropReadyPhoto');this._onDragEnterCallback&&this._onDragEnterCallback();}this._dragEnterCount++;q.preventDefault();},_onDragLeave:function(q){this._dragEnterCount=Math.max(this._dragEnterCount-1,0);if(this._dragEnterCount===0){k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');this._onDragLeaveCallback&&this._onDragLeaveCallback();}},_onDragOver:function(q){if(!q.dataTransfer){i.kill(q);return;}var r=q.dataTransfer.effectAllowed;q.dataTransfer.dropEffect=r=='move'||r=='linkMove'?'move':'copy';i.kill(q);},_onDocumentDragEnter:function(event,q){if(this._onDocumentDragEnterCallback&&q.element==this._element)this._onDocumentDragEnterCallback();},_onDocumentDragLeave:function(event,q){this._dragEnterCount=0;this._onDragLeave(event);if(this._onDocumentDragLeaveCallback&&q.element==this._element)this._onDocumentDragLeaveCallback();}});f.exports=p;},null);
__d('LitestandComposer',['Arbiter','Bootloader','ReactComposerIDGenerator','Run','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=600;function n(p,q){i.loadModules(["Animation","ComposerXController","ComposerXMarauderLogger","DOM","LitestandStream"],function(r,s,t,u,v){if(!j.isComposerID(p))s.reset(p);if(!v||!q)return;u.prependContent(v.getStreamRoot(),q);new r(q).from('opacity',0).to('opacity',1).duration(m).go();t.logCompleted(p);});}var o={initComposer:function(p){var q=new l();q.addSubscriptions(h.subscribe('LitestandComposer/publish',(function(r,s){if(s.composer_id===p)n(p,s.markup);}).bind(this)));k.onLeave(function(){q.release();});}};f.exports=o;},null);
__d('XUIError',['ARIA','Bootloader','CSS','DataStore','DOM','Event','JSXDOM','Parent','Promise','cx','filterObject','getActiveElement','getElementText','invariant','isNode','memoize','nl2br'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){if(c.__markCompiled)c.__markCompiled();'use strict';var y='data-xui-error-alignh',z='XUIError',aa='data-xui-error',ba="_1tp7",ca='data-xui-error-position';m.listen(document.documentElement,'mouseover',function(event){if(o.byClass(s(),ba))return;var qa=o.byClass(event.getTarget(),ba);if(qa){ma(qa);}else na();});m.listen(document.documentElement,'focusin',function(event){var qa=o.byClass(event.getTarget(),ba);if(qa){ma(qa);}else na();});m.listen(document.documentElement,'focusout',function(event){na();});var da=w(function(){return new p(function(qa,ra){i.loadModules(["ContextualDialog","ContextualLayerAutoFlip","ContextualLayerUpdateOnScroll","LayerRefocusOnHide","React"],function(sa,ta,ua,va,wa){var xa={ContextualDialog:sa,ContextualLayerAutoFlip:ta,ContextualLayerUpdateOnScroll:ua,LayerRefocusOnHide:va,React:wa};qa(babelHelpers._extends({},xa,ea(xa)));});});});function ea(qa){var ra=qa.ContextualDialog,sa=qa.ContextualLayerAutoFlip,ta=qa.ContextualLayerUpdateOnScroll,ua=qa.LayerRefocusOnHide,va=n.div({className:"_1tp8"}),wa=n.div({className:"_53ij _1tp9"},n.div({className:"_1tpa"}),va),xa=new ra({addedBehaviors:[ta,sa],theme:{wrapperClassName:"_1tpb",arrowDimensions:{offset:12,length:16}}},wa);xa.disableBehavior(ua);xa.shouldSetARIAProperties(false);return {dialog:xa,dialogBodyNode:wa,dialogMessageNode:va};}var fa=null;function ga(qa){return babelHelpers._extends({message:qa.getAttribute(aa),position:qa.getAttribute(ca),alignh:qa.getAttribute(y)},k.get(qa,z));}function ha(qa,ra){k.set(qa,z,ra);}function ia(qa,ra){k.set(qa,z,babelHelpers._extends({},k.get(qa,z),ra));}function ja(qa){k.remove(qa,z);}var ka=false,la=false;function ma(qa){da().done(function(ra){var sa=ra.React,ta=ra.dialog,ua=ra.dialogMessageNode,va=ga(qa),wa=va.message;if(wa==null)return;var xa=sa.isValidElement(wa);if(ka&&!xa)sa.unmountComponentAtNode(ua);if(xa){sa.render(wa,ua);}else{!(typeof wa==='string'||v(wa))?u(0):undefined;if(typeof wa==='string')wa=x(wa);l.setContent(ua,wa);}ka=xa;ta.setContext(qa).setPosition(va.position||'right').setAlignment(va.alignh||(va.position==='above'||va.position==='below'?'right':null)).show();h.notify(t(ua));fa=qa;});la=true;}function na(){if(!la)return;da().done(function(qa){var ra=qa.React,sa=qa.dialog,ta=qa.dialogMessageNode;if(!fa)return;if(ka){ra.unmountComponentAtNode(ta);ka=false;}sa.hide();fa=null;});}function oa(qa){if(l.contains(qa,s()))ma(qa);}var pa={set:function(qa){var ra=qa.target,sa=qa.message,ta=qa.position,ua=qa.alignh;!(sa!==null)?u(0):undefined;j.addClass(ra,ba);ia(ra,r({message:sa,position:ta,alignh:ua},function(va){return va!==undefined;}));oa(ra);},clear:function(qa){j.removeClass(qa,ba);qa.removeAttribute(aa);ja(qa);if(qa===fa)na();},updatePosition:function(){if(!la)return;da().done(function(qa){var ra=qa.dialog;if(fa)ra.updatePosition();});},__setReactError:function(qa,ra){var sa=ra.message,ta=ra.position,ua=ra.alignh;!(sa!==null)?u(0):undefined;ha(qa,{message:sa,position:ta,alignh:ua});oa(qa);},__clearReactError:function(qa){ja(qa);if(qa===fa)na();}};f.exports=pa;},null);