/*! NBCMPX - build:r13_100115 - 2015-05-06 - branch:r13 - commit:5b3300e90df82178a1ac431e46d52ba1b815d268 */
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
function EventDispatcher()
{
	var eventListeners = {};

	function indexOf(needle, haystack)
	{
		for(var i=0; i < haystack.length; i++)
		{
			if(haystack[i] === needle)
			{
				return i;
			}
		}

		return -1;
	}

	this.addEventListener = function(type, listener)
	{
		eventListeners[type] = eventListeners[type] || [];
		if(indexOf(listener, eventListeners[type]) < 0)
		{
			eventListeners[type].push(listener);
		}
	};

	this.removeEventListener = function(type, listener)
	{
		var listeners = (eventListeners[type]) ? eventListeners[type].slice(0) : [];
		
		if(listener) {
			if(listeners) {
				var index = -1;
				
				for(var i = 0; listeners[i]; i++) {
					if(listeners[i] == listener) {
						index = i;
						break;
					}
				}
				
				if(index > -1) {
					listeners.splice(index, 1);
					eventListeners[type] = listeners;
				}
			}
		} 
	};
	
	this.dispatchEvent = function(event)
	{
		var listeners = (eventListeners[event.type]) ? eventListeners[event.type].slice(0) : [];
		for(var i = 0; listeners[i]; i++) {
			listeners[i](event);
		};
	};
	
	// TODO: hasEventListener, willTrigger?
}
var NBCMPX = NBCMPX || {};
NBCMPX.Config = NBCMPX.Config || {};
NBCMPX.Config.baseDir = "//tve-nbc.nbcuni.com/player";
NBCMPX.Config.imagesDir = NBCMPX.Config.baseDir + "/images";

 // widget share image feed?
NBCMPX.Config.WSIFeed = "//feed.theplatform.com/f/NnzsPC/end_card?byGuid=[GUID]&range=1-1&form=json";

NBCMPX.UnsupportedDeviceCardConfig = NBCMPX.UnsupportedDeviceCardConfig || {};
NBCMPX.UnsupportedDeviceCardConfig.pageURL = NBCMPX.Config.baseDir + "/UnsupportedDeviceWithDeepLinkRedirect.html?guid=[GUID]";

NBCMPX.ShareCard = NBCMPX.ShareCard || {};
NBCMPX.ShareCard.emailURL = "[PROTOCOL]//player.theplatform.com/m/NnzsPC/widget/select/media/[MEDIA_PID]";
NBCMPX.ShareCard.iframeURL = "[PROTOCOL]//player.theplatform.com/p/NnzsPC/widget/select/media/[MEDIA_PID]";
NBCMPX.ShareCard.imageFeedURL = "//feed.theplatform.com/f/NnzsPC/share_card?byGuid=[GUID]";
NBCMPX.ShareCard.wrapperPageURL = NBCMPX.Config.baseDir + "/embed.php?title=[TITLE]&desc=[DESC]&image=[IMAGE]&playerURL=[PLAYER_URL]";
NBCMPX.ShareCard.FBSharerURL = "https://www.facebook.com/sharer/sharer.php?u=[PERMALINK]";

NBCMPX.Omniture = NBCMPX.Omniture || {};
NBCMPX.Omniture.s_gi_un = "nbcuglobal,nbcunetworkbu,nbcutve";
NBCMPX.Omniture.s_gi_pg = 1;
NBCMPX.Omniture.visitorNamespace = "nbcuniversal";
NBCMPX.Omniture.trackingServer = "oimg.nbcuni.com";
NBCMPX.Omniture.trackingServerSecure = "osimg.nbcuni.com";
NBCMPX.Omniture.dc = 122;

NBCMPX.ComscoreConfig = NBCMPX.ComscoreConfig || {};
NBCMPX.ComscoreConfig.VIDEO_START = "//beacon.securestudies.com/scripts/beacon.dll?C1=1&C2=3000054&C3=3000067&C4=3000054&C5=[COMMSCORE_GENRE_CONTENTTYPE_CODE]&C6=[SHOW_NAME]";
NBCMPX.ComscoreConfig.SEGMENT_START = "//beacon.securestudies.com/scripts/beacon.dll?C1=1&C2=3000054&C3=3000067&C4=3000054&C5=[COMMSCORE_GENRE_CONTENTTYPE_CODE]&C6=[SHOW_NAME]|MIDEPISODE_CHAPTER_[SEGMENT_NUMBER]";
NBCMPX.ComscoreConfig.AD_START = "//beacon.securestudies.com/scripts/beacon.dll?C1=1&C2=3000054&C3=3000067&C4=3000054&C5=010000&C6=[SHOW_NAME]";

NBCMPX.NielsenConfig = NBCMPX.NielsenConfig || {};
NBCMPX.NielsenConfig.FullEpisodeConfig = {
	VIDEO_START:"//secure-us.imrworldwide.com/cgi-bin/m?ci=us-800148&cg=[SHOW_NAME]&tl=dav0-[TITLE]&si=&c6=vc,c05&cc=1&rnd=[RANDOM]&lp=LF,0,0,0",
	VIEWABLE_AD_SEGMENT_START:"//secure-us.imrworldwide.com/cgi-bin/m?ci=us-800148&cg=[SHOW_NAME]&tl=dav0-[TITLE]&si=&c6=vc,c05&cc=1&rnd=[RANDOM]"
};
NBCMPX.NielsenConfig.ShortformConfig = {
	VIDEO_START: "//secure-us.imrworldwide.com/cgi-bin/m?ci=us-800148&cg=[SHOW_NAME]&tl=dav0-[TITLE]&si=&c6=vc,c05&cc=1&rnd=[RANDOM]&lp=SF,0,0,0",
	VIEWABLE_AD_SEGMENT_START:"//secure-us.imrworldwide.com/cgi-bin/m?ci=us-800148&cg=[SHOW_NAME]&tl=dav0-[TITLE]&si=&c6=vc,c05&cc=1&rnd=[RANDOM]"
};

NBCMPX.IAGConfig = NBCMPX.IAGConfig || {};
NBCMPX.IAGConfig.FullEpisodeConfig = {
	VIDEO_START:"//secure-us.imrworldwide.com/cgi-bin/m?ci=us-800148&c6=vc,c05&cc=1&pr=iag.sid,1000050&pr=iag.tfid,624&pr=iag.bcr,us-800148&pr=iag.pgm,[SHOW_NAME]&pr=iag.epi,[TITLE]&pr=iag.seg,[SEGMENT_NUMBER]&pr=iag.pd,player.theplatform.com&pr=iag.cp,soc&cg=[SHOW_NAME]&tl=dav0-[TITLE]&rnd=[RANDOM]&lp=LF,0,0,0",
	VIEWABLE_AD_SEGMENT_START:"//secure-us.imrworldwide.com/cgi-bin/m?ci=us-800148&c6=vc,c05&cc=1&pr=iag.sid,1000050&pr=iag.tfid,624&pr=iag.bcr,us-800148&pr=iag.pgm,[SHOW_NAME]&pr=iag.epi,[TITLE]&pr=iag.seg,[SEGMENT_NUMBER]&pr=iag.pd,player.theplatform.com&pr=iag.cp,soc&cg=[SHOW_NAME]&tl=dav0-[TITLE]&rnd=[RANDOM]",
	AD_START:"//secure-us.imrworldwide.com/cgi-bin/m?ci=us-800148&c6=vc,c05&cc=1&pr=iag.sid,1000050&pr=iag.tfid,624&pr=iag.bcr,us-800148&pr=iag.pgm,[SHOW_NAME]&pr=iag.epi,[TITLE]&pr=iag.seg,[SEGMENT_NUMBER]&pr=iag.pd,player.theplatform.com&pr=iag.brn,us-800148&pr=iag.ap,[AD_PLACEMENT]&pr=iag.cte,[AD_CREATIVE_URL]&pr=iag.cp,soc&c3=st,a&tl=dav0-[AD_CREATIVE_URL]&rnd=[RANDOM]"
};
NBCMPX.IAGConfig.ShortformConfig = {
	VIDEO_START:"//secure-us.imrworldwide.com/cgi-bin/m?ci=us-800148&c6=vc,c05&cc=1&pr=iag.sid,1000050&pr=iag.tfid,624&pr=iag.bcr,us-800148&pr=iag.pgm,[SHOW_NAME]&pr=iag.epi,[TITLE]&pr=iag.seg,[SEGMENT_NUMBER]&pr=iag.pd,player.theplatform.com&pr=iag.cp,soc&cg=[SHOW_NAME]&tl=dav0-[TITLE]&rnd=[RANDOM]&lp=SF,0,0,0",
	VIEWABLE_AD_SEGMENT_START:"//secure-us.imrworldwide.com/cgi-bin/m?ci=us-800148&c6=vc,c05&cc=1&pr=iag.sid,1000050&pr=iag.tfid,624&pr=iag.bcr,us-800148&pr=iag.pgm,[SHOW_NAME]&pr=iag.epi,[TITLE]&pr=iag.seg,[SEGMENT_NUMBER]&pr=iag.pd,player.theplatform.com&pr=iag.cp,soc&cg=[SHOW_NAME]&tl=dav0-[TITLE]&rnd=[RANDOM]",
	AD_START:"//secure-us.imrworldwide.com/cgi-bin/m?ci=us-800148&c6=vc,c05&cc=1&pr=iag.sid,1000050&pr=iag.tfid,624&pr=iag.bcr,us-800148&pr=iag.pgm,[SHOW_NAME]&pr=iag.epi,[TITLE]&pr=iag.seg,[SEGMENT_NUMBER]&pr=iag.pd,player.theplatform.com&pr=iag.brn,us-800148&pr=iag.ap,[AD_PLACEMENT]&pr=iag.cte,[AD_CREATIVE_URL]&pr=iag.cp,soc&c3=st,a&tl=dav0-[AD_CREATIVE_URL]&rnd=[RANDOM]"
};

NBCMPX.FreewheelConfig = NBCMPX.FreewheelConfig || {};

NBCMPX.FreewheelConfig.Widget = {};
NBCMPX.FreewheelConfig.Widget.html = {};
NBCMPX.FreewheelConfig.Widget.flash = {};

NBCMPX.FreewheelConfig.Widget.html.desktop = {
				siteSectionId:"nbc_widget",
				adManagerUrl: (window.location.protocol === "https:") ? "https://m.v.fwmrm.net/p/nbcu_live_jsam/AdManager.js" : "http://adm.fwmrm.net/p/nbcu_live_jsam/AdManager.js",
				serverUrl: (window.location.protocol === "https:") ? "https://29773.v.fwmrm.net" : "http://29773.v.fwmrm.net",
				networkId:169843,
				playerProfile:"nbcu_live_jsam"
			};
NBCMPX.FreewheelConfig.Widget.html.tablet = {
				siteSectionId:"nbc_widget_tab",
				adManagerUrl: (window.location.protocol === "https:") ? "https://m.v.fwmrm.net/p/nbcu_live_jsam/AdManager.js" : "http://adm.fwmrm.net/p/nbcu_live_jsam/AdManager.js",
				serverUrl: (window.location.protocol === "https:") ? "https://29773.v.fwmrm.net" : "http://29773.v.fwmrm.net",
				networkId:169843,
				playerProfile:"nbcu_live_jsam"
			};
NBCMPX.FreewheelConfig.Widget.html.handheld = {
				siteSectionId:"nbc_widget_hh",
				adManagerUrl: (window.location.protocol === "https:") ? "https://m.v.fwmrm.net/p/nbcu_live_jsam/AdManager.js" : "http://adm.fwmrm.net/p/nbcu_live_jsam/AdManager.js",
				serverUrl: (window.location.protocol === "https:") ? "https://29773.v.fwmrm.net" : "http://29773.v.fwmrm.net",
				networkId:169843,
				playerProfile:"nbcu_live_jsam"
			};
			
NBCMPX.FreewheelConfig.Widget.flash.desktop = {
				siteSectionId:"nbc_widget",
				adManagerUrl: (window.location.protocol === "https:") ? "https://m.v.fwmrm.net/p/nbcu_live/AdManager.swf" : "http://adm.fwmrm.net/p/nbcu_live/AdManager.swf",
				serverUrl: (window.location.protocol === "https:") ? "https://29773.v.fwmrm.net" : "http://29773.v.fwmrm.net",
				networkId:169843,
				playerProfile:"nbcu_live_as3"
			};

NBCMPX.FreewheelConfig.Onsite = {};
NBCMPX.FreewheelConfig.Onsite.html = {};
NBCMPX.FreewheelConfig.Onsite.flash = {};

NBCMPX.FreewheelConfig.Onsite.html.desktop = {
				siteSectionId:"_broadband",
				adManagerUrl: (window.location.protocol === "https:") ? "https://m.v.fwmrm.net/p/nbcu_live_jsam/AdManager.js" : "http://adm.fwmrm.net/p/nbcu_live_jsam/AdManager.js",
				serverUrl: (window.location.protocol === "https:") ? "https://29773.v.fwmrm.net" : "http://29773.v.fwmrm.net",
				networkId:169843,
				playerProfile:"nbcu_live_jsam"
			};
NBCMPX.FreewheelConfig.Onsite.html.tablet = {
				siteSectionId:"_tab",
				adManagerUrl: (window.location.protocol === "https:") ? "https://m.v.fwmrm.net/p/nbcu_live_jsam/AdManager.js" : "http://adm.fwmrm.net/p/nbcu_live_jsam/AdManager.js",
				serverUrl: (window.location.protocol === "https:") ? "https://29773.v.fwmrm.net" : "http://29773.v.fwmrm.net",
				networkId:169843,
				playerProfile:"nbcu_live_jsam"
			};
NBCMPX.FreewheelConfig.Onsite.html.handheld = {
				siteSectionId:"_hh",
				adManagerUrl: (window.location.protocol === "https:") ? "https://m.v.fwmrm.net/p/nbcu_live_jsam/AdManager.js" : "http://adm.fwmrm.net/p/nbcu_live_jsam/AdManager.js",
				serverUrl: (window.location.protocol === "https:") ? "https://29773.v.fwmrm.net" : "http://29773.v.fwmrm.net",
				networkId:169843,
				playerProfile:"nbcu_live_jsam"
			};
NBCMPX.FreewheelConfig.Onsite.flash.desktop = {
				siteSectionId:"_broadband",
				adManagerUrl: (window.location.protocol === "https:") ? "https://m.v.fwmrm.net/p/nbcu_live/AdManager.swf" : "http://adm.fwmrm.net/p/nbcu_live/AdManager.swf",
				serverUrl: (window.location.protocol === "https:") ? "https://29773.v.fwmrm.net" : "http://29773.v.fwmrm.net",
				networkId:169843,
				playerProfile:"nbcu_live_as3"
			};

NBCMPX.EndCardConfig = NBCMPX.EndCardConfig || {};
NBCMPX.EndCardConfig.feedURL = "//feed.theplatform.com/f/NnzsPC/end_card?range=1-*&byGuid=[GUID]|[NEXT_GUID]&form=json&sort=nbcu:seasonNumber,nbcu:airOrder,pubDate";
NBCMPX.EndCardConfig.GuidFeed = "//feed.theplatform.com/f/NnzsPC/guid_feed?range=1-*&byCustomValue={fullEpisode}{[IS_FULLEPISODE]}&byCategories=Series/[SHOW_NAME]&form=json&sort=nbcu:seasonNumber,nbcu:airOrder,pubDate";
NBCMPX.EndCardConfig.carouselEndPoint = "//www.nbc.com/a/video-carousel/[CAROUSEL_ID]?includeExternal=false";
NBCMPX.EndCardConfig.replayThumbnailFeed = "//feed.theplatform.com/f/NnzsPC/replay_thumbnail?byGuid=[GUID]&form=json";
NBCMPX.EndCardConfig.replayImage = NBCMPX.Config.imagesDir + "/cards/end_card/replay.png";
NBCMPX.EndCardConfig.signinKey = NBCMPX.Config.imagesDir + "/cards/end_card/authn_key.png";

NBCMPX.Layout = NBCMPX.Layout || {};
NBCMPX.Layout.onsite = {
	small:{
		minWidth:0,
		skinURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/skins/refresh_2014/skin.min.json",
		layoutURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/layout/onsite_2014/?excludeSharing=[EXCLUDE_SHARING]&nbc__format=[FORMAT]&nbc__layout=small"
	},
	medium:{
		minWidth:480,
		skinURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/skins/refresh_2014/skin.min.json",
		layoutURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/layout/onsite_2014/?excludeSharing=[EXCLUDE_SHARING]&nbc__format=[FORMAT]&nbc__layout=medium"
	},
	large:{
		minWidth:768,
		skinURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/skins/refresh_2014/skin.min.json",
		layoutURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/layout/onsite_2014/?excludeSharing=[EXCLUDE_SHARING]&nbc__format=[FORMAT]&nbc__layout=large"
	}
};
NBCMPX.Layout.widget = {
	small:{
		minWidth:0,
		skinURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/skins/refresh_2014/widget_skin.min.json",
		layoutURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/layout/onsite_2014/?excludeSharing=[EXCLUDE_SHARING]&nbc__format=[FORMAT]&nbc__layout=small"
	},
	medium:{
		minWidth:480,
		skinURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/skins/refresh_2014/widget_skin.min.json",
		layoutURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/layout/onsite_2014/?excludeSharing=[EXCLUDE_SHARING]&nbc__format=[FORMAT]&nbc__layout=medium"
	},
	large:{
		minWidth:768,
		skinURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/skins/refresh_2014/widget_skin.min.json",
		layoutURL:"[PROTOCOL]//tve-nbc.nbcuni.com/player/releases/r13_100115/layout/onsite_2014/?excludeSharing=[EXCLUDE_SHARING]&nbc__format=[FORMAT]&nbc__layout=large"
	}
};
function InitialContext(_factory, _dictionary)
{
	var factory = _factory;
	var dictionary = _dictionary;
	
	this.lookup = function(id)
	{
		if(dictionary[id])
		{
			return dictionary[id];
		}
	
		var lookupObj;
		
		switch(id)
		{
			case ServiceKeys.ClosedCaptioningCustomizationsCard.id:
				lookupObj = factory.newClosedCaptioningCustomizationsCard();
				break;
			case ServiceKeys.LayoutManager.id:
				lookupObj = factory.newLayoutManager();
				break;
			case ServiceKeys.SeekToCuepoint.id:
				lookupObj = factory.newSeekToCuepoint();
				break;
			case ServiceKeys.EndSlateDelegator.id:
				lookupObj = factory.newEndSlateDelegator();
				break;
			case ServiceKeys.ContentMetadataLocator.id:
				lookupObj = factory.newContentMetadataLocator();
				break;
			case ServiceKeys.EndCard.id:
				lookupObj = factory.newEndCard();
				break;
			case ServiceKeys.ControlRackMediator.id:
				lookupObj = factory.newControlRackMediator();
				break;
			case ServiceKeys.ShareCard.id:
				lookupObj = factory.newShareCard();
				break;
			case ServiceKeys.StartCard.id:
				lookupObj = factory.newStartCard();
				break;
			case ServiceKeys.UnavailableContentCard.id:
				lookupObj = factory.newUnavailableContentCard();
				break;
			case ServiceKeys.UnsupportedDeviceCard.id:
				lookupObj = factory.newUnsupportedDeviceCard();
				break;
			case ServiceKeys.GetFlashCard.id:
				lookupObj = factory.newGetFlashCard();
				break;
			case ServiceKeys.AppStateMonitor.id:
				lookupObj = factory.newAppStateMonitor();
				break;
			case ServiceKeys.AuthenticationMonitor.id:
				lookupObj = factory.newAuthenticationMonitor();
				break;
			case ServiceKeys.MVPDMonitor.id:
				lookupObj = factory.newMvpdMonitor();
				break;
			case ServiceKeys.PlaybackInitiationMonitor.id:
				lookupObj = factory.newPlaybackInitiationMonitor();
				break;
			case ServiceKeys.Nielsen.id:
				lookupObj = factory.newNielsen();
				break;
			case ServiceKeys.NielsenIAG.id:
				lookupObj = factory.newNielsenIAG();
				break;
			case ServiceKeys.Comscore.id:
				lookupObj = factory.newComscore();
				break;
			case ServiceKeys.Freewheel.id:
				lookupObj = factory.newFreewheel();
				break;
			case ServiceKeys.Omniture.id:
				lookupObj = factory.newOmniture();
				break;
			case ServiceKeys.PauseCard.id:
				lookupObj = factory.newPauseCard();
				break;
		}
	
		dictionary[id] = lookupObj;
		return dictionary[id];
	};
}
var NullService = (function (){
	"use strict";
    var instance; //prevent modification of "instance" variable

	function Singleton()
	{
        if (instance)
		{
			throw new Error("NullService is a singleton. Use NullService.getInstance() instead.");
        }
		
		// define properties we want
		this.init = function(){};
		
        instance = this;
    }

	Singleton.getInstance = function ()
	{
        return instance || new Singleton();
    };
	
    return Singleton;
}());
var ServiceKeys = {
	SeekToCuepoint:{id:"seekToCuepoint"},
	ControlRackMediator:{id:"controlRackMediator"},
	ContentMetadataLocator:{id:"contentMetadataLocator"},
	FreewheelConfigFactory:{id:"freewheelConfigFactory"},
	Freewheel:{id:"freewheel"},
	Omniture:{id:"omniture"},
	Nielsen:{id:"nielsen"},
	NielsenIAG:{id:"nielsenIAG"},
	Comscore:{id:"comscore"},
	EndSlateDelegator:{id:"endSlateDelegator"},
	EndCard:{id:"endCard"},
	StartCard:{id:"startCard"},
	ShareCard:{id:"shardCard"},
	UnavailableContentCard:{id:"unavailableContentCard"},
	UnsupportedDeviceCard:{id:"unsupportedDeviceCard"},
	GetFlashCard:{id:"getFlashCard"},
	PauseCard:{id:"pauseCard"},
	AppStateMonitor:{id:"appStateMonitor"},
	AuthenticationMonitor:{id:"authenticationMonitor"},
	MVPDMonitor:{id:"mvpdMonitor"},
	PlaybackInitiationMonitor:{id:"playbackInitiationMonitor"},
	LayoutManager:{id:"layoutManager"},
	ClosedCaptioningCustomizationsCard:{id:"closedCaptioningCustomizationsCard"}
};
function ServiceLocator(_context)
{
    var context = _context;
    
    /**
     * Retrieves component implementations by key
     * 
     * @param {Object} key the ServiceKeys field corresponding to the service to
     *	be retrieved
     * @returns {Object} the implementation for the provided key
     * @throws {Error} this method throws an error if no service corresponding
     *	to the provided key can be found
     * @see ServiceKeys
     */
    this.getService = function(key)
    {
		var foundService = context.lookup(key.id);
		if (!foundService)
		{
			throw new Error ("Could not locate Service: " + key.id);
		}

		return foundService;
    };
}

function Factory(_env)
{
    var playerType = "Off-domain";
    var env = _env;
	
    var pdk, serviceLocator, stateManager, params;
    
    /**
     * Sets the requred dependencies for this context. These dependencies must be set by calling this method before
     * calling any other methods in this class; otherwise, an error will be thrown.
     * 
     * @param {Object} _pdk The MPX Player Development Kit instance for this application
     * @param {ServiceLocator} _serviceLocator the ServiceLocator instance for this application
     * @param {StateManager} _stateManager the StateManager instance for this application
     * @param {Object} _params the application parameters (query string name/value pairs) for this application
     */
    this.initialize = function(_pdk, _serviceLocator, _stateManager, _params)
    {
		pdk = _pdk;
		serviceLocator = _serviceLocator;
		stateManager = _stateManager;
		params = _params;
    };
	
	function isFlashMode()
	{
		return (stateManager.state.getFormat() === Format.FLASH);
	}
	
	/**
	 * 
	 * @returns {Object} A new instance of the closed captioning customizations
	 *	card for this application.
	 */
	this.newClosedCaptioningCustomizationsCard = function()
	{
		return NullCard.getInstance();
	};
	
	function getCurrentLayoutURL()
	{
		return pdk.jQuery("#player").attr("tp:layoutUrl");
	}
	
	/**
	 * 
	 * @returns {LayoutManager} a new instance of LayoutManager.
	 */
	this.newLayoutManager = function()
	{
		if(isPluginMode())
		{
			return NullService.getInstance();
		}
		else
		{
			return new LayoutManager(env.Layout.widget, pdk.controller, getCurrentLayoutURL(), params.excludeSharing);
		}
	};
	
	/**
	 * 
	 * @returns {SeekToCuepoint} the class responsible for seeking to the
	 *	specified start time for clips
	 */
	this.newSeekToCuepoint = function()
	{
		if(isPluginMode())
		{
			return NullService.getInstance();
		}
		else
		{
			return new SeekToCuepoint(pdk.controller, params.sp);
		}
	};
	
	/**
	 * 
	 * @returns {ContentMetadataLocator} a new instance of the ContentMetadataLocator
	 */
	this.newContentMetadataLocator = function()
	{
		return new ContentMetadataLocator(pdk.controller, new EventTranslator());
	};
	
	function newControlFactory()
	{
		return new ControlFactory(pdk, params);
	}
    
	function newControlContext()
	{
		return new ControlContext(newControlFactory(), {});
	}
    
	function newControlLocator()
	{
		return new ServiceLocator(newControlContext());
	}
	
	/**
	 * 
	 * @returns {ControlRackMediator} a new instance of the ControlRackMediator
	 */
	this.newControlRackMediator = function()
	{
		return new ControlRackMediator(newControlLocator());
	};

	/**
	 * 
	 * @returns {FreewheelOnsite} a new instance of the Freewheel class that is
	 *	responsible for supplying fw_config to the window
	 */
	this.newFreewheel = function()
	{
		return new Freewheel(newFreewheelConfigFactory(), window);
	};

	/**
	 * 
	 * @returns {PlaybackInitiationMonitor} a new instance of the PlaybackInitiationMonitor class
	 */
	this.newPlaybackInitiationMonitor = function()
	{
		return new PlaybackInitiationMonitor(stateManager, pdk.controller, params);
	};
	
	/**
	 * 
	 * @returns {AppStateMonitor} a new instance of the AppStateMonitor class
	 */
	this.newAppStateMonitor = function()
	{
		return new AppStateMonitor(stateManager, pdk.controller, pdk.controller, serviceLocator.getService(ServiceKeys.ContentMetadataLocator));
	};
    
	function newEndCardFactory()
	{
		return new EndCardFactory(pdk, serviceLocator.getService(ServiceKeys.ContentMetadataLocator), params, env.EndCardConfig, stateManager.state);
	}
	
	/**
	 * @returns {EndCardFacade} a new instance of the EndCardFacade class
	 */
	this.newEndCard = function()
	{
		if(isPluginMode())
		{
			return NullCard.getInstance();
		}
		else
		{
			return new EndCardFacade(newEndCardFactory());
		}
	};
	
	function newEndSlateStrategyProvider()
	{
		return new WidgetEndSlateStrategyProvider(serviceLocator, params);
	}

    /**
     * 
     * @returns {EndSlateDelegator} a new instance of the EndSlateDelegator class
     */
	this.newEndSlateDelegator = function()
	{
		if(isPluginMode())
		{
			return NullCard.getInstance();
		}
		else
		{
			return new EndSlateDelegator( newEndSlateStrategyProvider() );
		}
	};
	
	/**
     * 
     * @returns {StartCard} a new instance of the StartCard class
     */
	this.newStartCard = function()
	{
		return new StartCard(pdk, stateManager.state, env.Config);
	};

    /**
     * 
     * @returns {GetFlashCard} a new instance of the GetFlashCard class
     */
	this.newGetFlashCard = function()
	{
		return new GetFlashCard(pdk.controller, stateManager.state);
	};

    /**
     * 
     * @returns {UnavailableContentCard} a new instance of the UnavailableContentCard class
     */
    this.newUnavailableContentCard = function()
    {
		return new UnavailableContentCard(pdk.controller, stateManager.state);
    };
    
	function newUnsupportedDeviceCardTokenizer()
	{
		return new UnsupportedDeviceCardTokenizer(serviceLocator.getService(ServiceKeys.ContentMetadataLocator), env.UnsupportedDeviceCardConfig.pageURL);
	}
    
    /**
     * 
     * @returns {UnsupportedDeviceCard} a new instance of the UnsupportedDeviceCard class
     */
    this.newUnsupportedDeviceCard = function()
    {
		return new UnsupportedDeviceCard(pdk.controller, stateManager.state, newUnsupportedDeviceCardTokenizer());
    };
	
	function newRequestFactory()
	{
		return new RequestFactory(pdk);
	}
	
	function newShareCardResearcherFactory()
	{
		return new ShareCardResearcherFactory(env.ShareCard, newRequestFactory());
	}
	
	function newShareCardImageManager()
	{
		return new ShareCardImageManager({}, newShareCardResearcherFactory());
	}
	
	function newShareCardModel()
	{
		return new ShareCardModel(env.ShareCard, newShareCardImageManager(), params);
	}
	
	function newShareCardPresenter(model)
	{
		return new ShareCardPresenter(model);
	}
    
	function isPluginMode()
	{
		return isFlashMode();
	}
	
    /**
     * 
     * @returns {ShareCard} a new instance of the ShareCard class
     */
    this.newShareCard = function()
    {
		if(isPluginMode())
		{
			return NullCard.getInstance();
		}
		else
		{
			var model = newShareCardModel();
			return new ShareCard(pdk.controller, model, newShareCardPresenter(model), window);
		}
	};
	
	/**
     * 
     * @returns {PauseCard} The PauseCard implementation for this application.
     */
	this.newPauseCard = function()
	{
		if(isPluginMode())
		{
			return NullCard.getInstance();
		}
		else
		{
			return new PauseCard(pdk);
		}
	};
    
	function newContentMetadataEventTranslator()
    {
		return new EventTranslator();
    }
    
    /**
     * 
     * @returns {FreewheelConfigFactory} a new instance of the FreewheelConfigFactory class
     */
    function newFreewheelConfigFactory()
    {
		return new FreewheelConfigFactory(pdk, env.FreewheelConfig.Widget);
    }
    
    /**
     * 
     * @returns {Nielsen} a new instance of the Nielsen class
     */
	this.newNielsen = function()
	{
		return isFlashMode() ? NullService.getInstance() : new Nielsen(env.NielsenConfig, new URLTransport(), serviceLocator.getService(ServiceKeys.ContentMetadataLocator), pdk.controller);
	};

    /**
     * 
     * @returns {Nielsen} a new instance of the Nielsen class configured to 
	 *	capture IAG metrics
     */
	this.newNielsenIAG = function()
	{
		return isFlashMode() ? NullService.getInstance() : new Nielsen(env.IAGConfig, new URLTransport(), serviceLocator.getService(ServiceKeys.ContentMetadataLocator), pdk.controller);
	};
	
    /**
     * 
     * @returns {Comscore} a new instance of the Comscore class
     */
	this.newComscore = function()
	{
		return isFlashMode() ? NullService.getInstance() : new Comscore(env.ComscoreConfig, new URLTransport(), serviceLocator.getService(ServiceKeys.ContentMetadataLocator), pdk.controller);
	};
    
	/**
     * 
     * @returns {Omniture} a new instance of the Omniture class
     */
    this.newOmniture = function()
    {
		return isFlashMode() ? NullService.getInstance() : new Omniture(pdk.controller, serviceLocator.getService(ServiceKeys.ContentMetadataLocator), playerType, stateManager.state, params.playerReferer);
    };
}
Factory.DESCRIPTION = "WidgetFactory";
function WidgetApplication(_pdk, _serviceLocator)
{
	var pdk = _pdk;
	var serviceLocator = _serviceLocator;
	
	this.init = function()
	{
		initServices();
		addAllCards();
		addListeners();
	};
	
	function initServices()
	{
		serviceLocator.getService(ServiceKeys.ClosedCaptioningCustomizationsCard).init();
		serviceLocator.getService(ServiceKeys.LayoutManager).init();
		serviceLocator.getService(ServiceKeys.SeekToCuepoint).init();
		serviceLocator.getService(ServiceKeys.EndSlateDelegator).init();
		serviceLocator.getService(ServiceKeys.ShareCard).init();
		serviceLocator.getService(ServiceKeys.StartCard).init();
		serviceLocator.getService(ServiceKeys.EndCard).init();
		serviceLocator.getService(ServiceKeys.UnavailableContentCard).init();
		serviceLocator.getService(ServiceKeys.UnsupportedDeviceCard).init();
		serviceLocator.getService(ServiceKeys.GetFlashCard).init();
		serviceLocator.getService(ServiceKeys.ContentMetadataLocator).init();
		serviceLocator.getService(ServiceKeys.ControlRackMediator).init();
		serviceLocator.getService(ServiceKeys.Omniture).init();
		serviceLocator.getService(ServiceKeys.NielsenIAG).init();
		serviceLocator.getService(ServiceKeys.Comscore).init();
		serviceLocator.getService(ServiceKeys.Freewheel).init();
		serviceLocator.getService(ServiceKeys.PauseCard).init();
	}
	
	function startMonitors()
	{
		serviceLocator.getService(ServiceKeys.AppStateMonitor).start();
		serviceLocator.getService(ServiceKeys.PlaybackInitiationMonitor).start();
	}
	
	function addCard(card)
	{
		pdk.controller.addPlayerCard
		(
			card.getDeckId(),
			card.getCardId(),
			card.getCardContent(),
			"urn:theplatform:pdk:area:player",
			{},
			card.getPresenter()
		);
	}
	
	function addAllCards()
	{
		addCard( serviceLocator.getService(ServiceKeys.ClosedCaptioningCustomizationsCard) );
		addCard( serviceLocator.getService(ServiceKeys.EndSlateDelegator) );
		addCard( serviceLocator.getService(ServiceKeys.ShareCard) );
		addCard( serviceLocator.getService(ServiceKeys.EndCard) );
		addCard( serviceLocator.getService(ServiceKeys.UnavailableContentCard) );
		addCard( serviceLocator.getService(ServiceKeys.UnsupportedDeviceCard) );
		addCard( serviceLocator.getService(ServiceKeys.GetFlashCard) );
		addCard( serviceLocator.getService(ServiceKeys.StartCard) );
		addCard( serviceLocator.getService(ServiceKeys.PauseCard) );
	}
	
	function onPlayerLoaded(evt)
	{
		startMonitors();
	}
	
	function addListeners()
	{
		pdk.controller.addEventListener("OnPlayerLoaded", onPlayerLoaded);
	}
}
function EndCardEvent(type, nextItem)
{
	this.type = type;
	this.data = {nextItem:nextItem};
}
EndCardEvent.COUNTDOWN_COMPLETE = "countdownComplete";
EndCardEvent.COUNTDOWN_STARTED = "countdownStarted";
function CarouselParserFactory()
{
	this.getParserForData = function(data)
	{
		return (data.entries) ? new CarouselEndPointParser() : new CarouselEndPointFromMateuParser();
	};
}
function EndCardFactory(_pdk, _cmdLocator, _params, _config, _state)
{
	var pdk = _pdk;
	var cmdLocator = _cmdLocator;
	var params = _params;
	var config = _config;
	var state = _state;
	
	var model = new EndCardModel(params, state);
	
	function newTokenizerForTemplate(template)
	{
		return new EndCardTokenizer(cmdLocator, model, template, params);
	}
	
	function newGuidFeedManager()
	{
		return new GuidFeedManager(pdk.controller, cmdLocator, model, newRequestMediatorForGuidFeed());
	}
	
	function newCarouselEnabledGuidManager()
	{
		return new CarouselEnabledGuidManager(model);
	}
	
	function newEndCardPresenter()
	{
		return new EndCardView(pdk, model, config.replayImage, config.signinKey);
	}
	
	function newRequestMediatorForGuidFeed()
	{
		return new RequestMediator(new RequestFactory(pdk), new GuidFeedParser(), newTokenizerForTemplate(config.GuidFeed) );
	}
	
	function newRequestMediatorForReplayThumbnailFeed()
	{
		return new RequestMediator(new RequestFactory(pdk), new ReplayThumbnailFeedParser(), newTokenizerForTemplate(config.replayThumbnailFeed) );
	}
	
	function newRequestMediatorForMPXFeeds()
	{
		return new RequestMediator(new RequestFactory(pdk), new EndCardFeedParser(), newTokenizerForTemplate(config.feedURL) );
	}
	
	function newRequestMediatorForCarouselEndPoint()
	{
		return new RequestMediator(new RequestFactory(pdk), new CarouselParserDelegator( new CarouselParserFactory() ), newTokenizerForTemplate(config.carouselEndPoint) );
	}
	
	function newPlaylistMediatorForMPXFeeds()
	{
		return new PlaylistMediator(newRequestMediatorForMPXFeeds(), model, cmdLocator);
	}
	
	function newPlaylistMediatorForCarouselEndPoint()
	{ 
		return new PlaylistMediator(newRequestMediatorForCarouselEndPoint(), model, cmdLocator);
	}
	
	function newDecoratedPlaylistMediatorForMPXFeeds()
	{
		return new ReplayThumbnailDecorator(newPlaylistMediatorForMPXFeeds(), newRequestMediatorForReplayThumbnailFeed(), model, cmdLocator);
	}
	
	function newDecoratedPlaylistMediatorForCarouselEndPoint()
	{
		return new ReplayThumbnailDecorator(newPlaylistMediatorForCarouselEndPoint(), newRequestMediatorForReplayThumbnailFeed(), model, cmdLocator);
	}
	
	function newMediatorForMPXFeeds()
	{
		return new MPXFeedMediator(newGuidFeedManager(), newEndCardPresenter(), newDecoratedPlaylistMediatorForMPXFeeds());
	}
	
	function newMediatorForCarouselEndPoint()
	{
		return new MPXFeedMediator(newCarouselEnabledGuidManager(), newEndCardPresenter(), newDecoratedPlaylistMediatorForCarouselEndPoint());
	}
	
	this.newMediator = function()
	{
		return (params.carouselID) ? newMediatorForCarouselEndPoint() : newMediatorForMPXFeeds();
	};
}
function EndCardItem(initObj)
{
	var data = initObj;

	this.getUpNextImage = function()
	{
		return data.upNextImage;
	};

	this.getGuid = function()
	{
		return data.guid;
	};

	this.getMediaAvailableDate = function()
	{
		return data.mediaAvailableDate;
	};

	this.getSeriesTitle = function()
	{
		return data.seriesTitle;
	};

	this.getAssetTitle = function()
	{
		return data.assetTitle;
	};

	this.getSeasonNumber = function()
	{
		return data.seasonNumber;
	};

	this.getEpisodeNumber = function()
	{
		return data.episodeNumber;
	};

	this.getReplayThumbnail = function()
	{
		return data.replayThumbnail;
	};

	this.getClipId = function()
	{
		return data.clipId;
	};

	this.getPermalink = function()
	{
		return data.permalink;
	};

	this.getReleaseURL = function()
	{
		return data.releaseURL;
	};
	
	this.getCueInPoint = function()
	{
		return data.cueInPoint;
	};
	
	this.getEntitlementStatus = function(){
		return data.entitlement;
	};
}
function EndCardModel(_params, _state)
{
	var params = _params;
	var state = _state;
	
	var guidList, playlist, replayThumbnail;
	
	function isNumber(val)
	{
		return !isNaN(parseFloat(val) && isFinite(val));
	}

	function isValidCountdownSeconds(val)
	{
		return (isNumber(val) && val > 0);
	}

	function getEndCardCountdownSeconds()
	{
		return isValidCountdownSeconds(params.endCardSeconds) ? params.endCardSeconds : 10;
	}
	
	this.isAuthenticatedUser = function()
	{
		return state.getIsAuthenticated();
	};
	
	this.totalCountdownSeconds = function()
	{
		return Math.round( getEndCardCountdownSeconds() );
	};
	
	this.setGuidList = function(value)
	{
		guidList = value;
	};
	
	this.getGuidList = function()
	{
		return guidList;
	};
	
	this.setPlaylist = function(value)
	{
		playlist = value;
	};
	
	this.getPlaylist = function()
	{
		return playlist;
	};
	
	this.setReplayThumbnail = function(value)
	{
		replayThumbnail = value;
	};
	
	this.getReplayThumbnail = function()
	{
		return replayThumbnail;
	};
}
function EndCardPlaylist()
{
	var items = [];
	var currentItem = null;

	function getCurrentItemIndex()
	{
		for(var i=0; i < items.length; i++)
		{
			if(items[i] === currentItem)
			{
				return i;
			}
		}

		return -1;
	}

	this.getNexItem = function()
	{
		if(getCurrentItemIndex() < items.length-1)
		{
			return items[getCurrentItemIndex() + 1];
		}
		else
		{
			return items[0];
		}
	};

	this.getCurrentItem = function()
	{
		return currentItem;
	};

	this.getItemByGuid = function(guid)
	{
		for(var i=0; i < items.length; i++)
		{
			if(items[i].getGuid() === guid)
			{
				return items[i];
			}
		}

		return null;
	};

	this.setCurrentItem = function(item)
	{
		currentItem = item;
	};

	this.addItem = function(item)
	{
		items.push(item);
	};
}
function CarouselEndPointEntryToEndCardItemVO(entry)
{
	var _entry = entry;
	
	function getSeriesTitle()
	{
		var name = _entry.media$categories[0].media$name;
		// we're stripping "Series/" from the beginning of the name, if it exists
		var startIndex = (name.toLowerCase().indexOf("series/") === 0) ? 7 : 0;
		return name.slice(startIndex);
	}
	
	function getUpNextImage()
	{
		return _entry.plmedia$defaultThumbnailUrl.big;
	}
	
	function getReplayThumbnail()
	{
		return _entry.plmedia$defaultThumbnailUrl.small;
	}
	
	function getReleaseURL()
	{
		return _entry.releaseUrl;
	}
	
	function getEntitlement()
	{
		return _entry.nbcu$entitlement;
	}
	
	this.entitlement = getEntitlement();
	this.guid = _entry.guid;
	this.mediaAvailableDate = _entry.media$availableDate;
	this.upNextImage = getUpNextImage();
	this.seriesTitle = getSeriesTitle();
	this.assetTitle = _entry.title;
	this.seasonNumber = _entry.pl1$seasonNumber;
	this.episodeNumber = _entry.pl1$episodeNumber;
	this.replayThumbnail = getReplayThumbnail();
	this.clipId = _entry.nbcu$clipId;
	this.permalink = _entry.nbcu$permalink;
	this.releaseURL = getReleaseURL();
	this.cueInPoint = _entry.cueInPoint;
}
function CarouselEndPointFromMateuItemToEndCardItemVO(entry)
{
	var _entry = entry;
	
	function getSeriesTitle()
	{
		var name = _entry.mediaCategories[0];
		// we're stripping "Series/" from the beginning of the name, if it exists
		var startIndex = (name.toLowerCase().indexOf("series/") === 0) ? 7 : 0;
		return name.slice(startIndex);
	}
	
	function getUpNextImage()
	{
		return _entry.imageURL;
	}
	
	function getReplayThumbnail()
	{
		return _entry.thumbnailURL;
	}
	
	function getReleaseURL()
	{
		return _entry.mainReleaseURL;
	}
	
	this.entitlement = _entry.entitlement;
	this.guid = _entry.guid;
	this.mediaAvailableDate = _entry.availableDate;
	this.upNextImage = getUpNextImage();
	this.seriesTitle = getSeriesTitle();
	this.assetTitle = _entry.title;
	this.seasonNumber = _entry.seasonNumber;
	this.episodeNumber = _entry.episodeNumber;
	this.replayThumbnail = getReplayThumbnail();
	this.clipId = _entry.nbcu$clipId;
	this.permalink = _entry.permalink;
	this.releaseURL = getReleaseURL();
	this.cueInPoint = _entry.cueInPoint;
}
function JSONEntryToEndCardItemVO(entry)
{
	var _entry = entry;

	function getSeriesTitle()
	{
		var name = _entry.media$categories[0].media$name;
		// we're stripping "Series/" from the beginning of the name, if it exists
		var startIndex = (name.toLowerCase().indexOf("series/") === 0) ? 7 : 0;
		return name.slice(startIndex);
	}

	function in_array(needle, haystack)
	{
		for (var i = 0; i < haystack.length; i++)
		{
			if (haystack[i] === needle)
			{
				return true;
			}
		}
		
		return false;
	}

	function thumbnailMatchesAssetTypes(thumbnail, desiredAssetTypes)
	{
		var match = true;
		
		for(var i = 0; i < desiredAssetTypes.length; i++)
		{
			var assetType = desiredAssetTypes[i];
			if(!in_array(assetType, thumbnail.plfile$assetTypes))
			{
				match = false;
			}
		}
		
		return match;
	}
	
	function getThumbnailForAssetTypes(desiredAssetTypes)
	{
		var thumbnails = _entry.media$thumbnails; // array
		for(var i = 0; i < thumbnails.length; i++)
		{
			var thumbnail = thumbnails[i];
			if(thumbnailMatchesAssetTypes(thumbnail, desiredAssetTypes))
			{
				return thumbnail.plfile$url;
			}
		}
	
		return '';
	}

	function getReplayThumbnail()
	{
		return getThumbnailForAssetTypes(["Thumbnail","Standard"]);
	}

	function getDefaultContent()
	{
		var files = _entry.media$content;
		var highIndex = 0;
		for(var i=0; i< files.length; i++)
		{
			if(files[i].plfile$bitrate > files[highIndex].plfile$bitrate)
			{
				highIndex = i;
			}
		}

		return files[highIndex];
	}

	function getReleaseURL()
	{
		return getDefaultContent().plfile$url;
	}
	
	function getEntitlement(){
		return _entry.nbcu$entitlement;
	}
	
	this.entitlement = getEntitlement();
	this.guid = _entry.guid;
	this.mediaAvailableDate = _entry.media$availableDate;
	this.upNextImage = _entry.plmedia$defaultThumbnailUrl;
	this.seriesTitle = getSeriesTitle();
	this.assetTitle = _entry.title;
	this.seasonNumber = _entry.nbcu$seasonNumber;
	this.episodeNumber = _entry.nbcu$productionNumber;
	this.replayThumbnail = getReplayThumbnail();
	this.clipId = _entry.nbcu$clipId;
	this.permalink = _entry.nbcu$permalink;
	this.releaseURL = getReleaseURL();
	this.cueInPoint = _entry.cueInPoint;
}
function CarouselEndPointFromMateuParser()
{
	/**
	 * Parses supplied data into an EndCardPlaylist object.
	 * 
	 * @param {Object} data The JSON object to parse
	 * @return {EndCardPlaylist} a populated EndCardPlaylist instance
	 * @see http://dev-www.nbc.com/a/video-carousel/145567?includeExternal=true
	 */
	this.parse = function(data)
	{
		var playlist = new EndCardPlaylist();
		for(var i=0; i < data.items.length; i++)
		{
			var vo = new CarouselEndPointFromMateuItemToEndCardItemVO(data.items[i]);
			playlist.addItem(new EndCardItem(vo));
		}

		return playlist;
	};
}
function CarouselEndPointParser()
{
	/**
	 * Parses supplied data into an EndCardPlaylist object.
	 * 
	 * @param {Object} data The JSON object to parse
	 * @return {EndCardPlaylist} a populated EndCardPlaylist instance
	 * @see http://www.nbc.com/data/node/137781/video_carousel
	 */
	this.parse = function(data)
	{
		var playlist = new EndCardPlaylist();
		for(var i=0; i < data.entries.length; i++)
		{
			var vo = new CarouselEndPointEntryToEndCardItemVO(data.entries[i]);
			playlist.addItem(new EndCardItem(vo));
		}

		return playlist;
	};
}
function CarouselParserDelegator(_factory)
{
	var factory = _factory;
	
	this.parse = function(data)
	{
		return factory.getParserForData(data).parse(data);
	};
}
function EndCardFeedParser()
{
	this.parse = function(data)
	{
		var playlist = new EndCardPlaylist();
		for(var i=0; i < data.entries.length; i++)
		{
			var vo = new JSONEntryToEndCardItemVO(data.entries[i]);
			playlist.addItem(new EndCardItem(vo));
		}

		return playlist;
	};
}
function GuidFeedParser()
{
	this.parse = function(data1)
	{				
		var arr = [];
			
		for(var i=0; i < data1.entries.length; i++)
		{
			var currentGUID = data1.entries[i].guid;
			if(currentGUID !== undefined && currentGUID !== null)
			{
				arr.push(currentGUID);
			}
		}
		
		return arr;
	};
}
function ReplayThumbnailFeedParser()
{
	this.parse = function(data)
	{
		var entry = data.entries[0];
		return (entry.media$thumbnails[0]) ? entry.media$thumbnails[0].plfile$url : "";
	};
}
function EndCardTokenizer(_cmdLocator, _model, _templateString, _params)
{
	var cmdLocator = _cmdLocator;
	var model = _model;
	var templateString = _templateString;
	var params = _params;
	
	function getContentMetadata()
	{
		return cmdLocator.getCurrentContentMetadata();
	}

	function getShowName()
	{
		return getContentMetadata().getShowName();
	}

	function isFullEpisode()
	{
		return getContentMetadata().isFullEpisode();
	}
	
	function getGuid()
	{
		return getContentMetadata().getGuid();
	}

	function getFixedShowName()
	{
		return encodeURIComponent( getShowName().split(":").join("\\:") );
	}

	function indexOf(needle, haystack)
	{
		for(var i=0; i < haystack.length; i++)
		{
			if(haystack[i] === needle)
			{
				return i;
			}
		}

		return -1;
	}
	
	function getNextGuid()
	{
		var arr = model.getGuidList();
		return (arr) ? arr[ (indexOf(getGuid(), arr) + 1) % arr.length ] : String(arr);
	}
	
	function getCarouselID()
	{
		return String(params.carouselID);
	}
	
	function replaceKeys(str)
	{
		str = str.replace(/\[GUID\]/g, getGuid());
		str = str.replace(/\[NEXT_GUID\]/g, getNextGuid());
		str = str.replace(/\[SHOW_NAME\]/g, getFixedShowName());
		str = str.replace(/\[IS_FULLEPISODE\]/g, isFullEpisode());
		str = str.replace(/\[CAROUSEL_ID\]/g, getCarouselID());

		return str;
	}
	
	this.getTokenizedString = function()
	{
		return replaceKeys(templateString);
	};
}

/**
 * Returns parsed data from an ajax request. This allows
 * for the decoupling of the URL generation and the actual request execution,
 * while providing a mechanism to separately parse and make use of the response.
 * 
 * @param {type} _reqFactory creates the ajax request object
 * @param {type} _parser parses the data into a domain object
 * @param {type} _tokenizer creates the URL for the request
 * @returns {RequestMediator}
 */
function RequestMediator(_reqFactory, _parser, _tokenizer)
{
	var reqFactory = _reqFactory;
	var parser = _parser;
	var tokenizer = _tokenizer;
	
	var onSuccessCallback;
	var onFailCallback;
	
	function onFeedSuccess(data)
	{
		onSuccessCallback( parser.parse(data) );
	}

	function onFeedFail(data)
	{
		onFailCallback(data);
	}
	
	function newXDRequest()
	{
		return reqFactory.newRequest(onFeedSuccess, onFeedFail);
	}
	
	/**
	 * Requests data that populates the end card and executes a callback to indicate
	 * whether the data was successfully parsed or not.
	 * 
	 * @param {type} onSuccess - callback function when request has been received and successfully parsed
	 * @param {type} onFail - callback function when request fails or parsing fails
	 */
	this.getData = function(onSuccess, onFail)
	{
		onSuccessCallback = onSuccess;
		onFailCallback = onFail;
		
		newXDRequest().fetch( tokenizer.getTokenizedString() );
	};
}

/**
 * Manages asynchronous requests for playlist data.
 * 
 * @param {Object} _requestMediator handles the asynchronous request for the
 *	playlist data
 * @param {Object} _model the end card model
 * @param {Object} _cmdLocator provides the current content metadata
 * @returns {PlaylistMediator}
 */
function PlaylistMediator(_requestMediator, _model, _cmdLocator)
{
	var requestMediator = _requestMediator;
	var model = _model;
	var cmdLocator = _cmdLocator;
	
	var onSuccessCallback;
	var onFailCallback;
	
	function getContentMetadata()
	{
		return cmdLocator.getCurrentContentMetadata();
	}
	
	function getGuid()
	{
		return getContentMetadata().getGuid();
	}
	
	function onPlaylistSuccess(playlist)
	{
		playlist.setCurrentItem( playlist.getItemByGuid( getGuid() ) );
		
		model.setPlaylist( playlist );
		
		onSuccessCallback();
	}
	
	function onPlaylistFail(data)
	{
		console.log("PlaylistMediator::onPlaylistFail. data: " + data);
		onFailCallback(data);
	}

	this.updatePlaylist = function(onSuccess, onFail)
	{
		onSuccessCallback = onSuccess;
		onFailCallback = onFail;
		
		requestMediator.getData(onPlaylistSuccess, onPlaylistFail);
	};
}

/**
 * Sets the replay thumbnail on the model.
 * 
 * Implements the decorator pattern to make an additional request for replay
 * thumbnail data when necessary.
 * 
 * @param {type} _coreImpl
 * @param {type} _requestMediator
 * @param {type} _model
 * @param {type} _cmdLocator
 * @returns {ReplayThumbnailDecorator}
 */
function ReplayThumbnailDecorator(_coreImpl, _requestMediator, _model, _cmdLocator)
{
	var coreImpl = _coreImpl;
	var requestMediator = _requestMediator;
	var model = _model;
	var cmdLocator = _cmdLocator;
	
	var onSuccessCallback;
	var onFailCallback;
	
	function getContentMetadata()
	{
		return cmdLocator.getCurrentContentMetadata();
	}
	
	function onReplayThumbnailSuccess(thumbnailURL)
	{
		model.setReplayThumbnail(thumbnailURL);
		onSuccessCallback();
	}
	
	function onPlaylistSuccess()
	{
		var currentPlaylistItem = model.getPlaylist().getCurrentItem();
		if(currentPlaylistItem)
		{
			onReplayThumbnailSuccess( currentPlaylistItem.getReplayThumbnail() );
		}
		else
		{
			requestMediator.getData(onReplayThumbnailSuccess, onFail);
		}
	}
	
	function onFail(data)
	{
		console.log("ReplayThumbnailMediator::onFail. data: " + data);
		onFailCallback(data);
	}

	this.updatePlaylist = function(onSuccess, onFail)
	{
		onSuccessCallback = onSuccess;
		onFailCallback = onFail;
		
		coreImpl.updatePlaylist(onPlaylistSuccess, onFail);
	};
}

function EndCardView(_pdk, _model, _replayImage)
{
	var pdk = _pdk;
	var model = _model;
	var replayImage = _replayImage;

	var timer;
	var timeRemaining;
	var upNextImageWidth;
	var upNextImageHeight;

	this.getCardContent = function()
	{
		var str = '<div id="endCard" class="endCardContainer">';
		str += '<div id="upNextImageContainer"><!-- <img id="upNextImage"/> goes here --></div>';
		str += '<div class="textContainer">';
		str +=  '<div class="upNext">Up Next</div>';	
		str +=  '<div class="episodeInfo"><span class="seriesTitle" id="seriesTitle"></span><span class="assetTitle" id="assetTitle"></span></div>';	
		str +=  '<div class="seasonInfo" id="seasonInfo"></div>';	
		str +=  '<div class="countdown" id="countdownTimeRemaining"></div>';
		str += '</div>';
		str += '<div class="replayImageContainer">';
		str +=  '<div class="replayImageBackground">';
		str +=  '<img id="replayThumbnail"/>';
		str +=  '<img src="' + replayImage + '" id="replayImage" />';
		str +=  '</div>';
		str += '</div>';
		str += '</div>';

		return str;
	};

	function stopTimer()
	{
		clearInterval(timer);
	}

	function startTimer()
	{
		onCountdownStarted();
		stopTimer();

		timeRemaining = model.totalCountdownSeconds();
		showTimeRemaining(timeRemaining);

		timer = setInterval(onInterval, 1000);
	}

	function formatTimeRemaining(seconds)
	{
		if(seconds < 0) seconds = 0;

		var minutes = Math.floor(seconds / 60);
		var modSeconds = seconds % 60;

		if(minutes < 1) minutes = "";
		if(modSeconds < 10) modSeconds = "0" + modSeconds;

		return minutes + ":" + modSeconds;
	}

	function showTimeRemaining(seconds)
	{
		pdk.jQuery("#countdownTimeRemaining").text( formatTimeRemaining(seconds) );
	}

	function onCountdownComplete()
	{
		var evt = new EndCardEvent(EndCardEvent.COUNTDOWN_COMPLETE, _playlist().getNexItem());
		pdk.controller.dispatchEvent(evt.type, evt.data);
	}
	
	function onCountdownStarted()
	{
		var evt = new EndCardEvent(EndCardEvent.COUNTDOWN_STARTED, _playlist().getNexItem());
		pdk.controller.dispatchEvent(evt.type, evt.data);
	}
	
	function onInterval()
	{
		showTimeRemaining(--timeRemaining);
		if(timeRemaining <= 0)
		{
			stopTimer();
			onCountdownComplete();
		}
	}

	function onReplayClick()
	{
		stopTimer();
		pdk.controller.clickPlayButton();
		pdk.controller.pause(false);
	}

	function _playlist()
	{
		return model.getPlaylist();
	}

	function adjustBackground()
	{
		var imageRatio = upNextImageWidth / upNextImageHeight;
		var windowRatio = pdk.jQuery(window).width() / pdk.jQuery(window).height();

		if(imageRatio > windowRatio)
		{
			// window is tall, image is wide
			pdk.jQuery("#upNextImage").width(pdk.jQuery(window).width());
			pdk.jQuery("#upNextImage").height(pdk.jQuery(window).width() / imageRatio);
		}
		else
		{
			// window is wide, image is tall
			pdk.jQuery("#upNextImage").width(pdk.jQuery(window).height() * imageRatio);
			pdk.jQuery("#upNextImage").height(pdk.jQuery(window).height());
		}

			pdk.jQuery("#upNextImage").css('left', Math.floor(pdk.jQuery(window).width() / 2 - pdk.jQuery("#upNextImage").width() / 2) + 'px');
			pdk.jQuery("#upNextImage").css('top', Math.floor(pdk.jQuery(window).height() / 2 - pdk.jQuery("#upNextImage").height() / 2) + 'px');
	}

	function onUpNextImageLoad()
	{
		upNextImageWidth = this.width;
		upNextImageHeight = this.height;

		pdk.jQuery("#upNextImageContainer").append(this);
		
		adjustBackground();
		pdk.jQuery(window).resize(adjustBackground);
	}

	function startUpNextImageLoad(src)
	{
		pdk.jQuery("#upNextImage").remove();
		pdk.jQuery('<img src="'+ src +'" id="upNextImage" />').load(onUpNextImageLoad);
	}
	
	this.show = function(state)
	{
		startUpNextImageLoad(_playlist().getNexItem().getUpNextImage());
		startTimer();

		pdk.jQuery("#seriesTitle").text( _playlist().getNexItem().getSeriesTitle() );
		pdk.jQuery("#assetTitle").text( _playlist().getNexItem().getAssetTitle() );
		pdk.jQuery("#seasonInfo").text( "Season " + _playlist().getNexItem().getSeasonNumber() + " Episode " + _playlist().getNexItem().getEpisodeNumber() );		
		pdk.jQuery("#replayThumbnail").attr("src", model.getReplayThumbnail());
				
		pdk.jQuery("#replayImage").click(onReplayClick);
	};

	this.hide = function()
	{
		stopTimer();
	};
	
	this.init = function()
	{
	};
}

function GuidFeedManager(_controller, _cmdLocator, _model, _requestMediator)
{
	var controller = _controller;
	var cmdLocator = _cmdLocator;
	var model = _model;
	var requestMediator = _requestMediator;
	
	function getContentMetadata()
	{
		return cmdLocator.getCurrentContentMetadata();
	}
	
	function onFeedSuccess(data)
	{
		model.setGuidList( data );
	}

	function onFeedFail(data)
	{
		console.log("onFeedFail. data: " + data);
	}

	function canRequestFeed()
	{
		return !getContentMetadata().hasException();
	}
	
	function onMediaPlaying(evt)
	{
		controller.removeEventListener("OnMediaPlaying", onMediaPlaying);
		
		if(canRequestFeed())
		{
			requestMediator.getData(onFeedSuccess, onFeedFail);
		}
	}
	
	this.init = function()
	{
		controller.addEventListener("OnMediaPlaying", onMediaPlaying);
	};
}

function MPXFeedMediator(_guidManager, _view, _playlistMediator)
{
	var _this = this;
	var guidManager = _guidManager;
	var view = _view;
	var playlistMediator = _playlistMediator;

	function onPlaylistFail(data)
	{
		console.log("MPXFeedMediator::onPlaylistFail. data: " + data);
	}

	function onPlaylistSuccess()
	{
		view.show(_this.lastShowState);
	}

	this.show = function(state)
	{
		_this.lastShowState = state;
		playlistMediator.updatePlaylist(onPlaylistSuccess, onPlaylistFail);
	};

	this.getView = function()
	{
		return view;
	};

	this.init = function()
	{
		guidManager.init();
		view.init();
	};
}

/**
 * Sets an empty array for the guid list for configurations where the guid list
 * is not required.
 * 
 * @param {Object} _model the end card model
 * @returns {CarouselEnabledGuidManager}
 */
function CarouselEnabledGuidManager(_model)
{
	var model = _model;
	
	this.init = function()
	{
		model.setGuidList([]);
	};
}

/**
 * Facade for the end card that displays information about the next/related
 *	clips.
 * 
 * @param {Object} _factory instantiates all end card dependencies
 * 
 *  * @returns {EndCardFacade}
 */
function EndCardFacade(_factory)
{
	var _this = this;
	var factory = _factory;
	
	var mediator;
	
	this.getDeckId = function()
	{
		return "forms";
	};
	
	this.getCardId = function()
	{
		return "com.nbcuni.mpx.cards.endCard";
	};
	
	this.getCardContent = function()
	{
		return getView().getCardContent();
	};
	
	this.getPresenter = function()
	{
		return _this;
	};
	
	this.show = function()
	{
		getMediator().show();
	};
	
	this.hide = function()
	{
		getView().hide();
	};
	
	function getView()
	{
		return getMediator().getView();
	}
	
	function newMediator()
	{
		return factory.newMediator();
	}
	
	function getMediator()
	{
		mediator = mediator || newMediator();
		return mediator;
	}
	
	this.init = function()
	{
		getMediator().init();
	};
}

function WidgetEndSlateStrategyProvider(_serviceLocator, _params)
{
	var serviceLocator = _serviceLocator;
	var params = _params;
	
	function isDisabled()
	{
		return (String( params.disableEndCard ).toLowerCase() === "true");
	}
	
	this.getStrategy = function()
	{
		return (isDisabled()) ? serviceLocator.getService(ServiceKeys.StartCard) : serviceLocator.getService(ServiceKeys.EndCard);
	};
}

/**
 * Controls the end slate behavior based on the player's configuration.
 * 
 * Delegates presenter calls to the appropriate end card based on the provided
 * strategy.
 * 
 * @param {Object} _strategyProvider provides the presenter for the end slate
 * @returns {EndSlateDelegator}
 */
function EndSlateDelegator(_strategyProvider)
{
	var strategyProvider = _strategyProvider;
	
	this.getDeckId = function()
	{
		return "forms";
	};
	
	this.getCardId = function()
	{
		return "com.nbcuni.mpx.cards.endSlateDelegator";
	};
	
	function getStrategy()
	{
		return strategyProvider.getStrategy();
	}
	
	this.getCardContent = function()
	{
		return this.getPresenter().getCardContent();
	};
	
	this.getPresenter = function()
	{
		return getStrategy();
	};
	
	this.init = function()
	{
		
	};
}
function GetFlashCard(_controller, _state)
{
	var _this = this;
    var controller = _controller;
	var state = _state;
	
	this.getDeckId = function()
	{
		return "forms";
	};
	
	this.getCardId = function()
	{
		return "com.nbcuni.mpx.cards.getFlashCard";
	};
	
    this.getCardContent = function()
    {
		return '';
    };

	this.getPresenter = function()
	{
		return _this;
	};

    this.show = function(s)
    {
		window.location.href= NBCMPX.Config.baseDir + "/GetFlash_New.html";
    };

    this.hide = function()
    {
    };

    this.init = function()
    {
		checkAppState();
		controller.addEventListener("appStateChange", function(evt) { checkAppState(); });
    };
	
	function checkAppState()
	{
		if(state.getAppState() === AppState.CONTENT_REQUIRES_FLASH)
		{
			controller.pause(true);
			controller.showPlayerCard(_this.getDeckId(), _this.getCardId());
		}
	}
}
var NullCard = (function (){
	"use strict";
    var instance; //prevent modification of "instance" variable

	function Singleton()
	{
        if (instance)
		{
			throw new Error("NullCard is a singleton. Use NullCard.getInstance() instead.");
        }
		
		// define properties we want
		this.getDeckId = function(){ return ""; };
		this.getCardId = function(){ return "NullCard"; };
		this.getCardContent = function(){ return ""; };
		this.getPresenter = function(){
			return {
				show:function(s){},
				hide:function(){}
			};
		};
		this.init = function(){};
		
        instance = this;
    }

	Singleton.getInstance = function ()
	{
        return instance || new Singleton();
    };
	
    return Singleton;
}());
function UnavailableContentCard(_controller, _state)
{
	var _this = this;
    var controller = _controller;
	var state = _state;
	
	this.getDeckId = function()
	{
		return "forms";
	};
	
	this.getCardId = function()
	{
		return "com.nbcuni.mpx.cards.unavailableContentCard";
	};
	
    this.getCardContent = function()
    {
		return '';
    };
	
	this.getPresenter = function()
	{
		return _this;
	};

    this.show = function(s)
    {
		window.location.href= NBCMPX.Config.baseDir + "/Expired_New.html";
    };

    this.hide = function()
    {
    };

    this.init = function()
    {
		checkAppState();
		controller.addEventListener("appStateChange", function(evt) { checkAppState(); });
    };
	
	function checkAppState()
	{
		if(state.getAppState() === AppState.CONTENT_EXPIRED)
		{
			controller.pause(true);
			controller.showPlayerCard(_this.getDeckId(), _this.getCardId());
		}
	}
}
function UnsupportedDeviceCardTokenizer(_cmdLocator, _templateString)
{
	function getContentMetadata()
	{
		return _cmdLocator.getCurrentContentMetadata();
	}

	function getGuid()
	{
		return getContentMetadata().getGuid();
	}
	
	function replaceKeys(str)
	{
		str = str.replace(/\[GUID\]/g, getGuid());

		return str;
	}
	
	this.getTokenizedString = function()
	{
		return replaceKeys(_templateString);
	};
}

/**
 * Display message to user if they try to view content unsupported by their 
 * device/platform.
 * 
 * @see https://rally1.rallydev.com/#/15455410294d/detail/userstory/15459920738
 * @see https://rally1.rallydev.com/#/15455410294d/detail/defect/18037422917
 * @param {Object} _controller the player controller/event dispatcher
 * @param {Object} _state provides information about the application state
 * @param {object} _tokenizer creates the URL for the request
 * 
 * @returns {UnsupportedDeviceCard}
 */
function UnsupportedDeviceCard(_controller, _state, _tokenizer)
{
	var _this = this;
	var controller = _controller;
	var state = _state;
	var tokenizer = _tokenizer;


	this.getDeckId = function()
	{
		return "forms";
	};

	this.getCardId = function()
	{
		return "com.nbcuni.mpx.cards.unsupportedDeviceCard";
	};

	this.getCardContent = function()
	{
		return '';
	};
    
	this.getPresenter = function()
	{
		return _this;
	};
	
	this.show = function(s)
    {
		window.location.href= tokenizer.getTokenizedString();
    };
    
	this.hide = function()
    {
    };
    
	this.init = function()
    {
		checkAppState();
		controller.addEventListener("appStateChange", function(evt) { checkAppState(); });
    };

	function checkAppState()
	{
		if(state.getAppState() === AppState.UNSUPPORTED_DEVICE)
		{
			controller.pause(true);
			controller.showPlayerCard(_this.getDeckId(), _this.getCardId());
		}
	}
}
function StartCard(pdk, state, config)
{
	var _this = this;
	var _pdk = pdk;
	var _state = state;
	var _config = config;
	var _data;
	var _$; // jQuery shorthand
	var browser;
	var _playerWidth;

	function findCustomValueByFieldName(fieldName)
	{
		if(_data && _data.customValues)
		{
			var i = _data.customValues.length;
			while(i--)
			{
				if(_data.customValues[i].fieldName === fieldName)
				{
					return _data.customValues[i].value;
				}
			}
		}
		else if(_data)
		{
			if(_data["nbcu$" + fieldName])
			{
				return _data["nbcu$" + fieldName];
			}
		}
	
		return null;
	}

	function getTitle()
	{
		return  _data.title;
	}

	function getPermalink()
	{
		return findCustomValueByFieldName("permalink") || "//www.nbc.com";
	}

	function getShowName()
	{
		// we're stripping "Series/" from the beginning of the name, if it exists
		startIndex = (_data.categories[0].name.toLowerCase().indexOf("series/") === 0) ? 7 : 0;
		return _data.categories[0].name.slice(startIndex);
	}

	function getTuneInTime()
	{
		return findCustomValueByFieldName("tuneInTime") || "";
	}

	function getProgrammingType()
	{
		return findCustomValueByFieldName("programmingType") || "";
	}

	function onLoadReleaseUrl(evt)
	{
		_pdk.controller.removeEventListener('OnLoadReleaseUrl', onLoadReleaseUrl);

		_data = evt.data;
		if(browser !== "Microsoft Internet Explorer") {
			updateViewWhenReady();
		}
	}

	function resizeFunction(evt)
	{
		_playerWidth = _$(".tpContainer").width();
		if(_playerWidth<768)
		{
			var _playIconDimension = (_playerWidth*14.25)/100;
			var _margin = -(_playIconDimension/2);
			_$(".startCardPlayIcon").css({"width":_playIconDimension,"height":_playIconDimension,"margin-left":_margin,"margin-top":_margin});
		}
		else
			_$(".startCardPlayIcon").css({"width":"110px","height":"110px","margin-left":"-62.5px","margin-top":"-62.5px"});
	}

	function onPlayerLoaded(evt)
	{
		_pdk.controller.removeEventListener('OnPlayerLoaded', onPlayerLoaded);

		_$ = _pdk.jQuery;
		if(browser !== "Microsoft Internet Explorer") {
			updateViewWhenReady();
		}
	}

	function onPlayIconClick()
	{
		_pdk.controller.clickPlayButton();
		_pdk.controller.pause(false);
		_pdk.controller.hidePlayerRegions(false);
	}

	function updateViewWhenReady()
	{
		if(_$ && _data)
		{
			if(getTuneInTime()) {
				_$("#startCardHeadline").text(getShowName() + " - " + getTuneInTime());
			}
			else {
				_$("#startCardHeadline").text(getShowName());
			}

			_$("#startCardPlayIcon").addClass("startCardPlayIcon");			
			_$("#startCardCopy").text(getProgrammingType() + ": " + getTitle());
			_$("#startCardBrandLogoLink").attr('href',getPermalink());
			_$("#startCardPlayIcon").click(onPlayIconClick);
			resizeFunction();
			
			
		}
	}

	this.getDeckId = function()
	{
		return "forms";
	};
	
	this.getCardId = function()
	{
		return "com.nbcuni.mpx.cards.startCard";
	};

	this.getCardContent = function()
	{
		var str = '<div id="startCard" class="opaqueCardContainer" />';
		str += '<div id="startCardBottomBar" class="startCardBottomBar"></div>';
		str += '<div id="startCardTextContainer" class="startCardTextContainer">';
		str +=  '<div id="startCardHeadline" class="startCardHeadline"></div>';
		str +=  '<div id="startCardCopy" class="startCardCopy"></div>';
		str += '</div>';
		str += '<div id="startCardPlayIcon"></div>';

		return str;
	};

	this.getPresenter = function()
	{
		return _this;
	};

	this.show = function(s)
	{
		_pdk.controller.hidePlayerRegions(true);
		browser = navigator.appName;
		updateViewWhenReady();
		_$(window).resize(resizeFunction);
	};

	this.hide = function()
	{
	};

	this.init = function()
	{
		_pdk.controller.addEventListener('OnPlayerLoaded', onPlayerLoaded);
		_pdk.controller.addEventListener("OnLoadReleaseUrl", onLoadReleaseUrl);

		checkAppState();
		_pdk.controller.addEventListener("appStateChange", function(evt) { checkAppState(); });
    };
	
	function checkAppState()
	{
		if(_state.getAppState() === AppState.READY)
		{
			_pdk.controller.hidePlayerRegions(true);
			_pdk.controller.showPlayerCard(_this.getDeckId(), _this.getCardId());
		}
	}
}

function ShareCardEvent(type, clicked)
{
	this.type = type;
	this.data = {
		clicked:clicked
	};
}
ShareCardEvent.BUTTON_CLICKED = "ShareCardTrigger";
function ShareCardFeedResearcher(_config, _factory)
{
	var config = _config;
	var factory = _factory;
	
	var guid, callback;
	
	function getRequestURL()
	{
		return config.imageFeedURL.replace(/\[GUID\]/g, guid);
	}

	function onSuccess(data)
	{
		var image = "";
		var element = data.entries[0];

		if(element)
		{
			image = (element.thumbnails[0]) ? element.thumbnails[0].url : element.defaultThumbnailUrl;
		}

		callback(image, guid);
	}
	
	function onFail(data)
	{
		
	}
	
	this.findImageForGuid = function(_guid, _callback)
	{
		guid = _guid;
		callback = _callback;
		factory.newRequest(onSuccess, onFail).fetch(getRequestURL());
	};
}

/**
 * Intantiates ShareCardResearcher instances
 * @param {Object} _config contains the URL string for a request
 * @param {Object} _factory creates XDRequest objects for loading data
 */
function ShareCardResearcherFactory(_config, _factory)
{
	var config = _config;
	var factory = _factory;
	
	this.newResearcher = function()
	{
		return new ShareCardFeedResearcher(config, factory);
	};
}

function ShareCardImageManager(_cache, _factory)
{
	var cache = _cache;
	var factory = _factory;
	
	this.getImageForGuid = function(guid)
	{
		return cache[guid];
	};
	
	function newResearcher()
	{
		return factory.newResearcher();
	}
	
	this.researchContentMetadata = function(contentMetadata)
	{
		newResearcher().findImageForGuid(contentMetadata.getGuid(), addImageByGuid);
	};

	function addImageByGuid(image, guid)
	{
		if(!cache[guid])
		{
			cache[guid] = image;
		}
	}
}

function ShareCardModel(_config, _imageManager, _params)
{
	var config = _config;
	var imageManager = _imageManager;
	var params = _params;
	
	var contentMetadata;
	var _this = this;
	
	this.getImage = function()
	{
		return imageManager.getImageForGuid( contentMetadata.getGuid() );
	};
	
	function getReleasePid()
	{
		return contentMetadata.getReleasePid();
	}

	function getMediaPid()
	{
		return contentMetadata.getMediaPid();
	}
	
	this.getPermalink = function()
	{
		return contentMetadata.getPermalink();
	};
	
	this.getShowName = function()
	{
		return contentMetadata.getShowName();
	};
	
	this.getTitle = function()
	{
		return contentMetadata.getTitle();
	};
	
	this.getDescription = function()
	{
		return contentMetadata.getDescription();
	};
	
	function getQueryString()
	{
		var nameValuePairs = [];
		
		if(String( params.disableEndCard ).toLowerCase() === "true") nameValuePairs.push("disableEndCard=" + params.disableEndCard);
		if(params.carouselID) nameValuePairs.push("carouselID=" + params.carouselID);
		
		return (nameValuePairs.length > 0) ? "?" + nameValuePairs.join("&") : "";
	}
	
	this.getIframeURL = function()
	{
		return replaceKeys(config.iframeURL) + getQueryString();
	};
	
	function replaceShareURLParams(str){		
		var playerURL = _this.getIframeURL();
	
		str = str.replace(/\[TITLE\]/g, _this.getTitle());
		str = str.replace(/\[DESC\]/g, _this.getDescription());
		str = str.replace(/\[IMAGE\]/g, _this.getImage());
		str = str.replace(/\[PLAYER_URL\]/g, playerURL);
		
		return str;
	}
	
	function replaceFBShareURL(str){
		var wrapperPage = replaceShareURLParams(config.wrapperPageURL);
		str = str.replace(/\[STORY_URL\]/g, encodeURIComponent(wrapperPage));
		str = str.replace(/\[PERMALINK\]/g, encodeURIComponent(_this.getPermalink()));
		return str;
	}
	
	this.getFacebookShareURL = function(){
		return replaceFBShareURL(config.FBSharerURL);
	};
	
	this.getEmailURL = function()
	{
		return replaceKeys(config.emailURL);
	};
	
	function getProtocol()
	{
		return window.location.protocol;
	}
	
	function replaceKeys(str)
	{
		str = str.replace(/\[PROTOCOL\]/g, getProtocol());
		str = str.replace(/\[RELEASE_PID\]/g, getReleasePid());
		str = str.replace(/\[MEDIA_PID\]/g, getMediaPid());
		return str;
	}

	this.setContentMetadata = function(_contentMetadata)
	{
		contentMetadata = _contentMetadata;
		
		imageManager.researchContentMetadata(contentMetadata);
	};
}

function ShareCardPresenter(_model)
{
	var model = _model;
	var social_icons_preloaded = false;
	function getModel()
	{
		return model;
	}

	function email()
	{
		$("#shareForm").css('display', 'none');

		var email_fields = "	<div id='emailForm'> ";
		email_fields += "		<div id='emailFields' class='emailFields'>";
		email_fields += "			<div class='fromForm'> ";
		email_fields += "				<div class='mailSideHeading'>FROM</div> ";
		email_fields += "				<div spellcheck='false' id='mailFrom' class='shareTextBox customTextBox' contenteditable='true'></div>";
		email_fields += "			</div> ";
		email_fields += "			<div class='toForm'> ";
		email_fields += "				<div class='mailSideHeading'>TO</div>";
		email_fields += "				<div spellcheck='false' id='mailTo' class='shareTextBox customTextBox' contenteditable='true'></div>";
		email_fields += "				<div class='toTextMsg'>Use commas for more than one email address</div> ";
		email_fields += "			</div> ";
		email_fields += "			<div class='noteForm'> ";
		email_fields += "				<div class='mailSideHeading'>NOTE</div> ";
		email_fields += "				<div spellcheck='false' id='mailSubject' class='mailSubject customTextBox' contenteditable='true'>";
		email_fields += "					Thought you might like this video from <b>" + getTitle() + "</b>.<br/>Video URL: <b>" + getShareURL() + "</b><br/>";
		email_fields += "				</div> ";
		email_fields += "			</div> ";
		email_fields += "			<div class='button buttonCancel' onClick=closeCard();></div> ";
		email_fields += "			<div class='button buttonSend'></div> ";
		email_fields += "		</div>";
		email_fields += "	</div>";

		$('.shareCardContainer').append(email_fields.toString());
		$(".buttonSend").click(sentMail);
	}
	
	function getFacebookTitle()
	{
		return getShowName() + ":" + getTitle();
	}

	function get_fb_gigya_url()
	{
		var act = new gigya.socialize.UserAction();
		act.addActionLink(getFacebookTitle(), getGigyaURL());
		act.setLinkBack(getGigyaURL());
		act.setTitle(getFacebookTitle());
		act.setDescription(getDescription());

		var params =
		{
			url: getGigyaURL(),
			provider: 'facebook',
			title: getFacebookTitle(),
			thumbnailURL: getImage(),
			description: getDescription(),
			userAction: act
		};
	
		gigya.socialize.postBookmark(params);
	}
	
	function share_custom_params(){		
		var fb_share_url = getModel().getFacebookShareURL();
		window.open(fb_share_url);	
	}
	
	function facebook()
	{
		share_custom_params();
		return false;
	}

	function twitter()
	{
		window.open('//twitter.com/share?url=' + encodeURIComponent(getShareURL()) + '&text=' + encodeURIComponent(getTitle()), '', 'width=550,height=390');
		return false;
	}

	function googlePlus()
	{
		window.open("//plus.google.com/share?url=" + encodeURIComponent(getShareURL()), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
		return false;
	}

	function checkError()
	{
		$("#mailTo").focus(function() {
			$(this).removeClass("inputError");
			if ($(this).text() === "Multiple Emails? Use Commas")
				$(this).text("");
		});
	}

	function sentMail()
	{
		var to = $('#mailTo').text();
		var from = $('#mailFrom').text();
		var subject = $('#mailSubject').html();
		var emailvalidTo = '';
		var emailvalidFrom = '';

		var emailExpression = /^(([A-Za-z0-9\s][^<>()[\]\\.,;:%&#$!\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		var toArray = to.split(',');

		for (var val in toArray)
		{
			if (!toArray[val].match(emailExpression))
			{
				emailvalidTo = 'false';
				$("#mailTo").addClass("inputError");
				checkError();
				if (to === "")
					$("#mailTo").text("Multiple Emails? Use Commas");
			}
		}

		if (!from.match(emailExpression))
		{
			emailvalidFrom = 'false';
			$("#mailFrom").addClass("inputError");
			$("#mailFrom").focus(function() {
				$(this).removeClass("inputError");
				if ($(this).text() === "Your Email Address...")
					$(this).text("");
			});
			if (from === "")
				$("#mailFrom").text("Your Email Address...");
		}

		if (emailvalidTo != 'false' && emailvalidFrom != 'false')
		{
			$.post(getEmailURL(), "to=" + to + "&releaseTitle=" + encodeURIComponent(getTitle()) + "&releaseDescription=" + encodeURIComponent(getDescription()) + "&message=" + encodeURIComponent(subject) + "&from=" + from + "&playerURL=" + encodeURIComponent(getShareURL()));
			closeCard();
		}
	}
	
	function getImage()
	{
		return getModel().getImage();
	}
	
	function getPermalink()
	{
		return getModel().getPermalink();
	}
	
	function getShowName()
	{
		return getModel().getShowName();
	}
	
	function getTitle()
	{
		return getModel().getTitle();
	}
	
	function getShareURL()
	{
		return (!getPermalink()) ? getIframeURL() : getPermalink();
	}

	function getGigyaURL()
	{
		return (!getPermalink()) ? getPlayerURL() : getPermalink();
	}
	
	function getDescription()
	{
		return getModel().getDescription();
	}
	
	function wrapWithSchemaDotOrg(innerTag)
	{
		return '&lt;div itemprop="video" itemscope itemtype="http://schema.org/VideoObject"&gt;' + innerTag + '&lt;/div&gt;';
	}
	
	function getFrameLink()
	{
		return '&lt;iframe src="' + getIframeURL() + '" width="480" height="270" frameBorder="0" seamless="seamless" allowFullScreen&gt;&lt;/iframe&gt;';
	}
	
	function getIframeURL()
	{
		return getModel().getIframeURL();
	}

	
	
	function getPlayerURL()
	{
		var _playerUrl = getModel().getIframeURL();
		var _pattern = /^http+/;
		if(_pattern.test(_playerUrl))
			return _playerUrl;
		else
			return "http:"+_playerUrl;
	}
	
	function getEmailURL()
	{
		return getModel().getEmailURL();
	}
	
	this.show = function(s)
	{
		var html = "";
		html += "	<div class='close' onclick=closeCard()></div>";
		html += "	<div id='shareForm'>";
		html += "		<div id='socialNetwokingSites' class='socialNetwokingSites'>";
		html += "			<div id='facebook' class='socialshare'>";		
		html += "				<div class='logoIcon facebook' id='fadeoutdiv' style='display: block; z-index: 90;' ></div>";
		html += "				<div class='logoIcon facebook' id='fadeindiv' style='z-index: 99; display: none;'></div>";
		html += "			</div> ";
		html += "			<div id='twitter' class='socialshare'>";		
		html += "				<div class='logoIcon twitter' id='fadeoutdiv' style='display: block; z-index: 90;' ></div>";
		html += "				<div class='logoIcon twitter' id='fadeindiv' style='z-index: 99; display: none;'></div>";
		html += "			</div> ";
		html += "			<div id='gplus' class='socialshare'>";
		html += "				<div class='logoIcon gplus' id='fadeoutdiv' style='display: block; z-index: 90;' ></div>";
		html += "				<div class='logoIcon gplus' id='fadeindiv' style='z-index: 99; display: none;'></div>";
		html += "			</div> ";
		html += "			<div id='email' class='socialshare'>";
		html += "				<div class='logoIcon email' id='fadeoutdiv' style='display: block; z-index: 90;' ></div>";
		html += "				<div class='logoIcon email' id='fadeindiv' style='z-index: 99; display: none;'></div>";
		html += "			</div> ";
		html += "		</div>";
		html += "		<div id='fieldValues' class='fieldValues'>";
		html += "			<div class='clipPermalink'>";
		html += "				<div class='shareSideHeading'>LINK</div>";
		html += "				<div id='txtPermalink' spellcheck='false' class='shareTextBox customTextBox' contenteditable='true'>" + getShareURL() + "</div>";
		html += "			</div>";
		html += "			<div class='frameLink'>";
		html += "				<div class='shareSideHeading'>EMBED</div>";
		html += "				<div id='frameSize' spellcheck='false' class='shareTextBox customTextBox' contenteditable='true'>" + wrapWithSchemaDotOrg(getFrameLink()) + "</div> ";
		html += "			</div>";
		html += "			<div class='frameSize'>";
		html += "				<div class='shareSideHeading'>SIZE</div>";
		html += "				<div spellcheck='false' class='size customTextBox' id='frameWidth' contenteditable='true'>480</div> x <div class='size customTextBox' id='frameHeight' contenteditable='true'>270</div> ";
		html += "			</div>";
		html += "		</div>";
		html += "	</div>";

		$('.shareCardContainer').append(html.toString());
		
		$("#email").click(email);
		$("#twitter").click(twitter);
		$("#facebook").click(facebook);
		$("#gplus").click(googlePlus);

		function preload_social_icons(){
		$('.socialshare').children('#fadeindiv').each(function () {
			var i = new Image();
			var bg = $(this).css('background-image');
			bgimg_url = bg.replace('url(','').replace(')','');
			i.onload = function(){
				$(this).css("background-image", "url("+bgimg_url+")"); 
			};
			i.src = bgimg_url;
			
		});	
		social_icons_preloaded = true;	
	}
	
	if(social_icons_preloaded === false){
		preload_social_icons();
	}
		
	$('.socialshare').hover(function(){
		$(this).find('#fadeoutdiv').css({zIndex:99}).fadeOut(300);
		$(this).find('#fadeindiv').css({zIndex:90}).fadeIn(300,function(){
			$(this).css('filter','');
		});
		return false;
	},function(){
		$(this).find('#fadeindiv').css({zIndex:99}).fadeOut(300);
		$(this).find('#fadeoutdiv').css({zIndex:90}).fadeIn(300,function(){
			$(this).css('filter','');
		});
		return false;
	});
		
		
		$('#txtPermalink').click(function() {
			document.execCommand('selectAll', false, null);
		});

		$('#frameSize').click(function() {
			document.execCommand('selectAll', false, null);
		});

		$('#frameWidth').live('keyup', function() {
			frLink = '&lt;iframe src="' + getIframeURL() + '" width="' + $(this).text() + '" height="' + $('#frameHeight').text() + '" frameBorder="0" seamless="seamless" allowFullScreen&gt;&lt;/iframe&gt;';
			$('#frameSize').html(wrapWithSchemaDotOrg(frLink));
		});

		$('#frameHeight').live('keyup', function() {
			frLink = '&lt;iframe src="' + getIframeURL() + '" width="' + $('#frameWidth').text() + '" height="' + $(this).text() + '" frameBorder="0" seamless="seamless" allowFullScreen&gt;&lt;/iframe&gt;';
			$('#frameSize').html(wrapWithSchemaDotOrg(frLink));
		});

		$('#frameWidth').live('blur', function() {
			var frwidth = $(this).text();
			var frHeight = Math.ceil((9 / 16) * frwidth);
			$('#frameHeight').text(frHeight);
			frLink = '&lt;iframe src="' + getIframeURL() + '" width="' + frwidth + '" height="' + frHeight + '" frameBorder="0" seamless="seamless" allowFullScreen&gt;&lt;/iframe&gt;';
			$('#frameSize').html(wrapWithSchemaDotOrg(frLink));
			if (frwidth < 240) {
				frLink = '&lt;iframe src="' + getIframeURL() + '" width="240" height="135" frameBorder="0" seamless="seamless" allowFullScreen&gt;&lt;/iframe&gt;';
				$('#frameWidth').text(240);
				$('#frameHeight').text(135);
				$('#frameSize').html(wrapWithSchemaDotOrg(frLink));
			}
			else if (frwidth > 1920) {
				frLink = '&lt;iframe src="' + getIframeURL() + '" width="1920" height="1080" frameBorder="0" seamless="seamless" allowFullScreen&gt;&lt;/iframe&gt;';
				$('#frameSize').html(wrapWithSchemaDotOrg(frLink));
				$('#frameWidth').text(1920);
				$('#frameWidth').text(1080);
			}
		});

		$('#frameHeight').live('blur', function() {
			var frHeight = $(this).text();
			var frwidth = Math.ceil((16 / 9) * frHeight);
			$('#frameWidth').text(frwidth);
			frLink = '&lt;iframe src="' + getIframeURL() + '" width="' + frwidth + '" height="' + frHeight + '" frameBorder="0" seamless="seamless" allowFullScreen&gt;&lt;/iframe&gt;';
			$('#frameSize').html(wrapWithSchemaDotOrg(frLink));
			if (frHeight < 135) {
				frLink = '&lt;iframe src="' + getIframeURL() + '" width="240" height="135" frameBorder="0" seamless="seamless" allowFullScreen&gt;&lt;/iframe&gt;';
				$('#frameSize').html(wrapWithSchemaDotOrg(frLink));
				$('#frameWidth').text(240);
				$('#frameHeight').text(135);
			}
			else if (frHeight > 1080) {
				frLink = '&lt;iframe src="' + getIframeURL() + '" width="1920" height="1080" frameBorder="0" seamless="seamless" allowFullScreen&gt;&lt;/iframe&gt;';
				$('#frameSize').html(wrapWithSchemaDotOrg(frLink));
				$('#frameWidth').text(1920);
				$('#frameHeight').text(1080);
			}
		});

		$('#mailFrom').live('keydown', function(e) {
			if (e.keyCode === 9) {
				$('.mailTo').removeClass("error");
			}
		});

	};
}

/**
 * Facade for the share card that allows user to share content via embedding,
 *	social networking, email, etc.
 * 
 * @param {Object} _controller the player controller/event dispatcher
 * @param {Object} _model provides information about the application state
 * @param {Object} _view the visual container for the share card
 * @param {Window} _window the global window object
 * @returns {ShareCard}
 */
function ShareCard(_controller, _model, _view, _window)
{
	var _this = this;
	
	var controller = _controller;
	var model = _model;
	var view = _view;
	var win = _window;
	
	var gigya_lib_included;

	this.getDeckId = function()
	{
		return "forms";
	};
	
	this.getCardId = function()
	{
		return "com.nbcuni.mpx.cards.shareCard";
	};

	this.getCardContent = function()
	{
		return "<div class='shareCardContainer'></div>";
	};

	this.getPresenter = function()
	{
		return _this;
	};

	this.show = function(s)
	{
		var shareEvt = new ShareCardEvent(ShareCardEvent.BUTTON_CLICKED, true);
		controller.dispatchEvent(shareEvt.type, shareEvt.data);
		view.show(s);
	};

	this.hide = function()
	{
		view.hide();
	};
	
	function loadGigyaOnFirstOpen()
	{
		if (!gigya_lib_included)
		{
			var gigya_js_url = 'http://cdn.gigya.com/JS/socialize.js?apikey=3_1SGao_ZOYsZ18kyCr1-legt0-iCma124_WqSgWThT6QexPwPsY9qB2e2fSFLzwUN';
			if (window.location.protocol === "https:")
			{
				gigya_js_url = 'https://cdns.gigya.com/JS/socialize.js?apikey=3_1SGao_ZOYsZ18kyCr1-legt0-iCma124_WqSgWThT6QexPwPsY9qB2e2fSFLzwUN';
			}

			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = gigya_js_url;
			head.appendChild(script);
			gigya_lib_included = true;
		}
	}
	
	function showCustomShareCard()
	{
		controller.showFullScreen(false);
		controller.showPlayerCard(_this.getDeckId(), _this.getCardId());
	}
	
	function closeCard()
	{
		controller.hidePlayerCard(_this.getDeckId(), _this.getCardId());
	}
	
	function onContentMetadataUpdate(evt)
	{
		model.setContentMetadata(evt.data);
	}

	this.init = function()
	{
		controller.addEventListener(ContentMetadataUpdateEvent.CONTENT_METADATA_UPDATE, onContentMetadataUpdate);
		
		loadGigyaOnFirstOpen();
		win.showCustomShareCard = showCustomShareCard;
		win.closeCard = closeCard;
	};
}

function PauseCard(pdk)
{
	var _this = this;
	var _pdk = pdk;
	var _$; // jQuery shorthand
	var browser;
	var otherCardTriggered;
	var _playerWidth;

	function onMediaPause(evt)
	{
		showPauseCard();
		_pdk.controller.removeEventListener('OnMediaPause', onMediaPause);
		_pdk.controller.addEventListener('OnMediaPlaying', addPauseEventsAfterPlaybackStarts);
	}

	function onMediaUnPause(evt)
	{
		_pdk.controller.hidePlayerCard(_this.getDeckId(), _this.getCardId());
	}

	function onPlayIconClick()
	{
		_pdk.controller.pause(false);
	}

	function othercardtrigger(evt)
	{
		otherCardTriggered = true;
	}

	function updateWhenReady()
	{
		if(_$)
		{
			var html = '<div id="pauseCardIcon" class="pauseCardIcon"></div>';
			_$('#pauseCardContainer').append(html.toString());
			_$("#pauseCardIcon").click(onPlayIconClick);
			resizeFunction();
		}
	}

	function onPlayerLoaded(evt)
	{
		_pdk.controller.removeEventListener('OnPlayerLoaded', onPlayerLoaded);

		_$ = _pdk.jQuery;
		if(browser !== "Microsoft Internet Explorer") {
			updateWhenReady();
		}
	}

	function resizeFunction(evt)
	{
		_playerWidth = _$(".tpContainer").width();
		if(_playerWidth<768)
		{
			var _playIconDimension = (_playerWidth*14.25)/100;
			var _margin = -(_playIconDimension/2);
			$(".pauseCardIcon").css({"width":_playIconDimension,"height":_playIconDimension,"margin-left":_margin,"margin-top":_margin});
		}
		else
			_$(".pauseCardIcon").css({"width":"110px","height":"110px","margin-left":"-62.5px","margin-top":"-62.5px"});
	}

	function addPauseEventsAfterPlaybackStarts(evt)
	{
		_pdk.controller.removeEventListener('OnMediaPlaying', addPauseEventsAfterPlaybackStarts);
		_pdk.controller.addEventListener('OnMediaPause', onMediaPause);
		_pdk.controller.addEventListener('OnMediaUnpause', onMediaUnPause);
		_pdk.controller.addEventListener(ShareCardEvent.BUTTON_CLICKED, othercardtrigger);
		_pdk.controller.addEventListener(ClosedCaptioningCustomizationsCardEvent.CARD_OPENED, othercardtrigger);
		_$(window).resize(resizeFunction);
	}
	
	this.getDeckId = function()
	{
		return "forms";
	};
	
	this.getCardId = function()
	{
		return "com.nbcuni.mpx.cards.pauseCard";
	};

	this.getCardContent = function()
	{
		var pauseCardContainer = '<div id="pauseCardContainer" class="pauseCardContainer"></div>';
		return pauseCardContainer;
	};

	this.show = function(s)
	{
		browser = navigator.appName;
		updateWhenReady();
	};

	this.hide = function()
	{

	};

	this.getPresenter = function()
	{
		return _this;
	};

	this.init = function()
	{
		_pdk.controller.addEventListener('OnPlayerLoaded', onPlayerLoaded);
		_pdk.controller.addEventListener('OnMediaPlaying', addPauseEventsAfterPlaybackStarts);
    };

	function showPauseCard()
	{
		if(otherCardTriggered !== true)
			_pdk.controller.showPlayerCard(_this.getDeckId(), _this.getCardId());
		else
			otherCardTriggered = false;
	}
}

function ContentMetadataUpdateEvent(type, contentMetadata)
{
	this.type = type;
	this.data = contentMetadata;
}
ContentMetadataUpdateEvent.CONTENT_METADATA_UPDATE = "contentMetadataUpdate";
var AvailabilityState = {
	AVAILABLE:"Available",
	NOT_YET_AVAILABLE:"NotYetAvailable",
	EXPIRED:"Expired",
	UNKNOWN:"Unknown"
};
function ContentMetadata()
{
	var _currentRelease = null;
	var _clipData = null;
	var _chapters = null;
	var _availabilityState = AvailabilityState.UNKNOWN;

	function asArray(obj, field)
	{
		var arr = [];
		var i = 0;
		
		while(obj[field + "[" + i + "]"])
		{
			arr[i] = obj[field + "[" + i + "]"];
			i++;
		}
		
		return arr;
	}

	function isArrayLike(obj, field)
	{
		return obj[field + "[0]"];
	}

	function findCustomValueByFieldName(fieldName)
	{
		if(_currentRelease && _currentRelease.customValues)
		{
			var i = _currentRelease.customValues.length;
			while(i--)
			{
				if(_currentRelease.customValues[i].fieldName === fieldName || _currentRelease.customValues[i].fieldName === "nbcu$" + fieldName)
				{
					return _currentRelease.customValues[i].value;
				}
			}
		}
		else if(_currentRelease && _currentRelease.contentCustomData)
		{
			if(_currentRelease.contentCustomData[fieldName])
			{
				return _currentRelease.contentCustomData[fieldName];
			}
			else if(isArrayLike(_currentRelease.contentCustomData, fieldName))
			{
				return asArray(_currentRelease.contentCustomData, fieldName);
			}
		}
		else if(_currentRelease)
		{
			if(_currentRelease["nbcu$" + fieldName])
			{
				return _currentRelease["nbcu$" + fieldName];
			}
		}
	
		return null;
	}
	
	this.hasCaptions = function()
	{
		return (_currentRelease.captions && _currentRelease.captions.length > 0);
	};
	
	this.getDescription = function()
	{
		return _currentRelease.description;
	};
	
	this.getReleasePid = function()
	{
		return _currentRelease.pid;
	};

	this.getMediaPid = function()
	{
		return _currentRelease.mediaPID;
	};
	
	this.getAvailabilityState = function()
	{
		return _availabilityState;
	};
	
	this.hasException = function()
	{
		return Boolean( findCustomValueByFieldName("isException") );
	};

	this.getAirDate = function()
	{
		var value;
		
		if(_currentRelease.airdate)
		{
			value = _currentRelease.airdate;
		}
		else if( Number(findCustomValueByFieldName("airDate")) > 0 )
		{
			value = Number(findCustomValueByFieldName("airDate"));
		}
		
		return (value) ? new Date(value) : value;
	};

	this.getClipId = function()
	{
		return findCustomValueByFieldName("clipId") || "";
	};

	this.getGuid = function()
	{
		return _currentRelease.guid;
	};

	this.getTitle = function()
	{
		return _currentRelease.title;
	};

	function toBoolean(val)
	{
		if(!isNaN(val))
		{
			return Boolean( Number(val) );
		}

		switch(String(val).toLowerCase())
		{
			case "true":
			case "yes":
				return true;
			default:
				return false;
		} 
	}

	this.isFullEpisode = function()
	{
		return toBoolean( findCustomValueByFieldName("fullEpisode") );
	};

	this.getDayPart = function()
	{
		return findCustomValueByFieldName("dayPart") || "";
	};

	this.getSeasonNumber = function()
	{
		return findCustomValueByFieldName("seasonNumber");
		
	};
	this.getAirOrder = function()
	{
		return findCustomValueByFieldName("airOrder");				
	};
	this.getShowName = function()
	{
		// we're stripping "Series/" from the beginning of the name, if it exists
		var startIndex = (_currentRelease.categories[0].name.toLowerCase().indexOf("series/") === 0) ? 7 : 0;
		return _currentRelease.categories[0].name.slice(startIndex);
	};

	this.getPermalink = function()
	{
		return findCustomValueByFieldName("permalink");
	};
	
	this.getPrimaryCategory = function()
	{
		return findCustomValueByFieldName("primaryCategory");
	};

	this.getSecondaryCategory = function()
	{
		return findCustomValueByFieldName("secondaryCategory");
	};
	
	this.getProgrammingType = function()
	{
		return findCustomValueByFieldName("programmingType");
	};
	
	/*
	 * 
	 * @returns {_currentRelease.length|Number} length of the clip in seconds.
	 */
	this.getDuration = function()
	{
		return Number(_currentRelease.length || _currentRelease.trueLength || _currentRelease.duration) / 1000;
	};
	
	this.getEntitlement = function()
	{
		return findCustomValueByFieldName("entitlement");
	};
	
	this.getExternalAdvertiserId = function()
	{
		return findCustomValueByFieldName("externalAdvertiserId");
	};

	this.getChapters = function()
	{
		return _chapters;
	};

	this.setReleaseData = function(release)
	{
		_currentRelease = release;
	};

	this.setClipData = function(clip)
	{

	};

	this.setChapters = function(chapters)
	{
		_chapters = chapters;
	};
	
	this.setAvailabilityState = function(value)
	{
		_availabilityState = value;
	};
}

/**
Value object containing fields to allow translation of release object info into 
ContentMetadata and a key to allow caching.

@param key a unique identifier to allow caching
@param release data from the Release object
@param chapters midroll/chapter data for a clip
* */
function ReleaseVO(key, release, chapters)
{
	this.key = key;
	this.release = release;
	this.chapters = chapters;
}

/**
Parses event data into value objects that our domin can understand
* */
function EventTranslator()
{
	function getFirstNonAdClip(clips)
	{
		for(var i=0; i< clips.length; i++)
		{
			if(!clips[i].isAd)
			{
				return clips[i];
			}
		}
	}
	
	function getReleaseBaseClipWithTitle(e)
	{
		var clip = getFirstNonAdClip(e.data.baseClips);
		
		if(!clip.title)
		{
			clip.title = getFirstNonAdClip(e.data.clips).title;
		}
		
		return clip;
	}
	
	function getReleaseBaseClipWithMissingFields(e)
	{
		var clip = getReleaseBaseClipWithTitle(e);
		
		if(!clip.pid)
		{
			clip.pid = e.data.release.pid;
		}
		if(!clip.mediaPID)
		{
			clip.mediaPID = e.data.mediaPID;
		}
		if(!clip.captions)
		{
			clip.captions = e.data.release.captions;
		}
		
		return clip;
	}

	/**
	Returns the Release object contained in an event

	@param e an event object
	@return the Release object delivered in the event payload
	*/
	function getReleaseData(e)
	{
		if(e.data.release && e.data.release.guid)
		{
			return e.data.release;
		}
		else if(e.data.baseClips)
		{
			return getReleaseBaseClipWithMissingFields(e);
		}
		else
		{
			return e.data;
		}
	}

	/**
	Returns the key used by the cache manager to retrieve content metadata

	@param e an event object
	@return the key used by the cache manager, in this case, the guid
	*/
	function getContentKey(e)
	{
		return getReleaseData(e).guid;
	}

	function getChapters(e)
	{
		if(e.data.chapters.chapters)
		{
			return e.data.chapters.chapters;
		}
		else
		{
			return e.data.chapters;
		}
	}
	
	function canKnowAvailabilityState(e)
	{
		return (e.data && e.data.baseClip && e.data.baseClip.contentCustomData);
	}
	
	function hasAvailabilityException(e)
	{
		var isException = e.data.baseClip.contentCustomData.isException;
		if (typeof isException === "object") isException = isException.value;
			
		return (isException === "true");
	}
	
	function isAvailable(e)
	{
		return (canKnowAvailabilityState(e) && !hasAvailabilityException(e));
	}
	
	function isNotYetAvailable(e)
	{
		return (canKnowAvailabilityState(e) && hasAvailabilityException(e) && (e.data.baseClip.contentCustomData.exception === AvailabilityState.NOT_YET_AVAILABLE));
	}

	function isExpired(e)
	{
		return (canKnowAvailabilityState(e) && hasAvailabilityException(e) && (e.data.baseClip.contentCustomData.exception === AvailabilityState.EXPIRED));
	}
	
	/**
	 * Creates a ReleaseVO from event data
	 * 
	 * @param {Object} e an event object
	 * */
	this.translate = function(e)
	{
		var key = getContentKey(e);
		var release = getReleaseData(e);
		var chapters = getChapters(e);

		return new ReleaseVO(key, release, chapters);
	};
	
	/**
	 * Parses an event object to determine the AvailabilityState of the media
	 * 
	 * @param {Object} e an event object
	 * @returns {String}
	 */
	this.translateAvailabilityState = function(e)
	{
		if(isAvailable(e))
		{
			return AvailabilityState.AVAILABLE;
		}
		else if(isNotYetAvailable(e))
		{
			return AvailabilityState.NOT_YET_AVAILABLE;
		}
		else if(isExpired(e))
		{
			return AvailabilityState.EXPIRED;
		}
		else
		{
			return AvailabilityState.UNKNOWN;
		}
	};
}

/**
Creates and stores ContentMetadata objects for lookup.
* */
function ContentMetadataLocator(pdkEventDispatcher, translator)
{
	var _this = this;
	var _pdkEventDispatcher = pdkEventDispatcher;
	var _translator = translator;
	var cache = {};
	var currentContentMetadata;

	this.init = function()
	{
		_pdkEventDispatcher.addEventListener("OnMediaLoadStart", updateAvailabilityState);
		_pdkEventDispatcher.addEventListener("OnLoadReleaseUrl", updateReleaseData);
		_pdkEventDispatcher.addEventListener("OnReleaseStart", updateReleaseData);
		_pdkEventDispatcher.addEventListener("OnSetReleaseUrl", onSetReleaseUrl);
	};

	this.getCurrentContentMetadata = function()
	{
		return currentContentMetadata;
	};

	function getContentMetadata(e)
	{
		var vo = _translator.translate(e);

		if(!cache[vo.key])
		{
			cache[vo.key] = newContentMetadata(vo.release, vo.chapters);
		}

		return cache[vo.key];
	}

	function newContentMetadata(release, chapters)
	{
		var contentMetadata = new ContentMetadata();
		contentMetadata.setReleaseData(release);
		contentMetadata.setChapters(chapters);

		return contentMetadata;
	}
	
	function updateAvailabilityState(e)
	{
		currentContentMetadata.setAvailabilityState( translator.translateAvailabilityState(e) );
		_pdkEventDispatcher.dispatchEvent(ContentMetadataUpdateEvent.CONTENT_METADATA_UPDATE, currentContentMetadata);
	}

	function updateReleaseData(e)
	{
		_pdkEventDispatcher.removeEventListener("OnLoadReleaseUrl", updateReleaseData);
		_pdkEventDispatcher.removeEventListener("OnReleaseStart", updateReleaseData);

		currentContentMetadata = getContentMetadata(e);
		
		_pdkEventDispatcher.dispatchEvent(ContentMetadataUpdateEvent.CONTENT_METADATA_UPDATE, currentContentMetadata);
	}

	function onSetReleaseUrl(e)
	{
		_pdkEventDispatcher.addEventListener("OnLoadReleaseUrl", updateReleaseData);
		_pdkEventDispatcher.addEventListener("OnReleaseStart", updateReleaseData);
	}
}
function SeekToCuepoint(_controller, _cuePoint)
{
	var controller = _controller;
	var cuePoint = _cuePoint;
	
	function seekToTime(evt)
	{
		var time = Number(cuePoint) * 1000;
		var isAd = evt.data.baseClip.isAd;
		if(isAd === false && time !== 0)
		{
			controller.seekToPosition(time);
			controller.removeEventListener('OnMediaStart', seekToTime);
		}
	}
	
	function getCuePoint(evt)
	{
		var nextItem = evt.data.nextItem;
		cuePoint = nextItem.getCueInPoint();
		
		addValidCuePointListener();
	}
	
	function isValidCuePoint()
	{
		return (!isNaN(cuePoint) && cuePoint !== 0);
	}
	
	function addValidCuePointListener()
	{
		if(isValidCuePoint())
		{
			controller.addEventListener("OnMediaStart", seekToTime);
		}
	}
	
	this.init = function()
	{
		controller.addEventListener(EndCardEvent.COUNTDOWN_COMPLETE, getCuePoint);
		addValidCuePointListener();
	};
}
var NullControl = (function (){
	"use strict";
    var instance; //prevent modification of "instance" variable

	function Singleton()
	{
        if (instance)
		{
			throw new Error("NullControl is a singleton. Use NullControl.getInstance() instead.");
        }
		
		// define properties we want
		this.init = function(){};
		
        instance = this;
    }

	Singleton.getInstance = function ()
	{
        return instance || new Singleton();
    };
	
    return Singleton;
}());
function ShareButton(_pdk)
{
	var pdk = _pdk;
	
	var isSLFullScreenSize;
	var defaultShareLogoImageW;
	var defaultShareLogoImageH;
	var shareLogoImage;

	function attachShareLogo(e){
		pdk.jQuery('.tpButton').each(function() {	
		isExistShareLogo = pdk.jQuery('#shareLogoImage').length;
				if(isExistShareLogo === 0){
					pdk.jQuery(this).find('tr').append(pdk.jQuery('<td align="center" style="vertical-align: middle;">').append(shareLogoImage));	
				}
		});	
	}

	function resizeShareLogoImage(evt){
		if(evt.type == 'OnShowFullScreen'){
			if(evt.data === true){
				if(!isSLFullScreenSize){
					isExistShareLogo = pdk.jQuery('#shareLogoImage').length;
					if(isExistShareLogo === 1){
						pdk.jQuery("#shareLogoImage").width(defaultShareLogoImageW * 2);
						pdk.jQuery("#shareLogoImage").height(defaultShareLogoImageH * 2);
						isSLFullScreenSize = true;
					}
				}
			}	
			else{
				if(isSLFullScreenSize){
					isExistShareLogo = pdk.jQuery('#shareLogoImage').length;
					//Fix for IOS native controls
					if(isExistShareLogo === 0){
						attachShareLogo(evt);
						isExistShareLogo = pdk.jQuery('#shareLogoImage').length;
					}
					if(isExistShareLogo === 1){
						pdk.jQuery("#shareLogoImage").width(defaultShareLogoImageW);
						pdk.jQuery("#shareLogoImage").height(defaultShareLogoImageH);
						isSLFullScreenSize = false;
					}
				}
			}
		}
	}

	this.init = function()
	{
		isSLFullScreenSize = false;
		defaultShareLogoImageW = 39;
		defaultShareLogoImageH = 24;
		shareLogoImage = document.createElement("img");
		
		shareLogoImage.setAttribute("id", "shareLogoImage");
		shareLogoImage.setAttribute("src", NBCMPX.Config.imagesDir + "/skins/widget_nbc_glass/sharebutton.png");
		shareLogoImage.setAttribute("callback", "showCustomShareCard()");

		pdk.controller.addEventListener("OnShowFullScreen", resizeShareLogoImage);
		pdk.controller.addEventListener("OnShowFullScreen", attachShareLogo);
		pdk.controller.addEventListener("OnShowControls", attachShareLogo);
	};
}
function ControlContext(_factory, _dictionary)
{
	var factory = _factory;
	var dictionary = _dictionary;
	
	this.lookup = function(id)
	{
		if(dictionary[id])
		{
			return dictionary[id];
		}
	
		var lookupObj;
		
		switch(id)
		{
			case ControlKeys.ShareButton.id:
				lookupObj = factory.newShareButton();
				break;
		}
	
		dictionary[id] = lookupObj;
		return dictionary[id];
	};
}
function ControlFactory(_pdk, _params)
{
	var pdk = _pdk;
    var params = _params;

	/**
	 * @returns {Object} the ShareButton implementation for this control rack
	 */
	this.newShareButton = function()
	{
		return NullControl.getInstance();
	};
}
var ControlKeys = {
	ShareButton:{id:"shareButton"}
};
function ControlRackMediator(_locator)
{
	var locator = _locator;
	
	this.init = function()
	{
		locator.getService(ControlKeys.ShareButton).init();
	};
}
function NewVideoSelectedEvent(type, guid, permalink, clipId, clicked)
{
	this.type = type;
	this.data = {
		guid:guid,
		permalink:permalink,
		clipId:clipId,
		clicked:clicked
	};
}
NewVideoSelectedEvent.VIDEO_SELECTED = "RelatedVideoSelected";
NewVideoSelectedEvent.VIDEO_QUEUED = "RelatedVideoQueued";

/**
 * CompanionAdEvent - This type of event fires when the companion ad callback is received from the Freewheel ad plugin.
 */
function CompanionAdEvent(type, message, holderId, timestamp)
{
	this.type = type;
	this.data = {
		message:message,
		holderId:holderId,
		timestamp:timestamp
	};
}
CompanionAdEvent.CALLBACK_RECEIVED = "companion_ad";
function LayoutManager(_config, _controller, _currentLayoutURL, _excludeSharing)
{
	var config = _config;
	var controller = _controller;
	var currentLayoutURL = _currentLayoutURL;
	var excludeSharing = _excludeSharing || "false";
	
	var width, currentContentMetadata;
	
	function canUpdateProperties()
	{
		return (getLayoutURL() !== currentLayoutURL);
	}
	
	function getLayoutDescription()
	{
		var largestFoundMatch;

		for(var prop in config)
		{
			var description = config[prop];
			if(width > description.minWidth)
			{
				if(!largestFoundMatch || description.minWidth > largestFoundMatch.minWidth)
				{
					largestFoundMatch = description;
				}
			}
		}
		
		return largestFoundMatch;
	}
	
	function hasCaptions()
	{
		return currentContentMetadata.hasCaptions();
	}
	
	function replaceLayoutDescriptionKeys(str)
	{
		str = str.replace(/\[PROTOCOL\]/g, location.protocol);
		str = str.replace(/\[EXCLUDE_SHARING\]/g, excludeSharing);
		str = str.replace(/\[FORMAT\]/g, "html");
		str = str.replace(/\[HAS_CAPTIONS\]/g, hasCaptions());

		return str;
	}
	
	function getLayoutURL()
	{
		return replaceLayoutDescriptionKeys(getLayoutDescription().layoutURL);
	}
	
	function updatePropertiesOnChange()
	{
		if(canUpdateProperties())
		{
			currentLayoutURL = getLayoutURL();
			
			controller.setPlayerLayoutUrl(currentLayoutURL);
		}
	}
	
	function onResize(evt)
	{
		width = evt.data.width;
		updatePropertiesOnChange();
	}
	
	function onContentMetadataUpdate(evt)
	{
		currentContentMetadata = evt.data;
		updatePropertiesOnChange();
	}
	
	this.init = function()
	{
		controller.addEventListener(ContentMetadataUpdateEvent.CONTENT_METADATA_UPDATE, onContentMetadataUpdate);
		controller.addEventListener("OnMediaAreaChanged", onResize);
		
		width = controller.getMediaArea().width;
	};
}
function Comscore(_config, _transport, _cmdLocator, _controller)
{
	var config = _config;
	var transport = _transport;
	var cmdLocator = _cmdLocator;
	var controller = _controller;
	
	var _clipData, _segmentNumber;
	
	function getContentMetadata()
	{
		return cmdLocator.getCurrentContentMetadata();
	}

	function getSegmentNumber()
	{
		return _segmentNumber;
	}

	function getShowName()
	{
		return getContentMetadata().getShowName();
	}

	function getTitle()
	{
		return getContentMetadata().getTitle();
	}

	function isFullEpisode()
	{
		return getContentMetadata().isFullEpisode();
	}

	function isAd()
	{
		return (_clipData && _clipData.baseClip && _clipData.baseClip.isAd);
	}

	function getConfig()
	{
		return config;
	}
	
	function getGenreCode()
	{
		return (isFullEpisode()) ? "030000" : "020000";
	}
	
	function replaceKeys(str)
	{
		str = str.replace(/\[SHOW_NAME\]/g, getShowName());
		str = str.replace(/\[SEGMENT_NUMBER\]/g, getSegmentNumber());
		str = str.replace(/\[COMMSCORE_GENRE_CONTENTTYPE_CODE\]/g, getGenreCode());
		
		return str;
	}
	
	function sendMetricsFor(key)
	{
		if(canSendMetrics())
		{
			var url = replaceKeys( getConfig()[key] );
		
			transport.send(url);
		}
	}

	function handleClipStartEvent(e)
	{
		_clipData = e.data;
		
		if(!isAd())
		{
			controller.removeEventListener('OnMediaStart', handleClipStartEvent);
	
			handleClipStart();
		}
	}

	function handleClipStart()
	{
		sendMetricsFor("VIDEO_START");
	}
	
	function onAdStart(e)
	{
		_clipData = e.data;

		if(isAd())
		{
			sendMetricsFor("AD_START");
			if(isFullEpisode())
			{
				controller.addEventListener('OnMediaStart', onSegmentStart);
			}
		}
	}
	
	function onSegmentStart(e)
	{
		_clipData = e.data;

		if(isFullEpisode() && !isAd())
		{
			_segmentNumber = _clipData.chapter.index+1;
			if(_segmentNumber > 1)
			{
				sendMetricsFor("SEGMENT_START");
			}
			
			controller.removeEventListener('OnMediaStart', onSegmentStart);
		}
	}

	function addListeners()
	{
		controller.addEventListener('OnMediaStart', onAdStart);
		controller.addEventListener('OnMediaStart', handleClipStartEvent);
	}
	
	function resetTrackers()
	{
		_segmentNumber = 0;
		
		controller.removeEventListener('OnMediaStart', handleClipStartEvent);
		controller.removeEventListener('OnMediaStart', onAdStart);
		controller.removeEventListener('OnMediaStart', onSegmentStart);
	}
	
	function canSendMetrics()
	{
		return Boolean(getContentMetadata() && !getContentMetadata().hasException());
	}

	function onReleaseStart(e)
	{
		resetTrackers();
		if(canSendMetrics())
		{
			addListeners();
		}
	}

	this.init = function()
	{
		controller.addEventListener("OnReleaseStart", onReleaseStart);
	};
}
function Nielsen(_config, _transport, _cmdLocator, _controller)
{
	var config = _config;
	var transport = _transport;
	var cmdLocator = _cmdLocator;
	var controller = _controller;
	
	var _clipData, _segmentNumber;
	
	function getContentMetadata()
	{
		return cmdLocator.getCurrentContentMetadata();
	}

	function getShowName()
	{
		return getContentMetadata().getShowName();
	}

	function getTitle()
	{
		return getContentMetadata().getTitle();
	}

	function isFullEpisode()
	{
		return getContentMetadata().isFullEpisode();
	}

	function isAd()
	{
		return (_clipData && _clipData.baseClip && _clipData.baseClip.isAd);
	}

	function getConfig()
	{
		return (isFullEpisode()) ? config.FullEpisodeConfig : config.ShortformConfig;
	}
	
	function getRandom()
	{
		return Number(Math.floor(Math.random() * 1000000000000) + 100000000000000).toString();
	}
	
	function getSegmentNumber()
	{
		return _segmentNumber;
	}
	
	function getContentCustomData(key)
	{
		return (_clipData.baseClip.contentCustomData) ? _clipData.baseClip.contentCustomData[key] : null;
	}
	
	function getTimePositionClassForAd()
	{
		return getContentCustomData("fw:time_position_class");
	}
	
	function getAdPlacement()
	{
		var val = getTimePositionClassForAd();
		switch(val)
		{
			case "PREROLL":
				return "pre";
			case "MIDROLL":
				return "mid";
			case "POSTROLL":
				return "post";
			default:
				return "unknown";
		}
	}
	
	function getAdCreativeURL()
	{
		return getContentCustomData("fw:adurl");
	}
	
	function replaceKeys(str)
	{
		str = str.replace(/\[SHOW_NAME\]/g, getShowName());
		str = str.replace(/\[TITLE\]/g, getTitle());
		str = str.replace(/\[SEGMENT_NUMBER\]/g, getSegmentNumber());
		str = str.replace(/\[RANDOM\]/g,  getRandom() );
		str = str.replace(/\[AD_PLACEMENT\]/g,  getAdPlacement() );
		str = str.replace(/\[AD_CREATIVE_URL\]/g,  getAdCreativeURL() );
		
		return str;
	}
	
	function sendMetricsFor(key)
	{
		if(canSendMetrics())
		{
			var template = getConfig()[key];
			if(template)
			{
				var url = replaceKeys( template );

				transport.send(url);
			}
		}
	}

	function handleClipStartEvent(e)
	{
		_clipData = e.data;
		
		if(!isAd())
		{
			controller.removeEventListener('OnMediaStart', handleClipStartEvent);
			
			handleClipStart();
		}
	}
	
	function onAdStart(e)
	{
		_clipData = e.data;

		if(isAd())
		{
			sendMetricsFor("AD_START");
			if(isFullEpisode())
			{
				controller.addEventListener('OnMediaStart', onSegmentStart);
			}
		}
	}
	
	function onSegmentStart(e)
	{
		_clipData = e.data;

		if(!isAd())
		{
			updateSegmentNumber();
			
			if(_segmentNumber > 1)
			{
				sendMetricsFor("VIEWABLE_AD_SEGMENT_START");
			}

			controller.removeEventListener('OnMediaStart', onSegmentStart);
		}
	}

	function handleClipStart()
	{
		updateSegmentNumber();
		
		sendMetricsFor("VIDEO_START");
		controller.addEventListener('OnMediaStart', onAdStart);
	}
	
	function updateSegmentNumber()
	{
		if(isFullEpisode() && !isAd())
		{
			_segmentNumber = _clipData.chapter.index+1;
		}
	}
	
	function addListeners()
	{
		controller.addEventListener('OnMediaStart', onAdStart);
		controller.addEventListener('OnMediaStart', handleClipStartEvent);
	}
	
	function resetTrackers()
	{
		_segmentNumber = 1;
		
		controller.removeEventListener('OnMediaStart', handleClipStartEvent);
		controller.removeEventListener('OnMediaStart', onAdStart);
		controller.removeEventListener('OnMediaStart', onSegmentStart);
	}
	
	function canSendMetrics()
	{
		return Boolean(getContentMetadata() && !getContentMetadata().hasException());
	}

	function onReleaseStart(e)
	{
		resetTrackers();
		if(canSendMetrics())
		{
			addListeners();
		}
	}

	this.init = function()
	{
		controller.addEventListener("OnReleaseStart", onReleaseStart);
	};
}
var FullEpisodeConfig = {
	defaults:{
		contextData:{
			"tve.videomvpd":"[MVPD]",
			"tve.videostatus": "[RESTRICTION_STATUS]",
			"tve.videoprogram":"[SHOW_NAME]",
			"tve.videotitle":"[TITLE]",
			"tve.videoguid":"[GUID]",			
			"tve.videodaypart":"[DAY_PART]",
			"tve.videocontent":"VOD Episode",
			"tve.minute":"[DATE_GET_HOURS]:[FORMATTED_GET_MINUTES]",
			"tve.hour":"[DATE_GET_HOURS]:00",
			"tve.day":"[DAY_OF_WEEK]",
			"tve.date":"[FORMATTED_GET_MONTH]/[FORMATTED_GET_DATE]/[DATE_GET_FULL_YEAR]",
			"tve.playertech":"[PLAYER_ID]",
			"tve.videoplayertype":"[PLAYER_TYPE]",
			"tve.videoid":"[EXTERNAL_ADVERTISER_ID]",
			"tve.platform":"[PLATFORM]",
			"tve.network":"NBC",
			"tve.videoscreen":"[VIDEO_SCREEN]",
			"tve.playerurl":"[PLAYER_URL]",
			"tve.length":"[DURATION]",
			"tve.playername":"[PLAYER_PID]",
			"tve.initiate":"[INITIATE]",
			"tve.subcat1":"[PRIMARY_CATEGORY]",
			"tve.subcat2":"[SECONDARY_CATEGORY]",
			"tve.airdate":"[AIRDATE]",
			"tve.season":"[SEASON]",
			"tve.epnumber":"[EPISODE_NUMBER]"
		},
		pe:"lnk_o"
	},
	AD_START:{
		contextData:{
			"tve.videovodadstart":"true",
			"tve.videoadid":"[VIDEO_AD_ID]"
		},
		pev2:"VOD Episode Ad Start"
	},
	AD_PAUSE:{
		contextData:{
			"tve.videovodadpause":"true",
			"tve.videoadid":"[VIDEO_AD_ID]"
		},
		pev2:"VOD Episode Ad Pause"
	},
	AD_COMPLETE:{
		contextData:{
			"tve.videovodadend":"true",
			"tve.videoadid":"[VIDEO_AD_ID]"
		},
		pev2:"VOD Episode Ad Complete"
	},
	VIDEO_START:{
		contextData:{
			"tve.videovodstart":"true",
			"tve.videovodsegstart":"true"
		},
		pev2:"VOD Episode Start"
	},
	SEGMENT_START:{
		contextData:{
			"tve.videovodsegstart":"true"
		},
		pev2:"VOD Episode Segment Start"
	},
	CLIP_COMPLETE:{
		contextData:{
			"tve.videovodsegend":"true"
		},
		pev2:"VOD Segment Complete"
	},
	EPISODE_COMPLETE:{
		contextData:{
			"tve.videovodend":"true"
		},
		pev2:"VOD Episode Complete"
	},
	MILESTONE_25_PERCENT:{
		contextData:{
			"tve.videovod25":"true"
		},
		pev2:"Episode 25% Complete"
	},
	MILESTONE_50_PERCENT:{
		contextData:{
			"tve.videovod50":"true"
		},
		pev2:"Episode 50% Complete"
	},
	MILESTONE_75_PERCENT:{
		contextData:{
			"tve.videovod75":"true"
		},
		pev2:"Episode 75% Complete"
	},
	SEEK:{
		contextData:{
			"tve.videovodscrub":"true"
		},
		pev2:"VOD Episode Rewind/Scrub"
	},
	PAUSE:{
		contextData:{
			"tve.videovodpause":"true"
		},
		pev2:"VOD Episode Pause"
	}
};

var ShortformConfig = {
	defaults:{
		contextData:{
			"tve.videomvpd":"[MVPD]",
			"tve.videostatus": "[RESTRICTION_STATUS]",
			"tve.videoprogram":"[SHOW_NAME]",
			"tve.videotitle":"[TITLE]",
			"tve.videoguid":"[GUID]",
			"tve.videodaypart":"[DAY_PART]",
			"tve.videocontent":"VOD Clip",
			"tve.minute":"[DATE_GET_HOURS]:[FORMATTED_GET_MINUTES]",
			"tve.hour":"[DATE_GET_HOURS]:00",
			"tve.day":"[DAY_OF_WEEK]",
			"tve.date":"[FORMATTED_GET_MONTH]/[FORMATTED_GET_DATE]/[DATE_GET_FULL_YEAR]",
			"tve.playertech":"[PLAYER_ID]",
			"tve.videoplayertype":"[PLAYER_TYPE]",
			"tve.videoid":"[EXTERNAL_ADVERTISER_ID]",
			"tve.platform":"[PLATFORM]",
			"tve.network":"NBC",
			"tve.videoscreen":"[VIDEO_SCREEN]",
			"tve.playerurl":"[PLAYER_URL]",
			"tve.length":"[DURATION]",
			"tve.playername":"[PLAYER_PID]",
			"tve.initiate":"[INITIATE]",
			"tve.subcat1":"[PRIMARY_CATEGORY]",
			"tve.subcat2":"[SECONDARY_CATEGORY]",
			"tve.cliptype":"[PROGRAMMING_TYPE]",
			"tve.airdate":"[AIRDATE]",
			"tve.season":"[SEASON]",
			"tve.epnumber":"[EPISODE_NUMBER]"
		},
		pe:"lnk_o"
	},
	AD_START:{
		contextData:{
			"tve.videovodclipadstart":"true",
			"tve.videoadid":"[VIDEO_AD_ID]"
		},
		pev2:"VOD Clip Ad Start"
	},
	AD_PAUSE:{
		contextData:{
			"tve.videovodclippause":"true",
			"tve.videoadid":"[VIDEO_AD_ID]"
		},
		pev2:"VOD Clip Ad Pause"
	},
	AD_COMPLETE:{
		contextData:{
			"tve.videovodclipadend":"true",
			"tve.videoadid":"[VIDEO_AD_ID]"
		},
		pev2:"VOD Clip Ad Complete"
	},
	VIDEO_START:{
		contextData:{
			"tve.videovodclipstart":"true"
		},
		pev2:"VOD Clip Start"
	},
	CLIP_COMPLETE:{
		contextData:{
			"tve.videovodclipend":"true"
		},
		pev2:"VOD Clip Complete"
	},
	MILESTONE_25_PERCENT:{
		contextData:{
			"tve.videovodclip25":"true"
		},
		pev2:"Clip 25% Complete"
	},
	MILESTONE_50_PERCENT:{
		contextData:{
			"tve.videovodclip50":"true"
		},
		pev2:"Clip 50% Complete"
	},
	MILESTONE_75_PERCENT:{
		contextData:{
			"tve.videovodclip75":"true"
		},
		pev2:"Clip 75% Complete"
	},
	SEEK:{
		contextData:{
			"tve.videovodclipscrub":"true"
		},
		pev2:"VOD Clip Rewind/Scrub"
	},
	PAUSE:{
		contextData:{
			"tve.videovodclippause":"true"
		},
		pev2:"VOD Clip Pause"
	}
};

function Omniture(pdkEventDispatcher, cmdLocator, playerType, state, playerReferer)
{
	var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	var _this = this;
	var _pdkEventDispatcher = pdkEventDispatcher;
	var _cmdLocator = cmdLocator;
	var _playerType = playerType;
	var _state = state;
	var _isFullScreen = false;
	var _playerReferer = playerReferer;
	
	var _clipData;
	var _segmentNumber;
	var _fullEpisodeComplete;
	var _quartileFlag25, _quartileFlag50, _quartileFlag75;

	function getContentMetadata()
	{
		return _cmdLocator.getCurrentContentMetadata();
	}

	function getVideoAdId()
	{
		return _clipData.id;
	}

	function getSegmentNumber()
	{
		return _segmentNumber;
	}

	function getDayPart()
	{
		return getContentMetadata().getDayPart();
	}

	function getShowName()
	{
		return getContentMetadata().getShowName();
	}

	function getGuid()
	{
		return getContentMetadata().getGuid();
	}

	function getTitle()
	{
		return getContentMetadata().getTitle();
	}

	function isFullEpisode()
	{
		return getContentMetadata().isFullEpisode();
	}

	function isAd()
	{
		return (_clipData && _clipData.baseClip && _clipData.baseClip.isAd);
	}

	function getChapters()
	{
		return getContentMetadata().getChapters();
	}

	function getPlayerId()
	{
		return (_state.getFormat() === Format.FLASH) ? "Flash Player" : "HTML 5 Player";
	}

	function getPlayerType()
	{
		return _playerType;
	}

	function isMobile()
	{
		// http://www.nbc.com/assets/core/plugins/video/jquery.html5player.js
		return navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod|android|webos|palm|googletv|silk|windows phone|trident.*wp[1-9]|blackberry|bb10/) ? true : false;
	}

	function getPlatform()
	{
		return isMobile() ? 'Mobile' : 'PC';
	}

	function getClipId()
	{
		return getContentMetadata().getClipId();
	}
	
	function getExternalAdvertiserId()
	{
		return getContentMetadata().getExternalAdvertiserId();
	}

	function getVideoScreen()
	{
		return _isFullScreen ? "Full" : "Normal";
	}

	function pad(n)
	{
		return (n < 10) ? "0" + n : n;
	}

	function getBitrate()
	{
		return  _clipData.baseClip.bitrate;
	}

	function getPlayerURL()
	{
		if(!_playerReferer){
			return document.referrer;
		}
		else{
			return _playerReferer;
		}
	}

	function getConfig()
	{
		return (isFullEpisode()) ? FullEpisodeConfig : ShortformConfig;
	}
	
	function getClipDuration()
	{
		return getContentMetadata().getDuration();
	}
	
	function getPlayerPid()
	{
		return location.pathname.split("/")[3];
	}
	
	function getInitiationValue()
	{
		return (_state.getPlaybackInitiation() === PlaybackInitiation.AUTO) ? "Auto" : "Manual";
	}
	
	function getPrimaryCategory()
	{
		return getContentMetadata().getPrimaryCategory();
	}
	
	function getSecondaryCategory()
	{
		return getContentMetadata().getSecondaryCategory();
	}
	
	function getProgrammingType()
	{
		return getContentMetadata().getProgrammingType();
	}
	
	function formatAirDate(str)
	{
		var d = new Date(str);

		return (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
	}
	
	function getAirDate()
	{
		return (getContentMetadata().getAirDate()) ? formatAirDate(getContentMetadata().getAirDate()) : "";
	}
	
	function getSeason()
	{
		return getContentMetadata().getSeasonNumber();
	}
	
	function getEpisodeNumber()
	{
		return getContentMetadata().getAirOrder();
	}
	
	function getRestrictionStatus()
	{
		return (getContentMetadata().getEntitlement() !== "auth") ? "Unrestricted" : "Restricted";
	}
	
	function getMVPD()
	{
		return state.getMVPD() || "";
	}

	function replaceKeys(str)
	{
		var d = new Date();

		str = str.replace(/\[MVPD\]/g, getMVPD());
		str = str.replace(/\[VIDEO_AD_ID\]/g, getVideoAdId());
		str = str.replace(/\[SHOW_NAME\]/g, getShowName());
		str = str.replace(/\[TITLE\]/g, getTitle());
		str = str.replace(/\[GUID\]/g, getGuid());		
		str = str.replace(/\[DAY_PART\]/g, getDayPart());
		str = str.replace(/\[DATE_GET_HOURS\]/g, d.getHours());
		str = str.replace(/\[FORMATTED_GET_MINUTES\]/g, pad(d.getMinutes()));
		str = str.replace(/\[DAY_OF_WEEK\]/g, weekdays[d.getDay()]);
		str = str.replace(/\[FORMATTED_GET_MONTH\]/g, pad(d.getMonth()+1));
		str = str.replace(/\[FORMATTED_GET_DATE\]/g, pad(d.getDate()));
		str = str.replace(/\[DATE_GET_FULL_YEAR\]/g, d.getFullYear());
		str = str.replace(/\[PLAYER_ID\]/g, getPlayerId());
		str = str.replace(/\[PLAYER_TYPE\]/g, getPlayerType());
		str = str.replace(/\[EXTERNAL_ADVERTISER_ID\]/g, getExternalAdvertiserId());
		str = str.replace(/\[CLIP_ID\]/g, getClipId());
		str = str.replace(/\[PLATFORM\]/g, getPlatform());
		str = str.replace(/\[VIDEO_SCREEN\]/g, getVideoScreen());
		str = str.replace(/\[PLAYER_URL\]/g, getPlayerURL());
		str = str.replace(/\[DURATION\]/g, getClipDuration());
		str = str.replace(/\[PLAYER_PID\]/g, getPlayerPid());
		str = str.replace(/\[INITIATE\]/g, getInitiationValue());
		str = str.replace(/\[PRIMARY_CATEGORY\]/g, getPrimaryCategory());
		str = str.replace(/\[SECONDARY_CATEGORY\]/g, getSecondaryCategory());
		str = str.replace(/\[PROGRAMMING_TYPE\]/g, getProgrammingType());
		str = str.replace(/\[AIRDATE\]/g, getAirDate());
		str = str.replace(/\[SEASON\]/g, getSeason());
		str = str.replace(/\[EPISODE_NUMBER\]/g, getEpisodeNumber());
		str = str.replace(/\[RESTRICTION_STATUS\]/g, getRestrictionStatus());
		
		return str;
	}

	function populateContextDataFor(obj)
	{
		for(var prop in obj.contextData)
		{
			s.contextData[prop] = replaceKeys( obj.contextData[prop] );
		}
	}

	function populateEventMetrics(obj)
	{
		populateContextDataFor(obj);
		s.pev2 = encodeURIComponent(obj.pev2);
	}

	function populateDefaultMetrics(obj)
	{
		populateContextDataFor(obj);
		s.pe = obj.pe;
	}


	function sendMetricsFor(key)
	{
		if(canSendMetrics())
		{
			s.contextData = {};

			populateEventMetrics( getConfig()[key] );
			populateDefaultMetrics( getConfig().defaults );

			s.track();
		}
	}

	function onShowFullScreen(e)
	{
		_isFullScreen = e.data;
	}

	function onAdStartEvent(e)
	{
		setEventData(e.data);

		if(isAd())
		{
			_pdkEventDispatcher.addEventListener('OnMediaEnd', onAdEndEvent);
	
			adStart();
		}
	}

	function onAdEndEvent(e)
	{
		setEventData(e.data);

		if(isAd())
		{
			adEnd();
		}
	}

	function adStart()
	{
		sendMetricsFor("AD_START");
	}

	function adEnd()
	{
		_pdkEventDispatcher.removeEventListener('OnMediaEnd', onAdEndEvent);
		sendMetricsFor("AD_COMPLETE");
	}

	function handleClipStartEvent(e)
	{
		setEventData(e.data);
		
		if(!isAd())
		{
			_pdkEventDispatcher.removeEventListener('OnMediaStart', handleClipStartEvent);
	
			handleClipStart();
		}
	}

	function handleClipStart()
	{
		if(isFullEpisode()) _segmentNumber = _clipData.chapter.index+1;

		sendMetricsFor("VIDEO_START");
	}

	function onMediaSegmentStart(e)
	{
		setEventData(e.data);

		if(!isAd())
		{
			if(isFullEpisode())
			{
				_segmentNumber = _clipData.chapter.index+1;
				if(_segmentNumber > 1)
				{
					sendMetricsFor("SEGMENT_START");
				}
			}
			
			_pdkEventDispatcher.addEventListener('OnMediaEnd', onMediaEnd);
		}
	}

	function onMediaEnd(e)
	{
		setEventData(e.data);

		if(!isAd() && !isFullEpisode())
		{
			sendMetricsFor("CLIP_COMPLETE");
		}
	}

	function onMediaSeek(e)
	{
		setEventData(e.data);

		sendMetricsFor("SEEK");
	}

	function onMediaPause(e)
	{
		setEventData(e.data);

		if(!isAd())
		{
			sendMetricsFor("PAUSE");
		}
		else
		{
			sendMetricsFor("AD_PAUSE");
		}
	}

	function handleEpisodeCompleteEvent(e)
	{
		if(isFullEpisode() && !isAd())
		{
			if(e.data.percentCompleteAggregate >= 98)
			{
				if(!_fullEpisodeComplete)
				{
					_fullEpisodeComplete = true;

					sendMetricsFor("EPISODE_COMPLETE");
					_pdkEventDispatcher.removeEventListener('OnMediaEnd', onMediaEnd); // prevent the final segment complete tracking call
				}
			}
			else
			{
				_fullEpisodeComplete = false;
			}
		}
	}

	function onMediaComplete(e)
	{
		if(isAd())
		{
			_pdkEventDispatcher.removeEventListener('OnMediaEnd', onAdEndEvent);
		}
		else
		{
			_pdkEventDispatcher.removeEventListener('OnMediaEnd', onMediaEnd);
		}
	}
	
	function isInQuartileRange(actual, desired)
	{
		// allows the actual percentage to be anywhere within 2 points greater than the desired value
		return (actual >= desired && actual <= desired+2);
	}
	
	/**
	 * 
	 * @see https://nbcudps.basecamphq.com/projects/11245769-td064-nbc-com-anvato-mpx-migration/posts/80803493/comments#274540067
	 */
	function handleQuartileEvents(e)
	{
		if(!isAd())
		{
			if(isInQuartileRange(e.data.percentCompleteAggregate, 25))
			{
				if(!_quartileFlag25)
				{
					_quartileFlag25 = true;
					sendMetricsFor("MILESTONE_25_PERCENT");
				}
			}
			else
			{
				_quartileFlag25 = false;
			}

			if(isInQuartileRange(e.data.percentCompleteAggregate, 50))
			{
				if(!_quartileFlag50)
				{
					_quartileFlag50 = true;
					sendMetricsFor("MILESTONE_50_PERCENT");
				}
			}
			else
			{
				_quartileFlag50 = false;
			}
			
			if(isInQuartileRange(e.data.percentCompleteAggregate, 75))
			{
				if(!_quartileFlag75)
				{
					_quartileFlag75 = true;
					sendMetricsFor("MILESTONE_75_PERCENT");
				}
			}
			else
			{
				_quartileFlag75 = false;
			}
		}
	}

	function handle50Percent(e)
	{
		if(!isAd() && Math.floor(e.data.percentCompleteAggregate) === 50)
		{
			sendMetricsFor("MILESTONE_50_PERCENT");
		}
	}
	
	function handle75Percent(e)
	{
		if(!isAd() && Math.floor(e.data.percentCompleteAggregate) === 75)
		{
			sendMetricsFor("MILESTONE_75_PERCENT");
		}
	}

	function resetTrackers()
	{
		_segmentNumber = 0;
		_fullEpisodeComplete = false;
		_quartileFlag25 = false;
		_quartileFlag50 = false;
		_quartileFlag75 = false;
	}

	function addListeners()
	{
		_pdkEventDispatcher.addEventListener('OnMediaStart', onAdStartEvent);
		_pdkEventDispatcher.addEventListener('OnMediaStart', handleClipStartEvent);
		_pdkEventDispatcher.addEventListener('OnMediaStart', onMediaSegmentStart);
		_pdkEventDispatcher.addEventListener('OnMediaSeek', onMediaSeek);
		_pdkEventDispatcher.addEventListener('OnMediaPause', onMediaPause);
		_pdkEventDispatcher.addEventListener('OnMediaPlaying', handleEpisodeCompleteEvent);
		_pdkEventDispatcher.addEventListener('OnMediaPlaying', handleQuartileEvents);
		_pdkEventDispatcher.addEventListener('OnMediaComplete', onMediaComplete);
	}

	function canSendMetrics()
	{
		return Boolean(getContentMetadata() && !getContentMetadata().hasException());
	}

	function onReleaseStart(e)
	{
		resetTrackers();
		if(canSendMetrics())
		{
			addListeners();
		}
	}

	function setEventData(data)
	{
		_clipData = data.clip || data;
	}

	this.init = function()
	{
		_pdkEventDispatcher.addEventListener("OnReleaseStart", onReleaseStart);
		_pdkEventDispatcher.addEventListener("OnShowFullScreen", onShowFullScreen);
	};
}
function URLTransport()
{
	/**
	 * 
	 * @param {String} message a URL containing metrics parameters in the query string
	 */
	this.send = function(message)
	{
		var img = new Image();
		img.src = message;
	};
}
/* UPDATED Aug 14, 2013  B.Casenave*/
                                                           
                                                                  
var s=s_gi(NBCMPX.Omniture.s_gi_un,NBCMPX.Omniture.s_gi_pg);                                                                            
/************************** CONFIG SECTION **************************/                           
/* You may add or alter any code config here. */  

/* E-commerce Config */                                                                          

/* Link Tracking Config */                                                                       

/* Page Name Plugin Config */

//variable set to limit the number of times doPlugins modifies prop5

/* Plugin Config */
/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace=NBCMPX.Omniture.visitorNamespace;
s.trackingServer=NBCMPX.Omniture.trackingServer;
s.trackingServerSecure=NBCMPX.Omniture.trackingServerSecure;
s.dc=NBCMPX.Omniture.dc;
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.25.4';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin"
+"gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase()"
+";else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.t"
+"cn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[u"
+"n]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;retur"
+"n ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if("
+"!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nr"
+"s){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'"
+"].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return '"
+"'}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=="
+"'s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x"
+";i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h."
+"substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length"
+">1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.lengt"
+"h;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.subst"
+"ring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nf"
+"l[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!n"
+"fl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk."
+"substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+"
+"ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',"
+"fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring("
+"0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+"
+"s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!="
+"'linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substrin"
+"g(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&"
+"&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1"
+"';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k"
+"=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascri"
+"ptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='h"
+"omepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k"
+"=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')"
+"q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eV"
+"ar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'"
+"';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLow"
+"erCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h"
+"=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||"
+"s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e"
+");return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s"
+".bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTr"
+"acking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t("
+");s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\""
+"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||(s.wd.name&&t==s.wd.name))){e.stopPropagation();e.stopI"
+"mmediatePropagation();e.preventDefault();n=s.d.createEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.alt"
+"Key,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h."
+"indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.ho"
+"st:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.to"
+"UpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=thi"
+"s,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''"
+"+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t"
+"=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u"
+"+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)re"
+"turn s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return "
+"0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',"
+"q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&"
+"s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i"
+"<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=f"
+"unction(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0"
+"&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,"
+"v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%"
+"10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.subst"
+"ring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if"
+"(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){v"
+"ar s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r"
+",l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s"
+";m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l="
+"m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c="
+"s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if("
+"x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,"
+"i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m"
+"[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl"
+",i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':'"
+");if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');"
+"i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'"
+"')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s"
+".d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,"
+"100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m"
+"=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x"
+" in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=n"
+"ew Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if("
+"!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if"
+"(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Mat"
+"h.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return f"
+"id};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_"
+"c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!vi"
+"sitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*100000000"
+"00000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds("
+")+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i"
+",x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&"
+"s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1"
+".7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaE"
+"nabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){"
+"bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\""
+":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)whi"
+"le(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.bro"
+"wserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);i"
+"f(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s."
+"eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if"
+"(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeav"
+"eQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else t"
+"rk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-o"
+"bject-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;"
+"if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt("
+"oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','"
+"var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+("
+"x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('"
+"t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType"
+"=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType="
+"t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){va"
+"r s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s"
+"[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf("
+"'s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i"
+"<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElements"
+"ByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf"
+"('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6"
+"));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.e"
+"m=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visito"
+"rID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCod"
+"e,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookie"
+"DomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,e"
+"vents,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va"
+"_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t"
+"+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dy"
+"namicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilter"
+"s,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();i"
+"f(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()


function XDRequest(jQuery, success, fail)
{
	var _this = this;
	var _jQuery = jQuery;
	var onSuccess = success;
	var onFailure = fail;

	this.fetch = function(url)
	{
		_jQuery.support.cors = true;
		
		if (window.XDomainRequest)
		{
			var xdr = new XDomainRequest();
			xdr.onload = function()
			{
				onSuccess( _jQuery.parseJSON(xdr.responseText) );
			};
			xdr.onprogress = function(){ };
            xdr.ontimeout = function(){ };
            xdr.onerror = function () { };
			xdr.timeout = 20000;
			xdr.open("GET", url);
			xdr.send();
		}
		else
		{
			_jQuery.getJSON(url).done( onSuccess ).fail( onFailure );
		}
	};
}

/**
 * Factory to generate cross-domain requests for loading data
 * 
 * @param _pdk the global PDK (for accessing jQuery
 */
function RequestFactory(_pdk)
{
	var pdk = _pdk;
	
	this.newRequest = function(onFeedSuccess, onFeedFail)
	{
		return new XDRequest(pdk.jQuery, onFeedSuccess, onFeedFail);
	};
}
function AppStateMonitor(_stateManager, _pdkEventDispatcher, _cmdEventDispatcher, _cmdLocator)
{
	var stateManager = _stateManager;
	var pdkEventDispatcher = _pdkEventDispatcher;
	var cmdEventDispatcher = _cmdEventDispatcher;
	var cmdLocator = _cmdLocator;

	this.start = function()
	{
		stateManager.setAppState(getInitialAppState());

		pdkEventDispatcher.addEventListener("OnShowControls", onShowControls);
		cmdEventDispatcher.addEventListener(ContentMetadataUpdateEvent.CONTENT_METADATA_UPDATE, onContentMetadataUpdate);
	};
	
	function onShowControls(evt)
	{
		pdkEventDispatcher.removeEventListener("OnShowControls", onShowControls);
		
		if(!isErroredState())
		{
			stateManager.setAppState( AppState.READY );
		}
	}

	function onContentMetadataUpdate(evt)
	{
		if(isErroredState())
		{
			stateManager.setAppState( getErroredState() );
		}
	}

	function getContentMetadata()
	{
		return cmdLocator.getCurrentContentMetadata();
	}

	function isFullEpisodeContent()
	{
		return (getContentMetadata()) ? getContentMetadata().isFullEpisode() : false;
	}

	function isDesktopDevice()
	{
		return (stateManager.state.getDeviceType() === DeviceType.DESKTOP);
	}

	function isFlashFormat()
	{
		return (stateManager.state.getFormat() === Format.FLASH);
	}

	function contentRequiresFlashError()
	{
		return (isDesktopDevice() && !isFlashFormat() && isFullEpisodeContent());
	}

	function isUnsupportedDeviceError()
	{
		return (isFullEpisodeContent() && !isDesktopDevice());
	}

	function isContentExpiredError()
	{
		return (getContentMetadata()) ? getContentMetadata().getAvailabilityState() === AvailabilityState.EXPIRED : false;
	}

	function isErroredState()
	{
		return (contentRequiresFlashError() || isUnsupportedDeviceError() || isContentExpiredError());
	}

	function getErroredState()
	{
		if(contentRequiresFlashError())
		{
			return AppState.CONTENT_REQUIRES_FLASH;
		}
		else if(isUnsupportedDeviceError())
		{
			return AppState.UNSUPPORTED_DEVICE;
		}
		else if(isContentExpiredError())
		{
			return AppState.CONTENT_EXPIRED;
		}
		else
		{
			return null;
		}
	}

	function getInitialAppState()
	{
		return (isErroredState()) ? getErroredState() : AppState.STARTUP;
	}
}
function PlaybackInitiationMonitor(_stateManager, _pdkEventDispatcher, _params)
{
	var stateManager = _stateManager;
	var pdkEventDispatcher = _pdkEventDispatcher;
	var params = _params;
	
	this.start = function()
	{
		stateManager.setPlaybackInitiation(getInitialValue());
		
		pdkEventDispatcher.addEventListener(NewVideoSelectedEvent.VIDEO_SELECTED, onNewVideoSelected);
	};
	
	function onNewVideoSelected(evt)
	{
		stateManager.setPlaybackInitiation( (evt.data.clicked) ? PlaybackInitiation.MANUAL : PlaybackInitiation.AUTO );
	}
	
	function hasAutoPlayParameters()
	{
		// the fwautoplay override is a convenience to allow nbc.com to provide their own mezzanine graphic
		// for the user to click, which will then load our player with ?autoPlay=true. In that case,
		// fwautoplay=false and autoPlay=true, and the fwautoplay value will take precedence.
		return (params.fwautoplay) ? ("false" !== String(params.fwautoplay).toLowerCase()) : ("true" === String(params.autoPlay).toLowerCase());
	}
	
	function canAutoPlay()
	{
		return stateManager.state.canAutoPlay();
	}
	
	function getInitialValue()
	{
		return (canAutoPlay() && hasAutoPlayParameters()) ? PlaybackInitiation.AUTO : PlaybackInitiation.MANUAL;
	}
}
var AppState = {
    STARTUP:{id:"startup"},
    READY:{id:"ready"},
	CONTENT_EXPIRED:{id:"contentExpired"},
	CONTENT_NOT_YET_AVAILABLE:{id:"contentNotYetAvailable"},
    CONTENT_REQUIRES_FLASH:{id:"contentRequiresFlash"},
    UNSUPPORTED_DEVICE:{id:"unsupportedDevice"},
    AD:{id:"ad"},
    VIDEO:{id:"video"}
};
var DeviceType = {
    HANDHELD:{id:"handheld"},
    TABLET:{id:"tablet"},
    DESKTOP:{id:"desktop"}
};
var Format = {
    FLASH:{id:"flash"},
    HTML:{id:"html"}
};
var PlaybackInitiation = {
    AUTO:{id:"auto"},
    MANUAL:{id:"manual"}
};
function StateManager(_dispatcher, _format)
{
	var dispatcher = _dispatcher;
	var format = _format;
	
	// settable properties
	var properties = {
		appState:null,
		playbackInitiation:null,
		mvpd:null,
		isAuthenticated:false
	};
	
	function getPlaybackInitiation()
	{
		return properties.playbackInitiation;
	}
	this.setPlaybackInitiation = function(value)
	{
		updatePropertyIfChanged("playbackInitiation", value);
	};

	function getAppState()
	{
		return properties.appState;
	}
	this.setAppState = function(value)
	{
		updatePropertyIfChanged("appState", value);
	};
	
	function getMVPD()
	{
		return properties.mvpd;
	}
	this.setMVPD = function(value)
	{
		updatePropertyIfChanged("mvpd", value);
	};
	
	function getIsAuthenticated()
	{
		return properties.isAuthenticated;
	}
	this.setIsAuthenticated = function(value)
	{
		updatePropertyIfChanged("isAuthenticated", value);
	};
	
    function isMobile()
    {
		// http://detectmobilebrowsers.com/about
		var a = navigator.userAgent || navigator.vendor || window.opera;
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|android|ipad|playbook|silk|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)));
    }

    function hasMinimumTabletDimensions()
    {
		var mediaQ = (typeof window.matchMedia !== "undefined") ? window.matchMedia("(min-device-width: 500px)") : {matches:false};
		return (mediaQ.matches) ? true : false;
    }

    function isTablet()
    {
		return (isMobile() && hasMinimumTabletDimensions());
    }

    function isHandHeld()
    {
		return (isMobile() && !hasMinimumTabletDimensions());
    }

    function getFormat()
    {
		return format;
    }

    function getDeviceType()
    {
		return isHandHeld() ? DeviceType.HANDHELD : isTablet() ? DeviceType.TABLET : DeviceType.DESKTOP;
    }

	function canAutoPlay()
	{
		return ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? false : true );
	}
	
	this.state = {
		canAutoPlay:canAutoPlay,
		getDeviceType:getDeviceType,
		getFormat:getFormat,
		getAppState:getAppState,
		getPlaybackInitiation:getPlaybackInitiation,
		getMVPD:getMVPD,
		getIsAuthenticated:getIsAuthenticated
	};
	
	function updatePropertyIfChanged(readOnlyPropertyName, newValue)
	{
		var oldValue = properties[readOnlyPropertyName];
			
		if(oldValue !== newValue)
		{
			var eventType = readOnlyPropertyName + "Change"; // e.g., "appState" -> "appStateChange"
			
			properties[readOnlyPropertyName] = newValue;
			
			dispatcher.dispatchEvent(eventType, {name:readOnlyPropertyName, oldValue:oldValue, newValue:newValue});
		}
	}
}
function detectflash(){
    if (navigator.plugins !== null && navigator.plugins.length > 0){
        return navigator.plugins["Shockwave Flash"] && true;
    }
    if(~navigator.userAgent.toLowerCase().indexOf("webtv")){
        return true;
    }
    if(~navigator.appVersion.indexOf("MSIE") && !~navigator.userAgent.indexOf("Opera")){
        try{
            return new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && true;
        } catch(e){}
    }
    return false;
}
function get_browser(){
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!== null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[0];	
    }
function get_browser_version(){
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!== null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[1];
    }
	
function isWin7(){
	var nv = navigator.userAgent.toLowerCase();
	if(nv.indexOf("windows nt 6.1")!=-1){
		return true;
	}
	else{
		return false;
	}
	
}

function _isMobile()
{
		// http://detectmobilebrowsers.com/about
		var a = navigator.userAgent || navigator.vendor || window.opera;
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|android|ipad|playbook|silk|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)));
}
	
function isHTML5Video(){
	var cb = get_browser();
	cb = cb.toLowerCase();
	
	var cbv = get_browser_version();
	cbv = parseFloat(cbv);
	
	if(cb === 'trident'){
		cb = "msie";
		cbv = 11;
	}
	
	var isW7 = isWin7();	
	if(cb != "msie" && cb != "firefox"){		
		return true;
	}
	else if(isW7 === true && cb == "firefox" && cbv >= 21){
		return true;
	}
	else{
		return false;
	}
	
}
	
function html5browser(){
	if(!isHTML5Video()){		
		return false;
	}
	return true;
}

if(!_isMobile() && !html5browser() && !detectflash()){		
	window.location.href= NBCMPX.Config.baseDir + "/GetFlash_New.html";
}
function FreewheelConfigFactory(_pdk, _context)
{
	var pdk = _pdk;
	var context = _context;

	function isMobile()
	{
		// http://www.nbc.com/assets/core/plugins/video/jquery.html5player.js
		return navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod|android|webos|palm|googletv|silk|windows phone|trident.*wp[1-9]|blackberry|bb10/) ? true : false;
	}

	function hasMinimumTabletDimensions()
	{
		var mediaQ = (typeof window.matchMedia !== "undefined") ? window.matchMedia("(min-device-width: 500px)") : {matches:false};
		return (mediaQ.matches) ? true : false;
	}
	function isMobileBrowser(){ //work around for Nexus Android Browser
		return navigator.userAgent.toLowerCase().match(/mobile safari/) ? true : false;				
	}
	function isTablet()
	{
		return (isMobile() && hasMinimumTabletDimensions());
	}

	function isHandHeld()
	{
		return (isMobile() && (!hasMinimumTabletDimensions() || isMobileBrowser()));
	}

	function isFlash()
	{
		return (pdk.jQuery("object").length > 0);
	}

	function getFormat()
	{
		return isFlash() ? "flash" : "html";
	}

	function getDeviceType()
	{
		return isHandHeld() ? "handheld" : isTablet() ? "tablet" : "desktop";
	}

	this.getInstance = function()
	{
		var format = getFormat();
		var deviceType = getDeviceType();

		return context[format][deviceType];
	};
}
function Freewheel(_factory, _window)
{
	var factory = _factory;
	var win = _window;
	
	function fw_config()
	{
		return factory.getInstance();
	}
	
	this.init = function()
	{
		win.fw_config = fw_config;
	};
}

/**
 * Onsite implementation for Freewheel 
 * 
 * @param {FreewheelConfigFactory} _factory provides the default fw_config
 *	object for this configuration
 * @param {Window} _window the global window object
 * @param {Object} _params the parsed query string parameters
 * @param {Object} _pdk The MPX Player Development Kit instance for this application
 * @returns {Freewheel}
 */
function FreewheelOnsite(_factory, _window, _params, _pdk)
{
	var factory = _factory;
	var win = _window;
	var params = _params;
	var pdk = _pdk;
	var appended = false;
	var fw_settings;
	
	var DEFAULT_SITE_SECTION = 'test_section';
	var current_site_section = DEFAULT_SITE_SECTION; //should have the default one here
	
	function appendFWDivs()
	{
		pdk.jQuery('body').append('<div id="ad_728x90" class="wsz" data-pid="548"></div>');
		pdk.jQuery('#ad_728x90').html('<span id="728x90_1" class="_fwph"><form id="_fw_form_728x90_1" style="display:none"><input type="hidden" name="_fw_input_728x90_1" id="_fw_input_728x90_1" value="w=728&h=90&envp=g_js"></form><span id="_fw_container_728x90_1" class="_fwac"></span></span>');
		pdk.jQuery('body').append('<div id="ad_300x250" class="wsz" data-pid="548"></div>');
		pdk.jQuery('#ad_300x250').html('<span id="300x250_1" class="_fwph"><form id="_fw_form_300x250_1" style="display:none"><input type="hidden" name="_fw_input_300x250_1" id="_fw_input_300x250_1" value="flag=+fcai&w=300&h=250&envp=g_js"></form><span id="_fw_container_300x250_1" class="_fwac"></span></span>');  
		pdk.jQuery('body').append('<div id="ad_300x60" class="wsz" data-pid="548"></div>');
		pdk.jQuery('#ad_300x60').html('<span id="300x60_1" class="_fwph"><form id="_fw_form_300x60_1" style="display:none"><input type="hidden" name="_fw_input_300x60_1" id="_fw_input_300x60_1" value="w=300&h=60&envp=g_js"></form><span id="_fw_container_300x60_1" class="_fwac"></span></span>');  
		appended = true;
	}

	function replaceKeys(str)
	{
		str = str.replace(/\[DFP_300\]/g, encodeURIComponent( getParameterByName("dfp_300") ) );
		str = str.replace(/\[DFP_728\]/g, encodeURIComponent( getParameterByName("dfp_728") ) );

		return str;
	}
	
	function getKeyValues()
	{
		var arr = [];
		
		if(getParameterByName("dfp_300")) arr.push("dfp_300=[DFP_300]");
		if(getParameterByName("dfp_728")) arr.push("dfp_728=[DFP_728]");
		if(getParameterByName("krux_user") && getParameterByName("krux_segment")){
			arr.push("kuid="+getParameterByName("krux_user"));	
			var krux_data_arr = [];
			krux_data_arr = getParameterByName("krux_segment").split(',');	
			for(i=0;i<krux_data_arr.length;i++){
				if(i < 35){
					arr.push("ksg="+krux_data_arr[i]);
				}
			}	
		}
		if(getParameterByName("station")){
			arr.push("station="+getParameterByName("station"));
		}	
		return replaceKeys( arr.join("&") );
	}
	
	function canAppendDivs()
	{
		return (!appended && (!params || params.suppressCompanions !== "true"));
	}
	
	function appendDivsIfNecessary()
	{
		if(canAppendDivs())
		{
			appendFWDivs();
		}
	}
	
	function getAutoPlayValue()
	{
		// the fwautoplay override is a convenience to allow nbc.com to provide their own mezzanine graphic
		// for the user to click, which will then load our player with ?autoPlay=true. In that case,
		// fwautoplay=false and autoPlay=true, and the fwautoplay value will take precedence.
		return (getParameterByName("fwautoplay")) ? (String( getParameterByName("fwautoplay") ).toLowerCase() === "true") : (String( getParameterByName("autoPlay") ).toLowerCase() === "true");
	}
	
	function newSettings()
	{
		var _fw_settings =  factory.getInstance();	
		_fw_settings.siteSectionId = current_site_section + _fw_settings.siteSectionId;
		_fw_settings.autoplay = getAutoPlayValue();
		
		if(getKeyValues() !== "")
		{
			_fw_settings.keyValues = getKeyValues();
		}
		
		return _fw_settings;
	}
	
	function getSettings()
	{
		fw_settings = fw_settings || newSettings();
		return fw_settings;
	}
	
	function fw_config()
	{
		appendDivsIfNecessary();

		return getSettings();
	}
	
	function getParameterByName(name)
	{
		return params[name];
	}
	
	this.init = function()
	{
		if (getParameterByName("fwsitesection"))
		{
			current_site_section = getParameterByName("fwsitesection");
		}

		win.fw_config = fw_config;
	};
}
function onEndCardCountdownComplete(e)
{
	var evt = new NewVideoSelectedEvent(NewVideoSelectedEvent.VIDEO_SELECTED, e.data.nextItem.getGuid(), e.data.nextItem.getPermalink(), e.data.nextItem.getClipId(), false);
	$pdk.controller.dispatchEvent(evt.type, evt.data);
}

function onAdvanceInWindowEvent(evt)
{
	var nextItem = evt.data.nextItem;
	var url = nextItem.getReleaseURL();
	$pdk.controller.setReleaseURL(url, true);
}

function getParams()
{
	var obj = {};
	var match, pl = /\+/g, // Regex for replacing addition symbol with a space
	search = /([^&=]+)=?([^&]*)/g, decode = function(s) {
		return decodeURIComponent(s.replace(pl, " "));
	}, query = window.location.search.substring(1);

	while ( (match = search.exec(query)) !== null )
	obj[decode(match[1])] = decode(match[2]);

	return obj;
}

(function()
{
	function getFormat()
	{
		return swfobject.hasFlashPlayerVersion("1") ? Format.FLASH : Format.HTML;
	}
	
	function getLayoutDescription()
	{
		var largestFoundMatch;

		for(var prop in NBCMPX.Layout.widget)
		{
			var description = NBCMPX.Layout.widget[prop];
			if(window.innerWidth > description.minWidth)
			{
				if(!largestFoundMatch || description.minWidth > largestFoundMatch.minWidth)
				{
					largestFoundMatch = description;
				}
			}
		}
		
		return largestFoundMatch;
	}
	
	function replaceLayoutDescriptionKeys(str)
	{
		str = str.replace(/\[PROTOCOL\]/g, location.protocol);
		str = str.replace(/\[EXCLUDE_SHARING\]/g, getParams().excludeSharing || "false");
		str = str.replace(/\[FORMAT\]/g, getFormat().id);
		str = str.replace(/\[HAS_CAPTIONS\]/g, "false");

		return str;
	}
	
	function getLayoutURL()
	{
		return replaceLayoutDescriptionKeys(getLayoutDescription().layoutURL);
	}
	
	function getSkinURL()
	{
		return replaceLayoutDescriptionKeys(getLayoutDescription().skinURL);
	}
	
	function initPDK()
	{
		document.getElementById('player').setAttribute("tp:layoutUrl", getLayoutURL());
		document.getElementById('player').setAttribute("tp:skinUrl", getSkinURL());
	
		$pdk.initialize();
	}

	function initApp()
	{
		var factory = new Factory(NBCMPX);
		var serviceLocator = new ServiceLocator( new InitialContext(factory, {}) );
		var app = new WidgetApplication($pdk, serviceLocator);

		factory.initialize($pdk, serviceLocator, new StateManager($pdk.controller, getFormat()), getParams());
		app.init();
	}

	function addListeners()
	{
		$pdk.controller.addEventListener(EndCardEvent.COUNTDOWN_COMPLETE, onEndCardCountdownComplete);
		$pdk.controller.addEventListener(EndCardEvent.COUNTDOWN_COMPLETE, onAdvanceInWindowEvent);
	}

	function initializeWhenReady()
	{
		if(document.getElementById('player'))
		{
			clearInterval(playerLoadedInterval);
			
			addListeners();
			initPDK();
			initApp();
		}
	}

	var playerLoadedInterval = setInterval(initializeWhenReady,50);
})();