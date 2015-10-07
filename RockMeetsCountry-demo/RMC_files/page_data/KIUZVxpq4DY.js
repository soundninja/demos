/*!CK:2450901989!*//*1444180301,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["J0OaD"]); }

__d('PluginEmbeddedPostActionLogger',['BanzaiLogger','DOM','Event','EmbeddedPostPluginActions','EmbeddedPostPluginActionTypes'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={initializeClickLoggers:function(n,o,p,q,r,s){var t=function(u,v){try{var x=i.find(n,'.'+u);j.listen(x,'click',function(y){h.log('PostPluginActionsLoggerConfig',{embedded_post_action:v,embedded_post_action_type:l.CLICK,embedded_post_source:s});});}catch(w){}};t(o,k.EMBEDDED_POSTS_LIKE);t(p,k.EMBEDDED_POSTS_UNLIKE);t(q,k.EMBEDDED_POSTS_COMMENT);t(r,k.EMBEDDED_POSTS_SHARE);}};f.exports=m;},null);