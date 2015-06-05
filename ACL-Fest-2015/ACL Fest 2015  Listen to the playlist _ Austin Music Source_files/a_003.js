/* Detect-zoom
 * -----------
 * Cross Browser Zoom and Pixel Ratio Detector
 * Version 1.0.4 | Apr 1 2013
 * dual-licensed under the WTFPL and MIT license
 * Maintained by https://github/tombigel
 * Original developer https://github.com/yonran
 */

//AMD and CommonJS initialization copied from https://github.com/zohararad/audio5js
(function (root, ns, factory) {
    "use strict";

    if (typeof (module) !== 'undefined' && module.exports) { // CommonJS
        module.exports = factory(ns, root);
    } else if (typeof (define) === 'function' && define.amd) { // AMD
        define("factory", function () {
            return factory(ns, root);
        });
    } else {
        root[ns] = factory(ns, root);
    }

}(window, 'detectZoom', function () {

    /**
     * Use devicePixelRatio if supported by the browser
     * @return {Number}
     * @private
     */
    var devicePixelRatio = function () {
        return window.devicePixelRatio || 1;
    };

    /**
     * Fallback function to set default values
     * @return {Object}
     * @private
     */
    var fallback = function () {
        return {
            zoom: 1,
            devicePxPerCssPx: 1
        };
    };
    /**
     * IE 8 and 9: no trick needed!
     * TODO: Test on IE10 and Windows 8 RT
     * @return {Object}
     * @private
     **/
    var ie8 = function () {
        var zoom = Math.round((screen.deviceXDPI / screen.logicalXDPI) * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * For IE10 we need to change our technique again...
     * thanks https://github.com/stefanvanburen
     * @return {Object}
     * @private
     */
    var ie10 = function () {
        var zoom = Math.round((document.documentElement.offsetHeight / window.innerHeight) * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * Mobile WebKit
     * the trick: window.innerWIdth is in CSS pixels, while
     * screen.width and screen.height are in system pixels.
     * And there are no scrollbars to mess up the measurement.
     * @return {Object}
     * @private
     */
    var webkitMobile = function () {
        var deviceWidth = (Math.abs(window.orientation) == 90) ? screen.height : screen.width;
        var zoom = deviceWidth / window.innerWidth;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * Desktop Webkit
     * the trick: an element's clientHeight is in CSS pixels, while you can
     * set its line-height in system pixels using font-size and
     * -webkit-text-size-adjust:none.
     * device-pixel-ratio: http://www.webkit.org/blog/55/high-dpi-web-sites/
     *
     * Previous trick (used before http://trac.webkit.org/changeset/100847):
     * documentElement.scrollWidth is in CSS pixels, while
     * document.width was in system pixels. Note that this is the
     * layout width of the document, which is slightly different from viewport
     * because document width does not include scrollbars and might be wider
     * due to big elements.
     * @return {Object}
     * @private
     */
    var webkit = function () {
        var important = function (str) {
            return str.replace(/;/g, " !important;");
        };

        var div = document.createElement('div');
        div.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0";
        div.setAttribute('style', important('font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;'));

        // The container exists so that the div will be laid out in its own flow
        // while not impacting the layout, viewport size, or display of the
        // webpage as a whole.
        // Add !important and relevant CSS rule resets
        // so that other rules cannot affect the results.
        var container = document.createElement('div');
        container.setAttribute('style', important('width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;'));
        container.appendChild(div);

        document.body.appendChild(container);
        var zoom = 1000 / div.clientHeight;
        zoom = Math.round(zoom * 100) / 100;
        document.body.removeChild(container);

        return{
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * no real trick; device-pixel-ratio is the ratio of device dpi / css dpi.
     * (Note that this is a different interpretation than Webkit's device
     * pixel ratio, which is the ratio device dpi / system dpi).
     *
     * Also, for Mozilla, there is no difference between the zoom factor and the device ratio.
     *
     * @return {Object}
     * @private
     */
    var firefox4 = function () {
        var zoom = mediaQueryBinarySearch('min--moz-device-pixel-ratio', '', 0, 10, 20, 0.0001);
        zoom = Math.round(zoom * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom
        };
    };

    /**
     * Firefox 18.x
     * Mozilla added support for devicePixelRatio to Firefox 18,
     * but it is affected by the zoom level, so, like in older
     * Firefox we can't tell if we are in zoom mode or in a device
     * with a different pixel ratio
     * @return {Object}
     * @private
     */
    var firefox18 = function () {
        return {
            zoom: firefox4().zoom,
            devicePxPerCssPx: devicePixelRatio()
        };
    };

    /**
     * works starting Opera 11.11
     * the trick: outerWidth is the viewport width including scrollbars in
     * system px, while innerWidth is the viewport width including scrollbars
     * in CSS px
     * @return {Object}
     * @private
     */
    var opera11 = function () {
        var zoom = window.top.outerWidth / window.top.innerWidth;
        zoom = Math.round(zoom * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * Use a binary search through media queries to find zoom level in Firefox
     * @param property
     * @param unit
     * @param a
     * @param b
     * @param maxIter
     * @param epsilon
     * @return {Number}
     */
    var mediaQueryBinarySearch = function (property, unit, a, b, maxIter, epsilon) {
        var matchMedia;
        var head, style, div;
        if (window.matchMedia) {
            matchMedia = window.matchMedia;
        } else {
            head = document.getElementsByTagName('head')[0];
            style = document.createElement('style');
            head.appendChild(style);

            div = document.createElement('div');
            div.className = 'mediaQueryBinarySearch';
            div.style.display = 'none';
            document.body.appendChild(div);

            matchMedia = function (query) {
                style.sheet.insertRule('@media ' + query + '{.mediaQueryBinarySearch ' + '{text-decoration: underline} }', 0);
                var matched = getComputedStyle(div, null).textDecoration == 'underline';
                style.sheet.deleteRule(0);
                return {matches: matched};
            };
        }
        var ratio = binarySearch(a, b, maxIter);
        if (div) {
            head.removeChild(style);
            document.body.removeChild(div);
        }
        return ratio;

        function binarySearch(a, b, maxIter) {
            var mid = (a + b) / 2;
            if (maxIter <= 0 || b - a < epsilon) {
                return mid;
            }
            var query = "(" + property + ":" + mid + unit + ")";
            if (matchMedia(query).matches) {
                return binarySearch(mid, b, maxIter - 1);
            } else {
                return binarySearch(a, mid, maxIter - 1);
            }
        }
    };

    /**
     * Generate detection function
     * @private
     */
    var detectFunction = (function () {
        var func = fallback;
        //IE8+
        if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) {
            func = ie8;
        }
        // IE10+ / Touch
        else if (window.navigator.msMaxTouchPoints) {
            func = ie10;
        }
        //Mobile Webkit
        else if ('orientation' in window && typeof document.body.style.webkitMarquee === 'string') {
            func = webkitMobile;
        }
        //WebKit
        else if (typeof document.body.style.webkitMarquee === 'string') {
            func = webkit;
        }
        //Opera
        else if (navigator.userAgent.indexOf('Opera') >= 0) {
            func = opera11;
        }
        //Last one is Firefox
        //FF 18.x
        else if (window.devicePixelRatio) {
            func = firefox18;
        }
        //FF 4.0 - 17.x
        else if (firefox4().zoom > 0.001) {
            func = firefox4;
        }

        return func;
    }());


    return ({

        /**
         * Ratios.zoom shorthand
         * @return {Number} Zoom level
         */
        zoom: function () {
            return detectFunction().zoom;
        },

        /**
         * Ratios.devicePxPerCssPx shorthand
         * @return {Number} devicePxPerCssPx level
         */
        device: function () {
            return detectFunction().devicePxPerCssPx;
        }
    });
}));

var wpcom_img_zoomer = {
	zoomed: false,
	timer: null,
	interval: 1000, // zoom polling interval in millisecond

	// Should we apply width/height attributes to control the image size?
	imgNeedsSizeAtts: function( img ) {
		// Do not overwrite existing width/height attributes.
		if ( img.getAttribute('width') !== null || img.getAttribute('height') !== null )
			return false;
		// Do not apply the attributes if the image is already constrained by a parent element.
		if ( img.width < img.naturalWidth || img.height < img.naturalHeight )
			return false;
		return true;
	},

	init: function() {
		var t = this;
		try{
			t.zoomImages();
			t.timer = setInterval( function() { t.zoomImages(); }, t.interval );
		}
		catch(e){
		}
	},

	stop: function() {
		if ( this.timer )
			clearInterval( this.timer );
	},

	getScale: function() {
		var scale = detectZoom.device();
		// Round up to 1.5 or the next integer below the cap.
		if      ( scale <= 1.0 ) scale = 1.0;
		else if ( scale <= 1.5 ) scale = 1.5;
		else if ( scale <= 2.0 ) scale = 2.0;
		else if ( scale <= 3.0 ) scale = 3.0;
		else if ( scale <= 4.0 ) scale = 4.0;
		else                     scale = 5.0;
		return scale;
	},

	shouldZoom: function( scale ) {
		var t = this;
		// Do not operate on hidden frames.
		if ( "innerWidth" in window && !window.innerWidth )
			return false;
		// Don't do anything until scale > 1
		if ( scale == 1.0 && t.zoomed == false )
			return false;
		return true;
	},

	zoomImages: function() {
		var t = this;
		var scale = t.getScale();
		if ( ! t.shouldZoom( scale ) ){
			return;
		}
		t.zoomed = true;
		// Loop through all the <img> elements on the page.
		var imgs = document.getElementsByTagName("img");

		for ( var i = 0; i < imgs.length; i++ ) {
			// Wait for original images to load
			if ( "complete" in imgs[i] && ! imgs[i].complete )
				continue;

			// Skip images that don't need processing.
			var imgScale = imgs[i].getAttribute("scale");
			if ( imgScale == scale || imgScale == "0" )
				continue;

			// Skip images that have already failed at this scale
			var scaleFail = imgs[i].getAttribute("scale-fail");
			if ( scaleFail && scaleFail <= scale )
				continue;

			// Skip images that have no dimensions yet.
			if ( ! ( imgs[i].width && imgs[i].height ) )
				continue;

			// Skip images from Lazy Load plugins
			if ( ! imgScale && imgs[i].getAttribute("data-lazy-src") && (imgs[i].getAttribute("data-lazy-src") !== imgs[i].getAttribute("src")))
				continue;

			if ( t.scaleImage( imgs[i], scale ) ) {
				// Mark the img as having been processed at this scale.
				imgs[i].setAttribute("scale", scale);
			}
			else {
				// Set the flag to skip this image.
				imgs[i].setAttribute("scale", "0");
			}
		}
	},

	scaleImage: function( img, scale ) {
		var t = this;
		var newSrc = img.src;

		// Skip slideshow images
		if ( img.parentNode.className.match(/slideshow-slide/) )
			return false;

		// Scale gravatars that have ?s= or ?size=
		if ( img.src.match( /^https?:\/\/([^\/]*\.)?gravatar\.com\/.+[?&](s|size)=/ ) ) {
			newSrc = img.src.replace( /([?&](s|size)=)(\d+)/, function( $0, $1, $2, $3 ) {
				// Stash the original size
				var originalAtt = "originals",
				originalSize = img.getAttribute(originalAtt);
				if ( originalSize === null ) {
					originalSize = $3;
					img.setAttribute(originalAtt, originalSize);
					if ( t.imgNeedsSizeAtts( img ) ) {
						// Fix width and height attributes to rendered dimensions.
						img.width = img.width;
						img.height = img.height;
					}
				}
				// Get the width/height of the image in CSS pixels
				var size = img.clientWidth;
				// Convert CSS pixels to device pixels
				var targetSize = Math.ceil(img.clientWidth * scale);
				// Don't go smaller than the original size
				targetSize = Math.max( targetSize, originalSize );
				// Don't go larger than the service supports
				targetSize = Math.min( targetSize, 512 );
				return $1 + targetSize;
			});
		}

		// Scale resize queries (*.files.wordpress.com) that have ?w= or ?h=
		else if ( img.src.match( /^https?:\/\/([^\/]+)\.files\.wordpress\.com\/.+[?&][wh]=/ ) ) {
			if ( img.src.match( /[?&]crop/ ) )
				return false;
			var changedAttrs = {};
			var matches = img.src.match( /([?&]([wh])=)(\d+)/g );
			for ( var i = 0; i < matches.length; i++ ) {
				var lr = matches[i].split( '=' );
				var thisAttr = lr[0].replace(/[?&]/g, '' );
				var thisVal = lr[1];

				// Stash the original size
				var originalAtt = 'original' + thisAttr, originalSize = img.getAttribute( originalAtt );
				if ( originalSize === null ) {
					originalSize = thisVal;
					img.setAttribute(originalAtt, originalSize);
					if ( t.imgNeedsSizeAtts( img ) ) {
						// Fix width and height attributes to rendered dimensions.
						img.width = img.width;
						img.height = img.height;
					}
				}
				// Get the width/height of the image in CSS pixels
				var size = thisAttr == 'w' ? img.clientWidth : img.clientHeight;
				var naturalSize = ( thisAttr == 'w' ? img.naturalWidth : img.naturalHeight );
				// Convert CSS pixels to device pixels
				var targetSize = Math.ceil(size * scale);
				// Don't go smaller than the original size
				targetSize = Math.max( targetSize, originalSize );
				// Don't go bigger unless the current one is actually lacking
				if ( scale > img.getAttribute("scale") && targetSize <= naturalSize )
					targetSize = thisVal;
				// Don't try to go bigger if the image is already smaller than was requested
				if ( naturalSize < thisVal )
					targetSize = thisVal;
				if ( targetSize != thisVal )
					changedAttrs[ thisAttr ] = targetSize;
			}
			var w = changedAttrs.w || false;
			var h = changedAttrs.h || false;

			if ( w ) {
				newSrc = img.src.replace(/([?&])w=\d+/g, function( $0, $1 ) {
					return $1 + 'w=' + w;
				});
			}
			if ( h ) {
				newSrc = newSrc.replace(/([?&])h=\d+/g, function( $0, $1 ) {
					return $1 + 'h=' + h;
				});
			}
		}

		// Scale mshots that have width
		else if ( img.src.match(/^https?:\/\/([^\/]+\.)*(wordpress|wp)\.com\/mshots\/.+[?&]w=\d+/) ) {
			newSrc = img.src.replace( /([?&]w=)(\d+)/, function($0, $1, $2) {
				// Stash the original size
				var originalAtt = 'originalw', originalSize = img.getAttribute(originalAtt);
				if ( originalSize === null ) {
					originalSize = $2;
					img.setAttribute(originalAtt, originalSize);
					if ( t.imgNeedsSizeAtts( img ) ) {
						// Fix width and height attributes to rendered dimensions.
						img.width = img.width;
						img.height = img.height;
					}
				}
				// Get the width of the image in CSS pixels
				var size = img.clientWidth;
				// Convert CSS pixels to device pixels
				var targetSize = Math.ceil(size * scale);
				// Don't go smaller than the original size
				targetSize = Math.max( targetSize, originalSize );
				// Don't go bigger unless the current one is actually lacking
				if ( scale > img.getAttribute("scale") && targetSize <= img.naturalWidth )
					targetSize = $2;
				if ( $2 != targetSize )
					return $1 + targetSize;
				return $0;
			});
		}

		// Scale simple imgpress queries (s0.wp.com) that only specify w/h/fit
		else if ( img.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/imgpress\?(.+)/) ) {
			var imgpressSafeFunctions = ["zoom", "url", "h", "w", "fit", "filter", "brightness", "contrast", "colorize", "smooth", "unsharpmask"];
			// Search the query string for unsupported functions.
			var qs = RegExp.$3.split('&');
			for ( var q in qs ) {
				q = qs[q].split('=')[0];
				if ( imgpressSafeFunctions.indexOf(q) == -1 ) {
					return false;
				}
			}
			// Fix width and height attributes to rendered dimensions.
			img.width = img.width;
			img.height = img.height;
			// Compute new src
			if ( scale == 1 )
				newSrc = img.src.replace(/\?(zoom=[^&]+&)?/, '?');
			else
				newSrc = img.src.replace(/\?(zoom=[^&]+&)?/, '?zoom=' + scale + '&');
		}

		// Scale LaTeX images or Photon queries (i#.wp.com)
		else if (
			img.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/latex\.php\?(latex|zoom)=(.+)/) ||
			img.src.match(/^https?:\/\/i[\d]{1}\.wp\.com\/(.+)/)
		) {
			// Fix width and height attributes to rendered dimensions.
			img.width = img.width;
			img.height = img.height;
			// Compute new src
			if ( scale == 1 ) {
				newSrc = img.src.replace(/\?(zoom=[^&]+&)?/, '?');
			} else {
				newSrc = img.src;

				var url_var = newSrc.match( /\?w=(\d+)/ );
				if ( url_var !== null && url_var[1] ) {
					newSrc = newSrc.replace( new RegExp( 'w=' + url_var[1] ), 'w=' + img.width );
				}

				url_var = newSrc.match( /\?h=(\d+)/ );
				if ( url_var !== null && url_var[1] ) {
					newSrc = newSrc.replace( new RegExp( 'h=' + url_var[1] ), 'h=' + img.height );
				}

				var zoom_arg = '&zoom=2';
				if ( !newSrc.match( /\?/ ) ) {
					zoom_arg = '?zoom=2';
				}
				img.setAttribute( 'srcset', newSrc + zoom_arg + ' ' + scale + 'x' );
			}
		}

		// Scale static assets that have a name matching *-1x.png or *@1x.png
		else if ( img.src.match(/^https?:\/\/[^\/]+\/.*[-@]([12])x\.(gif|jpeg|jpg|png)(\?|$)/) ) {
			// Fix width and height attributes to rendered dimensions.
			img.width = img.width;
			img.height = img.height;
			var currentSize = RegExp.$1, newSize = currentSize;
			if ( scale <= 1 )
				newSize = 1;
			else
				newSize = 2;
			if ( currentSize != newSize )
				newSrc = img.src.replace(/([-@])[12]x\.(gif|jpeg|jpg|png)(\?|$)/, '$1'+newSize+'x.$2$3');
		}

		else {
			return false;
		}

		// Don't set img.src unless it has changed. This avoids unnecessary reloads.
		if ( newSrc != img.src ) {
			// Store the original img.src
			var prevSrc, origSrc = img.getAttribute("src-orig");
			if ( !origSrc ) {
				origSrc = img.src;
				img.setAttribute("src-orig", origSrc);
			}
			// In case of error, revert img.src
			prevSrc = img.src;
			img.onerror = function(){
				img.src = prevSrc;
				if ( img.getAttribute("scale-fail") < scale )
					img.setAttribute("scale-fail", scale);
				img.onerror = null;
			};
			// Finally load the new image
			img.src = newSrc;
		}

		return true;
	}
};

wpcom_img_zoomer.init();
;
/*
 * Swipe 2.0
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
*/

function Swipe(container, options) {

  "use strict";

  // utilities
  var noop = function() {}; // simple no operation function
  var offloadFn = function(fn) { setTimeout(fn || noop, 0) }; // offload a functions execution
  
  // check browser capabilities
  var browser = {
    addEventListener: !!window.addEventListener,
    touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
    transitions: (function(temp) {
      var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
      for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
      return false;
    })(document.createElement('swipe'))
  };

  // quit if no root element
  if (!container) return;
  var element = container.children[0];
  var slides, slidePos, width, length;
  options = options || {};
  var index = parseInt(options.startSlide, 10) || 0;
  var speed = options.speed || 300;
  options.continuous = options.continuous !== undefined ? options.continuous : true;

  function setup() {

    // cache slides
    slides = element.children;
    length = slides.length;

    // set continuous to false if only one slide
    if (slides.length < 2) options.continuous = false;

    //special case if two slides
    if (browser.transitions && options.continuous && slides.length < 3) {
      element.appendChild(slides[0].cloneNode(true));
      element.appendChild(element.children[1].cloneNode(true));
      slides = element.children;
    }

    // create an array to store current positions of each slide
    slidePos = new Array(slides.length);

    // determine width of each slide
    width = container.getBoundingClientRect().width || container.offsetWidth;

    element.style.width = (slides.length * width) + 'px';

    // stack elements
    var pos = slides.length;
    while(pos--) {

      var slide = slides[pos];

      slide.style.width = width + 'px';
      slide.setAttribute('data-index', pos);

      if (browser.transitions) {
        slide.style.left = (pos * -width) + 'px';
        move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
      }

    }

    // reposition elements before and after index
    if (options.continuous && browser.transitions) {
      move(circle(index-1), -width, 0);
      move(circle(index+1), width, 0);
    }

    if (!browser.transitions) element.style.left = (index * -width) + 'px';

    container.style.visibility = 'visible';

  }

  function prev() {

    if (options.continuous) slide(index-1);
    else if (index) slide(index-1);

  }

  function next() {

    if (options.continuous) slide(index+1);
    else if (index < slides.length - 1) slide(index+1);

  }

  function circle(index) {

    // a simple positive modulo using slides.length
    return (slides.length + (index % slides.length)) % slides.length;

  }

  function slide(to, slideSpeed) {

    // do nothing if already on requested slide
    if (index == to) return;
    
    if (browser.transitions) {

      var direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward

      // get the actual position of the slide
      if (options.continuous) {
        var natural_direction = direction;
        direction = -slidePos[circle(to)] / width;

        // if going forward but to < index, use to = slides.length + to
        // if going backward but to > index, use to = -slides.length + to
        if (direction !== natural_direction) to =  -direction * slides.length + to;

      }

      var diff = Math.abs(index-to) - 1;

      // move all the slides between index and to in the right direction
      while (diff--) move( circle((to > index ? to : index) - diff - 1), width * direction, 0);
            
      to = circle(to);

      move(index, width * direction, slideSpeed || speed);
      move(to, 0, slideSpeed || speed);

      if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place
      
    } else {     
      
      to = circle(to);
      animate(index * -width, to * -width, slideSpeed || speed);
      //no fallback for a circular continuous if the browser does not accept transitions
    }

    index = to;
    offloadFn(options.callback && options.callback(index, slides[index]));
  }

  function move(index, dist, speed) {

    translate(index, dist, speed);
    slidePos[index] = dist;

  }

  function translate(index, dist, speed) {

    var slide = slides[index];
    var style = slide && slide.style;

    if (!style) return;

    style.webkitTransitionDuration = 
    style.MozTransitionDuration = 
    style.msTransitionDuration = 
    style.OTransitionDuration = 
    style.transitionDuration = speed + 'ms';

    style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
    style.msTransform = 
    style.MozTransform = 
    style.OTransform = 'translateX(' + dist + 'px)';

  }

  function animate(from, to, speed) {

    // if not an animation, just reposition
    if (!speed) {

      element.style.left = to + 'px';
      return;

    }
    
    var start = +new Date;
    
    var timer = setInterval(function() {

      var timeElap = +new Date - start;
      
      if (timeElap > speed) {

        element.style.left = to + 'px';

        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

        clearInterval(timer);
        return;

      }

      element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';

    }, 4);

  }

  // setup auto slideshow
  var delay = options.auto || 0;
  var interval;

  function begin() {

    interval = setTimeout(next, delay);

  }

  function stop() {

    delay = 0;
    clearTimeout(interval);

  }


  // setup initial vars
  var start = {};
  var delta = {};
  var isScrolling;      

  // setup event capturing
  var events = {

    handleEvent: function(event) {

      switch (event.type) {
        case 'touchstart': this.start(event); break;
        case 'touchmove': this.move(event); break;
        case 'touchend': offloadFn(this.end(event)); break;
        case 'webkitTransitionEnd':
        case 'msTransitionEnd':
        case 'oTransitionEnd':
        case 'otransitionend':
        case 'transitionend': offloadFn(this.transitionEnd(event)); break;
        case 'resize': offloadFn(setup.call()); break;
      }

      if (options.stopPropagation) event.stopPropagation();

    },
    start: function(event) {

      var touches = event.touches[0];

      // measure start values
      start = {

        // get initial touch coords
        x: touches.pageX,
        y: touches.pageY,

        // store time to determine touch duration
        time: +new Date

      };
      
      // used for testing first move event
      isScrolling = undefined;

      // reset delta and end measurements
      delta = {};

      // attach touchmove and touchend listeners
      element.addEventListener('touchmove', this, false);
      element.addEventListener('touchend', this, false);

    },
    move: function(event) {

      // ensure swiping with one touch and not pinching
      if ( event.touches.length > 1 || event.scale && event.scale !== 1) return

      if (options.disableScroll) event.preventDefault();

      var touches = event.touches[0];

      // measure change in x and y
      delta = {
        x: touches.pageX - start.x,
        y: touches.pageY - start.y
      }

      // determine if scrolling test has run - one time test
      if ( typeof isScrolling == 'undefined') {
        isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
      }

      // if user is not trying to scroll vertically
      if (!isScrolling) {

        // prevent native scrolling 
        event.preventDefault();

        // stop slideshow
        stop();

        // increase resistance if first or last slide
        if (options.continuous) { // we don't add resistance at the end

          translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);

        } else {

          delta.x = 
            delta.x / 
              ( (!index && delta.x > 0               // if first slide and sliding left
                || index == slides.length - 1        // or if last slide and sliding right
                && delta.x < 0                       // and if sliding at all
              ) ?                      
              ( Math.abs(delta.x) / width + 1 )      // determine resistance level
              : 1 );                                 // no resistance if false
          
          // translate 1:1
          translate(index-1, delta.x + slidePos[index-1], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(index+1, delta.x + slidePos[index+1], 0);
        }

      }

    },
    end: function(event) {

      // measure duration
      var duration = +new Date - start.time;

      // determine if slide attempt triggers next/prev slide
      var isValidSlide = 
            Number(duration) < 250               // if slide duration is less than 250ms
            && Math.abs(delta.x) > 20            // and if slide amt is greater than 20px
            || Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width

      // determine if slide attempt is past start and end
      var isPastBounds = 
            !index && delta.x > 0                            // if first slide and slide amt is greater than 0
            || index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0

      if (options.continuous) isPastBounds = false;
      
      // determine direction of swipe (true:right, false:left)
      var direction = delta.x < 0;

      // if not scrolling vertically
      if (!isScrolling) {

        if (isValidSlide && !isPastBounds) {

          if (direction) {

            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index-1), -width, 0);
              move(circle(index+2), width, 0);

            } else {
              move(index-1, -width, 0);
            }

            move(index, slidePos[index]-width, speed);
            move(circle(index+1), slidePos[circle(index+1)]-width, speed);
            index = circle(index+1);  
                      
          } else {
            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index+1), width, 0);
              move(circle(index-2), -width, 0);

            } else {
              move(index+1, width, 0);
            }

            move(index, slidePos[index]+width, speed);
            move(circle(index-1), slidePos[circle(index-1)]+width, speed);
            index = circle(index-1);

          }

          options.callback && options.callback(index, slides[index]);

        } else {

          if (options.continuous) {

            move(circle(index-1), -width, speed);
            move(index, 0, speed);
            move(circle(index+1), width, speed);

          } else {

            move(index-1, -width, speed);
            move(index, 0, speed);
            move(index+1, width, speed);
          }

        }

      }

      // kill touchmove and touchend event listeners until touchstart called again
      element.removeEventListener('touchmove', events, false)
      element.removeEventListener('touchend', events, false)

    },
    transitionEnd: function(event) {

      if (parseInt(event.target.getAttribute('data-index'), 10) == index) {
        
        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

      }

    }

  }

  // trigger setup
  setup();

  // start auto slideshow if applicable
  if (delay) begin();


  // add event listeners
  if (browser.addEventListener) {
    
    // set touchstart event on element    
    if (browser.touch) element.addEventListener('touchstart', events, false);

    if (browser.transitions) {
      element.addEventListener('webkitTransitionEnd', events, false);
      element.addEventListener('msTransitionEnd', events, false);
      element.addEventListener('oTransitionEnd', events, false);
      element.addEventListener('otransitionend', events, false);
      element.addEventListener('transitionend', events, false);
    }

    // set resize event on window
    window.addEventListener('resize', events, false);

  } else {

    window.onresize = function () { setup() }; // to play nice with old IE

  }

  // expose the Swipe API
  return {
    setup: function() {

      setup();

    },
    slide: function(to, speed) {
      
      // cancel slideshow
      stop();
      
      slide(to, speed);

    },
    prev: function() {

      // cancel slideshow
      stop();

      prev();

    },
    next: function() {

      // cancel slideshow
      stop();

      next();

    },
    getPos: function() {

      // return current index position
      return index;

    },
    getNumSlides: function() {
      
      // return total number of slides
      return length;
    },
    kill: function() {

      // cancel slideshow
      stop();

      // reset element
      element.style.width = 'auto';
      element.style.left = 0;

      // reset slides
      var pos = slides.length;
      while(pos--) {

        var slide = slides[pos];
        slide.style.width = '100%';
        slide.style.left = 0;

        if (browser.transitions) translate(pos, 0, 0);

      }

      // removed event listeners
      if (browser.addEventListener) {

        // remove current event listeners
        element.removeEventListener('touchstart', events, false);
        element.removeEventListener('webkitTransitionEnd', events, false);
        element.removeEventListener('msTransitionEnd', events, false);
        element.removeEventListener('oTransitionEnd', events, false);
        element.removeEventListener('otransitionend', events, false);
        element.removeEventListener('transitionend', events, false);
        window.removeEventListener('resize', events, false);

      }
      else {

        window.onresize = null;

      }

    }
  }

}


if ( window.jQuery || window.Zepto ) {
  (function($) {
    $.fn.Swipe = function(params) {
      return this.each(function() {
        $(this).data('Swipe', new Swipe($(this)[0], params));
      });
    }
  })( window.jQuery || window.Zepto )
}
;
/**
 * Comment Likes - JavaScript
 *
 * This handles liking and unliking comments, as well as viewing who has
 * liked a particular comment.
 *
 * @dependency  jQuery
 * @dependency  Swipe
 *
 * @package     Comment_Likes
 * @subpackage  JavaScript
 */
jQuery( function() {
	var $ = jQuery;
	var extWin;
	var extWinCheck;
	var commentLikeEvent;

	// The O2 theme re-injects this script into the DOM when somebody
	// creates a new thread and the page is already open, but we don't
	// want to run this script a second time.
	if ( window.comment_likes_loaded ) return;
	window.comment_likes_loaded = true;

	// Client-side cache of who liked a particular comment to avoid
	// having to hit the server multiple times for the same data.
	var comment_like_cache = {};

	/**
	 * Parse the comment ID from a comment like link.
	 */
	var get_comment_id = function( $link ) {
		var comment_id = $link.attr( 'href' ).split( 'like_comment=' );
		return comment_id[1].split( '&_wpnonce=' )[0];
	};

	/**
	 * Handle an ajax action on the comment like link.
	 */
	var handle_link_action = function( $link, action, comment_id, callback ) {
		var nonce = $link.attr( 'href' ).split( '_wpnonce=' )[1];

		$.post( '/wp-admin/admin-ajax.php', {
			'action': action,
			'_wpnonce': nonce,
			'like_comment': comment_id,
			'blog_id': Number( $link.data( 'blog' ) )
		}, callback, 'json' );
	};

	// Overlay used for displaying comment like info.
	var overlay = {

		// Overlay element.
		$el: $( '<div/>' )
			.appendTo( 'body' )
			.addClass( 'comment-likes-overlay' )
			.hide()
			.mouseenter( function() {
				// Don't hide the overlay if the user is mousing over it.
				overlay.cancel_hide();
			} ).mouseleave( function() {
				overlay.request_hide();
			} ),

		// Inner contents of overlay.
		$inner: null,

		// Instance of the Swipe library.
		swipe: null,

		// Initialise the overlay for use, removing any old content.
		clear: function() {
			// Unload any previous instance of Swipe (to avoid leaking a global
			// event handler). This is done before clearing the contents of the
			// overlay because Swipe expects the slides to still be present.
			if ( this.swipe ) {
				this.swipe.kill();
				this.swipe = null;
			}
			this.$el.html( '' );
			this.$inner = $( '<div/>' ).addClass( 'inner' ).appendTo( this.$el );
		},

		/**
		 * Construct a list (<ul>) of user (gravatar, name) details.
		 *
		 * @param  data     liker data returned from the server
		 * @param  klass    CSS class to apply to the <ul> element
		 * @param  start    index of user to start at
		 * @param  length   number of users to include in the list
		 *
		 * @return          HTML for the list
		 */
		get_user_bits: function( data, klass, start, length ) {
			start = start || 0;
			var last = start + ( length || data.length );
			last = ( last > data.length ) ? data.length : last;
			var html = '<div class="liker-list"><ul class="' + ( klass || '' ) + '">';
			for ( var i = start; i < last; ++i ) {
				var user = data[ i ];
				html += '<li>';
				html += '<a rel="nofollow" title="' + user.display_name_esc + '" href="' + user.profile_url_esc + '"><img src="' + user.avatar_url_esc + '" alt="' + user.display_name_esc + '"  /> <span class="user-name">' + user.display_name_esc + '</span></a>';
				html += '</li>';
			}
			html += '</ul></div>';
			return html;
		},

		/**
		 * Render the display of who has liked this comment. The type of
		 * display depends on how many people have liked the comment.
		 * If more than 10 people have liked the comment, this function
		 * renders navigation controls and sets up the Swipe library for
		 * changing between pages.
		 *
		 * @param link  the element over which the user is hovering
		 * @param data  the results retrieved from the server
		 */
		show_likes: function( $link, data ) {
			this.clear();

			$link.data( 'likeCount', data.length );
			if ( 0 === data.length ) {
				// No likers after all.
				return this.$el.hide();
			}

			this.$inner.css( 'padding', 12 );

			if ( data.length < 6 ) {
				// Only one column needed.
				this.$inner.css( 'max-width', 200 );
				this.$inner.html( this.get_user_bits( data, 'single' ) );

			} else if ( data.length < 11 ) {
				// Two columns, but only one page.
				this.$inner.html( this.get_user_bits( data, 'double' ) );

			} else {
				// Multiple pages.
				this.render_likes_with_pagination( data );
			}

			// Move the overlay into the correct position and then show it.
			this.set_position( $link );
		},

		/**
		 * Render multiple pages of likes with pagination controls.
		 * This function is intended to be called by `show_likes` above.
		 *
		 * @param data  the results retrieved from the server
		 */
		render_likes_with_pagination: function( data ) {
			var page_count = Math.ceil( data.length / 10 );
			// Swipe requires two nested containers.
			var $swipe = $( '<div/>' ).addClass( 'swipe' ).appendTo( this.$inner );
			var $div = $( '<div/>' ).addClass( 'swipe-wrap' ).appendTo( $swipe );
			for ( var i = 0; i < page_count; ++i ) {
				$( this.get_user_bits( data, 'double', i * 10, 10 ) ).appendTo( $div );
			}

			/** Navigation controls.
			 *  This is based on the Newdash controls found in
			 *    reader/recommendations-templates.php
			 */
			var nav_html = '<nav class="slider-nav"><a href="#" class="prev"><span class="noticon noticon-previous" title="Previous" alt="<"></span></a><span class="position">';
			for ( var i = 0; i < page_count; ++i ) {
				nav_html += '<em data-page="' + i + '" class="' + ( ( i === 0 ) ? 'on' : '' ) + '">&bull;</em>';
			}
			nav_html += '</span><a href="#" class="next"><span class="noticon noticon-next" title="Next" alt=">"></span></a></nav>';
			var $nav = $( nav_html ).appendTo( this.$inner );

			/** Set up Swipe. **/

			// Swipe cannot be set up successfully unless its container
			// is visible, so we show it now.
			this.$el.show();

			var swipe = this.swipe = new Swipe( $swipe[0], {
				callback: function( pos ) {
					// Update the pagination indicators.
					//
					// If there are exactly two pages, Swipe has a weird
					// special case where it duplicates both pages and
					// can return index 2 and 3 even though those aren't
					// real pages (see swipe.js, line 47). To deal with
					// this, we use the expression `pos % page_count`.
					pos = pos % page_count;
					$nav.find( 'em' ).each( function() {
						var page = Number( $( this ).data( 'page' ) );
						$( this ).attr( 'class', ( pos === page ) ? 'on' : '' );
					} );
				}
			} );
			$nav.find( 'em' ).on( 'click', function( $e ) {
				// Go to the page corresponding to the indicator clicked.
				swipe.slide( Number( $( this ).data( 'page' ) ) );
				$e.preventDefault();
			} );
			// Previous and next buttons.
			$nav.find( '.prev' ).on( 'click', function( $e ) {
				swipe.prev();
				$e.preventDefault();
			} );
			$nav.find( '.next' ).on( 'click', function( $e ) {
				swipe.next();
				$e.preventDefault();
			} );
		},

		/**
		 * Open the overlay and show a loading message.
		 */
		show_loading_message: function( $link ) {
			this.clear();
			this.$inner.text( comment_like_text.loading );
			this.set_position( $link );
		},

		/**
		 * Position the overlay near the current comment.
		 *
		 * @param $link  element near which to position the overlay
		 */
		set_position: function( $link ) {
			// Prepare a down arrow icon for the bottom of the overlay.
			var $icon = $( '<span/>' )
				.appendTo( this.$el )
				.addClass( 'icon noticon noticon-downarrow' )
				.css( 'text-shadow', '0px 1px 1px rgb(223, 223, 223)' );

			var offset = $link.offset();
			var left = offset.left - ( this.$el.width() - $link.width() ) / 2;
			left = left < 5 ? 5 : left;
			var top = offset.top - this.$el.height() + 5;

			// Check if the overlay would appear off the screen.
			if ( top < ( $( window ).scrollTop() + ( $( '#wpadminbar' ).height() || 0 ) ) ) {
				// We'll display the overlay beneath the link instead.
				top = offset.top + $link.height();
				// Instead of using the down arrow icon, use an up arrow.
				$icon.remove().prependTo( this.$el )
					.removeClass( 'noticon-downarrow')
					.addClass( 'noticon-uparrow' )
					.css( {
						'text-shadow': '0px -1px 1px rgb(223, 223, 223)',
						'vertical-align': 'bottom'
					} );
			}

			this.$el.css( { 'left': left, 'top': top } ).show();

			$icon.css( {
				// The height of the arrow icon differs slightly between browsers,
				// so we compute the margin here to make sure it isn't disjointed
				// from the overlay.
				'margin-top': $icon[0].scrollHeight - 26,
				'margin-bottom': 20 - $icon[0].scrollHeight,

				// Position the arrow to be horizontally centred on the link.
				'padding-left': offset.left - left + ( $link.width() - $icon[0].scrollWidth ) / 2
			} );
		},

		/**
		 * Return whether the overlay is visible.
		 */
		is_visible: function() {
			return ( 'none' !== this.$el.css( 'display' ) );
		},

		// Timeout used for hiding the overlay.
		hide_timeout: null,

		/**
		 * Request that the overlay be hidden after a short delay.
		 */
		request_hide: function() {
			if ( null !== this.hide_timeout ) {
				return;
			}
			var self = this;
			this.hide_timeout = setTimeout( function() {
				self.$el.hide();
				self.clear();
			}, 300 );
		},

		/**
		 * Cancel a request to hide the overlay.
		 */
		cancel_hide: function() {
			if ( null !== this.hide_timeout ) {
				clearTimeout( this.hide_timeout );
				this.hide_timeout = null;
			}
		}
	};

	// The most recent comment for which the user has requested to see
	// who liked it.
	var relevant_comment;

	// Precache after this timeout.
	var precache_timeout = null;

	/**
	 * Fetch the like data for a particular comment.
	 */
	var fetch_like_data = function( $link, comment_id ) {
		comment_like_cache[ comment_id ] = null;

		var $star = $link.parent().parent().find( 'a.comment-like-link' );
		handle_link_action( $star, 'view_comment_likes', comment_id, function( data ) {
			// Populate the cache.
			comment_like_cache[ comment_id ] = data;

			// Only show the overlay if the user is interested.
			if ( overlay.is_visible() && ( relevant_comment === comment_id ) ) {
				overlay.show_likes( $link, data );
			}
		} );
	};

	function readCookie( c ) {
		var nameEQ = c + '=',
			cookieStrings = document.cookie.split( ';' ),
			i, cookieString, num, chunk, pairs, pair, cookie_data;
		for ( i = 0; i < cookieStrings.length; i++ ) {
			cookieString = cookieStrings[ i ];
			while ( cookieString.charAt( 0 ) === ' ' ) {
				cookieString = cookieString.substring( 1, cookieString.length );
			}
			if ( cookieString.indexOf( nameEQ ) === 0 ) {
				chunk = cookieString.substring( nameEQ.length, cookieString.length );
				pairs = chunk.split( '&' );
				cookie_data = {};
				for ( num = pairs.length - 1; num >= 0; num-- ) {
					pair = pairs[ num ].split( '=' );
					cookie_data[ pair[0] ] = decodeURIComponent( pair[1] );
				}
				return cookie_data;
			}
		}
		return null;
	}

	function getServiceData() {
		var data = readCookie( 'wpc_wpc' );
		if ( null === data || 'undefined' === typeof data.access_token || ! data.access_token ) {
			return false;
		}
		return data;
	}

	function readMessage( event ) {
		if ( 'undefined' == typeof event.event ) {
			return;
		}

		if ( 'login' == event.event && event.success ) {
			extWinCheck = setInterval( function() {
				if ( ! extWin || extWin.closed ) {
					clearInterval( extWinCheck );
					if ( getServiceData() ) {

						// Load page in an iframe to get the current comment nonce
						var nonceIframe = document.createElement( 'iframe' );
						nonceIframe.id = 'wp-login-comment-nonce-iframe';
						nonceIframe.style.display = 'none';
						nonceIframe.src = commentLikeEvent + '';
						document.body.appendChild( nonceIframe );

						var commentLikeId = ( commentLikeEvent + '' ).split( 'like_comment=' )[1].split( '&_wpnonce=' )[0];
						var c = false;

						// Set a 5 second timeout to redirect to the comment page without doing the Like as a fallback
						var commentLikeTimeout = setTimeout( function() {
							window.location = commentLikeEvent;
						}, 5000 );

						// Check for a new nonced redirect and use that if available before timing out
						var commentLikeCheck = setInterval( function() {
							c = $( '#wp-login-comment-nonce-iframe' ).contents().find( '#comment-like-' + commentLikeId + ' .comment-like-link' );
							if ( 'undefined' !== typeof c && 'undefined' !== typeof c[0] && 'undefined' !== typeof c[0].href ) {
								clearTimeout( commentLikeTimeout );
								clearInterval( commentLikeCheck );
								window.location = c[0].href;
							}
						}, 100 );
					}
				}
			}, 100 );

			if ( extWin ) {
				if ( ! extWin.closed ) {
					extWin.close();
				}
				extWin = false;
			}

			$( '#wp-login-polling-iframe' ).remove();
		}
	}

	if ( 'undefined' != typeof window.pm ) {
		pm.bind( 'loginMessage', function( e ) { readMessage( e ); } );
	}

	$( 'body' ).on( 'click', 'a.comment-like-link', function( $e ) {
		if ( $( $e.target ).hasClass( 'needs-login' ) ) {
			$e.preventDefault();
			commentLikeEvent = $e.target;
			if ( extWin ) {
				if ( ! extWin.closed ) {
					extWin.close();
				}
				extWin = false;
			}

			$( '#wp-login-polling-iframe' ).remove();

			var url = 'https://wordpress.com/public.api/connect/?action=request&service=wordpress';
			extWin = window.open( url, 'likeconn', 'status=0,toolbar=0,location=1,menubar=0,directories=0,resizable=1,scrollbars=1,height=560,width=500' );

			// Append cookie polling login iframe to this window to wait for user to finish logging in (or cancel)
			var loginIframe = $( "<iframe id='wp-login-polling-iframe'></iframe>" );
			loginIframe.attr( "src", "https://wordpress.com/public.api/connect/?iframe=true" );
			loginIframe.css( "display", "none" );
			$( document.body ).append( loginIframe );

			return false;
		}

		// Record that the user likes or does not like this comment.
		var $star = $( this );
		var comment_id = get_comment_id( $star );
		$star.addClass( 'loading' );
		// Determine whether to like or unlike based on whether the comment is
		// currently liked.
		var action = ( $( 'p#comment-like-' + comment_id ).data( 'liked' ) === 'comment-liked' ) ? 'unlike_comment' : 'like_comment';
		handle_link_action( $star, action, comment_id, function( data ) {
			// Invalidate the like cache for this comment.
			delete comment_like_cache[ comment_id ];

			$( '#comment-like-count-' + data.context ).html( data.display );

			if ( 'like_comment' === action ) {
				$( 'p#comment-like-' + data.context ).removeClass( 'comment-not-liked' )
					.addClass( 'comment-liked' )
					.data( 'liked', 'comment-liked' );
			} else {
				$( 'p#comment-like-' + data.context ).removeClass( 'comment-liked' )
					.addClass( 'comment-not-liked' )
					.data( 'liked', 'comment-not-liked' );
			}

			// Prefetch new data for this comment (if there are likers left).
			var $link = $star.parent().find( 'a.view-likers' );
			if ( 0 !== $link.length ) {
				fetch_like_data( $link, comment_id );
			}

			$star.removeClass( 'loading' );
		} );
		$e.preventDefault();
		$e.stopPropagation();

	} ).on( 'click', 'p.comment-not-liked', function() {
		// When a comment hasn't been liked, make the text clickable, too
		$( this ).find( 'a.comment-like-link' ).click();

	} ).on( 'mouseenter', 'p.comment-likes a.view-likers', function() {
		// Show the user a list of who has liked this comment.

		var $link = $( this );
		if ( 0 === Number( $link.data( 'likeCount' ) || 0 ) ) {
			// No one has liked this comment.
			return;
		}

		// Don't hide the overlay.
		overlay.cancel_hide();

		// Get the comment ID.
		var $star = $link.parent().parent().find( 'a.comment-like-link' );
		var comment_id = relevant_comment = get_comment_id( $star );

		// Check if the list of likes for this comment is already in
		// the cache.
		if ( comment_id in comment_like_cache ) {
			var entry = comment_like_cache[ comment_id ];
			// Only display the likes if the ajax request is
			// actually done.
			if ( null !== entry ) {
				overlay.show_likes( $link, entry );
			} else {
				// Make sure the overlay is visible (in case
				// the user moved the mouse away while loading
				// but then came back before it finished
				// loading).
				overlay.show_loading_message( $link );
			}
			return;
		}

		// Position the "Loading..." overlay.
		overlay.show_loading_message( $link );

		// Fetch the data.
		fetch_like_data( $link, comment_id );

	} ).on( 'mouseleave', 'p.comment-likes a.view-likers', function() {
		// User has moved cursor away - hide the overlay.
		overlay.request_hide();

	} ).on( 'click', 'p.comment-likes a.view-likers', function( $e ) {
		// Don't do anything when clicking on the text.
		$e.preventDefault();

	} ).on( 'mouseenter', '.comment:has(a.comment-like-link)', function() {
		// User is moving over a comment - precache the comment like data.
		if ( null !== precache_timeout ) {
			clearTimeout( precache_timeout );
			precache_timeout = null;
		}

		var $star = $( this ).find( 'a.comment-like-link' );
		var $link = $star.parent().find( 'a.view-likers' );
		if ( 0 === Number( $link.data( 'likeCount' ) || 0 ) ) {
			// No likes.
			return;
		}
		var comment_id = get_comment_id( $star );
		if ( comment_id in comment_like_cache ) {
			// Already in cache.
			return;
		}

		precache_timeout = setTimeout( function() {
			precache_timeout = null;
			if ( comment_id in comment_like_cache ) {
				// Was cached in the interim.
				return;
			}
			fetch_like_data( $link, comment_id );
		}, 1000 );
	} );
} );
;
/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
(function () {
    var container, button, menu;

    container = document.getElementById('site-navigation');
    if (!container)
        return;

    button = container.getElementsByTagName('h1')[0];
    if ('undefined' === typeof button)
        return;

    menu = container.getElementsByTagName('ul')[0];

    // Hide menu toggle button if menu is empty and return early.
    if ('undefined' === typeof menu) {
        button.style.display = 'none';
        return;
    }

    if (-1 === menu.className.indexOf('nav-menu'))
        menu.className += ' nav-menu';

    button.onclick = function () {
        if (-1 !== container.className.indexOf('toggled'))
            container.className = container.className.replace(' toggled', '');
        else
            container.className += ' toggled';
    };
})();
;
(function () {
    var is_webkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
        is_opera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
        is_ie = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

    if (( is_webkit || is_opera || is_ie ) && 'undefined' !== typeof( document.getElementById )) {
        var eventMethod = ( window.addEventListener ) ? 'addEventListener' : 'attachEvent';
        window[eventMethod]('hashchange', function () {
            var element = document.getElementById(location.hash.substring(1));

            if (element) {
                if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName))
                    element.tabIndex = -1;

                element.focus();
            }
        }, false);
    }
})();
;
var addComment={moveForm:function(a,b,c,d){var e,f=this,g=f.I(a),h=f.I(c),i=f.I("cancel-comment-reply-link"),j=f.I("comment_parent"),k=f.I("comment_post_ID");if(g&&h&&i&&j){f.respondId=c,d=d||!1,f.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",h.parentNode.insertBefore(e,h)),g.parentNode.insertBefore(h,g.nextSibling),k&&d&&(k.value=d),j.value=b,i.style.display="",i.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{f.I("comment").focus()}catch(l){}return!1}},I:function(a){return document.getElementById(a)}};;
(function() {
	var ajaxurl = window.ajaxurl || '/wp-admin/admin-ajax.php',
		data = window.wpcomVipAnalytics,
		dataQs, percent;

	if ( typeof XMLHttpRequest === 'undefined' ) {
		return;
	}

	if ( ! data ) {
		return;
	}

	percent = ~~data.percentToTrack;
	if ( percent && percent < 100 && ( ~~( ( Math.random() * 100 ) + 1 ) > percent ) ) {
		return;
	}

	dataQs = 'action=wpcom_vip_analytics';

	for ( var key in data ) {
		if ( key === 'percentToTrack' ) {
			continue;
		}
		if ( data.hasOwnProperty( key ) ) {
			dataQs += '&' +
				encodeURIComponent( key ).replace(/%20/g, '+' ) + '=' +
				encodeURIComponent( data[key] ).replace(/%20/g, '+' );
		}
	}

	function sendInfo() {
		var xhr = new XMLHttpRequest();
		xhr.open( 'POST', ajaxurl, true );
		xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
		xhr.send( dataQs );
	}

	// Delay for some time after the document is ready to ping
	function docReady() {
		setTimeout( function() {
			sendInfo();
		}, 1500 );
	}

	if ( document.readyState === 'complete' ) {
		docReady.apply();
	}
	else if ( document.addEventListener ) {
		document.addEventListener( 'DOMContentLoaded', docReady, false );
	}
	else if ( document.attachEvent ) {
		document.attachEvent( 'onreadystatechange', docReady );
	}
})();
;
/*jslint indent: 2, browser: true, bitwise: true, plusplus: true */

/*! Copyright Twitter Inc. and other contributors. Licensed under MIT *//*
https://github.com/twitter/twemoji/blob/gh-pages/LICENSE
*/

// WARNING:   this file is generated automatically via
//            `node twemoji-generator.js`
//            please update its `createTwemoji` function
//            at the bottom of the same file instead.
var twemoji = (function ( ) {
  'use strict';

  /*jshint maxparams:4 */

  var
    // the exported module object
    twemoji = {


    /////////////////////////
    //      properties     //
    /////////////////////////

      // default assets url, by default will be Twitter Inc. CDN
      base: (location.protocol === 'https:' ? 'https:' : 'http:') +
            '//twemoji.maxcdn.com/',

      // default assets file extensions, by default '.png'
      ext: '.svg',

      // default assets/folder size, by default "36x36"
      // available via Twitter CDN: 16, 36, 72
      size: 'svg',

      // basic utilities / helpers to convert code points
      // to JavaScript surrogates and vice versa
      convert: {

        /**
         * Given an HEX codepoint, returns UTF16 surrogate pairs.
         *
         * @param   string  generic codepoint, i.e. '1F4A9'
         * @return  string  codepoint transformed into utf16 surrogates pair,
         *          i.e. \uD83D\uDCA9
         *
         * @example
         *  twemoji.convert.fromCodePoint('1f1e8');
         *  // "\ud83c\udde8"
         *
         *  '1f1e8-1f1f3'.split('-').map(twemoji.convert.fromCodePoint).join('')
         *  // "\ud83c\udde8\ud83c\uddf3"
         */
        fromCodePoint: fromCodePoint,

        /**
         * Given UTF16 surrogate pairs, returns the equivalent HEX codepoint.
         *
         * @param   string  generic utf16 surrogates pair, i.e. \uD83D\uDCA9
         * @param   string  optional separator for double code points, default='-'
         * @return  string  utf16 transformed into codepoint, i.e. '1F4A9'
         *
         * @example
         *  twemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3');
         *  // "1f1e8-1f1f3"
         *
         *  twemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3', '~');
         *  // "1f1e8~1f1f3"
         */
        toCodePoint: toCodePoint
      },


    /////////////////////////
    //       methods       //
    /////////////////////////

      /**
       * User first: used to remove missing images
       * preserving the original text intent when
       * a fallback for network problems is desired.
       * Automatically added to Image nodes via DOM
       * It could be recycled for string operations via:
       *  $('img.emoji').on('error', twemoji.onerror)
       */
      onerror: function onerror() {
        if (this.parentNode) {
          this.parentNode.replaceChild(createText(this.alt), this);
        }
      },

      /**
       * Main method/logic to generate either <img> tags or HTMLImage nodes.
       *  "emojify" a generic text or DOM Element.
       *
       * @overloads
       *
       * String replacement for `innerHTML` or server side operations
       *  twemoji.parse(string);
       *  twemoji.parse(string, Function);
       *  twemoji.parse(string, Object);
       *
       * HTMLElement tree parsing for safer operations over existing DOM
       *  twemoji.parse(HTMLElement);
       *  twemoji.parse(HTMLElement, Function);
       *  twemoji.parse(HTMLElement, Object);
       *
       * @param   string|HTMLElement  the source to parse and enrich with emoji.
       *
       *          string              replace emoji matches with <img> tags.
       *                              Mainly used to inject emoji via `innerHTML`
       *                              It does **not** parse the string or validate it,
       *                              it simply replaces found emoji with a tag.
       *                              NOTE: be sure this won't affect security.
       *
       *          HTMLElement         walk through the DOM tree and find emoji
       *                              that are inside **text node only** (nodeType === 3)
       *                              Mainly used to put emoji in already generated DOM
       *                              without compromising surrounding nodes and
       *                              **avoiding** the usage of `innerHTML`.
       *                              NOTE: Using DOM elements instead of strings should
       *                              improve security without compromising too much
       *                              performance compared with a less safe `innerHTML`.
       *
       * @param   Function|Object  [optional]
       *                              either the callback that will be invoked or an object
       *                              with all properties to use per each found emoji.
       *
       *          Function            if specified, this will be invoked per each emoji
       *                              that has been found through the RegExp except
       *                              those follwed by the invariant \uFE0E ("as text").
       *                              Once invoked, parameters will be:
       *
       *                                codePoint:string  the lower case HEX code point
       *                                                  i.e. "1f4a9"
       *
       *                                options:Object    all info for this parsing operation
       *
       *                                variant:char      the optional \uFE0F ("as image")
       *                                                  variant, in case this info
       *                                                  is anyhow meaningful.
       *                                                  By default this is ignored.
       *
       *                              If such callback will return a falsy value instead
       *                              of a valid `src` to use for the image, nothing will
       *                              actually change for that specific emoji.
       *
       *
       *          Object              if specified, an object containing the following properties
       *
       *            callback   Function  the callback to invoke per each found emoji.
       *            base       string    the base url, by default twemoji.base
       *            ext        string    the image extension, by default twemoji.ext
       *            size       string    the assets size, by default twemoji.size
       *
       * @example
       *
       *  twemoji.parse("I \u2764\uFE0F emoji!");
       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/2764.gif"> emoji!
       *
       *
       *  twemoji.parse("I \u2764\uFE0F emoji!", function(icon, options, variant) {
       *    return '/assets/' + icon + '.gif';
       *  });
       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/2764.gif"> emoji!
       *
       *
       * twemoji.parse("I \u2764\uFE0F emoji!", {
       *   size: 72,
       *   callback: function(icon, options, variant) {
       *     return '/assets/' + options.size + '/' + icon + options.ext;
       *   }
       * });
       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/72x72/2764.png"> emoji!
       *
       */
      parse: parse,

      /**
       * Given a string, invokes the callback argument
       *  per each emoji found in such string.
       * This is the most raw version used by
       *  the .parse(string) method itself.
       *
       * @param   string    generic string to parse
       * @param   Function  a generic callback that will be
       *                    invoked to replace the content.
       *                    This calback wil receive standard
       *                    String.prototype.replace(str, callback)
       *                    arguments such:
       *  callback(
       *    match,  // the emoji match
       *    icon,   // the emoji text (same as text)
       *    variant // either '\uFE0E' or '\uFE0F', if present
       *  );
       *
       *                    and others commonly received via replace.
       *
       *  NOTE: When the variant \uFE0E is found, remember this is an explicit intent
       *  from the user: the emoji should **not** be replaced with an image.
       *  In \uFE0F case one, it's the opposite, it should be graphic.
       *  This utility convetion is that only \uFE0E are not translated into images.
       */
      replace: replace,

      /**
       * Simplify string tests against emoji.
       *
       * @param   string  some text that might contain emoji
       * @return  boolean true if any emoji was found, false otherwise.
       *
       * @example
       *
       *  if (twemoji.test(someContent)) {
       *    console.log("emoji All The Things!");
       *  }
       */
      test: test
    },

    // RegExp based on emoji's official Unicode standards
    // http://www.unicode.org/Public/UNIDATA/EmojiSources.txt
    re = /((?:\ud83c\udde8\ud83c\uddf3|\ud83c\uddfa\ud83c\uddf8|\ud83c\uddf7\ud83c\uddfa|\ud83c\uddf0\ud83c\uddf7|\ud83c\uddef\ud83c\uddf5|\ud83c\uddee\ud83c\uddf9|\ud83c\uddec\ud83c\udde7|\ud83c\uddeb\ud83c\uddf7|\ud83c\uddea\ud83c\uddf8|\ud83c\udde9\ud83c\uddea|\u0039\u20e3|\u0038\u20e3|\u0037\u20e3|\u0036\u20e3|\u0035\u20e3|\u0034\u20e3|\u0033\u20e3|\u0032\u20e3|\u0031\u20e3|\u0030\u20e3|\u0023\u20e3|\ud83d\udeb3|\ud83d\udeb1|\ud83d\udeb0|\ud83d\udeaf|\ud83d\udeae|\ud83d\udea6|\ud83d\udea3|\ud83d\udea1|\ud83d\udea0|\ud83d\ude9f|\ud83d\ude9e|\ud83d\ude9d|\ud83d\ude9c|\ud83d\ude9b|\ud83d\ude98|\ud83d\ude96|\ud83d\ude94|\ud83d\ude90|\ud83d\ude8e|\ud83d\ude8d|\ud83d\ude8b|\ud83d\ude8a|\ud83d\ude88|\ud83d\ude86|\ud83d\ude82|\ud83d\ude81|\ud83d\ude36|\ud83d\ude34|\ud83d\ude2f|\ud83d\ude2e|\ud83d\ude2c|\ud83d\ude27|\ud83d\ude26|\ud83d\ude1f|\ud83d\ude1b|\ud83d\ude19|\ud83d\ude17|\ud83d\ude15|\ud83d\ude11|\ud83d\ude10|\ud83d\ude0e|\ud83d\ude08|\ud83d\ude07|\ud83d\ude00|\ud83d\udd67|\ud83d\udd66|\ud83d\udd65|\ud83d\udd64|\ud83d\udd63|\ud83d\udd62|\ud83d\udd61|\ud83d\udd60|\ud83d\udd5f|\ud83d\udd5e|\ud83d\udd5d|\ud83d\udd5c|\ud83d\udd2d|\ud83d\udd2c|\ud83d\udd15|\ud83d\udd09|\ud83d\udd08|\ud83d\udd07|\ud83d\udd06|\ud83d\udd05|\ud83d\udd04|\ud83d\udd02|\ud83d\udd01|\ud83d\udd00|\ud83d\udcf5|\ud83d\udcef|\ud83d\udced|\ud83d\udcec|\ud83d\udcb7|\ud83d\udcb6|\ud83d\udcad|\ud83d\udc6d|\ud83d\udc6c|\ud83d\udc65|\ud83d\udc2a|\ud83d\udc16|\ud83d\udc15|\ud83d\udc13|\ud83d\udc10|\ud83d\udc0f|\ud83d\udc0b|\ud83d\udc0a|\ud83d\udc09|\ud83d\udc08|\ud83d\udc07|\ud83d\udc06|\ud83d\udc05|\ud83d\udc04|\ud83d\udc03|\ud83d\udc02|\ud83d\udc01|\ud83d\udc00|\ud83c\udfe4|\ud83c\udfc9|\ud83c\udfc7|\ud83c\udf7c|\ud83c\udf50|\ud83c\udf4b|\ud83c\udf33|\ud83c\udf32|\ud83c\udf1e|\ud83c\udf1d|\ud83c\udf1c|\ud83c\udf1a|\ud83c\udf18|\ud83c\udccf|\ud83c\udd70|\ud83c\udd71|\ud83c\udd7e|\ud83c\udd8e|\ud83c\udd91|\ud83c\udd92|\ud83c\udd93|\ud83c\udd94|\ud83c\udd95|\ud83c\udd96|\ud83c\udd97|\ud83c\udd98|\ud83c\udd99|\ud83c\udd9a|\ud83d\ude0d|\ud83d\udec5|\ud83d\udec4|\ud83d\udec3|\ud83d\udec2|\ud83d\udec1|\ud83d\udebf|\ud83d\udeb8|\ud83d\udeb7|\ud83d\udeb5|\ud83c\ude01|\ud83c\ude02|\ud83c\ude32|\ud83c\ude33|\ud83c\ude34|\ud83c\ude35|\ud83c\ude36|\ud83c\ude37|\ud83c\ude38|\ud83c\ude39|\ud83c\ude3a|\ud83c\ude50|\ud83c\ude51|\ud83c\udf00|\ud83c\udf01|\ud83c\udf02|\ud83c\udf03|\ud83c\udf04|\ud83c\udf05|\ud83c\udf06|\ud83c\udf07|\ud83c\udf08|\ud83c\udf09|\ud83c\udf0a|\ud83c\udf0b|\ud83c\udf0c|\ud83c\udf0f|\ud83c\udf11|\ud83c\udf13|\ud83c\udf14|\ud83c\udf15|\ud83c\udf19|\ud83c\udf1b|\ud83c\udf1f|\ud83c\udf20|\ud83c\udf30|\ud83c\udf31|\ud83c\udf34|\ud83c\udf35|\ud83c\udf37|\ud83c\udf38|\ud83c\udf39|\ud83c\udf3a|\ud83c\udf3b|\ud83c\udf3c|\ud83c\udf3d|\ud83c\udf3e|\ud83c\udf3f|\ud83c\udf40|\ud83c\udf41|\ud83c\udf42|\ud83c\udf43|\ud83c\udf44|\ud83c\udf45|\ud83c\udf46|\ud83c\udf47|\ud83c\udf48|\ud83c\udf49|\ud83c\udf4a|\ud83c\udf4c|\ud83c\udf4d|\ud83c\udf4e|\ud83c\udf4f|\ud83c\udf51|\ud83c\udf52|\ud83c\udf53|\ud83c\udf54|\ud83c\udf55|\ud83c\udf56|\ud83c\udf57|\ud83c\udf58|\ud83c\udf59|\ud83c\udf5a|\ud83c\udf5b|\ud83c\udf5c|\ud83c\udf5d|\ud83c\udf5e|\ud83c\udf5f|\ud83c\udf60|\ud83c\udf61|\ud83c\udf62|\ud83c\udf63|\ud83c\udf64|\ud83c\udf65|\ud83c\udf66|\ud83c\udf67|\ud83c\udf68|\ud83c\udf69|\ud83c\udf6a|\ud83c\udf6b|\ud83c\udf6c|\ud83c\udf6d|\ud83c\udf6e|\ud83c\udf6f|\ud83c\udf70|\ud83c\udf71|\ud83c\udf72|\ud83c\udf73|\ud83c\udf74|\ud83c\udf75|\ud83c\udf76|\ud83c\udf77|\ud83c\udf78|\ud83c\udf79|\ud83c\udf7a|\ud83c\udf7b|\ud83c\udf80|\ud83c\udf81|\ud83c\udf82|\ud83c\udf83|\ud83c\udf84|\ud83c\udf85|\ud83c\udf86|\ud83c\udf87|\ud83c\udf88|\ud83c\udf89|\ud83c\udf8a|\ud83c\udf8b|\ud83c\udf8c|\ud83c\udf8d|\ud83c\udf8e|\ud83c\udf8f|\ud83c\udf90|\ud83c\udf91|\ud83c\udf92|\ud83c\udf93|\ud83c\udfa0|\ud83c\udfa1|\ud83c\udfa2|\ud83c\udfa3|\ud83c\udfa4|\ud83c\udfa5|\ud83c\udfa6|\ud83c\udfa7|\ud83c\udfa8|\ud83c\udfa9|\ud83c\udfaa|\ud83c\udfab|\ud83c\udfac|\ud83c\udfad|\ud83c\udfae|\ud83c\udfaf|\ud83c\udfb0|\ud83c\udfb1|\ud83c\udfb2|\ud83c\udfb3|\ud83c\udfb4|\ud83c\udfb5|\ud83c\udfb6|\ud83c\udfb7|\ud83c\udfb8|\ud83c\udfb9|\ud83c\udfba|\ud83c\udfbb|\ud83c\udfbc|\ud83c\udfbd|\ud83c\udfbe|\ud83c\udfbf|\ud83c\udfc0|\ud83c\udfc1|\ud83c\udfc2|\ud83c\udfc3|\ud83c\udfc4|\ud83c\udfc6|\ud83c\udfc8|\ud83c\udfca|\ud83c\udfe0|\ud83c\udfe1|\ud83c\udfe2|\ud83c\udfe3|\ud83c\udfe5|\ud83c\udfe6|\ud83c\udfe7|\ud83c\udfe8|\ud83c\udfe9|\ud83c\udfea|\ud83c\udfeb|\ud83c\udfec|\ud83c\udfed|\ud83c\udfee|\ud83c\udfef|\ud83c\udff0|\ud83d\udc0c|\ud83d\udc0d|\ud83d\udc0e|\ud83d\udc11|\ud83d\udc12|\ud83d\udc14|\ud83d\udc17|\ud83d\udc18|\ud83d\udc19|\ud83d\udc1a|\ud83d\udc1b|\ud83d\udc1c|\ud83d\udc1d|\ud83d\udc1e|\ud83d\udc1f|\ud83d\udc20|\ud83d\udc21|\ud83d\udc22|\ud83d\udc23|\ud83d\udc24|\ud83d\udc25|\ud83d\udc26|\ud83d\udc27|\ud83d\udc28|\ud83d\udc29|\ud83d\udc2b|\ud83d\udc2c|\ud83d\udc2d|\ud83d\udc2e|\ud83d\udc2f|\ud83d\udc30|\ud83d\udc31|\ud83d\udc32|\ud83d\udc33|\ud83d\udc34|\ud83d\udc35|\ud83d\udc36|\ud83d\udc37|\ud83d\udc38|\ud83d\udc39|\ud83d\udc3a|\ud83d\udc3b|\ud83d\udc3c|\ud83d\udc3d|\ud83d\udc3e|\ud83d\udc40|\ud83d\udc42|\ud83d\udc43|\ud83d\udc44|\ud83d\udc45|\ud83d\udc46|\ud83d\udc47|\ud83d\udc48|\ud83d\udc49|\ud83d\udc4a|\ud83d\udc4b|\ud83d\udc4c|\ud83d\udc4d|\ud83d\udc4e|\ud83d\udc4f|\ud83d\udc50|\ud83d\udc51|\ud83d\udc52|\ud83d\udc53|\ud83d\udc54|\ud83d\udc55|\ud83d\udc56|\ud83d\udc57|\ud83d\udc58|\ud83d\udc59|\ud83d\udc5a|\ud83d\udc5b|\ud83d\udc5c|\ud83d\udc5d|\ud83d\udc5e|\ud83d\udc5f|\ud83d\udc60|\ud83d\udc61|\ud83d\udc62|\ud83d\udc63|\ud83d\udc64|\ud83d\udc66|\ud83d\udc67|\ud83d\udc68|\ud83d\udc69|\ud83d\udc6a|\ud83d\udc6b|\ud83d\udc6e|\ud83d\udc6f|\ud83d\udc70|\ud83d\udc71|\ud83d\udc72|\ud83d\udc73|\ud83d\udc74|\ud83d\udc75|\ud83d\udc76|\ud83d\udc77|\ud83d\udc78|\ud83d\udc79|\ud83d\udc7a|\ud83d\udc7b|\ud83d\udc7c|\ud83d\udc7d|\ud83d\udc7e|\ud83d\udc7f|\ud83d\udc80|\ud83d\udc81|\ud83d\udc82|\ud83d\udc83|\ud83d\udc84|\ud83d\udc85|\ud83d\udc86|\ud83d\udc87|\ud83d\udc88|\ud83d\udc89|\ud83d\udc8a|\ud83d\udc8b|\ud83d\udc8c|\ud83d\udc8d|\ud83d\udc8e|\ud83d\udc8f|\ud83d\udc90|\ud83d\udc91|\ud83d\udc92|\ud83d\udc93|\ud83d\udc94|\ud83d\udc95|\ud83d\udc96|\ud83d\udc97|\ud83d\udc98|\ud83d\udc99|\ud83d\udc9a|\ud83d\udc9b|\ud83d\udc9c|\ud83d\udc9d|\ud83d\udc9e|\ud83d\udc9f|\ud83d\udca0|\ud83d\udca1|\ud83d\udca2|\ud83d\udca3|\ud83d\udca4|\ud83d\udca5|\ud83d\udca6|\ud83d\udca7|\ud83d\udca8|\ud83d\udca9|\ud83d\udcaa|\ud83d\udcab|\ud83d\udcac|\ud83d\udcae|\ud83d\udcaf|\ud83d\udcb0|\ud83d\udcb1|\ud83d\udcb2|\ud83d\udcb3|\ud83d\udcb4|\ud83d\udcb5|\ud83d\udcb8|\ud83d\udcb9|\ud83d\udcba|\ud83d\udcbb|\ud83d\udcbc|\ud83d\udcbd|\ud83d\udcbe|\ud83d\udcbf|\ud83d\udcc0|\ud83d\udcc1|\ud83d\udcc2|\ud83d\udcc3|\ud83d\udcc4|\ud83d\udcc5|\ud83d\udcc6|\ud83d\udcc7|\ud83d\udcc8|\ud83d\udcc9|\ud83d\udcca|\ud83d\udccb|\ud83d\udccc|\ud83d\udccd|\ud83d\udcce|\ud83d\udccf|\ud83d\udcd0|\ud83d\udcd1|\ud83d\udcd2|\ud83d\udcd3|\ud83d\udcd4|\ud83d\udcd5|\ud83d\udcd6|\ud83d\udcd7|\ud83d\udcd8|\ud83d\udcd9|\ud83d\udcda|\ud83d\udcdb|\ud83d\udcdc|\ud83d\udcdd|\ud83d\udcde|\ud83d\udcdf|\ud83d\udce0|\ud83d\udce1|\ud83d\udce2|\ud83d\udce3|\ud83d\udce4|\ud83d\udce5|\ud83d\udce6|\ud83d\udce7|\ud83d\udce8|\ud83d\udce9|\ud83d\udcea|\ud83d\udceb|\ud83d\udcee|\ud83d\udcf0|\ud83d\udcf1|\ud83d\udcf2|\ud83d\udcf3|\ud83d\udcf4|\ud83d\udcf6|\ud83d\udcf7|\ud83d\udcf9|\ud83d\udcfa|\ud83d\udcfb|\ud83d\udcfc|\ud83d\udd03|\ud83d\udd0a|\ud83d\udd0b|\ud83d\udd0c|\ud83d\udd0d|\ud83d\udd0e|\ud83d\udd0f|\ud83d\udd10|\ud83d\udd11|\ud83d\udd12|\ud83d\udd13|\ud83d\udd14|\ud83d\udd16|\ud83d\udd17|\ud83d\udd18|\ud83d\udd19|\ud83d\udd1a|\ud83d\udd1b|\ud83d\udd1c|\ud83d\udd1d|\ud83d\udd1e|\ud83d\udd1f|\ud83d\udd20|\ud83d\udd21|\ud83d\udd22|\ud83d\udd23|\ud83d\udd24|\ud83d\udd25|\ud83d\udd26|\ud83d\udd27|\ud83d\udd28|\ud83d\udd29|\ud83d\udd2a|\ud83d\udd2b|\ud83d\udd2e|\ud83d\udd2f|\ud83d\udd30|\ud83d\udd31|\ud83d\udd32|\ud83d\udd33|\ud83d\udd34|\ud83d\udd35|\ud83d\udd36|\ud83d\udd37|\ud83d\udd38|\ud83d\udd39|\ud83d\udd3a|\ud83d\udd3b|\ud83d\udd3c|\ud83d\udd3d|\ud83d\udd50|\ud83d\udd51|\ud83d\udd52|\ud83d\udd53|\ud83d\udd54|\ud83d\udd55|\ud83d\udd56|\ud83d\udd57|\ud83d\udd58|\ud83d\udd59|\ud83d\udd5a|\ud83d\udd5b|\ud83d\uddfb|\ud83d\uddfc|\ud83d\uddfd|\ud83d\uddfe|\ud83d\uddff|\ud83d\ude01|\ud83d\ude02|\ud83d\ude03|\ud83d\ude04|\ud83d\ude05|\ud83d\ude06|\ud83d\ude09|\ud83d\ude0a|\ud83d\ude0b|\ud83d\ude0c|\ud83d\udeb4|\ud83d\ude0f|\ud83d\ude12|\ud83d\ude13|\ud83d\ude14|\ud83d\ude16|\ud83d\ude18|\ud83d\ude1a|\ud83d\ude1c|\ud83d\ude1d|\ud83d\ude1e|\ud83d\ude20|\ud83d\ude21|\ud83d\ude22|\ud83d\ude23|\ud83d\ude24|\ud83d\ude25|\ud83d\ude28|\ud83d\ude29|\ud83d\ude2a|\ud83d\ude2b|\ud83d\ude2d|\ud83d\ude30|\ud83d\ude31|\ud83d\ude32|\ud83d\ude33|\ud83d\ude35|\ud83d\ude37|\ud83d\ude38|\ud83d\ude39|\ud83d\ude3a|\ud83d\ude3b|\ud83d\ude3c|\ud83d\ude3d|\ud83d\ude3e|\ud83d\ude3f|\ud83d\ude40|\ud83d\ude45|\ud83d\ude46|\ud83d\ude47|\ud83d\ude48|\ud83d\ude49|\ud83d\ude4a|\ud83d\ude4b|\ud83d\ude4c|\ud83d\ude4d|\ud83d\ude4e|\ud83d\ude4f|\ud83d\ude80|\ud83d\ude83|\ud83d\ude84|\ud83d\ude85|\ud83d\ude87|\ud83d\ude89|\ud83d\ude8c|\ud83d\ude8f|\ud83d\ude91|\ud83d\ude92|\ud83d\ude93|\ud83d\ude95|\ud83d\ude97|\ud83d\ude99|\ud83d\ude9a|\ud83d\udea2|\ud83d\udea4|\ud83d\udea5|\ud83d\udea7|\ud83d\udea8|\ud83d\udea9|\ud83d\udeaa|\ud83d\udeab|\ud83d\udeac|\ud83d\udead|\ud83d\udeb2|\ud83d\udeb6|\ud83d\udeb9|\ud83d\udeba|\ud83d\udebb|\ud83d\udebc|\ud83d\udebd|\ud83d\udebe|\ud83d\udec0|\ud83c\udde6|\ud83c\udde7|\ud83c\udde8|\ud83c\udde9|\ud83c\uddea|\ud83c\uddeb|\ud83c\uddec|\ud83c\udded|\ud83c\uddee|\ud83c\uddef|\ud83c\uddf0|\ud83c\uddf1|\ud83c\uddf2|\ud83c\uddf3|\ud83c\uddf4|\ud83c\uddf5|\ud83c\uddf6|\ud83c\uddf7|\ud83c\uddf8|\ud83c\uddf9|\ud83c\uddfa|\ud83c\uddfb|\ud83c\uddfc|\ud83c\uddfd|\ud83c\uddfe|\ud83c\uddff|\ud83c\udf0d|\ud83c\udf0e|\ud83c\udf10|\ud83c\udf12|\ud83c\udf16|\ud83c\udf17|\ud83c\udf18|\ud83c\udf1a|\ud83c\udf1c|\ud83c\udf1d|\ud83c\udf1e|\ud83c\udf32|\ud83c\udf33|\ud83c\udf4b|\ud83c\udf50|\ud83c\udf7c|\ud83c\udfc7|\ud83c\udfc9|\ud83c\udfe4|\ud83d\udc00|\ud83d\udc01|\ud83d\udc02|\ud83d\udc03|\ud83d\udc04|\ud83d\udc05|\ud83d\udc06|\ud83d\udc07|\ud83d\udc08|\ud83d\udc09|\ud83d\udc0a|\ud83d\udc0b|\ud83d\udc0f|\ud83d\udc10|\ud83d\udc13|\ud83d\udc15|\ud83d\udc16|\ud83d\udc2a|\ud83d\udc65|\ud83d\udc6c|\ud83d\udc6d|\ud83d\udcad|\ud83d\udcb6|\ud83d\udcb7|\ud83d\udcec|\ud83d\udced|\ud83d\udcef|\ud83d\udcf5|\ud83d\udd00|\ud83d\udd01|\ud83d\udd02|\ud83d\udd04|\ud83d\udd05|\ud83d\udd06|\ud83d\udd07|\ud83d\udd08|\ud83d\udd09|\ud83d\udd15|\ud83d\udd2c|\ud83d\udd2d|\ud83d\udd5c|\ud83d\udd5d|\ud83d\udd5e|\ud83d\udd5f|\ud83d\udd60|\ud83d\udd61|\ud83d\udd62|\ud83d\udd63|\ud83d\udd64|\ud83d\udd65|\ud83d\udd66|\ud83d\udd67|\ud83d\ude00|\ud83d\ude07|\ud83d\ude08|\ud83d\ude0e|\ud83d\ude10|\ud83d\ude11|\ud83d\ude15|\ud83d\ude17|\ud83d\ude19|\ud83d\ude1b|\ud83d\ude1f|\ud83d\ude26|\ud83d\ude27|\ud83d\ude2c|\ud83d\ude2e|\ud83d\ude2f|\ud83d\ude34|\ud83d\ude36|\ud83d\ude81|\ud83d\ude82|\ud83d\ude86|\ud83d\ude88|\ud83d\ude8a|\ud83d\ude8b|\ud83d\ude8d|\ud83d\ude8e|\ud83d\ude90|\ud83d\ude94|\ud83d\ude96|\ud83d\ude98|\ud83d\ude9b|\ud83d\ude9c|\ud83d\ude9d|\ud83d\ude9e|\ud83d\ude9f|\ud83d\udea0|\ud83d\udea1|\ud83d\udea3|\ud83d\udea6|\ud83d\udeae|\ud83d\udeaf|\ud83d\udeb0|\ud83d\udeb1|\ud83d\udeb3|\ud83d\udeb4|\ud83d\udeb5|\ud83d\udeb7|\ud83d\udeb8|\ud83d\udebf|\ud83d\udec1|\ud83d\udec2|\ud83d\udec3|\ud83d\udec4|\ud83d\udec5|\ud83c\udf17|\ud83c\udf16|\ud83c\udde6|\ud83c\udde7|\ud83c\udde8|\ud83c\udde9|\ud83c\uddea|\ud83c\uddeb|\ud83c\uddec|\ud83c\udded|\ud83c\uddee|\ud83c\uddef|\ud83c\uddf0|\ud83c\uddf1|\ud83c\uddf2|\ud83c\uddf3|\ud83c\uddf4|\ud83c\uddf5|\ud83c\uddf6|\ud83c\uddf7|\ud83c\uddf8|\ud83c\uddf9|\ud83c\uddfa|\ud83c\uddfb|\ud83c\uddfc|\ud83c\uddfd|\ud83c\uddfe|\ud83c\uddff|\ud83c\udf0d|\ud83c\udf0e|\ud83c\udf10|\ud83c\udf12|\ud83c\udf16|\ud83c\udf17|\ud83c\udf18|\ud83c\udf1a|\ud83c\udf1c|\ud83c\udf1d|\ud83c\udf1e|\ud83c\udf32|\ud83c\udf33|\ud83c\udf4b|\ud83c\udf50|\ud83c\udf7c|\ud83c\udfc7|\ud83c\udfc9|\ud83c\udfe4|\ud83d\udc00|\ud83d\udc01|\ud83d\udc02|\ud83d\udc03|\ud83d\udc04|\ud83d\udc05|\ud83d\udc06|\ud83d\udc07|\ud83d\udc08|\ud83d\udc09|\ud83d\udc0a|\ud83d\udc0b|\ud83d\udc0f|\ud83d\udc10|\ud83d\udc13|\ud83d\udc15|\ud83d\udc16|\ud83d\udc2a|\ud83d\udc65|\ud83d\udc6c|\ud83d\udc6d|\ud83d\udcad|\ud83d\udcb6|\ud83d\udcb7|\ud83d\udcec|\ud83d\udced|\ud83d\udcef|\ud83d\udcf5|\ud83d\udd00|\ud83d\udd01|\ud83d\udd02|\ud83d\udd04|\ud83d\udd05|\ud83d\udd06|\ud83d\udd07|\ud83d\udd08|\ud83d\udd09|\ud83d\udd15|\ud83d\udd2c|\ud83d\udd2d|\ud83d\udd5c|\ud83d\udd5d|\ud83d\udd5e|\ud83d\udd5f|\ud83d\udd60|\ud83d\udd61|\ud83d\udd62|\ud83d\udd63|\ud83d\udd64|\ud83d\udd65|\ud83d\udd66|\ud83d\udd67|\ud83d\ude00|\ud83d\ude07|\ud83d\ude08|\ud83d\ude0e|\ud83d\ude10|\ud83d\ude11|\ud83d\ude15|\ud83d\ude17|\ud83d\ude19|\ud83d\ude1b|\ud83d\ude1f|\ud83d\ude26|\ud83d\ude27|\ud83d\ude2c|\ud83d\ude2e|\ud83d\ude2f|\ud83d\ude34|\ud83d\ude36|\ud83d\ude81|\ud83d\ude82|\ud83d\ude86|\ud83d\ude88|\ud83d\ude8a|\ud83d\ude8b|\ud83d\ude8d|\ud83d\ude8e|\ud83d\ude90|\ud83d\ude94|\ud83d\ude96|\ud83d\ude98|\ud83d\ude9b|\ud83d\ude9c|\ud83d\ude9d|\ud83d\ude9e|\ud83d\ude9f|\ud83d\udea0|\ud83d\udea1|\ud83d\udea3|\ud83d\udea6|\ud83d\udeae|\ud83d\udeaf|\ud83d\udeb0|\ud83d\udeb1|\ud83d\udeb3|\ud83d\udeb4|\ud83d\udeb5|\ud83d\udeb7|\ud83d\udeb8|\ud83d\udebf|\ud83d\udec1|\ud83d\udec2|\ud83d\udec3|\ud83d\udec4|\ud83d\udec5|\ud83c\udf12|\ud83c\udf10|\ud83c\udde6|\ud83c\udde7|\ud83c\udde8|\ud83c\udde9|\ud83c\uddea|\ud83c\uddeb|\ud83c\uddec|\ud83c\udded|\ud83c\uddee|\ud83c\uddef|\ud83c\uddf0|\ud83c\uddf1|\ud83c\uddf2|\ud83c\uddf3|\ud83c\uddf4|\ud83c\uddf5|\ud83c\uddf6|\ud83c\uddf7|\ud83c\uddf8|\ud83c\uddf9|\ud83c\uddfa|\ud83c\uddfb|\ud83c\uddfc|\ud83c\uddfd|\ud83c\uddfe|\ud83c\uddff|\ud83c\udf0d|\ud83c\udf0e|\ue50a|\ue50a|\ue50a|\u27bf|\u3030|\u27b0|\u2797|\u2796|\u2795|\u2755|\u2754|\u2753|\u274e|\u274c|\u2728|\u270b|\u270a|\u2705|\u26ce|\u27bf|\u23f3|\u23f0|\u23ec|\u23eb|\u23ea|\u23e9|\u2122|\u27bf|\u00a9|\u00ae)|(?:(?:\ud83c\udc04|\ud83c\udd7f|\ud83c\ude1a|\ud83c\ude2f|\u3299|\u3297|\u303d|\u2b55|\u2b50|\u2b1c|\u2b1b|\u2b07|\u2b06|\u2b05|\u2935|\u2934|\u27a1|\u2764|\u2757|\u2747|\u2744|\u2734|\u2733|\u2716|\u2714|\u2712|\u270f|\u270c|\u2709|\u2708|\u2702|\u26fd|\u26fa|\u26f5|\u26f3|\u26f2|\u26ea|\u26d4|\u26c5|\u26c4|\u26be|\u26bd|\u26ab|\u26aa|\u26a1|\u26a0|\u2693|\u267b|\u2668|\u2666|\u2665|\u2663|\u2660|\u2653|\u2652|\u2651|\u2650|\u264f|\u264e|\u264d|\u264c|\u264b|\u264a|\u2649|\u2648|\u263a|\u261d|\u2615|\u2614|\u2611|\u260e|\u2601|\u2600|\u25fe|\u25fd|\u25fc|\u25fb|\u25c0|\u25b6|\u25ab|\u25aa|\u24c2|\u231b|\u231a|\u21aa|\u21a9|\u2199|\u2198|\u2197|\u2196|\u2195|\u2194|\u2139|\u2049|\u203c|\u267f)([\uFE0E\uFE0F]?)))/g,

    // nodes with type 1 which should **not** be parsed
    shouldntBeParsed = /IFRAME|NOFRAMES|NOSCRIPT|SCRIPT|STYLE/,

    // just a private shortcut
    fromCharCode = String.fromCharCode;

  return twemoji;


  /////////////////////////
  //  private functions  //
  //     declaration     //
  /////////////////////////

  /**
   * Shortcut to create text nodes
   * @param   string  text used to create DOM text node
   * @return  Node  a DOM node with that text
   */
  function createText(text) {
    return document.createTextNode(text);
  }

  /**
   * Default callback used to generate emoji src
   *  based on Twitter CDN
   * @param   string    the emoji codepoint string
   * @param   string    the default size to use, i.e. "36x36"
   * @param   string    optional "\uFE0F" variant char, ignored by default
   * @return  string    the image source to use
   */
  function defaultImageSrcGenerator(icon, options) {
    return ''.concat(options.base, options.size, '/', icon, options.ext);
  }

  /**
   * Given a generic DOM nodeType 1, walk through all children
   * and store every nodeType 3 (#text) found in the tree.
   * @param   Element a DOM Element with probably some text in it
   * @param   Array the list of previously discovered text nodes
   * @return  Array same list with new discovered nodes, if any
   */
  function grabAllTextNodes(node, allText) {
    var
      childNodes = node.childNodes,
      length = childNodes.length,
      subnode,
      nodeType;
    while (length--) {
      subnode = childNodes[length];
      nodeType = subnode.nodeType;
      // parse emoji only in text nodes
      if (nodeType === 3) {
        // collect them to process emoji later
        allText.push(subnode);
      }
      // ignore all nodes that are not type 1 or that
      // should not be parsed as script, style, and others
      else if (nodeType === 1 && !shouldntBeParsed.test(subnode.nodeName)) {
        grabAllTextNodes(subnode, allText);
      }
    }
    return allText;
  }

  /**
   * Used to both remove the possible variant
   *  and to convert utf16 into code points
   * @param   string    the emoji surrogate pair
   * @param   string    the optional variant char, if any
   */
  function grabTheRightIcon(icon, variant) {
    // if variant is present as \uFE0F
    return toCodePoint(
      variant === '\uFE0F' ?
        // the icon should not contain it
        icon.slice(0, -1) :
        icon
    );
  }

  /**
   * DOM version of the same logic / parser:
   *  emojify all found sub-text nodes placing images node instead.
   * @param   Element   generic DOM node with some text in some child node
   * @param   Object    options  containing info about how to parse
    *
    *            .callback   Function  the callback to invoke per each found emoji.
    *            .base       string    the base url, by default twemoji.base
    *            .ext        string    the image extension, by default twemoji.ext
    *            .size       string    the assets size, by default twemoji.size
    *
   * @return  Element same generic node with emoji in place, if any.
   */
  function parseNode(node, options) {
    var
      allText = grabAllTextNodes(node, []),
      length = allText.length,
      fragment,
      subnode,
      text,
      match,
      i,
      index,
      img,
      alt,
      icon,
      variant,
      src;
    while (length--) {
      fragment = document.createDocumentFragment();
      subnode = allText[length];
      text = subnode.nodeValue;
      i = 0;
      while ((match = re.exec(text))) {
        index = match.index;
        if (index !== i) {
          fragment.appendChild(
            createText(text.slice(i, index))
          );
        }
        alt = match[0];
        icon = match[1];
        variant = match[2];
        i = index + alt.length;
        if (variant !== '\uFE0E') {
          src = options.callback(
            grabTheRightIcon(icon, variant),
            options,
            variant
          );
          if (src) {
            img = new Image();
            img.onerror = twemoji.onerror;
            img.className = 'emoji';
            img.setAttribute('draggable', 'false');
            img.alt = alt;
            img.src = src;
          }
        }
        fragment.appendChild(img || createText(alt));
        img = null;
      }
      // is there actually anything to replace in here ?
      if (0 < i) {
        // any text left to be added ?
        if (i < text.length) {
          fragment.appendChild(
            createText(text.slice(i))
          );
        }
        // replace the text node only, leave intact
        // anything else surrounding such text
        subnode.parentNode.replaceChild(fragment, subnode);
      }
    }
    return node;
  }

  /**
   * String/HTML version of the same logic / parser:
   *  emojify a generic text placing images tags instead of surrogates pair.
   * @param   string    generic string with possibly some emoji in it
   * @param   Object    options  containing info about how to parse
   *
   *            .callback   Function  the callback to invoke per each found emoji.
   *            .base       string    the base url, by default twemoji.base
   *            .ext        string    the image extension, by default twemoji.ext
   *            .size       string    the assets size, by default twemoji.size
   *
   * @return  the string with <img tags> replacing all found and parsed emoji
   */
  function parseString(str, options) {
    return replace(str, function (match, icon, variant) {
      var src;
      // verify the variant is not the FE0E one
      // this variant means "emoji as text" and should not
      // require any action/replacement
      // http://unicode.org/Public/UNIDATA/StandardizedVariants.html
      if (variant !== '\uFE0E') {
        src = options.callback(
          grabTheRightIcon(icon, variant),
          options,
          variant
        );
        if (src) {
          // recycle the match string replacing the emoji
          // with its image counter part
          match = '<img '.concat(
            'class="emoji" ',
            'draggable="false" ',
            // needs to preserve user original intent
            // when variants should be copied and pasted too
            'alt="',
            match,
            '" ',
            'src="',
            src,
            '"',
            '>'
          );
        }
      }
      return match;
    });
  }

  /**
   * Given a generic value, creates its squared counterpart if it's a number.
   *  As example, number 36 will return '36x36'.
   * @param   any     a generic value.
   * @return  any     a string representing asset size, i.e. "36x36"
   *                  only in case the value was a number.
   *                  Returns initial value otherwise.
   */
  function toSizeSquaredAsset(value) {
    return typeof value === 'number' ?
      value + 'x' + value :
      value;
  }


  /////////////////////////
  //  exported functions //
  //     declaration     //
  /////////////////////////

  function fromCodePoint(codepoint) {
    var code = typeof codepoint === 'string' ?
          parseInt(codepoint, 16) : codepoint;
    if (code < 0x10000) {
      return fromCharCode(code);
    }
    code -= 0x10000;
    return fromCharCode(
      0xD800 + (code >> 10),
      0xDC00 + (code & 0x3FF)
    );
  }

  function parse(what, how) {
    if (!how || typeof how === 'function') {
      how = {callback: how};
    }
    // if first argument is string, inject html <img> tags
    // otherwise use the DOM tree and parse text nodes only
    return (typeof what === 'string' ? parseString : parseNode)(what, {
      callback: how.callback || defaultImageSrcGenerator,
      base:     typeof how.base === 'string' ? how.base : twemoji.base,
      ext:      how.ext || twemoji.ext,
      size:     "svg" // toSizeSquaredAsset(how.size || twemoji.size)
    });
  }

  function replace(text, callback) {
    return String(text).replace(re, callback);
  }

  function test(text) {
    // IE6 needs a reset before too
    re.lastIndex = 0;
    var result = re.test(text);
    re.lastIndex = 0;
    return result;
  }

  function toCodePoint(unicodeSurrogates, sep) {
    var
      r = [],
      c = 0,
      p = 0,
      i = 0;
    while (i < unicodeSurrogates.length) {
      c = unicodeSurrogates.charCodeAt(i++);
      if (p) {
        r.push((0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00)).toString(16));
        p = 0;
      } else if (0xD800 <= c && c <= 0xDBFF) {
        p = c;
      } else {
        r.push(c.toString(16));
      }
    }
    return r.join(sep || '-');
  }

}());

;
var JetpackEmoji = {
		EMOJI_SIZE: 72,
		BASE_URL: '//s0.wp.com/wp-content/mu-plugins/emoji/twemoji/',

        parse: function( element, size, base_url ) {
            twemoji.parse( element, {
                size: size || this.EMOJI_SIZE,
				base: base_url || this.BASE_URL,
				callback: function(icon, options, variant) {
					// Ignore some standard characters that TinyMCE recommends in its character map.
					// https://teamtinker.wordpress.com/2014/10/29/emoji-launch-week/#comment-2103
					switch ( icon ) {
						case 'a9':
						case 'ae':
						case '2122':
						case '2194':
						case '2660':
						case '2663':
						case '2665':
						case '2666':
							return false;
					}
				
					// directly from twemoji
					return ''.concat(options.base, options.size, '/', icon, options.ext);
				}
            } );
        }
}
;
(function() {
    var emoji = {	
        init: function() {
			if ( typeof JetpackEmoji === 'undefined' ) {
				console.error( 'JetpackEmoji not found.' );
				return;
			}

			var size, base_url;
			if ( typeof JetpackEmojiSettings !== 'undefined' ) {
				size = JetpackEmojiSettings.size || null;
				base_url = JetpackEmojiSettings.base_url || null;
			}	

            JetpackEmoji.parse( document.body, size, base_url );

            if ( typeof infiniteScroll !== 'undefined' ) {
                jQuery( document.body ).on( 'post-load', function( response ) {
                    // TODO: ideally, we should only target the newly added elements
                    JetpackEmoji.parse( document.body, size, base_url );
                } );
            }
        }
    };

    if ( window.addEventListener ) {
        window.addEventListener( 'load', emoji.init, false );
    } else if ( window.attachEvent ) {
        window.attachEvent( 'onload', emoji.init );
    }
})();
;
(function($) {
    $(document).ready(function() {
        if ($('.WP01, .WP02, .WP03').is(':visible')) {
            $('.cm-fixed-container').addClass('cm-fixed-container-wallpaper');
        }

        /* replacement for the modal_manager.Open method, which doesn't work well for blogs */
        var $body = $('body');
        if ( $body.hasClass('cm-post-page') ) {
            var $modal_container = $('.cm-modal-container'),
                $modal_backdrop = $('.cm-modal-backdrop'),
                $modal_spinner = $('.cm-modal-spinner'),
                $modal_close = $('.cm-close-modal'),
                $breaking_news = $('.cm-breaking-news.cm-banner'),
                is_touch = function() {
                    return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
                };
            var $active_modal = $modal_container.find('.cm-modal-content:last'),
                active_modal_uri = $active_modal.attr('data-uri');
            previous_url = location.pathname + location.search + location.hash;
            cmg.utility.modal_manager.BindToCloseButton();
            if (!active_modal_uri) {
                active_modal_uri = location.pathname + location.search + location.hash;
            }
            cmg.utility.modal_manager.PositionCloseButton($active_modal);
            if (typeof cmg.cmgMainNav !== 'undefined') {
                if (typeof cmg.cmgMainNav.show_collapsed_nav_bar === 'function') {
                    cmg.cmgMainNav.show_collapsed_nav_bar();
                }
                if (typeof cmg.cmgMainNav.hide_footer === 'function') {
                    cmg.cmgMainFooter.hide_footer();
                }
                if (typeof cmg.cmgMainNav.wallpaper_mode !== 'undefined') {
                    cmg.cmgMainNav.wallpaper_mode(false);
                }
                if (typeof cmg.cmgMainNav.headline_check === 'function') {
                    $body.on('scroll', function() {
                        if(is_touch()) {
                            $modal_close.css('visibility','hidden');
                        }
                        cmg.cmgMainNav.headline_check()();
                        if ($breaking_news.length && $body.scrollTop() <= $breaking_news.offset().top + $breaking_news.height()) {
                            $modal_close.css('top', $breaking_news.offset().top + $breaking_news.height());
                            if (!$modal_close.hasClass('cm-breaking-news-visible')) {
                                $modal_close.addClass('cm-breaking-news-visible');
                            }
                        } else if ($breaking_news.length && $modal_close.hasClass('cm-breaking-news-visible')) {
                            $modal_close.css('top', '');
                            $modal_close.removeClass('cm-breaking-news-visible');
                        }
                    });
                    $body.scrollEnd(function(){
                        if(is_touch()) {
                            $modal_close.css('visibility','visible');
                        }
                    },500);
                }
            }
        }

        /* modal x button handling */
        if (typeof cmg.utility.modal_manager !== 'undefined') {
            cmg.utility.modal_manager.EscToClose = function() {
                closePost();
            };
        }

        window.onpopstate = function(e) {
            var mm = cmg.utility.modal_manager;
            if (e.state) {
                //console.log(mm.IsModalContentUrl(e.state.current), e.state.current);
                if (mm.ModalIsAlreadyOpen() && !mm.IsModalContentUrl(e.state.current)) {
                    mm.Close();
                } else if (typeof e.state.current !== 'undefined' && mm.IsContentFetchable(e.state.current)) {
                    mm.Open(null, e.state.current);
                } else if (typeof console !== 'undefined') {
                    // console.log('modal is not open');
                    //mm.Open();
                }
            } else if (mm.state_obj.previous && mm.state_obj.previous.indexOf(location.pathname) === -1 && mm.ModalIsAlreadyOpen()) {
                //console.log('state is null', mm.state_obj);
                mm.Close();
            }
        };

        $('.cm-close-modal').off('click.modal_manager').on('click.modal_manager', function(e) {
            e.preventDefault();
            cmg.utility.modal_manager.EscToClose();
        });

        // Fetches the comments count for posts on the homepage.
        $('.iconComments').each(function() {
            var pid = $(this).attr('data-id'),
                $comments = $(this),
                ie_version = 99,
                browser = navigator.userAgent;
            if (browser.indexOf("MSIE") > 1) { //Detects if IE
                ie_version = parseInt(browser.substr(browser.indexOf("MSIE") + 5, 5),10);
            }
            if (typeof $comments.attr('data-url') != 'undefined' && $comments.attr('data-url') != '' && typeof wp_js_config.lf_site_id !== 'undefined') {
                if (ie_version < 10) {
                    // Creates a new XDR object.
                    var xdr = new XDomainRequest(),
                        url = $comments.attr('data-url');
                    xdr.onerror = function() {};
                    xdr.ontimeout = function() {};
                    xdr.onprogress = function() {};
                    //After load, parse data returned by xdr.responseText
                    xdr.onload = function() {
                        var response = $.parseJSON(xdr.responseText),
                            comment_count;
                        response = response.data[wp_js_config.lf_site_id];
                        comment_count = (typeof response[pid].livefyre != 'undefined') ? response[pid].livefyre : 0;
                        $comments.text(comment_count);
                    };
                    // Creates a cross-domain connection
                    xdr.open('get', url);
                    // Send string data to server
                    xdr.send();
                } else {
                    $.get(
                        $comments.attr('data-url'),
                        function(data) {
                            if (data && data.code == 200 && typeof data.data != 'undefined' && typeof data.data[wp_js_config.lf_site_id] != 'undefined') {
                                var response = data.data[wp_js_config.lf_site_id],
                                    comment_count = (typeof response[pid].livefyre != 'undefined') ? response[pid].livefyre : 0;
                                $comments.text(comment_count);
                            }
                        }
                    );
                }
            }
        });

        $('.widget_tag_cloud a').on('click.modal_manager', function() {
            return false;
        }).on('click', function() {
            location.href = $(this).attr('href');
        });

        // video oembed handler
        if (typeof wp_js_config.oembed_host !== 'undefined' && $('.cm-story-body').length) {
            var window_width = $(window).width(),
                width = window_width > 1200 ? 800 : 620,
                height = window_width > 1200 ? 510 : 395,
                host_domain = location.hostname.split('.')[2],
                deferred = function() {
                return $.map($(":contains('http://link.brightcove.com/'), :contains('http://cinesport." + host_domain + ".com/')", ".cm-story-body"), function (el, i) {
                    var elm = $(el),
                        video = elm.text().trim();

                    return $.ajax({
                        type: 'GET',
                        url: wp_js_config.oembed_host + '/',
                        data: {
                            "url": video,
                            "maxheight": height
                        },
                        cache: true,
                        crossDomain: true,
                        success: function (data) {
                            var $html = data.html;
                            $html = $html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
                            $(elm).replaceWith(
                                $('<div/>', {
                                    'class' : 'embeddedPlayer',
                                    'style' : 'height:' + height + 'px; width:' + width + 'px; clear:both;',
                                    'html' : $html
                                })
                            );
                        },
                        dataType: "JSONP"
                    });
                });
            };

            if (typeof brightcove == 'undefined') {
                $.getScript("http://admin.brightcove.com/js/BrightcoveExperiences.js", function (data, textStatus, jqxhr) {
                    //script loaded
                    if (jqxhr.status === 200) {
                        // When all videos are embedded, bootstrap them
                        $.when.apply($, deferred()).then(function () {
                            brightcove.createExperiences();
                        });
                    }
                });
            } else {
                $.when.apply($, deferred()).then(function () {
                    brightcove.createExperiences();
                });
            }
        }

        var cookie_name = cmg.query.cookie('ur_name', {path:'/'});
        if (localStorage && localStorage.getItem('janrainCaptureProfileData')) {
            var profileData = localStorage.getItem('janrainCaptureProfileData');
            profileData = typeof profileData == "string" ? JSON.parse(profileData) : profileData;
            if (profileData.display_name) {
                var profile_display_name = profileData.display_name;
            }
        }

        if (typeof cookie_name !== 'string' && profile_display_name) {
            if (cmg.query('#cm-user-icon').css('background-image') != '') {
                cmg.query('#cm-user-icon')
                    .css({
                        'background-image': 'url("' + wp_js_config.oembed_host.replace('http://', '').replace('/oembed') + '/profile/avatar_jp2/' + encodeURIComponent(profile_display_name) + '/")'
                        })
                    .removeClass('cmOpenJanrainModal cm-icon cm-icon-user')
                    .addClass('cm-user-avatar');
            }
            cmg.query('.cm-user-hover-target').addClass('cm-janrain-active');
            cmg.query('#cmUserNameUpdate').text(cookie_name);
        } else if (typeof cookie_name !== 'string' ) {
            cmg.query('#cm-user-icon')
                .css({
                'background-image': 'none'
                })
                .attr('href', '#')
                .removeClass('cm-user-avatar')
                .addClass('cmOpenJanrainModal cm-icon cm-icon-user');
        }

        if ($('.cm-story-content.cm-col-835').length) {
            $(document).off('keydown keypress').on('keydown keypress', function(e) {
                if (e.keyCode === 27) {
                    e.preventDefault();
                    closePost();
                }
            });
        }
    });

    function closePost() {
        if (window.history.length > 1 && document.referrer != '' && document.referrer.indexOf(location.hostname) < 0) {
            history.back();
            return false;
        } else {
            location.href = '/';
        }
    }
})(jQuery);

if (typeof console == 'undefined') {
    console = { 
        log: function() {
        },
        error: function() {
        }
    }
}

function cmgjp2PingToPull() {
    if (typeof janrain != 'undefined' && localStorage && localStorage.getItem('janrainCaptureProfileData')) {
        var profileData = localStorage.getItem('janrainCaptureProfileData');
        profileData = typeof profileData == "string" ? JSON.parse(profileData) : profileData;
        if (profileData.uuid) {
            jQuery.get('/wp-admin/admin-ajax.php?action=cmgjp2_start_ping&uuid=' + profileData.uuid, function(data) {
                if (data.indexOf('http') != -1) {
                    jQuery.get(data, function(response) {
                        // do nothing; the request kicks off a sync on livefyre's side
                    });
                } else {
                    //console.error(data);
                }
            });
        } else {
            //console.error('Problem with uuid/profileData: ', profileData);
        }
    }
}

var timeoutInt = 500;
function cmgjp2_bindJanrainEvents() {
    if (typeof janrain != 'undefined') {
        if (typeof janrain.events != 'undefined') {
            janrain.events.onCaptureProfileSaveSuccess.addHandler(cmgjp2PingToPull);
            janrain.events.onCaptureLoginSuccess.addHandler(ajc_janrain_signinHandler);    
        } else {
            setTimeout('cmgjp2_bindJanrainEvents', timeoutInt);
            timeoutInt = timeoutInt * 2;
        }
    } else {
        setTimeout('cmgjp2_bindJanrainEvents', timeoutInt);
        timeoutInt = timeoutInt * 2;
    }
}

function cmgjp2_janrain_signinHandler() {
    if(localStorage && localStorage.getItem("janrainCaptureToken")) {
        jQuery('.capture_end_session').off('click').on('click', function(e) {
            e.preventDefault();
            janrain.capture.ui.endCaptureSession();
            location.href = '/wp-admin/admin-ajax.php?action=janrain_capture_logout&source=' + location.href;
        });
    }
}

function FetchStoryRibbon($) {
    if (typeof wp_js_config !== 'undefined' && typeof wp_js_config.oembed_host !== 'undefined' && typeof wp_js_config.taxon !== 'undefined') {
        var $ = $ || cmg.query,
            container = $('.cm-section-ribbon-stories');
            url = wp_js_config.oembed_host + '/storywell/ribbon/' + wp_js_config.taxon.toLowerCase() + '?embed';
         $.ajax({
                crossdomain: true,
                url: url,
                success: function(data) {
                    container.prepend(data);
                    $('.cm-section-ribbon').ribbon();
                },
                error: function(jqXHR, status, error) {
                    var err_text = 'There was an error fetching ' + url;
                    container.prepend(err_text);
                    throw err_text;
                }
            });
    }
}


/*
 * begin chatter js
 * Depends on $jsi defined in /medley-templates/templates/v2newspaper/web/includes/scripts.html
 * Requires dolphin's javascript be referenced within the scripts.html template
 * See: https://github.com/coxmediagroup/dolphin/blob/master/docs/source/usage.rst
 */
function LatestChatter($) {
    var chatter_site_prefix = wp_js_config.chatter_site_prefix || '',
        chatter_site_id = wp_js_config.lf_site_id || '',
        // "chatter_site_prefix" possible values: 'ajc', 'pbp', 'statesman', 'daytondaily'
        chatter_site_name = wp_js_config.chatter_site_name || '',
        chatter_network_name = wp_js_config.chatter_network_name || 'coxnews.fyre.co',
        browser = navigator.userAgent,
        $widget = $('#latest-chatter'),
        chatter_tags,
        is_scrolling = false,
        is_story = false,
        ie_version = 99, //Give a default value for non-IE browsers
        content_types = {
            comments: 'livefyre',
            social: [
                'facebook',
                'twitter',
                'instagram'
            ]
        },
        visible_content_type = 'all',
        config = {
            collection_ids: [],
            collections_content: [],
            excluded_sources: [
                /*
                 * to exclude blog comments,
                 * uncomment out this section
                 *
                0,
                4,
                5,
                8
                 */
            ],
            truncate_word_count: 30,
            max_items_to_display: 2, // number of cards to display upon initial load
            domain: chatter_network_name,
            heat_index_params: {
                /*
                 * Optional parameters for use in filtering content.  See below for descriptions and instructions for each value.
                 * Parameter  Type   - Description
                 * "tag"  String - Filter results to only include Collections with a certain tag (word MUST be within ' ' or " ").
                 * "number"   Integer - Limit # of results to this number (max of 100; default is 10)
                 */
                site: chatter_site_id,
                tag: '',
                number: 100
            }
        };

    if (browser.indexOf("MSIE") > 1) { //Detects if IE
        ie_version = parseInt(browser.substr(browser.indexOf("MSIE") + 5, 5),10);
    }

    function FetchHeatContent(config_obj) {
        var config_obj = config_obj || config,
            heat_index_url = 'http://bootstrap.' + config_obj.domain + '/api/v3.0/hottest/';
        // fetch heat index collections
        if (ie_version < 10) {
            HandleXdrRequest(heat_index_url);
        } else {
            $.ajax({
                type: 'GET',
                url: heat_index_url,
                data: config_obj.heat_index_params,
                crossDomain: true,
                success: function(response) {
                    HandleCollections(response);
                },
                error: function(jqXHR, status, error) {
                    throw 'There was an error (' + error + ') fetching ' + heat_index_url;
                }
            });
        }
    }

    function HandleXdrRequest(url) {
        // Creates a new XDR object.
        var xdr = new XDomainRequest();
        // Creates a cross-domain connection
        xdr.open('GET', url);
        xdr.onerror = function() {};
        xdr.ontimeout = function() {};
        xdr.onprogress = function() {};
        //After load, parse data returned by xdr.responseText
        xdr.onload = function() {
            var response = $.parseJSON(xdr.responseText);
            return HandleCollections(response);
        };
        // Send string data to server
        xdr.send();
    }

    function HandleCollections(response) {
        if (response.data && response.data.length > 0) {
            var deferred = function() {
                return $.map($(response.data), function(el, i) {
                    if ( el.id && el.title && el.url && el.url.indexOf(chatter_site_name + '.com') !== -1) {
                        if (typeof chatter_tags !== 'undefined' && chatter_tags.length > 0 && chatter_tags.indexOf('all') === -1) {
                            for (var i = 0; i < chatter_tags.length; i++) {
                                var chatter_tag = chatter_tags[i].replace(/_/g, ' '),
                                    chatter_tag_upper = chatter_tag.charAt(0).toUpperCase() + chatter_tag.slice(1);
                                if ($.inArray(chatter_tag, el.tags) > -1 || $.inArray(chatter_tag_upper, el.tags) > -1) {
                                    AddCollectionToArray(el);
                                    break;
                                }
                            }
                        } else {
                            AddCollectionToArray(el);
                        }
                    }
                });
            };
            $.when.apply(null, deferred()).then(function() {
                // initialize the Livefyre stream subscription(s)
                LfStreamWrapper(config);
                // show the widget contents
                $widget.find('.cm-lc-view').css({
                    display: 'block',
                    overflow: 'auto'
                });
                // update timestamps every minute
                setTimeout('cmg.utility.latest_chatter.UpdateTimestamps()', 60000);
            });
    } else if (typeof config.heat_index_params.site !== 'undefined') {
            // no results for the given site ID (and we haven't already "globalized" the request)
            // so re-run the fetch across the entire network
            delete config.heat_index_params.site;
            FetchHeatContent(config);
        }
    }
    
    function AddCollectionToArray(el) {
        /*
         * For each collection that is returned, push the id to config.collection_ids
         * array (for xref'ing in content output), and collection's articleId,
         * title and url to the config.collections_content array (for reference
         * later, when building output).
         */
        config.collection_ids.push(el.id.toString());
        config.collections_content.push([{
            articleId: el.articleId,
            siteId: el.siteId,
            title: el.title,
            url: el.url
        }]);
    }

    function TruncateContent(html) {
        // replace </p> with a space, remove all other tags (but <a> and </a>) completely, and replace multiple spaces with a single
        var $existing_content = $widget.find('.cm-lc-body').html(),
            text_words;
        if (typeof $existing_content !== 'undefined' && $existing_content !== null && $existing_content.indexOf(html) > -1) {
            // this content has already been displayed (e.g. as part of another collection)
            return false;
        }
        html = html
            .replace(/<[A-Za-z].*?>/g, '')
            .replace(/<\/?[A-Za-z].*?>/g, '')
            .replace(/ {2,}/g, ' ');
        text_words = html.split(' ');

        if (text_words.length > config.truncate_word_count) {
            // the content is longer than the word count limit
            // so we will cut it off at the limit)
            text_words = text_words.slice(config.truncate_word_count);
            var text_to_replace = text_words.join(' ');
            if (html.indexOf(text_to_replace) == -1) {
                // the exact string to be replaced isn't matched, likely due to html
                var snippet = html.substr(0, html.indexOf(text_words[0] + ' ' + text_words[1]));
                if (snippet.lastIndexOf('>') < snippet.lastIndexOf('<')) {
                    // cut the snippet off just prior to the last opening html tag
                    html = snippet.substr(0, snippet.lastIndexOf('<'));
                } else {
                    html = snippet;
                }
            } else {
                html = html.replace(text_to_replace, '');
            }
            html += '...';
        }
        return html;
    }

    function LfStreamWrapper(config) {
        Livefyre.require([
            'streamhub-sdk/content/views/content-list-view',
            'streamhub-sdk/content/views/content-view',
            'streamhub-sdk/collection',
            'streamhub-sdk/content',
            'inherits',
            'hogan'
        ], function(ListView, ContentView, Collection, Content, inherits, hogan) {

            var list_view = new ListView({
                el: $widget.find('.cm-lc-view')
            });

            HasCustomContentView.call(list_view);

            /**
             * A Custom  ContentView
             */
            function CustomContentView(opts) {
                ContentView.apply(this, arguments);
            }

            inherits(CustomContentView, ContentView);

            CustomContentView.prototype.elClass = 'custom--content-view';

            /**
             * It has a custom template, which we've stored in a script element
             * above
             */
            var mustacheTemplate = document.getElementById('cm-chatter-content-template').innerHTML,
                compiledTemplate = hogan.compile(mustacheTemplate);

            CustomContentView.prototype.template = function(context) {
                return compiledTemplate.render(context);
            };

            /**
             * Mixin to a ContentListView such that it will render a
             * CustomContentView for Content
             */
            function HasCustomContentView() {
                /**
                 * Override ListView#createContentView to create a special ContentView
                 * class for  Items
                 */
                this.createContentView = function(content) {
                    var collection_id = content.meta.collectionId,
                        collection_index = config.collection_ids.indexOf(collection_id),
                        collection_data = (collection_index > -1) ? config.collections_content[collection_index][0] : {
                            url: '',
                            title: ''
                        },
                        content_body = TruncateContent(content.body),
                        content_source = content.meta.source;

                    if (content.attachments.length > 0 && content.attachments[0].url && content.attachments[0].url.indexOf('.jpg') > -1) {
                        content.image_src = content.attachments[0].url;
                    }
                    content.collection_output = {
                        'url': collection_data.url + (((collection_data.url).indexOf('?') > -1) ? '&' : '?') + 'icmp=' + chatter_site_prefix + '_internallink_latest_chatterwidget_socialhubs',
                        'title': collection_data.title
                    };

                    if (!content_body || $.inArray(content_source, config.excluded_sources) > -1) {
                        return;
                    } else {
                        content.body = content_body;
                        if (content.source) {
                            if ($.inArray(content.source, content_types['social']) > -1) {
                                content.source = 'social';
                            } else if (content.source == 'livefyre') {
                                content.source = 'comments';
                            }
                        }
                        content.content_source = 'cm-lc-source-' + (content.source || content_source).toLowerCase();
                        if (content.source && visible_content_type !== 'all' && visible_content_type !== content.source) {
                            content.hide_this = true;
                        }
                        return makeCustomContentView(content);
                    }
                };

                /**
                 * Create a rendered custom ContentView for the provided content
                 */
                function makeCustomContentView(content) {
                    var contentView = new CustomContentView();
                    contentView.content = content;
                    contentView.render();
                    return contentView;
                }
            }

            /**
             * For each collection returned by Heat Index, create a
             * collection-stream subscription and pipe to the view
             */
            for (var i = 0; i < config.collection_ids.length; i++) {
                var collection = new Collection({
                    "network": config.domain,
                    "siteId": config.collections_content[i][0].siteId,
                    "articleId": config.collections_content[i][0].articleId
                });
                collection.pipe(list_view);
            }

        });
    }

    return {
        Init: function(container) {
            var config_obj = config,
            $chatterTargets = $('.cm-lc-widget-target'),
            $currChatter;
            if(container) {
                $widget = $(container);
            } else {
                if($chatterTargets.length) {
                    $chatterTargets.each(function() {
                        if($(this).is(':visible')) {
                            $widget = $(this).find('.cm-lc-widget');
                            return false;
                        }
                    });
                    $(window).resize(function() {
                        $chatterTargets.each(function() {
                            if($(this).is(':visible')) {
                                $currChatter = $(this);
                                $currChatter.empty();
                                $widget.detach().appendTo($currChatter);
                                return false;
                            }
                        });
                    });
                } else {
                    $widget = $('#latest-chatter');
                }
            }

            chatter_tags = $widget.data('chatterTags') !== undefined ? $widget.data('chatterTags').split(',') : ['all'];

            if (typeof config_obj.heat_index_params.tag === 'undefined' || config_obj.heat_index_params.tag === '') {
                delete config_obj.heat_index_params.tag;
            }

            if (config_obj.heat_index_params.site === '') {
                delete config_obj.heat_index_params.site;
            }

            // reset the original config object, to ensure any changes are preserved
            config = config_obj;

            $(window).scroll(function(e) {
                is_scrolling = true;
                clearTimeout($.data(this, 'scroll_timer'));
                $.data(this, 'scroll_timer', setTimeout(function() {
                    is_scrolling = false;
                }, 300));
            });

            $widget.on('mouseenter', function(e) {
                var $lc_container = $widget.find('.cm-lc-body.cm-lc-view');
                if (is_scrolling) {
                    // the user is (or was just) scrolling the page,
                    // prevent them from scrolling chatter
                    $lc_container.css({
                        overflow: 'hidden'
                    });
                } else {
                    // the user is not scrolling, so allow them to
                    // scroll within the chatter module
                    $lc_container.css({
                        overflow: 'auto'
                    });
                }
            });

            // trigger the initial (heat index) fetch and then fetch the respective collection's content
            FetchHeatContent(config_obj);
        },
        // function to handle vertical alignment (cutoff) of chatter widget & sibling column
        Align: function() {
            var $col_630 = $('.cm-homepage-template .cm-column-630'),
                $col_235 = $('.cm-homepage-template .cm-column-235');
                $lc_widget = $('.cm-lc-widget');
            if ($lc_widget.length) {
                setTimeout(function() {
                    if ($col_630.length && $col_630.height() < $col_235.height()) {
                        $widget.css({
                            height: $col_630.height() - 10 - $('.cm-lc-heading').height(),
                            overflow: 'hidden'
                        });
                    }
                }, 700);
            }
        },
        // function to handle updating the displayed timestamps over time (while sitting on the page)
        UpdateTimestamps: function() {
            $('.cm-lc-topic-timestamp').each(function() {
                var time = $(this).text();
                if (time.indexOf('s') > -1) {
                    // measured in seconds; round up or down & update to minutes
                    time = time.substr(0, time.indexOf('s')) * 1;
                    time = time >= 30 ? 2 : 1;
                    $(this).text(time + 'm');
                } else if (time.indexOf('m') > -1) {
                    // measured in minutes; increment
                    time = time.substr(0, time.indexOf('m')) * 1;
                    if (time >= 60) {
                        $(this).text('1h');
                    } else {
                        time++;
                        $(this).text(time + 'm');
                    }
                }
            });
            // update timestamps every minute
            setTimeout('cmg.utility.latest_chatter.UpdateTimestamps()', 60000);
        }
    };
}


(function($) {
    var $chatterContainer = $('.cm-chatter-container'),
    $lc_widget,
    widget_rendered = false,
    is_touch = function() {
        return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    },
    hideChatter = function() {
        $chatterContainer.hide();
    },
    initChatter = function() {
        cmg.utility.latest_chatter = LatestChatter(cmg.query);
        var $ = $ || cmg.query,
            $lc_widget = $('.cm-lc-widget');
        if ($lc_widget.length) {
            // the widget exists, align & initialize chatter
            cmg.utility.latest_chatter.Align();
            $.getScript('http://livefyre-cdn.s3.amazonaws.com/libs/sdk/v2.4.3/streamhub-sdk.min.js')
                .done(function() {
                    if ($lc_widget.is(':visible')) {
                        cmg.utility.latest_chatter.Init();
                        widget_rendered = true;
                    }
                })
                .fail(function() {
                    $lc_widget.hide();
                    if (typeof console !== 'undefined') {
                        console.error('Fetch of http://livefyre-cdn.s3.amazonaws.com/libs/sdk/v2.4.3/streamhub-sdk.min.js failed.  Hiding chatter.');
                    }
                });

            $lc_widget.on('click', '.cm-lc-topic-content', function(e) {
                if (e.target.tagName != 'A') {
                    var $topicTitles = $(this).parents('.hub-content-container').find('.cm-lc-topic-title > a');
                    if ($topicTitles.length) {
                        window.location.href = $topicTitles.attr('href');
                    }
                }
            });
        }
    };

    if ($('#latest-chatter').length && !$('.cm-lc-widget-expanded').length) {
        initChatter();
    }

    $(window).resize(function() {
        if (!widget_rendered) {
            initChatter();
        }
    });


}(jQuery));


/*** end chatter js ***/
;
