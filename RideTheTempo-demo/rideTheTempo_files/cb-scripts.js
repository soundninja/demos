/* global jQuery, cbScripts, cookie, 5.0.1 */
!function(e){"use strict"
var t=!!(navigator.userAgent.match(/Android/i)===!0||navigator.userAgent.match(/BlackBerry/i)===!0||navigator.userAgent.match(/iPhone|iPod|iPad|iWatch/i)||navigator.userAgent.match(/Motorola|DROIDX/i)||navigator.userAgent.match(/Linux/i)||navigator.userAgent.match(/IEMobile/i)===!0),a=!!(navigator.userAgent.match(/IEMobile/i)===!0||navigator.userAgent.match(/Android/i)===!0||navigator.userAgent.match(/BlackBerry/i)===!0||navigator.userAgent.match(/iPhone|iPod/i)||navigator.userAgent.match(/Motorola|DROIDX/i)||navigator.userAgent.match(/Linux/i)),i=e("body"),s=e(window),c=e(document),l=s.width(),n=s.height()+1,r=e("#cb-container"),o=e("#cb-content"),d=e("#cb-nav-bar"),b=e("#main"),f=!1,h=e("#cb-overlay"),m=r.find(".cb-sticky-sidebar"),u=m.find(".cb-sidebar"),g=u.css("padding-top"),p,v=0,C=0,w=0,x=0,y=e("#cb-blog-infinite-scroll"),k=!1,S=e("#cb-footer"),T,I=!1,D=!0,A=e(".cb-slider-b"),P,H,N=d.find(" > div"),O=N.find(" > ul li").first(),Y=e("#cb-s-trigger"),j=e("#cb-s-trigger-sm"),E=e("#cb-lwa"),M=e("#cb-lwa-trigger"),z=e("#cb-lwa-trigger-sm"),B=e("#cb-lwa-r-trigger"),L=E.find(".lwa-form"),U=L.find(".cb-form-input-username"),Q=!1,V=e(".cb-close-m").add(h),W=e("#cb-search-modal"),_=W.find("input"),F=e("#cb-icons-wrap"),G=e("#cb-review-container"),R=G.find(".cb-overlay span"),X=G.find(".cb-overlay-stars span"),q,J,K=e("#cb-top-menu"),Z=K.find(".cb-top-menu-wrap"),$=e("#cb-vote"),ee=e("#cb-full-background-featured"),te=e("#cb-parallax-featured"),ae=te.find(".cb-image"),ie=e("#cb-parallax-bg"),se=e("#cb-mob-open"),ce=e("#cb-mob-close"),le,ne=e(".flexslider-1-fw"),re=e(".flexslider-1"),oe=e("#cb-to-top"),de,be=!1,fe=e("#cb-nav-logo"),V=e(".cb-close-m").add(h)
i.hasClass("rtl")&&(Q=!0),d.length&&(l>767&&(H=N.outerHeight()),d.css("height",H),F.add(fe).css("height",O.outerHeight())),i.hasClass("admin-bar")&&(f=!0),A.each(function(){var t=e(this)
t.hasClass("cb-module-fw")||t.hasClass("cb-full-slider")?t.find(".slides > li").css("height",t.width()/2.3076923):t.hasClass("cb-slider-widget")?t.find(".slides > li").css("height",t.width()/1.5925925):t.find(".slides > li").css("height",t.width()/1.876923)}),se.click(function(e){e.preventDefault(),i.addClass("cb-mob-op")}),ce.click(function(e){e.preventDefault(),i.removeClass("cb-mob-op")}),M.click(function(e){e.preventDefault(),i.addClass("cb-lwa-modal-on"),t===!1&&U.focus()}),B.click(function(e){e.preventDefault(),i.addClass("cb-lwa-r-modal-on")}),z.click(function(e){e.preventDefault(),i.addClass("cb-lwa-modal-on"),t===!1&&U.focus()}),V.click(function(){i.removeClass("cb-lwa-modal-on cb-lwa-r-modal-on cb-s-modal-on cb-m-modal-on cb-m-em-modal-on"),Ee()}),c.keyup(function(e){27==e.keyCode&&(i.removeClass("cb-lwa-modal-on cb-lwa-r-modal-on cb-s-modal-on cb-m-modal-on cb-m-em-modal-on"),Ee())}),Y.click(function(e){e.preventDefault(),i.addClass("cb-s-modal-on"),t===!1&&_.focus()}),j.click(function(e){e.preventDefault(),i.addClass("cb-s-modal-on"),t===!1&&_.focus()})
function he(){p=f===!0?l>781?s.scrollTop()+32:s.scrollTop()+46:s.scrollTop(),me()}function me(){k||(requestAnimationFrame(ge),k=!0)}function ue(){I===!1&&(ge(),ge(),I=!0)}function ge(){if(i.hasClass("cb-sticky-mm")&&(i.hasClass("cb-sticky-menu-up")?(p>=q&&v>p?i.addClass("cb-stuck"):i.removeClass("cb-stuck"),p>=q+H+80?i.addClass("cb-stuck-hid"):i.removeClass("cb-stuck-hid"),v=p):p>=q?i.addClass("cb-stuck"):i.removeClass("cb-stuck")),l>767&&t===!1&&m.length){var a=m.offset().top,s=u.outerHeight(!0),c=S.offset().top,r=a+s,o=n+p,d=e("#cb-outer-container").css("margin-top"),h=0
f===!0&&(o-=32),"0px"!=d&&(h=parseFloat(d)),u.hasClass("cb-sidebar-hp")&&(a-=60),be===!1&&(T=s,be=!0),s>T&&(T=s,r=a+s,w=r),T>n?(m.css("height",T),i.removeClass("cb-stuck-sb-t"),i.hasClass("cb-stuck-sb")?(!S.visible(!0)&&c>p?(i.removeClass("cb-footer-vis"),u.css("top","auto")):(i.addClass("cb-footer-vis"),u.css("top",c-T-h+"px")),w>o&&i.removeClass("cb-stuck-sb")):(o>r&&c>p&&p>a&&(i.addClass("cb-stuck-sb"),w=r),o>c&&i.addClass("cb-footer-vis"))):(f===!0?(P=H+32,x=a-parseInt(g,10)-H+32):(P=H,x=a-parseInt(g,10)-H),m.css("height",T),i.hasClass("cb-stuck-sb")?(c>o-(n-T)?(i.removeClass("cb-footer-vis"),i.hasClass("cb-stuck")?u.css("top",P):u.css("top","0")):(i.addClass("cb-footer-vis"),u.css("top",c-T+"px")),x>p&&(i.removeClass("cb-stuck-sb cb-stuck-sb-t"),i.hasClass("cb-stuck")?u.css("top",P):u.css("top","0"))):(i.hasClass("cb-stuck")&&!i.hasClass("cb-fis-big-block")&&u.css("top",P),p>=x&&(i.addClass("cb-stuck-sb cb-stuck-sb-t"),i.hasClass("cb-fis-big-block")&&u.css("top",P))))}if(i.hasClass("cb-m-sticky")&&768>l){var C=K.offset().top
p-e("#wpadminbar").outerHeight(!0)>C?i.addClass("cb-tm-stuck"):i.removeClass("cb-tm-stuck")}if(0!==ae.length&&t===!1)if(n>p){i.removeClass("cb-par-hidden"),f===!0&&(p-=32)
var I=p/2,A=I+"px"
e("#cb-par-wrap img").css({"-webkit-transform":"translate3d(0, "+A+", 0)",transform:"translate3d(0, "+A+", 0)"})}else i.addClass("cb-par-hidden")
if(y.length&&D===!0){var N=e("#main").children().last(),O=e("#main").children().first().hasClass("cb-category-top"),Y=N.attr("id"),j=N.prev()
if("cb-blog-infinite-scroll"===Y&&j.visible(!0)){D=!1
var E=e("#cb-blog-infinite-scroll").find("a").attr("href")
b.addClass("cb-loading"),e.get(E,function(t){var a,i
O===!0?(i=e(t).filter("#cb-outer-container").find("#main"),e(i).find(".cb-category-top").remove(),a=i.html()):a=e(t).filter("#cb-outer-container").find("#main").html(),e("#main").children().last().remove(),e("#main").append(a),b.removeClass("cb-loading")})}}p>750&&l>768?i.addClass("cb-to-top-vis"):i.removeClass("cb-to-top-vis"),k=!1}if(window.addEventListener?window.addEventListener("scroll",he,!1):window.attachEvent("scroll",he),e.each(R,function(t,a){var i=e(a)
i.visible(!0)&&(i.removeClass("cb-zero-trigger"),i.addClass("cb-bar-ani"))}),e.each(X,function(t,a){var i=e(a)
i.visible(!0)&&(i.removeClass("cb-zero-stars-trigger"),i.addClass("cb-bar-ani-stars"))}),s.scroll(function(t){e.each(R,function(t,a){var i=e(a)
i.visible(!0)&&i.hasClass("cb-zero-trigger")&&(i.removeClass("cb-zero-trigger"),i.addClass("cb-bar-ani"))}),e.each(X,function(t,a){var i=e(a)
i.visible(!0)&&i.hasClass("cb-zero-stars-trigger")&&(i.removeClass("cb-zero-stars-trigger"),i.addClass("cb-bar-ani-stars"))})}),jQuery(document).ready(function(e){i.hasClass("admin-bar")&&!e("#wpadminbar").length&&(f=!1,i.addClass("cb-no-admin-bar")),d.length&&l>767&&(q=d.offset().top),e(".hentry").find("a").has("img").each(function(){var t=e("img",this).attr("title"),a=e(this).attr("href"),i=e(this).attr("rel")
if(void 0!==t&&e(this).attr("title",t),void 0!==a&&"prettyPhoto[product-gallery]"!==i){var s=a.split("."),c=e(s)[e(s).length-1];("jpg"===c||"jpeg"===c||"png"===c||"gif"===c||"tif"===c)&&e(this).addClass("cb-lightbox")}}),e(".tiled-gallery").find("a").attr("rel","tiledGallery"),e(".gallery").find("a").attr("rel","tiledGallery")
var t=e("#main"),a=t.find("iframe")
a.each(function(){var t=e(this).attr("src")
t&&(t.indexOf("yout")>-1||t.indexOf("vimeo")>-1||t.indexOf("daily")>-1)&&e(this).wrap('<div class="cb-video-frame"></div>')}),e.prototype.boxer&&e(".cb-lightbox").boxer({duration:350,fixed:!0}),e(".cb-toggler").find(".cb-toggle").click(function(t){e(this).next().stop().slideToggle(),e(this).prev().stop().toggle(),e(this).prev().prev().stop().toggle(),t.preventDefault()})
var s=o.first(".cb-grid-block")
e(s).imagesLoaded(function(){i.addClass("cb-imgs-loaded")}),e(window).load(function(){ue()
var t=e(".tabbernav"),a=t.children().length
4===a&&t.addClass("cb-fourtabs"),3===a&&t.addClass("cb-threetabs"),2===a&&t.addClass("cb-twotabs"),1===a&&t.addClass("cb-onetab")}),e(".cb-module-half:odd").each(function(){e(this).prev().addBack().wrapAll(e("<div/>",{"class":"cb-double-block clearfix"}))}),re.flexslider({animation:"slide",itemWidth:280,itemMargin:3,pauseOnHover:!0,maxItems:3,minItems:1,controlNav:!1,slideshow:cbScripts.cbSlider[1],slideshowSpeed:cbScripts.cbSlider[2],animationSpeed:cbScripts.cbSlider[0],nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),ne.flexslider({animation:"slide",itemWidth:280,itemMargin:3,pauseOnHover:!0,maxItems:4,minItems:1,controlNav:!1,slideshow:cbScripts.cbSlider[1],slideshowSpeed:cbScripts.cbSlider[2],animationSpeed:cbScripts.cbSlider[0],nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),e("#cb-carousel").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,directionlNav:!0,itemWidth:150,itemMargin:15,asNavFor:"#cb-gallery",nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),e("#cb-gallery").flexslider({animation:"slide",controlNav:!1,directionlNav:!1,animationLoop:!1,slideshow:!1,sync:"#cb-carousel",nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),e(".flexslider-1-menu").flexslider({animation:"slide",itemWidth:210,itemMargin:3,slideshow:!1,pauseOnHover:!0,maxItems:2,minItems:1,controlNav:!1,nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),e(".flexslider-2").flexslider({animation:"slide",minItems:1,pauseOnHover:!0,maxItems:1,controlNav:!1,slideshow:cbScripts.cbSlider[1],slideshowSpeed:cbScripts.cbSlider[2],animationSpeed:cbScripts.cbSlider[0],nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),e(".flexslider-2-fw").flexslider({animation:"slide",pauseOnHover:!0,minItems:1,maxItems:1,controlNav:!1,slideshow:cbScripts.cbSlider[1],slideshowSpeed:cbScripts.cbSlider[2],animationSpeed:cbScripts.cbSlider[0],nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),e("#messages_search").removeAttr("placeholder")
var n=e(".main-nav li")
e(".main-nav > li").hoverIntent(function(){e(this).find(".cb-big-menu").stop().slideDown("fast"),e(this).find(".cb-mega-menu").stop().slideDown("fast"),e(this).find(".cb-links-menu .cb-sub-menu").stop().fadeIn()},function(){e(this).find(".cb-big-menu").slideUp("fast"),e(this).find(".cb-mega-menu").slideUp("fast"),e(this).find(".cb-links-menu .cb-sub-menu").fadeOut()}),n.find(".cb-big-menu .cb-sub-menu li").hoverIntent(function(){e(this).find("> .cb-grandchild-menu").stop().slideDown("fast")},function(){e(this).find("> .cb-grandchild-menu").slideUp("fast")}),n.find(".cb-links-menu .cb-sub-menu li").hoverIntent(function(){e(this).children(".cb-grandchild-menu").stop().fadeIn()},function(){e(this).children(".cb-grandchild-menu").fadeOut()})
var r=e(".cb-accordion > span").hide()
e(".cb-accordion > a").click(function(){return"none"==e(this).next().css("display")?(r.slideUp("fast"),e(this).next().slideDown("fast")):e(this).next().slideUp("fast"),!1}),oe.click(function(t){e("html, body").animate({scrollTop:0},600),t.preventDefault()}),e(".cb-video-frame").fitVids(),e(".cb-tabs").find("> ul").tabs(".cb-panes .cb-tab-content"),e("#cb-ticker").totemticker({row_height:"33px",mousestop:!0})
var b=e("#cb-vote").find(".cb-overlay"),h=e("#cb-vote").find(".cb-overlay-stars")
b.length?e(b).on("click",function(){e(b).tipper({direction:"bottom"})}):h.length&&e(h).on("click",function(){e(h).tipper({direction:"bottom"})}),e(".cb-tip-bot").tipper({direction:"bottom"}),e(".cb-tip-top").tipper({direction:"top"}),e(".cb-tip-right").tipper({direction:"right"}),e(".cb-tip-left").tipper({direction:"left"}),c.ajaxStop(function(){D=!0,e(".cb-pro-load").removeClass("cb-pro-load")}),o.on("click","#cb-blog-infinite-load a",function(a){a.preventDefault()
var i=e(this).attr("href"),s=e(this).parent()
t.addClass("cb-loading"),e.get(i,function(a){var i,c,l=e("#main").children().first().hasClass("cb-category-top")
l===!0?(c=e(a).filter("#cb-outer-container").find("#main"),e(c).find(".cb-category-top").remove(),i=c.html()):i=e(a).filter("#cb-outer-container").find("#main").html(),e("#main").append(i),t.removeClass("cb-loading"),s.addClass("cb-hidden")})}),e(".cb-c-l").hoverIntent(function(){var t=e(this),a=e(this).text(),i=t.closest("div")
if(i.hasClass("cb-big-menu")){var s=t.attr("data-cb-c"),c=t.attr("href"),l=e(i[0].firstChild),n=l.find(".cb-recent > ul")
e.ajax({type:"GET",data:{action:"cb_mm_a",cid:s,acall:1},url:cbScripts.cbUrl,beforeSend:function(){l.addClass("cb-pro-load")},success:function(t){n.html(e(t))},error:function(e,t,a){console.log("cbmm "+e+" :: "+t+" :: "+a)}})}},function(){})}),ae.length>0&&t===!1){var pe=te.offset().top
le=n-pe-90,ie.css("height",n),te.css("height",le)}ee.length>0&&(le=a===!0?n-ee.offset().top:n-ee.offset().top-80,ee.css("height",le))
var ve=e("#cb-full-background-featured"),Ce=!0,we=!0
0===ve.length&&(ve=e("#cb-full-width-featured"),Ce=!1),0===ve.length&&(ve=e("#cb-parallax-featured"),Ce=!0)
var xe=ve.find(".cb-title-fi"),ye=xe.height()
i.hasClass("cb-fis-tl-overlay")&&(ye=0)
var ke=e("#cb-media-overlay"),Se=e("#cb-m-trigger"),Te=ke.find('iframe[src^="//player.vimeo"]'),Ie=jQuery("#cbplayer"),De=e("#cb-fis-wrap")
Se.click(function(e){e.preventDefault(),i.addClass(Se.hasClass("cb-lb")?"cb-m-modal-on":"cb-m-em-modal-on"),je()})
var Ae=De.width(),Pe=.9*(le-ye),He=(le-Pe-ye)/2,Ne=560*Pe/315,Oe
Ne>Ae?(Ne=Ae-20,Oe=10):Oe=(Ae-Ne)/2,we===!0&&(Te.attr("src",Te.attr("src")+"?autoplay=1"),we=!1),"undefined"===He||ke.hasClass("cb-audio-overlay")||ke.css({top:He,height:Pe,width:Ne,"margin-left":Oe}),s.resize(function(){l=s.width(),n=s.height()+1,d.length&&(d.css("height",""),F.css("height",""),l>767&&(H=N.outerHeight()),d.css("height",H),F.add(fe).css("height",O.outerHeight())),767>l&&m.css("height","auto"),ae.length>0&&t===!1&&(pe=te.offset().top,le=n-pe-90,ie.css("height",n),te.css("height",le)),ee.length>0&&(le=a===!0?n-ee.offset().top:n-ee.offset().top-80,ee.css("height",le)),Ae=De.width(),Pe=.9*(le-ye),He=(le-Pe-ye)/2,Ne=560*Pe/315,Ne>Ae?(Ne=Ae-20,Oe=10):Oe=(Ae-Ne)/2,we===!0&&(Te.attr("src",Te.attr("src")+"?autoplay=1"),we=!1),"undefined"===He||ke.hasClass("cb-audio-overlay")||ke.css({top:He,height:Pe,width:Ne,"margin-left":Oe}),A.each(function(){var t=e(this)
t.hasClass("cb-module-fw")||t.hasClass("cb-full-slider")?t.find(".slides > li").css("height",t.width()/2.3076923):t.hasClass("cb-slider-widget")?t.find(".slides > li").css("height",t.width()/1.5925925):t.find(".slides > li").css("height",t.width()/1.876923)}),ne.length&&ne.flexslider(1),re.length&&re.flexslider(1)})
var Ye=jQuery("#cb-yt-player")
function je(){t===!1&&Ye.length>0&&cbYTPlayerHolder.playVideo()}function Ee(){t===!1&&Ye.length>0&&cbYTPlayerHolder.pauseVideo()}}(jQuery)
var cbYTPlayerHolder,CbYTPlayer=jQuery("#cb-yt-player"),cbYouTubeVideoID=CbYTPlayer.text()
if(CbYTPlayer.length>0){var tag=document.createElement("script")
tag.src="//www.youtube.com/iframe_api"
var firstScriptTag=document.getElementsByTagName("script")[0]
firstScriptTag.parentNode.insertBefore(tag,firstScriptTag)}function onYouTubeIframeAPIReady(){CbYTPlayer.length>0&&(cbYTPlayerHolder=new YT.Player("cb-yt-player",{videoId:cbYouTubeVideoID}))}