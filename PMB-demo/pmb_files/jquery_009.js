(function(e){e.EasingSlider=function(t){var n=this,r;n.el=t;n.$el=e(n.el);n.$slides=n.$el.find(".easingslider-slide");n.$arrows=n.$el.find(".easingslider-arrows");n.$next=n.$el.find(".easingslider-next");n.$prev=n.$el.find(".easingslider-prev");n.$pagination=n.$el.find(".easingslider-pagination");n.$icons=n.$el.find(".easingslider-icon");n.$preload=n.$el.find(".easingslider-preload");n.options=r=e.extend({},e.EasingSlider.defaults,e.parseJSON(n.$el.attr("data-options")));n.current=0;n.previous=0;n.count=n.$slides.length;n.width=r.dimensions.width;n.height=r.dimensions.height;n.$el.data("easingslider",n);n.initialize=function(){n._clickEvent="ontouchstart"in document.documentElement?"touchstart":"click";n.$slides.css({display:"none"});n.$slides.eq(n.current).css({display:"block"}).addClass("active");n._setupArrows();n._setupPagination();n._setupPlayback();n._preload();n.$el.trigger("init",n);return n};n._setupArrows=function(){if(!r.navigation.arrows){return}n.$next.on(n._clickEvent,n.nextSlide);n.$prev.on(n._clickEvent,n.prevSlide);if(r.navigation.arrows_hover){n.$arrows.addClass("has-hover")}n.$arrows.css({display:"block"});return n};n._setupPagination=function(){if(!r.navigation.pagination){return}n.$el.on("loaded",n._updatePagination);n.$el.on("transition.before",n._updatePagination);n.$icons.on(n._clickEvent,function(){var t=e(this).index(),r=t>n.current?"forward":"backward";n.goToSlide(t,r)});if(r.navigation.pagination_hover){n.$pagination.addClass("has-hover")}n.$pagination.css({display:"block"});return n};n._updatePagination=function(){if(!r.navigation.pagination){return n}n.$icons.removeClass("active").eq(n.current).addClass("active");return n};n._setupPlayback=function(){n.$el.on("transition.before",function(){if(n._playbackTimer){clearTimeout(n._playbackTimer)}});n.$el.on("transition.after",function(){if(n._playbackTimer){n.startPlayback()}});if(r.playback.enabled){n.$el.on("loaded",n.startPlayback)}return n};n._preload=function(){var t=n.$slides.find(".easingslider-image").length;n._preloadCount=0;n.$el.find(".easingslider-image").each(function(){e(this).one("load",function(){if(++n._preloadCount==t){n.$preload.animate({opacity:0},{duration:400,complete:function(){e(this).remove();n.$el.addClass("has-loaded");n.$el.trigger("loaded",n)}})}}).each(function(){if(this.complete){e(this).load()}})})};n._load=function(){n._preloadCount++;var t=n.$slides.find(".easingslider-image").length;if(n._preloadCount==t){n.$preload.animate({opacity:0},{duration:400,complete:function(){e(this).remove();n.$el.addClass("has-loaded");n.$el.trigger("loaded",n)}})}},n.startPlayback=function(){n._runtime=new Date;n._pauseTime=r.playback.pause;n._playbackTimer=setTimeout(function(){n.nextSlide()},n._pauseTime);n.$el.trigger("playback.start",n);return n};n.endPlayback=function(){clearTimeout(n._playbackTimer);n._playbackTimer=false;n.$el.trigger("playback.end",n);return n};n.pausePlayback=function(){clearTimeout(n._playbackTimer);n._runtime=Math.ceil(new Date-n._runtime);n.$el.trigger("playback.pause",n);return n};n.resumePlayback=function(){n._pauseTime=Math.ceil(n._pauseTime-n._runtime);n._runtime=new Date;n._playbackTimer=setTimeout(function(){n.nextSlide()},n._pauseTime);n.$el.trigger("playback.resume",n);return n};n._transition=function(e,t){if(n.$slides.eq(e).length==0){return n}if(n._animating){return n}n._animating=true;n.previous=n.current;n.current=e;if("backward"==t){n.$slides.eq(n.previous).css({display:"block"});n.$slides.eq(n.current).css({display:"block"});setTimeout(function(){n.$slides.eq(n.previous).addClass("next-out");n.$slides.eq(n.current).addClass("prev-in")})}else{n.$slides.eq(n.previous).css({display:"block"});n.$slides.eq(n.current).css({display:"block"});setTimeout(function(){n.$slides.eq(n.previous).addClass("prev-out");n.$slides.eq(n.current).addClass("next-in")})}clearTimeout(n._cleanup);n._cleanup=setTimeout(function(){n.$slides.eq(n.current).css({display:"block"}).addClass("active");n.$slides.eq(n.previous).css({display:"none"}).removeClass("active");n.$slides.removeClass("next-in next-out prev-in prev-out");n._animating=false;n.$el.trigger("transition.after",[n,e,t])},r.transitions.duration);n.$el.trigger("transition.before",[n,e,t]);return n};n.nextSlide=function(){var e=n.current==n.count-1?0:n.current+1;n._transition(e,"forward");n.$el.trigger("transition.next",[n,e,"forward"]);return n};n.prevSlide=function(){var e=n.current==0?n.count-1:n.current-1;n._transition(e,"backward");n.$el.trigger("transition.prev",[n,e,"backward"]);return n};n.goToSlide=function(e,t){this._transition(e,t);n.$el.trigger("transition.to",[n,e,t]);return n};n.initialize()};e.EasingSlider.defaults={dimensions:{width:640,height:400,responsive:true},transitions:{effect:"fade",duration:400},navigation:{arrows:true,arrows_hover:true,arrows_position:"inside",pagination:true,pagination_hover:true,pagination_position:"inside",pagination_location:"bottom-center"},playback:{enabled:true,pause:4e3}};e.fn.EasingSlider=function(){return this.each(function(){new e.EasingSlider(this)})};e(document).ready(function(){e(".easingslider").EasingSlider()})})(jQuery)