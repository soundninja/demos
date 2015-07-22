(function(a){a.flexslider=function(b,c){var d=b;d.init=function(){d.vars=a.extend({},a.flexslider.defaults,c);d.data("flexslider",true);d.container=a(".slides",d);d.slides=a(".slides > li",d);d.count=d.slides.length;d.animating=false;d.currentSlide=d.vars.slideToStart;d.animatingTo=d.currentSlide;d.atEnd=d.currentSlide==0?true:false;d.eventType="ontouchstart"in document.documentElement?"touchstart":"click";d.cloneCount=0;d.cloneOffset=0;d.manualPause=false;d.vertical=d.vars.slideDirection=="vertical";d.prop=d.vertical?"top":"marginLeft";d.args={};if(d.transitions)d.prop="-webkit-transform";if(d.vars.controlsContainer!=""){d.controlsContainer=a(d.vars.controlsContainer);d.containerExists=d.controlsContainer.length>0}if(d.vars.manualControls!=""){d.manualControls=a(d.vars.manualControls,d.containerExists?d.controlsContainer:d);d.manualExists=d.manualControls.length>0}if(d.vars.randomize){d.slides.sort(function(){return Math.round(Math.random())-.5});d.container.empty().append(d.slides)}if(d.vars.animation.toLowerCase()=="slide"){if(d.transitions){d.setTransition(0)}d.css({overflow:"hidden"});if(d.vars.animationLoop){d.cloneCount=2;d.cloneOffset=1;d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))}d.newSlides=a(".slides > li",d);var b=-1*(d.currentSlide+d.cloneOffset);if(d.vertical){d.newSlides.css({display:"block",width:"100%","float":"left"});d.container.height((d.count+d.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){d.css({position:"relative"}).height(d.slides.filter(":first").height());d.args[d.prop]=d.transitions?"translate3d(0,"+b*d.height()+"px,0)":b*d.height()+"px";d.container.css(d.args)},100)}else{d.args[d.prop]=d.transitions?"translate3d("+b*d.width()+"px,0,0)":b*d.width()+"px";d.container.width((d.count+d.cloneCount)*200+"%").css(d.args);setTimeout(function(){d.newSlides.width(d.width()).css({"float":"left",display:"block"})},100)}}else{d.transitions=false;d.slides.css({width:"100%","float":"left",marginRight:"-100%"}).eq(d.currentSlide).fadeIn(d.vars.animationDuration)}if(d.vars.controlNav){if(d.manualExists){d.controlNav=d.manualControls}else{var e=a('<ol class="flex-control-nav"></ol>');var f=1;for(var g=0;g<d.count;g++){e.append("<li><a>"+f+"</a></li>");f++}if(d.containerExists){a(d.controlsContainer).append(e);d.controlNav=a(".flex-control-nav li a",d.controlsContainer)}else{d.append(e);d.controlNav=a(".flex-control-nav li a",d)}}d.controlNav.eq(d.currentSlide).addClass("active");d.controlNav.bind(d.eventType,function(b){b.preventDefault();if(!a(this).hasClass("active")){d.controlNav.index(a(this))>d.currentSlide?d.direction="next":d.direction="prev";d.flexAnimate(d.controlNav.index(a(this)),d.vars.pauseOnAction)}})}if(d.vars.directionNav){var h=a('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+d.vars.prevText+'</a></li><li><a class="next" href="#">'+d.vars.nextText+"</a></li></ul>");if(d.containerExists){a(d.controlsContainer).append(h);d.directionNav=a(".flex-direction-nav li a",d.controlsContainer)}else{d.append(h);d.directionNav=a(".flex-direction-nav li a",d)}if(!d.vars.animationLoop){if(d.currentSlide==0){d.directionNav.filter(".prev").addClass("disabled")}else if(d.currentSlide==d.count-1){d.directionNav.filter(".next").addClass("disabled")}}d.directionNav.bind(d.eventType,function(b){b.preventDefault();var c=a(this).hasClass("next")?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(c)){d.flexAnimate(c,d.vars.pauseOnAction)}})}if(d.vars.keyboardNav&&a("ul.slides").length==1){function i(a){if(d.animating){return}else if(a.keyCode!=39&&a.keyCode!=37){return}else{if(a.keyCode==39){var b=d.getTarget("next")}else if(a.keyCode==37){var b=d.getTarget("prev")}if(d.canAdvance(b)){d.flexAnimate(b,d.vars.pauseOnAction)}}}a(document).bind("keyup",i)}if(d.vars.mousewheel){d.mousewheelEvent=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel";d.bind(d.mousewheelEvent,function(a){a.preventDefault();a=a?a:window.event;var b=a.detail?a.detail*-1:a.wheelDelta/40,c=b<0?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(c)){d.flexAnimate(c,d.vars.pauseOnAction)}})}if(d.vars.slideshow){if(d.vars.pauseOnHover&&d.vars.slideshow){d.hover(function(){d.pause()},function(){if(!d.manualPause){d.resume()}})}d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed)}if(d.vars.pausePlay){var j=a('<div class="flex-pauseplay"><span></span></div>');if(d.containerExists){d.controlsContainer.append(j);d.pausePlay=a(".flex-pauseplay span",d.controlsContainer)}else{d.append(j);d.pausePlay=a(".flex-pauseplay span",d)}var k=d.vars.slideshow?"pause":"play";d.pausePlay.addClass(k).text(k=="pause"?d.vars.pauseText:d.vars.playText);d.pausePlay.bind(d.eventType,function(b){b.preventDefault();if(a(this).hasClass("pause")){d.pause();d.manualPause=true}else{d.resume();d.manualPause=false}})}if("ontouchstart"in document.documentElement){var l,m,n,o,p,q,r=false;d.each(function(){if("ontouchstart"in document.documentElement){this.addEventListener("touchstart",s,false)}});function s(a){if(d.animating){a.preventDefault()}else if(a.touches.length==1){d.pause();o=d.vertical?d.height():d.width();q=Number(new Date);n=d.vertical?(d.currentSlide+d.cloneOffset)*d.height():(d.currentSlide+d.cloneOffset)*d.width();l=d.vertical?a.touches[0].pageY:a.touches[0].pageX;m=d.vertical?a.touches[0].pageX:a.touches[0].pageY;d.setTransition(0);this.addEventListener("touchmove",t,false);this.addEventListener("touchend",u,false)}}function t(a){p=d.vertical?l-a.touches[0].pageY:l-a.touches[0].pageX;r=d.vertical?Math.abs(p)<Math.abs(a.touches[0].pageX-m):Math.abs(p)<Math.abs(a.touches[0].pageY-m);if(!r){a.preventDefault();if(d.vars.animation=="slide"&&d.transitions){if(!d.vars.animationLoop){p=p/(d.currentSlide==0&&p<0||d.currentSlide==d.count-1&&p>0?Math.abs(p)/o+2:1)}d.args[d.prop]=d.vertical?"translate3d(0,"+(-n-p)+"px,0)":"translate3d("+(-n-p)+"px,0,0)";d.container.css(d.args)}}}function u(a){d.animating=false;if(d.animatingTo==d.currentSlide&&!r&&!(p==null)){var b=p>0?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(b)&&Number(new Date)-q<550&&Math.abs(p)>20||Math.abs(p)>o/2){d.flexAnimate(b,d.vars.pauseOnAction)}else{d.flexAnimate(d.currentSlide,d.vars.pauseOnAction)}}this.removeEventListener("touchmove",t,false);this.removeEventListener("touchend",u,false);l=null;m=null;p=null;n=null}}if(d.vars.animation.toLowerCase()=="slide"){a(window).resize(function(){if(!d.animating){if(d.vertical){d.height(d.slides.filter(":first").height());d.args[d.prop]=-1*(d.currentSlide+d.cloneOffset)*d.slides.filter(":first").height()+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=d.vertical?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}else{d.newSlides.width(d.width());d.args[d.prop]=-1*(d.currentSlide+d.cloneOffset)*d.width()+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=d.vertical?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}}})}d.vars.start(d)};d.flexAnimate=function(a,b){if(!d.animating){d.animating=true;d.animatingTo=a;d.vars.before(d);if(b){d.pause()}if(d.vars.controlNav){d.controlNav.removeClass("active").eq(a).addClass("active")}d.atEnd=a==0||a==d.count-1?true:false;if(!d.vars.animationLoop&&d.vars.directionNav){if(a==0){d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled")}else if(a==d.count-1){d.directionNav.removeClass("disabled").filter(".next").addClass("disabled")}else{d.directionNav.removeClass("disabled")}}if(!d.vars.animationLoop&&a==d.count-1){d.pause();d.vars.end(d)}if(d.vars.animation.toLowerCase()=="slide"){var c=d.vertical?d.slides.filter(":first").height():d.slides.filter(":first").width();if(d.currentSlide==0&&a==d.count-1&&d.vars.animationLoop&&d.direction!="next"){d.slideString="0px"}else if(d.currentSlide==d.count-1&&a==0&&d.vars.animationLoop&&d.direction!="prev"){d.slideString=-1*(d.count+1)*c+"px"}else{d.slideString=-1*(a+d.cloneOffset)*c+"px"}d.args[d.prop]=d.slideString;if(d.transitions){d.setTransition(d.vars.animationDuration);d.args[d.prop]=d.vertical?"translate3d(0,"+d.slideString+",0)":"translate3d("+d.slideString+",0,0)";d.container.css(d.args).one("webkitTransitionEnd transitionend",function(){d.wrapup(c)})}else{d.container.animate(d.args,d.vars.animationDuration,function(){d.wrapup(c)})}}else{d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration);d.slides.eq(a).fadeIn(d.vars.animationDuration,function(){d.wrapup()})}}};d.wrapup=function(a){if(d.vars.animation=="slide"){if(d.currentSlide==0&&d.animatingTo==d.count-1&&d.vars.animationLoop){d.args[d.prop]=-1*d.count*a+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=d.vertical?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}else if(d.currentSlide==d.count-1&&d.animatingTo==0&&d.vars.animationLoop){d.args[d.prop]=-1*a+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=d.vertical?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}}d.animating=false;d.currentSlide=d.animatingTo;d.vars.after(d)};d.animateSlides=function(){if(!d.animating){d.flexAnimate(d.getTarget("next"))}};d.pause=function(){clearInterval(d.animatedSlides);if(d.vars.pausePlay){d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText)}};d.resume=function(){d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed);if(d.vars.pausePlay){d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText)}};d.canAdvance=function(a){if(!d.vars.animationLoop&&d.atEnd){if(d.currentSlide==0&&a==d.count-1&&d.direction!="next"){return false}else if(d.currentSlide==d.count-1&&a==0&&d.direction=="next"){return false}else{return true}}else{return true}};d.getTarget=function(a){d.direction=a;if(a=="next"){return d.currentSlide==d.count-1?0:d.currentSlide+1}else{return d.currentSlide==0?d.count-1:d.currentSlide-1}};d.setTransition=function(a){d.container.css({"-webkit-transition-duration":a/1e3+"s"})};d.init()};a.flexslider.defaults={animation:"fade",slideDirection:"horizontal",slideshow:true,slideshowSpeed:7e3,animationDuration:600,directionNav:true,controlNav:true,keyboardNav:true,mousewheel:false,prevText:"Previous",nextText:"Next",pausePlay:false,pauseText:"Pause",playText:"Play",randomize:false,slideToStart:0,animationLoop:true,pauseOnAction:true,pauseOnHover:false,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}};a.fn.flexslider=function(b){return this.each(function(){if(a(this).find(".slides li").length==1){a(this).find(".slides li").fadeIn(400)}else if(a(this).data("flexslider")!=true){new a.flexslider(a(this),b)}})}})(jQuery)