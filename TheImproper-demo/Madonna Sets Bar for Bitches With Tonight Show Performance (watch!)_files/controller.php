(function () {
	console.time('scriptLoad->adImpression');
	var q1UnitVals = [
			{'_id':'54f36fffad1d14813295a961', 'type':'impact', 'exchange':'appnexus', 'exchange_id':'3996256', 'placement_name':'Theimproper.com - vSlider (14519)', 'device':'desktop', 'zone':1, 'slot':1, 'attr':{"time_hour_limit":12,"time_impression_limit":1,"cap_type":"none","size":"300x250","imp_set_size":3,"imp_strike_impression":1,"position":"right","assoc_id":78177,"close_wait_time":10} },
			{'_id':'54f3793cad1d14813296749a', 'type':'vslider', 'exchange':'liverail', 'exchange_id':'78177', 'placement_name':'Theimproper.com - vSlider (14519)', 'device':'desktop', 'zone':1, 'slot':1, 'attr':{"time_hour_limit":8,"time_impression_limit":1,"imp_set_size":20,"imp_strike_impression":0,"cap_type":"none","volume":"0.20","position":"bottom-right","assoc_id":3996256,"close_wait_time":10} }
		],
		q1params = {"q1id":"54f36c5cad1d148132958034","pubid":"54f36b9bad1d148132955dce","IOS":"no","show_gtau":true,"show_companion":1,"script_type":"min"},
		q1position = '';
function checkImage(a){var c=new Image;c.onload=function(){var b={background:"url("+a+") no-repeat 50% 50%",width:c.width,height:c.height};jQuery("#getThisImageCont").css(b)};c.onerror=function(){jQuery("#Q1I-getContainer").remove()};c.src=a}
var cdnUrl=location.protocol+"//012027765dea73f3391c-46328848ae125a3547681ec5d06246c9.r37.cf1.rackcdn.com/",getUrlBase=location.protocol+"//0de0927dd5327969dbb4-d901769008ba91cd370e59497529fef9.r1.cf1.rackcdn.com/",q1Forward=!1,softCapSecondsUntilRetry=20,q1DateObject=new Date,q1Day=q1DateObject.getDate(),q1Month=q1DateObject.getMonth(),q1Year=q1DateObject.getFullYear(),q1Expiry=new Date(q1DateObject.getTime()+31536E6),q1Date=q1Day+" "+q1Month+" "+q1Year,q1CapDateStr="Q1--ServedDate",epochTime=q1DateObject.getTime(),
impressionCount=0,q1units={},q1cap={},ref="",cachebuster=Math.round(1E5*Math.random()),targetDocument,secure=!1,$$$$=window.$;try{if(window.top===window.self)targetDocument=document,ref=window.location.href;else if(window.top===parent||""===ref)targetDocument=window.top.document,ref=document.referrer;/http:\/\/localhost/.test(ref)&&(ref="http://gotchamovies.com");ref=encodeURIComponent(ref);secure="https:"==window.top.location.protocol}catch(ignore){}window.console||(window.console={});
window.console.log||(window.console.log=function(){});q1cap.units=[];"undefined"===typeof window.q1cappedUnits&&(window.q1cappedUnits={});try{window.top.q1p=q1params,window.top.q1UnitList=q1UnitVals}catch(ignore$$1){}
q1StorageObj=function(){var a=!1;try{localStorage.setItem("testLocalStorage","testLocalStorage"),localStorage.removeItem("testLocalStorage"),a=!0}catch(c){}this.set=function(b,c){a?localStorage.setItem(b,c):document.cookie=b+"="+encodeURI(c)+"; path=/; expires="+q1Expiry.toGMTString()};this.get=function(b){a?b=localStorage.getItem(b):(b=RegExp(b+"=([^;]+)").exec(document.cookie),b=null!==b?decodeURI(b[1]):null);return b};this.deleteVal=function(b){if(a)b=localStorage.removeItem(b);else{var c=new Date;
c.setDate(c.getDate()-1);document.cookie=encodeURI(b)+"=; path=/; expires="+c.toGMTString();b=void 0}return b}};q1storage=new q1StorageObj;
q1cap.checkIfCapped=function(a,c){var b=!0,d=q1cap.units[c].type,e=q1cap.units[c].caprate||24,f=q1cap.units[c].strike||2,m=q1cap.units[c].setsize||7,k=q1cap.units[c].captype,h="Q1-"+a+"-"+d+"-Time",g="Q1-"+a+"-"+d+"-impressionCount",l=q1storage.get("Q1-"+a+"-"+d+"-"+q1cap.units[c].placement_id+"-attempt");console.log("Q1-"+a+"-"+d+"-"+q1cap.units[c].placement_id+"-attempt");"none"===k?b=!1:epochTime<l?"dev"===q1params.script_type&&console.log("Will attempt to display "+d+" again in "+Math.round((l-
epochTime)/1E3)+" seconds."):(q1storage.deleteVal("Q1-"+a+"-"+d+"-attempt"),q1storage.get(q1CapDateStr)!==q1Date?(b=!1,impressionCount=1,q1storage.deleteVal("Q1-"+a+"-"+d+"-impressionCount"),q1storage.deleteVal(h)):"impressions"===k?(impressionCount=q1storage.get(g)?parseInt(q1storage.get(g),10)+1:1,impressionCount>=m+1&&(impressionCount=1),impressionCount===f&&(b=!1),q1storage.set(g,impressionCount)):!q1storage.get(h)||epochTime-q1storage.get(h)>36E5*e?(b=!1,q1storage.deleteVal("Q1-"+a+"-"+d+"-impressionCount"),
q1storage.deleteVal(h)):(q1storage.get(g)?parseInt(q1storage.get(g),10):0)<q1cap.units[c].frequency&&(b=!1));if("undefined"!=typeof q1params[q1cap.units[c].type+"_start_time"]&&"undefined"!=typeof q1params[q1cap.units[c].type+"_end_time"])if(d=q1DateObject.getHours(),e=q1params[q1cap.units[c].type+"_start_time"]%24,f=q1params[q1cap.units[c].type+"_end_time"]%24,e<f){if(d<e||d>=f)b=!0}else d<e&&d>=f&&(b=!0);return b};
q1cap.storeAdImpression=function(a,c,b,d){var e="Q1-"+c+"-"+b+"-impressionCount",f="Q1-"+c+"-"+b+"-Time";(d="undefined"===typeof d?!1:d)?impressionCount=q1storage.get(e)?parseInt(q1storage.get(e),10)+1:1:impressionCount||(impressionCount=1);q1storage.set(q1CapDateStr,q1Date);q1storage.set(e,impressionCount);d&&null!==q1storage.get(f)||q1storage.set(f,epochTime);q1storage.deleteVal("Q1-"+c+"-"+b+"-"+q1cap.units[a].placement_id+"-attempt")};
q1cap.setSoftCap=function(a,c,b){q1storage.set("Q1-"+a+"-"+c+"-"+q1cap.units[b].placement_id+"-attempt",epochTime+1E3*softCapSecondsUntilRetry)};
q1units.startInjection=function(a){for(0<a&&"dev"===q1params.script_type&&console.log("No ad found for "+q1cap.units[a-1].type+" (might have been soft-capped).");a<q1cap.units.length;a++)if(window.q1cappedUnits[q1cap.units[a].type]=!1,q1cap.checkIfCapped(device,a))window.q1cappedUnits[q1cap.units[a].type]=!0;else{"none"!==q1cap.units[a].captype&&a+1<q1cap.units.length&&q1cap.setSoftCap(device,q1cap.units[a].type,a);q1units.injectUnit(a);break}};var dualFirevSliderImpact=!0;
q1units.injectUnit=function(a){"function"===typeof q1cap.units[a].func?(q1cap.units[a].func(window.top.q1$,a),!0===dualFirevSliderImpact&&q1cap.units.length>a+1&&"vslider"==q1cap.units[a].type&&"impact"==q1cap.units[a+1].type&&q1units.startInjection(a+1)):q1units.startInjection(a+1)};var jqVersion="1.10.2",jqMinVers="1.4",jqSrc="//ajax.googleapis.com/ajax/libs/jquery/"+jqVersion+"/jquery.min.js";function noConflict(){"undefined"!==typeof $$$$&&jQuery!==$$$$&&jQuery.noConflict()}
function checkjQVersion(){var a=jQuery.fn.jquery.split("."),c=jqMinVers.split(".");return parseInt(a[0])>parseInt(c[0])||parseInt(a[0])==parseInt(c[0])&&parseInt(a[1])>=parseInt(c[1])?!0:!1}
function loadjQuery(a,c){if(window.jQuery&&window.jQuery.fn.jquery&&checkjQVersion())window.top.q1$=jQuery,c(window.top.q1$);else{var b=document.createElement("script");b.type="text/javascript";b.readyState?b.onreadystatechange=function(){if("loaded"==b.readyState||"complete"==b.readyState)b.onreadystatechange=null,window.top.q1$=$,c($),noConflict()}:b.onload=function(){window.top.q1$=$;c($);noConflict()};b.src=a;document.getElementsByTagName("head")[0].appendChild(b)}};
var crtg_nid="2344",crtg_cookiename="cto_q1media",crtg_varname="crtg_content";function crtg_getCookie(e){var a,c,d,b=document.cookie.split(";");for(a=0;a<b.length;a++)if(c=b[a].substr(0,b[a].indexOf("=")),d=b[a].substr(b[a].indexOf("=")+1),c=c.replace(/^\s+|\s+$/g,""),c==e)return unescape(d);return""}
var crtg_content=crtg_getCookie(crtg_cookiename),crtg_rnd=Math.floor(99999999999*Math.random()),crtg_url=location.protocol+"//rtax.criteo.com/delivery/rta/rta.js?netId="+escape(crtg_nid),crtg_url=crtg_url+("&cookieName="+escape(crtg_cookiename)),crtg_url=crtg_url+("&rnd="+crtg_rnd),crtg_url=crtg_url+("&varName="+escape(crtg_varname)),crtg_script=document.createElement("script");crtg_script.type="text/javascript";crtg_script.src=crtg_url;crtg_script.async=!0;
0<document.getElementsByTagName("head").length?document.getElementsByTagName("head")[0].appendChild(crtg_script):0<document.getElementsByTagName("body").length&&document.getElementsByTagName("body")[0].appendChild(crtg_script);
serveImpact=function(c,e){var b,g,f,h,a,d,k,l;switch(q1cap.units[e].position){case "left":case "bottom-left":b="width:20px;";g={left:0};f={left:"-300px"};a={width:"300px",height:"600px",left:"-305px"};"bottom-left"==q1cap.units[e].position?a.bottom="0px":(a.top="50%",a.marginTop="-300px");l="GetThisAdUnitRight.png";d="top: 110px; right: -19px; width: 19px; height: 150px;";h={right:0};k="right: 19px";break;case "bottom":b="left:0;";g={bottom:0};f={bottom:"-90px"};a={width:"728px",height:"90px",left:"50%",
marginLeft:"-364px",bottom:"-105px"};l="GetThisAdUnitTop.png";d="top: -20px; right: 4px; width: 140px; height: 20px;";h={top:0};k="top: 20px";break;default:b="width:20px;",g={right:0},f={right:"-300px"},a={width:"300px",height:"600px",right:"-305px"},"bottom-right"==q1cap.units[e].position?a.bottom="0px":(a.top="50%",a.marginTop="-300px"),l="GetThisAdUnitLeft.png",d="top: 110px; left: -19px; width: 19px; height: 150px;",h={left:0},k="left: 19px;"}a.position="fixed";a.zIndex=9E9;0==c("#q1-unit",targetDocument.body).length&&
(receiveMessage=function(a){var b=c("#q1-unit",targetDocument.body);if("die"===a.data||"emptyad"===a.data)b.remove(),q1units.startInjection(e+1);else if(regex=/q1width=(\d*),q1height=(\d*)/i,a=regex.exec(a.data),null!=a){width=a[1];height=a[2];0==height&&(height=160==width||120==width?600:250);b.width(width).height(height);c("#q1-unit>iframe",targetDocument.body).width(width).height(height);25>b.offset().top-c(window).scrollTop()&&b.css({"margin-top":"25px",top:"0px",bottom:""});try{var d;d=targetDocument.createElement("script");
d.setAttribute("id","fraudlogix");d.src="http://pixel.yabidos.com/fltiu.js?qid=433373f5733373f5637343&cid=476&kqt=45&p="+q1cap.units[e].placement_id+"&s="+encodeURIComponent(window.top.location.hostname)+"&x=AN1&xc=";targetDocument.getElementById("q1-unit").appendChild(d)}catch(f){}b.delay(500).queue(function(){q1cap.storeAdImpression(e,"desktop","impact","time"===q1cap.units[e].captype);c(this).dequeue()}).animate(g,1400);"left"===q1cap.units[e].position&&c("#Q1I-impactClose",targetDocument.body).css("left",
width-40);"bottom"!==q1cap.units[e].position&&c("#Q1I-getContainer",targetDocument.body).css("top",height-150);c("#getThisImageCont",targetDocument.body).delay(3500).animate(h,1E3)}},window.top.addEventListener?window.top.addEventListener("message",receiveMessage,!1):window.top.attachEvent("onmessage",receiveMessage),c('<div id="q1-unit"></div>').css(a).appendTo(targetDocument.body),a=c("#q1-unit",targetDocument.body),a.append('<div id="Q1I-impactClose" style="position:absolute; cursor:pointer; '+
b+' font-family:arial; font-size:10px; top:-15px; border:1px solid #000; height:13px; color:#aaa; padding:0 6px; background:#333; border-top-left-radius:6px; border-top-right-radius:6px; box-sizing:content-box; -moz-box-sizing:content-box">hide</div>'),b=c('<iframe frameborder="0" class="q1-iframe" style="width:100%; height:100%; background:transparent; overflow:hidden" scrolling="no"></iframe>').appendTo(a),b=b[0],b=b.contentWindow&&b.contentWindow.document||b.contentDocument&&b.contentDocument.document||
b.contentDocument,b.open(),a=['<body style="margin:0px;"><div id="iframeAd" style="display:inline-block;"><span id="dvWrapper"><script src="'+q1cap.units[e].src+"&referrer="+ref+"&cb="+cachebuster+'">\x3c/script></span></div>','<script> var $ = window.top.q1$, msg; $(function() { window.setTimeout(function () { if ($(document.body).find("#iframeAd").width() == 0) { msg = "emptyad"; } else { msg = "q1width=" + $(document.body).find("#iframeAd").width() + ",q1height=" + $(document.body).find("#iframeAd").height(); } window.top.postMessage(msg,"*");  },100); }); \x3c/script>'].join(" "),
b.write(a),b.close(),0!=q1params.show_gtau&&(d=c('<div id="Q1I-getContainer" style="position:absolute; overflow:hidden; '+d+'"></div>'),d.append('<a href="http://www.q1media.com/getthisadunit/?t=impact" target="_newtab"><div id="getThisImageCont" style="position:absolute; cursor:pointer; '+k+'  "></div></a>'),checkImage(getUrlBase+l),c("#q1-unit",targetDocument.body).append(d)),c("#Q1I-impactClose",targetDocument).click(function(){c("#q1-unit",targetDocument.body).animate(f,300,function(){c("#q1-unit",
targetDocument.body).remove()})}))};
var LiveRailObject={},loaderElem,initial,getThisAdUnitPos={},getAdUnitImageStr,loadPosition,displayed,bgs,preloadCornerAd,makeCustomAdjustments,generateCornerAd,closeCountdown,unloadCornerAd,ihr=!1;serve_vslider=function(a,b){create_vSlider(a,b,430,251)};
prepareLiveRailEnvironment=function(a,b,c,e,g){c={LR_COMPANIONS:q1params.show_companion&&430==e?e+(ihr?":65":":225")+":corner-ad-excite-new":"",LR_AUTOPLAY:1,LR_CONTENT:6,LR_LAYOUT_LINEAR_PAUSEONCLICKTHRU:0,LR_LAYOUT_SKIN_ID:2,LR_PUBLISHER_ID:q1cap.units[c].placement_id,LR_TAGS:"",LR_TITLE:"adexcitecontent",LR_URL:ref,LR_VERTICALS:"vslider",LR_VIDEO_ID:"adexcitecontent"};switch(b){case "html5":a("#vidWrapper",targetDocument.body).remove();a('<div id="vidWrapper"></div>').append(a('<video id="vidPlayer"></video>').css({width:e,
height:g,position:"relative",background:"#000"})).appendTo(a("#video-creative",targetDocument.body));c.slot=targetDocument.getElementById("vidWrapper");c.videoSlot=targetDocument.getElementById("vidPlayer");c.LR_ENVIRONMENT="html5";break;case "flash":a("#vidWrapper",targetDocument.body).remove(),a('<div id="vidWrapper"></div>').css({width:e,height:g,"z-index":9E8}).appendTo(a("#video-creative",targetDocument.body)),c.slot=targetDocument.getElementById("vidWrapper"),c.LR_ENVIRONMENT="flash"}return c};
function getParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=RegExp("[\\?&]"+a+"=([^&#]*)").exec(location.search);return null==a?"":decodeURIComponent(a[1].replace(/\+/g," "))}
create_vSlider=function(a,b,c,e){bgs=q1cap.units[b].bgs;makeCustomAdjustments(b,c,e);preloadCornerAd(a,targetDocument,c,e);ihr="1"==getParameterByName("ihr");loadLiveRail(function(){var g={},d={},f=["flash","html5"],h=0;LiveRailObject.subscribe(function(){console.timeEnd("intAd-"+f[h]);LiveRailObject.setAdVolume(q1cap.units[b].volume);0==q1cap.units[b].volume&&a(targetDocument.getElementById("container-ad-excite")).mouseenter(function(){LiveRailObject.setAdVolume(0.25)});console.time("adLoaded->startAd");
console.time("adLoaded->adImpression");LiveRailObject.startAd()},"AdLoaded");LiveRailObject.subscribe(function(b){console.timeEnd("adLoaded->startAd");a("#q1-unit",targetDocument.body).animate({right:"-300px"},300,function(){a("#q1-unit",targetDocument.body).remove()})},"AdStarted");LiveRailObject.subscribe(function(g){console.timeEnd("adLoaded->adImpression");console.timeEnd("scriptLoad->adImpression");a("#vidPlayer object",targetDocument.body).attr("id","videoContent");a("#videoContent",targetDocument.body).attr("style",
function(a,b){return(b||"")+"height: 100% !important;"});setTimeout(function(){var g=a(targetDocument.getElementById("container-ad-excite"));a(targetDocument.getElementById("container-ad-excite")).css(initial(g.width(),g.height()));generateCornerAd(a,targetDocument,b,c,e);setTimeout(function(){LiveRailObject.setAdVolume(q1cap.units[b].volume)},150)},1);closeCountdown(a);q1cap.storeAdImpression(b,"desktop","vslider","time"===q1cap.units[b].captype)},"AdImpression");LiveRailObject.subscribe(function(){unloadCornerAd(a);
window.q1cappedUnits.vslider=!0},"AdStopped");LiveRailObject.subscribe(function(k,l){1001!==l&&1300!==l||!f[++h]?(unloadCornerAd(a),q1units.startInjection(b+1),window.q1cappedUnits.vslider=!0):(d=prepareLiveRailEnvironment(a,f[h],b,c,e),console.time("intAd-"+f[h]),LiveRailObject.initAd(c,e,"","",g,d))},"AdError");d=prepareLiveRailEnvironment(a,f[h],b,c,e);console.time("intAd-"+f[h]);LiveRailObject.initAd(c,e,"","",g,d)})};
preloadCornerAd=function(a,b,c,e){a('<div id="container-ad-excite">').css({position:"fixed","z-index":9E9,font:'12px "Trebuchet MS", Arial, Helvetica, sans-serif'}).css(loadPosition).append(a('<span id="close-corner-ad"></span>')).append(a('<div id="video-creative"/>')).appendTo(b.body);a(b.getElementById("video-creative")).before(a('<div id="corner-ad-excite-new"></div>'));a(b.getElementById("video-creative")).before(a('<div id="Q1I-getContainer"></div>'));a(b.getElementById("corner-ad-excite-new")).css("display",
"none")};
makeCustomAdjustments=function(a,b,c){loadPosition={bottom:"-"+(c-1)+"px",right:"-"+(b-1)+"px"};switch(q1cap.units[a].position){case "bottom":initial=function(a,b){return{bottom:-(a+100)+"px",right:"50%",marginRight:"-"+b/2+"px"}};displayed={bottom:0};getAdUnitImageStr="GetThisAdUnitLeft.png";getThisAdUnitPos={left:"-19px",bottom:"5px"};break;case "bottom-left":initial=function(a,b){return{bottom:-(a+100),left:0}};displayed={bottom:0};getAdUnitImageStr="GetThisAdUnitRight.png";getThisAdUnitPos={right:"-17px",
bottom:"5px"};break;case "top-left":case "left":initial=function(a,b){return{top:-(a+100),left:0}};displayed={top:0};getAdUnitImageStr="GetThisAdUnitRight.png";getThisAdUnitPos={right:"-17px",top:"100px"};break;case "top":initial=function(a,b){return{top:-(a+100),right:"50%",marginRight:"-"+b/2+"px"}};displayed={top:0};getAdUnitImageStr="GetThisAdUnitLeft.png";getThisAdUnitPos={left:"-19px",top:"100px"};break;case "top-right":case "right":initial=function(a,b){return{top:-(a+100),right:0}};displayed=
{top:0};getAdUnitImageStr="GetThisAdUnitLeft.png";getThisAdUnitPos={left:"-19px",top:"100px"};break;default:initial=function(a,b){return{bottom:-(a+100),right:0}},displayed={bottom:0},getAdUnitImageStr="GetThisAdUnitLeft.png",getThisAdUnitPos={left:"-19px",bottom:"5px"}}};
generateCornerAd=function(a,b,c,e,g){var d=q1params.show_companion&&a(b.getElementById("corner-ad-excite-new")).html().length,f;f={"z-index":9E9,"text-align":"center",position:"relative"};if(10175==q1cap.units[c].placement_id){var h;h=b.createElement("script");h.src=location.protocol+"//cdn.doubleverify.com/dvtp_src.js?ctx=2254017&cmp=2254019&sid="+q1cap.units[c].placement_id+"&plc=vslider&num=&adid=&advid=2254018&adsrv=0&region=30&btreg=videoContent&btadsrv=videoContent&crt=&crtname=&chnl=&unit=&pid=&uid=&dvtagver=6.1.src";
b.getElementById("video-creative").appendChild(h)}else 23890==q1cap.units[c].placement_id&&(h=b.createElement("script"),h.src=location.protocol+"//b.voicefive.com/c2/13014539/rs.js#c1=3&amp;c3=test&amp;c4=vastvid&amp;c5=vastvid&amp;c6=&amp;c10=1&amp;c11=&amp;c13=&amp;c16=gen&amp;ax_i=&amp;ax_g=&amp;",b.getElementById("video-creative").appendChild(h));try{var k;k=b.createElement("script");k.src=location.protocol+"//pixel.yabidos.com/fltiu.js?qid=433373f5733373f5637343&cid=476&kqt=45&p="+q1cap.units[c].placement_id+
"&s="+encodeURIComponent(window.top.location.hostname)+"&x=LR1&xc=";b.getElementById("video-creative").appendChild(k)}catch(l){}a(b.getElementById("close-corner-ad")).html('You may close this ad in <span id="ctr">'+q1cap.units[c].close_wait_time+'</span> second<span id="pl">s</span>.</span>').css({position:"absolute",background:'black url("//c400517.r17.cf1.rackcdn.com/adexcite_x.png") 0 50px no-repeat',bottom:bgs[0].length&&!d||bgs[1].length&&d?"10px":"1px",right:bgs[0].length&&!d||bgs[1].length&&
d?"10px":"1px",padding:"0 3px",color:"#777","z-index":9E10});bgs[0].length&&!d||bgs[1].length&&d?("bottom-left"===q1cap.units[c].position||"top-left"===q1cap.units[c].position?getThisAdUnitPos.right="-16px":getThisAdUnitPos.left="-16px",a(b.getElementById("video-creative")).css({background:"#000",width:e+"px"}),f.top="60px"):a("#video-creative, #corner-ad-excite-new",b.body).css({border:"1px solid #000","box-shadow":"0px 1px 0px 0px #222",background:"black"});a(b.getElementById("corner-ad-excite-new")).css(f);
0!=q1params.show_gtau&&(a(b.getElementById("Q1I-getContainer")).html('<a href="http://www.q1media.com/getthisadunit/?t=vslider" target="_newtab"><div id="getThisImageCont"></div></a>').css(getThisAdUnitPos).css({"z-index":9E9,position:"absolute",cursor:"pointer"}),checkImage(getUrlBase+getAdUnitImageStr));a(b.getElementById("vidPlayer")).css({"z-index":9E8});d?(receiveCompanionMessage=function(c){var d=/q1LoadScript=(.*)/i,f=d.exec(c.data);if(null!=f)d=document.createElement("script"),c=f[1],d.type=
"text/javascript",d.src=c,b.getElementsByTagName("head")[0].appendChild(d),LiveRailObject.stopAd();else if(d=/q1vSliderTovPlayer=(.*)/i,f=d.exec(c.data)){c=a('<div id="vPlayerLauncher" style="width:'+e+"px; height:"+g+'px; position:relative;z-index:2100000001; cursor: pointer"></div>');var h=0.5,k=1;c.appendTo(a("#vidWrapper",b.body));a('<div id="q1pause" style="width:22px; height:22px; position:absolute; left:7px;bottom:7px;"></div>').click(function(a){k?LiveRailObject.pauseAd():LiveRailObject.resumeAd();
k=!k;event.stopPropagation()}).appendTo(c);a('<div id="mute" style="width:22px; height:22px; position:absolute; left:37px;bottom:7px;"></div>').click(function(a){a=LiveRailObject.getAdVolume();0<a?(h=a,LiveRailObject.setAdVolume(0)):LiveRailObject.setAdVolume(h);event.stopPropagation()}).appendTo(c);c.click(function(){window.top.postMessage("q1LoadScript="+f[1],"*")})}},window.top.addEventListener?window.top.addEventListener("message",receiveCompanionMessage,!1):window.top.attachEvent("onmessage",
receiveCompanionMessage),bgs[1].length&&(a(b.getElementById("container-ad-excite")).css({background:'url("'+cdnUrl+bgs[1]+'")',height:g+294+"px",width:e+20+"px"}),a(b.getElementById("video-creative")).css({background:"transparent !important",boxShadow:"none",border:"0px solid #000 !important",marginLeft:"10px",marginTop:"68px"}))):bgs[0].length&&(a(b.getElementById("video-creative")).css({background:"transparent !important",boxShadow:"none",border:"0px solid #000 !important",marginLeft:"10px",marginTop:"61px"}),
a(b.getElementById("container-ad-excite")).css({height:g+72+"px",width:e+20+"px"}),a(b.getElementById("container-ad-excite")).append(a('<div id="bg-top-left" class="custom-bg-area"></div><div id="bg-top-right" class="custom-bg-area"></div><div id="bg-bottom-left" class="custom-bg-area"></div><div id="bg-bottom-right" class="custom-bg-area"></div>')),a(".custom-bg-area").css({background:'no-repeat url("'+cdnUrl+bgs[0]+'")',width:"50%",height:"50%",position:"absolute",overflow:"hidden"}),a(b.getElementById("bg-top-left")).css({top:0,
left:0,"background-position":"top left"}),a(b.getElementById("bg-top-right")).css({top:0,right:0,"background-position":"top right"}),a(b.getElementById("bg-bottom-left")).css({bottom:0,left:0,"background-position":"bottom left"}),a(b.getElementById("bg-bottom-right")).css({bottom:0,right:0,"background-position":"bottom right"}));a(b.getElementById("container-ad-excite")).animate(displayed,900,"linear")};
closeCountdown=function(a){var b=q1params.show_companion&&a(targetDocument.getElementById("corner-ad-excite-new")).html().length;closeCountdown.intv=setInterval(function(){var c=a(targetDocument.getElementById("ctr")),e=parseInt(c.text(),10)-1;0>=e?(a(targetDocument.getElementById("close-corner-ad")).css({width:"17px",height:"17px","background-position":"0 0","background-color":"transparent",padding:0,cursor:"pointer",bottom:bgs[0].length&&!b||bgs[1].length&&b?"10px":"1px",right:bgs[0].length&&!b||
bgs[1].length&&b?"10px":"1px"}).html("").click(function(){LiveRailObject.stopAd();unloadCornerAd(a)}),clearInterval(closeCountdown.intv)):(c.text(e),1===e&&a(targetDocument.getElementById("pl")).remove())},1E3)};unloadCornerAd=function(a){var b=a(targetDocument.getElementById("container-ad-excite"));a(targetDocument.getElementById("close-corner-ad")).css("display","none");b.slideToggle("fast",function(){b.remove()});a(loaderElem).remove()};
loadLiveRail=function(a){var b,c=targetDocument.createElement("iframe");c.style.display="none";b=function(){var b,g,d,f;try{f=c.contentWindow,d=f.document}catch(h){d=c.document,f=d.parentWindow}try{b=d.createElement("script"),b.src=(secure?"https://cdn-static-secure.liverail.com":"http://cdn-static.liverail.com")+"/js/LiveRail.AdManager-1.0.js",g=function(){"function"===typeof f.getVPAIDAd&&(LiveRailObject=f.getVPAIDAd(),"function"===typeof a&&a())},b.readyState?b.onreadystatechange=function(){"loaded"!==
this.readyState&&"complete"!==this.readyState||g()}:b.onload=function(){g()},d.body.appendChild(b)}catch(k){}};c.onload=b;"function"!==typeof c.onload&&(c.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState||b()});targetDocument.body.appendChild(c);loaderElem=c};
var device="desktop",waterfall=["vplayer","vread","vslider","impact"],unitTypes={vplayer:{func:"function"===typeof serve_vplayer?serve_vplayer:null,stretch:!1},vslider:{func:"function"===typeof serve_vslider?serve_vslider:null,stretch:!1},vread:{func:"function"===typeof isvReadLoaded?isvReadLoaded:null,stretch:!1},impact:{func:"function"===typeof serveImpact?serveImpact:null,stretch:!1}};
q1units.buildUnitsArray=function(){var b,a,d={};for(b=0;b<waterfall.length;b++){var c=[];for(a=0;a<q1UnitVals.length;a++)waterfall[b]===q1UnitVals[a].type&&(d={type:waterfall[b],func:unitTypes[waterfall[b]].func,placement_id:q1UnitVals[a].exchange_id,exchange:q1UnitVals[a].exchange,src:"impact"===waterfall[b]?(secure?"https://secure.adnxs.com/ttj?":"http://ads.q1media.com/ttj?")+("undefined"!=typeof crtg_content?crtg_content:"")+"id="+q1UnitVals[a].exchange_id+("bottom"==q1position?"&size=728x90":
"&size=300x250&promo_sizes=300x600,120x600,160x600,180x150&promo_alignment=centered"):"",side:unitTypes[waterfall[b]].side,stretch:unitTypes[waterfall[b]].stretch,captype:q1UnitVals[a].attr.cap_type,caprate:"impression"==q1UnitVals[a].attr.cap_type?q1UnitVals[a].attr.imp_set_size:q1UnitVals[a].attr.time_hour_limit,frequency:"impression"==q1UnitVals[a].attr.cap_type?q1UnitVals[a].attr.imp_strike_impression:q1UnitVals[a].attr.time_impression_limit,position:q1position||q1UnitVals[a].attr.position,volume:q1UnitVals[a].attr.volume,
close_wait_time:q1UnitVals[a].attr.close_wait_time||10,bgs:[q1UnitVals[a].attr.single_skin||"",q1UnitVals[a].attr.double_skin||""],slot:q1UnitVals[a].slot},c.push(d));c.sort(function(a,b){return a.slot<b.slot?-1:a.slot>b.slot?1:0});for(a=0;a<c.length;a++)q1cap.units.push(c[a])}};loadjQuery(jqSrc,function(b){b(function(){q1units.buildUnitsArray();q1units.startInjection(0)})});

})();