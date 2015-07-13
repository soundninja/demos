/*!CK:1152135201!*//*1436278939,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["masB4"]); }

__d("OauthLogin",["Cookie","Dialog","PopupWindow","URI","WindowComm","fbt","XD"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=b('XD').XD;function n(o,p){this.provider=o;this.endpoint=p;return this;}n.prototype.login=function(o,p,q){var r=k.makeHandler(function(u){this._closePopup();var v=this.provider+'..'+u.oauth_token+'..'+u.oauth_token_secret;g.set('tpa',v,0,'/');if(q)n._refreshLoginStatus();o&&o();}.bind(this)),s=k.makeHandler(function(u){this._closePopup();new h().setTitle(l._("Ruh roh!")).setBody(l._("We're having trouble talking to {provider}.\u003Cbr \/>Either login to Facebook directly or try again later.",[l.param("provider",this.provider)])).setHandler(function(){p&&p();}).setButtons(h.OK).show();}.bind(this)),t=new j(this.endpoint);t.setQueryData({provider:this.provider,next:r,channel_url:s,cancel_url:s,display:'popup'});this._popup=i.open(t.toString(),416,468);};n.prototype._closePopup=function(){if(this._popup){this._popup.close();this._popup=null;}};n._refreshLoginStatus=function(){try{m.send({type:'refreshThirdPartyAuthStatus'});}catch(o){window.location.reload();}};e.exports=n;},null);
__d("OpenIDLogin",["Cookie","Dialog","OpenIDRequest","fbt","XD"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=b('XD').XD,l={login:function(m,n,o,p,q){i.context='tpa';new i().setThirdPartyLogin(true).setSuccessHandler(function(r){var s='OpenID'+'..'+r.oid+'..'+r.secret;g.set('tpa',s,0,'/');if(!!p)l._refreshLoginStatus();n&&n();}).setErrorHandler(function(r){new h().setTitle(j._("Ruh roh!")).setBody(j._("We're having trouble talking to {provider}.\u003Cbr \/>Either login to Facebook directly or try again later.",[j.param("provider",m)])).setButtons(h.OK).setHandler(function(){o&&o();}).show();}).setProviderCache(q).setOpenIDUrl(m).send();},_refreshLoginStatus:function(){try{k.send({type:'refreshThirdPartyAuthStatus'});}catch(m){window.location.reload();}}};e.exports=l;},null);
__d("MultiLoginPopup",["Arbiter","CommentAdminPanelController","CSS","CurrentUser","Dialog","DOM","DTSG","Event","HTML","OauthLogin","OpenIDLogin","PopupWindow","SelectorDeprecated","URI","WidgetArbiter","WindowComm","$"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){b.__markCompiled&&b.__markCompiled();var x={provider:'facebook',providerCache:{},formSubmissionInterceptors:[],init:function(){g.subscribe('platform/socialplugins/login',function(y){x.loggedIn=!!y.user;});s.subscribe('close',function(y,z){s.setSelected(z.selector,s.getValue(z.selector),false);});},setProvider:function(y){x.provider=y;return this;},setProviderCache:function(y){x.providerCache=y;return this;},interceptFormSubmission:function(y,z,aa,ba){var ca=function(da){if(da){x.detachExistingSubmissionInterceptors();if(da.fbDtsg){m.setToken(da.fbDtsg);j.getID=function(){return da.user;};}if(da.isThirdParty==="0"){l.scry(document.documentElement,'.postToProfile').forEach(function(ea){i.show(ea);});l.scry(document.documentElement,'.postToProfileCheckbox').forEach(function(ea){if(da.postToProfileChecked==="0"){ea.removeAttribute('checked');}else ea.setAttribute('checked','checked');});l.scry(document.documentElement,'.viewerProfileHref').forEach(function(ea){ea.href=da.profileUrl;ea.onclick='';});l.scry(document.documentElement,'.commentas').forEach(function(ea){var fa=ea.id;l.replace(ea,o(da.commentAsMarkup));var ga=w(da.commentAsMarkupID);ga.id=fa;var ha=l.scry(ga,'a.commentaschange');ha.forEach(function(ia){var ja=new t(ia.getAttribute('ajaxify'));ja.addQueryData({uniqid:fa});ia.setAttribute('ajaxify',ja.toString());});});}else l.scry(document.documentElement,'.commentas').forEach(function(ea){var fa=ea.id;l.replace(ea,o(da.commentAsMarkup));var ga=w(da.commentAsMarkupID);ga.id=fa;});l.scry(document.documentElement,'.viewerProfilePic').forEach(function(ea){ea.src=da.profilePic;});l.scry(document.documentElement,'.fbCommentAfterLoginButton').forEach(i.hide);l.scry(document.documentElement,'.fbCommentButton').forEach(i.show);l.scry(document.documentElement,'.fbReplyAfterLoginButton').forEach(i.hide);l.scry(document.documentElement,'.fbReplyButton').forEach(i.show);l.scry(document.documentElement,'.fbUpDownVoteAfterLogin').forEach(i.hide);l.scry(document.documentElement,'.fbUpDownVoteOption').forEach(i.show);l.scry(document.documentElement,'.closeButtonAfterLogin').forEach(i.hide);l.scry(document.documentElement,'.closeButton').forEach(i.show);h.setLoggedIn(parseInt(da.user,10));g.inform('platform/socialplugins/login',{user:da.user},g.BEHAVIOR_STATE);u.inform('platform/socialplugins/login',{user:da.user},g.BEHAVIOR_STATE);}};x.login(ba,y,z,aa,ca);return false;},attachAllFormsToLogin:function(y,z){x.formSubmissionInterceptors=[];x.popupTitle=y;x.params=z;x.reattachLoginInterceptors();},reattachLoginInterceptors:function(){x.detachExistingSubmissionInterceptors();var y=['composer','fbUpDownVoteAfterLogin','closeButtonAfterLogin'],z=x.popupTitle,aa=x.params,ba=function(da){var ea=da.getTarget();if(ea.tagName.toLowerCase()==='form'&&y.some(i.hasClass.bind(null,ea)))return x.interceptFormSubmission(ea,z,aa);},ca=n.listen(document.body,'submit',ba,n.Priority.URGENT);x.formSubmissionInterceptors.push(ca);},detachExistingSubmissionInterceptors:function(){var y=x.formSubmissionInterceptors.length;for(var z=0;z<y;z++)x.formSubmissionInterceptors[z].remove();x.formSubmissionInterceptors=[];},login:function(y,z,aa,ba,ca){if(!x.loggedIn)x._openPopup(ba,ca);},doOpenIDLogin:function(y,z,aa){q.login(y,x.tpaLoginCallback(z),x.tpaLoginCallback(aa),false,x.providerCache);},doOauthWrapLogin:function(y,z,aa){var ba=new p(y,'/connect/oauthwrap_login.php');return ba.login(x.tpaLoginCallback(z),x.tpaLoginCallback(aa),false);},doTwitterLogin:function(y,z){var aa=new p('Twitter','/connect/twitter_login.php');return aa.login();},tpaLoginCallback:function(y){return function(z,aa){var ba=l.create('iframe',{src:z,className:'hidden_elem'});l.appendContent(l.find(aa.documentElement,'body'),ba);}.bind(null,y,document);},loggedIn:false,_popup:null,_openPopup:function(y,z){var aa=x.provider==='facebook'?'opener':'parent',ba=v.makeHandler(function(ja){x._closePopup();z&&z(ja);},aa),ca=v.makeHandler(function(ja){x._closePopup();},aa),da;da=new t('/plugins/multi_login_popup_loggedin.php');da.setQueryData({original_next:ba,original_cancel:ca,iframe_src:y.iframe_src});ba=da.getQualifiedURI().toString();if(x.provider==='facebook'){da=new t('/login.php');da.setQueryData(Object.assign(y,{display:'popup',social_plugin:'multi_login',cancel_url:ca,next:ba,provider:x.provider}));var ea=450,fa=700;this._popup=r.open(da.toString(),ea,fa);}else if(x.provider==='twitter'){x.doTwitterLogin(ba,ca);}else if(x.provider==='microsoft'){x.doOauthWrapLogin(x.provider,ba,ca);}else if(x.provider==='openid'){var ga=new k(),ha=function(ja){var ka=ga.getFormData();x.doOpenIDLogin(ka.openid_url,ba,ca);ga.hide();if(ja.kill)ja.kill();return false;};ga.setContentWidth(350).setTitle('OpenID').setBody(l.create('form',{onsubmit:ha},l.create('input',{type:'text',size:60,name:'openid_url'}))).setHandler(ha).setButtons([k.CONFIRM,k.CANCEL]).show();}else{var ia=x.provider+'.com';x.doOpenIDLogin(ia,ba,ca);}},_closePopup:function(){if(this._popup){this._popup.close();this._popup=null;}}};e.exports=x;},null);
__d("legacy:multi-login-popup",["MultiLoginPopup"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.MultiLoginPopup=b('MultiLoginPopup');},3);