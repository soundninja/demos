/*!CK:1436116174!*//*1444754337,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/T9W1"]); }

__d('ConnectLogin',['PopupWindow','URI','WindowComm','reloadPage','XD'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=c('XD').XD,m={init:function(n){this.appID=n.appID;this.addToProfile=n.addToProfile;this.channelUrl=n.channelUrl;l.init(n);},login:function(n,o,p){this._openPopup(n,o,p);},logout:function(){l.send({type:'logout'});},_openPopup:function(n,o,p){p=p||{};var q=j.makeHandler(function(u){m._closePopup();if(m.appID)m._refreshLoginStatus();n&&n();}),r=j.makeHandler(function(u){m._closePopup();}),s=new i('/login.php');s.setQueryData({api_key:this.appID,next:q,channel_url:r,cancel_url:r,req_perms:o,v:'1.0',fbconnect:1,add_to_profile:this.addToProfile,display:'popup'});s.addQueryData(p);var t=this._getSize(p);this._popup=h.open(s.toString(),t.height,t.width);},_closePopup:function(){if(this._popup){this._popup.close();this._popup=null;}},_refreshLoginStatus:function(){if(this.channelUrl){l.send({type:'refreshLoginStatus'});}else k.now();},_getSize:function(n){if(n.social_plugin=='registration'){return {width:640,height:370};}else return {width:610,height:280};}};f.exports=m;},null);
__d('FBCommentServer',['ConnectLogin','CSS','CurrentUser','$','XD'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=c('XD').XD,m={serverStarted:true,init:function(n){i.setClass(k(n.commentsID).parentNode,'mu-connect-disable-logout');h.init(n);l.init({channelUrl:n.channelUrl,hideOverflow:true,autoResize:true});},showConnect:function(){h.login();},setupConnect:function(n,o){if(j.getID()&&j.getID()!="0"){setTimeout(n,0);}else setTimeout(o,0);}};f.exports=m;},null);
__d('legacy:xfbml-comments',['FBCommentServer'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.FBCommentServer=c('FBCommentServer');},3);