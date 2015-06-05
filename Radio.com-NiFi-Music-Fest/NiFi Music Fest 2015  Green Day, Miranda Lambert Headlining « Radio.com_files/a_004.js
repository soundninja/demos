// Libs for Eventful API

var cbs_eventful = {};

// Base Url
var cbs_eventful_request_uri = 'http://eventful.com/json/apps/cbs/';

cbs_eventful.add_box = function($object) {
	if (!$object) return;

	var $target = $object;

	jQuery.ajax({
		type: "GET",
		url: cbs_eventful_request_uri + 'performer',
		data: {
			performers: $object.data('artist'),
			station_id: $object.data('stationid')
		},
		dataType: "jsonp",
		success : function(json_array) {
			if (!json_array) return;

			// IE8 Solution, Object.keys is not supported
			if (!Object.keys) {
				Object.keys = function(json_array) {
					var keys = [];

					for (var i in json_array) {
						if (json_array.hasOwnProperty(i)) {
							keys.push(i);
						}
					}

					return keys;
				};
			}

			if (json_array.results) {
				var key = Object.keys(json_array.results);
				var artist_data = json_array.results[key];
			}

			var action_text  = 'Track your favorite artists and never miss a show again';
			var button_text  = 'TRACK NOW';
			var button_class = 'track-artist';
			var button_link  = 'http://eventful.com/tracker?utm_source=kroq.cbslocal.com&utm_medium=cbsl&utm_campaign=playlist_page_song_history_item_tracker&ev_partner=3292&ev_channel=cbsl_kroq&ev_campaign=playlist_page_song_history_item_tracker&vivid_utm_source=eventful+cbsl_playlist';

			if (artist_data) {

				var has_tickets = artist_data.has_tickets;
				var demand_link = artist_data.demand_link;
				var location = json_array.location.pretty_name;
				var venue = artist_data.venue;

				if (has_tickets) {
					var venue_name = venue.name;
					action_text    = artist_data.event_date;
					button_text    = 'FIND TICKETS';
					button_class   = 'artist-tickets';
					button_link    = artist_data.ticket_link;

				} else if (!has_tickets && demand_link) {
					action_text  = 'Bring ' + artist_data.name + ' to ' + location;
					button_text  = 'Demand it!';
					button_class = 'artist-demand';
					button_link  = demand_link;
				}

			}

			var $eventful_block = $('<div>')
				.addClass('eventful-artists')
				.append($('<span>')
					.addClass('action')
					.text(action_text)
				)
				.append($('<a>')
					.addClass('eventful-button ' + button_class)
					.attr('target', '_blank')
					.attr('href', button_link)
					.text(button_text)
					.css('display', 'block')
				);

			if ($('body').hasClass('mobile')) {
				$target.find('.purchase-box').before($eventful_block);
			} else {
				$target.append($eventful_block);
			}

			if (has_tickets) {
				var $on_tour = $('<span>')
					.addClass('on-tour')
					.text('ON TOUR: ');

				$target.children('.eventful-artists').children('.action').before($on_tour);
			}

			if (venue) {
				var $venue = $('<span>')
					.addClass('venue')
					.text(venue_name);

				$target.children('.eventful-artists').children('.action').after($venue);
			}
		}
	});
};

;
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.2 (20/10/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function(a){var m,t,u,f,D,h,E,n,z,A,q=0,e={},o=[],p=0,c={},l=[],I=null,v=new Image,J=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,W=/[^\.]\.(swf)\s*$/i,K,L=1,y=0,s="",r,j,i=false,B=a.extend(a("<div/>")[0],{prop:0}),M=a.browser.msie&&a.browser.version<7&&!window.XMLHttpRequest,N=function(){t.hide();v.onerror=v.onload=null;I&&I.abort();m.empty()},O=function(){if(false===e.onError(o,q,e)){t.hide();i=false}else{e.titleShow=false;e.width="auto";e.height="auto";m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
F()}},H=function(){var b=o[q],d,g,k,C,P,w;N();e=a.extend({},a.fn.fancybox.defaults,typeof a(b).data("fancybox")=="undefined"?e:a(b).data("fancybox"));w=e.onStart(o,q,e);if(w===false)i=false;else{if(typeof w=="object")e=a.extend(e,w);k=e.title||(b.nodeName?a(b).attr("title"):b.title)||"";if(b.nodeName&&!e.orig)e.orig=a(b).children("img:first").length?a(b).children("img:first"):a(b);if(k===""&&e.orig&&e.titleFromAlt)k=e.orig.attr("alt");d=e.href||(b.nodeName?a(b).attr("href"):b.href)||null;if(/^(?:javascript)/i.test(d)||
d=="#")d=null;if(e.type){g=e.type;if(!d)d=e.content}else if(e.content)g="html";else if(d)g=d.match(J)?"image":d.match(W)?"swf":a(b).hasClass("iframe")?"iframe":d.indexOf("#")===0?"inline":"ajax";if(g){if(g=="inline"){b=d.substr(d.indexOf("#"));g=a(b).length>0?"inline":"ajax"}e.type=g;e.href=d;e.title=k;if(e.autoDimensions&&e.type!=="iframe"&&e.type!=="swf"){e.width="auto";e.height="auto"}if(e.modal){e.overlayShow=true;e.hideOnOverlayClick=false;e.hideOnContentClick=false;e.enableEscapeButton=false;
e.showCloseButton=false}e.padding=parseInt(e.padding,10);e.margin=parseInt(e.margin,10);m.css("padding",e.padding+e.margin);a(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){a(this).replaceWith(h.children())});switch(g){case "html":m.html(e.content);F();break;case "inline":if(a(b).parent().is("#fancybox-content")===true){i=false;break}a('<div class="fancybox-inline-tmp" />').hide().insertBefore(a(b)).bind("fancybox-cleanup",function(){a(this).replaceWith(h.children())}).bind("fancybox-cancel",
function(){a(this).replaceWith(m.children())});a(b).appendTo(m);F();break;case "image":i=false;a.fancybox.showActivity();v=new Image;v.onerror=function(){O()};v.onload=function(){i=true;v.onerror=v.onload=null;e.width=v.width;e.height=v.height;a("<img />").attr({id:"fancybox-img",src:v.src,alt:e.title}).appendTo(m);Q()};v.src=d;break;case "swf":C='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+e.width+'" height="'+e.height+'"><param name="movie" value="'+d+'"></param>';P="";
a.each(e.swf,function(x,G){C+='<param name="'+x+'" value="'+G+'"></param>';P+=" "+x+'="'+G+'"'});C+='<embed src="'+d+'" type="application/x-shockwave-flash" width="'+e.width+'" height="'+e.height+'"'+P+"></embed></object>";m.html(C);F();break;case "ajax":i=false;a.fancybox.showActivity();e.ajax.win=e.ajax.success;I=a.ajax(a.extend({},e.ajax,{url:d,data:e.ajax.data||{},error:function(x){x.status>0&&O()},success:function(x,G,U){if(U.status==200){if(typeof e.ajax.win=="function"){w=e.ajax.win(d,x,G,
U);if(w===false){t.hide();return}else if(typeof w=="string"||typeof w=="object")x=w}m.html(x);F()}}}));break;case "iframe":Q()}}else O()}},F=function(){m.width(e.width);m.height(e.height);if(e.width=="auto")e.width=m.width();if(e.height=="auto")e.height=m.height();Q()},Q=function(){var b,d;t.hide();if(f.is(":visible")&&false===c.onCleanup(l,p,c)){a.event.trigger("fancybox-cancel");i=false}else{i=true;a(h.add(u)).unbind();a(window).unbind("resize.fb scroll.fb");a(document).unbind("keydown.fb");f.is(":visible")&&
c.titlePosition!=="outside"&&f.css("height",f.height());l=o;p=q;c=e;if(c.overlayShow){u.css({"background-color":c.overlayColor,opacity:c.overlayOpacity,cursor:c.hideOnOverlayClick?"pointer":"auto",height:a(document).height()});if(!u.is(":visible")){M&&a("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});u.show()}}else u.hide();h.get(0).scrollTop=0;h.get(0).scrollLeft=
0;j=X();s=c.title||"";y=0;n.empty().removeAttr("style").removeClass();if(c.titleShow!==false){if(a.isFunction(c.titleFormat))b=c.titleFormat(s,l,p,c);else b=s&&s.length?c.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+s+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+c.titlePosition+'">'+s+"</div>":false;s=b;if(!(!s||s==="")){n.addClass("fancybox-title-"+
c.titlePosition).html(s).appendTo("body").show();switch(c.titlePosition){case "inside":n.css({width:j.width-c.padding*2,marginLeft:c.padding,marginRight:c.padding});y=n.outerHeight(true);n.appendTo(D);j.height+=y;break;case "over":n.css({marginLeft:c.padding,width:j.width-c.padding*2,bottom:c.padding}).appendTo(D);break;case "float":n.css("left",parseInt((n.width()-j.width-40)/2,10)*-1).appendTo(f);break;default:n.css({width:j.width-c.padding*2,paddingLeft:c.padding,paddingRight:c.padding}).appendTo(f)}}}n.hide();
if(f.is(":visible")){a(E.add(z).add(A)).hide();b=f.position();r={top:b.top,left:b.left,width:f.width(),height:f.height()};d=r.width==j.width&&r.height==j.height;h.fadeTo(c.changeFade,0.3,function(){var g=function(){h.html(m.contents()).fadeTo(c.changeFade,1,R)};a.event.trigger("fancybox-change");h.empty().removeAttr("filter").css({"border-width":c.padding,width:j.width-c.padding*2,height:c.type=="image"||c.type=="swf"||c.type=="iframe"?j.height-y-c.padding*2:"auto"});if(d)g();else{B.prop=0;a(B).animate({prop:1},
{duration:c.changeSpeed,easing:c.easingChange,step:S,complete:g})}})}else{f.removeAttr("style");h.css("border-width",c.padding);if(c.transitionIn=="elastic"){r=V();h.html(m.contents());f.show();if(c.opacity)j.opacity=0;B.prop=0;a(B).animate({prop:1},{duration:c.speedIn,easing:c.easingIn,step:S,complete:R})}else{c.titlePosition=="inside"&&y>0&&n.show();h.css({width:j.width-c.padding*2,height:c.type=="image"||c.type=="swf"||c.type=="iframe"?j.height-y-c.padding*2:"auto"}).html(m.contents());f.css(j).fadeIn(c.transitionIn==
"none"?0:c.fadeIn,R)}}}},Y=function(){if(c.enableEscapeButton||c.enableKeyboardNav)a(document).bind("keydown.fb",function(b){if(b.keyCode==27&&c.enableEscapeButton){b.preventDefault();a.fancybox.close()}else if((b.keyCode==37||b.keyCode==39)&&c.enableKeyboardNav&&b.target.tagName!=="INPUT"&&b.target.tagName!=="TEXTAREA"&&b.target.tagName!=="SELECT"){b.preventDefault();a.fancybox[b.keyCode==37?"prev":"next"]()}});if(c.showNavArrows){if(c.cyclic&&l.length>1||p!==0)z.show();if(c.cyclic&&l.length>1||
p!=l.length-1)A.show()}else{z.hide();A.hide()}},R=function(){if(!a.support.opacity){h.get(0).style.removeAttribute("filter");f.get(0).style.removeAttribute("filter")}f.css("height","auto");c.type!=="image"&&c.type!=="swf"&&c.type!=="iframe"&&h.css("height","auto");s&&s.length&&n.show();c.showCloseButton&&E.show();Y();c.hideOnContentClick&&h.bind("click",a.fancybox.close);c.hideOnOverlayClick&&u.bind("click",a.fancybox.close);a(window).bind("resize.fb",a.fancybox.resize);c.centerOnScroll&&a(window).bind("scroll.fb",
a.fancybox.center);if(c.type=="iframe")a('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(a.browser.msie?'allowtransparency="true""':"")+' scrolling="'+e.scrolling+'" src="'+c.href+'"></iframe>').appendTo(h);f.show();i=false;a.fancybox.center();c.onComplete(l,p,c);var b,d;if(l.length-1>p){b=l[p+1].href;if(typeof b!=="undefined"&&b.match(J)){d=new Image;d.src=b}}if(p>0){b=l[p-1].href;if(typeof b!=="undefined"&&b.match(J)){d=new Image;d.src=b}}},
S=function(b){var d={width:parseInt(r.width+(j.width-r.width)*b,10),height:parseInt(r.height+(j.height-r.height)*b,10),top:parseInt(r.top+(j.top-r.top)*b,10),left:parseInt(r.left+(j.left-r.left)*b,10)};if(typeof j.opacity!=="undefined")d.opacity=b<0.5?0.5:b;f.css(d);h.css({width:d.width-c.padding*2,height:d.height-y*b-c.padding*2})},T=function(){return[a(window).width()-c.margin*2,a(window).height()-c.margin*2,a(document).scrollLeft()+c.margin,a(document).scrollTop()+c.margin]},X=function(){var b=
T(),d={},g=c.autoScale,k=c.padding*2;d.width=c.width.toString().indexOf("%")>-1?parseInt(b[0]*parseFloat(c.width)/100,10):c.width+k;d.height=c.height.toString().indexOf("%")>-1?parseInt(b[1]*parseFloat(c.height)/100,10):c.height+k;if(g&&(d.width>b[0]||d.height>b[1]))if(e.type=="image"||e.type=="swf"){g=c.width/c.height;if(d.width>b[0]){d.width=b[0];d.height=parseInt((d.width-k)/g+k,10)}if(d.height>b[1]){d.height=b[1];d.width=parseInt((d.height-k)*g+k,10)}}else{d.width=Math.min(d.width,b[0]);d.height=
Math.min(d.height,b[1])}d.top=parseInt(Math.max(b[3]-20,b[3]+(b[1]-d.height-40)*0.5),10);d.left=parseInt(Math.max(b[2]-20,b[2]+(b[0]-d.width-40)*0.5),10);return d},V=function(){var b=e.orig?a(e.orig):false,d={};if(b&&b.length){d=b.offset();d.top+=parseInt(b.css("paddingTop"),10)||0;d.left+=parseInt(b.css("paddingLeft"),10)||0;d.top+=parseInt(b.css("border-top-width"),10)||0;d.left+=parseInt(b.css("border-left-width"),10)||0;d.width=b.width();d.height=b.height();d={width:d.width+c.padding*2,height:d.height+
c.padding*2,top:d.top-c.padding-20,left:d.left-c.padding-20}}else{b=T();d={width:c.padding*2,height:c.padding*2,top:parseInt(b[3]+b[1]*0.5,10),left:parseInt(b[2]+b[0]*0.5,10)}}return d},Z=function(){if(t.is(":visible")){a("div",t).css("top",L*-40+"px");L=(L+1)%12}else clearInterval(K)};a.fn.fancybox=function(b){if(!a(this).length)return this;a(this).data("fancybox",a.extend({},b,a.metadata?a(this).metadata():{})).unbind("click.fb").bind("click.fb",function(d){d.preventDefault();if(!i){i=true;a(this).blur();
o=[];q=0;d=a(this).attr("rel")||"";if(!d||d==""||d==="nofollow")o.push(this);else{o=a("a[rel="+d+"], area[rel="+d+"]");q=o.index(this)}H()}});return this};a.fancybox=function(b,d){var g;if(!i){i=true;g=typeof d!=="undefined"?d:{};o=[];q=parseInt(g.index,10)||0;if(a.isArray(b)){for(var k=0,C=b.length;k<C;k++)if(typeof b[k]=="object")a(b[k]).data("fancybox",a.extend({},g,b[k]));else b[k]=a({}).data("fancybox",a.extend({content:b[k]},g));o=jQuery.merge(o,b)}else{if(typeof b=="object")a(b).data("fancybox",
a.extend({},g,b));else b=a({}).data("fancybox",a.extend({content:b},g));o.push(b)}if(q>o.length||q<0)q=0;H()}};a.fancybox.showActivity=function(){clearInterval(K);t.show();K=setInterval(Z,66)};a.fancybox.hideActivity=function(){t.hide()};a.fancybox.next=function(){return a.fancybox.pos(p+1)};a.fancybox.prev=function(){return a.fancybox.pos(p-1)};a.fancybox.pos=function(b){if(!i){b=parseInt(b);o=l;if(b>-1&&b<l.length){q=b;H()}else if(c.cyclic&&l.length>1){q=b>=l.length?0:l.length-1;H()}}};a.fancybox.cancel=
function(){if(!i){i=true;a.event.trigger("fancybox-cancel");N();e.onCancel(o,q,e);i=false}};a.fancybox.close=function(){function b(){u.fadeOut("fast");n.empty().hide();f.hide();a.event.trigger("fancybox-cleanup");h.empty();c.onClosed(l,p,c);l=e=[];p=q=0;c=e={};i=false}if(!(i||f.is(":hidden"))){i=true;if(c&&false===c.onCleanup(l,p,c))i=false;else{N();a(E.add(z).add(A)).hide();a(h.add(u)).unbind();a(window).unbind("resize.fb scroll.fb");a(document).unbind("keydown.fb");h.find("iframe").attr("src",M&&
/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");c.titlePosition!=="inside"&&n.empty();f.stop();if(c.transitionOut=="elastic"){r=V();var d=f.position();j={top:d.top,left:d.left,width:f.width(),height:f.height()};if(c.opacity)j.opacity=1;n.empty().hide();B.prop=1;a(B).animate({prop:0},{duration:c.speedOut,easing:c.easingOut,step:S,complete:b})}else f.fadeOut(c.transitionOut=="none"?0:c.speedOut,b)}}};a.fancybox.resize=function(){u.is(":visible")&&u.css("height",a(document).height());
a.fancybox.center(true)};a.fancybox.center=function(b){var d,g;if(!i){g=b===true?1:0;d=T();!g&&(f.width()>d[0]||f.height()>d[1])||f.stop().animate({top:parseInt(Math.max(d[3]-20,d[3]+(d[1]-h.height()-40)*0.5-c.padding)),left:parseInt(Math.max(d[2]-20,d[2]+(d[0]-h.width()-40)*0.5-c.padding))},typeof b=="number"?b:200)}};a.fancybox.init=function(){if(!a("#fancybox-wrap").length){a("body").append(m=a('<div id="fancybox-tmp"></div>'),t=a('<div id="fancybox-loading"><div></div></div>'),u=a('<div id="fancybox-overlay"></div>'),
f=a('<div id="fancybox-wrap"></div>'));D=a('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
D.append(h=a('<div id="fancybox-content"></div>'),E=a('<a id="fancybox-close"></a>'),n=a('<div id="fancybox-title"></div>'),z=a('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),A=a('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));E.click(a.fancybox.close);t.click(a.fancybox.cancel);z.click(function(b){b.preventDefault();a.fancybox.prev()});A.click(function(b){b.preventDefault();a.fancybox.next()});
a.fn.mousewheel&&f.bind("mousewheel.fb",function(b,d){b.preventDefault();a.fancybox[d>0?"prev":"next"]()});a.support.opacity||f.addClass("fancybox-ie");if(M){t.addClass("fancybox-ie6");f.addClass("fancybox-ie6");a('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)}}};a.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,
scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,
enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};a(document).ready(function(){a.fancybox.init()})})(jQuery);;
/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.0.3 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2014, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
!function(a){"use strict";function b(a,c){if(!(this instanceof b)){var d=new b(a,c);return d.open(),d}this.id=b.id++,this.setup(a,c),this.chainCallbacks(b._callbackChain)}if("undefined"==typeof a)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));var c=function(a){if(!a.isDefaultPrevented()){var c=b.current();c&&c.onKeyDown(a)}};b.prototype={constructor:b,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",otherClose:null,beforeOpen:a.noop,beforeContent:a.noop,beforeClose:a.noop,afterOpen:a.noop,afterContent:a.noop,afterClose:a.noop,onKeyDown:a.noop,type:null,contentFilters:["jquery","image","html","ajax","text"],setup:function(b,c){"object"!=typeof b||b instanceof a!=!1||c||(c=b,b=void 0);var d=a.extend(this,c,{target:b}),e=d.resetCss?d.namespace+"-reset":d.namespace,f=a(d.background||['<div class="'+e+'">','<div class="'+e+'-content">','<span class="'+e+"-close-icon "+d.namespace+'-close">',d.closeIcon,"</span>",'<div class="'+d.namespace+'-inner"></div>',"</div>","</div>"].join("")),g="."+d.namespace+"-close"+(d.otherClose?","+d.otherClose:"");return d.$instance=f.clone().addClass(d.variant),d.$instance.on(d.closeTrigger+"."+d.namespace,function(b){var c=a(b.target);("background"===d.closeOnClick&&c.is("."+d.namespace)||"anywhere"===d.closeOnClick||c.is(g))&&(b.preventDefault(),d.close())}),this},getContent:function(){var b=this,c=this.constructor.contentFilters,d=function(a){return b.$currentTarget&&b.$currentTarget.attr(a)},e=d(b.targetAttr),f=b.target||e||"",g=c[b.type];if(!g&&f in c&&(g=c[f],f=b.target&&e),f=f||d("href")||"",!g)for(var h in c)b[h]&&(g=c[h],f=b[h]);if(!g){var i=f;if(f=null,a.each(b.contentFilters,function(){return g=c[this],g.test&&(f=g.test(i)),!f&&g.regex&&i.match&&i.match(g.regex)&&(f=i),!f}),!f)return"console"in window&&window.console.error("Featherlight: no content filter found "+(i?' for "'+i+'"':" (no target specified)")),!1}return g.process.call(b,f)},setContent:function(b){var c=this;return(b.is("iframe")||a("iframe",b).length>0)&&c.$instance.addClass(c.namespace+"-iframe"),c.$content=b.addClass(c.namespace+"-inner"),c.$instance.find("."+c.namespace+"-inner").slice(1).remove().end().replaceWith(c.$content),c},open:function(d){var e=this;if(!(d&&d.isDefaultPrevented()||e.beforeOpen(d)===!1)){d&&d.preventDefault();var f=e.getContent();if(f)return e.constructor._opened.add(e._openedCallback=function(a,b){e instanceof a&&e.$instance.closest("body").length>0&&(b.currentFeatherlight=e)}),b._keyHandlerInstalled||(a(document).on("keyup."+b.prototype.namespace,c),b._keyHandlerInstalled=!0),e.$instance.appendTo(e.root).fadeIn(e.openSpeed),e.beforeContent(d),a.when(f).done(function(b){e.setContent(b),e.afterContent(d),a.when(e.$instance.promise()).done(function(){e.afterOpen(d)})}),e}return!1},close:function(d){var e=this;return e.beforeClose(d)===!1?!1:(e.constructor._opened.remove(e._openedCallback),b.current()||(a(document).off("keyup."+b.namespace,c),e.constructor._keyHandlerInstalled=!1),void e.$instance.fadeOut(e.closeSpeed,function(){e.$instance.detach(),e.afterClose(d)}))},chainCallbacks:function(b){for(var c in b)this[c]=a.proxy(b[c],this,a.proxy(this[c],this))}},a.extend(b,{id:0,autoBind:"[data-featherlight]",defaults:b.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(b){return b instanceof a&&b},process:function(b){return a(b).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp)(\?\S*)?$/i,process:function(b){var c=this,d=a.Deferred(),e=new Image;return e.onload=function(){d.resolve(a('<img src="'+b+'" alt="" class="'+c.namespace+'-image" />'))},e.onerror=function(){d.reject()},e.src=b,d.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(b){return a(b)}},ajax:{regex:/./,process:function(b){var c=a.Deferred(),d=a("<div></div>").load(b,function(a,b){"error"!==b&&c.resolve(d.contents()),c.fail()});return c.promise()}},text:{process:function(b){return a("<div>",{text:b})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(b){var c=this,d={};return b&&b.attributes&&a.each(b.attributes,function(){var b=this.name.match(/^data-featherlight-(.*)/);if(b){var e=this.value,f=a.camelCase(b[1]);if(a.inArray(f,c.functionAttributes)>=0)e=new Function(e);else try{e=a.parseJSON(e)}catch(g){}d[f]=e}}),d},extend:function(b,c){var d=function(){this.constructor=b};return d.prototype=this.prototype,b.prototype=new d,b.__super__=this.prototype,a.extend(b,this,c),b.defaults=b.prototype,b},attach:function(b,c,d){var e=this;"object"!=typeof c||c instanceof a!=!1||d||(d=c,c=void 0),d=a.extend({},d);var f=a.extend({},e.defaults,e.readElementConfig(b[0]),d);return b.on(f.openTrigger+"."+f.namespace,f.filter,function(f){var g=a.extend({$source:b,$currentTarget:a(this)},e.readElementConfig(b[0]),e.readElementConfig(this),d);new e(c,g).open(f)}),b},current:function(){var a={};return this._opened.fire(this,a),a.currentFeatherlight},close:function(){var a=this.current();a&&a.close()},_onReady:function(){var b=this;b.autoBind&&(b.attach(a(document),{filter:b.autoBind}),a(b.autoBind).filter("[data-featherlight-filter]").each(function(){b.attach(a(this))}))},_callbackChain:{onKeyDown:function(a,b){return 27===b.keyCode&&this.closeOnEsc?(this.$instance.find("."+this.namespace+"-close:first").click(),void b.preventDefault()):(console.log("pass"),a(b))}},_opened:a.Callbacks()}),a.featherlight=b,a.fn.featherlight=function(a,c){return b.attach(this,a,c)},a(document).ready(function(){b._onReady()})}(jQuery);;
