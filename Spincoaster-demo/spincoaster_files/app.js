(function() {
  var App, Lines, Logos, Mainvisual, Modal, Panorama, Utils,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Utils = (function() {
    function Utils() {}

    Utils.requestAnimationFrame = function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.setTimeout;
    };

    Utils.cancelAnimationFrame = function() {
      return window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame || window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame || window.clearInterval;
    };

    Utils.getDocHeight = function() {
      return Math.max($(document).height(), $(window).height(), document.documentElement.clientHeight);
    };

    Utils.scrollTo = function(targetOffset, time) {
      var ah, h;
      if (time == null) {
        time = 500;
      }
      ah = Utils.getDocHeight() - $(window).height();
      h = targetOffset > ah ? ah : targetOffset;
      return $('html,body').stop().animate({
        scrollTop: h
      }, time, 'easeOutCubic');
    };

    Utils.scrollToElement = function(elementId, time) {
      var e, offset;
      if (time == null) {
        time = 500;
      }
      try {
        if ($(elementId).length) {
          offset = $(elementId).offset().top - 61;
        } else {
          offset = 0;
        }
      } catch (_error) {
        e = _error;
        offset = 0;
      }
      return Utils.scrollTo(offset, time);
    };

    Utils.loadImages = function(imgs, callback) {
      var count, limit, onLoadOrError,
        _this = this;
      limit = imgs.length;
      count = 0;
      onLoadOrError = function() {
        count += 1;
        if (count >= limit) {
          return callback.apply(_this);
        }
      };
      if (limit) {
        return imgs.each(function(i, t) {
          var img, src;
          if (typeof t === 'string') {
            src = t;
          } else {
            src = $(t).attr('src');
          }
          img = $('<img>').attr('src', src);
          return img.on({
            load: function() {
              return onLoadOrError();
            },
            error: function() {
              return onLoadOrError();
            }
          });
        });
      } else {
        return callback.apply(this);
      }
    };

    return Utils;

  })();

  $(function() {
    var APP;
    APP = new App();
    APP.binding();
    return APP.headline();
  });

  Logos = (function() {
    function Logos() {
      var speed;
      this.$sponsor = $('.sec-sponsor');
      this.$logo = this.$sponsor.find('.logo a');
      this.$logoText = this.$logo.find('.inner span');
      this.$logo.find('.info').css({
        opacity: 0
      });
      this.$logoText.css({
        y: '18%',
        opacity: 0
      });
      speed = 250;
      this.$logo.on({
        mouseover: function() {
          $(this).find('img').stop().transit({
            opacity: 0.85,
            duration: speed,
            easing: 'easeOutCubic'
          });
          $(this).find('.info').stop().transit({
            opacity: 1,
            duration: speed,
            easing: 'easeOutCubic'
          });
          return $(this).find('.inner span').stop().transit({
            y: 0,
            opacity: 1,
            duration: speed,
            easing: 'easeOutCubic'
          });
        },
        mouseleave: function() {
          $(this).find('img').stop().transit({
            opacity: 1,
            duration: speed,
            easing: 'easeOutCubic'
          });
          $(this).find('.info').stop().transit({
            opacity: 0,
            duration: speed,
            easing: 'easeOutCubic'
          });
          return $(this).find('.inner span').stop().transit({
            y: '12%',
            opacity: 0,
            duration: speed,
            easing: 'easeOutCubic'
          });
        }
      });
    }

    return Logos;

  })();

  App = (function() {
    function App() {
      this.headline = __bind(this.headline, this);
      this.binding = __bind(this.binding, this);
      var _this = this;
      this.$blackout = $('.blackout');
//      $.pjax({
//        area: '#pjax-container',
//        link: 'a:not([target])',
//        callback: function() {
//          _this.binding();
//          _this.headline();
//          return _this.$blackout.css({
//            display: 'none',
//            opacity: 0
//          });
//        },
//        callbacks: {
//          ajax: {
//            beforeSend: function() {
//              return _this.$blackout.css({
//                display: 'block'
//              }).transit({
//                opacity: 1,
//                duration: 450,
//                easing: 'easeOutCubic'
//              });
//            }
//          }
//        }
//      });
    }

    App.prototype.binding = function() {
      if ($('#googlemap').length) {
        googlemap_init();
      }
      if ($('.page-index').length) {
        new Mainvisual();
        new Panorama();
        new Modal();
        return new Logos();
      }
    };

    App.prototype.headline = function() {
      return new Lines();
    };

    return App;

  })();

  Lines = (function() {
    function Lines() {
      this.hide = __bind(this.hide, this);
      this.show = __bind(this.show, this);
      this.init = __bind(this.init, this);
      this.$innerHeader = $('.inner-header');
      this.$innerContent = $('.inner-content');
      this.$innerHeader.append('<div class="lines"><i class="l1"></i><i class="l2"></i></div>');
      this.$lines = this.$innerHeader.find('.lines');
      this.$el = this.$innerHeader.find('.logo').add(this.$innerHeader.find('.label').add(this.$innerHeader.find('.heading')));
      this.linesSettings = {
        speed: 640,
        easing: 'easeOutCubic'
      };
      this.init();
      this.show();
    }

    Lines.prototype.init = function() {
      this.$el.css({
        y: 232
      });
      this.$innerContent.css({
        y: 80,
        opacity: 0
      });
      this.$lines.find('.l1').css({
        x: '-100%'
      });
      return this.$lines.find('.l2').css({
        x: '100%'
      });
    };

    Lines.prototype.show = function() {
      var _this = this;
      return setTimeout(function() {
        _this.$lines.find('.l1').transit({
          x: 0,
          duration: _this.linesSettings.speed,
          easing: _this.linesSettings.easing
        });
        return _this.$lines.find('.l2').transit({
          x: 0,
          duration: _this.linesSettings.speed,
          easing: _this.linesSettings.easing,
          complete: function() {
            _this.$el.each(function(i, v) {
              return $(v).transit({
                y: 0,
                delay: 80 * i,
                duration: 480,
                easing: _this.linesSettings.easing,
                complete: function() {
                  if (_this.$el.length - 1 <= i) {
                    return _this.hide();
                  }
                }
              });
            });
            return _this.$innerContent.transit({
              y: 0,
              opacity: 1,
              delay: 80 * _this.$el.length + 200,
              duration: 480,
              easing: _this.linesSettings.easing
            });
          }
        });
      }, 580);
    };

    Lines.prototype.hide = function() {
      this.$lines.find('.l1').transit({
        x: '100%',
        duration: this.linesSettings.speed,
        easing: this.linesSettings.easing
      });
      return this.$lines.find('.l2').transit({
        x: '-100%',
        duration: this.linesSettings.speed,
        easing: this.linesSettings.easing
      });
    };

    return Lines;

  })();

  Modal = (function() {
    function Modal() {
      this.update = __bind(this.update, this);
      this.base = __bind(this.base, this);
      this.animation = __bind(this.animation, this);
      this.showLines = __bind(this.showLines, this);
      this.hide = __bind(this.hide, this);
      this.show = __bind(this.show, this);
      this.reset = __bind(this.reset, this);
      var _this = this;
      _this = this;
      this.$window = $(window);
      this.$panorama = $('.panorama');
      this.$modal = this.$panorama.find('.modal');
      this.$lines = this.$modal.find('.lines');
      this.$card = this.$modal.find('.card');
      this.$vertical = this.$lines.find('.vertical');
      this.$horizontal = this.$lines.find('.horizontal');
      this.speed = 550;
      this.count = 0;
      this.countMax = this.$card.length - 1;
      this.paramScale = {
        sc: 1
      };
      this.param3d = {
        x: 0,
        y: 0,
        rx: 0,
        ry: 0
      };
      this.$panorama.find('.zoom').on({
        click: function() {
          var eq;
          eq = $(this).data('eq');
          return _this.show(eq);
        }
      });
      this.$modal.find('.next').on({
        click: function() {
          _this.count++;
          if (_this.countMax < _this.count) {
            _this.count = 0;
          }
          return _this.animation(true);
        }
      });
      this.$modal.find('.prev').on({
        click: function() {
          _this.count--;
          if (_this.count < 0) {
            _this.count = _this.countMax;
          }
          return _this.animation(false);
        }
      });
      this.$modal.find('.close').on({
        click: function() {
          return _this.hide();
        }
      });
    }

    Modal.prototype.reset = function(isNext) {
      this.ww = this.$window.width();
      this.paramScale.sc = 0.88;
      this.param3d.x = this.ww;
      this.param3d.ry = -120;
      if (!isNext) {
        this.param3d.x = -1 * this.param3d.x;
        this.param3d.ry = -1 * this.param3d.ry;
      }
      this.$target.css({
        transform: "perspective(2000px) translate3d(" + this.param3d.x + "px, 0px, 0px) rotateX(0deg) rotateY(" + this.param3d.ry + "deg) rotateZ(0deg) scale(" + this.paramScale.sc + ", " + this.paramScale.sc + ")"
      });
      return this.base();
    };

    Modal.prototype.show = function(eq) {
      var _this = this;
      this.ww = this.$window.width();
      this.paramScale.sc = 0.88;
      this.param3d.x = this.ww;
      this.param3d.ry = -120;
      this.$card.css({
        transform: "perspective(2000px) translate3d(" + this.param3d.x + "px, 0px, 0px) rotateX(0deg) rotateY(" + this.param3d.ry + "deg) rotateZ(0deg) scale(" + this.paramScale.sc + ", " + this.paramScale.sc + ")"
      });
      this.count = eq;
      this.$target = this.$modal.find('.card[data-eq="' + eq + '"]');
      this.reset();
      this.$modal.show();
      return this.showLines(function() {
        var speed;
        speed = 850;
        _this.$card.transit({
          opacity: 1,
          duration: speed,
          easing: 'easeOutCubic'
        });
        return _this.$lines.transit({
          opacity: 0,
          delay: speed * 0.3,
          duration: speed * 0.7,
          easing: 'easeOutCubic'
        });
      });
    };

    Modal.prototype.hide = function() {
      var _this = this;
      return this.showLines(function() {
        var speed;
        speed = 850;
        _this.$lines.transit({
          opacity: 0,
          duration: speed,
          easing: 'easeOutCubic'
        });
        return _this.$card.transit({
          opacity: 0,
          duration: speed,
          easing: 'easeOutCubic',
          complete: function() {
            return _this.$modal.hide();
          }
        });
      });
    };

    Modal.prototype.showLines = function(callback) {
      var _this = this;
      this.$lines.css({
        opacity: 1
      });
      this.$lines.find('.l1').css({
        y: '100%'
      });
      this.$lines.find('.l2').css({
        x: '-100%'
      });
      this.$lines.find('.l3').css({
        y: '-100%'
      });
      this.$lines.find('.l4').css({
        x: '100%'
      });
      this.$vertical.transit({
        y: 0,
        duration: 680,
        easing: 'easeOutCubic'
      });
      return this.$horizontal.transit({
        x: 0,
        duration: 680,
        easing: 'easeOutCubic',
        complete: function() {
          return callback();
        }
      });
    };

    Modal.prototype.animation = function(isNext) {
      var ry, x,
        _this = this;
      this.paramScale = {
        sc: 1
      };
      this.param3d = {
        x: 0,
        y: 0,
        rx: 0,
        ry: 0
      };
      if (isNext) {
        x = -this.ww;
        ry = 80;
      } else {
        x = this.ww;
        ry = -80;
      }
      $(this.paramScale).stop().animate({
        sc: 0.88
      }, {
        duration: this.speed,
        easing: 'easeOutQuart',
        step: function() {
          return _this.update();
        },
        complete: function() {
          return _this.update();
        }
      });
      return $(this.param3d).stop().animate({
        x: x,
        ry: ry
      }, {
        duration: this.speed,
        easing: 'easeInQuart',
        step: function() {
          return _this.update();
        },
        complete: function() {
          _this.update();
          return _this.reset(isNext);
        }
      });
    };

    Modal.prototype.base = function() {
      var _this = this;
      this.$target = this.$card.eq(this.count);
      $(this.paramScale).stop().animate({
        sc: 1
      }, {
        duration: this.speed,
        easing: 'easeInQuart',
        step: function() {
          return _this.update();
        },
        complete: function() {
          return _this.update();
        }
      });
      return $(this.param3d).stop().animate({
        x: 0,
        ry: 0
      }, {
        duration: this.speed,
        easing: 'easeOutQuart',
        step: function() {
          return _this.update();
        },
        complete: function() {
          return _this.update();
        }
      });
    };

    Modal.prototype.update = function() {
      var rx, ry, sc, x, y;
      sc = this.paramScale.sc;
      x = this.param3d.x;
      y = this.param3d.y;
      rx = this.param3d.rx;
      ry = this.param3d.ry;
      return this.$target.css({
        transform: "perspective(2000px) translate3d(" + x + "px, " + y + "px, 0px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) rotateZ(0deg) scale(" + sc + ", " + sc + ")"
      });
    };

    return Modal;

  })();

  Mainvisual = (function() {
    function Mainvisual() {
      this.start = __bind(this.start, this);
      this.init = __bind(this.init, this);
      this.resize = __bind(this.resize, this);
      var _this = this;
      this.$window = $(window);
      this.$mv = $('.sec-mainvisual');
      this.$elems = this.$mv.find('.logo').add(this.$mv.find('h1 span'));
      this.$window.on({
        resize: function() {
          return _this.resize();
        }
      });
      this.init();
      this.resize();
      setTimeout(this.start, 500);
    }

    Mainvisual.prototype.resize = function() {
      this.wh = this.$window.height();
      return this.$mv.css({
        height: this.wh
      });
    };

    Mainvisual.prototype.init = function() {
      return this.$elems.css({
        y: 60,
        opacity: 0
      });
    };

    Mainvisual.prototype.start = function() {
      var len,
        _this = this;
      len = this.$elems.length - 1;
      return this.$elems.each(function(i, v) {
        return $(v).transit({
          y: 0,
          opacity: 1,
          delay: 150 * i,
          duration: 540,
          easing: 'easeOutCubic',
          complete: function() {
            if (len <= len) {
              setTimeout(function() {
                return _this.$mv.find('.mark').addClass('light');
              }, 250);
              return $('.filter').transit({
                boxShadow: ' 0 0 150px -150px #000 inset',
                delay: 1000,
                duration: 1500,
                easing: 'linear',
                complete: function() {
                  return $(this).remove();
                }
              });
            }
          }
        });
      });
    };

    return Mainvisual;

  })();

  Panorama = (function() {
    function Panorama() {
      this.start = __bind(this.start, this);
      this.init = __bind(this.init, this);
      this.$window = $(window);
      this.$panorama = $('.sec-audio .panorama');
      this.$mousearea = this.$panorama.find('.mousearea');
      this.$panoramaInner = this.$panorama.find('.inner');
      this.$panoramaImg = this.$panorama.find('img');
      this.imageWidth = 3106;
      this.$panoramaInner.css({
        marginLeft: -this.imageWidth / 2
      });
      this.init();
      this.start();
    }

    Panorama.prototype.init = function() {
      this.windowWidth = this.$window.width();
      return this.imageSideWidth = (this.imageWidth - this.windowWidth) / 2;
    };

    Panorama.prototype.start = function() {
      var _this = this;
      this.$window.on({
        resize: function() {
          return _this.init();
        }
      });
      return this.$mousearea.on({
        mouseenter: function(e) {
          var mouseRateX;
          if (!_this.isMouseOn) {
            mouseRateX = e.clientX / (_this.windowWidth / 2);
            return _this.$panoramaInner.transit({
              x: _this.imageSideWidth * (1 - mouseRateX),
              duration: 180,
              easing: 'easeOutCubic',
              complete: function() {
                return _this.isMouseOn = true;
              }
            });
          }
        },
        mouseleave: function() {
          return _this.isMouseOn = false;
        },
        mousemove: function(e) {
          var mouseRateX;
          if (_this.isMouseOn) {
            mouseRateX = e.clientX / (_this.windowWidth / 2);
            return _this.$panoramaInner.css({
              x: _this.imageSideWidth * (1 - mouseRateX)
            });
          }
        }
      });
    };

    return Panorama;

  })();

}).call(this);
