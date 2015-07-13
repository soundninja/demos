/*!CK:1961436136!*//*1436153520,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["leqen"]); }

__d("WindowComm",["URI"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={_callbacks:{},makeHandler:function(i,j,k){j=j||'opener';if(!k)k='f'+(Math.random()*(1<<30)).toString(16).replace('.','');h._callbacks[k]=i;return new g('/connect/window_comm.php').setQueryData({_id:k,_relation:j}).getQualifiedURI().toString();},_recv:function(i){var j=new g(i).getQueryData();h._callbacks[j._id](j);}};e.exports=h;a.WindowComm=h;},null);
__d("OpenIDRequest",["AsyncRequest","AsyncSignal","URI","UserAgent_DEPRECATED","PHPQuerySerializer","coalesce","createArrayFromMixed","errorCode"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();function o(){var p=new g().setReadOnly(true).setHandler(this.asyncResponseHandler.bind(this)).setErrorHandler(this.asyncErrorHandler.bind(this));Object.assign(this,{openidUrl:null,requestId:o.maxRequestId++,successResponseHandler:null,cancelHandler:null,intermediateHandler:null,immediateMode:false,useExtensions:true,thirdPartyLogin:false,popupWindow:null,asyncRequest:p,retryCount:0});o.requests[this.requestId]=this;}o.getRequestById=function(p){return o.requests[p];};o.prototype.setOpenIDUrl=function(p){this.openidUrl=p;return this;};o.prototype.setSuccessHandler=function(p){this.successResponseHandler=p;return this;};o.prototype.setErrorHandler=function(p){this.errorHandler=p;return this;};o.prototype.setCancelHandler=function(p){this.cancelHandler=p;return this;};o.prototype.setImmediateMode=function(p){this.immediateMode=p;return this;};o.prototype.setUseExtensions=function(p){this.useExtensions=p;return this;};o.prototype.setIntermediateHandler=function(p){this.intermediateHandler=p;return this;};o.prototype.setThirdPartyLogin=function(p){this.thirdPartyLogin=p;return this;};o.prototype.send=function(){if(!this.openidUrl)throw "openidUrl is a required parameter. Call setOpenIDUrl()";var p=this.calculateRedirectUrl();if(!p){this.logMetrics('redirectUrlNotFound');return;}if(this.immediateMode){this.createHiddenIframe(p);}else{if(this.popupWindow)throw "OpenID popup is already in progress";this.showPopup(p);}this.logMetrics('requestSent');};o.prototype.calculateRedirectUrl=function(p){var q=this.immediateMode?'checkid_immediate':'checkid_setup',r={'openid.mode':q},s;if(!o.cache[this.openidUrl])return null;s=o.cache[this.openidUrl].url;var t=new i(new i(s).getQueryData()['openid.return_to']);t.addQueryData({context:o.context,request_id:this.requestId});r['openid.return_to']=t.toString();r.third_party_login=this.thirdPartyLogin;return new i(s).addQueryData(r).getQualifiedURI();};o.prototype.createHiddenIframe=function(p){var q='openid_request_'+this.requestId,r=document.body.appendChild(document.createElement('div')),s=function(){r.innerHTML=('<iframe name="'+q+'"'+' src="'+p.toString()+'"'+' scrolling="no" '+' frameborder="0" class="hidden_elem"></iframe>');};if(j.ie()){r.innerHTML='<iframe src="javascript:false"></iframe>';setTimeout(s,0);}else s();};o.prototype.showPopup=function(p){var q;if(o.cache[this.openidUrl])q=o.cache[this.openidUrl].popup_dimensions;if(!q||!q.height||!q.width)q={height:'580',width:'790'};var r={x:l(window.screenX,window.screenLeft),y:l(window.screenY,window.screenTop),width:l(window.outerWidth,document.body.clientWidth),height:l(window.outerHeight,document.body.clientHeight)},s=r.x+((r.width-q.width)/2),t=r.y+((r.height-q.height)/2),u=["location=yes","scrollbars=1","left="+s,"top="+t,"resizable=yes","height="+q.height,"width="+q.width].join(",");this.popupWindow=window.open(p.toString(),'_blank',u);this.popupPollInterval=setInterval(this.pollPopupWindow.bind(this),100);this.popupWindow.focus();};o.prototype.pollPopupWindow=function(){if(!(this.popupPollInterval&&this.popupWindow))return;if(this.popupWindow.closed){clearInterval(this.popupPollInterval);this.cancel();}};o.prototype.closePopupIfOpen=function(){if(this.popupWindow){if(this.popupPollInterval)clearInterval(this.popupPollInterval);this.popupWindow.close();}this.popupWindow=null;};o.prototype.cancel=function(){this.closePopupIfOpen();if(this.cancelHandler)this.cancelHandler();this.logMetrics('requestCanceled');};o.prototype.logMetrics=function(p){new h('/ajax/openid/metrics.php',{metric:p,immediate:this.immediateMode,context:o.context,openid_url:this.openidUrl}).send();};o.prototype.triggerCompleteAuthAsync=function(p){if(p.charAt(0)=='?'||p.charAt(0)=='&')p=p.substr(1);var q=k.deserialize(p);this.closePopupIfOpen();if(q['openid.mode']=='cancel'){this.cancel();return;}if(this.intermediateHandler)this.intermediateHandler();this.asyncRequest.setData({openid_params:q}).send();};o.prototype.asyncResponseHandler=function(p){var q=p.getPayload();if(this.successResponseHandler)this.successResponseHandler(q);this.closePopupIfOpen();};o.prototype.cleanHandleResponse=function(p){if(p.css)p.css=m(p.css);this.asyncRequest.handleResponse(p);};o.prototype.asyncErrorHandler=function(p){this.closePopupIfOpen();if(p.error==1428010||p.error==1428011){this.cancel();return;}if(this.errorHandler)this.errorHandler(p);};o.prototype.retry=function(){++this.retryCount;this.requestId=o.maxRequestId++;this.send();};o.prototype.setProviderCache=function(p){o.cache=p;return this;};o.cache={};o.requests=[];o.maxRequestId=0;o.context='default';e.exports=o;},null);
__d("WidgetArbiter",["createArrayFromMixed"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={_findSiblings:function(){if(h._siblings)return;h._siblings=[];for(var i=parent.frames.length-1;i>=0;i--)try{if(parent.frames[i]&&parent.frames[i].Arbiter&&parent.frames[i].Arbiter.inform)h._siblings.push(parent.frames[i].Arbiter);}catch(j){}},inform:function(){h._findSiblings();var i=g(arguments);h._siblings.forEach(function(j){j.inform.apply(j,i);});}};e.exports=h;},null);
__d("CommentAdminPanelController",["Arbiter","AsyncRequest","Button","ChannelConstants","CSS","DOM","Event","Toggler","URI","Vector","$","ge","XD","MultiLoginPopup"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();var s=b('XD').UnverifiedXD,t=function(u){Object.assign(this,{locale:u.locale,channel:u.channel,controllerID:u.controllerID,commentIDs:u.commentIDs,domIDs:u.domIDs,duplicateComments:[],fetchMoreCommentsIsPending:{},blacklistedActors:u.blacklistedActors,actorToCommentInfoMap:u.actorToCommentIDMap,commentInfoMap:u.commentInfoMap,inAggregatedView:u.inAggregatedView,inModerationQueue:u.inModerationQueue,inContextualDialog:u.inContextualDialog,isTopLevelCommentPollingEnabled:false,loggedIn:u.loggedIn,newestCommentTimestamp:u.newestCommentTimestamp,realTimePollingParams:{},userOwnsPages:u.userOwnsPages,recentlyBlacklistedActors:u.blacklistedActors});g.subscribe(j.getArbiterType('comments_plugin_new_post'),function(v,w){if(w.obj.target===this.realTimePollingParams.target){if(r(w.obj.comment_element_id))return;var x=Object.assign({},this.realTimePollingParams);x.post_fbid=w.obj.post_fbid;var y=w.obj.parent_comment_id;if(y){var z=r(y);if(!z)return;var aa=l.scry(z,'.fbFeedbackPager.uiMorePager');if(aa.length>0)return;x.parent_comment_id=y;x.is_reply_thread=true;}else{if(!this.isTopLevelCommentPollingEnabled)return;x.is_reply_thread=false;}this.pollForComments(x);}}.bind(this));this.controlledRegion=q(this.controllerID);this.attachClickHandlers();if(this.inModerationQueue)this.registerModeratorQueueHandlers(true);};Object.assign(t,{allControllers:{},mainController:null,contextualControllers:{},initController:function(u){var v=new t(u),w=u.controllerID;t.allControllers[w]=v;if(v.inContextualDialog){t.contextualControllers[w]=v;}else t.mainController=v;},syncController:function(u,v){var w=t.allControllers[u];w.attachClickHandlers();if(!w.isControllingModerationQueue())return;w.deselectComments(v);w.registerModeratorQueueHandlers(false);w.synchronizeModeratorQueueUI();},resetController:function(u){var v=t.allControllers[u];v.resetController();},appendComments:function(u,v,w){var x=t.allControllers[u];x.appendComments(v,w);},prependComments:function(u,v,w){var x=t.allControllers[u];x.prependComments(v,w);},updateController:function(u,v,w,x,y,z,aa){var ba=t.allControllers[u];ba.updateController(v,w,x,y,z,aa);if(!t.mainController.loggedIn)b('MultiLoginPopup').reattachLoginInterceptors();if(!ba.isControllingModerationQueue())return;ba.registerModeratorQueueHandlers(false);ba.synchronizeModeratorQueueUI();},updatePollingParamsCommentas:function(u,v){var w=t.allControllers[u];w.updatePollingParamsCommentas(v);},registerMoreCommentsLinkHandler:function(u,v){var w=t.allControllers[u];w.registerMoreCommentsLinkHandler(v);},replaceContentMaybe:function(u,v){var w=l.scry(document.documentElement,u)[0];if(w)l.replace(w,v);},notifyCommentCreated:function(u){if(!t.mainController.channel)return;s.send({type:'commentCreated',href:u.href,parentCommentID:u.parentCommentID,commentID:u.commentID,message:u.message});},notifyCommentRemoved:function(u){if(!t.mainController.channel)return;s.send({type:'commentRemoved',href:u.href,commentID:u.commentID});},markAsShowingAllReplies:function(u){var v=u+' a.fbUpDownVoteOption',w=l.scry(document.documentElement,v),x=u+' li.fbUpDownVoteOption a.itemAnchor',y=l.scry(document.documentElement,x),z=w.concat(y);for(var aa=0;aa<z.length;aa++){var ba=z[aa],ca=new o(ba.getAttribute('ajaxify'));ca.addQueryData({show_all_replies:1});ba.setAttribute('ajaxify',ca.toString());}},setLoggedIn:function(u){t.mainController.loggedIn=u;},blacklistChangeListener:function(u,v,w){var x=q(v);m.listen(u,'change',function(){if(u.options[u.selectedIndex].value==w){k.show(x);}else k.hide(x);});}});Object.assign(t.prototype,{isControllingModerationQueue:function(){var u=this==t.mainController&&this.inModerationQueue;return u;},resetController:function(){this.commentIDs=[];this.domIDs=[];},updateController:function(u,v,w,x,y,z){u.forEach(function(ba){this.commentIDs.push(ba);},this);v.forEach(function(ba){this.domIDs.push(ba);},this);Object.assign(this.blacklistedActors,x);for(var aa in y){if(!this.actorToCommentInfoMap[aa])this.actorToCommentInfoMap[aa]=[];y[aa].forEach(function(ba){this.actorToCommentInfoMap[aa].push(ba);},this);}this.newestCommentTimestamp=Math.max(this.newestCommentTimestamp,w);Object.assign(this.commentInfoMap,z);this.attachClickHandlers();},updatePollingParamsCommentas:function(u){this.realTimePollingParams.commentas=u;},attachClickHandlers:function(){for(var u=0;u<this.domIDs.length;u++){var v='li[id="'+this.domIDs[u]+'"]',w=l.scry(this.controlledRegion,v);if(w.length===0)continue;var x=w[0],y=l.scry(x,'a.uiCloseButton');m.listen(x,'mouseleave',this.closeStickyMenuFlyouts.bind(this,y));var z=l.scry(x,'.fbModerateDropdownContainer');if(z.length>0){var aa=z[0],ba=l.find(aa,'.fbModerateDropdownLink');m.listen(ba,'mouseover',function(ka,event){k.addClass(ka,'fbUnderlineText');}.bind(null,ba));m.listen(ba,'mouseout',function(ka,event){k.removeClass(ka,'fbUnderlineText');}.bind(null,ba));var ca=l.find(aa,'.fbModerationDropdownList');m.listen(ba,'click',this.exposeDropDownMenu.bind(this,ba,ca));m.listen(ca.parentNode,'mouseleave',this.concealDropDownMenu.bind(this,ba,ca));this.attachDropDownHandlers(x,this.commentIDs[u],ca);}var da=this.commentInfoMap[this.commentIDs[u]].actor,ea=!!this.recentlyBlacklistedActors[da];if(ea){var fa=l.scry(x,'.fbUndoBlacklistLink');if(fa.length>0){var ga=fa[0];m.listen(ga,'click',this.toggleBlackListAndSync.bind(this,this.commentIDs[u]));}}}var ha=l.scry(this.controlledRegion,'.fbReplyButton'),ia=l.scry(this.controlledRegion,'.fbReplyAfterLoginButton');for(var ja=0;ja<ha.length;ja++)if(this.loggedIn){k.show(ha[ja]);k.hide(ia[ja]);}else{k.hide(ha[ja]);k.show(ia[ja]);}},closeStickyMenuFlyouts:function(u,event){n.hide();for(var v=0;v<u.length;v++)u[v].blur();},attachDropDownHandlers:function(u,v,w){var x=l.scry(w,'.fbBanUser');if(x.length>0){var y=x[0],z=l.find(y,'^.fbFeedbackPost');if(z.id.startsWith(v))m.listen(y,'click',this.toggleBlackListAndSync.bind(this,v));}},exposeDropDownMenu:function(u,v,event){if(k.shown(v))return this.concealDropDownMenu(u,v,event);m.stop(event);k.show(v);v.focus();u.blur();var w=l.find(document.documentElement,'.commentContent'),x=p.getElementPosition(v).y+p.getElementDimensions(v).y-p.getElementDimensions(w).y;if(x>0){x=x+2;this.menuBuffer=l.create('div',{className:'menuBuffer',style:{height:x+'px'}});l.appendContent(w,this.menuBuffer);}return false;},concealDropDownMenu:function(u,v,event){m.stop(event);k.removeClass(u,'fbUnderlineText');k.hide(v);u.blur();if(this.menuBuffer){l.remove(this.menuBuffer);delete this.menuBuffer;}return false;},registerMoreCommentsLinkHandler:function(u){var v=u.pager_id;if(!r(v))return;var w=q(v);m.listen(w,'click',this.fetchMoreComments.bind(this,u,w));},deselectComments:function(u){for(var v=0;v<u.length;v++)delete this.selectedCommentsMap[u[v]];},registerModeratorQueueHandlers:function(u){if(u)this.selectedCommentsMap={};this.selectableComments=this.findSelectableComments();this.selectableCheckboxes=[];this.selectAllCheckBoxes=l.scry(this.controlledRegion,'.fbSelectAllCheckbox');this.approveButtons=l.scry(this.controlledRegion,'.fbApproveButton');this.removeButtons=l.scry(this.controlledRegion,'.fbRemoveButton');for(var v=0;v<this.selectableComments.length;v++){var w=this.selectableComments[v].id,x=!!this.selectedCommentsMap[w];this.setCommentSelection(this.selectableComments[v],x);var y=l.find(this.selectableComments[v],'.fbCommentCheckbox');m.listen(y,'click',this.toggleCommentSelection.bind(this));m.listen(this.selectableComments[v],'click',this.toggleCommentSelection.bind(this));y.checked=x;this.selectableCheckboxes.push(y);}for(var z=0;z<this.selectAllCheckBoxes.length;z++){this.selectAllCheckBoxes[z].checked=false;this.selectAllCheckBoxes[z].disabled=this.selectableComments.length===0;m.listen(this.selectAllCheckBoxes[z],'click',this.toggleSelectAllCheckbox.bind(this,this.selectAllCheckBoxes[z]));}for(var aa=0;aa<this.approveButtons.length;aa++)m.listen(this.approveButtons[aa],'click',this.setBulkPrivacy.bind(this,false));for(var ba=0;ba<this.removeButtons.length;ba++)m.listen(this.removeButtons[ba],'click',this.setBulkPrivacy.bind(this,true));},findSelectableComments:function(){var u=l.scry(this.controlledRegion,'.fbTopLevelComment'),v=[];for(var w=0;w<u.length;w++)if((l.scry(u[w],'.fbCommentCheckbox').length===1)&&(l.scry(u[w],'.fbCommentOverlay').length===0))v.push(u[w]);return v;},toggleCommentSelection:function(event){var u={a:true},v=event.getTarget(),w=v.tagName.toLowerCase(),x=v.parentNode.tagName.toLowerCase();if(u[w]||u[x])return;var y=k.hasClass(v,'fbFeedbackPost')?v:l.find(v,'^.fbFeedbackPost'),z=this.commentIsSelected(y),aa=!z;this.setCommentSelection(y,aa);this.synchronizeModeratorQueueUI();if(k.hasClass(v,'fbCommentCheckbox'))m.stop(event);},commentIsSelected:function(u){return k.hasClass(u,'fbCommentSelected');},setCommentSelection:function(u,v){if(v){this.selectComment(u);}else this.deselectComment(u);},selectComment:function(u){k.addClass(u,'fbCommentSelected');this.selectedCommentsMap[u.id]=true;l.find(u,'.fbCommentCheckbox').checked=true;},deselectComment:function(u){k.removeClass(u,'fbCommentSelected');delete this.selectedCommentsMap[u.id];l.find(u,'.fbCommentCheckbox').checked=false;},toggleSelectAllCheckbox:function(u,event){m.stop(event);var v=u.checked;for(var w=0;w<this.selectableComments.length;w++){this.setCommentSelection(this.selectableComments[w],u.checked);this.selectableCheckboxes[w].checked=v;}this.synchronizeBulkModerationCheckboxes(v);this.synchronizeBulkModerationButtons(v);},synchronizeModeratorQueueUI:function(){var u=0;for(var v=0;v<this.selectableCheckboxes.length;v++)if(this.selectableCheckboxes[v].checked)u++;var w=this.selectableCheckboxes.length>0&&u==this.selectableCheckboxes.length;this.synchronizeBulkModerationCheckboxes(w);this.synchronizeBulkModerationButtons(u>0);},synchronizeBulkModerationCheckboxes:function(u){for(var v=0;v<this.selectAllCheckBoxes.length;v++)this.selectAllCheckBoxes[v].checked=u;},synchronizeBulkModerationButtons:function(u){for(var v=0;v<this.approveButtons.length;v++)i.setEnabled(this.approveButtons[v],u);for(var w=0;w<this.removeButtons.length;w++)i.setEnabled(this.removeButtons[w],u);},setBulkPrivacy:function(u,event){m.stop(event);this.synchronizeBulkModerationButtons(false);var v=[];for(var w in this.selectedCommentsMap)v.push(w);var x={is_private:u,in_moderation_queue:true,comment_ids:v,uniqids:v,controller_id:this.controllerID,locale:this.locale,owns_pages:this.userOwnsPages,in_aggregated_view:this.inAggregatedView,in_contextual_dialog:this.inContextualDialog};new h().setURI('/ajax/connect/comments/set_bulk_private.php').setData(x).send();return false;},toggleBlackListAndSync:function(u,event){m.stop(event);var v=this.commentInfoMap[u].actor,w={blacklist:!this.blacklistedActors[v],in_moderation_queue:this.inModerationQueue,comment_id:u,other_comment_ids:this.getOtherCommentsByActor(v,u),uniqid:u,controller_id:this.controllerID,locale:this.locale,owns_pages:this.userOwnsPages,in_aggregated_view:this.inAggregatedView,in_contextual_dialog:this.inContextualDialog};new h().setURI('/ajax/connect/comments/set_blacklist.php').setData(w).setHandler(function(x){this.blacklistedActors[v]=!this.blacklistedActors[v];if(this.blacklistedActors[v]){this.recentlyBlacklistedActors[v]=true;}else delete this.recentlyBlacklistedActors[v];}.bind(this)).send();return false;},getOtherCommentsByActor:function(u,v){return this.actorToCommentInfoMap[u].filter(function(w){return w!=v;});},fetchMoreComments:function(u,v,event){m.kill(event);k.addClass(v,'async_saving');if(this.fetchMoreCommentsIsPending[u.pager_id]===true)return;this.fetchMoreCommentsIsPending[u.pager_id]=true;var w={is_reply_thread:false,in_moderation_queue:false,view_as_moderator:false};Object.assign(w,u);var x=l.scry(q(w.controller_id),this.getCommentsSelector(w));x=x.concat(l.scry(q(w.controller_id),this.getCollapsedCommentsSelector(w)));var y=0,z=0;for(var aa=0;aa<x.length;aa++)if(!k.hasClass(x[aa],'fbCommentIgnored'))if(k.hasClass(x[aa],'fbCommentHidden')){z++;}else y++;if(w.is_reply_thread)w.offset=y;w.hidden_offset=z;if(!w.aggregate_view)delete w.aggregate_view;if(!w.comment_id)delete w.comment_id;if(!w.is_reply_thread)w.comment_ids=this.commentIDs;if(!w.commentas){var ba=t.allControllers[w.controller_id];w.commentas=ba.realTimePollingParams.commentas;}new h().setURI('/ajax/connect/feedback.php').setReadOnly(true).setData(w).setHandler(function(ca){this.fetchMoreCommentsIsPending[u.pager_id]=false;}.bind(this)).send();},getCommentsSelector:function(u){var v=u.is_reply_thread?'li.fbCommentReply':'li.fbTopLevelComment';if(u.controller_id!=u.uniqid)v='div[id="'+u.uniqid+'"] '+v;return v;},getCollapsedCommentsSelector:function(u){var v=u.is_reply_thread?'div.fbCommentReply':'div.fbTopLevelComment';if(u.controller_id!=u.uniqid)v='div[id="'+u.uniqid+'"] '+v;return v;},getRecentlyBlacklistedActors:function(){var u=[];for(var v in this.recentlyBlacklistedActors)u.push(v);return u;},appendComments:function(u,v){var w=r(u);if(!w)return;var x=l.scry(w,'.fbFeedbackReplies')[0];if(!x)return;l.appendContent(x,v);},prependComments:function(u,v){var w=l.scry(document.documentElement,u)[0];if(!w)return;var x=v.getNodes(),y=[];for(var z=x.length;z-->0;){var aa={id:l.getID(x[z]),element:x[z]};y.push(aa);var ba=r(aa.id);if(ba){k.hide(aa.element);this.duplicateComments.push(aa.element);for(var ca=0;ca<y.length;++ca)l.insertAfter(ba,y[ca].element);y=[];}}for(z=0;z<y.length;++z)l.prependContent(w,y[z].element);setTimeout(this.removeDuplicateComments.bind(this),0);},removeDuplicateComments:function(){for(var u=0;u<this.duplicateComments.length;++u)l.remove(this.duplicateComments[u]);this.duplicateComments=[];},pollForComments:function(u){var v={locale:this.locale};Object.assign(v,u);if(!v.is_reply_thread)v.comment_ids=this.commentIDs;v.newest_comment_timestamp=this.newestCommentTimestamp;var w=this.handlePollResponse.bind(this),x=this.handlePollError.bind(this),y=this.handlePollFinally.bind(this);new h().setURI('/plugins/comments/poll').setReadOnly(true).setData(v).setMethod('GET').setHandler(w).setErrorHandler(x).setFinallyHandler(y).send();},handlePollResponse:function(u){},handlePollError:function(u){},handlePollFinally:function(u){}});e.exports=window.CommentAdminPanelController||t;},null);
__d("legacy:developer-comments-js",["CommentAdminPanelController"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.CommentAdminPanelController=b('CommentAdminPanelController');},3);
__d("ConnectLogin",["PopupWindow","URI","WindowComm","XD"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=b('XD').XD,k={init:function(l){this.appID=l.appID;this.addToProfile=l.addToProfile;this.channelUrl=l.channelUrl;j.init(l);},login:function(l,m,n){this._openPopup(l,m,n);},logout:function(){j.send({type:'logout'});},_openPopup:function(l,m,n){n=n||{};var o=i.makeHandler(function(s){k._closePopup();if(k.appID)k._refreshLoginStatus();l&&l();}),p=i.makeHandler(function(s){k._closePopup();}),q=new h('/login.php');q.setQueryData({api_key:this.appID,next:o,channel_url:p,cancel_url:p,req_perms:m,v:'1.0',fbconnect:1,add_to_profile:this.addToProfile,display:'popup'});q.addQueryData(n);var r=this._getSize(n);this._popup=g.open(q.toString(),r.height,r.width);},_closePopup:function(){if(this._popup){this._popup.close();this._popup=null;}},_refreshLoginStatus:function(){if(this.channelUrl){j.send({type:'refreshLoginStatus'});}else window.location.reload();},_getSize:function(l){if(l.social_plugin=='registration'){return {width:640,height:370};}else return {width:610,height:280};}};e.exports=k;},null);
__d("legacy:connect-login",["ConnectLogin"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.ConnectLogin=b('ConnectLogin');},3);
__d("ContextualDialogFooterLink",["CSS","DOM","Event"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(k){"use strict";this._layer=k;}j.prototype.enable=function(){"use strict";var k=this._layer.getRoot(),l=h.scry(k,'.uiContextualDialogFooterLink')[0],m='uiContextualDialogHoverFooterArrow';this._subscriptions=[i.listen(l,'mouseenter',g.addClass.bind(null,k,m)),i.listen(l,'mouseleave',g.removeClass.bind(null,k,m))];};j.prototype.disable=function(){"use strict";this._subscriptions.forEach(function(k){k.remove();});this._subscriptions=null;};Object.assign(j.prototype,{_subscriptions:null});e.exports=j;},null);
__d("LayerHideOnSuccess",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){"use strict";this._layer=h;}g.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe('success',this._layer.hide.bind(this._layer));};g.prototype.disable=function(){"use strict";if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};Object.assign(g.prototype,{_subscription:null});e.exports=g;},null);
__d("Overlay",["CSS","DataStore","DOM","Layer","LayerButtons","LayerDestroyOnHide","LayerFadeOnHide","LayerFadeOnShow","LayerFormHooks","LayerHideOnBlur","LayerHideOnEscape","LayerHideOnSuccess","LayerHideOnTransition","LayerMouseHooks","LayerTabIsolation"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b.__markCompiled&&b.__markCompiled();for(var v in j)if(j.hasOwnProperty(v))x[v]=j[v];var w=j===null?null:j.prototype;x.prototype=Object.create(w);x.prototype.constructor=x;x.__superConstructor__=j;function x(y,z){"use strict";y=Object.assign({buildWrapper:true},y);this._shouldBuildWrapper=y.buildWrapper;j.call(this,y,z);}x.prototype._configure=function(y,z){"use strict";w._configure.call(this,y,z);var aa=this.getRoot();this._overlay=i.scry(aa,'div.uiOverlay')[0]||aa;g.hide(aa);i.appendContent(this.getInsertParent(),aa);h.set(this._overlay,'overlay',this);var ba=h.get(this._overlay,'width');ba&&this.setWidth(ba);if(this.setFixed)this.setFixed(h.get(this._overlay,'fixed')=='true');if(h.get(this._overlay,'fadeonshow')!='false')this.enableBehavior(n);if(h.get(this._overlay,'fadeonhide')!='false')this.enableBehavior(m);if(h.get(this._overlay,'hideonsuccess')!='false')this.enableBehavior(r);if(h.get(this._overlay,'hideonblur')=='true')this.enableBehavior(p);if(h.get(this._overlay,'destroyonhide')!='false')this.enableBehavior(l);return this;};x.prototype._getDefaultBehaviors=function(){"use strict";return w._getDefaultBehaviors.call(this).concat([k,o,t,q,s,u]);};x.prototype.initWithoutBuildingWrapper=function(){"use strict";this._shouldBuildWrapper=false;return this.init.apply(this,arguments);};x.prototype._buildWrapper=function(y,z){"use strict";z=w._buildWrapper.call(this,y,z);if(!this._shouldBuildWrapper){this._contentRoot=z;return z;}this._contentRoot=i.create('div',{className:'uiOverlayContent'},z);return i.create('div',{className:'uiOverlay'},this._contentRoot);};x.prototype.getContentRoot=function(){"use strict";return this._contentRoot;};x.prototype.destroy=function(){"use strict";h.remove(this.getRoot(),'overlay');w.destroy.call(this);};e.exports=x;},null);
__d("LegacyContextualDialog",["Arbiter","ArbiterMixin","ARIA","Bootloader","ContextualDialogFooterLink","ContextualThing","CSS","DataStore","DOM","Event","LayerAutoFocus","LayerRefocusOnHide","Locale","Overlay","Parent","Scroll","Style","Vector","$","cx","getOverlayZIndex","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){b.__markCompiled&&b.__markCompiled();for(var ca in t)if(t.hasOwnProperty(ca))ea[ca]=t[ca];var da=t===null?null:t.prototype;ea.prototype=Object.create(da);ea.prototype.constructor=ea;ea.__superConstructor__=t;function ea(){"use strict";if(t!==null)t.apply(this,arguments);}ea.prototype._configure=function(fa,ga){"use strict";da._configure.call(this,fa,ga);var ha=this.getRoot(),ia=n.get.bind(null,ha);this.setAlignH(ia('alignh','left'));this.setOffsetX(ia('offsetx',0));this.setOffsetY(ia('offsety',0));this.setPosition(ia('position','above'));this._hasFooter=ia('hasfooter',false);if(this._hasFooter){var ja=o.scry(ha,'.uiContextualDialogFooterLink')[0];ja&&this.enableBehavior(k);}this.enableBehaviors(this._getDefaultBehaviors());this._setContextSubscription=this.subscribe('beforeshow',function(){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;var la=ia('context');if(la){this.setContext(y(la));}else{la=ia('contextselector');if(la)this.setContext(o.find(document,la));}}.bind(this));this._content=o.scry(ha,'.uiContextualDialogContent')[0];if(this._content){this._content.setAttribute('role','dialog');var ka=o.scry(this._content,'.legacyContextualDialogTitle')[0];if(ka)this._content.setAttribute('aria-labelledby',o.getID(ka));}this._showSubscription=this.subscribe('show',function(){var la=ba(this.updatePosition,this);this._resizeListener=p.listen(window,'resize',la);this._reflowSubscription=g.subscribe('reflow',la);this._setupScrollListener(this._scrollParent);l.register(ha,this.context);g.inform('layer_shown',{type:'ContextualDialog'});}.bind(this));this._hideSubscription=this.subscribe('hide',function(){this._teardownResizeAndReflowListeners();this._teardownScrollListener();g.inform('layer_hidden',{type:'ContextualDialog'});}.bind(this));return this;};ea.prototype._getDefaultBehaviors=function(){"use strict";return da._getDefaultBehaviors.call(this).concat([q,r]);};ea.prototype._buildWrapper=function(fa,ga){"use strict";var ha=da._buildWrapper.call(this,fa,ga);if(!this._shouldBuildWrapper)return ha;m.addClass(ha,'uiContextualDialog');return o.create('div',{className:'uiContextualDialogPositioner'},ha);};ea.prototype.setWidth=function(fa){"use strict";this._width=Math.floor(fa);return this;};ea.prototype.setFixed=function(fa){"use strict";fa=!!fa;m.conditionClass(this.getRoot(),'uiContextualDialogFixed',fa);this._fixed=fa;return this;};ea.prototype.setAlignH=function(fa){"use strict";this.alignH=fa;this._updateAlignmentClass();this._shown&&this.updatePosition();this.position&&this._updateArrow();return this;};ea.prototype.getContent=function(){"use strict";return this._content;};ea.prototype.getContext=function(){"use strict";return this.context;};ea.prototype.setContext=function(fa){"use strict";if(this._setContextSubscription){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;}fa=y(fa);if(this.context&&this.context!=fa)n.remove(this.context,'LegacyContextualDialog');this.context=fa;i.setPopup(this.getCausalElement(),this.getRoot());var ga=u.byClass(fa,'fbPhotoSnowlift')||u.byClass(fa,"_4d3w");this.setInsertParent(ga||document.body);if(this._scrollListener&&this._scrollParent!==ga){this._teardownScrollListener();this._setupScrollListener(ga);}this._scrollParent=ga;var ha=aa(fa,this._insertParent);w.set(this.getRoot(),'z-index',ha>200?ha:'');n.set(this.context,'LegacyContextualDialog',this);return this;};ea.prototype.getCausalElement=function(){"use strict";return da.getCausalElement.call(this)||this.context;};ea.prototype.listen=function(fa,ga){"use strict";return p.listen(this.getRoot(),fa,ga);};ea.prototype.setOffsetX=function(fa){"use strict";this.offsetX=parseInt(fa,10)||0;this._shown&&this.updatePosition();return this;};ea.prototype.setOffsetY=function(fa){"use strict";this.offsetY=parseInt(fa,10)||0;this._shown&&this.updatePosition();return this;};ea.prototype.setPosition=function(fa){"use strict";this.position=fa;for(var ga in ea.POSITION_TO_CLASS)m.conditionClass(this.getRoot(),ea.POSITION_TO_CLASS[ga],fa==ga);this._updateAlignmentClass();this._shown&&this.updatePosition();this._updateArrow();return this;};ea.prototype.updatePosition=function(){"use strict";if(!this.context)return false;if(this._width)w.set(this._overlay,'width',this._width+'px');var fa=this._fixed?'viewport':'document',ga=x.getElementPosition(this.context,fa),ha=this._scrollParent;if(ha)ga=ga.sub(x.getElementPosition(ha,'document')).add(v.getLeft(ha),v.getTop(ha));var ia=x.getElementDimensions(this.context),ja=this.position=='above'||this.position=='below',ka=s.isRTL();if((this.position=='right'||(ja&&this.alignH=='right'))!=ka)ga=ga.add(ia.x,0);if(this.position=='below')ga=ga.add(0,ia.y);var la=new x(0,0);if(ja&&this.alignH=='center'){la=la.add((ia.x-this._width)/2,0);}else{var ma=ja?ia.x:ia.y,na=2*ea.ARROW_INSET;if(ma<na){var oa=ma/2-ea.ARROW_INSET;if(ja&&(this.alignH=='right'!=ka))oa=-oa;la=la.add(ja?oa:0,ja?0:oa);}}la=la.add(this.offsetX,this.offsetY);if(ka)la=la.mul(-1,1);ga=ga.add(la);if(this._fixed)ga=new x(ga.x,ga.y,'document');ga.setElementPosition(this.getRoot());this._adjustVerticalPosition();this._adjustHorizontalPosition();return true;};ea.prototype.scrollTo=function(){"use strict";if(this.context)j.loadModules(["DOMScroll"],function(fa){fa.scrollTo(this.context,true,true);}.bind(this));};ea.prototype.destroy=function(){"use strict";this.unsubscribe(this._showSubscription);this.unsubscribe(this._hideSubscription);if(this._setContextSubscription){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;}this._teardownScrollListener();this._teardownResizeAndReflowListeners();this.context&&n.remove(this.context,'LegacyContextualDialog');da.destroy.call(this);};ea.prototype._adjustVerticalPosition=function(){"use strict";if(this.position!='left'&&this.position!='right'){w.set(this._overlay,'top','');return;}var fa=this.getRoot(),ga=x.getElementPosition(fa,'viewport').y,ha=x.getElementDimensions(this._overlay).y,ia=x.getViewportDimensions().y,ja=Math.min(Math.max(ga,ea.MIN_TOP_GAP),ea.TOP_MARGIN),ka=Math.min(Math.max(0,ga+ha+ea.BOTTOM_MARGIN-ia),Math.max(-ja,ga-ja),ha-2*ea.ARROW_INSET);w.set(this._overlay,'top',(-1*ka)+'px');w.set(this._arrow,'top',ea.ARROW_OFFSET+'px');w.set(this._arrow,'marginTop',ka+'px');};ea.prototype._adjustHorizontalPosition=function(){"use strict";if((this.position!='above'&&this.position!='below')||this.alignH!='left'){w.set(this._overlay,'left','');w.set(this._overlay,'right','');return;}var fa=this.getRoot(),ga=x.getElementPosition(fa,'viewport').x,ha=x.getElementDimensions(this._overlay).x,ia=x.getViewportDimensions().x,ja=s.isRTL(),ka;if(!ja){ka=ga+ha+ea.RIGHT_MARGIN-ia;}else ka=ea.LEFT_MARGIN+ha-ga;ka=Math.min(Math.max(0,ka),ha-2*ea.ARROW_INSET);w.set(this._overlay,ja?'right':'left',-1*ka+'px');w.set(this._arrow,ja?'right':'left',ea.ARROW_OFFSET+'px');w.set(this._arrow,ja?'marginRight':'marginLeft',ka+'px');};ea.prototype._updateArrow=function(){"use strict";var fa=0;if(this.position=='above'||this.position=='below')switch(this.alignH){case 'center':fa=50;break;case 'right':fa=100;break;}this._renderArrow(ea.POSITION_TO_ARROW[this.position],fa);};ea.prototype._renderArrow=function(fa,ga){"use strict";for(var ha in ea.ARROW_CLASS)m.conditionClass(this._overlay,ea.ARROW_CLASS[ha],fa==ha);m.conditionClass(this._overlay,'uiContextualDialogWithFooterArrowBottom',fa=='bottom'&&this._hasFooter);if(fa=='none')return;if(!this._arrow){this._arrow=o.create('i',{className:'uiContextualDialogArrow'});o.appendContent(this._overlay,this._arrow);}w.set(this._arrow,'top','');w.set(this._arrow,'left','');w.set(this._arrow,'right','');w.set(this._arrow,'margin','');var ia=fa=='top'||fa=='bottom',ja=ia?(s.isRTL()?'right':'left'):'top';ga=ga||0;w.set(this._arrow,ja,ga+'%');var ka=ea.ARROW_LENGTH+ea.ARROW_OFFSET*2,la=-(ka*ga/100-ea.ARROW_OFFSET);w.set(this._arrow,'margin-'+ja,la+'px');};ea.prototype._updateAlignmentClass=function(){"use strict";m.conditionClass(this.getRoot(),ea.RIGHT_ALIGNED_CLASS,(this.position=='above'||this.position=='below')&&this.alignH=='right');};ea.prototype._setupScrollListener=function(fa){"use strict";this._scrollListener=p.listen(fa||window,'scroll',ba(this._adjustVerticalPosition,this));};ea.prototype._teardownScrollListener=function(){"use strict";if(this._scrollListener){this._scrollListener.remove();this._scrollListener=null;}};ea.prototype._teardownResizeAndReflowListeners=function(){"use strict";if(this._resizeListener){this._resizeListener.remove();this._resizeListener=null;}if(this._reflowSubscription){this._reflowSubscription.unsubscribe();this._reflowSubscription=null;}};ea.getInstance=function(fa){"use strict";var ga=n.get(fa,'LegacyContextualDialog');if(!ga){var ha=u.byClass(fa,'uiOverlay');if(ha)ga=n.get(ha,'overlay');}return ga;};Object.assign(ea,h,{ARROW_OFFSET:15,ARROW_LENGTH:16,ARROW_INSET:22,TOP_MARGIN:50,BOTTOM_MARGIN:30,LEFT_MARGIN:15,RIGHT_MARGIN:30,MIN_TOP_GAP:5,POSITION_TO_CLASS:{above:'uiContextualDialogAbove',below:'uiContextualDialogBelow',left:'uiContextualDialogLeft',right:'uiContextualDialogRight'},RIGHT_ALIGNED_CLASS:'uiContextualDialogRightAligned',ARROW_CLASS:{bottom:'uiContextualDialogArrowBottom',top:'uiContextualDialogArrowTop',right:'uiContextualDialogArrowRight',left:'uiContextualDialogArrowLeft'},POSITION_TO_ARROW:{above:'bottom',below:'top',left:'right',right:'left'}});Object.assign(ea.prototype,{_scrollListener:null,_scrollParent:null,_width:null,_fixed:false,_hasFooter:false,_showSubscription:null,_hideSubscription:null,_setContextSubscription:null,_resizeListener:null,_reflowSubscription:null});e.exports=ea;},null);
__d("PlatformOptInPopup",["PopupWindow","URI"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=function(){};Object.assign(i,{DIALOG_URL:'/connect/uiserver.php',DIALOG_WIDTH:420,DIALOG_HEIGHT:450,APP_ID:127760087237610,open:function(j,k,l){if(!j)j='generic';if(!k)k='plugin.optin';var m=new h(i.DIALOG_URL);m.addQueryData({social_plugin:j,method:k,display:'popup',secure:h.getRequestURI().isSecure(),app_id:i.APP_ID});if(l)m.addQueryData(l);return g.open(m.toString(),i.DIALOG_WIDTH,i.DIALOG_HEIGHT);}});e.exports=i;},null);
__d("Feedback",["AsyncRequest","CSS","Dialog","DOM","Event","Input","LegacyContextualDialog","MentionsInput","Parent","PlatformOptInPopup","Style","Vector","$","ge","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b.__markCompiled&&b.__markCompiled();var v={comments:{},registerComment:function(w,x){v.comments[w]=x;return v;},getRegisteredComment:function(w){return v.comments[w];},deleteClickHandler:function(w,x,y,z,aa,ba){new i().setTitle(u._("Delete post?")).setBody(u._("Are you sure you want to delete this post?")).setButtons([i.newButton('delete',u._("Delete")),i.CANCEL]).setHandler(function(event){new g().setURI('/ajax/connect/feedback.php').setData({command:'delete',url:w,uniqid:z,owns_pages:aa,controller_id:y,locale:ba,comment_id:x}).send();}.bind(this)).show();},attachAddCommentListener:function(w,x){var y=s(w);k.listen(y,'click',function(){var z=s(x);h.removeClass(z,'hidden_elem');j.find(z,'textarea').focus();h.addClass(y,'hidden_elem');v.resizeCommentas(z);return false;});},resizeCommentas:function(w){var x=j.scry(w,'div.post')[0];if(x){var y=r.getElementDimensions(x).x;if(y){var z=j.find(x,'.commentas'),aa=r.getElementDimensions(z).x;if((y-aa)<190&&(y-190)>60){q.set(z,'width',y-190+'px');var ba=j.scry(z,'span.commentas_inner')[0];if(ba){var ca=r.getElementDimensions(ba).x;q.set(z,'width',ca+'px');}}}}},exposeContextualDialogReply:function(w){var x=s(w),y=x.parentNode.parentNode;h.show(j.find(y,"form.composerReply"));j.find(y,"textarea").focus();return false;},concealContextualDialogReply:function(w){var x=s(w),y=x.parentNode.parentNode,z=j.find(y,"form"),aa=j.find(y,"textarea"),ba=aa.value.length;if(!l.getValue(aa))h.hide(z);return false;},closeContextualDialog:function(w){var x=m.getInstance(s(w));x.hide();return false;},_clickLocked:false,attachOptInClickListener:function(w){k.listen(w,'click',function(x){k.kill(x);if(!this._clickLocked){this._clickLocked=true;setTimeout(function(){this._clickLocked=false;}.bind(this),1000);p.open('feedback','plugin.optin');}});},attachReplyListener:function(w){var x=t(w);if(!x)return;var y=j.find(x,'textarea');x.suppressBlur=false;k.listen(x,'click',function(z){var aa=z.getTarget(),ba=o.byClass(aa,'commentas')!==null,ca=o.byClass(aa,'uiButton')!==null,da=o.byClass(aa,'uiSelector')!==null;x.suppressBlur=ba||ca||da;});k.listen(y,'blur',function(z,aa){if(x.interval)return;x.interval=setInterval((function(ba,ca){if(ba.suppressBlur||l.getValue(ca)||ca==document.activeElement)return;h.hide(ba);ba.suppressBlur=false;clearInterval(ba.interval);delete ba.interval;}).bind(null,x,z),100);}.bind(null,y));},attachReplyClickListenerToReply:function(w,x,y){var z=t(w);if(z){var aa=j.scry(z,'form.composerReply')[0];v.attachReplyClickListener(aa,x,y);}},attachReplyClickListenerToPost:function(w,x,y){var z=t(w);if(z){var aa=j.scry(o.byTag(z,'div'),'form.composerReply')[0];v.attachReplyClickListener(aa,x,y);}},attachReplyClickListener:function(w,x,y){if(!w)return;var z=s(x),aa=j.find(w,'textarea');k.listen(z,'click',function(ba){h.show(w);aa.focus();var ca=o.byClass(ba.target,'fbFeedbackPost').id,da=document.createElement("input");da.setAttribute("type","hidden");da.setAttribute("name","replied_to");da.setAttribute("value",ca);w.appendChild(da);setTimeout((function(){var ea=n.getInstance(aa);if(!y.isViewer&&y.isReply)if(ea){var fa=ea.getMentions();if(!fa[y.uid]&&l.getValue(aa)==='')ea.addMention(y);}else l.setValue(aa,y.text+' ');ba.preventDefault();}).bind(this),0);});},resetInput:function(w){var x=n.getInstance(w);if(x)x.reset();l.setValue(w,'');},attachPublishConfirmHandler:function(w,x,y){k.listen(w,'click',function(z){z.preventDefault();j.remove(x);window.open(y,'confirm_comment_story','scrollbars=0,resizable=no,toolbar=0,width=600,height=400');});}};e.exports=a.Feedback||v;},null);
__d("legacy:feedback",["Feedback"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.Feedback=b('Feedback');},3);
__d("legacy:dom",["DOM"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.DOM=b('DOM');},3);
__d("ReferrerTools",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports.storeAncestorOrigins=function(g){if(!location||!location.ancestorOrigins)return;for(var h=0;h<location.ancestorOrigins.length;h++){var i=document.createElement('input');i.type='hidden';i.name='ancestor_origins[]';i.value=location.ancestorOrigins.item(h);g.appendChild(i);}};},null);