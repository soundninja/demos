(function($){$.fn.jFlow=function(options){var opts=$.extend({},$.fn.jFlow.defaults,options);var randNum=Math.floor(Math.random()*11);var jFC=opts.controller;var jFS=opts.slideWrapper;var jSel=opts.selectedWrapper;var cur=0;var timer;var maxi=$(jFC).length;var slide=function(dur,i){$(opts.slides).children().css({overflow:"hidden"});$(opts.slides+" iframe").hide().addClass("temp_hide");$(opts.slides).animate({marginLeft:"-"+(i*$(opts.slides).find(":first-child").width()+"px")},opts.duration*(dur),opts.easing,function(){$(opts.slides).children().css({overflow:"hidden"});$(".temp_hide").show();});}
$(this).find(jFC).each(function(i){$(this).click(function(){dotimer();if($(opts.slides).is(":not(:animated)")){$(jFC).removeClass(jSel);$(this).addClass(jSel);var dur=Math.abs(cur-i);slide(dur,i);cur=i;}});});$(opts.slides).before('<div id="'+jFS.substring(1,jFS.length)+'"></div>').appendTo(jFS);$(opts.slides).find("div").each(function(){$(this).before('<div class="jFlowSlideContainer"></div>').appendTo($(this).prev());});$(jFC).eq(cur).addClass(jSel);var resize=function(x){$(jFS).css({position:"relative",width:opts.width,height:opts.height,overflow:"hidden"});$(opts.slides).css({position:"relative",width:$(jFS).width()*$(jFC).length+"px",height:$(jFS).height()+"px",overflow:"hidden"});$(opts.slides).children().css({position:"relative",width:$(jFS).width()+"px",height:$(jFS).height()+"px","float":"left",overflow:"hidden"});$(opts.slides).css({marginLeft:"-"+(cur*$(opts.slides).find(":eq(0)").width()+"px")});}
resize();$(window).resize(function(){resize();});$(opts.prev).click(function(){dotimer();doprev();});$(opts.next).click(function(){dotimer();donext();});var doprev=function(x){if($(opts.slides).is(":not(:animated)")){var dur=1;if(cur>0)
cur--;else{cur=maxi-1;dur=cur;}
$(jFC).removeClass(jSel);slide(dur,cur);$(jFC).eq(cur).addClass(jSel);}}
var donext=function(x){if($(opts.slides).is(":not(:animated)")){var dur=1;if(cur<maxi-1)
cur++;else{cur=0;dur=maxi-1;}
$(jFC).removeClass(jSel);slide(dur,cur);$(jFC).eq(cur).addClass(jSel);}}
var dotimer=function(x){if((opts.auto)==true){if(timer!=null)
clearInterval(timer);timer=setInterval(function(){$(opts.next).click();},10000);}}
dotimer();$(opts.slides).hover(function(){clearInterval(timer);},function(){dotimer();});};$.fn.jFlow.defaults={controller:".jFlowControl",slideWrapper:"#jFlowSlide",selectedWrapper:"jFlowSelected",auto:false,easing:"swing",duration:400,width:"100%",prev:".jFlowPrev",next:".jFlowNext"};})(jQuery);
;var inf_scroll_page=1;jQuery(document).ready(function($){$('.postimage, .postcontain img').hover(function(){$(this).fadeTo("fast",0.6);},function(){$(this).fadeTo("fast",1);});$(".social_share").slideUp(0);$(".socialbutton").hover(function(){$(this).children(".social_share").stop(true,true).slideDown(250);},function(){$(this).children(".social_share").stop(true,true).slideUp(250);});var $single_post=$('#single_post');if(!$single_post.html()){$('.contentwrap').infinitescroll({path:function(currentPageNumber){var properPath=location.pathname+'page/';return(properPath+currentPageNumber);},navSelector:"div.navigation",nextSelector:"div.navigation .next",itemSelector:".contentwrap div.postwrap",loadingImg:"http://cdn.pigeonsandplanes.com/wp-content/themes/PigeonsAndPlanes_Complex/images/ajax-loader.gif"},function(){appendInContentAd(true);window.location.hash="page/"+inf_scroll_page.toString();registerPageView(window.location.pathname);writeCaptureRefresh();try{writeCaptureRefresh();}catch(e){}
if(typeof reloadHorizon!=='undefined'){reloadHorizon();}});if(typeof reloadHorizon!=='undefined'){$(document).on("slideChange",reloadHorizon);}}
var post_slide_count=jQuery('#single_post').find("#main_content hr").length;if(post_slide_count>0){if(typeof $().waypoint!=='undefined'){$single_post.find("#main_content hr").waypoint(function(){slideChangeCallback();},{offset:'bottom-in-view'});}}
newsletter.init();if(!$single_post.html()){appendInContentAd(true);}
if(typeof tile_num==='undefined'){tile_num=0;}
_ga.trackFacebook();_ga.trackTwitter();function pnp_scrollFunction(){var scrollPos=$(window).scrollTop();if(scrollPos>($('#sidebar_wrapper').offset().top+$('#sidebar_wrapper').height())){document.getElementById("sidebarAd").style.position="fixed";document.getElementById("sidebarAd").style.top="0px";}else{document.getElementById("sidebarAd").style.position="relative";document.getElementById("sidebarAd").style.top="0px";}}
window.onscroll=pnp_scrollFunction;});(function(){var po=document.createElement('script');po.type='text/javascript';po.async=true;po.src='https://apis.google.com/js/plusone.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po,s);})();function registerPageView(url){_gaq.push(['_trackPageview',url]);ga('send','pageview');COMSCORE.beacon({c1:2,c2:6685975,c3:"",c4:"",c5:"",c6:"",c15:""});try{_qevents.push({qacct:"p-a0gOdUACucKCE",event:"refresh"});}catch(e){}
if(typeof reloadHorizon=='function')
reloadHorizon();}
var url=document.domain;function slideChangeCallback(){_gaq.push(['_trackPageview',window.location.pathname]);ga('send','pageview');try{COMSCORE.beacon({c1:2,c2:6685975,c3:"",c4:"",c5:"",c6:"",c15:""});}catch(e){}
try{if(typeof reloadHorizon==='undefined'){reloadHorizon();}}catch(e){}
try{writeCaptureRefresh();}catch(e){}}
var sidebar_scroll_fixed;function hoverSidebarDetect(){var $sidebar_scroll_ad_container=$('#sidebar-scroll-ad-container');var y=$(this).scrollTop();if(!sidebar_scroll_fixed){sidebar_scroll_top=$sidebar_scroll_ad_container.offset().top-parseFloat($sidebar_scroll_ad_container.css('margin-top').replace(/auto/,0));}
if(y<=sidebar_scroll_top-$(window).height()){$('#sidebar-scroll-ad-container').addClass('disabled');}
if(y>=sidebar_scroll_top){if(!sidebar_scroll_fixed){sidebar_scroll_top=$sidebar_scroll_ad_container.offset().top-parseFloat($sidebar_scroll_ad_container.css('margin-top').replace(/auto/,0));sidebar_scroll_fixed=true;}
$sidebar_scroll_ad_container.removeClass('disabled').addClass('fixed');}else{if(sidebar_scroll_fixed){sidebar_scroll_fixed=false;}
$sidebar_scroll_ad_container.removeClass('fixed');}}
function appendSidebarAds(){var $sidebar_scroll_ad_container=$('#sidebar-scroll-ad-container');var neword=Math.random()*10000000000000000;sidebarIFrame300x250_tile_num=tile_num;tile_num++;$('#sidebar_wrapper').append('<div id="sidebar-scroll-ad-container"></div>');cmnUNT('300x250',sidebarIFrame300x250_tile_num,1,'#sidebar-scroll-ad-container');$(window).scroll($.throttle(100,hoverSidebarDetect));var sidebar_scroll_top=$sidebar_scroll_ad_container.offset().top-parseFloat($sidebar_scroll_ad_container.css('margin-top').replace(/auto/,0));}
function appendInContentAd(incr){jQuery('<div id="in-content-ad-container-'+inf_scroll_page+'"/>').insertAfter('#infscr-loading');try{postscribe('#in-content-ad-container-'+inf_scroll_page,'<script>cmnUNT("100x100", tile_num++);<\/script>');}catch(e){}
if(incr){inf_scroll_page+=1;}}
var newsletter={settings:{emailRegex:new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$",'i'),hasConverted:false},init:function(){this.bindUIActions();},bindUIActions:function(){var $newsletter_email=jQuery('.newsletter_email');jQuery('#newsletter_submit').on('click',function(){newsletter.submitEmail();});$newsletter_email.keyup(function(evt){newsletter.handleKeyPress(evt);});$newsletter_email.focus(function(evt){jQuery(this).css('color','#555');if(jQuery(this).val()==='Please enter a valid email address.'){jQuery(this).val('');}});},handleKeyPress:function(evt){if(evt.which==13){newsletter_signup_box.find('input').blur();newsletter.submitEmail();}},validateEmailAddress:function(addr){return newsletter.settings.emailRegex.test(addr);},submitEmail:function(){var newsletter_signup_box=jQuery('#newsletter-signup-box');var $newsletter_box=newsletter_signup_box.find('input'),emailAddr=$newsletter_box[0].value;$newsletter_box.blur();if(!newsletter.validateEmailAddress(emailAddr)){$newsletter_box.css('color','#F00').val('Please enter a valid email address.');return;}
newsletter_signup_box.find('img').show();jQuery.ajax('/wp-content/plugins/cmn-sailthru-fangate/register-user.php',{context:this,type:'POST',data:{'channel':channel.toLowerCase().replace(/[^\w]+/,'-'),'email':emailAddr,'frequency':1,'promotions':1},dataType:'json',success:function(data){$newsletter_box.css('color','#00BDED');if(!data.already){$newsletter_box.val('Success! You are signed up.');newsletter.settings.hasConverted=true;newsletter.cookie();}else{$newsletter_box.val('You are already subscribed.');}},error:function(){$newsletter_box.css('color','#F00').val('Error. Try again later.');},complete:function(){newsletter_signup_box.find('img').hide();}});},cookie:function(){var expDays=(newsletter.settings.hasConverted)?365:30;var exp=new Date();exp.setDate(exp.getDate()+expDays);document.cookie="FanGateBlockout=1; path=/; expires="+exp.toUTCString();}};var _ga=_ga||{};_ga.getSocialActionTrackers_=function(network,socialAction,opt_target,opt_pagePath){return function(){var trackers=_gat._getTrackers();for(var i=0,tracker;tracker=trackers[i];i++){tracker._trackSocial(network,socialAction,opt_target,opt_pagePath);}};};_ga.trackFacebook=function(opt_pagePath){try{if(FB&&FB.Event&&FB.Event.subscribe){FB.Event.subscribe('edge.create',function(opt_target){_gaq.push(_ga.getSocialActionTrackers_('facebook','like',opt_target,opt_pagePath));});FB.Event.subscribe('edge.remove',function(opt_target){_gaq.push(_ga.getSocialActionTrackers_('facebook','unlike',opt_target,opt_pagePath));});FB.Event.subscribe('message.send',function(opt_target){_gaq.push(_ga.getSocialActionTrackers_('facebook','send',opt_target,opt_pagePath));});}}catch(e){}};_ga.trackTwitterHandler_=function(intent_event,opt_pagePath){var opt_target;if(intent_event&&intent_event.type=='tweet'||intent_event.type=='click'){if(intent_event.target.nodeName=='IFRAME'){opt_target=_ga.extractParamFromUri_(intent_event.target.src,'url');}
var socialAction=intent_event.type+((intent_event.type=='click')?'-'+intent_event.region:'');_gaq.push(_ga.getSocialActionTrackers_('twitter',socialAction,opt_target,opt_pagePath));}};_ga.trackTwitter=function(opt_pagePath){intent_handler=function(intent_event){_ga.trackTwitterHandler_(intent_event,opt_pagePath);};try{twttr.events.bind('click',intent_handler);twttr.events.bind('tweet',intent_handler);}catch(e){}};_ga.extractParamFromUri_=function(uri,paramName){if(!uri){return;}
var regex=new RegExp('[\\?&#]'+paramName+'=([^&#]*)');var params=regex.exec(uri);if(params!=null){return unescape(params[1]);}
return;};
;jQuery(document).ready(function($){$("#controller").jFlow({slides:"#slides",width:"970px",height:"300px",auto:true,pause:100,duration:200});});
;(function(window,$,undefined){$.infinitescroll=function infscr(options,callback,element){this.element=$(element);this._create(options,callback);};$.infinitescroll.defaults={loading:{finished:undefined,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"http://cdn.pigeonsandplanes.com/wp-content/themes/PigeonsAndPlanes_Complex/images/ajax-loader.gif",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:'fast',start:undefined},state:{isDuringAjax:false,isInvalidPage:false,isDestroyed:false,isDone:false,isPaused:false,currPage:1},callback:undefined,debug:false,behavior:undefined,binder:$(window),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,pathParse:undefined,dataType:'html',appendCallback:true,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:undefined,path:undefined};$.infinitescroll.prototype={_binding:function infscr_binding(binding){var instance=this,opts=instance.options;if(!!opts.behavior&&this['_binding_'+opts.behavior]!==undefined){this['_binding_'+opts.behavior].call(this);return;}
if(binding!=='bind'&&binding!=='unbind'){this._debug('Binding value  '+binding+' not valid')
return false;}
if(binding=='unbind'){(this.options.binder).unbind('smartscroll.infscr.'+instance.options.infid);}else{(this.options.binder)[binding]('smartscroll.infscr.'+instance.options.infid,function(){instance.scroll();});};this._debug('Binding',binding);},_create:function infscr_create(options,callback){if(!this._validate(options)){return false;}
var opts=this.options=$.extend(true,{},$.infinitescroll.defaults,options),relurl=/(.*?\/\/).*?(\/.*)/,path=$(opts.nextSelector).attr('href');opts.contentSelector=opts.contentSelector||this.element;opts.loading.selector=opts.loading.selector||opts.contentSelector;if(!path){this._debug('Navigation selector not found');return;}
opts.path=this._determinepath(path);opts.loading.msg=$('<div id="infscr-loading"><img alt="Loading..." src="'+opts.loading.img+'" /><div>'+opts.loading.msgText+'</div></div>');(new Image()).src=opts.loading.img;opts.pixelsFromNavToBottom=$(document).height()-$(opts.navSelector).offset().top;opts.loading.start=opts.loading.start||function(){$(opts.navSelector).hide();opts.loading.msg.appendTo(opts.loading.selector).show(opts.loading.speed,function(){beginAjax(opts);});};opts.loading.finished=opts.loading.finished||function(){opts.loading.msg.fadeOut('normal');};opts.callback=function(instance,data){if(!!opts.behavior&&instance['_callback_'+opts.behavior]!==undefined){instance['_callback_'+opts.behavior].call($(opts.contentSelector)[0],data);}
if(callback){callback.call($(opts.contentSelector)[0],data);}};this._setup();},_debug:function infscr_debug(){if(this.options.debug){return window.console&&console.log.call(console,arguments);}},_determinepath:function infscr_determinepath(path){var opts=this.options;if(!!opts.behavior&&this['_determinepath_'+opts.behavior]!==undefined){this['_determinepath_'+opts.behavior].call(this,path);return;}
if(!!opts.pathParse){this._debug('pathParse manual');return opts.pathParse;}else if(path.match(/^(.*?)\b2\b(.*?$)/)){path=path.match(/^(.*?)\b2\b(.*?$)/).slice(1);}else if(path.match(/^(.*?)2(.*?$)/)){if(path.match(/^(.*?page=)2(\/.*|$)/)){path=path.match(/^(.*?page=)2(\/.*|$)/).slice(1);return path;}
path=path.match(/^(.*?)2(.*?$)/).slice(1);}else{if(path.match(/^(.*?page=)1(\/.*|$)/)){path=path.match(/^(.*?page=)1(\/.*|$)/).slice(1);return path;}else{this._debug('Sorry, we couldn\'t parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.');opts.state.isInvalidPage=true;}}
this._debug('determinePath',path);return path;},_error:function infscr_error(xhr){var opts=this.options;if(!!opts.behavior&&this['_error_'+opts.behavior]!==undefined){this['_error_'+opts.behavior].call(this,xhr);return;}
if(xhr!=='destroy'&&xhr!=='end'){xhr='unknown';}
this._debug('Error',xhr);if(xhr=='end'){this._showdonemsg();}
opts.state.isDone=true;opts.state.currPage=1;opts.state.isPaused=false;this._binding('unbind');},_loadcallback:function infscr_loadcallback(box,data){var opts=this.options,callback=this.options.callback,result=(opts.state.isDone)?'done':(!opts.appendCallback)?'no-append':'append',frag;if(!!opts.behavior&&this['_loadcallback_'+opts.behavior]!==undefined){this['_loadcallback_'+opts.behavior].call(this,box,data);return;}
switch(result){case'done':this._showdonemsg();return false;break;case'no-append':if(opts.dataType=='html'){data='<div>'+data+'</div>';data=$(data).find(opts.itemSelector);};break;case'append':var children=box.children();if(children.length==0){return this._error('end');}
frag=document.createDocumentFragment();while(box[0].firstChild){frag.appendChild(box[0].firstChild);}
this._debug('contentSelector',$(opts.contentSelector)[0])
$(opts.contentSelector)[0].appendChild(frag);data=children.get();break;}
opts.loading.finished.call($(opts.contentSelector)[0],opts)
if(opts.animate){var scrollTo=$(window).scrollTop()+$('#infscr-loading').height()+opts.extraScrollPx+'px';$('html,body').animate({scrollTop:scrollTo},800,function(){opts.state.isDuringAjax=false;});}
if(!opts.animate)opts.state.isDuringAjax=false;callback(this,data);},_nearbottom:function infscr_nearbottom(){var opts=this.options,pixelsFromWindowBottomToBottom=0+$(document).height()-(opts.binder.scrollTop())-$(window).height();if(!!opts.behavior&&this['_nearbottom_'+opts.behavior]!==undefined){this['_nearbottom_'+opts.behavior].call(this);return;}
this._debug('math:',pixelsFromWindowBottomToBottom,opts.pixelsFromNavToBottom);return(pixelsFromWindowBottomToBottom-opts.bufferPx<opts.pixelsFromNavToBottom);},_pausing:function infscr_pausing(pause){var opts=this.options;if(!!opts.behavior&&this['_pausing_'+opts.behavior]!==undefined){this['_pausing_'+opts.behavior].call(this,pause);return;}
if(pause!=='pause'&&pause!=='resume'&&pause!==null){this._debug('Invalid argument. Toggling pause value instead');};pause=(pause&&(pause=='pause'||pause=='resume'))?pause:'toggle';switch(pause){case'pause':opts.state.isPaused=true;break;case'resume':opts.state.isPaused=false;break;case'toggle':opts.state.isPaused=!opts.state.isPaused;break;}
this._debug('Paused',opts.state.isPaused);return false;},_setup:function infscr_setup(){var opts=this.options;if(!!opts.behavior&&this['_setup_'+opts.behavior]!==undefined){this['_setup_'+opts.behavior].call(this);return;}
this._binding('bind');return false;},_showdonemsg:function infscr_showdonemsg(){var opts=this.options;if(!!opts.behavior&&this['_showdonemsg_'+opts.behavior]!==undefined){this['_showdonemsg_'+opts.behavior].call(this);return;}
opts.loading.msg.find('img').hide().parent().find('div').html(opts.loading.finishedMsg).animate({opacity:1},2000,function(){$(this).parent().fadeOut('normal');});opts.errorCallback.call($(opts.contentSelector)[0],'done');},_validate:function infscr_validate(opts){for(var key in opts){if(key.indexOf&&key.indexOf('Selector')>-1&&$(opts[key]).length===0){this._debug('Your '+key+' found no elements.');return false;}
return true;}},bind:function infscr_bind(){this._binding('bind');},destroy:function infscr_destroy(){this.options.state.isDestroyed=true;return this._error('destroy');},pause:function infscr_pause(){this._pausing('pause');},resume:function infscr_resume(){this._pausing('resume');},retrieve:function infscr_retrieve(pageNum){var instance=this,opts=instance.options,path=opts.path,box,frag,desturl,method,condition,pageNum=pageNum||null,getPage=(!!pageNum)?pageNum:opts.state.currPage;beginAjax=function infscr_ajax(opts){opts.state.currPage++;instance._debug('heading into ajax',path);box=$(opts.contentSelector).is('table')?$('<tbody/>'):$('<div/>');desturl=path.join(opts.state.currPage);method=(opts.dataType=='html'||opts.dataType=='json')?opts.dataType:'html+callback';if(opts.appendCallback&&opts.dataType=='html')method+='+callback'
switch(method){case'html+callback':instance._debug('Using HTML via .load() method');box.load(desturl+' '+opts.itemSelector,null,function infscr_ajax_callback(responseText){instance._loadcallback(box,responseText);});break;case'html':case'json':instance._debug('Using '+(method.toUpperCase())+' via $.ajax() method');$.ajax({url:desturl,dataType:opts.dataType,complete:function infscr_ajax_callback(jqXHR,textStatus){condition=(typeof(jqXHR.isResolved)!=='undefined')?(jqXHR.isResolved()):(textStatus==="success"||textStatus==="notmodified");(condition)?instance._loadcallback(box,jqXHR.responseText):instance._error('end');}});break;}};if(!!opts.behavior&&this['retrieve_'+opts.behavior]!==undefined){this['retrieve_'+opts.behavior].call(this,pageNum);return;}
if(opts.state.isDestroyed){this._debug('Instance is destroyed');return false;};opts.state.isDuringAjax=true;opts.loading.start.call($(opts.contentSelector)[0],opts);},scroll:function infscr_scroll(){var opts=this.options,state=opts.state;if(!!opts.behavior&&this['scroll_'+opts.behavior]!==undefined){this['scroll_'+opts.behavior].call(this);return;}
if(state.isDuringAjax||state.isInvalidPage||state.isDone||state.isDestroyed||state.isPaused)return;if(!this._nearbottom())return;this.retrieve();},toggle:function infscr_toggle(){this._pausing();},unbind:function infscr_unbind(){this._binding('unbind');},update:function infscr_options(key){if($.isPlainObject(key)){this.options=$.extend(true,this.options,key);}}}
$.fn.infinitescroll=function infscr_init(options,callback){var thisCall=typeof options;switch(thisCall){case'string':var args=Array.prototype.slice.call(arguments,1);this.each(function(){var instance=$.data(this,'infinitescroll');if(!instance){return false;}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return false;}
instance[options].apply(instance,args);});break;case'object':this.each(function(){var instance=$.data(this,'infinitescroll');if(instance){instance.update(options);}else{$.data(this,'infinitescroll',new $.infinitescroll(options,callback,this));}});break;}
return this;};var event=$.event,scrollTimeout;event.special.smartscroll={setup:function(){$(this).bind("scroll",event.special.smartscroll.handler);},teardown:function(){$(this).unbind("scroll",event.special.smartscroll.handler);},handler:function(event,execAsap){var context=this,args=arguments;event.type="smartscroll";if(scrollTimeout){clearTimeout(scrollTimeout);}
scrollTimeout=setTimeout(function(){$.event.handle.apply(context,args);},execAsap==="execAsap"?0:100);}};$.fn.smartscroll=function(fn){return fn?this.bind("smartscroll",fn):this.trigger("smartscroll",["execAsap"]);};})(window,jQuery);
;/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(window,undefined){'$:nomunge';var $=window.jQuery||window.Cowboy||(window.Cowboy={}),jq_throttle;$.throttle=jq_throttle=function(delay,no_trailing,callback,debounce_mode){var timeout_id,last_exec=0;if(typeof no_trailing!=='boolean'){debounce_mode=callback;callback=no_trailing;no_trailing=undefined;}
function wrapper(){var that=this,elapsed=+new Date()-last_exec,args=arguments;function exec(){last_exec=+new Date();callback.apply(that,args);};function clear(){timeout_id=undefined;};if(debounce_mode&&!timeout_id){exec();}
timeout_id&&clearTimeout(timeout_id);if(debounce_mode===undefined&&elapsed>delay){exec();}else if(no_trailing!==true){timeout_id=setTimeout(debounce_mode?clear:exec,debounce_mode===undefined?delay-elapsed:delay);}};if($.guid){wrapper.guid=callback.guid=callback.guid||$.guid++;}
return wrapper;};$.debounce=function(delay,at_begin,callback){return callback===undefined?jq_throttle(delay,at_begin,false):jq_throttle(delay,callback,at_begin!==false);};})(this);
;(function($){$.fn.complexHoverAd=function(options){var sidebarIFrame300x250,sidebarIFrame160x600,sidebarIFrame300x250_tile_num,sidebarIFrame160x600_tile_num;this.sidebarAdAppended=false;var defaults=$.extend({'ad_channel_zone':'cmn_pigeonsandplanes','sidebar_ad_html':'<div id="sidebar-scroll-ad-container" class="disabled"><div class="sub-div"></div><div id="sidebar-scroll-300x250-container"></div></div>'},options);var ad_channel_zone=defaults.ad_channel_zone;this.append(defaults.sidebar_ad_html);var sidebar_scroll_top=$('#sidebar-scroll-ad-container').offset().top-parseFloat($('#sidebar-scroll-ad-container').css('margin-top').replace(/auto/,0));var sidebar_scroll_fixed,sidebarAdAppended;this.hoverSidebarDetect=function(event){var y=$(this).scrollTop();if(!sidebar_scroll_fixed){sidebar_scroll_top=$('#sidebar-scroll-ad-container').offset().top-parseFloat($('#sidebar-scroll-ad-container').css('margin-top').replace(/auto/,0));}
if(y<=sidebar_scroll_top-$(window).height()){$('#sidebar-scroll-ad-container').addClass('disabled');}
if(y>=sidebar_scroll_top){if(!sidebar_scroll_fixed){sidebar_scroll_top=$('#sidebar-scroll-ad-container').offset().top-parseFloat($('#sidebar-scroll-ad-container').css('margin-top').replace(/auto/,0));sidebar_scroll_fixed=true;}
if(!sidebarAdAppended){appendSidebarAds();}
$('#sidebar-scroll-ad-container').removeClass('disabled');$('#sidebar-scroll-ad-container').addClass('fixed');}else{if(sidebar_scroll_fixed){sidebar_scroll_fixed=false;}
$('#sidebar-scroll-ad-container').removeClass('fixed');}}
this.replaceSidebarScrollingAds=function(){console.log('replace sidebar ad');sidebarAdAppended=true;var sidebarEl=document.querySelectorAll('#sidebar-scroll-300x250-container')[0];if(typeof sidebarEl!='undefined'){emptyElement(sidebarEl);try{postscribe('#sidebar-scroll-300x250-container','<sc'+'ript type="text/javascript">cmnUNT(\'300x250\', \''+sidebarIFrame300x250_tile_num+'\', 1);</sc'+'ript>');}catch(e){}}}
function appendSidebarAds(){console.log('append sidebar ad');tile_num++;sidebarIFrame300x250_tile_num=tile_num;sidebarAdAppended=true;var sidebarEl=document.querySelectorAll('#sidebar-scroll-300x250-container')[0];if(typeof sidebarEl!='undefined'){emptyElement(sidebarEl);try{postscribe('#sidebar-scroll-300x250-container','<sc'+'ript type="text/javascript">cmnUNT(\'300x250\', \''+sidebarIFrame300x250_tile_num+'\', 1);</sc'+'ript>');}catch(e){}}}
$(window).scroll($.throttle(100,this.hoverSidebarDetect));return this.each(function(){});};})(jQuery);
;(function($){$.fn.pjax=function(container,options){if(options)
options.container=container
else
options=$.isPlainObject(container)?container:{container:container}
if(options.container&&typeof options.container!=='string'){throw"pjax container must be a string selector!"
return false}
return this.live('click',function(event){if(event.which>1||event.metaKey)
return true
var defaults={url:this.href,container:$(this).attr('data-pjax'),clickedElement:$(this),fragment:null}
$.pjax($.extend({},defaults,options))
event.preventDefault()})}
var pjax=$.pjax=function(options){var $container=$(options.container),success=options.success||$.noop
delete options.success
if(typeof options.container!=='string')
throw"pjax container must be a string selector!"
options=$.extend(true,{},pjax.defaults,options)
if($.isFunction(options.url)){options.url=options.url()}
options.context=$container
options.success=function(data){if(options.fragment){var $fragment=$(data).find(options.fragment)
if($fragment.length)
data=$fragment.children()
else
return window.location=options.url}else{if(!$.trim(data)||/<html/i.test(data))
return window.location=options.url}
this.html(data)
var oldTitle=document.title,title=$.trim(this.find('title').remove().text())
if(title)document.title=title
if(!title&&options.fragment){title=$fragment.attr('title')||$fragment.data('title')}
var state={pjax:options.container,fragment:options.fragment,timeout:options.timeout}
var query=$.param(options.data)
if(query!="_pjax=true")
state.url=options.url+(/\?/.test(options.url)?"&":"?")+query
if(options.replace){window.history.replaceState(state,document.title,options.url)}else if(options.push){if(!pjax.active){window.history.replaceState($.extend({},state,{url:null}),oldTitle)
pjax.active=true}
window.history.pushState(state,document.title,options.url)}
if((options.replace||options.push)&&window._gaq)
_gaq.push(['_trackPageview'])
var hash=window.location.hash.toString()
if(hash!==''){window.location.href=hash}
success.apply(this,arguments)}
var xhr=pjax.xhr
if(xhr&&xhr.readyState<4){xhr.onreadystatechange=$.noop
xhr.abort()}
pjax.options=options
pjax.xhr=$.ajax(options)
$(document).trigger('pjax',[pjax.xhr,options])
return pjax.xhr}
pjax.defaults={timeout:650,push:true,replace:false,data:{_pjax:true},type:'GET',dataType:'html',beforeSend:function(xhr){this.trigger('pjax:start',[xhr,pjax.options])
this.trigger('start.pjax',[xhr,pjax.options])
xhr.setRequestHeader('X-PJAX','true')},error:function(xhr,textStatus,errorThrown){if(textStatus!=='abort')
window.location=pjax.options.url},complete:function(xhr){this.trigger('pjax:end',[xhr,pjax.options])
this.trigger('end.pjax',[xhr,pjax.options])}}
var popped=('state'in window.history),initialURL=location.href
$(window).bind('popstate',function(event){var initialPop=!popped&&location.href==initialURL
popped=true
if(initialPop)return
var state=event.state
if(state&&state.pjax){var container=state.pjax
if($(container+'').length)
$.pjax({url:state.url||location.href,fragment:state.fragment,container:container,push:false,timeout:state.timeout})
else
window.location=location.href}})
if($.inArray('state',$.event.props)<0)
$.event.props.push('state')
$.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/(iPod|iPhone|iPad|WebApps\/.+CFNetwork)/)
if(!$.support.pjax){$.pjax=function(options){window.location=$.isFunction(options.url)?options.url():options.url}
$.fn.pjax=function(){return this}}})(jQuery);