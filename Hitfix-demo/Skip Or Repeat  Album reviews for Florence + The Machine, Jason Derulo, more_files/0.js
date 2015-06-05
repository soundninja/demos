(function (d, win) {
	"use strict";

	/**
	 * Configuration
	 */
	var config = {
			acceptedOrigins: ['s3.amazonaws.com', 'cdn.onintercast.com', 'localhost']
		},

		/**
		 *  state {Boolean}: indicates the state of the expandable
		 *  resizeTimeout {int}: holds a reference to the resize timeout for resize throttling
		 *  currentTarget {Node}: is the iframe which is tracked for resize
		 */
		state = 0, // 0 is collapsed, 1 is expanded
		resizeTimeout = false,
		currentTarget,

		/**
		 * Util. functions ns: a series of functions to ensure cross-browser script support
		 */
			util = {
			/**
			 * Sets a set of attributes on an dom object
			 * @param object - target dom object
			 * @param attr - attributes object
			 */
			setAttributes: function (object, attr) {
				var i;
				try {
					for (i in attr) {
						if (attr.hasOwnProperty(i)) {
							if (i === 'style') {
								object.style.cssText = attr[i];
							} else {
								object.setAttribute(i, attr[i]);
							}
						}
					}
				} catch (err) {}
				return object;
			},

			/**
			 * Adds an event listener to a dom object, cross-browser compatible
			 * @param object
			 * @param eventName
			 * @param callback
			 */
			addEvent: function (object, eventName, callback) {
				if (object.addEventListener) {
					object.addEventListener(eventName, callback, false);
				} else {
					if (object.attachEvent) {
						object.attachEvent('on' + eventName, callback);
					}
				}
			},

			/**
			 * Retrieves screen dimensions, cross-browser compatible
			 * by Bryan Price
			 */
			getScreenDim: function () {
				var e = win,
					a = 'inner';

				if (!( 'innerWidth' in e )) {
					a = 'client';
					e = d.documentElement || d.body;
				}
				return { width: e[a + 'Width'], height: e[a + 'Height'] };
			},

			/**
			 * Removes http or https from a URL
			 * @param url
			 * @return {String}
			 */
			removeUrlProtocol: function (url) {
				return url.split("http://").join("").split("https://").join("");
			}
		},// end util
		/**
		 * This variable will save the initial iframe attributes
		 */
		originalAttrs = {},

		/**
		 * DOM functions ns: A series of functions that interact with the dom
		 * These only manipulate the frame tag in which the expandable banner is found
		 * Upon expansion the frame changes it's width and height to take up the whole screen
		 * Upon collapse it reverts to its initial size
		 */
			dom = {
			/**
			 * This function is called by a onMessage event.
			 * It manipulates the width, height and style attributes of the banner iframe
			 * Its effects are reversed by the collapse function
			 */
			expand: function (element) {
				state = 1;
				originalAttrs = {
					width: element.width,
					height: element.height,
					style: element.style.cssText
				};
				this.resize(element);
			},

			/**
			 * This function is called by a onMessage event.
			 * It undoes the effects of expand, reverting width, height and style to initial values.
			 */
			collapse: function (elem) {
				util.setAttributes(elem, originalAttrs);
				state = 0;
			},

			/**
			 * This function is called by a window.onResize event.
			 * It manipulates the width, height and style attributes of the banner iframe
			 */
			resize: function (elem) {
				if (!state) { return; }
				elem = elem || currentTarget;

				var dim  = util.getScreenDim(),
					style_value = 'position: fixed; top: 0; left: 0; z-index: 2147483647; width: ' + dim.width + 'px; height: ' + dim.height + 'px',
					attributes = {
						'width':  dim.width,
						'height': dim.height,
						'style':  style_value
					};

				util.setAttributes(elem, attributes);
			}
		},

		/**
		 * If postMessage is available this functions registers handlers
		 * to catch messages from the origins set in config. params.
		 * Two dom manipulation functions are called here: expand and collapse
		 */
			registerOnMessageHandle = function () {
			try {
				if (typeof (win.postMessage) === 'function') {
					util.addEvent(win, 'message', function (e) {
						var
							origin = util.removeUrlProtocol(e.origin),
							message,
							data = e.data;

						//if (config.acceptedOrigins.indexOf(origin) !== -1) {
						if (e.data && (e.data + "").charAt(0) === "{") {
							try {
								data = JSON.parse(e.data);
								switch (data.fn) {

									case 'expand':
										currentTarget = e.source.frameElement;
										dom.expand(e.source.frameElement);
										break;

									case 'collapse':
										dom.collapse(e.source.frameElement);
										currentTarget = null;
										break;

									case 'handshake':
										var loc = {
											href: d.location.href,
											pathname: d.location.pathname
										};
										message = JSON.stringify({fn: 'buster-handshake', loc: loc});
										e.source.postMessage(message, e.origin);
										break;
								}// end switch
							} catch (err) {
								console.log('Could not parse:', data, err);
							}
						}

						//}// endif
					});
				}
			} catch (err) {
				console.log(err);
			}
		},


		/**
		 * Registers resize handle to change the width and height of the iframe
		 */
			registerResizeHandle = function () {
			util.addEvent(win, 'resize', function () {
				if (!state) { return; }
				// We use timeouts to throttle the resize event, so it doesn't fire continuously
				// This happens on some browsers, where the event fires faster than the refresh rate of the screen
				clearTimeout(resizeTimeout);
				resizeTimeout = setTimeout(dom.resize, 300);
			});
		};

	// Register onMessage
	registerOnMessageHandle();

	// Register onResize
	registerResizeHandle();
}(document, window));
/*jslint browser: true, maxerr: 50, indent: 4 */