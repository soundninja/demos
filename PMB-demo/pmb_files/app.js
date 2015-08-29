jQuery(document).ready(function ($) {
	"use strict";
	
	var navpos = $('.header-block').offset();
  console.log(navpos.top);
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > navpos.top) {
        $('.header-block').addClass('fixed');
       }
       else {
         $('.header-block').removeClass('fixed');
       }
    });

	jQuery("ul#nav").tinyNav({header: 'Navigation'});

	$('.inside_single a').has('img').addClass('lightbox');
	$(".inside_single a[class^='lightbox']").lightbox();
	$('.inside_single a').has('img').attr('rel', 'lightbox'); 
	$('.inside_single a').click(function () {
		var desc = $(this).attr('title');
		$('.inside_single a').has('img').attr('title', desc, 'rel', 'lightbox' ); 
	});
	$(".inside_single a.lightbox").lightbox();

	jQuery(".gallery_widget_posts").owlCarousel({
		items : 1,
		singleItem:true,
		navigation : true, 
		navigationText : ["",""],
		pagination : false
	});
	jQuery(".col-md-6 #owl-related").owlCarousel({
		items : 2,
		navigation : true, 
		navigationText : ["",""],
		pagination : false, 
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [471,2] 
	});
	jQuery(".col-md-10 #owl-related").owlCarousel({
		items : 4,
		navigation : true, 
		navigationText : ["",""],
		pagination : false, 
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [471,2] 
	});

	// Tabs widget
	(function() {
		var $tabsNav       = $('.T20-tabs-nav'),
			$tabsNavLis    = $tabsNav.children('li'),
			$tabsContainer = $('.T20-tabs-container');

		$tabsNav.each(function() {
			var $this = $(this);
			$this.next().children('.T20-tab').stop(true,true).hide()
			.siblings( $this.find('a').attr('href') ).show();
			$this.children('li').first().addClass('active').stop(true,true).show();
		});

		$tabsNavLis.on('click', function(e) {
			var $this = $(this);

			$this.siblings().removeClass('active').end()
			.addClass('active');
			
			$this.parent().next().children('.T20-tab').stop(true,true).hide()
			.siblings( $this.find('a').attr('href') ).fadeIn();
			e.preventDefault();
		}).children( window.location.hash ? 'a[href=' + window.location.hash + ']' : 'a:first' ).trigger('click');

	})();

	jQuery('#nav .dropdown-menu').each(function() {
		jQuery(this).prev('a').addClass('dropdown-toggle');
		jQuery(this).prev('a').attr('data-toggle', 'dropdown');
		jQuery(this).prev('a').append(' <i class="fa fa-chevron-down"></i>');
	});
	jQuery('#nav .sub-menu').each(function() {
		jQuery(this).parent().addClass('tt_drop');
		jQuery(this).prev('a').addClass('dropdown-toggle');
		jQuery(this).prev('a').attr('data-toggle', 'dropdown');
		jQuery(this).prev('a').append(' <i class="fa fa-chevron-down"></i>');
		jQuery(this).addClass('dropdown-menu features');
		jQuery('dropdown-menu features').removeClass('sub-menu');
	});
	jQuery(".social-icons a, abbr").tooltip();
	jQuery('input[type=text], input[type=email], textarea').placeholder();
	jQuery(document).on('click', '.yamm .dropdown-menu', function(e) { 
		e.stopPropagation()  
	});

	jQuery('[rel="lightbox"]').lightbox();

	var msie6 = $.browser == 'msie' && $.browser.version < 7;
	if (!msie6 && $('.share_post').offset()!=null) {
		var top = $('.share_post').offset().top - parseFloat($('.share_post').css('margin-bottom').replace(/auto/, 0));
		var height = $('.share_post').height();

		var footerTop = $('#comments').offset().top - parseFloat($('#comments').css('margin-top').replace(/auto/, 0));
		var gap = 7;
		$(window).scroll(function (event) {
			var y = $(this).scrollTop();
			if (y+height >= top+ height+gap && y+height<=footerTop) {
				$('.share_post').addClass('share_postfixed').css('top',height-height-gap +'px');
			} else if (y+height>footerTop) {
				$('.share_post').addClass('share_postfixed').css('top',footerTop-height-y-gap+'px');
			} else {
				$('.share_post').removeClass('share_postfixed').css('top','0px');
			}
		});
	}

		    var sync1 = jQuery("#sync1");
		    var sync2 = jQuery("#sync2");
		     
		    sync1.owlCarousel({
			    singleItem : true,
			    slideSpeed : 1000,
			    navigation: true,
			    navigationText : ["",""],
			    pagination: true,
			    afterAction : syncPosition,
			    responsiveRefreshRate : 200,
		    });
		     
		    sync2.owlCarousel({
			    itemsDesktop : [1199,3],
			    itemsDesktopSmall : [979,3],
			    itemsTablet : [768,3],
			    itemsMobile : [407,2],
			    pagination: false,
			    responsiveRefreshRate : 100,
			    afterInit : function(el){
			    el.find(".owl-item").eq(0).addClass("synced");
		    }
		    });
		     
		    function syncPosition(el){
			    var current = this.currentItem;
			    jQuery("#sync2")
			    .find(".owl-item")
			    .removeClass("synced")
			    .eq(current)
			    .addClass("synced")
			    if(jQuery("#sync2").data("owlCarousel") !== undefined){
			    	center(current)
			    }
		    }
		     
		    jQuery("#sync2").on("click", ".owl-item", function(e){
			    e.preventDefault();
			    var number = jQuery(this).data("owlItem");
			    sync1.trigger("owl.goTo",number);
		    });
		     
		    function center(number){
		    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		    var num = number;
		    var found = false;
		    for(var i in sync2visible){
			    if(num === sync2visible[i]){
			    	var found = true;
			    }
		    }
		     
		    if(found===false){
			    if(num>sync2visible[sync2visible.length-1]){
			    	sync2.trigger("owl.goTo", num - sync2visible.length+2)
			    }else{
				    if(num - 1 === -1){
				    	num = 0;
				    }
			    	sync2.trigger("owl.goTo", num);
			    }
			    } else if(num === sync2visible[sync2visible.length-1]){
			    	sync2.trigger("owl.goTo", sync2visible[1])
			    } else if(num === sync2visible[0]){
			    	sync2.trigger("owl.goTo", num-1)
			    }
		    }

});

/* PhotoStream */ (function(e){e.fn.extend({photostream_widget:function(t){function r(t,n,r,i){var s=t.feed;if(!s){return false}var o="";o+="<ul>";for(var u=0;u<s.entries.length;u++){var a=s.entries[u];var f=a.content;o+="<li>"+f+'<div class="clearboth"></div></li>'}o+="</ul>";n.removeClass("photostream");n.html(o);n.find("li").each(function(){pin_img_src=e(this).find("img").attr("src");pin_img_src=pin_img_src.replace("_b.jpg","_c.jpg");pin_url="http://www.pinterest.com"+e(this).find("a").attr("href");pin_desc=e(this).find("p:nth-child(2)").html();pin_desc=pin_desc.replace("'","`");e(this).empty();e(this).append('<div class="pinterest-widget-img"><img src="'+pin_img_src+'" alt="'+pin_desc+'"><div class="pinterest-item-overlay"><a target="_blank" href="'+pin_url+'" class="pinterest-widget-permalink"></a><a href="'+pin_img_src+'" class="mk-pinterest-lightbox pinterest-widget-zoom" rel="'+n.attr("id")+'"></a></div></div>');e(this).append("<a class='pinterest-widget-title' target='_blank' href='"+pin_url+"' title='"+pin_desc+"'>"+pin_desc+"</a>")})}var n={user:"artbees",limit:10,social_network:"instagram"};var t=e.extend(n,t);return this.each(function(){var n=t;var r=e(this);if(n.social_network=="instagram"){r.append("<ul></ul>");var i="15317038.22c41e6.6c58236d21254b12a6de0a9c4ebd6787";url="https://api.instagram.com/v1/users/search?q="+n.user+"&access_token="+i+"&count=10&callback=?";e.getJSON(url,function(t){e.each(t.data,function(t,s){var u=s.username;if(u==n.user){var a=s.id;if(a!=""){url="https://api.instagram.com/v1/users/"+a+"/media/recent/?access_token="+i+"&count="+n.limit+"&callback=?";e.getJSON(url,function(t){e.each(t.data,function(t,n){var i=n.images.thumbnail.url;var s=n.link;var o="";if(n.caption!=null){o=n.caption.text}var u=e("<img/>").attr({src:i,alt:o});var a=e("<a/>").attr({href:s,target:"_blank",title:o});var f=e(a).append(u);var l=e("<li/>").append(f);e("ul",r).append(l)})})}}})})}})}})})(jQuery);
/* Scroll */ (function(){function c(){var e=false;if(e){N("keydown",y)}if(t.keyboardSupport&&!e){T("keydown",y)}}function h(){if(!document.body)return;var e=document.body;var i=document.documentElement;var a=window.innerHeight;var f=e.scrollHeight;o=document.compatMode.indexOf("CSS")>=0?i:e;u=e;c();s=true;if(top!=self){r=true}else if(f>a&&(e.offsetHeight<=a||i.offsetHeight<=a)){i.style.height="auto";setTimeout(refresh,10);if(o.offsetHeight<=a){var l=document.createElement("div");l.style.clear="both";e.appendChild(l)}}if(!t.fixedBackground&&!n){e.style.backgroundAttachment="scroll";i.style.backgroundAttachment="scroll"}}function m(e,n,r,i){i||(i=1e3);k(n,r);if(t.accelerationMax!=1){var s=+(new Date);var o=s-v;if(o<t.accelerationDelta){var u=(1+30/o)/2;if(u>1){u=Math.min(u,t.accelerationMax);n*=u;r*=u}}v=+(new Date)}p.push({x:n,y:r,lastX:n<0?.99:-.99,lastY:r<0?.99:-.99,start:+(new Date)});if(d){return}var a=e===document.body;var f=function(s){var o=+(new Date);var u=0;var l=0;for(var c=0;c<p.length;c++){var h=p[c];var v=o-h.start;var m=v>=t.animationTime;var g=m?1:v/t.animationTime;if(t.pulseAlgorithm){g=D(g)}var y=h.x*g-h.lastX>>0;var b=h.y*g-h.lastY>>0;u+=y;l+=b;h.lastX+=y;h.lastY+=b;if(m){p.splice(c,1);c--}}if(a){window.scrollBy(u,l)}else{if(u)e.scrollLeft+=u;if(l)e.scrollTop+=l}if(!n&&!r){p=[]}if(p.length){M(f,e,i/t.frameRate+1)}else{d=false}};M(f,e,0);d=true}function g(e){if(!s){h()}var n=e.target;var r=x(n);if(!r||e.defaultPrevented||C(u,"embed")||C(n,"embed")&&/\.pdf/i.test(n.src)){return true}var i=e.wheelDeltaX||0;var o=e.wheelDeltaY||0;if(!i&&!o){o=e.wheelDelta||0}if(!t.touchpadSupport&&A(o)){return true}if(Math.abs(i)>1.2){i*=t.stepSize/120}if(Math.abs(o)>1.2){o*=t.stepSize/120}m(r,-i,-o);e.preventDefault()}function y(e){var n=e.target;var r=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==l.spacebar;if(/input|textarea|select|embed/i.test(n.nodeName)||n.isContentEditable||e.defaultPrevented||r){return true}if(C(n,"button")&&e.keyCode===l.spacebar){return true}var i,s=0,o=0;var a=x(u);var f=a.clientHeight;if(a==document.body){f=window.innerHeight}switch(e.keyCode){case l.up:o=-t.arrowScroll;break;case l.down:o=t.arrowScroll;break;case l.spacebar:i=e.shiftKey?1:-1;o=-i*f*.9;break;case l.pageup:o=-f*.9;break;case l.pagedown:o=f*.9;break;case l.home:o=-a.scrollTop;break;case l.end:var c=a.scrollHeight-a.scrollTop-f;o=c>0?c+10:0;break;case l.left:s=-t.arrowScroll;break;case l.right:s=t.arrowScroll;break;default:return true}m(a,s,o);e.preventDefault()}function b(e){u=e.target}function S(e,t){for(var n=e.length;n--;)w[E(e[n])]=t;return t}function x(e){var t=[];var n=o.scrollHeight;do{var i=w[E(e)];if(i){return S(t,i)}t.push(e);if(n===e.scrollHeight){if(!r||o.clientHeight+10<n){return S(t,document.body)}}else if(e.clientHeight+10<e.scrollHeight){overflow=getComputedStyle(e,"").getPropertyValue("overflow-y");if(overflow==="scroll"||overflow==="auto"){return S(t,e)}}}while(e=e.parentNode)}function T(e,t,n){window.addEventListener(e,t,n||false)}function N(e,t,n){window.removeEventListener(e,t,n||false)}function C(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function k(e,t){e=e>0?1:-1;t=t>0?1:-1;if(i.x!==e||i.y!==t){i.x=e;i.y=t;p=[];v=0}}function A(e){if(!e)return;e=Math.abs(e);f.push(e);f.shift();clearTimeout(L);var t=f[0]==f[1]&&f[1]==f[2];var n=O(f[0],120)&&O(f[1],120)&&O(f[2],120);return!(t||n)}function O(e,t){return Math.floor(e/t)==e/t}function _(e){var n,r,i;e=e*t.pulseScale;if(e<1){n=e-(1-Math.exp(-e))}else{r=Math.exp(-1);e-=1;i=1-Math.exp(-e);n=r+i*(1-r)}return n*t.pulseNormalize}function D(e){if(e>=1)return 1;if(e<=0)return 0;if(t.pulseNormalize==1){t.pulseNormalize/=_(1)}return _(e)}var e={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:true,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:true,arrowScroll:50,touchpadSupport:true,fixedBackground:true,excluded:""};var t=e;var n=false;var r=false;var i={x:0,y:0};var s=false;var o=document.documentElement;var u;var a;var f=[120,120,120];var l={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var t=e;var p=[];var d=false;var v=+(new Date);var w={};setInterval(function(){w={}},10*1e3);var E=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}();var L;var M=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)}}();var P=/chrome/i.test(window.navigator.userAgent);var H="onmousewheel"in document;if(H&&P){T("mousedown",b);T("mousewheel",g);T("load",h)}})();

