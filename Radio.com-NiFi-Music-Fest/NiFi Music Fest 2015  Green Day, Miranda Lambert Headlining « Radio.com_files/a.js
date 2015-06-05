/*
 * Columnify jQuery Plugin
 * http://www.dirnonline.com/
 *
 * Copyright 2010, dirnonline
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Version: 1.0.0 (05/20/2010)
 * Requires: jQuery v1.4+
 *
 * Notes: Currently this plugin can only split based on the number of child nodes.
 *
 */
(function(e){jQuery.fn.extend({columnify:function(i){var h=e(this),b=e.extend({columns:2,itemCount:0,wrapperClass:"columnify"},i);h.wrap(e("<div></div>").addClass(b.wrapperClass));return h.each(function(){var d=e(this),j=d.parent(),g=d.children(),a=g.size(),c=!b.itemCount?Math.ceil(a/b.columns):b.itemCount;if(b.itemCount)b.columns=Math.ceil(a/c);d.empty();for(a=1;a<b.columns;a++){var f=d.clone().append(g.slice(a*c,a*c+c));f.attr("start")&&f.attr("start",f.attr("start")+a*c);j.append(f)}d.append(g.slice(0,
c))})}})})(jQuery);;
/*
 * jQuery FlexSlider v2.2.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el);

    // making variables public
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        touch = (( "ontouchstart" in window ) || ( window.navigator.msPointerEnabled ) || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // depricating this idea, as devices are being released with both of these events
        //eventType = (touch) ? "touchend" : "click",
        eventType = "click touchend MSPointerUp",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {};
        focused = true;

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function() {
        slider.animating = false;
        slider.currentSlide = slider.vars.startAt;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") slider.vars.animation = "swing";
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // ASNAV:
        if (asNav) methods.asNav.setup();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) methods.controlNav.setup();

        // DIRECTIONNAV:
        if (slider.vars.directionNav) methods.directionNav.setup();

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) methods.pausePlay.setup();

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) slider.pause();
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) slider.play();
            });
          }
          // initialize animation
          (slider.vars.initDelay > 0) ? setTimeout(slider.play, slider.vars.initDelay) : slider.play();
        }

        // TOUCH
        if (touch && slider.vars.touch) methods.touch();

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) $(window).bind("resize orientationchange focus", methods.resize);


        // API: start() Callback
        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          slider.slides.click(function(e){
            e.preventDefault();
            var $slide = $(this),
                target = $slide.index();
            var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
            if( posFromLeft <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
              slider.flexAnimate(slider.getTarget("prev"), true);
            } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
              slider.direction = (slider.currentItem < target) ? "next" : "prev";
              slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
            }
          });
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"/>' : '<a>' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' != captn && undefined != captn ) item += '<span class="' + namespace + 'caption">' + captn + '</span>';
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').text(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').text(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          scrolling = false;

        var localX = 0;
        var localY = 0;

        el.addEventListener('touchstart', onTouchStart, false);
        // Cater for Windows-device touch events.
        if (window.navigator.msPointerEnabled) {
          el.addEventListener('MSPointerDown', onTouchStart, false);
        }
        function onTouchStart(e) {
          if (slider.animating) {
            e.preventDefault();
          } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
            slider.pause();
            // CAROUSEL:
            cwidth = (vertical) ? slider.h : slider. w;
            startT = Number(new Date());
            // CAROUSEL:

            // Local vars for X and Y points.
            localX = e.touches[0].pageX;
            localY = e.touches[0].pageY;
            // Cater for Windows-device touch events.
            if (window.navigator.msPointerEnabled) {
              localX = e.pageX;
              localY = e.pageY;
            }

            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                     (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                     (carousel && slider.currentSlide === slider.last) ? slider.limit :
                     (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                     (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
            startX = (vertical) ? localY : localX;
            startY = (vertical) ? localX : localY;

            el.addEventListener('touchmove', onTouchMove, false);
            el.addEventListener('touchend', onTouchEnd, false);

            // Cater for Windows-device touch events.
            if (window.navigator.msPointerEnabled) {
              el.addEventListener('MSPointerMove', onTouchMove, false);
              el.addEventListener('MSPointerOut', onTouchEnd, false);
            }
          }
        }

        function onTouchMove(e) {
          // Local vars for X and Y points.
          // Cater for Windows-device touch events.
          if ( window.navigator.msPointerEnabled ) {
            localX = e.pageX;
            localY = e.pageY;
          } else {
            localX = e.touches[0].pageX;
            localY = e.touches[0].pageY;
          }

          dx = (vertical) ? startX - localY : startX - localX;
          scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

          if ( window.navigator.msPointerEnabled ) {
            var fxms = 100;
          } else {
            var fxms = 500;
          }

          if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
            e.preventDefault();
            if (!fade && slider.transitions) {
              if (!slider.vars.animationLoop) {
                dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
              }
              slider.setProps(offset + dx, "setTouch");
            }
          }
        }

        function onTouchEnd(e) {
          // finish the touch by undoing the touch session
          el.removeEventListener('touchmove', onTouchMove, false);
          // Cater for Windows-device touch events.
          if (window.navigator.msPointerEnabled) {
            el.removeEventListener('MSPointerMove', onTouchMove, false);
          }

          if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
            var updateDx = (reverse) ? -dx : dx,
                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            } else {
              if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
            }
          }
          el.removeEventListener('touchend', onTouchEnd, false);
          // Cater for Windows-device touch events.
          if (window.navigator.msPointerEnabled) {
            el.removeEventListener('MSPointerOut', onTouchEnd, false);
          }
          startX = null;
          startY = null;
          dx = null;
          offset = null;
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) slider.doMath();

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    }

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;
        // API: before() animation Callback
        slider.vars.before(slider);

        // SLIDESHOW:
        if (pause) slider.pause();

        // SYNC:
        if (slider.syncExists && !fromNav) methods.sync("animate");

        // CONTROLNAV
        if (slider.vars.controlNav) methods.controlNav.active();

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) methods.directionNav.update();

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) slider.pause();
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              slider.wrapup(dimension);
            });
          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
            //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) methods.smoothHeight(slider.vars.animationSpeed);
      }
    }
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    }

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating && focused ) slider.flexAnimate(slider.getTarget("next"));
    }
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) methods.pausePlay.update("play");
      // SYNC:
      if (slider.syncExists) methods.sync("pause");
    }
    // SLIDESHOW:
    slider.play = function() {
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) methods.pausePlay.update("pause");
      // SYNC:
      if (slider.syncExists) methods.sync("play");
    }
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    }
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    }
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    }

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);
    }

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") slider.container.find('.clone').remove();
          slider.container.append(slider.slides.first().clone().addClass('clone').attr('aria-hidden', 'true')).prepend(slider.slides.last().clone().addClass('clone').attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) methods.smoothHeight();
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) methods.smoothHeight();
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
    }


    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = slider.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w/(slider.itemW));
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    }


    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) methods.directionNav.update();

    }

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    }
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    }

    //FlexSlider: Initialize
    methods.init();
  }

  // Ensure the slider isn't focussed if the window loses focus.
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed
  }


  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) options = {};

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

        if ($slides.length === 1) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") $slider.flexAnimate(options, true);
      }
    }
  }
})(jQuery);;
var ua = navigator.userAgent.toLowerCase();
var is_ie8  = ua.indexOf('msie 8.0') != -1;
var is_ie7  = ua.indexOf('msie 7.0') != -1;
var is_ipad = ua.indexOf('ipad') > -1;

function cbs_add_page_view(url) {
	var is_logged_in = false;

	if (typeof rollupTracker != 'undefined') {
		rollupTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		rollupTracker._trackPageview(url);
	}
	if (typeof pageTracker != 'undefined') {
		pageTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		pageTracker._trackPageview(url);
	}
	if (typeof formatTracker != 'undefined') {
		formatTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		formatTracker._trackPageview(url);
	}
	if (typeof marketTracker != 'undefined') {
		marketTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		marketTracker._trackPageview(url);
	}
	if (typeof masterTracker != 'undefined') {
		masterTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		masterTracker._trackPageview(url);
	}
	if (typeof stationsTracker != 'undefined') {
		stationsTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		stationsTracker._trackPageview(url);
	}
}

function cbs_is_valid_email(email) {
	var emailRegEx=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegEx.test(email);
}

function cbs_is_valid_zipcode(zip) {
	var zipcodeRegEx = /^\d{5}(?:[-\s]\d{4})?$/ ;
	return zipcodeRegEx.test(zip);
}

function cbs_is_logged_in() {
	var sso_cookie = cbs_lib.get_cookie('cbssso');
	return !!sso_cookie;
}

function cbs_is_ipad() {
	var ua = navigator.userAgent.toLowerCase();
	return ua.indexOf('ipad') > -1;
}

function cbs_track_event(category, action, label) {
	var is_logged_in = false;

	if (typeof rollupTracker != 'undefined') {
		rollupTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		rollupTracker._trackEvent(category, action, label);
	}
	if (typeof pageTracker != 'undefined') {
		pageTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		pageTracker._trackEvent(category, action, label);
	}
	if (typeof formatTracker != 'undefined') {
		formatTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		formatTracker._trackPageview(category, action, label);
	}
	if (typeof marketTracker != 'undefined') {
		marketTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		marketTracker._trackPageview(category, action, label);
	}
	if (typeof masterTracker != 'undefined') {
		masterTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		masterTracker._trackPageview(category, action, label);
	}
	if (typeof stationsTracker != 'undefined') {
		stationsTracker._setCustomVar(1, 'User Type', is_logged_in ? 'User' : 'Guest', 2);
		stationsTracker._trackPageview(category, action, label);
	}
}

/* JQUERY READY START */
jQuery(function($) {
	
	/* Gallery Shortcode in posts */
	var $gallery_shortcode = $('.gallery-slides');
	if ($('li', $gallery_shortcode).length > 1) {
		$gallery_shortcode.flexslider({
			animation: 'slide',
			animationLoop: false,
			animationSpeed: 600,
			slideshowSpeed: 4500,
			controlNav: false,
			nextText: 'Next',
			prevText: 'Prev',
			slideshow: false,
		});
	}

	/**TEMPORARY SOLUTION FOR THE GALLERIES*/

	if ($('body.photo-galleries').length < 1) {
		$('.photo-galleries .thumbnails').tabs({event: 'click'});
		$('.photo-galleries .title a').hide();
	}

	$('#local-deals-0 a').click(function() {
		cbs_track_event('Local Offers', location.href, 'widget');
	});
	$('a#cbslo-tab').click(function() {
		cbs_track_event('Local Offers', location.href, 'tab');
	});
	$('#menu-header-menu a').click(function() {
		if ($(this).text() == "Deals") {
			cbs_track_event('Local_Offers', 'Local_Offers_Click_Homepage', 'Local_Offers_Navbar');
		}
	});

    show_ribbon_and_make_ad_call.slidestatus = true

    function show_ribbon_and_make_ad_call(){
        if (show_ribbon_and_make_ad_call.slidestatus == true) {
            $('#cbs-site-ribbon').slideDown(100);
            // make AD call from ribbon
            if ($('.ribbon-sponsor-ad').length > 0) {
                cbs_refresh_ad($('.ribbon-sponsor-ad'), 120, 60);
            }
        }
        show_ribbon_and_make_ad_call.slidestatus = false
    }

	$(window).scroll(function () {
		if ($(this).scrollTop() > 120) {
            // prevents calling slideDown on every scroll event
			show_ribbon_and_make_ad_call();
		} else {
			$('#cbs-site-ribbon').slideUp(100);
            show_ribbon_and_make_ad_call.slidestatus = true
		}
	});

	initInputs();

	var $footer_ul = $('footer div.footer-city ul');
	if ($footer_ul.length) {
		$footer_ul.css({
			'margin-top': -$footer_ul.height()
		});
	}

	// dynamic-action for shows
	$("a[data-dynamic-target='dynamic_video-block']").bind('click', function(e){
		e.preventDefault();

		if ($(this).hasClass('current-link')) return;

		var dynamic_url_href = $(this).attr('href');
		var dynamic_container_id = $(this).data('dynamic-target');

		var dynamic_query_data = {type: 'video-player-all'};

		//if (true) {
			//dynamic_data["type"] = 'video-player-all';
		//}
		$(this).parent().find('a.current-link').removeClass('current-link');
		$(this).addClass('current-link')

		if ($(this).hasClass('youtube-video')) {
			var new_html = $('<div>').addClass('video canvas');
			var youtube_url = $(this).attr('href') + '&autoplay=1';

			//because loading an iframe with script is browser-illegal
			youtube_url = youtube_url.replace('youtube.com/watch?v=', 'youtube-nocookie.com/v/');

			var iframe = $('<iframe>')
				.attr({
					'width': 620,
					'height': 340,
					'src': youtube_url,
					'frameborder': 0,
					'allowfullscreen': true
				});
			new_html.append(iframe);
			var h1 = $('<h1>').html($(this).attr('title'));
			new_html.append(h1);

			$('#' + dynamic_container_id).html('').append(new_html);
		} else {
			$.fancybox.showActivity();
			jQuery.ajax({
				url: dynamic_url_href,
				data: dynamic_query_data,
				complete : function() {
					$.fancybox.hideActivity();
				},
				success: function(data) {
					$.fancybox.hideActivity();

					$('#' + dynamic_container_id).html(data);

					//refresh sponsor ads
					cbs_refresh_ad($('.right-bar .right-under-listenlive'), 300, 250);
				}
			});
		}

	});
	
	// View Comments in the share_this_bar, change the page anchor-tags from #respond to #comments
	$('a[href$=#respond]').on('click', function(e) {
		e.preventDefault();
		location.href = '#comments';
	});
	
	
	/* Click-Event Tracking
		This function dynamically attaches itself to any anchor that has the cbs_cet parameters
	*/
	$('a[data-cbs-cet-category][data-cbs-cet-action][data-cbs-cet-optlabel]').bind('click', function(e) {
		var ect_category = $(this).data('cbs-cet-category');
		var ect_action = $(this).data('cbs-cet-action');
		var ect_optlabel = $(this).data('cbs-cet-optlabel');

		if (ect_category !== undefined && ect_action !== undefined && ect_optlabel !== undefined) {
			cbs_track_event(ect_category, ect_action, ect_optlabel)
		}
	});

	// For dynamic leads on mouse-over for thumbnail
	$('.dynamic-lead-slideshow .menu li').hover(function(e){
		$(this).find('img').stop().slideUp('fast');
		$(this).find('.action-thumbnail').stop().fadeOut('fast');
	}, function(e){
		$(this).find('img').slideDown('fast');
		$(this).find('.action-thumbnail').fadeIn('fast');
	});
	$('.dynamic-lead-slideshow .menu li')
		.wrapInner('<div class="wrapper" />')
		.prepend('<div class="active-triangle" />');
	$('.dynamic-lead-slideshow .canvas li.video-content')
		.prepend('<div class="action-thumbnail action-video" />');
	$('.dynamic-lead-slideshow .menu li.video-content')
		.prepend('<div class="action-thumbnail action-video" />');
		
	// Flagged content
	$('.container-flag-popular').prepend('<span class="flag-popular" />'); // featured flag
	$('.container-flag-content-video').prepend('<span class="flag-video-content" />'); // video play icon

	if (jQuery().columnify) {
		$('.cbs-columnify-this-3').columnify({columns: 3});
		$('.cbs-columnify-this-4').columnify({columns: 4});
		$('.cbs-columnify-this-5').columnify({columns: 5});
		$('.cbs-columnify-this-6').columnify({columns: 6});
	}

	function cbs_setup_hideelement($target) {

		// clean the object
		$target
			.removeClass('hide-element-content-on')
			.removeClass('hide-element-content-off');

		// check if there is an element to work with
		if (!$target.data('hide-element')) return;

		// have to check if there is something to hide first
		var $to_hide = $target.find('.' + $target.data('hide-element'));
		if ($to_hide.is(':empty')) return;

		$to_hide.hide();
		$target.addClass('hide-element-content-off');

		var click_hide_text = 'x';
		if ($target.data('hide-element-text')) {
			click_hide_text = $target.data('hide-element-text');
		}

		var $click_hide = $('<span>').
			css('cursor', 'pointer').
			addClass('hide-element-button').
			html(click_hide_text);

		$click_hide.on('click', function(e){
			e.preventDefault();
			var hide_element = $target.parent().data('hide-element');

			if ($target.hasClass('hide-element-content-off')) {
				$target
					.removeClass('hide-element-content-off')
					.addClass('hide-element-content-on');
				$to_hide.slideDown();
			} else {
				$target
					.removeClass('hide-element-content-on')
					.addClass('hide-element-content-off');
				$to_hide.slideUp();
			}
			
		});

		$target.append($click_hide);
	}

	$('[data-hide-element]').each(function(){
		cbs_setup_hideelement($(this));
	});

	//global Anvato player variable. Only available on pages that includes Anvato
	//this prevents code to run on pages without any anvato content
	if (typeof anvp != 'undefined') {
		var side_bar_player_ids = [];
		for (var i=0; i<7; i++) {
			if ($('.sidebar.right-bar #p'+i).length > 0 ) {
				side_bar_player_ids.push('p' + i);
			}
		}
		var number_of_side_players = side_bar_player_ids.length;
		if (number_of_side_players > 0 ) {
			anvp.listener = function (e) {
				if ((e.name == 'PLAYING_START' || e.name == 'AD_STARTED') && e.sender.indexOf(side_bar_player_ids) > -1 ) {
					anvp[e.sender].setBitrate(216);
					anvp[e.sender].mute();
				}
			};
		}
	}

});
/* JQUERY READY STOP */

var sso_url = '/';
var sso_slug = '';

function closeOverlay() {
	jQuery.fancybox.close();
}

function initInputs() {
	if (!Modernizr.input.placeholder) {
		jQuery('form [placeholder], form [placeholder]')
			.focus(function() {
				var $this = jQuery(this);
				if ($this.val() == $this.attr('placeholder')) {
					$this.val('');
					$this.removeClass('placeholder');
				}
			})
			.blur(function() {
				var $this = jQuery(this);
				if ($this.val() == '' || $this.val() == $this.attr('placeholder')) {
					$this.addClass('placeholder');
					$this.val($this.attr('placeholder'));
				}
			})
			.blur()
			.closest('form').submit(function() {
				jQuery(this).find('[placeholder]').each(function() {
					var $this = jQuery(this);
					if ($this.val() == $this.attr('placeholder')) {
						$this.val('');
					}
				});
			});
	}
}

function scrollUp() {
	jQuery('html, body').animate({scrollTop:0});
}

function reload_addthis_buttons () {
	if (window.addthis){
		window.addthis.ost = 0;
		window.addthis.ready();
	}
	jQuery.getScript('https://apis.google.com/js/plusone.js');
}

function cbs_audio_player_v2(player_id) {
	if (!jQuery.fn.jPlayer) return;

	// declare the object
	var $this_audio_player = jQuery('#' + player_id + '-player');
	var $this_audio_controls = jQuery('#' + player_id + '-controls');

	// Store the PLay url and reset the play button
	var this_audio_url = $this_audio_controls.find(".controls .play").attr("href");
	$this_audio_controls.find(".controls .play").attr("href", "#");

	var player_width = $this_audio_controls.width();
	var player_min_width = $this_audio_controls.css('min-width').replace('px', '');
	if (parseInt(player_width) > parseInt(player_min_width) + 20) {
		$this_audio_controls.addClass('jsm-wide');
	}

	$this_audio_player.jPlayer({
		play: function(e) {
			//Pause other players, on play of this one
			$this_audio_player.jPlayer("pauseOthers");
		},
		ready: function (e) {
			$this_audio_player.jPlayer("setMedia", {
				mp3: this_audio_url
			});
		},
		cssSelectorAncestor: '#' + $this_audio_controls.attr('id'),
		cssSelector: {
			videoPlay: "",

			// actions
			play: ".controls .play",
			pause: ".controls .pause",
			stop: "",
			repeat: "",
			repeatOff: "",

			// time
			currentTime: ".controls .time .current-time",
			duration: ".controls .time .duration",

			// seek bar
			seekBar: ".controls .progress-bar .seek-bar",
			playBar: ".controls .progress-bar .seek-bar .play-bar",

			// volume
			volumeBar: ".controls .volume .volume-bar",
			volumeBarValue: ".controls .volume .volume-bar .volume-bar-value",
			volumeMax: "",
			mute: ".controls .volume .mute",
			unmute: ".controls .volume .un-mute",

			gui: "",//audio-gui",
			
			// not in use
			fullScreen: "",
			restoreScreen: "",
			noSolution: "",
			playbackRateBar: "",
			playbackRateBarValue: "",
			title: ""
		},
		solution: "flash, html",
		supplied: "mp3",
		swfPath: "http://ajax.cbslocal.com/jquery/jplayer/2.9.2/jquery.jplayer.swf",
		wmode: "window",
		verticalVolume: "true",
		volume: 0.5
		//,errorAlerts: true ,warningAlerts: true // disable for Live
	});

	$this_audio_controls.find(".volume .mute, .volume .un-mute").on('click', function(e){
		e.preventDefault();

		$(this).hide();
		if($(this).hasClass('mute')) {
			$(this).parent().find('um-mute').show();
		} else {
			$(this).parent().find('mute').show();
		}
	});
	var $station_name = $('.audio-player-controls .station .name');
	//get width of the seek-bar and the width of the station name to find proportionality coefficient
	var seek_width = $('.audio-player-controls .controls .progress-bar').width();
	var paddings = parseInt($station_name.css('padding-left')) + parseInt($station_name.css('padding-right'));
	
	var station_name_width = $station_name .width();
	var proportion = (station_name_width + paddings)/seek_width;

	//click on station name should transfer % played to the seek bar
	$station_name.on('click', function(e){
		e.preventDefault();
		//offset doesn't take paddings and borders (for later debugs)
		//calculate % of the station name to the left of the clicked point
		var station_name_left = $(this).offset().left;
		var click_position_left = e.pageX;
		var click_relative_to_station = click_position_left - station_name_left;
		//now claculate proportionally where would seek bar moved if click was on seek bar not on station
		var station_width_percentage = 100 * click_relative_to_station/(station_name_width + paddings);
		var percentage_relative_to_seek_bar = station_width_percentage * proportion;
		//move seek bar
		$this_audio_player.jPlayer("playHead", percentage_relative_to_seek_bar);
	});
} // player function end
;
/* JQUERY READY START */

var cbs_sso = {};

var cbs_ie8_loginout_timeout = null;

jQuery(function($) {
	
	cbs_sso.event('check-login');

	var hash_query = cbs_get_hash_query();

	if (window.location.href.split('#')[0] == cbs_market_root + '/account/') {
		if ('logout' in hash_query) {
			cbs_sso.frame('logout');
		} else if ('manage' in hash_query) {
			cbs_sso.frame('manage');
		} else if ('register' in hash_query) {
			cbs_sso.frame('register');
		} else if ('sso_verify_token' in hash_query && hash_query['sso_verify_token']) {
			cbs_sso.frame('verify');
		} else if ('sso_pass_token' in hash_query && hash_query['sso_pass_token']) {
			cbs_sso.frame('reset-password');
		} else if ('newsletter' in hash_query) {
			cbs_sso.event('newsletter');
		} else {
			// for everything else there is MasterCard
			cbs_sso.frame('login');
		}
	} else if ('sso_verify_token' in hash_query && hash_query['sso_verify_token']) {
		window.location.href = cbs_market_root + '/account/#sso_verify_token=' + hash_query['sso_verify_token'];
	}

	// declare events
	if (window.addEventListener) {
		window.addEventListener ("message", cbs_sso.receive_message, false);
	} else if (window.attachEvent) {
		window.attachEvent("onmessage", cbs_sso.receive_message, false);
	}

});

cbs_sso.register_click_events = function(obj) {

	var redirect_url = '';
	var tracking_action = '';

	var $active_element = obj;

	var tracking_location = 'Header';

	if ($active_element.closest('#sso-ribbon-wrapper').length) {
		tracking_location = 'Ribbon';
	}

	if ($active_element.hasClass('login')) {
		tracking_action = 'Login';
		redirect_url = cbs_market_root + '/account/#login';
		cbs_sso.frame('login');
	} else if ($active_element.hasClass('register')) {
		tracking_action = 'Register';
		redirect_url = cbs_market_root + '/account/#register';
		cbs_sso.frame('register');
	} else if ($active_element.hasClass('manage')) {
		tracking_action = 'Manage';
		redirect_url = cbs_market_root + '/account/#manage';
		cbs_sso.frame('manage');
	} else if ($active_element.hasClass('logout')) {
		tracking_action = 'Logout';
		cbs_sso.event('logout');
	}

	if (tracking_action) {
		cbs_track_event('User Registration ' + tracking_action, location.href, tracking_location);
	}

	if (redirect_url) {
		window.location.href = redirect_url;
	}
}

cbs_sso.frame = function(action) {
	if (!cbs_sso_url_base) return;

	var height = '960px';
	var width = '100%';
	var iframe_url = '';
	var iframe_tunnel_url = '';
	var sid = cbs_lib.get_cookie('sso-sessionid');

	if (action == 'login') {

		iframe_url = cbs_sso_url_base + '/mycbslocal/pages/Login.aspx?rurl=' + encodeURIComponent(cbs_market_root);

	} else if (action == 'register') {

		iframe_url = cbs_sso_url_base + '/mycbslocal/pages/Registration.aspx?rurl=' + encodeURIComponent(cbs_market_root);

	} else if (action == 'manage') {
		//login.aspx will determine if a user is logged in and redirect to the Management page.
		iframe_url = cbs_sso_url_base + '/mycbslocal/pages/Login.aspx?rurl=' + encodeURIComponent(cbs_market_root);

	} else if (action == 'logout') {

		iframe_url = cbs_sso_url_base + '/mycbslocal/pages/LogoutAjax.aspx?sid=' + encodeURIComponent(sid);

	} else if (action == 'verify') {

		var hash_query = cbs_get_hash_query();

		if ('sso_verify_token' in hash_query && hash_query['sso_verify_token']) {
			window.location.hash = 'verify';
			iframe_url = cbs_sso_url_base + '/mycbslocal/pages/verification.aspx?token=' + encodeURIComponent(hash_query['sso_verify_token']);
		}

	} else if (action == 'reset-password') {

		var hash_query = cbs_get_hash_query();

		if ('sso_pass_token' in hash_query && hash_query['sso_pass_token']) {
			window.location.hash = 'reset-password';
			iframe_url = cbs_sso_url_base + '/mycbslocal/pages/PasswordReset.aspx?token=' + encodeURIComponent(hash_query['sso_pass_token']);
		}

	} else if (action == 'newsletter') {

		var hash_query = cbs_get_hash_query();

		window.location.hash = 'newsletter';
		if ('newsletter' in hash_query && hash_query['newsletter'] == 'signup') {
			// signup for Big5
			iframe_url = cbs_sso_url_base + '/mycbslocal/pages/Registration.aspx?n=true&rurl=' + cbs_lib.escape_html(cbs_market_root);
		} else if ('newsletter' in hash_query && hash_query['newsletter']) {
			// signup for specific ID
			iframe_url = cbs_sso_url_base + '/mycbslocal/pages/Registration.aspx?n=false&nid=' + cbs_lib.escape_html(hash_query['newsletter']) + '&rurl=' + cbs_lib.escape_html(cbs_market_root);
		} else {
			cbs_sso.frame('login');
		}

	}

	if (iframe_url) {
		jQuery('#sso-iframe-wrapper').empty();

		jQuery('<iframe>', {
			src: iframe_url,
			frameborder: 0, 
			scrolling: 'no',
			style: "margin-left:0;width:" + width + ";height:" + height + ";"
		}).appendTo('#sso-iframe-wrapper');
	}

}

cbs_sso.event = function(event_name, token) {

	if (!cbs_sso_url_base) return;

	var $container_header = jQuery('#sso-header-wrapper');
	var $container_ribbon = jQuery('#sso-ribbon-wrapper');

	if (event_name == 'check-login') {

		// Verify if the use ever logged in. Will prevent unnecessary calls to the page.
		var sid = cbs_lib.get_cookie('sso-sessionid');

		if (sid == 'donotdisturb') {
			cbs_sso.event('logout');
		} else if (sid) {
			//Verify that they are still logged in and 30 days hasn't passed
			jQuery.ajax({
				type: 'GET',
				dataType: 'jsonp',
				crossDomain: true,
				async: 'sync',
				url: cbs_sso_url_base + '/mycbslocal/pages/VerifySessionAjax.aspx',
				success : function(data) {
					if (data && data.session_valid == 'True') {
						cbs_sso.event('login', sid);
					} else {
						cbs_sso.event('logout');
					}
				}
			});
		} else if (jQuery('#sso-wormhole').length < 1) {
			//No SID: User never logged in OR user from another domain.

			//Open Wormhole which will tell us if loggedin/out and from another domain

			jQuery('<iframe>', {
				height: 1,
				width: 2, 
				id: 'sso-wormhole', 
				src: cbs_sso_url_base + '/mycbslocal/pages/Login.aspx', 
				frameborder: 0, 
				scrolling: 'no'
			}).appendTo('body');

			// if everything else burns, ave the delayed "logout" buttons
			cbs_ie8_loginout_timeout = setTimeout(function(){
				cbs_sso.event('logout');
			}, 10000);

			/* this event should send a logout event to set the login buttons */
		}

	} else if (event_name == 'logout') {

		var sid = cbs_lib.get_cookie('sso-sessionid');
		var root_domain = cbs_lib.market_root_domain();

		var expires = new Date();
		expires.setTime(expires.getTime()+(10*60*1000)); //10 minutes

		if (sid && sid != 'donotdisturb') {
			jQuery.ajax({
				type: 'GET',
				dataType: 'jsonp',
				crossDomain: true,
				async: 'sync',
				url: cbs_sso_url_base + '/mycbslocal/pages/LogoutAjax.aspx?sid=' + encodeURIComponent(sid),
				beforeSend: function() {
					jQuery.fancybox.showActivity();
				},
				complete: function() {
					jQuery.fancybox.hideActivity();
					cbs_lib.set_cookie('sso-sessionid', 'donotdisturb', expires, root_domain);
					cbs_lib.set_cookie('sso-userdata', '', '', root_domain);
					
					if (window.location.href.split('#')[0] == cbs_market_root + '/account/') {
						window.location.href = cbs_market_root + '/account/#login';
						window.location.reload(true);
					}
				}
			});
		} else if (!sid) {
			//Set the session cookie to donotdisturb so we don't check on every page view
			cbs_lib.set_cookie('sso-sessionid', 'donotdisturb', expires, root_domain);
		}

		if ($container_header || $container_ribbon) {
			// switch menus to login/register
			$container_header.html('<span class="login">Log In</span><span class="register">Register</span>');
			$container_ribbon.html('<span class="login">Log In</span><span class="register">Register</span>');

			// Listen for clicks on login/register buttons
			jQuery(
				'#sso-header-wrapper .login,' +
				'#sso-ribbon-wrapper .login,' +
				'#sso-header-wrapper .register,' +
				'#sso-ribbon-wrapper .register'
			).on('click', function() {
				cbs_sso.register_click_events(jQuery(this));
			});
		}

	} else if (event_name == 'login') {
		
		var root_domain = cbs_lib.market_root_domain();
		
		var expires = new Date();
		expires.setDate(expires.getDate() + 30);

		cbs_lib.set_cookie('sso-sessionid', token, expires, root_domain);
		
		var sid = token;
		
		//Set additional user data in seperate cookie. Currently used for xl8.
		var user_info = cbs_lib.get_cookie('sso-userdata');
		
		if (!user_info) {
			jQuery.ajax({
				type: 'GET',
				dataType: 'jsonp',
				crossDomain: true,
				async: 'sync',
				url: cbs_sso_url_base + '/mycbslocal/api/Session/' + encodeURIComponent(sid),
				success : function(data) {
					cbs_lib.set_cookie('sso-userdata', JSON.stringify(data), expires, root_domain);
				}
			});
			
		}
		
		if ($container_header || $container_ribbon) {
			// switch menus to manage/logout
			$container_header.html('<span class="manage">My Account</span><span class="logout">Log Out</span>');
			$container_ribbon.html('<span class="manage">My Account</span><span class="logout">Log Out</span>');

			// Listen for clicks on manage/logout buttons
			jQuery(
				'#sso-header-wrapper .manage,' +
				'#sso-ribbon-wrapper .manage,' +
				'#sso-header-wrapper .logout,' +
				'#sso-ribbon-wrapper .logout'
			).on('click', function() {
				cbs_sso.register_click_events(jQuery(this));
			});
		}

	} else if (event_name == 'redirect_home') {

		if (window.location.href.split('#')[0] == cbs_market_root + '/account/') {
			window.location.href = cbs_market_root;
		}

	} else if (event_name == 'newsletter') {

		var sid = cbs_lib.get_cookie('sso-sessionid');
		if (sid && sid != 'donotdisturb') { // signup AJAX
			window.location.hash = 'newsletter';

			if (typeof token === 'undefined' || !token) {
				// Signup for Big-5
				jQuery.ajax({
					type: 'GET',
					dataType: 'jsonp',
					crossDomain: true,
					async: 'sync',
					url: cbs_sso_url_base + '/mycbslocal/pages/Newsletters.aspx?n=true&rurl=' + cbs_lib.escape_html(cbs_market_root),
					beforeSend: function() { cbs_lib.show_loading(); },
					complete: function() { cbs_lib.hide_loading(); },
					success : function(data) {
						if (data && data.success == 'True') {
							// Show ThankYou page
							jQuery('#sso-iframe-wrapper').html("<h3>Thanks for subscribing!</h3><p>You'll begin receiving newsletters soon.</p>");
						} else {
							// Big-5 sbscription failed
							jQuery('#sso-iframe-wrapper').html("<h3>Sorry, an error has occurred.</h3><p>We're currently experiencing an interruption. Please try again later.</p>");
						}
					}
				});
			}
		} else { // signup page
			cbs_sso.frame('newsletter');
		}

	}
}

cbs_sso.newsletter_promo = function(category_name, newsletter_id, category_message) {

	var newsletter_cookie = '';
	
	newsletter_cookie = cbs_lib.get_cookie(category_name + '-Newsletter');

	if (!category_name || !newsletter_id || newsletter_cookie == category_name) return;

	if(!category_message) {
		category_message = 'Get the latest from ' + category_name;
	}

	var message_div = jQuery('<a/>')
		.attr('href', cbs_market_root + '/account/#newsletter=' + newsletter_id)
		.attr('target', '_blank')
		.attr('rel', newsletter_id)
		.text('Subscribe to our newsletter.');
	message_div = jQuery('<span/>')
		.text(cbs_lib.escape_html(category_message) + ' delivered to you. ')
		.append(message_div);
	message_div = jQuery('<div/>')
		.attr('id', 'newsletter-promo')
		.css('display', 'block')
		.append('<a class="close">X</a>')
		.append(message_div);

	// attach point can be different per page type

	if (jQuery('body').hasClass('mobile')) {
		$attach_point = jQuery('#content');
	} else if (jQuery('body').hasClass('section')) { // section
		$attach_point = jQuery('#page-content .content:first'); //first match only
	} else if (jQuery('#page-content .cols').length > 0) { // TopList, Guide and other old things
		// this is for the very old page templates
		// but if it fits, it ships!
		$attach_point = jQuery('#page-content .cols');
	} else { // everything else
		$attach_point = jQuery('#page-content .page-columns');
	}

	$attach_point.prepend(message_div);

	// close handler
	$attach_point.find('#newsletter-promo .close').on('click' , function(e){
		e.preventDefault();

		jQuery('#newsletter-promo').slideUp('fast');
		// and do something with the cookie maybe for DND
	});

	$attach_point.children('#newsletter-promo').slideUp(0).slideDown('fast', function() {

		var sid = cbs_lib.get_cookie('sso-sessionid');
		if (!sid || sid === 'donotdisturb') return; //Don't bother about Ajax, use the link

		// subscribe handler
		jQuery('#newsletter-promo span a').on('click' , function(e){
			e.preventDefault();

			jQuery.ajax({
				type: 'GET',
				dataType: 'jsonp',
				crossDomain: true,
				async: 'sync',
				url: cbs_sso_url_base + '/mycbslocal/pages/Newsletters.aspx?n=false&nid=' + jQuery(this).attr('rel') + '&rurl=' + cbs_lib.escape_html(cbs_market_root),
				beforeSend: function() { cbs_lib.show_loading(); },
				complete: function() { cbs_lib.hide_loading(); },
				success : function(data) {
					if (data && data.success == 'True') {
						// Show ThankYou page
						jQuery('#newsletter-promo span').text("Thanks for Subscribing! You'll receive your first " + cbs_lib.escape_html(category_name) + " newsletter soon.");
					} else {
						// Big-5 sbscription failed
						jQuery('#newsletter-promo span').text("Error has occurred. Please try again later.");
					}
				}
			});

		});
	});
	
	// Set cookie if rubric is clicked
	$('#newsletter-promo .close, #newsletter-promo span a').on('click', function() {
		
		var expires = new Date();
		expires.setDate(expires.getDate()+30); //30 days

		cbs_lib.set_cookie(category_name + '-Newsletter', category_name, expires);
	});

}



cbs_sso.receive_message = function(event) {
	if (!event || !event.origin || event.origin !== cbs_sso_url_base) return;

	// STOP! HAMMERTIME! for the automatic failsafe for login event
	clearTimeout(cbs_ie8_loginout_timeout);

	if (event.data.event_name == 'login') {
		cbs_sso.event('login', event.data.event_param);
	} else if (event.data.event_name == 'logout') {
		cbs_sso.event('logout', event.data.event_param);
	} else if (event.data.event_name == 'redirect_home') {
		cbs_sso.event('redirect_home', event.data.event_param);
	}
}
;
