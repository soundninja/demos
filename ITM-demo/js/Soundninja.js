/**
 * Created by jayen on 27/05/15.
 */
// complement of 99jQuery.js
(function(jQuery) {
    var $ = jQuery;
;
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61781353-1', 'auto', {'name': 'soundninja'});
ga('soundninja.send', 'pageview');
;
/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */

jQuery.extend({
    highlight: function (node, re, nodeName, className) {
        if (node.nodeType === 3) {
            var match = node.data.replace('é', 'e').match(re);
            if (match) {
                var highlight = document.createElement(nodeName || 'span');
                highlight.className = className || 'highlight';
                var wordNode = node.splitText(match.index);
                wordNode.splitText(match[0].length);
                var wordClone = wordNode.cloneNode(true);
                highlight.appendChild(wordClone);
                wordNode.parentNode.replaceChild(highlight, wordNode);
                return 1; //skip added node in parent
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
                !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
                !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
            for (var i = 0; i < node.childNodes.length; i++) {
                i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
            }
        }
        return 0;
    }
});

jQuery.fn.unhighlight = function (options) {
    var settings = { className: 'highlight', element: 'span' };
    jQuery.extend(settings, options);

    return this.find(settings.element + "." + settings.className).each(function () {
        var parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
    }).end();
};

jQuery.fn.highlight = function (words, options) {
    var settings = { className: 'highlight', element: 'span', caseSensitive: false, wordsOnly: false, fullMatch: false };
    jQuery.extend(settings, options);

    if (words.constructor === String) {
        words = [words];
    }
    words = jQuery.grep(words, function(word, i){
      return word != '';
    });
    words = jQuery.map(words, function(word, i) {
      return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    });
    if (words.length == 0) { return this; };

    var flag = settings.caseSensitive ? "" : "i";
    var pattern = "(" + words.join("|") + ")";
    if (settings.wordsOnly) {
        pattern = "\\b" + pattern + "\\b";
    }
    if (settings.fullMatch) {
        pattern = "^" + pattern + "$";
    }
    pattern = pattern.replace("é", "e");
    var re = new RegExp(pattern, flag);

    return this.each(function () {
        jQuery.highlight(this, re, settings.element, settings.className);
    });
};

;
/*!
 * Spinners 3.0.0
 * (c) 2010-2012 Nick Stakenburg - http://www.nickstakenburg.com
 *
 * Spinners is freely distributable under the terms of an MIT-style license.
 *
 * GitHub: http://github.com/staaky/spinners
 */
;var Spinners={version:"3.0.0"};(function(a){function b(a){return a*Math.PI/180}function c(a){this.element=a}function d(b,c){b&&(this.element=b,h.remove(b),h.removeDetached(),this._position=0,this._state="stopped",this.setOptions(a.extend({color:"#000",dashes:12,radius:5,height:5,width:1.8,opacity:1,padding:3,rotation:700},c||{})),this.drawPosition(0),h.add(this))}var e={scroll:function(a,b){if(!b)return a;var c=a.slice(0,b);return a.slice(b,a.length).concat(c)},isElement:function(a){return a&&1==a.nodeType},element:{isAttached:function(){return function(a){for(;a&&a.parentNode;)a=a.parentNode;return!!a&&!!a.body}}()}},f={drawRoundedRectangle:function(c,d){var e=a.extend({top:0,left:0,width:0,height:0,radius:0},d||{}),f=e.left,g=e.top,h=e.width,i=e.height,e=e.radius;c.beginPath(),c.moveTo(f+e,g),c.arc(f+h-e,g+e,e,b(-90),b(0),!1),c.arc(f+h-e,g+i-e,e,b(0),b(90),!1),c.arc(f+e,g+i-e,e,b(90),b(180),!1),c.arc(f+e,g+e,e,b(-180),b(-90),!1),c.closePath(),c.fill()}},g=function(){function a(a){var c=[];0==a.indexOf("#")&&(a=a.substring(1)),a=a.toLowerCase();if(""!=a.replace(b,""))return null;3==a.length?(c[0]=a.charAt(0)+a.charAt(0),c[1]=a.charAt(1)+a.charAt(1),c[2]=a.charAt(2)+a.charAt(2)):(c[0]=a.substring(0,2),c[1]=a.substring(2,4),c[2]=a.substring(4));for(a=0;a<c.length;a++)c[a]=parseInt(c[a],16);return c.red=c[0],c.green=c[1],c.blue=c[2],c}var b=RegExp("[0123456789abcdef]","g"),c=function(){function a(a,b,c){return a=a.toString(c||10),Array(b-a.length).join("0")+a}return function(b,c,d){return"#"+a(b,2,16)+a(c,2,16)+a(d,2,16)}}();return{hex2rgb:a,hex2fill:function(b,c){"undefined"==typeof c&&(c=1);var d=c,e=a(b);return e[3]=d,e.opacity=d,"rgba("+e.join()+")"},rgb2hex:c}}();a.extend(Spinners,{enabled:!1,support:{canvas:function(){var b=a("<canvas>")[0];return!!b.getContext&&!!b.getContext("2d")}()},init:function(){if(this.support.canvas||window.G_vmlCanvasManager&&window.attachEvent&&-1===navigator.userAgent.indexOf("Opera"))window.G_vmlCanvasManager&&window.G_vmlCanvasManager.init_(document),this.enabled=!0},create:function(a,b){return c.create(a,b),this.get(a)},get:function(a){return new c(a)},play:function(a){return this.get(a).play(),this},pause:function(a){return this.get(a).pause(),this},toggle:function(a){return this.get(a).toggle(),this},stop:function(a){return this.get(a).stop(),this},remove:function(a){return this.get(a).remove(),this},removeDetached:function(){return h.removeDetached(),this},center:function(a){return this.get(a).center(),this},setOptions:function(a,b){return this.get(a).setOptions(b),this},getDimensions:function(a){return a=2*h.get(a)[0].getLayout().workspace.radius,{width:a,height:a}}});var h={spinners:[],get:function(b){if(b){var c=[];return a.each(this.spinners,function(d,f){f&&(e.isElement(b)?f.element==b:a(f.element).is(b))&&c.push(f)}),c}},add:function(a){this.spinners.push(a)},remove:function(b){a(a.map(this.spinners,function(c){if(e.isElement(b)?c.element==b:a(c.element).is(b))return c.element})).each(a.proxy(function(a,b){this.removeByElement(b)},this))},removeByElement:function(b){var c=this.get(b)[0];c&&(c.remove(),this.spinners=a.grep(this.spinners,function(a){return a.element!=b}))},removeDetached:function(){a.each(this.spinners,a.proxy(function(a,b){b&&b.element&&!e.element.isAttached(b.element)&&this.remove(b.element)},this))}};a.extend(c,{create:function(b,c){if(b){var f=c||{},g=[];return e.isElement(b)?g.push(new d(b,f)):a(b).each(function(a,b){g.push(new d(b,f))}),g}}}),a.extend(c.prototype,{items:function(){return h.get(this.element)},play:function(){return a.each(this.items(),function(a,b){b.play()}),this},stop:function(){return a.each(this.items(),function(a,b){b.stop()}),this},pause:function(){return a.each(this.items(),function(a,b){b.pause()}),this},toggle:function(){return a.each(this.items(),function(a,b){b.toggle()}),this},center:function(){return a.each(this.items(),function(a,b){b.center()}),this},setOptions:function(b){return a.each(this.items(),function(a,c){c.setOptions(b)}),this},remove:function(){return h.remove(this.element),this}}),a.extend(d.prototype,{setOptions:function(b){this.options=a.extend({},this.options,b||{}),this.options.radii&&(b=this.options.radii,this.options.radius=Math.min(b[0],b[1]),this.options.height=Math.max(b[0],b[1])-this.options.radius),this.options.dashWidth&&(this.options.width=this.options.dashWidth),this.options.speed&&(this.options.duration=1e3*this.options.speed);var b=this._state,c=this._position;this._layout=null,this.build(),c&&c>=this.options.dashes-1&&(this._position=this.options.dashes-1);switch(b){case"playing":this.play();break;case"paused":case"stopped":this.drawPosition(this._position)}this._centered&&this.center()},remove:function(){this.canvas&&(this.pause(),a(this.canvas).remove(),this.ctx=this.canvas=null)},build:function(){this.remove();var b=this.getLayout().workspace.radius;return a(document.body).append(this.canvas=a("<canvas>").attr({width:2*b,height:2*b}).css({zoom:1})),window.G_vmlCanvasManager&&G_vmlCanvasManager.initElement(this.canvas[0]),this.ctx=this.canvas[0].getContext("2d"),this.ctx.globalAlpha=this.options.opacity,a(this.element).append(this.canvas),this.ctx.translate(b,b),this},drawPosition:function(a){var c=this.getLayout().workspace,a=e.scroll(c.opacities,-1*a),d=c.radius,c=this.options.dashes,f=b(360/c);this.ctx.clearRect(-1*d,-1*d,2*d,2*d);for(d=0;d<c;d++)this.drawDash(a[d],this.options.color),this.ctx.rotate(f)},drawDash:function(a,b){this.ctx.fillStyle=g.hex2fill(b,a);var c=this.getLayout(),d=c.workspace.radius,e=c.dash.position,c=c.dash.dimensions;f.drawRoundedRectangle(this.ctx,{top:e.top-d,left:e.left-d,width:c.width,height:c.height,radius:Math.min(c.height,c.width)/2})},_nextPosition:function(){var b=this.options.rotation/this.options.dashes;this.nextPosition(),this._playTimer=window.setTimeout(a.proxy(this._nextPosition,this),b)},nextPosition:function(){this._position==this.options.dashes-1&&(this._position=-1),this._position++,this.drawPosition(this._position)},play:function(){if("playing"!=this._state){this._state="playing";var b=this.options.rotation/this.options.dashes;return this._playTimer=window.setTimeout(a.proxy(this._nextPosition,this),b),this}},pause:function(){if("paused"!=this._state)return this._pause(),this._state="paused",this},_pause:function(){this._playTimer&&(window.clearTimeout(this._playTimer),this._playTimer=null)},stop:function(){if("stopped"!=this._state)return this._pause(),this._position=0,this.drawPosition(0),this._state="stopped",this},toggle:function(){return this["playing"==this._state?"pause":"play"](),this},getLayout:function(){if(this._layout)return this._layout;for(var a=this.options,b=a.dashes,c=a.width,d=a.radius,e=a.radius+a.height,f=Math.max(c,e),f=Math.ceil(Math.max(f,Math.sqrt(e*e+c/2*(c/2)))),a=f+=a.padding,g=1/b,h=[],i=0;i<b;i++)h.push((i+1)*g);return this._layout=b={workspace:{radius:a,opacities:h},dash:{position:{top:f-e,left:f-c/2},dimensions:{width:c,height:e-d}}}},center:function(){var b=2*this.getLayout().workspace.radius;a(this.element.parentNode).css({position:"relative"}),a(this.element).css({position:"absolute",height:b+"px",width:b+"px",top:"50%",left:"50%",marginLeft:-0.5*b+"px",marginTop:-0.5*b+"px"}),this._centered=!0}}),Spinners.init(),Spinners.enabled||(c.create=function(){return[]})})(jQuery);;
/*!
 * Tipped - The jQuery Tooltip - v3.2.0
 * (c) 2010-2013 Nick Stakenburg
 *
 * http://projects.nickstakenburg.com/tipped
 *
 * License: http://projects.nickstakenburg.com/tipped/license
 */
;var Tipped = { version: '3.2.0' };

Tipped.Skins = {
  // base skin, don't modify! (create custom skins in a separate file)
  'base': {
    afterUpdate: false,
    ajax: {
      cache: true,
      type: 'get'
    },
    background: {
      color: '#f2f2f2',
      opacity: 1
    },
    border: {
      size: 1,
      color: '#000',
      opacity: 1
    },
    closeButtonSkin: 'default',
    containment: {
      selector: 'viewport'
    },
    fadeIn: 180,
    fadeOut: 220,
    showDelay: 75,
    hideDelay: 25,
    radius: {
      size: 5,
      position: 'background'
    },
    hideAfter: false,
    hideOn: {
      element: 'self',
      event: 'mouseleave'
    },
    hideOthers: false,
    hook: 'topleft',
    inline: false,
    offset: { x: 0, y: 0 },
    onHide: false,
    onShow: false,
    shadow: {
      blur: 2,
      color: '#000',
      offset: { x: 0, y: 0 },
      opacity: .12
    },
    showOn: 'mousemove',
    spinner: true,
    stem: {
      height: 9,
      width: 18,
      offset: { x: 9, y: 9 },
      spacing: 2
    },
    target: 'self'
  },
  
  // Every other skin inherits from this one
  'reset': {
    ajax: false,
    closeButton: false,
    hideOn: [{
      element: 'self',
      event: 'mouseleave'
    }, {
      element: 'tooltip',
      event: 'mouseleave'
    }],
    hook: 'topmiddle',
    stem: true
  },
  
  'dark': {
    background: { color: '#121314' },
    border: { color: '#9b9b9b', opacity: .4, size: 1 },
    shadow: { opacity: .02 },
    spinner: { color: '#fff' }
  },
  
  'light': {
    background: { color: '#fff' },
    border: { color: '#646464', opacity: .4, size: 1 },
    shadow: { opacity: .04 }
  },
  
  'gray': {
    background: {
      color: [
        { position: 0, color: '#8f8f8f'},
        { position: 1, color: '#808080' }
      ]
    },
    border: { color: '#131313', size: 1, opacity: .6 } 
  },
  
  'tiny': {
    background: { color: '#161616' },
    border: { color: '#969696', opacity: .35, size: 1 },
    fadeIn: 0,
    fadeOut: 0,
    radius: 4,
    stem: {
      width: 11,
      height: 6,
      offset: { x: 6, y: 6 }
    },
    shadow: false,
    spinner: { color: '#fff' }
  },

  'yellow': {
    background: '#ffffaa',
    border: { size: 1, color: '#6d5208', opacity: .4 }
  },
  
  'red': {
    background: {
      color: [
        { position: 0, color: '#e13c37'},
        { position: 1, color: '#e13c37' }
      ]
    },
    border: { size: 1, color: '#150201', opacity: .6 },
    spinner: { color: '#fff' }
  },
  
  'green': {
    background: {
      color: [
        { position: 0, color: '#4bb638'},
        { position: 1, color: '#4aab3a' }
      ]
    },
    border: { size: 1, color: '#122703', opacity: .6 },
    spinner: { color: '#fff' }
  },

  'blue': {
    background: {
      color: [
        { position: 0, color: '#4588c8'},
        { position: 1, color: '#3d7cb9' }
      ]
    },
    border: { color: '#020b17', opacity: .6 },
    spinner: { color: '#fff' }
  }
};


/* black and white are dark and light without radius */
(function($) {
  $.extend(Tipped.Skins, {
    black: $.extend(true, {}, Tipped.Skins.dark, { radius: 0 }),
    white: $.extend(true, {}, Tipped.Skins.light, { radius: 0 })
  });
})(jQuery);

Tipped.Skins.CloseButtons = {
  'base': {
    diameter: 17,
    border: 2,
    x: { diameter: 10, size: 2, opacity: 1 },
    states: {
      'default': {
        background: {
          color: [
            { position: 0, color: '#1a1a1a' },
            { position: 0.46, color: '#171717' },
            { position: 0.53, color: '#121212' },
            { position: 0.54, color: '#101010' },
            { position: 1, color: '#000' }
          ],
          opacity: 1
        },
        x: { color: '#fafafa', opacity: 1 },
        border: { color: '#fff', opacity: 1 }
      },
      'hover': {
        background: {
          color: '#333',
          opacity: 1
        },
        x: { color: '#e6e6e6', opacity: 1 },
        border: { color: '#fff', opacity: 1 }
      }
    },
    shadow: {
      blur: 1,
      color: '#000',
      offset: { x: 0, y: 0 },
      opacity: .5
    }
  },

  'reset': {},

  'default': {},

  'light': {
    diameter: 17,
    border: 2,
    x: { diameter: 10, size: 2, opacity: 1 },
    states: {
      'default': {
        background: {
          color: [
            { position: 0, color: '#797979' },
            { position: 0.48, color: '#717171' },
            { position: 0.52, color: '#666' },
            { position: 1, color: '#666' }
          ],
          opacity: 1
        },
        x: { color: '#fff', opacity: .95 },
        border: { color: '#676767', opacity: 1 }
      },
      'hover': {
        background: {
          color: [
            { position: 0, color: '#868686' },
            { position: 0.48, color: '#7f7f7f' },
            { position: 0.52, color: '#757575' },
            { position: 1, color: '#757575' }
          ],
          opacity: 1
        },
        x: { color: '#fff', opacity: 1 },
        border: { color: '#767676', opacity: 1 }
      }
    }
  }
};


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('!12(a){12 c(a,b){13 c=[a,b];1a c.15=a,c.17=b,c}12 f(a){1I.5z&&5z[5z.6F?"6F":"8j"](a)}12 j(a){11.1g=a}12 k(a){13 b={};28(13 c 5A a)b[c]=a[c]+"2y";1a b}12 l(a,b){1a 1b.8k(a*a+b*b)}12 m(a){1a 2F*a/1b.30}12 n(a){1a a*1b.30/2F}12 o(a){1a 1/1b.4G(a)}12 v(b){1f(b){11.1g=b,u.1y(b);13 c=11.2e();11.19=a.1k({},c.19),11.2z=1,11.1o={},11.1V=a(b).1X("2s-1V"),u.31(11),11.29=11.19.1u.1D,11.6G=11.19.1l&&11.29,11.3d={x:0,y:0},11.3n={17:0,15:0},11.1P()}}12 x(b,c){11.1g=b,11.1g&&c&&(11.19=a.1k({32:3,1A:{x:0,y:0},1Q:"#4H",1L:.5,2M:1},20[2]||{}),11.2z=11.19.2M,11.1o={},11.1V=a(b).1X("2s-1V"),w.31(11),11.1P())}12 z(b){11.1g=b,11.1g&&(11.19=a.1k({32:5,1A:{x:0,y:0},1Q:"#4H",1L:.5,2M:1},20[1]||{}),11.2z=11.19.2M,11.1V=a(b).1X("2s-1V"),y.31(11),11.1P())}12 A(b,c){28(13 d 5A c)c[d]&&c[d].3G&&c[d].3G===5B?(b[d]=a.1k({},b[d])||{},A(b[d],c[d])):b[d]=c[d];1a b}12 C(b,c){1f(11.1g=b,11.1g){13 e=a(b).1X("2s-1V");e&&B.1y(b),e=h(),a(b).1X("2s-1V",e),11.1V=e;13 f;"8l"!=a.1p(c)||d.2k(c)?f=20[2]||{}:(f=c,c=1r),11.19=B.6H(f);13 g=b.6I("5C");1f(!c){13 i=b.6I("1X-2s");i?c=i:g&&(c=g)}g&&(a(b).1X("5D",g),b.8m("5C","")),11.2G=c,11.2l=11.19.2l||+B.19.4I,11.1o={2H:{14:1,18:1},5E:[],3e:[],2t:{4J:!1,2m:!1,1M:!1,3f:!1,1P:!1,4K:!1,5F:!1,3H:!1},5G:""};13 j=11.19.1C;11.1C="2N"==j?"2N":"4L"!=j&&j?d.2k(j)?j:j&&1x.6J(j)||11.1g:11.1g,11.6K(),B.31(11)}}13 b=6L.3I.8n,d={8o:12(c,d){13 e=c;1a 12(){13 c=[a.1v(e,11)].6M(b.5H(20));1a d.5I(11,c)}},2k:12(a){1a a&&1==a.8p},4M:12(a,c){13 d=b.5H(20,2);1a 8q(12(){1a a.5I(a,d)},c)},46:12(a){1a d.4M.5I(11,[a,1].6M(b.5H(20,1)))},5J:12(a){1a{x:a.5K,y:a.6N}},1g:{4N:12(a){13 b=0,d=0;8r b+=a.4O||0,d+=a.4P||0,a=a.4Q;8s(a);1a c(d,b)},4R:12(b){13 e=a(b).1A(),f=d.1g.4N(b),g={17:a(1I).4O(),15:a(1I).4P()};1a e.15+=f.15-g.15,e.17+=f.17-g.17,c(e.15,e.17)},4S:12(){12 a(a){28(13 b=a;b&&b.4Q;)b=b.4Q;1a b}1a 12(b){13 c=a(b);1a!(!c||!c.33)}}()}},e=12(a){12 b(b){13 c=2I 5L(b+"([\\\\d.]+)").8t(a);1a c?5M(c[1]):!0}1a{3o:!(!1I.8u||-1!==a.3p("5N"))&&b("8v "),5N:a.3p("5N")>-1&&(!!1I.5O&&5O.6O&&5M(5O.6O())||7.55),5P:a.3p("6P/")>-1&&b("6P/"),4T:a.3p("4T")>-1&&-1===a.3p("8w")&&b("8x:"),6Q:!!a.3g(/8y.*8z.*8A/),4U:a.3p("4U")>-1&&b("4U/")}}(8B.8C),g={34:{47:{5Q:"1.4.4",5R:1I.47&&47.8D.8E}},6R:12(){12 b(b){28(13 c=b.3g(a),d=c&&c[1]&&c[1].2O(".")||[],e=0,f=0,g=d.2a;g>f;f++)e+=2P(d[f]*1b.6S(10,6-2*f));1a c&&c[3]?e-1:e}13 a=/^(\\d+(\\.?\\d+){0,3})([A-6T-8F-]+[A-6T-8G-9]+)?/;1a 12(a){11.34[a].6U||(11.34[a].6U=!0,(!11.34[a].5R||b(11.34[a].5R)<b(11.34[a].5Q)&&!11.34[a].6V)&&(11.34[a].6V=!0,f("1R 8H "+a+" >= "+11.34[a].5Q)))}}()},h=12(){13 a=0,b="8I";1a 12(c){28(c=c||b,a++;1x.6J(c+a);)a++;1a c+a}}(),i=12(){13 b=[];1a{1t:12(c){28(13 d=1r,e=0;e<b.2a;e++)b[e]&&b[e].48==c.48&&b[e].1p.6W()==c.1p.6W()&&a.6X(b[e].1X||{})==a.6X(c.1X||{})&&(d=b[e].4V);1a d},4W:12(c,d){11.1y(c.48),b.2n(a.1k({},c,{4V:d}))},1y:12(a){28(13 c=0;c<b.2a;c++)b[c]&&b[c].48==a&&3J b[c]},6Y:12(){b=[]}}}();a.1k(1R,12(){1a{2A:{3h:12(){13 a=1x.22("3h");1a!(!a.3q||!a.3q("2d"))}(),3r:12(){6Z{1a!!("8J"5A 1I||1I.70&&1x 8K 70)}71(a){1a!1}}(),49:12(){13 b=["8L","72","8M"],c=!!1I.72;1a a.1w(b,12(a,b){6Z{1x.8N(b),c=!0}71(d){}}),c}()},3s:12(){(11.2A.3h||e.3o)&&(g.6R("47"),B.3t.1i&&(B.3t.1i.1y(),B.3t.1i=1r),a(1x).8O(12(){B.73(),B.74()}))},4X:12(a,b,c){1a j.4X(a,b,c),11.1t(a)},1t:12(a){1a 2I j(a)},5S:12(a){1a B.5S(a)},1W:12(a){1a 11.1t(a).1W(),11},1J:12(a){1a 11.1t(a).1J(),11},35:12(a){1a 11.1t(a).35(),11},2Q:12(a){1a 11.1t(a).2Q(),11},1y:12(a){1a 11.1t(a).1y(),11},4Y:12(){1a B.4Y(),11},5T:12(a){1a B.5T(a),11},5U:12(a){1a B.5U(a),11},1M:12(b){1f(d.2k(b))1a B.5V(b);1f("5W"!=a.1p(b)){13 c=a(b),e=0;1a a.1w(c,12(a,b){B.5V(b)&&e++}),e}1a B.3K().2a},5X:12(){1a B.5X(),11}}}()),a.1k(j,{4X:12(b,c){1f(b){13 e=20[2]||{},f=[];1a B.75(),d.2k(b)?f.2n(2I C(b,c,e)):a(b).1w(12(a,b){f.2n(2I C(b,c,e))}),f}}}),a.1k(j.3I,{4a:12(){1a B.2f.4Z={x:0,y:0},B.1t(11.1g)},1W:12(){1a a.1w(11.4a(),12(a,b){b.1W()}),11},1J:12(){1a a.1w(11.4a(),12(a,b){b.1J()}),11},35:12(){1a a.1w(11.4a(),12(a,b){b.35()}),11},2Q:12(){1a a.1w(11.4a(),12(a,b){b.2Q()}),11},1y:12(){1a B.1y(11.1g),11}});13 p={51:12(){13 b;1a b=e.6Q?{14:1I.5Y,18:1I.5Z}:{18:a(1I).18(),14:a(1I).14()}}},q={3u:1b.1E(1b.52(1I.3u?5M(1I.3u)||1:1,2)),3s:12(){12 a(a){13 b=a.3q("2d");b.8P(q.3u,q.3u)}1a 1I.53&&!1R.2A.3h&&e.3o?12(b){53.8Q(b),a(b)}:12(b){a(b)}}(),3v:12(b,c){a(b).3i({14:c.14*11.3u,18:c.18*11.3u}).1q(k(c))},76:12(b){13 c=a.1k({17:0,15:0,14:0,18:0,1n:0},20[1]||{}),d=c,e=d.15,f=d.17,g=d.14,h=d.18,i=d.1n;1a i?(b.2g(),b.3w(e+i,f),b.26(e+g-i,f+i,i,n(-90),n(0),!1),b.26(e+g-i,f+h-i,i,n(0),n(90),!1),b.26(e+i,f+h-i,i,n(90),n(2F),!1),b.26(e+i,f+i,i,n(-2F),n(-90),!1),b.2h(),b.36(),3x 0):(b.77(e,f,g,h),3x 0)},8R:12(b,c){28(13 d=a.1k({x:0,y:0,1Q:"#4H"},20[2]||{}),e=0,f=c.2a;f>e;e++)28(13 g=0,h=c[e].2a;h>g;g++){13 i=2P(c[e].3y(g))*(1/9);b.2R=t.2S(d.1Q,i),i&&b.77(d.x+g,d.y+e,1,1)}},4b:12(b,c){13 d;1f("2u"==a.1p(c))d=t.2S(c);1G 1f("2u"==a.1p(c.1Q))d=t.2S(c.1Q,"2B"==a.1p(c.1L)?c.1L:1);1G 1f(a.78(c.1Q)){13 e=a.1k({3L:0,3M:0,3N:0,3O:0},20[2]||{});d=q.79.7a(b.8S(e.3L,e.3M,e.3N,e.3O),c.1Q,c.1L)}1a d}};q.79={7a:12(b,c){28(13 d="2B"==a.1p(20[2])?20[2]:1,e=0,f=c.2a;f>e;e++){13 g=c[e];("5W"==a.1p(g.1L)||"2B"!=a.1p(g.1L))&&(g.1L=1),b.8T(g.1e,t.2S(g.1Q,g.1L*d))}1a b}};13 r={7b:["3P","4c","3Q","3R","4d","4e","4f","4g","4h","4i","4j","3S"],4k:{7c:/^(17|15|1S|1O)(17|15|1S|1O|2v|2T)$/,1K:/^(17|1S)/,37:/(2v|2T)/,7d:/^(17|1S|15|1O)/},7e:12(){13 a={17:"18",15:"14",1S:"18",1O:"14"};1a 12(b){1a a[b]}}(),37:12(a){1a!!a.3z().3g(11.4k.37)},7f:12(a){1a!11.37(a)},2J:12(a){1a a.3z().3g(11.4k.1K)?"1K":"2b"},60:12(a){13 b=1r,c=a.3z().3g(11.4k.7d);1a c&&c[1]&&(b=c[1]),b},2O:12(a){1a a.3z().3g(11.4k.7c)}},s={61:12(a){13 b=a.19.1l;1a{14:b.14,18:b.18}},4l:12(b,c){13 d=a.1k({3T:"1E"},20[2]||{}),e=b.19.1l,f=e.14,g=e.18,h=11.54(f,g,c);1a d.3T&&(h.14=1b[d.3T](h.14),h.18=1b[d.3T](h.18)),{14:h.14,18:h.18}},54:12(a,b,c){13 d=m(1b.7g(.5*(b/a))),e=2F-d,f=1b.4G(n(e-90))*c,g=a+2*f,h=g*b/a;1a{14:g,18:h}},3U:12(a,b){13 c=11.4l(a,b),d=11.61(a),f=(r.37(a.29),1b.1E(c.18+b));1a a.19.1l.1A||0,a.19.1n&&a.19.1n.2w||0,{2C:{1c:{14:1b.1E(c.14),18:1b.1E(f)}},1j:{1c:c},1l:{1c:{14:d.14,18:d.18}}}},62:12(b,c,d){13 f=b.19,g={17:0,15:0},h={17:0,15:0},i=a.1k({},c),j=b.1j,k=k||11.3U(b,b.1j),l=k.2C.1c;d&&(l.18=d,j=0);13 m=r.2O(b.29),n=r.2J(b.29);1f(b.19.1l){13 o=r.60(b.29);1f("17"==o?g.17=l.18-j:"15"==o&&(g.15=l.18-j),"1K"==n){1T(m[2]){1h"2v":1h"2T":h.15=.5*i.14;1B;1h"1O":h.15=i.14}"1S"==m[1]&&(h.17=i.18-j+l.18)}1G{1T(m[2]){1h"2v":1h"2T":h.17=.5*i.18;1B;1h"1S":h.17=i.18}"1O"==m[1]&&(h.15=i.14-j+l.18)}i[r.7e(o)]+=l.18-j}1G 1f("1K"==n){1T(m[2]){1h"2v":1h"2T":h.15=.5*i.14;1B;1h"1O":h.15=i.14}"1S"==m[1]&&(h.17=i.18)}1G{1T(m[2]){1h"2v":1h"2T":h.17=.5*i.18;1B;1h"1S":h.17=i.18}"1O"==m[1]&&(h.15=i.14)}13 p=f.1n&&f.1n.2w||0,q=f.1j&&f.1j.2w||0;1f(b.19.1l){13 t=p&&"1m"==f.1n.1e?p:0,u=p&&"1j"==f.1n.1e?p:p+q,v=q+t+.5*k.1l.1c.14-.5*k.1j.1c.14,w=u>v?u-v:0,x=1b.1E(q+t+.5*k.1l.1c.14+w);1f("1K"==n)1T(m[2]){1h"15":h.15+=x;1B;1h"1O":h.15-=x}1G 1T(m[2]){1h"17":h.17+=x;1B;1h"1S":h.17-=x}}13 y;1f(f.1l&&(y=f.1l.1A)){13 z=s.63(y,b.6G,c,k.1j.1c,q,p);1f(y=z.1A,z.4m,"1K"==n)1T(m[2]){1h"15":h.15+=y.x;1B;1h"1O":h.15-=y.x}1G 1T(m[2]){1h"17":h.17+=y.y;1B;1h"1S":h.17-=y.y}}13 B;1f(f.1l&&(B=f.1l.8U))1f("1K"==n)1T(m[1]){1h"17":h.17-=B;1B;1h"1S":h.17+=B}1G 1T(m[1]){1h"15":h.15-=B;1B;1h"1O":h.15+=B}1a{1c:i,1e:{17:0,15:0},1m:{1e:g,1c:c},1l:{1c:l},2K:h}},63:12(b,c,d,e,f,g){13 h=r.2J(c),i=a.1k({},b),j={x:0,y:0},k=0;1a"1K"==h&&(k=d.14-e.14-2*f-2*g)<2*b.x&&(j.x=i.x,/(1O)$/.3j(c)&&(j.x*=-1),i.x=0),"2b"==h&&(k=d.18-e.18-2*f-2*g)<2*b.y&&(j.y=i.y,/(1S)$/.3j(c)&&(j.y*=-1),i.y=0),{1A:i,4m:j}}},t=12(){12 d(a){13 b=a;1a b.7h=a[0],b.7i=a[1],b.7j=a[2],b}12 e(a){1a 2P(a,16)}12 f(a){13 b=2I 6L(3);1f(0==a.3p("#")&&(a=a.56(1)),a=a.3z(),""!=a.64(c,""))1a 1r;3==a.2a?(b[0]=a.3y(0)+a.3y(0),b[1]=a.3y(1)+a.3y(1),b[2]=a.3y(2)+a.3y(2)):(b[0]=a.56(0,2),b[1]=a.56(2,4),b[2]=a.56(4));28(13 f=0;f<b.2a;f++)b[f]=e(b[f]);1a d(b)}12 g(a,b){13 c=f(a);1a c[3]=b,c.1L=b,c}12 h(b,c){1a"5W"==a.1p(c)&&(c=1),"8V("+g(b,c).8W()+")"}12 i(a){1a"#"+(j(a)[2]>50?"4H":"8X")}12 j(a){1a k(f(a))}12 k(a){13 f,g,h,a=d(a),b=a.7h,c=a.7i,e=a.7j,i=b>c?b:c;e>i&&(i=e);13 j=c>b?b:c;1f(j>e&&(j=e),h=i/8Y,g=0!=i?(i-j)/i:0,0==g)f=0;1G{13 k=(i-b)/(i-j),l=(i-c)/(i-j),m=(i-e)/(i-j);f=b==i?m-l:c==i?2+k-m:4+l-k,f/=6,0>f&&(f+=1)}f=1b.23(7k*f),g=1b.23(65*g),h=1b.23(65*h);13 n=[];1a n[0]=f,n[1]=g,n[2]=h,n.8Z=f,n.91=g,n.92=h,n}13 b="93",c=2I 5L("["+b+"]","g");1a{94:f,2S:h,95:i}}(),u={57:{},1t:12(b){1f(!b)1a 1r;13 c=1r,d=a(b).1X("2s-1V");1a d&&(c=11.57[d]),c},31:12(a){11.57[a.1V]=a},1y:12(a){13 b=11.1t(a);b&&(3J 11.57[b.1V],b.1y())}};a.1k(v.3I,12(){12 b(){11.1o.1u={};13 b=11.29;a.1w(r.7b,a.1v(12(b,c){13 d,e=11.1o.1u[c]={};11.29=c;13 f=11.2p();d=f,e.2K=d.2K;13 g=d.1H.1c,h={17:d.1H.1e.17,15:d.1H.1e.15};1f(e.1H={1c:g,1e:h},e.1D={1c:d.21.1c},11.1s){13 i=11.1s.2p(),j=i.21.1e,k=e.1H.1e;a.1k(!0,e,{2K:i.2K,1H:{1e:{17:k.17+j.17,15:k.15+j.15}},1D:{1c:i.1D.1c}})}},11)),11.29=b}12 c(){11.38(),11.19.1s&&(w.1y(11.1g),11.19.1z&&11.19.1z.1s&&y.1y(11.1g)),11.2U&&(11.2U.1y(),11.2U=1r),11.1i&&(a(11.1i).1y(),11.1i=1r)}12 d(){11.1H&&(11.1z&&(a(11.1z).1y(),11.1z=1r,11.66=1r,11.67=1r),a(11.1H).1y(),11.1l=1r,11.1m=1r,11.1H=1r,11.1o={})}12 f(){13 a=11.2e();11.2H=a.1o.2H;13 b=a.19;11.1n=b.1n&&b.1n.2w||0,11.1j=b.1j&&b.1j.2w||0,11.2o=b.2o;13 c=1b.52(11.2H.18,11.2H.14);11.1n>c/2&&(11.1n=1b.68(c/2)),"1j"==11.19.1n.1e&&11.1n>11.1j&&(11.1j=11.1n),11.1o={19:{1n:11.1n,1j:11.1j,2o:11.2o}}}12 g(){11.38(),1I.53&&1I.53.96(1x);13 b=11.2e(),c=11.19;11.1H=a("<2i>").1Y("97")[0],a(b.58).1Z(11.1H),11.59(),11.7l(b),c.1z&&(11.7m(b),c.1z.1s&&(11.2V?(11.2V.19=c.1z.1s,11.2V.1P()):11.2V=2I z(11.1g,a.1k({2M:11.2z},c.1z.1s)))),e.3o&&e.3o<7&&a(b.1i).69(11.2U=a("<98>").1Y("99").3i({9a:0,4n:"9b:\'\';"})),11.5a(),c.1s&&(11.1s?(11.1s.19=c.1s,11.1s.1P()):11.1s=2I x(11.1g,11,a.1k({2M:11.2z},c.1s))),11.7n()}12 h(){13 b=11.2e(),c=a(b.1i),d=a(b.1i).6a(".7o").7p()[0];1f(d){a(d).1q({14:"6b",18:"6b"});13 e=2P(c.1q("17")),f=2P(c.1q("15")),g=2P(c.1q("14"));c.1q({15:"-7q",17:"-7q",14:"9c",18:"6b"}),b.1F("1M")||a(b.1i).1W();13 h=B.3t.6c(d);b.19.3k&&"2B"==a.1p(b.19.3k)&&h.14>b.19.3k&&(a(d).1q({14:b.19.3k+"2y"}),h=B.3t.6c(d)),b.1F("1M")||a(b.1i).1J(),b.1o.2H=h,c.1q({15:f+"2y",17:e+"2y",14:g+"2y"}),11.1P()}}12 i(a,b,c){13 d=!1;11.4o(a)&&(d=!0),11.7r(b)&&(d=!0),c&&11.7s(c)&&(d=!0),d&&11.1P()}12 j(a){13 b=!1;1a(11.3n.15!=a.15||11.3n.17!=a.17)&&(b=!0,11.3n=a),b}12 l(a){13 b=!1;1a(11.3d.x!=a.x||11.3d.y!=a.y)&&(b=!0,11.3d=a),b}12 m(a){13 c=!1;1a 11.29!=a&&(c=!0,11.29=a),c}12 o(){1a B.1t(11.1g)[0]}12 p(){1a s.3U(11,11.1j)}12 u(){13 b=11.2e().19.1z,c=b.3A+2*b.1j;a(11.66).1q({15:-1*c+"2y"}),a(11.67).1q({15:0})}12 v(){13 b=11.2e().19.1z,c=b.3A+2*b.1j;a(11.66).1q({15:0}),a(11.67).1q({15:c+"2y"})}12 A(b){13 c=b.19.1z,d={14:c.3A+2*c.1j,18:c.3A+2*c.1j};a(b.1i).1Z(a(11.1z=1x.22("2i")).1Y("6d").1q(k(d)).1Z(a(11.7t=1x.22("2i")).1Y("9d").1q(k(d)))),11.6e(b,"6f"),11.6e(b,"6g"),1R.2A.3r||e.4U||a(11.1z).3V("4p",a.1v(11.7u,11)).3V("5b",a.1v(11.7v,11))}12 C(b,c){13 d=b.19.1z,e=d.3A,f=d.1j||0,g=d.x.3A,h=d.x.2w,j=(d.x.9e,d.2t[c||"6f"]),l={14:e+2*f,18:e+2*f};g>=e&&(g=e-2);13 m;a(11.7t).1Z(a(11[c+"7w"]=1x.22("2i")).1Y("9f").1q(a.1k(k(l),{15:("6g"==c?l.14:0)+"2y"}))),a(1x.33).1Z(a(m=1x.22("3h"))),q.3v(m,l),q.3s(m);13 o=m.3q("2d");o.2M=11.2z,a(11[c+"7w"]).1Z(m),o.9g(l.14/2,l.18/2),o.2R=q.4b(o,j.1m,{3L:0,3M:0-e/2,3N:0,3O:0+e/2}),o.2g(),o.26(0,0,e/2,0,2*1b.30,!0),o.2h(),o.36(),f&&(o.2R=q.4b(o,j.1j,{3L:0,3M:0-e/2-f,3N:0,3O:0+e/2+f}),o.2g(),o.26(0,0,e/2,1b.30,0,!1),o.1d((e+f)/2,0),o.26(0,0,e/2+f,0,1b.30,!0),o.26(0,0,e/2+f,1b.30,0,!0),o.1d(e/2,0),o.26(0,0,e/2,0,1b.30,!1),o.2h(),o.36());13 p=g/2,r=h/2;1f(r>p){13 s=r;r=p,p=s}o.2R=t.2S(j.x.1Q||j.x,j.x.1L||1),o.5c(n(45)),o.2g(),o.3w(0,0),o.1d(0,p);28(13 u=0;4>u;u++)o.1d(0,p),o.1d(r,p),o.1d(r,p-(p-r)),o.1d(p,r),o.1d(p,0),o.5c(n(90));o.2h(),o.36()}12 D(b){13 l,m,o,p,q,c=a.1k({1l:!1,3B:1r,9h:1r,2g:!1,2h:!1,3C:1r,3D:1r,1n:0,1j:0,5d:0,39:{x:0,y:0}},20[1]||{}),d=c.3C,e=c.3D,f=c.39,g=c.1j,h=c.1n,i=c.3B,j=d.1m.1e,k=d.1m.1c,t={x:1b.2W(11.3d.x),y:1b.2W(11.3d.y)},u={x:0,y:0},v={x:0,y:0};1f(e){l=e.1l.1c,m=e.2C.1e,o=e.2C.1c,p=o.14-l.14;13 w=c.5d,x=g+h+.5*l.14-.5*e.1j.1c.14;q=1b.1E(w>x?w-x:0);13 y=s.63(f,i,k,e.1j.1c,g,h);f=y.1A,v=y.4m,u={x:1b.1U(k.14-2*1b.1U(q,f.x||0)-e.1j.1c.14-(2*h||0),0),y:1b.1U(k.18-2*1b.1U(q,f.y||0)-e.1j.1c.18-(2*h||0),0)},r.37(i)&&(u.x*=.5,u.y*=.5),t.x=1b.52(t.x,u.x),t.y=1b.52(t.y,u.y),r.37(i)&&(11.3d.x<0&&t.x>0&&(t.x*=-1),11.3d.y<0&&t.y>0&&(t.y*=-1)),11.3n&&11.3n.3E&&a.1w(11.3n.3E,12(b,c){a.1w("17 1O 1S 15".2O(" "),12(a,b){c==b&&2I 5L("("+b+")$").3j(i)&&(t[/^(15|1O)$/.3j(b)?"x":"y"]=0)})})}13 z,A;1f(h?(z=j.15+g+h,A=j.17+g):(z=j.15+g,A=j.17+g),f&&f.x&&/^(3P|3S)$/.3j(i)&&(z+=f.x),c.2g&&b.2g(),b.3w(z,A),c.1l)1T(i){1h"3P":z=j.15+g,h&&(z+=h),z+=1b.1U(q,f.x||0),z+=t.x,b.1d(z,A),A-=l.18,z+=.5*l.14,b.1d(z,A),A+=l.18,z+=.5*l.14,b.1d(z,A);1B;1h"4c":1h"5e":z=j.15+.5*k.14-.5*l.14,z+=t.x,b.1d(z,A),A-=l.18,z+=.5*l.14,b.1d(z,A),A+=l.18,z+=.5*l.14,b.1d(z,A),z=j.15+.5*k.14-.5*o.14,b.1d(z,A);1B;1h"3Q":z=j.15+k.14-g-l.14,h&&(z-=h),z-=1b.1U(q,f.x||0),z-=t.x,b.1d(z,A),A-=l.18,z+=.5*l.14,b.1d(z,A),A+=l.18,z+=.5*l.14,b.1d(z,A)}1f(h?h&&(b.26(j.15+k.14-g-h,j.17+g+h,h,n(-90),n(0),!1),z=j.15+k.14-g,A=j.17+g+h):(z=j.15+k.14-g,A=j.17+g,b.1d(z,A)),c.1l)1T(i){1h"3R":A=j.17+g,h&&(A+=h),A+=1b.1U(q,f.y||0),A+=t.y,b.1d(z,A),z+=l.18,A+=.5*l.14,b.1d(z,A),z-=l.18,A+=.5*l.14,b.1d(z,A);1B;1h"4d":1h"5f":A=j.17+.5*k.18-.5*l.14,A+=t.y,b.1d(z,A),z+=l.18,A+=.5*l.14,b.1d(z,A),z-=l.18,A+=.5*l.14,b.1d(z,A);1B;1h"4e":A=j.17+k.18-g,h&&(A-=h),A-=l.14,A-=1b.1U(q,f.y||0),A-=t.y,b.1d(z,A),z+=l.18,A+=.5*l.14,b.1d(z,A),z-=l.18,A+=.5*l.14,b.1d(z,A)}1f(h?h&&(b.26(j.15+k.14-g-h,j.17+k.18-g-h,h,n(0),n(90),!1),z=j.15+k.14-g-h,A=j.17+k.18-g):(z=j.15+k.14-g,A=j.17+k.18-g,b.1d(z,A)),c.1l)1T(i){1h"4f":z=j.15+k.14-g,h&&(z-=h),z-=1b.1U(q,f.x||0),z-=t.x,b.1d(z,A),z-=.5*l.14,A+=l.18,b.1d(z,A),z-=.5*l.14,A-=l.18,b.1d(z,A);1B;1h"4g":1h"5g":z=j.15+.5*k.14+.5*l.14,z+=t.x,b.1d(z,A),z-=.5*l.14,A+=l.18,b.1d(z,A),z-=.5*l.14,A-=l.18,b.1d(z,A);1B;1h"4h":z=j.15+g+l.14,h&&(z+=h),z+=1b.1U(q,f.x||0),z+=t.x,b.1d(z,A),z-=.5*l.14,A+=l.18,b.1d(z,A),z-=.5*l.14,A-=l.18,b.1d(z,A)}1f(h?h&&(b.26(j.15+g+h,j.17+k.18-g-h,h,n(90),n(2F),!1),z=j.15+g,A=j.17+k.18-g-h):(z=j.15+g,A=j.17+k.18-g,b.1d(z,A)),c.1l)1T(i){1h"4i":A=j.17+k.18-g,h&&(A-=h),A-=1b.1U(q,f.y||0),A-=t.y,b.1d(z,A),z-=l.18,A-=.5*l.14,b.1d(z,A),z+=l.18,A-=.5*l.14,b.1d(z,A);1B;1h"4j":1h"5h":A=j.17+.5*k.18+.5*l.14,A+=t.y,b.1d(z,A),z-=l.18,A-=.5*l.14,b.1d(z,A),z+=l.18,A-=.5*l.14,b.1d(z,A);1B;1h"3S":A=j.17+g+l.14,h&&(A+=h),A+=1b.1U(q,f.y||0),A+=t.y,b.1d(z,A),z-=l.18,A-=.5*l.14,b.1d(z,A),z+=l.18,A-=.5*l.14,b.1d(z,A)}1a h?h&&(b.26(j.15+g+h,j.17+g+h,h,n(-2F),n(-90),!1),z=j.15+g+h,A=j.17+g,z+=1,b.1d(z,A)):(z=j.15+g,A=j.17+g,b.1d(z,A)),c.2h&&b.2h(),{x:z,y:A,1l:t,5i:v,39:f}}12 E(b){13 o,p,q,r,s,t,c=a.1k({1l:!1,3B:1r,2g:!1,2h:!1,3C:1r,3D:1r,1n:0,1j:0,7x:0,39:{x:0,y:0},5j:1r},20[1]||{}),d=c.3C,e=c.3D,g=(c.7x,c.39),h=c.1j,i=c.1n&&c.1n.2w||0,j=c.7y,k=c.3B,l=d.1m.1e,m=d.1m.1c,u=c.5j&&c.5j.1l||{x:0,y:0};1f(e){o=e.1l.1c,p=e.2C.1e,q=e.2C.1c,r=e.1j.1c,s=q.14-o.14;13 v=h+j+.5*o.14-.5*r.14;t=1b.1E(i>v?i-v:0)}13 w=l.15+h+j,x=l.17+h;j&&(w+=1),a.1k({},{x:w,y:x}),c.2g&&b.2g();13 z=a.1k({},{x:w,y:x});1f(x-=h,b.1d(w,x),i?i&&(b.26(l.15+i,l.17+i,i,n(-90),n(-2F),!0),w=l.15,x=l.17+i):(w=l.15,x=l.17,b.1d(w,x)),c.1l)1T(k){1h"3S":x=l.17+h,j&&(x+=j),x-=.5*r.14,x+=.5*o.14,x+=1b.1U(t,g.y||0),x+=u.y,b.1d(w,x),w-=r.18,x+=.5*r.14,b.1d(w,x),w+=r.18,x+=.5*r.14,b.1d(w,x);1B;1h"4j":1h"5h":x=l.17+.5*m.18-.5*r.14,x+=u.y,b.1d(w,x),w-=r.18,x+=.5*r.14,b.1d(w,x),w+=r.18,x+=.5*r.14,b.1d(w,x);1B;1h"4i":x=l.17+m.18-h-r.14,j&&(x-=j),x+=.5*r.14,x-=.5*o.14,x-=1b.1U(t,g.y||0),x-=u.y,b.1d(w,x),w-=r.18,x+=.5*r.14,b.1d(w,x),w+=r.18,x+=.5*r.14,b.1d(w,x)}1f(i?i&&(b.26(l.15+i,l.17+m.18-i,i,n(-2F),n(-9i),!0),w=l.15+i,x=l.17+m.18):(w=l.15,x=l.17+m.18,b.1d(w,x)),c.1l)1T(k){1h"4h":w=l.15+h,j&&(w+=j),w-=.5*r.14,w+=.5*o.14,w+=1b.1U(t,g.x||0),w+=u.x,b.1d(w,x),x+=r.18,w+=.5*r.14,b.1d(w,x),x-=r.18,w+=.5*r.14,b.1d(w,x);1B;1h"4g":1h"5g":w=l.15+.5*m.14-.5*r.14,w+=u.x,b.1d(w,x),x+=r.18,w+=.5*r.14,b.1d(w,x),x-=r.18,w+=.5*r.14,b.1d(w,x),w=l.15+.5*m.14+r.14,b.1d(w,x);1B;1h"4f":w=l.15+m.14-h-r.14,j&&(w-=j),w+=.5*r.14,w-=.5*o.14,w-=1b.1U(t,g.x||0),w-=u.x,b.1d(w,x),x+=r.18,w+=.5*r.14,b.1d(w,x),x-=r.18,w+=.5*r.14,b.1d(w,x)}1f(i?i&&(b.26(l.15+m.14-i,l.17+m.18-i,i,n(90),n(0),!0),w=l.15+m.14,x=l.17+m.14+i):(w=l.15+m.14,x=l.17+m.18,b.1d(w,x)),c.1l)1T(k){1h"4e":x=l.17+m.18-h,x+=.5*r.14,x-=.5*o.14,j&&(x-=j),x-=1b.1U(t,g.y||0),x-=u.y,b.1d(w,x),w+=r.18,x-=.5*r.14,b.1d(w,x),w-=r.18,x-=.5*r.14,b.1d(w,x);1B;1h"4d":1h"5f":x=l.17+.5*m.18+.5*r.14,x+=u.y,b.1d(w,x),w+=r.18,x-=.5*r.14,b.1d(w,x),w-=r.18,x-=.5*r.14,b.1d(w,x);1B;1h"3R":x=l.17+h,j&&(x+=j),x+=r.14,x-=.5*r.14-.5*o.14,x+=1b.1U(t,g.y||0),x+=u.y,b.1d(w,x),w+=r.18,x-=.5*r.14,b.1d(w,x),w-=r.18,x-=.5*r.14,b.1d(w,x)}1f(i?i&&(b.26(l.15+m.14-i,l.17+i,i,n(0),n(-90),!0),w=l.15+m.14-i,x=l.17):(w=l.15+m.14,x=l.17,b.1d(w,x)),c.1l)1T(k){1h"3Q":w=l.15+m.14-h,w+=.5*r.14-.5*o.14,j&&(w-=j),w-=1b.1U(t,g.x||0),w-=u.x,b.1d(w,x),x-=r.18,w-=.5*r.14,b.1d(w,x),x+=r.18,w-=.5*r.14,b.1d(w,x);1B;1h"4c":1h"5e":w=l.15+.5*m.14+.5*r.14,w+=u.x,b.1d(w,x),x-=r.18,w-=.5*r.14,b.1d(w,x),x+=r.18,w-=.5*r.14,b.1d(w,x),w=l.15+.5*m.14-r.14,b.1d(w,x),b.1d(w,x);1B;1h"3P":w=l.15+h+r.14,w-=.5*r.14,w+=.5*o.14,j&&(w+=j),w+=1b.1U(t,g.x||0),w+=u.x,b.1d(w,x),x-=r.18,w-=.5*r.14,b.1d(w,x),x+=r.18,w-=.5*r.14,b.1d(w,x)}b.1d(z.x,z.y-h),b.1d(z.x,z.y),c.2h&&b.2h()}12 F(b){13 c=11.2p(),d=11.19.1l&&11.4q(),e=11.29&&11.29.3z(),f=11.1n,h=11.1j,i=11.2o,k=({14:2*h+2*i+11.2H.14,18:2*h+2*i+11.2H.18},b.19.1l&&b.19.1l.1A||{x:0,y:0}),l=0,m=0;f&&(l="1m"==11.19.1n.1e?f:0,m="1j"==11.19.1n.1e?f:l+h),a(1x.33).1Z(11.2X=1x.22("3h")),q.3v(11.2X,c.1H.1c),q.3s(11.2X);13 n=11.2X.3q("2d");n.2M=11.2z,a(11.1H).1Z(11.2X),n.2R=q.4b(n,11.19.1m,{3L:0,3M:c.1m.1e.17+h,3N:0,3O:c.1m.1e.17+c.1m.1c.18-h}),n.9j=0;13 o;1f(o=11.6h(n,{2g:!0,2h:!0,1j:h,1n:l,5d:m,3C:c,3D:d,1l:11.19.1l,3B:e,39:k}),n.36(),h){13 p=q.4b(n,11.19.1j,{3L:0,3M:c.1m.1e.17,3N:0,3O:c.1m.1e.17+c.1m.1c.18});n.2R=p,o=11.6h(n,{2g:!0,2h:!1,1j:h,1n:l,5d:m,3C:c,3D:d,1l:11.19.1l,3B:e,39:k}),11.7z(n,{2g:!1,2h:!0,1j:h,7y:l,1n:{2w:m,1e:11.19.1n.1e},3C:c,3D:d,1l:11.19.1l,3B:e,39:o.39,5j:o}),n.36()}11.3F=o}12 G(){13 i,a=11.2e(),b=11.2H,c=a.19,d=11.1n,f=11.1j,g=11.2o,h={14:2*f+2*g+b.14,18:2*f+2*g+b.18};1f(11.19.1l){13 j=11.4q();i=j.2C.1c}13 k=s.62(11,h),l=k.1c,m=k.1e,h=k.1m.1c,o=k.1m.1e;k.1l.1c;13 r,t,u,q={17:0,15:0},v={14:l.14,18:l.18};1f(c.1z){13 w=d;"1m"==c.1n.1e&&(w+=f);13 x=w-1b.9k(n(45))*w,y="1O";11.29.3z().3g(/^(3Q|3R)$/)&&(y="15");13 z=c.1z.3A+2*c.1z.1j,r={14:z,18:z};1f(q.15=o.15-z/2+("15"==y?x:h.14-x),q.17=o.17-z/2+x,"15"==y){1f(q.15<0){13 A=1b.2W(q.15);v.14+=A,m.15+=A,q.15=0}}1G{13 B=q.15+z-v.14;B>0&&(v.14+=B)}1f(q.17<0){13 C=1b.2W(q.17);v.18+=C,m.17+=C,q.17=0}1f(11.19.1z.1s){13 D=11.19.1z.1s,E=D.32,F=D.1A;1f(t={14:r.14+2*E,18:r.18+2*E},u={17:q.17-E+F.y,15:q.15-E+F.x},"15"==y){1f(u.15<0){13 A=1b.2W(u.15);v.14+=A,m.15+=A,q.15+=A,u.15=0}}1G{13 B=u.15+t.14-v.14;B>0&&(v.14+=B)}1f(u.17<0){13 C=1b.2W(u.17);v.18+=C,m.17+=C,q.17+=C,u.17=0}}}13 G=k.2K;G.17+=m.17,G.15+=m.15;13 H={15:1b.1E(m.15+o.15+11.1j+11.19.2o),17:1b.1E(m.17+o.17+11.1j+11.19.2o)},I={1D:{1c:{14:1b.1E(v.14),18:1b.1E(v.18)}},21:{1c:{14:1b.1E(v.14),18:1b.1E(v.18)}},1H:{1c:l,1e:{17:1b.23(m.17),15:1b.23(m.15)}},1m:{1c:{14:1b.1E(h.14),18:1b.1E(h.18)},1e:{17:1b.23(o.17),15:1b.23(o.15)}},2K:{17:1b.23(G.17),15:1b.23(G.15)},2G:{1e:H}};1a 11.19.1z&&(I.1z={1c:{14:1b.1E(r.14),18:1b.1E(r.18)},1e:{17:1b.23(q.17),15:1b.23(q.15)}},11.19.1z.1s&&(I.2V={1c:{14:1b.1E(t.14),18:1b.1E(t.18)},1e:{17:1b.23(u.17),15:1b.23(u.15)}})),I}12 H(){13 b=11.2p(),c=11.2e();a(c.1i).1q(k(b.1D.1c)),a(c.58).1q(k(b.21.1c)),11.2U&&11.2U.1q(k(b.1D.1c)),a(11.1H).1q(a.1k(k(b.1H.1c),k(b.1H.1e))),11.1z&&(a(11.1z).1q(k(b.1z.1e)),b.2V&&a(11.2V.1i).1q(k(b.2V.1e))),a(c.3a).1q(k(b.2G.1e))}12 I(a){11.2z=a||0,11.1s&&(11.1s.2z=11.2z)}12 J(a){11.7A(a),11.1P()}1a{59:f,7n:b,1P:g,1y:c,38:d,2e:o,2Q:h,5k:i,7s:j,7r:l,4o:m,7m:A,6e:C,7l:F,6h:D,7z:E,7u:u,7v:v,4q:p,2p:G,5a:H,7A:I,9l:J}}());13 w={3l:{},1t:12(b){1f(!b)1a 1r;13 c=1r,d=a(b).1X("2s-1V");1a d&&(c=11.3l[d]),c},31:12(a){11.3l[a.1V]=a},1y:12(a){13 b=11.1t(a);b&&(3J 11.3l[b.1V],b.1y())},4r:12(a){1a 1b.30/2-1b.6S(a,1b.4G(a)*1b.30)}};w.4s={4l:12(a,b){13 c=u.1t(a.1g),d=c.4q().1j.1c,e=11.54(d.14,d.18,b,{3T:!1});1a{14:e.14,18:e.18}},9m:12(a,b,c){13 d=.5*a,e=m(1b.9n(d/l(d,b))),f=2F-e-90,g=o(n(f))*c,h=2*(d+g),i=h/a*b;1a{14:h,18:i}},54:12(a,b,c){13 d=m(1b.7g(.5*(b/a))),e=2F-d,f=1b.4G(n(e-90))*c,g=a+2*f,h=g*b/a;1a{14:g,18:h}},3U:12(b){13 c=u.1t(b.1g),d=b.19.32,e=r.7f(c.29),g=(r.2J(c.29),w.4s.4l(b,d)),h={2C:{1c:{14:1b.1E(g.14),18:1b.1E(g.18)},1e:{17:0,15:0}}};1f(d){h.2Y=[];28(13 i=0;d>=i;i++){13 j=w.4s.4l(b,i,{3T:!1}),k={1e:{17:h.2C.1c.18-j.18,15:e?d-i:(h.2C.1c.14-j.14)/2},1c:j};h.2Y.2n(k)}}1G h.2Y=[a.1k({},h.2C)];1a h},5c:12(a,b,c){s.5c(a,b.3m(),c)}},a.1k(x.3I,12(){12 b(){1a B.1t(11.1g)[0]}12 c(){1a u.1t(11.1g)}12 d(){11.38()}12 e(){11.1i&&(a(11.1i).1y(),11.1l=1r,11.1m=1r,11.1H=1r,11.1i=1r,11.1o={})}12 f(){}12 g(){11.38(),11.59();13 b=11.2e(),c=11.3m();11.1i=a("<2i>").1Y("9o")[0],a(b.1i).69(11.1i),c.2U&&a(b.1i).69(c.2U),c.2p(),a(11.1i).1q({17:0,15:0}),11.7B(),11.5a()}12 h(){1a 11.19.1L/(11.19.32+1)}12 i(){13 b=11.3m(),c=b.2p(),d=11.2e(),e=11.2p(),f=11.19.32,g=w.4s.3U(11),h=b.29,i=r.60(h),j={17:f,15:f};1f(d.19.1l){13 l=g.2Y[g.2Y.2a-1];"15"==i&&(j.15+=1b.1E(l.1c.18)),"17"==i&&(j.17+=1b.1E(l.1c.18))}13 m=b.1o.19,n=m.1n,o=m.1j;"1m"==d.19.1n.1e&&n&&(n+=o);13 p=e.1H.1c;a(11.1i).1Z(a(11.1H=1x.22("2i")).1Y("9p").1q(k(p))).1q(k(p)),a(1x.33).1Z(a(11.2X=1x.22("3h"))),q.3v(11.2X,e.1H.1c),q.3s(11.2X);13 s=11.2X.3q("2d");s.2M=11.2z,a(11.1H).1Z(11.2X);28(13 u=f+1,v=0;f>=v;v++)s.2R=t.2S(11.19.1Q,w.4r(v*(1/u))*(11.19.1L/u)),q.76(s,{14:c.1m.1c.14+2*v,18:c.1m.1c.18+2*v,17:j.17-v,15:j.15-v,1n:n+v});1f(b.19.1l){13 x={x:j.15,y:j.17},y=g.2Y[0].1c,z=b.19.1l,A=o;A+=.5*z.14;13 B=b.19.1n&&"1m"==b.19.1n.1e?b.19.1n.2w||0:0;B&&(A+=B);13 C=o+B+.5*z.14-.5*y.14,D=1b.1E(n>C?n-C:0),E=b.3F&&b.3F.1l||{x:0,y:0},F=b.3F&&b.3F.5i||{x:0,y:0};1f(A+=1b.1U(D,b.19.1l.1A&&b.19.1l.1A[i&&/^(15|1O)$/.3j(i)?"y":"x"]||0),"17"==i||"1S"==i){1T(h){1h"3P":1h"4h":x.x+=A+E.x-F.x;1B;1h"4c":1h"5e":1h"4g":1h"5g":x.x+=.5*c.1m.1c.14+E.x;1B;1h"3Q":1h"4f":x.x+=c.1m.1c.14-(A-E.x+F.x)}"1S"==i&&(x.y+=c.1m.1c.18);28(13 v=0,G=g.2Y.2a;G>v;v++){s.2R=t.2S(11.19.1Q,w.4r(v*(1/u))*(11.19.1L/u));13 f=g.2Y[v];s.2g(),"17"==i?(s.3w(x.x,x.y-v),s.1d(x.x-.5*f.1c.14,x.y-v),s.1d(x.x,x.y-v-f.1c.18),s.1d(x.x+.5*f.1c.14,x.y-v)):(s.3w(x.x,x.y+v),s.1d(x.x-.5*f.1c.14,x.y+v),s.1d(x.x,x.y+v+f.1c.18),s.1d(x.x+.5*f.1c.14,x.y+v)),s.2h(),s.36()}}1G{1T(h){1h"3S":1h"3R":x.y+=A+E.y-F.y;1B;1h"4j":1h"5h":1h"4d":1h"5f":x.y+=.5*c.1m.1c.18+E.y;1B;1h"4i":1h"4e":x.y+=c.1m.1c.18-(A-E.y+F.y)}"1O"==i&&(x.x+=c.1m.1c.14);28(13 v=0,G=g.2Y.2a;G>v;v++){s.2R=t.2S(11.19.1Q,w.4r(v*(1/u))*(11.19.1L/u));13 f=g.2Y[v];s.2g(),"15"==i?(s.3w(x.x-v,x.y),s.1d(x.x-v,x.y-.5*f.1c.14),s.1d(x.x-v-f.1c.18,x.y),s.1d(x.x-v,x.y+.5*f.1c.14)):(s.3w(x.x+v,x.y),s.1d(x.x+v,x.y-.5*f.1c.14),s.1d(x.x+v+f.1c.18,x.y),s.1d(x.x+v,x.y+.5*f.1c.14)),s.2h(),s.36()}}}}12 j(){13 b=11.3m();b.2H,b.1n;13 e=b.2p(),g=(11.2e(),11.19.32),h=a.1k({},e.1m.1c);h.14+=2*g,h.18+=2*g;13 i,k;1f(b.19.1l){13 l=w.4s.3U(11);i=l.2C.1c,k=i.18}13 m=s.62(b,h,k),n=m.1c,o=m.1e,h=m.1m.1c,p=m.1m.1e,r=e.1H.1e,t=e.1m.1e,u={17:r.17+t.17-(p.17+g)+11.19.1A.y,15:r.15+t.15-(p.15+g)+11.19.1A.x},v=e.2K,x=e.21.1c,y={17:0,15:0};1f(u.17<0){13 z=1b.2W(u.17);y.17+=z,u.17=0,v.17+=z}1f(u.15<0){13 A=1b.2W(u.15);y.15+=A,u.15=0,v.15+=A}13 B={18:1b.1U(n.18+u.17,x.18+y.17),14:1b.1U(n.14+u.15,x.14+y.15)},C={15:1b.1E(y.15+e.1H.1e.15+e.1m.1e.15+b.1j+b.2o),17:1b.1E(y.17+e.1H.1e.17+e.1m.1e.17+b.1j+b.2o)},D={1D:{1c:B},21:{1c:x,1e:y},1i:{1c:n,1e:u},1H:{1c:n,1e:{17:1b.23(o.17),15:1b.23(o.15)}},1m:{1c:{14:1b.1E(h.14),18:1b.1E(h.18)},1e:{17:1b.23(p.17),15:1b.23(p.15)}},2K:v,2G:{1e:C}};1a D}12 l(){13 b=11.2p(),c=11.3m(),d=11.2e();1f(a(d.1i).1q(k(b.1D.1c)),a(d.58).1q(a.1k(k(b.21.1e),k(b.21.1c))),c.2U&&c.2U.1q(k(b.1D.1c)),d.19.1z){13 e=c.2p(),f=b.21.1e,g=e.1z.1e;1f(a(c.1z).1q(k({17:f.17+g.17,15:f.15+g.15})),d.19.1z.1s){13 h=e.2V.1e;a(c.2V.1i).1q(k({17:f.17+h.17,15:f.15+h.15}))}}a(11.1i).1q(a.1k(k(b.1i.1c),k(b.1i.1e))),a(11.1H).1q(k(b.1H.1c)),a(d.3a).1q(k(b.2G.1e))}1a{59:f,1y:d,38:e,1P:g,2e:b,3m:c,2p:j,7C:h,7B:i,5a:l}}());13 y={3l:{},1t:12(b){1f(!b)1a 1r;13 c=a(b).1X("2s-1V");1a c?11.3l[c]:1r},31:12(a){11.3l[a.1V]=a},1y:12(a){13 b=11.1t(a);b&&(3J 11.3l[b.1V],b.1y())}};a.1k(z.3I,12(){12 b(){1a B.1t(11.1g)[0]}12 c(){1a u.1t(11.1g)}12 d(){1a 11.19.1L/(11.19.32+1)}12 e(){11.38()}12 f(){11.1i&&(a(11.1i).1y(),11.1i=1r)}12 g(){11.38();13 c=(11.2e(),11.3m()),d=c.2p().1z.1c,e=a.1k({},d),f=11.19.32;e.14+=2*f,e.18+=2*f,a(c.1z).6i(a(11.1i=1x.22("2i")).1Y("9q")),a(1x.33).1Z(a(11.4t=1x.22("3h"))),q.3v(11.4t,e),q.3s(11.4t);13 g=11.4t.3q("2d");g.2M=11.2z,a(11.1i).1Z(11.4t);28(13 h=e.14/2,i=e.18/2,j=d.18/2,k=f+1,l=0;f>=l;l++)g.2R=t.2S(11.19.1Q,w.4r(l*(1/k))*(11.19.1L/k)),g.2g(),g.26(h,i,j+l,n(0),n(7k),!0),g.2h(),g.36()}1a{1P:g,1y:e,38:f,2e:b,3m:c,7C:d}}());13 B={2q:{},19:{3W:"6j",4I:9r},7D:12(){13 b=["2r"];1R.2A.3r&&(b.2n("7E"),11.4u&&a(1x.33).4v("2r",11.4u),11.4u=1r),a.1w(b,12(b,c){a(1x.6k).9s(".3b .6d, .3b .7F-1D",c)}),11.4w&&(a(1I).4v("3v",11.4w),11.4w=1r),a(1x).4v("4x",B.2f.6l)},74:12(){12 b(){11.7D();13 b=["2r"];1R.2A.3r&&(b.2n("7E"),11.4u=12(){1a 3x 0},a(1x.33).3V("2r",11.4u)),a.1w(b,12(b,c){a(1x.6k).9t(".3b .6d, .3b .7F-1D",c,12(b){b.9u(),b.9v(),B.6m(a(b.1C).5l(".3b")[0]).1J()})}),11.4w=a.1v(11.7G,11),a(1I).3V("3v",11.4w),a(1x).3V("4x",B.2f.6l)}1a b}(),7G:12(){11.5m&&(1I.6n(11.5m),11.5m=1r),11.5m=d.4M(a.1v(12(){13 b=11.3K();a.1w(b,12(a,b){b.1e()})},11),9w)},5n:12(b){13 d,c=a(b).1X("2s-1V");1f(!c){13 e=11.6m(a(b).5l(".3b")[0]);e&&e.1g&&(c=a(e.1g).1X("2s-1V"))}1a c&&(d=11.2q[c])?d:3x 0},5S:12(a){13 b;1a d.2k(a)&&(b=11.5n(a)),b&&b.1g},1t:12(b){13 c=[];1f(d.2k(b)){13 e=11.5n(b);e&&(c=[e])}1G a.1w(11.2q,12(d,e){e.1g&&a(e.1g).7H(b)&&c.2n(e)});1a c},6m:12(b){1f(!b)1a 1r;13 c=1r;1a a.1w(11.2q,12(a,d){d.1F("1P")&&d.1i===b&&(c=d)}),c},9x:12(b){13 c=[];1a a.1w(11.2q,12(d,e){e.1g&&a(e.1g).7H(b)&&c.2n(e)}),c},1W:12(b){1f(d.2k(b)){13 c=b,e=11.1t(c)[0];e&&e.1W()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.1W()},11))},1J:12(b){1f(d.2k(b)){13 c=11.1t(b)[0];c&&c.1J()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.1J()},11))},35:12(b){1f(d.2k(b)){13 c=b,e=11.1t(c)[0];e&&e.35()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.35()},11))},4Y:12(){a.1w(11.3K(),12(a,b){b.1J()})},2Q:12(b){1f(d.2k(b)){13 c=b,e=11.1t(c)[0];e&&e.2Q()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.2Q()},11))},3K:12(){13 b=[];1a a.1w(11.2q,12(a,c){c.1M()&&b.2n(c)}),b},5V:12(b){13 c=!1;1a d.2k(b)&&a.1w(11.3K()||[],12(a,d){1a d.1g==b?(c=!0,!1):3x 0}),c},7I:12(){13 c,b=0;1a a.1w(11.2q,12(a,d){d.2l>b&&(b=d.2l,c=d)}),c},7J:12(){11.3K().2a<=1&&a.1w(11.2q,12(b,c){c.1F("1P")&&!c.19.2l&&a(c.1i).1q({2l:c.2l=+B.19.4I})})},31:12(a){11.2q[a.1V]=a},4y:12(b){13 c=11.5n(b);1f(c){13 d=a(c.1g).1X("2s-1V");3J 11.2q[d],c.1J(),c.1y()}},1y:12(b){d.2k(b)?11.4y(b):a(b).1w(a.1v(12(a,b){11.4y(b)},11))},75:12(){a.1w(11.2q,a.1v(12(a,b){b.1g&&!d.1g.4S(b.1g)&&11.4y(b.1g)},11))},73:12(){a.1w(11.2q,a.1v(12(a,b){b.1g&&11.4y(b.1g)},11)),11.2q={}},5T:12(a){11.19.3W=a||"6j"},5U:12(a){11.19.4I=a||0},5X:12(){a.1w(11.2q,a.1v(12(a,b){b.1o&&b.1o.2m&&(b.1o.2m.6o(),b.1o.2m=1r),b.27("3f",!1)},11)),i.6Y()},6H:12(){12 f(d){13 e;1a e="2u"==a.1p(d)?{1g:c.25&&c.25.1g||b.25.1g,2x:d}:A(a.1k({},b.25),d)}12 g(f){1a b=1R.2D.7K,c=A(a.1k({},b),1R.2D.6p),d=1R.2D.6q.7K,e=A(a.1k({},d),1R.2D.6q.6p),g=h,h(f)}12 h(g){g.21=g.21&&1R.2D[g.21]?g.21:1R.2D[B.19.3W]?B.19.3W:"6j";13 h=g.21?a.1k({},1R.2D[g.21]||1R.2D[B.19.3W]):{},i=A(a.1k({},c),h),j=A(a.1k({},i),g);1f(j.2c){13 k=c.2c||{},l=b.2c;"4z"==a.1p(j.2c)&&(j.2c={3X:k.3X||l.3X,1p:k.1p||l.1p}),j.2c=A(a.1k({},l),j.2c)}1f(j.1m&&"2u"==a.1p(j.1m)&&(j.1m={1Q:j.1m,1L:1}),j.1j){13 m,n=c.1j||{},o=b.1j;m="2B"==a.1p(j.1j)?{2w:j.1j,1Q:n.1Q||o.1Q,1L:n.1L||o.1L}:A(a.1k({},o),j.1j),j.1j=0===m.2w?!1:m}1f(j.1n){13 p;p="2B"==a.1p(j.1n)?{2w:j.1n,1e:c.1n&&c.1n.1e||b.1n.1e}:A(a.1k({},b.1n),j.1n),j.1n=0===p.2w?!1:p}13 q,s=s=j.1u&&j.1u.1C||"2u"==a.1p(j.1u)&&j.1u||c.1u&&c.1u.1C||"2u"==a.1p(c.1u)&&c.1u||b.1u&&b.1u.1C||b.1u,t=j.1u&&j.1u.1D||c.1u&&c.1u.1D||b.1u&&b.1u.1D||B.2f.6r(s);1f(j.1u?"2u"==a.1p(j.1u)?q={1C:j.1u,1D:B.2f.7L(j.1u)}:(q={1D:t,1C:s},j.1u.1D&&(q.1D=j.1u.1D),j.1u.1C&&(q.1C=j.1u.1C)):q={1D:t,1C:s},"2N"==j.1C){13 u=r.2J(q.1C);q.1C="1K"==u?q.1C.64(/(15|1O)/,"2v"):q.1C.64(/(17|1S)/,"2v")}j.1u=q;13 v;1f("2N"==j.1C?(v=a.1k({},b.1A),a.1k(v,1R.2D.6p.1A||{}),g.21&&a.1k(v,(1R.2D[g.21]||1R.2D[B.19.3W]).1A||{}),v=B.2f.7M(b.1A,b.1u,q.1C,!0),g.1A&&(v=a.1k(v,g.1A||{})),j.3Y=0):v={x:j.1A.x,y:j.1A.y},j.1A=v,j.1z&&j.7N){13 w=a.1k({},1R.2D.6q[j.7N]),x=A(a.1k({},e),w);1f(x.2t&&a.1w(["6f","6g"],12(b,c){13 f=x.2t[c],g=e.2t&&e.2t[c];1f(f.1m){13 h=g&&g.1m;1f("2B"==a.1p(f.1m))f.1m={1Q:h&&h.1Q||d.2t[c].1m.1Q,1L:f.1m};1G 1f("2u"==a.1p(f.1m)){13 i=h&&"2B"==a.1p(h.1L)&&h.1L||d.2t[c].1m.1L;f.1m={1Q:f.1m,1L:i}}1G f.1m=A(a.1k({},d.2t[c].1m),f.1m)}1f(f.1j){13 j=g&&g.1j;f.1j="2B"==a.1p(f.1j)?{1Q:j&&j.1Q||d.2t[c].1j.1Q,1L:f.1j}:A(a.1k({},d.2t[c].1j),f.1j)}}),x.1s){13 z=e.1s&&e.1s.3G&&e.1s.3G==5B?e.1s:d.1s;x.1s.3G&&x.1s.3G==5B&&(z=A(z,x.1s)),x.1s=z}j.1z=x}1f(j.1s){13 C;C="4z"==a.1p(j.1s)?c.1s&&"4z"==a.1p(c.1s)?b.1s:c.1s?c.1s:b.1s:A(a.1k({},b.1s),j.1s||{}),"2B"==a.1p(C.1A)&&(C.1A={x:C.1A,y:C.1A}),j.1s=C}1f(j.1l){13 D={};D="4z"==a.1p(j.1l)?A({},b.1l):A(A({},b.1l),a.1k({},j.1l)),"2B"==a.1p(D.1A)&&(D.1A={x:D.1A,y:D.1A}),j.1l=D}1f(j.2Z&&("2u"==a.1p(j.2Z)?j.2Z={5o:j.2Z,7O:!0}:"4z"==a.1p(j.2Z)&&(j.2Z=j.2Z?{5o:"51",7O:!0}:!1)),j.25&&"2r-9y"==j.25&&(j.7P=!0,j.25=!1),j.25)1f(a.78(j.25)){13 E=[];a.1w(j.25,12(a,b){E.2n(f(b))}),j.25=E}1G j.25=[f(j.25)];1a j.2L&&"2u"==a.1p(j.2L)&&(j.2L=[""+j.2L]),j.2o=0,j.1N&&(1I.6s||(j.1N=!1)),j}13 b,c,d,e;1a g}()};B.2f=12(){12 c(c){13 d=r.2O(c),e=d[1],f=d[2],g=r.2J(c),h=a.1k({1K:!0,2b:!0},20[1]||{});1a"1K"==g?(h.2b&&(e=b[e]),h.1K&&(f=b[f])):(h.2b&&(f=b[f]),h.1K&&(e=b[e])),e+f}12 f(a){13 d=r.2O(a);1a c(d[1]+b[d[2]])}12 h(b,c){a(b.1i).1q({17:c.17+"2y",15:c.15+"2y"})}12 j(a,b,d,e){13 g=y(a,b,d,e),h=d&&"2u"==7Q d.1p?d.1p:"";1f(/9z$/.3j(h),1===g.3Z.40)1a l(a,g),g;13 m=b,n=e,o={1K:!g.3Z.1K,2b:!g.3Z.2b},p={1K:!1,2b:!1},q=r.2J(b);1a((p.2b="1K"==q&&o.2b)||(p.1K="2b"==q&&o.1K))&&(m=c(b,p),n=c(e,p),g=y(a,m,d,n),1===g.3Z.40)?(l(a,g),g):(g=k(g,a),l(a,g),g)}12 k(a,b){13 c=z(b),d=c.1c,e=c.1e,f=u.1t(b.1g).1o.1u[a.1u.1D].1D.1c,g=a.1e,h={17:0,15:0,3E:[]};1a e.15>g.15&&(h.15=e.15-g.15,h.3E.2n("15"),a.1e.15=e.15),e.17>g.17&&(h.17=g.17-e.17,h.3E.2n("17"),a.1e.17=e.17),e.15+d.14<g.15+f.14&&(h.15=e.15+d.14-(g.15+f.14),h.3E.2n("1O"),a.1e.15=e.15+d.14-f.14),e.17+d.18<g.17+f.18&&(h.17=e.17+d.18-(g.17+f.18),h.3E.2n("1S"),a.1e.17=e.17+d.18-f.18),a.7R=h,a}12 l(a,b){a.5k(b.1u.1D,b.3Z.4m,b.7R),h(a,b.1e)}12 m(a){1a a&&(/^2N|2r|3r$/.3j("2u"==7Q a.1p&&a.1p||"")||a.5K>=0)}12 n(a,b,c){1a a>=b&&c>=a}12 o(a,b,c,d){13 e=n(a,c,d),f=n(b,c,d);1f(e&&f)1a b-a;1f(e&&!f)1a d-a;1f(!e&&f)1a b-c;13 g=n(c,a,b),h=n(d,a,b);1a g&&h?d-c:g&&!h?b-c:!g&&h?d-a:0}12 q(a,b){1a o(a.1e.15,a.1e.15+a.1c.14,b.1e.15,b.1e.15+b.1c.14)*o(a.1e.17,a.1e.17+a.1c.18,b.1e.17,b.1e.17+b.1c.18)}12 s(a,b){13 c=a.1c.14*a.1c.18;1a c?q(a,b)/c:0}12 t(a,b){13 c=r.2O(b),d=r.2J(b),e={15:0,17:0};1f("1K"==d){1T(c[2]){1h"2v":1h"2T":e.15=.5*a.14;1B;1h"1O":e.15=a.14}"1S"==c[1]&&(e.17=a.18)}1G{1T(c[2]){1h"2v":1h"2T":e.17=.5*a.18;1B;1h"1S":e.17=a.18}"1O"==c[1]&&(e.15=a.14)}1a e}12 v(b){13 c=d.1g.4R(b),e=d.1g.4N(b),f={17:a(1I).4O(),15:a(1I).4P()};1a c.15+=-1*(e.15-f.15),c.17+=-1*(e.17-f.17),c}12 y(b,e,f,g){13 h,i,j,k=u.1t(b.1g),l=k.19,n=l.1A,o=m(f);1f(o||!f){1f(j={14:24,18:24},o){13 p=d.5J(f);h={17:p.y-.5*j.18+6,15:p.x-.5*j.14+6}}1G{13 q=b.1o.2x;h={17:(q?q.y:0)-.5*j.18+6,15:(q?q.x:0)-.5*j.14+6}}b.1o.2x={x:h.15,y:h.17}}1G h=v(f),j={14:a(f).7S(),18:a(f).7T()};1f(l.1l&&"2N"!=l.1C){13 y=r.2O(g),A=r.2O(e),C=r.2J(g),D=k.1o.19,E=k.4q().1j.1c,F=D.1n,G=D.1j,H=F&&"1m"==l.1n.1e?F:0,I=F&&"1j"==l.1n.1e?F:F+G,J=G+H+.5*l.1l.14-.5*E.14,K=I>J?I-J:0;4A=1b.1E(G+H+.5*l.1l.14+K+l.1l.1A["1K"==C?"x":"y"]),"1K"==C&&"15"==y[2]&&"15"==A[2]||"1O"==y[2]&&"1O"==A[2]?(j.14-=2*4A,h.15+=4A):("2b"==C&&"17"==y[2]&&"17"==A[2]||"1S"==y[2]&&"1S"==A[2])&&(j.18-=2*4A,h.17+=4A)}i=a.1k({},h);13 L=o?c(l.1u.1D):l.1u.1C,M=t(j,L),N=t(j,g);({17:h.17+M.17+n.y,15:h.15+M.15+n.x}),h={15:h.15+N.15,17:h.17+N.17};13 P=a.1k({},n);P=x(P,L,g,"2N"==k.19.1C),h.17+=P.y,h.15+=P.x;13 k=u.1t(b.1g),Q=k.1o.1u,R=a.1k({},Q[e]),S={x:0,y:0},y=r.2O(g);1f("2v"!=y[2]){13 C=C=r.2J(g),T=B.2f.6r(g,"2b"==C?{1K:!0,2b:!1}:{1K:!1,2b:!0});e==T&&(S.y=k.3F.5i.y,S.x=k.3F.5i.x)}13 U={17:h.17-R.2K.17-S.y,15:h.15-R.2K.15-S.x};R.1D.1e=U;13 V={1K:!0,2b:!0},W={x:0,y:0};1f(b.19.2Z){13 X=z(b),Y=b.19.1s?w.1t(b.1g):k,Z=Y.2p().1D.1c;V.40=s({1c:Z,1e:U},X),V.40<1&&((U.15<X.1e.15||U.15+Z.14>X.1e.15+X.1c.14)&&(V.1K=!1,W.x=U.15<X.1e.15?U.15-X.1e.15:U.15+Z.14-(X.1e.15+X.1c.14)),(U.17<X.1e.17||U.17+Z.18>X.1e.17+X.1c.18)&&(V.2b=!1,W.y=U.17<X.1e.17?U.17-X.1e.17:U.17+Z.18-(X.1e.17+X.1c.18)))}1G V.40=1;V.4m=W;13 $=Q[e].1H,7U=s({1c:j,1e:i},{1c:$.1c,1e:{17:U.17+$.1e.17,15:U.15+$.1e.15}});1a{1e:U,40:{1C:7U},3Z:V,1u:{1D:e,1C:g}}}12 z(b){13 c={17:a(1I).4O(),15:a(1I).4P()},e=b.19,f=e.1C;("2N"==f||"4L"==f)&&(f=b.1g);13 g=a(f).5l(e.2Z.5o).7p()[0];1f(!g||"51"==e.2Z.5o)1a{1c:p.51(),1e:c};13 h=d.1g.4R(g),i=d.1g.4N(g);1a h.15+=-1*(i.15-c.15),h.17+=-1*(i.17-c.17),{1c:{14:a(g).5Y(),18:a(g).5Z()},1e:h}}13 b={15:"1O",1O:"15",17:"1S",1S:"17",2v:"2v",2T:"2T"};e.3o&&e.3o<9||e.4T&&e.4T<2||e.5P&&e.5P<9A;13 x=12(){13 a=[[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]],b={3S:0,3P:0,4c:1,5e:1,3Q:2,3R:2,4d:5,5f:5,4e:8,4f:8,4g:7,5g:7,4h:6,4i:6,4j:3,5h:3};1a 12(c,d,e,f){13 g=a[b[d]],h=a[b[e]],i=[1b.68(.5*1b.2W(g[0]-h[0]))?-1:1,1b.68(.5*1b.2W(g[1]-h[1]))?-1:1];1a r.37(d)||!r.37(e)||f||("1K"==r.2J(e)?i[0]=0:i[1]=0),{x:i[0]*c.x,y:i[1]*c.y}}}();1a{1t:y,4W:j,6r:c,7L:f,7V:v,7M:x,6t:m}}(),B.2f.4Z={x:0,y:0},B.2f.6l=12(a){B.2f.4Z={x:a.5K,y:a.6N}},B.3t=12(){12 b(){a(1x.33).1Z(a(1x.22("2i")).1Y("9B").1Z(a(1x.22("2i")).1Y("3b").1Z(a(11.1i=1x.22("2i")).1Y("7W"))))}12 c(b){1a{14:a(b).5Y(),18:a(b).5Z()}}12 e(b){13 d=c(b),e=b.4Q;1a e&&a(e).1q({14:d.14+"2y"})&&c(b).18>d.18&&d.14++,a(e).1q({14:"65%"}),d}12 f(b,c,e){(!11.1i||11.1i&&!d.1g.4S(11.1i))&&11.1P();13 f=b.19,g=a.1k({1N:!1},20[3]||{});!f.7X&&!d.2k(c)||a(c).1X("7Y")||(f.7X&&"2u"==a.1p(c)&&(b.3c=a("#"+c)[0],c=b.3c),!b.41&&c&&d.1g.4S(c)&&(a(b.3c).1X("7Z",a(b.3c).1q("80")),b.41=1x.22("2i"),a(b.3c).6i(a(b.41).1J())));13 h=1x.22("2i");a(11.1i).1Z(a(h).1Y("7o 9C").1Z(c)),d.2k(c)&&a(c).1W(),f.21&&a(h).1Y("9D"+b.19.21);13 i=a(h).6a("81[4n]").9E(12(){1a!(a(11).3i("18")&&a(11).3i("14"))});1f(i.2a>0&&!b.1F("3H")){b.27("3H",!0),f.1N&&(g.1N||b.1N||(b.1N=b.6u(f.1N)),b.1F("1M")&&(b.1e(),a(b.1i).1W()),b.1N.6v());13 j=0,k=1b.1U(9F,9G*(i.2a||0));b.2j("3H"),b.42("3H",a.1v(12(){i.1w(12(){11.6w=12(){}}),j>=i.2a||(11.5p(b,h),e&&e())},11),k),a.1w(i,a.1v(12(c,d){13 f=2I 9H;f.6w=a.1v(12(){f.6w=12(){};13 c=f.14,g=f.18,k=a(d).3i("14"),l=a(d).3i("18");k&&l||(!k&&l?(c=1b.23(l*c/g),g=l):!l&&k&&(g=1b.23(k*g/c),c=k),a(d).3i({14:c,18:g}),j++),j==i.2a&&(b.2j("3H"),b.1N&&(b.1N.1y(),b.1N=1r),b.1F("1M")&&a(b.1i).1J(),11.5p(b,h),e&&e())},11),f.4n=d.4n},11))}1G 11.5p(b,h),e&&e()}12 g(b,c){13 d=e(c),f={14:d.14-(2P(a(c).1q("2o-15"))||0)-(2P(a(c).1q("2o-1O"))||0),18:d.18-(2P(a(c).1q("2o-17"))||0)-(2P(a(c).1q("2o-1S"))||0)};b.19.3k&&"2B"==a.1p(b.19.3k)&&f.14>b.19.3k&&(a(c).1q({14:b.19.3k+"2y"}),d=e(c)),b.1o.2H=d,a(b.3a).82(c)}1a{1P:b,43:f,5p:g,6c:e}}(),a.1k(C.3I,12(){12 b(a,b,c){11.1o.3e[a]=d.4M(b,c)}12 c(a){1a 11.1o.3e[a]}12 e(a){11.1o.3e[a]&&(1I.6n(11.1o.3e[a]),3J 11.1o.3e[a])}12 f(){a.1w(11.1o.3e,12(a,b){1I.6n(b)}),11.1o.3e=[]}12 g(b,c,d,e){c=c;13 f=a.1v(d,e||11);11.1o.5E.2n({1g:b,83:c,84:f}),a(b).3V(c,f)}12 h(){a.1w(11.1o.5E,12(b,c){a(c.1g).4v(c.83,c.84)})}12 j(a,b){11.1o.2t[a]=b}12 l(a){1a 11.1o.2t[a]}12 m(){11.2E(11.1g,"4p",11.5q),11.2E(11.1g,"5b",a.1v(12(a){11.6x(a)},11)),11.19.2L&&a.1w(11.19.2L,a.1v(12(b,c){13 d=!1;"2r"==c&&(11.19.25&&a.1w(11.19.25,12(a,b){1a"4L"==b.1g&&"2r"==b.2x?(d=!0,!1):3x 0}),11.27("5F",d)),11.2E(11.1g,c,"2r"==c?d?11.35:11.1W:a.1v(12(){11.85()},11))},11)),11.19.25?a.1w(11.19.25,a.1v(12(b,c){13 d;1T(c.1g){1h"4L":1f(11.1F("5F")&&"2r"==c.2x)1a;d=11.1g;1B;1h"1C":d=11.1C}d&&11.2E(d,c.2x,"2r"==c.2x?11.1J:a.1v(12(){11.6y()},11))},11)):11.19.86&&11.19.2L&&!a.6z("2r",11.19.2L)>-1&&11.2E(11.1g,"5b",a.1v(12(){11.2j("1W")},11));13 b=!1;!11.19.9I&&11.19.2L&&((b=a.6z("4x",11.19.2L)>-1)||a.6z("5r",11.19.2L)>-1)&&"2N"==11.1C&&11.2E(11.1g,b?"4x":"5r",12(a){11.1F("4K")&&11.1e(a)})}12 n(){11.2E(11.1i,1R.2A.3r?"5r":"4p",11.5q),11.2E(11.1i,"5b",11.6x),11.2E(11.1i,1R.2A.3r?"5r":"4p",a.1v(12(){11.5s("4B")||11.1W()},11)),11.19.25&&a.1w(11.19.25,a.1v(12(b,c){13 d;1T(c.1g){1h"1D":d=11.1i}d&&11.2E(d,c.2x,c.2x.3g(/^(2r|4x|4p)$/)?11.1J:a.1v(12(){11.6y()},11))},11))}12 o(a,b,c){13 d=u.1t(11.1g);d&&d.5k(a,b,c)}12 p(a){13 b=u.1t(11.1g);b&&b.4o(a)}12 q(){11.4o(11.19.1u.1D)}12 r(){a(11.1i=1x.22("2i")).1Y("3b"),11.87()}12 s(){11.1P();13 a=u.1t(11.1g);a?a.1P():(2I v(11.1g),11.27("4K",!0))}12 t(){11.1F("1P")||(a(1x.33).1Z(a(11.1i).1q({15:"-5t",17:"-5t",2l:11.2l}).1Z(a(11.58=1x.22("2i")).1Y("9J")).1Z(a(11.3a=1x.22("2i")).1Y("7W"))),a(11.1i).1Y("9K"+11.19.21),11.19.7P&&(a(11.1g).1Y("88"),11.2E(1x.6k,"2r",a.1v(12(b){1f(11.1M()){13 c=a(b.1C).5l(".3b, .88")[0];(!c||c&&c!=11.1i&&c!=11.1g)&&11.1J()}},11))),1R.2A.49&&(11.19.4C||11.19.3Y)&&(11.5u(11.19.4C),a(11.1i).1Y("6A")),11.89(),11.27("1P",!0),B.31(11))}12 w(){13 c;11.2G,11.41&&11.3c&&((c=a(11.3c).1X("7Z"))&&a(11.3c).1q({80:c}),a(11.41).6i(11.3c).1y(),11.41=1r)}12 x(){d.46(a.1v(12(){11.8a()},11)),11.8b(),11.6B(),d.46(a.1v(12(){a(11.1i).6a("81[4n]").4v("9L")},11)),u.1y(11.1g),11.1F("1P")&&11.1i&&(a(11.1i).1y(),11.1i=1r);13 c,b="5D";(c=a(11.1g).1X(b))&&a(11.1g).3i("5C",c).8c("5D"),a(11.1g).8c("2s-1V")}12 y(b){13 c=a.1k({4D:11.19.4D,1N:!1},20[1]||{});11.1P(),11.1F("1M")&&a(11.1i).1J(),B.3t.43(11,b,a.1v(12(){13 b=11.1F("1M");b||11.27("1M",!0),11.8d(),b||11.27("1M",!1),11.1F("1M")&&(a(11.1i).1J(),11.1e(),11.5v(),a(11.1i).1W()),11.27("3f",!0),c.4D&&c.4D(11.3a.4E,11.1g),c.4F&&c.4F()},11),{1N:c.1N})}12 z(b){13 c,d={48:11.2G,1p:11.19.2c.1p,1X:11.19.2c.1X||{},8e:11.19.2c.8e||"82"};1f(!(11.1F("2m")||11.19.2c.3X&&11.1F("3f"))){1f(11.19.2c.3X&&(c=i.1t(d)))1a 11.6C(c,{4F:a.1v(12(){11.1F("1M")&&11.19.44&&11.19.44(11.3a.4E,11.1g)},11)}),3x 0;11.27("2m",!0),11.19.1N&&(11.1N?11.1N.6v():(11.1N=11.6u(11.19.1N),11.27("3f",!1)),11.1e(b)),11.1o.2m&&(11.1o.2m.6o(),11.1o.2m=1r),11.1o.2m=a.2c(a.1k({},d,{9M:a.1v(12(b,c,e){0!==e.9N&&(i.4W(d,e.4V),11.6C(e.4V,{4F:a.1v(12(){11.27("2m",!1),11.1F("1M")&&11.19.44&&11.19.44(11.3a.4E,11.1g),11.1N&&(11.1N.1y(),11.1N=1r)},11)}))},11)}))}}12 A(b){13 c=a.1k({1N:11.19.1N&&11.1N},20[1]||{});11.43(b,c)}12 C(){13 b=1x.22("2i");a(b).1X("7Y",!0);13 c=6s.4X(b,a.1k({},20[0]||{})),d=6s.61(b);1a a(b).1q(k(d)),11.43(b,{4D:!1,4F:12(){c.6v()}}),c}12 E(){1f(11.1F("1P")&&!11.19.2l){13 b=B.7I();b&&b!=11&&11.2l<=b.2l&&a(11.1i).1q({2l:11.2l=b.2l+1})}}12 F(){13 a=u.1t(11.1g);a&&(a.2Q(),11.1M()&&11.1e())}12 G(a){1f(1R.2A.49){a=a||0;13 b=11.1i.9O;b.9P=a+"5w",b.9Q=a+"5w",b.9R=a+"5w",b.9S=a+"5w"}}12 H(b){11.2j("1J"),11.2j("4B"),11.1F("1M")||11.5s("1W")||11.42("1W",a.1v(12(){11.2j("1W"),11.1W(b)},11),11.19.86||1)}12 I(b){1f(11.2j("1J"),11.2j("4B"),!11.1M()){1f("12"==a.1p(11.2G)||"12"==a.1p(11.1o.5x)){"12"!=a.1p(11.1o.5x)&&(11.1o.5x=11.2G);13 c=11.1o.5x(11.1g)||!1;1f(c!=11.1o.5G&&(11.1o.5G=c,11.27("3f",!1),11.6B()),11.2G=c,!c)1a}11.19.9T&&B.4Y(),11.27("1M",!0),11.19.2c?11.8f(b):11.1F("3f")||11.43(11.2G),11.1F("4K")&&11.1e(b),11.5v(),11.19.5y&&d.46(a.1v(12(){11.5q()},11)),"12"==a.1p(11.19.44)&&(!11.19.2c||11.19.2c&&11.19.2c.3X&&11.1F("3f"))&&11.19.44(11.3a.4E,11.1g),1R.2A.49&&(11.19.4C||11.19.3Y)&&(11.5u(11.19.4C),a(11.1i).1Y("8g").8h("6A")),a(11.1i).1W()}}12 J(){11.2j("1W"),11.1F("1M")&&(11.27("1M",!1),1R.2A.49&&(11.19.4C||11.19.3Y)?(11.5u(11.19.3Y),a(11.1i).8h("8g").1Y("6A"),11.42("4B",a.1v(11.6D,11),11.19.3Y)):11.6D(),11.1o.2m&&(11.1o.2m.6o(),11.1o.2m=1r,11.27("2m",!1)))}12 K(){11.1F("1P")&&(a(11.1i).1q({15:"-5t",17:"-5t"}),B.7J(),"12"!=a.1p(11.19.8i)||11.1N||11.19.8i(11.3a.4E,11.1g))}12 L(){11.2j("1W"),!11.5s("1J")&&11.1F("1M")&&11.42("1J",a.1v(12(){11.2j("1J"),11.2j("4B"),11.1J()},11),11.19.9U||1)}12 M(a){11[11.1M()?"1J":"1W"](a)}12 N(){1a 11.1F("1M")}12 O(){11.27("4J",!0),11.1F("1M")&&11.5v(),11.19.5y&&11.2j("6E")}12 P(){11.27("4J",!1),11.19.5y&&11.42("6E",a.1v(12(){11.2j("6E"),11.1F("4J")||11.1J()},11),11.19.5y)}13 D=12(b){1f(11.1M()){13 c;1f("2N"==11.19.1C){13 e=B.2f.6t(b),f=B.2f.4Z;1f(e)f.x||f.y?(11.1o.2x={x:f.x,y:f.y},c=1r):c=b;1G{1f(f.x||f.y)11.1o.2x={x:f.x,y:f.y};1G 1f(!11.1o.2x){13 g=B.2f.7V(11.1g);11.1o.2x={x:g.15,y:g.17}}c=1r}}1G c=11.1C;1f(B.2f.4W(11,11.19.1u.1D,c,11.19.1u.1C),b&&B.2f.6t(b)){13 h={14:a(11.1i).7S(),18:a(11.1i).7T()},i=d.5J(b),g=d.1g.4R(11.1i);i.x>=g.15&&i.x<=g.15+h.14&&i.y>=g.17&&i.y<=g.17+h.18&&d.46(a.1v(12(){11.2j("1J")},11))}}};1a{1P:t,6K:r,8d:s,87:m,89:n,1W:I,1J:J,6D:K,35:M,1M:N,85:H,6y:L,5u:G,27:j,1F:l,5q:O,6x:P,5s:c,42:b,2j:e,8b:f,2E:g,8a:h,5k:o,4o:p,9V:q,2Q:F,43:y,8f:z,6C:A,6u:C,1e:D,5v:E,6B:w,1y:x}}()),1R.3s()}(47);',62,616,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this|function|var|width|left||top|height|options|return|Math|dimensions|lineTo|position|if|element|case|container|border|extend|stem|background|radius|_cache|type|css|null|shadow|get|hook|proxy|each|document|remove|closeButton|offset|break|target|tooltip|ceil|getState|else|bubble|window|hide|horizontal|opacity|visible|spinner|right|build|color|Tipped|bottom|switch|max|uid|show|data|addClass|append|arguments|skin|createElement|round||hideOn|arc|setState|for|_hookPosition|length|vertical|ajax||getTooltip|Position|beginPath|closePath|div|clearTimer|isElement|zIndex|xhr|push|padding|getOrderLayout|tooltips|click|tipped|states|string|middle|size|event|px|_globalAlpha|support|number|box|Skins|setEvent|180|content|contentDimensions|new|getOrientation|anchor|showOn|globalAlpha|mouse|split|parseInt|refresh|fillStyle|hex2fill|center|iframeShim|closeButtonShadow|abs|bubbleCanvas|blurs|containment|PI|add|blur|body|scripts|toggle|fill|isCenter|cleanup|cornerOffset|contentElement|t_Tooltip|inlineContent|_stemCorrection|timers|updated|match|canvas|attr|test|maxWidth|shadows|getSkin|_adjustment|IE|indexOf|getContext|touch|init|UpdateQueue|devicePixelRatio|resize|moveTo|void|charAt|toLowerCase|diameter|hookPosition|layout|stemLayout|sides|_corrections|constructor|preloading_images|prototype|delete|getVisible|x1|y1|x2|y2|topleft|topright|righttop|lefttop|math|getLayout|bind|defaultSkin|cache|fadeOut|contained|overlap|inlineMarker|setTimer|update|onShow||defer|jQuery|url|cssTransitions|items|createFillStyle|topmiddle|rightmiddle|rightbottom|bottomright|bottommiddle|bottomleft|leftbottom|leftmiddle|regex|getBorderDimensions|correction|src|setHookPosition|mouseenter|getStemLayout|transition|Stem|closeButtonCanvas|_void|unbind|_onWindowResizeHandler|mousemove|_remove|boolean|sideOffset|fadeTransition|fadeIn|afterUpdate|firstChild|callback|cos|000|startingZIndex|active|skinned|self|delay|cumulativeScrollOffset|scrollTop|scrollLeft|parentNode|cumulativeOffset|isAttached|Gecko|Chrome|responseText|set|create|hideAll|mouseBuffer||viewport|min|G_vmlCanvasManager|getCenterBorderDimensions||substring|skins|skinElement|prepare|order|mouseleave|rotate|borderRadius|topcenter|rightcenter|bottomcenter|leftcenter|corner|corrections|setHookPositionAndStemCorrection|closest|_resizeTimer|_getTooltip|selector|_updateTooltip|setActive|touchmove|getTimer|10000px|setFadeDuration|raise|ms|contentFunction|hideAfter|console|in|Object|title|tipped_restore_title|events|toggles|fnCallContent|call|apply|pointer|pageX|RegExp|parseFloat|Opera|opera|WebKit|required|available|findElement|setDefaultSkin|setStartingZIndex|isVisibleByElement|undefined|clearAjaxCache|innerWidth|innerHeight|getSide|getDimensions|getBubbleLayout|nullifyCornerOffset|replace|100|defaultCloseButton|hoverCloseButton|floor|prepend|find|auto|getMeasureElementDimensions|t_Close|drawCloseButtonState|default|hover|_drawBackgroundPath|before|dark|documentElement|_mouseBufferHandler|getByTooltipElement|clearTimeout|abort|reset|CloseButtons|getInversedPosition|Spinners|isPointerEvent|insertSpinner|play|onload|setIdle|hideDelayed|inArray|t_hidden|_restoreInlineContent|afterAjaxUpdate|_hide|idle|warn|_stemPosition|createOptions|getAttribute|getElementById|_preBuild|Array|concat|pageY|version|AppleWebKit|MobileSafari|check|pow|Za|checked|notified|toUpperCase|param|clear|try|DocumentTouch|catch|TransitionEvent|removeAll|startDelegating|removeDetached|drawRoundedRectangle|fillRect|isArray|Gradient|addColorStops|positions|toOrientation|side|toDimension|isCorner|atan|red|green|blue|360|drawBubble|drawCloseButton|createHookCache|t_ContentContainer|first|25000px|setStemCorrection|setAdjustment|closeButtonShift|closeButtonMouseover|closeButtonMouseout|CloseButton|stemOffset|backgroundRadius|_drawBorderPath|setGlobalAlpha|drawBackground|getBlurOpacity|stopDelegating|touchstart|close|onWindowResize|is|getHighestTooltip|resetZ|base|getTooltipPositionFromTarget|adjustOffsetBasedOnHooks|closeButtonSkin|flip|hideOnClickOutside|typeof|adjustment|outerWidth|outerHeight|_|getAbsoluteOffset|t_Content|inline|isSpinner|tipped_restore_inline_display|display|img|html|eventName|handler|showDelayed|showDelay|createPreBuildObservers|t_hideOnClickOutside|createPostBuildObservers|clearEvents|clearTimers|removeData|_buildSkin|dataType|ajaxUpdate|t_visible|removeClass|onHide|log|sqrt|object|setAttribute|slice|wrap|nodeType|setTimeout|do|while|exec|attachEvent|MSIE|KHTML|rv|Apple|Mobile|Safari|navigator|userAgent|fn|jquery|z_|z0|requires|_t_uid_|ontouchstart|instanceof|WebKitTransitionEvent|OTransitionEvent|createEvent|ready|scale|initElement|drawPixelArray|createLinearGradient|addColorStop|spacing|rgba|join|fff|255|hue||saturation|brightness|0123456789abcdef|hex2rgb|getSaturatedBW|init_|t_Bubble|iframe|t_iframeShim|frameBorder|javascript|15000px|t_CloseButtonShift|lineCap|t_CloseState|translate|stemCorrection|270|lineWidth|sin|setOpacity|getCenterBorderDimensions2|acos|t_Shadow|t_ShadowBubble|t_CloseButtonShadow|999999|undelegate|delegate|preventDefault|stopPropagation|200|getBySelector|outside|move|530|t_UpdateQueue|t_clearfix|t_Content_|filter|8e3|750|Image|fixed|t_Skin|t_Tooltip_|load|success|status|style|MozTransitionDuration|webkitTransitionDuration|OTransitionDuration|transitionDuration|hideOthers|hideDelay|resetHookPosition'.split('|'),0,{}));;
var BLACKLIST = {
    // to update:
    //  create test html file, include Soundninja.js, open browser console, load test html file, copy, paste
    // to test:
    //  change include to .min.js to test blacklist

    // index.html
    "ARMI8BW1187FB57B2E":  true, //0.836532	0.722361	Kiss

    "ARC3EZO1187B9B9314":  true, //0.592699	0.492480	Angels
    "ARJR50M1187FB4F05A":  true, //0.466904	0.453456	Test
    "ARRMZVY12420781231":  true, //0.433939	0.463511	Cotton
    "ARSUCM81187B993875":  true, //0.406798	0.635991	Vic
    "ARNFBYO132D578F55D":  true, //0.400933	0.334329	Australia
    "ARWTNJG1269FCD3F08":  true, //0.394145	0.367751	Again
    "ARGKUUS1187B995AF7":  true, //0.338154	0.495590	Choirboys
    "ARHRVFU1242077F2BE":  true, //0.334362	0.432328	Hill
    "AR8JO7R1187B99AEA8":  true, //0.332386	0.464972	Sentence
    "ARSQOL91187B9A31E0":  true, //0.298738	0.341677	Reserve
    "ARNUZPP11F4C83BF15":  true, //0.272011	0.149311	Wheelers
    "ARAFUZE1412A3175F6":  true, //0.160912	0.127441	Mount

    // ITMtest.html
    //"ARKVITV1187B9AE854":  true, //0.777676	0.826135	Blur
    //"ARDRJSP126E2B3BEF8":  true, //0.671914	0.611634	Spiritualized

    "AR3I6YW1187B990DAA":  true, //0.663842	0.582899	Thursday
    "ARVXD591187FB44199":  true, //0.614304	0.525564	I
    "ARSI6GV1187FB5CC73":  true, //0.606561	0.562689	All
    "ARKJP2A1187FB41672":  true, //0.602167	0.782568	Vaccines
    "AR0TQII1187B98FD27":  true, //0.591045	0.622326	Pond
    "AR5YGS01187FB4FEE8":  true, //0.584647	0.610686	Boy
    "ARE2DJ41187B99083E":  true, //0.562223	0.540735	Live
    "ARANPHH1187B9B33C8":  true, //0.541041	0.598911	Sunday
    "ARP8GB91187B9A45FB":  true, //0.524098	0.501787	April
    "ARUK6A91187B992CCA":  true, //0.513596	0.533870	Midnight
    "ARILYBW11EB3016A0B":  true, //0.510715	0.451644	i
    "AR8FK8V1187FB585AF":  true, //0.503999	0.507709	Friday
    "ARJIG5P1187B98D9DE":  true, //0.503728	0.504159	Fisher
    "ARXJNFW12086C128F9":  true, //0.501093	0.438122	Day
    "ARKIQ6X1187B999742":  true, //0.496412	0.435084	Post
    "ARRDXPV1187FB38A66":  true, //0.466136	0.512678	July
    "ARA7M471187B9A7215":  true, //0.460089	0.467179	Bear
    "ARU6KCR1187B9A07C2":  true, //0.459937	0.510365	Single
    "ARVTPSM12086C1745D":  true, //0.449467	0.446736	Years
    "ARRFTQO138BEC18BC5":  true, //0.445678	0.544454	Harts
    "ARAVJSE1269FCD0199":  true, //0.439399	0.491894	Exclusive
    "ARU6Q641187B98CC0D":  true, //0.437012	0.460087	Catfish
    "AR5F7N11187B98B981":  true, //0.423137	0.424884	Grass

    // MarkRonsonRollingStone.html
    //"ARBEOHF1187B9B044D":  true, //0.842882	0.931803	Madonna
    //"ARZQ7QA1187B9AD08B":  true, //0.826028	0.717129	Prince
    //"AR7J9AP1187FB5BD64":  true, //0.798214	0.900172	Adele
    "ART48CP1187B9AE314":  true, //0.785960	0.669449	Rush
    //"AR1RMYB1187FB5A59E":  true, //0.780933	0.814125	Incubus

    "AR94EZ61187B990729":  true, //0.699016	0.601405	Can
    "ARYWTQI1187B9AE146":  true, //0.687658	0.496120	Rock
    "AR9F8TH1187B9B5A83":  true, //0.653747	0.575206	Love
    "AREH7LP1187B9B7164":  true, //0.641836	0.600050	War
    "ARZ2IJA1187FB53B9F":  true, //0.633028	0.601848	Q
    "ARCI05Y1187B9AE8C0":  true, //0.616905	0.517545	Wow
    "ARVXD591187FB44199":  true, //0.614304	0.525564	I
    "ARN5DWZ1187FB3DE5C":  true, //0.613254	0.566446	Culture
    "ARZF9EA1187FB39378":  true, //0.612949	0.485598	Classic
    "AR3KFM11187FB51278":  true, //0.610223	0.666482	Fear
    "ARSI6GV1187FB5CC73":  true, //0.606561	0.562689	All
    "ARMS69O1187B9AEB9E":  true, //0.606281	0.496485	Everything
    "ARSFRHB1187FB49AD9":  true, //0.606241	0.535011	John
    "AR811DN1187B9A3C04":  true, //0.605200	0.487574	NOW
    "AR3W0BY1187B989FFA":  true, //0.589074	0.534594	Go
    "AR43LAH1187FB50455":  true, //0.581524	0.727765	Perfect
    "ARMRTFD11C8A414957":  true, //0.579841	0.500597	Don
    "ARLDKCN122BCFCBF9C":  true, //0.578829	0.642441	College
    "ARHEYYH11E2835C1F5":  true, //0.571205	0.561707	Songs
    "ARRE7OC1187B9891B6":  true, //0.569912	0.545547	Tim
    "AR3JN3J1187B9A148E":  true, //0.569385	0.456016	Made
    "ARWA06A1187B9AE557":  true, //0.567279	0.570692	Andy
    "ARMTFAI1187B99B09A":  true, //0.564767	0.497746	David
    "ARWPWEE11F4C842D30":  true, //0.564101	0.494244	Radio
    "ART6XAN1187FB41466":  true, //0.562992	0.489828	Why
    "ARE2DJ41187B99083E":  true, //0.562223	0.540735	Live
    "ARTIPMT1187B98CD4A":  true, //0.559156	0.543556	Should
    "ARGV5II1187FB3DE8B":  true, //0.558888	0.475284	Home
    "ARQEPSF12F6AE5B910":  true, //0.557928	0.407390	Punk
    "AR9JADT1187FB3C8AE":  true, //0.554816	0.593745	Change
    "AR7RHXY1187FB598E0":  true, //0.552499	0.554491	South
    "AR1FH021187FB3DB18":  true, //0.551835	0.495849	ADD
    "ARSFKT51187FB4A729":  true, //0.550679	0.509111	Rob
    "ARDS99I1187B98B5AF":  true, //0.550400	0.690865	Video
    "ARVAJYV1257509E2DF":  true, //0.547361	0.383663	Album
    "ARGGQ6T1187B99AB85":  true, //0.546334	0.473265	Lost
    "ARG0I631187FB43881":  true, //0.543070	0.513420	Dreams
    "ARZNG681187B999F28":  true, //0.543026	0.373449	Call
    "ARB0SBS1187FB4AA69":  true, //0.541894	0.577528	Data
    "ARMJ7BA1187B992989":  true, //0.540807	0.438296	Matthew
    "ARG0A7M1187FB46CF2":  true, //0.540547	0.565471	Frank
    "ARSPS801187FB44A22":  true, //0.539763	0.500288	Judge
    "ARUVGBJ1187FB5A02B":  true, //0.538187	0.494812	Contact
    "ARHZCJG1187FB49290":  true, //0.536499	0.483534	Song
    "ARFST161187B9AA427":  true, //0.536212	0.428821	Sex
    "ARMRX211187FB40614":  true, //0.535719	0.401474	Good
    "AR75K361187B9A43CB":  true, //0.533737	0.473843	Ass
    "AR1WKBM1187FB38900":  true, //0.533464	0.563593	Tweet
    "ARVDAGT11F50C50DA4":  true, //0.533245	0.506319	Jimmy
    "ARIOCR01187B9B4248":  true, //0.529791	0.545423	Bizarre
    "ARWCLWT1269FB384FA":  true, //0.528308	0.405332	Country
    "AR9Q9YC1187FB5609B":  true, //0.525271	0.514569	Quest

    // testpage.html
    //"ARDRJSP126E2B3BEF8":  true, //0.671914	0.611634	Spiritualized

    "ARZTLDJ11F50C4CDBA":  true, //0.628374	0.559694	Band
    "AR1FH021187FB3DB18":  true, //0.551835	0.495849	ADD
    "ARZ15SG1187B98D8D2":  true, //0.506074	0.438133	most
    "ARDHUJX12086C15405":  true, //0.489965	0.398808	Did
    "ARP7U1O1187FB4BAE0":  true, //0.488456	0.466941	Please
    "ARSL6ZW1187B989997":  true, //0.487518	0.480160	Concept
    "ARPHHXR1187B98B4AB":  true, //0.469134	0.509416	You
    "ARI1R9J1187B996359":  true, //0.443313	0.477768	What
    "AR5F7N11187B98B981":  true, //0.423137	0.424884	Grass
    "ARUB6PA1187B99C4FD":  true, //0.405850	0.416564	popular
    "ARDYLUJ120AB963910":  true, //0.398348	0.480172	you
    "ARLGBIT1269FB30149":  true, //0.386798	0.293606	Musicians
    "ARONYNO1187FB4352B":  true, //0.385881	0.338472	Try
    "ARHJRSX12420783BD7":  true, //0.339035	0.424987	Special
    "ARH2VA41187B993AF6":  true, //0.309671	0.409247	Uptown
    "ARGMGZV1269FB34568":  true, //0.304935	0.362803	Long
    "AR03PY81187B9894AB":  true, //0.292407	0.397518	High
    "AR1FNK61187B98D87F":  true, //0.276824	0.278586	excerpt
    "ARPNCRJ12AA0D8C1B8":  true, //0.264073	0.343610	hover
    "ARYQQAW1187B9A9847":  true, //0.248184	0.392300	Hover

    // TheFallsMusicandArtsFestival2014.html
    "ARL0XDQ1187FB39B2B":  true, //0.648759	0.542405	J
    "AR8QANH1187B9B9EC7":  true, //0.644683	0.650318	Daniel
    "AR0GF811187B9AD3D6":  true, //0.642704	0.745460	Tycho
    "ARI9CYU1187B9B260E":  true, //0.638645	0.546012	Here
    "ARM1O2C1187FB3F0C6":  true, //0.590000	0.520921	V
    "ARU7LB61187FB4F956":  true, //0.587398	0.499083	Zero
    "AR9I0AS1187FB49FDF":  true, //0.535975	0.563352	Luke
    "ARPC0S71187FB55F22":  true, //0.533723	0.498761	Damien
    "ARFTLTO1187B9A7730":  true, //0.533177	0.410623	Power
    "AR1XQQU1187FB43579":  true, //0.525014	0.518311	Victoria
    "ARJAJ231187B9A7A6F":  true, //0.523808	0.545365	Digital
    "AR4Z92X1187B98F274":  true, //0.510168	0.502117	Mercury
    "ARKXISN1187FB563C7":  true, //0.473297	0.508874	Byron
    "ARPHHXR1187B98B4AB":  true, //0.469134	0.509416	You
    "AR5RYL21187B9A5287":  true, //0.452964	0.418781	Tickets
    "ARPJEQY1187B992C1C":  true, //0.451823	0.422169	Showbiz
    "ARTFTAQ12D5CD7C646":  true, //0.446884	0.417700	Comedy
    "ARLGEQT1242077E23B":  true, //0.439356	0.406987	Harley
    "AR1S9Z41187B989DC6":  true, //0.438627	0.580790	Movement
    "AR6O0KV1187FB4FB81":  true, //0.435231	0.497089	Native
    "ARWABY51187B9AF999":  true, //0.429277	0.501585	Marion
    "ARALRRU12D5CD706D9":  true, //0.411478	0.538149	Falls
    "ARMFZDJ12D5CD7B85D":  true, //0.410143	0.505704	Av
    "ARK4W5W1187B99753D":  true, //0.409053	0.456025	More
    "ARQRPAA120AB961CBB":  true, //0.399687	0.417072	TUBE
    "ARDYLUJ120AB963910":  true, //0.398348	0.480172	you
    "ARKZGLQ1187FB40E63":  true, //0.385597	0.355995	Bay
    "ARAIMLU12AF7DB7716":  true, //0.370881	0.312693	Wales
    "ARS5EW31187FB4149E":  true, //0.369416	0.708416	Tube
    "ARIBYGD12592CDB004":  true, //0.352493	0.410291	Show
    "ARC33S0119B86696BC":  true, //0.346511	0.427180	Jan
    "ARRCZXC139111DE95E":  true, //0.329262	0.412121	Thanks
    "ARRGXNI12AF7D91EE3":  true, //0.306894	0.400026	Dec
    "ARZOLM01187B9A32FF":  true, //0.305545	0.321458	List
    "ARJIPBB12F6F3EFA32":  true, //0.302100	0.385706	Tasmania
    "ARBTEPD11F50C4BBF0":  true, //0.299652	0.344428	Order
    "AREAHUR14384D12582":  true, //0.259250	0.358820	Alphabetical
    "ARUVTYC14678F4A8E8":  true, //0.254263	0.326592	Facebook
    "ARLPUFB12B3B3544E3":  true, //0.241124	0.322451	Carlson
    "ARCKMBU1242077FE67":  true, //0.193950	0.302289	Until
    "ARFPQCU14A6B9279E0":  true, //0.167221	0.011878	Townes
    "ARQTHMR1487F203C3A":  true, //0.078021	0.093010	Buy
};
;
// Start Performance Check
var startPerfCheck = window.performance.now();

var SN = window.SN = window.SN || {};

// Vars
var $doc = $(document),
    body = document.body;

// Config
var itunesAffiliateToken = '1l3vtEs',
    iTunesCountry = 'us',
    userId = '';

// Utilities
var createUniqueId = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}

// Retrieve Stored Data
// TODO: below for extension, SN.storage for <script>
if (window.chrome && chrome.storage && chrome.storage.sync && chrome.storage.sync.get) {
    chrome.storage.sync.get("iTunesCountry", function (data) {
        iTunesCountry = data.hasOwnProperty('iTunesCountry') ? data.iTunesCountry : 'us';
    });

    // TODO: below for extension, SN.storage for <script>
    chrome.storage.sync.get("userId", function (data) {
        if (data.hasOwnProperty('userId')) {
            userId = data.userId;
        } else {
            userId = createUniqueId();
            chrome.storage.sync.set({
                userId: userId
            });
        }
    });
} else
    userId = createUniqueId();

// TODO: nothing for extension, below for <script>
//http://davidwalsh.name/script-tag
var script = document.currentScript || (function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1];
    })();
chrome = window.chrome || {};
chrome.extension = {};
chrome.extension.getURL = function (s) {
    return script.src.replace(/[^/]+$/, "") + s;
};

// Save the location for later
SN.location = $.ajax("https://soundninja-node-js.herokuapp.com/location");

// fail-safe version of HTML5 storage
SN.storage = window.localStorage || {};
// ios safari private browsing
try {
    SN.storage["test"] = 1;
} catch (ignored) {
    SN.storage = {};
}

// Methods
SN.scan = function () {
    var selector = 'body';
    var fullMatch = false;
    var useBlacklist = (typeof USEBLACKLIST !== 'undefined');
    var minHotttnesss = useBlacklist ? 0 : 0; //Jimmy Page 0.59
    var minFamiliarity = useBlacklist ? 0 : 0; //Ghostface Killah 0.64
    if (SoundninjaOpts.selector) {
        selector = SoundninjaOpts.selector;
        fullMatch = typeof(SoundninjaOpts.selectorFullMatch !== 'undefined') ? SoundninjaOpts.selectorFullMatch : true;
        minHotttnesss = 0;
        minFamiliarity = 0;
    }
    if (SoundninjaOpts.hasOwnProperty('minHotttnesss')) { // check this way since minHotttnesss could be 0
        minHotttnesss = SoundninjaOpts.minHotttnesss;
    }
    if (SoundninjaOpts.hasOwnProperty('minFamiliarity')) { // check this way since minFamiliarity could be 0
        minFamiliarity = SoundninjaOpts.minFamiliarity;
    }
    SN.trackEvent('request', 'Extract', 'hotttnesss', minHotttnesss);
    SN.trackEvent('request', 'Extract', 'familiarity', minFamiliarity);

    $('body noscript,body script').remove(); //they should already be processed
    //var text = $(selector).text(); // doesn't add whitespace between selected elements
    var text = "";
    $(selector).each(function (index, element) {
        text += $(element).text() + " ";
    });
    text = text.replace(/\s+/g, ' ');

    var bucket = ["id:spotify", "id:songkick"/*, "artist_location"*/ /*, "terms"*/, "genre"];
    if (!useBlacklist)
        bucket.push("hotttnesss", "familiarity");

    $.ajax({
        //url: "//developer.echonest.com/api/v4/artist/extract",
        url: "//soundninja-node-js.herokuapp.com/extract",
        //url: "http://localhost:5000/extract",
        data: {
            format: "json",
            text: text,
            results: 100,
            // TODO: check SoundninjaOpts for sources
            bucket: bucket,
            min_hotttnesss: minHotttnesss,
            min_familiarity: minFamiliarity,
            sort: "familiarity-desc"
        },
        dataType: "json", // in case jquery couldn't figure it out
        traditional: true, // for bucket instead of bucket[]
        type: "POST", // for large size queries
        success: function (response) {
            var genres;
            ARTISTS = window.ARTISTS || {};
            response = response.response.artists;
            // HACK - replace accented e with regular
            response = response.map(function(x){ x.name = x.name.replace('é', 'e'); return x});

            SN.trackEvent('response', 'Extract', 'artists', response.length);

            var dictionary = {};
            if (!useBlacklist)
                $.ajax(chrome.extension.getURL('words.txt'), {
                    async: false,
                    success: function (words) {
                        words = words.split('\n');
                        for (var w = 0; w < words.length; w++) {
                            var word = words[w];
                            dictionary[word.toLowerCase()] = word;
                        }
                    }
                });

            var spotifyArtistIds = {};
            var newBlacklist = '\n';
            for (var r = 0; r < response.length; r++) {
                var resp = response[r];
                SN.trackEvent('response', 'Extract', resp.id);
                if (!useBlacklist || !BLACKLIST[resp.id]) {
                    if (!useBlacklist && dictionary[resp.name.toLowerCase()])
                        newBlacklist += '"' + resp.id + '":  true, //' + resp.familiarity.toFixed(6) + '\t' + resp.hotttnesss.toFixed(6) + '\t' + resp.name + '\n';

                    if (resp.genres) {
                        genres = resp.genres.map(function (genre) {
                            var name = genre.name;
                            SN.trackEvent('response', 'Extract', name);
                            return name
                        }).slice(0, 2);
                    }
                    var artistObj = {
                        loaded: false,
                        elements: [],
                        genres: genres,
                        name: resp.name
                    };

                    if (resp.foreign_ids)
                        for (var fi = 0; fi < resp.foreign_ids.length; fi++) {
                            var fid = resp.foreign_ids[fi];
                            if (fid.catalog == "spotify") {
                                artistObj.spotifyId = fid.foreign_id.replace("spotify:artist:", "");
                                spotifyArtistIds[artistObj.spotifyId] = artistObj;
                            }
                            if (fid.catalog == "songkick")
                                artistObj.songkickId = fid.foreign_id.replace("songkick:artist:", "");
                        }
                    else
                        console.log("Who is " + resp.name + "?");

                    ARTISTS[resp.name.toLowerCase()] = artistObj;
                }
            }
            if (!useBlacklist)
                console.log(newBlacklist);

            if (spotifyArtistIds) {
                var spotifyIds = Object.keys(spotifyArtistIds);
                for (var i = 0; i < spotifyIds.length; i += 50) {
                    (function (spotifyIds) {
                        // when they login, check if they are following any artists on this page
                        SN.spotifyLogin(false, function (spotifyAccessToken) {
                            $.ajax('https://api.spotify.com/v1/me/following/contains', {
                                data: {
                                    ids: spotifyIds.join(','),
                                    type: 'artist'
                                },
                                headers: {
                                    Authorization: 'Bearer ' + spotifyAccessToken
                                }
                            }).done(function (data) {
                                for (var si = 0; si < spotifyIds.length; si++) {
                                    var spotifyId = spotifyIds[si];
                                    spotifyArtistIds[spotifyId].spotifyFollowing = data[si];
                                    SN.trackEvent('following', 'Spotify', spotifyId, data[si] ? 1 : 0);
                                }
                            });
                        });
                        // get the artist image and number of followers
                        $.ajax('https://api.spotify.com/v1/artists', {
                            data: {
                                ids: spotifyIds.join(',')
                            }
                        }).done(function (data) {
                            for (var a = 0; a < data.artists.length; a++) {
                                var artist = data.artists[a];
                                if (artist.images && artist.images.length)
                                    spotifyArtistIds[artist.id].image = artist.images[artist.images.length - 1].url;
                                var spotifyFollowers = artist.followers.total;
                                SN.trackEvent('followers', 'Spotify', 'count', spotifyFollowers);
                                var suffix = '';
                                if (spotifyFollowers >= 1000) {
                                    var round = 100;
                                    if (spotifyFollowers >= 10000)
                                        round = 1000;
                                    spotifyFollowers = Math.round(spotifyFollowers / round) * round / 1000;
                                    suffix = 'k';
                                    if (spotifyFollowers >= 1000) {
                                        var round = 100;
                                        if (spotifyFollowers >= 10000)
                                            round = 1000;
                                        spotifyFollowers = Math.round(spotifyFollowers / round) * round / 1000;
                                        suffix = 'm';
                                    }
                                }
                                spotifyFollowers = spotifyFollowers.toString() + suffix;
                                spotifyArtistIds[artist.id].spotifyFollowers = spotifyFollowers;
                            }
                        });
                    })(spotifyIds.slice(i, i + 50))
                }
            }

            var artists = Object.keys(ARTISTS).map(function (name) {
                return ARTISTS[name].name
            });
            console.log(artists.length + " artists loaded");
            artists.sort(function (a, b) {
                return b.length - a.length;
            });

            var $preHighlight = $('.sn-match');
            var remaining = 0;

            function highlight(artists, caseSensitive) {
                setTimeout(function () {
                    $(selector).highlight(artists, {
                        caseSensitive: caseSensitive,
                        className: 'sn-match',
                        wordsOnly: true,
                        fullMatch: fullMatch
                    });
                    --remaining;
                    if (remaining == 0) {
//                            $('head').append('<script src="https://use.fonticons.com/f1772722.js"></script>');
                        $('.sn-match').not($preHighlight).each(function (index, element) {
                            var $element = $(element);
                            var $beforeNote = $(element.parentNode).closest('a');
                            var pageArtist = $element.text();
                            var artist = ARTISTS[pageArtist.toLowerCase()].name;
                            $element.data('soundninja-artist', artist);
                            if ($beforeNote.length == 0 || $beforeNote.text() != pageArtist)
                                $beforeNote = $element;
                            $beforeNote.after(' <svg class="SN-icon icon" viewBox="0 0 100 100" data-soundninja-artist="' + artist + '"><use xlink:href="#icon-hear" /></svg>');
//                            $beforeNote.after(' <i class="icon icon-headphones fa-soundninja" data-soundninja-artist="' + artist + '"></i>');
                            SN.trackEvent('appearance', 'Page content', artist);
                        });
                        $doc.trigger('sn-scan-complete');
                    }
                }, 0);
                ++remaining;
            }

            highlight($.grep(artists, function (name) {
                return !/ /.test(name); // single-word artist names
            }), true);
            highlight($.grep(artists, function (name) {
                return / /.test(name); // multi-word artist names
            }), true);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.warn(jqXHR);
            console.warn(textStatus);
            console.warn(errorThrown);
        }
    });
};

SN.setupTooltips = function () {
    var artistsFound = false;
    $('.sn-match, i.fa-soundninja').each(function () {
        var soundninjaArtist = $(this).data('soundninja-artist');
        if (soundninjaArtist) {
            var artistName = soundninjaArtist.toString().toLowerCase(); // for toString for artists like 10 or 311
            ARTISTS[artistName].elements.push(this);
            if (!ARTISTS[artistName].loaded) {
                if (SoundninjaOpts.preview == "iTunes")
                    SN.fetchItunesContent(artistName);
                else if (ARTISTS[artistName].spotifyId)
                    SN.fetchSpotifyContent(artistName, ARTISTS[artistName].spotifyId);
                if (SoundninjaOpts.events == "SeatGeek")
                    SN.fetchSeatGeekContent(artistName);
                else if (ARTISTS[artistName].songkickId)
                    SN.fetchSongkickContent(artistName);
                //} else {
                //    // might be a new element of an already fetched artist
                //    SN.addContentToTooltip(undefined, artistName);
            }
            ARTISTS[artistName].loaded = true;
            artistsFound = true;
        }
    });

    // End Performance Check
    var endPerfCheck = window.performance.now();
    var perfTime = endPerfCheck - startPerfCheck;

    if (artistsFound === true) {
        //MP.mixpanel.track("SoundNinja Loaded", {
        //	"Load Time" : perfTime
        //});
    }
};

SN.addContentToTooltip = function (event, artistName) {
    var options;
    var hideOn;
    var elements = ARTISTS[artistName].elements;
    if (ARTISTS[artistName].tip) {
        ARTISTS[artistName].tip.refresh();
    } else {
        hideOn = typeof HIDEON !== 'undefined';
        options = {
            //position: 'bottom', // tipped 4
            hook: 'topmiddle', // tipped 3

            target: 'mouse', fixed: true,
            //behavior: 'sticky', // tipped 4
            //target: 'element', // tipped 4
            //target: 'self', //tipped 3

            maxWidth: 400,
            //padding: false, // tipped 4
            //containment: { padding: -30 }, // padding is tipped 4
            //close: true, // tipped 4
//            closeButton: true, // tipped 3

            spinner: {
                radius: 7,
                height: 1,
                width: 2.5,
                dashes: 30,
                opacity: 1,
                padding: 10,
                rotation: 700,
                color: '#fff'
            },
            onShow: function (content, element) { // only in Tipped pro?
                var artist = $(element).data('soundninja-artist');
                SN.trackEvent('hover', 'Artist Name', artist);
                //MP.mixpanel.track("SoundNinja Triggered", {
                //	"Artist Name" :  artist
                //});
            }

        };
        if (!hideOn)
            $.extend(options, {hideOn: false, hideOthers: true});
        ARTISTS[artistName].tip = Tipped.create(elements, function () {
            return SN.createTooltip(artistName);
        }, options);
        $('.sn-match').addClass('is-active');
    }
};

SN.createTooltip = function (artistName) {
    var genres = ARTISTS[artistName].genres;
    var tracks = ARTISTS[artistName].tracks;
    var seatGeekContent = ARTISTS[artistName].seatGeekContent;
    var events = ARTISTS[artistName].events;
    var eventsUrl = ARTISTS[artistName].eventsCalendar;
    var spotifyID = ARTISTS[artistName].spotifyId;
    var spotifyFollowing = ARTISTS[artistName].spotifyFollowing;
    var image = ARTISTS[artistName].image;
    var followers = ARTISTS[artistName].spotifyFollowers;
    var name = ARTISTS[artistName].name;

    var content = '<div class="Tip">';
    if (spotifyID) {
        var disabled = spotifyFollowing ? 'disabled' : '';
        var text = spotifyFollowing ? 'Following' : 'Follow';
        content += '<div class="spotify-div spotify-theme-dark">';
        //        content += '<a class="closeBtn" id="snTipClose"><i class="icon icon-times></i></a>'; // TODO: make this close the tip
        if (image) {
            content += '    <a target="_spotify" href="https://open.spotify.com/artist/' + spotifyID + '" target="spotify">'; // TODO: url
            content += '       <div class="spotify-img" width="50px" height="50px" style="background-image:url(\'' + image + '\')"></div>';
            content += '        </a>';
        }
        content += '    <div class="spotify-bd">';
        content += '        <div class="title"><a href="https://open.spotify.com/artist/' + spotifyID + '" target="spotify">' + name + '</a></div>'; // TODO: url
        content += '        <button ' + disabled + ' class="SN-spotify-button SN-spotify-login" data-follow="' + spotifyID + '" title="Follow on Spotify">';
        content += '            <span class="spotify-bt-icon"></span>';
        content += '            <span class="spotify-bt-text">' + text + '</span>';
        content += '        </button>';
        if (followers)
            content += '                    <div class="spotify-count"><div class="spotify-count-num spotify-front">' + followers + '</div></div>';
        content += '            </div>';
        content += '    </div>';
    } else {
        content += '<a href="http://getsoundninja.com" target="_blank"><img class="Logo" width="63" src="' + chrome.extension.getURL('images/sn-logo-white.png') + '"></a>';
        content += '<h3 class="Artist">' + name + '</h3>';
        if (genres) {
            content += '<ul class="Genres">';
            for (var g = 0; g < genres.length; g++) {
                var genre = genres[g];
                content += '<li>' + genre + '</li>';
            }
            content += '</ul>';
        }
    }

    if (tracks) {
        // Template for tooltip
        var tracksHTML = '';
        var length = Math.min(5, tracks.length);
        for (var i = 0; i < length; i++) {
            tracksHTML += SN.formatTrack(artistName, (i + length - 1) % length, i, (i + 1) % length);
        }
        SN.trackEvent('tracks', 'Preview Source', 'count', tracks.length);

        content += '<ul class="Tracks">';
        content += tracksHTML;
        content += '</ul>';
    }

    if (seatGeekContent) {
        content += '<p class="upcomingEvents">Playing nearest you</p>';
        content += '<ul class="Events">';
        content += seatGeekContent;
        content += '</ul>';
    }

    if (events) {
        // Template for tooltip
        var eventsHTML = '';
        for (var e = 0; e < events.length; e++) {
            eventsHTML += SN.formatEvent(events[e], artistName);
            break; // only show one event
        }
        SN.trackEvent('events', 'Events', 'count', events.length);
        for (var e = 0; e < events.length; e++) {
            SN.trackEvent('events', 'Events', 'distance', events[e].distance);
        }

        content += '<div class="Playing-near-you">';
        content += '<span class="nearYouText">Playing near you</span>';
        content += '<span class="Full-schedule"><a href="' + eventsUrl + '" target="_blank"><i class="icon icon-calendar"></i> Full schedule</a></span>';
        content += '</div>';
        content += '<ul class="Events">';
        content += eventsHTML;
        content += '</ul>';
    } else {
        content += '<div class="Playing-near-you">';
        content += '<span class="nearYouText">Playing near you</span>';
        content += '<span class="Full-schedule"><a href="' + eventsUrl + '" target="_blank"><i class="icon icon-calendar"></i> Full schedule</a></span>';
        content += '<div class="gimme5">';
        content += '<span class="artistName">' + name + '</span> is currently not on tour. Check the <a href="' + eventsUrl + '" target="_blank">full schedule</a> to find out about future concerts.';
        content += '</div>';
        content += '</div>';
    }

    content += '<div class="sk-bt">';
    content += '<img class="skLogo">';
    content += '</div>';
    content += '</div>';
    return content;
};

SN.formatItunesContent = function (data, artistName) {
    var results = [],
        collectionViewUrl = '';
    for (var i = 0; i < data.resultCount; i++) {
        results.push({
            trackId: data.results[i].trackId,
            artistName: data.results[i].artistName,
            artworkUrl: data.results[i].artworkUrl100,
            trackName: data.results[i].trackName,
            trackViewUrl: data.results[i].trackViewUrl + '&at=' + itunesAffiliateToken + '&mt=8',
            previewUrl: data.results[i].previewUrl,
            collectionViewUrl: data.results[i].collectionViewUrl
        });
        collectionViewUrl = data.results[0].collectionViewUrl;
    }
    ;

    ARTISTS[artistName].tracks = results;
    $doc.trigger('format-tracks-content-complete', artistName);
}

SN.formatSpotifyContent = function (data, artistName) {
    var results = [];
    var spotifyTrackIds = {};
    for (var i = 0; i < data.tracks.length; i++) {

        var dataTrack = data.tracks[i];
        var track = {
            trackId: dataTrack.id,
            artistName: dataTrack.artists[0].name,
            trackName: dataTrack.name,
            trackViewUrl: dataTrack.external_urls.spotify,
            previewUrl: dataTrack.preview_url,
            spotifyId: dataTrack.id
        };
        if (dataTrack.album.images && dataTrack.album.images.length)
            track.artworkUrl = dataTrack.album.images.slice(-1)[0].url; // assume the last images is 64x64
        results.push(track);
        spotifyTrackIds[track.spotifyId] = track;
    }

    ARTISTS[artistName].tracks = results;

    if (spotifyTrackIds) {
        SN.spotifyLogin(false, function (spotifyAccessToken) {
            var spotifyIds = Object.keys(spotifyTrackIds);
            $.ajax('https://api.spotify.com/v1/me/tracks/contains', {
                data: {
                    ids: spotifyIds.join(',')
                },
                headers: {
                    Authorization: 'Bearer ' + spotifyAccessToken
                }
            }).done(function (data) {
                for (var si = 0; si < spotifyIds.length; si++) {
                    var spotifyId = spotifyIds[si];
                    if (spotifyTrackIds[spotifyId].spotifyAdded = data[si])
                        $('[data-track-add-spotify=' + spotifyId + ']').addClass("added");
                }
            });
        });
    }

    $doc.trigger('format-tracks-content-complete', artistName);
};

// override for crappy safari
SN.toNumericDayShortMonth = function (date) {
    var MONTHS = ['Jan', 'Feb', 'Mar', ' Apr', ' May', ' Jun', ' Jul', ' Aug', ' Sep', ' Oct', ' Nov', ' Dec'];
    return MONTHS[date.getMonth()] + ' ' + date.getDate();
};
try {
    new Date().toLocaleDateString('i');
} catch (e) {
    if (e.name === 'RangeError')
        SN.toNumericDayShortMonth = function (date) {
            return date.toLocaleDateString([], {
                month: 'short',
                day: 'numeric'
            })
        }
}


SN.formatSongkickContent = function (data, artistName) {
    data = data.resultsPage;
    if (data.totalEntries >= 50) {
        console.warn("we should get more pages from songkick for " + artistName);
    }
    data = data.results.event; //results only has one property, despite the plural.  event is an array, despite the singular.
    if (data) { // if the artist is on tour
        ARTISTS[artistName].events = [];
        for (var e = 0; e < data.length; e++) {
            var event = data[e];
            var event2 = {};
            var date = new Date(event.start.date);
            event2.date = SN.toNumericDayShortMonth(date);
            event2.title = event.displayName.replace(/ \([^)]*\)$/, ""); // removes the "(date)"
            event2.city = event.venue.metroArea.displayName;
            var state = event.venue.metroArea.state;
            var country = event.venue.metroArea.country.displayName;
            event2.province = state ? state.displayName + ", " + country : country;
            event2.url = event.uri;
            event2.location = event.location; // for calculating distance
            ARTISTS[artistName].events.push(event2);
        }

        SN.location.done(function (locationData) {
            function distance2(lat1, lon1, lat2, lon2) {
                var R = 6371000; // metres
                var φ1 = lat1 * Math.PI / 180;
                var φ2 = lat2 * Math.PI / 180;
                var Δφ = (lat2 - lat1) * Math.PI / 180;
                var Δλ = (lon2 - lon1) * Math.PI / 180;

                var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                var d = R * c;
                return d;
            }

            for (var e = 0; e < ARTISTS[artistName].events.length; e++) {
                var event = ARTISTS[artistName].events[e];
                event.distance = distance2(locationData.location.latitude, locationData.location.longitude,
                    event.location.lat, event.location.lng);
            }

            ARTISTS[artistName].events.sort(function (a, b) {
                return a.distance - b.distance;
            });
        });
    }

    $doc.trigger('format-events-content-complete', artistName);
};

SN.fetchItunesContent = function (artistName) {
    var iTunesArtistName = artistName.replace(' ', '+').trim(),
        results = '';

    $.ajax({
        url: 'https://itunes.apple.com/search',
        type: 'GET',
        // TODO: use 'json' in extension, 'jsonp' in <script>
        dataType: 'jsonp',
        cache: true,
        data: {
            term: iTunesArtistName,
            limit: 5,
            entity: 'musicTrack',
            sort: 'recent',
            country: iTunesCountry
        }
    }).done(function (data) {
        SN.formatItunesContent(data, artistName);
    }).fail(function (error) {
        ARTISTS[artistName].loaded = false;
    });
}

SN.fetchSpotifyContent = function (artistName, spotifyId) {
    $.ajax({
        url: 'https://api.spotify.com/v1/artists/' + spotifyId + '/top-tracks',
        type: 'GET',
        dataType: 'json',
        cache: true,
        data: {
            country: iTunesCountry
        }
    }).done(function (data) {
        SN.formatSpotifyContent(data, artistName);
    }).fail(function (error) {
        ARTISTS[artistName].loaded = false;
    });
}

SN.fetchSeatGeekContent = function (artistName) {
    $.ajax("http://api.seatgeek.com/2/events", {
        data: {
            q: artistName
        }
    }).done(function (data) {
        var eventsByDistance = {};
        var remaining = 0;

        function handleAllEvents(remaining) {
            if (remaining == 0) {
                var distances = Object.keys(eventsByDistance);
                var content = "";

                distances.sort(function (a, b) {
                    return a - b;
                });
                for (var d = 0; d < distances.length; d++) {
                    var distance = distances[d];
                    var events = eventsByDistance[distance];

                    content += "<li>" + artistName + " is performing " + distance / 1000 + " km away</li>";
                    for (var e = 0; e < events.length; e++) {
                        var event = events[e];

                        $.each(event, function (key, value) {
                            content += '<li class="' + key + '">' + JSON.stringify(value) + '</li>';
                        });
                    }
                }

                ARTISTS[artistName].seatGeekContent = content;
                $doc.trigger('format-seatgeek-content-complete', artistName);
            }
        }

        function handlePosition(event) {
            var eventLocation = event.venue.location;
            var lat1 = eventLocation.lat,
                lon1 = eventLocation.lon;
            return function (position) {
                var lat2 = position.coords.latitude,
                    lon2 = position.coords.longitude;

                var R = 6371000; // metres
                var φ1 = lat1 * Math.PI / 180;
                var φ2 = lat2 * Math.PI / 180;
                var Δφ = (lat2 - lat1) * Math.PI / 180;
                var Δλ = (lon2 - lon1) * Math.PI / 180;

                var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                var d = R * c;
                event.distance = d;

                eventsByDistance[d] = eventsByDistance[d] || [];
                eventsByDistance[d].push(event);

                --remaining;
                handleAllEvents(remaining);
            }
        }

        function handleError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.log("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    console.log("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.log("An unknown error occurred.");
                    break;
            }

            eventsByDistance[0] = eventsByDistance[0] || [];
            eventsByDistance[0].push(event);

            --remaining;
            handleAllEvents(remaining);
        }

        for (var e = 0; e < data.events.length; e++) {
            var event = data.events[e];
            if (navigator.geolocation) {
                ++remaining;
                navigator.geolocation.getCurrentPosition(handlePosition(event), handleError);
            }
        }
    });
};

SN.fetchSongkickContent = function (artistName) {
    var songkickId = ARTISTS[artistName].songkickId;
    ARTISTS[artistName].eventsCalendar = 'http://www.songkick.com/artists/' + songkickId + '/calendar';
    $.ajax("//soundninja-node-js.herokuapp.com/calendar", {
        data: {
            songkickId: songkickId,
            per_page: 50
        }
    }).done(function (data) {
        SN.formatSongkickContent(data, artistName);
    });
};

SN.formatTrack = function (artistName, prevTrackIndex, trackIndex, nextTrackIndex) {
    var track = ARTISTS[artistName].tracks[trackIndex];

    // Context object for the Handlebars template.
    var context = {
        artistName: artistName,
        prevTrackIndex: prevTrackIndex,
        trackIndex: trackIndex,
        nextTrackIndex: nextTrackIndex,
        track: track,
    };

    return SN.templates.track(context);
}

SN.formatEvent = function (event, artistName) {

    // Context object for the Handlebars template.
    var context = {
        event: event,
        artistName: artistName,
        threshold: 1000000
    };

    return SN.templates.event(context);
};

SN.spotifyCallbacks = [];

/**
 * @param now if true, will login if not already logged in.  otherwise, will queue callback for later login
 * @param callback executed after successful login
 */
SN.spotifyLogin = function (now, callback) {
    if (SN.storage.spotifyAccessToken && new Date().getTime() < SN.storage.spotifyExpires) {
        if (now)
            SN.trackEvent('login', 'Spotify', 'already authorized');
        callback(SN.storage.spotifyAccessToken);
    } else {
        SN.spotifyCallbacks.push(callback);
        if (now) {
            if (SN.storage.spotifyAccessToken)
                SN.trackEvent('login', 'Spotify', 're-authorization attempt');
            else
                SN.trackEvent('login', 'Spotify', 'authorization attempt');
            var state = Math.random();
            var location = chrome.extension.getURL("thanks.html");
            var path = 'https://accounts.spotify.com/authorize?';
            path += 'client_id=9d6d07b8a0c04c83b53fcd21efa0207c&';
            path += 'response_type=token&';
            path += 'redirect_uri=' + location + '&';
            path += 'state=' + state + '&';
            path += 'scope=user-follow-modify user-follow-read user-library-read user-library-modify user-read-private playlist-read-private playlist-modify-public playlist-modify-private';
            var name = 'SoundninjaSpotify';
            var options = 'menubar=no,status=yes,width=480,height=680';
            var oauthWindow = window.open(path, name, options);
            var oauthInterval = window.setInterval(function () {
                if (oauthWindow.closed) {
                    SN.trackEvent('login', 'Spotify', 'cancelled');
                    window.clearInterval(oauthInterval);
                } else if (oauthWindow.location.href.indexOf(location) == 0) {
                    var hash = oauthWindow.location.hash;
                    var search = oauthWindow.location.search;

                    window.clearInterval(oauthInterval);
                    oauthWindow.close();

                    var useHash = hash.indexOf(state) >= 0;
                    var useSearch = search.indexOf(state) >= 0;

                    if (useHash || useSearch) { // should be always true
                        function queryToMap(query) {
                            var q = {};
                            query.split('&').forEach(function (nv) {
                                nv = nv.split('=');
                                q[nv[0]] = nv[1];
                            });
                            return q;
                        }

                        if (useSearch) {
                            SN.trackEvent('login', 'Spotify', 'unauthorized');
                            // TODO: get error from query string and do something with it
                        }
                        if (useHash) {
                            SN.trackEvent('login', 'Spotify', 'authorized');
                            hash = queryToMap(hash.substr(1));
                            SN.storage.spotifyAccessToken = hash.access_token;
                            SN.storage.spotifyExpires = new Date().getTime();
                            SN.storage.spotifyExpires = parseInt(SN.storage.spotifyExpires) + parseInt(hash.expires_in) * 1000;
                            while (callback = SN.spotifyCallbacks.shift())
                                callback(SN.storage.spotifyAccessToken);
                        }
                    }
                }
            }, 5000);
        }
    }
};

SN.spotifyProfile = function (callback) {
    SN.spotifyLogin(true, function (spotifyAccessToken) {
        if (SN.storage.spotifyUserId)
            callback(spotifyAccessToken, SN.storage.spotifyUserId);
        else {
            $.ajax('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: 'Bearer ' + spotifyAccessToken
                }
            }).done(function (data) {
                SN.storage.spotifyUserId = data.id;
                SN.trackEvent('country', 'Spotify', data.country);
                SN.trackEvent('user', 'Spotify', 'followers', data.followers.total);
                SN.trackEvent('id', 'Spotify', data.id);
                SN.trackEvent('product', 'Spotify', data.product);
                callback(spotifyAccessToken, SN.storage.spotifyUserId);
            });
        }
    });
};

SN.resetPlayerExtension = function () {
    var $extension = $('.SN-player-extension').css('overflow-y', ''); // do this first or it messes with the transition
    $extension.animate({
        scrollTop: 0
    });
    $extension.children().css('left', '');
};

SN.spotifyPlaylistAddTrack = function (spotifyUserId, id, uri, spotifyAccessToken) {
    $.ajax('https://api.spotify.com/v1/users/' + spotifyUserId + '/playlists/' + id + '/tracks?uris=' + uri, {
        headers: {
            Authorization: 'Bearer ' + spotifyAccessToken
        },
        method: 'POST', type: 'POST'
    }).done(function (data) {
        SN.trackEvent('alter', 'Spotify', 'add track to playlist');
        SN.resetPlayerExtension();
        $('.SN-player-toggle-extension').trigger('click');
    });
};

SN.addPlayer = function () {
    //get svgs
    $.get(chrome.extension.getURL('images/svgdefs.svg'), function (data) {
        var div = document.createElement("div");
        div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
        document.body.insertBefore(div, document.body.childNodes[0]);
    });
           
    // Template to add to DOM
    var player = SN.templates.player();

    // Add to Dom
    $('body').append(player);

    var currentArtist;
    var prevTrackIndex;
    var nextTrackIndex;

    // Setup events
    $doc.on('click', '[data-track-preview]', playTrack);

    $('#snTrackPlayer').on('ended', function (e) {
        SN.trackEvent('track', 'Player', 'ended');
        var element = $('[data-artist-name="' + currentArtist + '"][data-track-preview="' + nextTrackIndex + '"]').get(0);
        playTrack.call(element, e);
    });

    function playTrack(e) {
        SN.trackEvent('track', 'Player', 'started');
        currentArtist = this.getAttribute('data-artist-name');
        prevTrackIndex = this.getAttribute('data-prev-track-preview');
        nextTrackIndex = this.getAttribute('data-next-track-preview');
        var trackIndex = this.getAttribute('data-track-preview'),
            track = ARTISTS[currentArtist].tracks[trackIndex],
            previewUrl = track.previewUrl;
        SN.addContentToPlayer(track);
        SN.playTrack(previewUrl, e);
    }

    $doc.on('click', '[data-track-add-spotify]', function (e) {
        var self = this;
        SN.spotifyLogin(true, function (spotifyAccessToken) {
            var spotifyId = self.getAttribute('data-track-add-spotify');
            $.ajax("https://api.spotify.com/v1/me/tracks?ids=" + spotifyId, {
                //data: {ids: spotifyId}, // spotify won't accept this in the body, but require a put
                headers: {
                    Authorization: 'Bearer ' + spotifyAccessToken
                },
                method: 'PUT', type: 'PUT',
                dataType: 'text' // spotify returns 200 OK with no content (rather than 204 NO CONTENT)
            }).done(function (data) {
                // assume it worked
                SN.trackEvent('alter', 'Spotify', 'add track to library');
                $('[data-track-add-spotify=' + spotifyId + ']').addClass("added");
            });
        })
    });

    $doc.on('click', '#snPlayerClose', function (e) {
        SN.trackEvent('player', 'Player', 'closed');
        SN.togglePlayer('hide');
        $('.SN-player-extension').css('height', 0);
        $('.SN-player-extension').removeClass('active');
        var player = document.getElementById('snTrackPlayer');
        player.pause();
        player.currentTime = 0; // this doesn't work on jayen's computer.  presumably because the audio tag doesn't work.
    });

    $doc.on('click', '.SN-player-prev', function (e) {
        SN.trackEvent('track', 'Player', 'prev');
        var element = $('[data-artist-name="' + currentArtist + '"][data-track-preview="' + prevTrackIndex + '"]').get(0);
        playTrack.call(element, e);
        $('.SN-player-play').trigger('click');
    });

    $doc.on('click', '.SN-player-play', function (e) {
        SN.trackEvent('track', 'Player', 'play');
        var player = document.getElementById('snTrackPlayer');
        player.play();
        $(this).hide();
        $('.SN-player-pause').show();
    });

    $doc.on('click', '.SN-player-pause', function (e) {
        SN.trackEvent('track', 'Player', 'pause');
        var player = document.getElementById('snTrackPlayer');
        player.pause();
        $(this).hide();
        $('.SN-player-play').show();
    });

    $doc.on('click', '.SN-player-next', function (e) {
        SN.trackEvent('track', 'Player', 'next');
        $('#snTrackPlayer').trigger('ended');
        $('.SN-player-play').trigger('click');
    });

    $doc.on('click', '#snTipClose', function (e) {
        SN.trackEvent('click', 'Tooltip', 'close');
        $(".t_Tooltip").hide(); //TODO: make this work properly
    });

    $doc.on('click', '[data-purchase-link]', function (e) {
        var $snPlayerData = $('#snPlayer').data(),
            eventData = $snPlayerData.artistName + ' - ' + $snPlayerData.trackName,
            purchaeLinkID = e.currentTarget.getAttribute('data-purchase-link');
        SN.trackEvent('click', 'Player', 'purchase');
        //MP.mixpanel.track("Purchase Link Button Clicked", {
        //	"Artist Name"      : $snPlayerData.artistName,
        //	"Track Name"       : $snPlayerData.trackName,
        //	"Purchase Link ID" : purchaeLinkID
        //});
    });

    $doc.on('click', '.SN-spotify-login', function (e) {
        SN.spotifyLogin(true, function (spotifyAccessToken) {
            var $target = $(e.currentTarget);
            var spotifyId = $target.data('follow');
            if (spotifyId)
                $.ajax('https://api.spotify.com/v1/me/following?ids=' + spotifyId + '&type=artist', {
                    //data: {ids: spotifyId, type: 'artist'}, // spotify won't accept this in the body, but require a put
                    headers: {
                        Authorization: 'Bearer ' + spotifyAccessToken
                    },
                    method: 'PUT', type: 'PUT'
                }).done(function (data) {
                    // assume it worked
                    SN.trackEvent('alter', 'Spotify', 'follow artist');
                    $target.children('.spotify-bt-text').text('Following');
                });
        });
    });

    $doc.on('click', '.SN-player-toggle-extension', function (e) {
        var $player = $('#snPlayer');
        var $extension = $('.SN-player-extension');
        //var oldHeight = $extension.css('height'); // includes padding.  wtf???
        var oldHeight = $extension.height();
        var newHeight = 0;
        var bottom = $player.outerHeight();
        var width = $player.width();
        if (oldHeight == 0 || oldHeight == "0px") {
            SN.trackEvent('click', 'Player', 'open extension');
            newHeight = $extension.children(':first').height();
            $('.SN-player-extension').addClass('active');
            $('.SN-player-toggle-extension').addClass('active');
        } else {
            SN.trackEvent('click', 'Player', 'close extension');
            $('.SN-player-extension').removeClass('active');
            $('.SN-player-toggle-extension').removeClass('active');
        }
        $extension.css({
            height: newHeight,
            bottom: bottom - 4,
            width: width
        });
    });

    $doc.on('click', '.SN-player-select-action', function (e) {
        SN.trackEvent('click', 'Player', 'copy url');
        var target = $(this).hide().data('for');
        $(target).show().each(function () {
            this.select();
        });
    });

    $doc.on('click', '.SN-player-spotify-add', function (e) {
        var uri = 'spotify:track:' + $("#snPlayer").find("[data-track-add-spotify]").attr('data-track-add-spotify');
        SN.spotifyProfile(function (spotifyAccessToken, spotifyUserId) {
            $.ajax('https://api.spotify.com/v1/users/' + spotifyUserId + '/playlists', {
                data: {
                    limit: 50, // TODO: get more than 50
                    offset: 0
                },
                headers: {
                    Authorization: 'Bearer ' + spotifyAccessToken
                },
                cache: false
            }).done(function (data) {
                SN.trackEvent('user', 'Spotify', 'playlists', data.total);
                var $ul = $('.SN-player-extension-menu-playlists').empty();
                var $li = $('<li class="SN-player-reset-extension SN-clickable"><i class="icon icon-fw icon-angle-left"></i> Back</li>');
                $ul.append($li);
                $li = $('<li class="SN-player-spotify-add-new SN-clickable"><i class="icon icon-fw icon-plus"></i> New playlist</li>');
                $ul.append($li);
                for (var i = 0; i < data.items.length; i++) {
                    var item = data.items[i];
                    SN.trackEvent('user', 'Spotify', 'tracks in playlist', item.tracks.total);
                    var text = item.name + ' (' + item.tracks.total + ')';
                    $li = $('<li class="SN-clickable"><i class="icon icon-fw icon-music"></i> ' + text + '</li>');
                    (function (id) {
                        $li.on('click', function (e) {
                            SN.spotifyPlaylistAddTrack(spotifyUserId, id, uri, spotifyAccessToken);
                        });
                    })(item.id);
                    $ul.append($li);
                }
                var $extension = $('.SN-player-extension');
                $extension.children(':nth-child(1)').css('left', '-100%');
                $extension.children(':nth-child(2)').css('left', 0);
                $extension.children(':nth-child(3)').css('left', '100%');
                setTimeout(function () {
                    $extension.css('overflow-y', 'auto'); // do this last or it messes with the transition
                }, 400);
            });
        });
    });

    $doc.on('click', '.SN-player-spotify-add-new', function (e) {
        var $extension = $('.SN-player-extension').css('overflow-y', ''); // do this first or it messes with the transition
        $extension.animate({
            scrollTop: 0
        });
        $extension.children(':nth-child(1)').css('left', '-200%');
        $extension.children(':nth-child(2)').css('left', '-100%');
        $extension.children(':nth-child(3)').css('left', 0);
    });

    function spotifyCreatePlayListAndAddTrack(targetSelector) {
        var name = $(targetSelector).val();
        var uri = 'spotify:track:' + $("#snPlayer").find("[data-track-add-spotify]").attr('data-track-add-spotify');
        SN.spotifyProfile(function (spotifyAccessToken, spotifyUserId) {
            $.ajax('https://api.spotify.com/v1/users/' + spotifyUserId + '/playlists', {
                data: JSON.stringify({
                    name: name,
                    public: false
                }),
                headers: {
                    Authorization: 'Bearer ' + spotifyAccessToken
                },
                contentType: "application/json",
                method: 'POST', type: 'POST'
            }).done(function (data) {
                SN.trackEvent('alter', 'Spotify', 'create playlist');
                SN.spotifyPlaylistAddTrack(spotifyUserId, data.id, uri, spotifyAccessToken);
            });
        });
    }

    $doc.on('keypress', '#snNewPlaylistName', function (e) {
        if (e.which == 13 || e.which == 10)
            spotifyCreatePlayListAndAddTrack(this);
    });

    $doc.on('click', '.SN-player-spotify-add-new-submit', function (e) {
        var targetSelector = $(this).data('for');
        spotifyCreatePlayListAndAddTrack(targetSelector);
    });

    $doc.on('click', '.SN-player-reset-extension', SN.resetPlayerExtension);
};

SN.addContentToPlayer = function (track) {
    $('#snPlayer').data({
        artistName: track.artistName,
        trackName: track.trackName
    });
    $('#snTrackCoverImage').attr('src', track.artworkUrl); // TODO: default image
    $('#snArtistName').text(track.artistName);
    $('#snTrackName').text(track.trackName);
    $('.SN-player-select-action[data-for="#snTrackViewUrl"]').show();
    $('#snTrackViewUrl').val(track.trackViewUrl).hide();
    $('[data-purchase-link]').attr('href', track.trackViewUrl);
    var $addToPlaylist = $('.SN-player-mymusic-add').removeClass("added");
    if (track.spotifyId) {
        $addToPlaylist.attr('data-track-add-spotify', track.spotifyId);
        if (track.spotifyAdded)
            $addToPlaylist.addClass("added");
        $addToPlaylist.children('img.Partner-logo').attr('src', chrome.extension.getURL('images/add_to_playlist-black.png'));
    } else {
        $addToPlaylist.children('img.Partner-logo').attr('src', chrome.extension.getURL('images/itunes-button-small.png'));
    }
};

SN.togglePlayer = function (display) {
    if (display === 'show') {
        $('#snPlayer').addClass('is-active');
    } else {
        $('#snPlayer').removeClass('is-active');
    }
}

SN.playTrack = function (url, e) {
    $('#snTrackPlayer').attr('src', url);
    SN.togglePlayer('show');
    $('.SN-player-play').trigger('click');
    var $snPlayerData = $('#snPlayer').data(),
        eventData = $snPlayerData.artistName + ' - ' + $snPlayerData.trackName;
    SN.trackEvent('click', 'Tooltip Play Button', eventData);
    //MP.mixpanel.track("Track Played", {
    //	"Artist Name"      : $snPlayerData.artistName,
    //	"Track Name"       : $snPlayerData.trackName
    //});
}

SN.setupAnalaytics = function () {
    //ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
    //ga('require', 'displayfeatures');  // must be before pageview
    //ga('send', 'pageview', '/extension-loaded');
    //
    //console.log(userId);
    //
    //MP.mixpanel.init('5a473e13b7475eb85e9af0623fdf322a', userId);
};

SN.trackEvent = function (action, category, label, value) {
    if (typeof value === 'undefined')
        value = 1;
    ga('soundninja.send', {
        'hitType': 'event', // Required.
        'eventCategory': category, // Required.
        'eventAction': action, // Required.
        'eventLabel': label,
        'eventValue': value
    });
};

SN.addAdminPanel = function () {
    if (window.location.hash.substring(1) == 'sngod' && !SN.adminLoaded) {
        $.ajax(chrome.extension.getURL('admin.min.js'), {dataType: 'script', cache: true});
        SN.adminLoaded = true;
    }
};

// Events
SN.events = function () {
    $doc.on('sn-scan-complete', SN.setupTooltips);
    $doc.on('format-tracks-content-complete', SN.addContentToTooltip);
    $doc.on('format-seatgeek-content-complete', SN.addContentToTooltip); // TODO: go back and make this the same as other events
    $doc.on('format-events-content-complete', SN.addContentToTooltip);
};
// have to bind right now otherwise music times will change the hash before we have a chance
$(window).on('hashchange', SN.addAdminPanel);

SN.loadCSS = function() {
    // Dynamically load Soundninja CSS.
    var css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", chrome.extension.getURL("Soundninja.css"));
    document.getElementsByTagName("head")[0].appendChild(css);
}

SN.init = function () {
    if (!window.SoundninjaOpts) {
        SoundninjaOpts = {};
    }
    SN.setupAnalaytics();
    SN.events();
    SN.scan();
    SN.addPlayer();
    SN.loadCSS();

    if (SoundninjaOpts.monitorSelector) {
        // monkey-patch jQuery otherwise we will detect when we modify the dom ourselves
        var oldHTML = $.fn.html;
        $.fn.html = function(){
            oldHTML.apply(this, arguments);
            var $this = $(this);
            if ($this.is(SoundninjaOpts.monitorSelector))
                if (arguments.length == 1) {
                    $.extend(SoundninjaOpts, {selector: this, selectorFullMatch: false}); // https://trello.com/c/xoLQ4Y3D/105-check-if-artist-is-already-highlighted-has-icon-b4-adding-another
                    SN.scan();
                }
        };

        //$(SoundninjaOpts.monitorSelector).on('DOMSubtreeModified', function (event) {
        //    console.log(event);
        //    //SN.scan();
        //});
    }
};

$(window).on('load', function () {
    console.log('NINJA TIME');
    SN.init();
});;
/**
 * Created by jayen on 27/05/15.
 */
// complement of 00jQuery.js
})(jQuery);
;
/*!

 handlebars v3.0.3

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(7)['default'];

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _import = __webpack_require__(1);

	var base = _interopRequireWildcard(_import);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _SafeString = __webpack_require__(2);

	var _SafeString2 = _interopRequireDefault(_SafeString);

	var _Exception = __webpack_require__(3);

	var _Exception2 = _interopRequireDefault(_Exception);

	var _import2 = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_import2);

	var _import3 = __webpack_require__(5);

	var runtime = _interopRequireWildcard(_import3);

	var _noConflict = __webpack_require__(6);

	var _noConflict2 = _interopRequireDefault(_noConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _SafeString2['default'];
	  hb.Exception = _Exception2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_noConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(7)['default'];

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	exports.createFrame = createFrame;

	var _import = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_import);

	var _Exception = __webpack_require__(3);

	var _Exception2 = _interopRequireDefault(_Exception);

	var VERSION = '3.0.1';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 6;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var isArray = Utils.isArray,
	    isFunction = Utils.isFunction,
	    toString = Utils.toString,
	    objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};

	  registerDefaultHelpers(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: logger,
	  log: log,

	  registerHelper: function registerHelper(name, fn) {
	    if (toString.call(name) === objectType) {
	      if (fn) {
	        throw new _Exception2['default']('Arg not supported with multiple helpers');
	      }
	      Utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (toString.call(name) === objectType) {
	      Utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _Exception2['default']('Attempting to register a partial as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  }
	};

	function registerDefaultHelpers(instance) {
	  instance.registerHelper('helperMissing', function () {
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} constuct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _Exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });

	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });

	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _Exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: Utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });

	  instance.registerHelper('if', function (conditional, options) {
	    if (isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || Utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });

	  instance.registerHelper('with', function (context, options) {
	    if (isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!Utils.isEmpty(context)) {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
	        options = { data: data };
	      }

	      return fn(context, options);
	    } else {
	      return options.inverse(this);
	    }
	  });

	  instance.registerHelper('log', function (message, options) {
	    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
	    instance.log(level, message);
	  });

	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	}

	var logger = {
	  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

	  // State enum
	  DEBUG: 0,
	  INFO: 1,
	  WARN: 2,
	  ERROR: 3,
	  level: 1,

	  // Can be overridden in the host environment
	  log: function log(level, message) {
	    if (typeof console !== 'undefined' && logger.level <= level) {
	      var method = logger.methodMap[level];
	      (console[method] || console.log).call(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports.logger = logger;
	var log = logger.log;

	exports.log = log;

	function createFrame(object) {
	  var frame = Utils.extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	/* [args, ]options */

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// Build out our basic SafeString type
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;

	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  '\'': '&#x27;',
	  '`': '&#x60;'
	};

	var badChars = /[&<>"'`]/g,
	    possible = /[&<>"'`]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/*eslint-disable func-style, no-var */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	var isFunction;
	exports.isFunction = isFunction;
	/*eslint-enable func-style, no-var */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};exports.isArray = isArray;

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(7)['default'];

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;

	// TODO: Remove this line and break up compilePartial

	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _import = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_import);

	var _Exception = __webpack_require__(3);

	var _Exception2 = _interopRequireDefault(_Exception);

	var _COMPILER_REVISION$REVISION_CHANGES$createFrame = __webpack_require__(1);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[currentRevision],
	          compilerVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[compilerRevision];
	      throw new _Exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _Exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _Exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _Exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _Exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _Exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      return templateSpec[i];
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      depths = options.depths ? [context].concat(options.depths) : [context];
	    }

	    return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _Exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _Exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];

	    return fn.call(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), depths && [context].concat(depths));
	  }
	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    partial = options.partials[options.name];
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;

	  if (partial === undefined) {
	    throw new _Exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;
	/*global window */

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (typeof obj === "object" && obj !== null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }
/******/ ])
});
;;
// Create a custom function helper to check the event is close enough.
// distanceToEvent and threshold are parameters that come from the event.hbs file where
// this helper is called.
// the options param is some other object that contains two functions, fn() and inverse().
// These are both standard hbs template functions that return HTML.
// options.fn() is a hbs template for the body of this custom helper block
// from the hbs template. options.inverse() is the else clause.
// this is the context object given to the original template,
// so fn(this) will process the body of this clause within the templates context.
Handlebars.registerHelper('closeEvent', function (distanceToEvent, threshold, options){
    if (distanceToEvent < threshold) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
;
this["SN"] = this["SN"] || {};
this["SN"]["templates"] = this["SN"]["templates"] || {};

this["SN"]["templates"]["event"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <div class=\"Event\">\r\n            <div class=\"Event-date\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.date : stack1), depth0))
    + "</div>\r\n            <div class=\"Event-title\"><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.title : stack1), depth0))
    + "</a></div>\r\n            <div class=\"Event-location\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.city : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.province : stack1), depth0))
    + "</div>\r\n        </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "        <span class=\"artistName\">"
    + alias1(((helper = (helper = helpers.artistName || (depth0 != null ? depth0.artistName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"artistName","hash":{},"data":data}) : helper)))
    + "</span> is currently not on tour near you.\r\n        Check the <a href=\""
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" target=\"_blank\">full schedule</a> to find their concerts in other cities.\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<li>\r\n"
    + ((stack1 = (helpers.closeEvent || (depth0 && depth0.closeEvent) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.distance : stack1),(depth0 != null ? depth0.threshold : depth0),{"name":"closeEvent","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</li>";
},"useData":true});

this["SN"]["templates"]["player"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"SN-player\" id=\"snPlayer\">\r\n    <div class=\"SN-player-front-panel\">\r\n        <span class=\"SN-player-close SN-clickable\" id=\"snPlayerClose\"><svg class=\"icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-cross\" /></svg></span>\r\n        <div class=\"SN-player-col-b\">\r\n            <div class=\"SN-player-trackData\">\r\n                <svg class=\"icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-spotify\" /></svg>\r\n                <a data-purchase-link=\"2\" target=\"spotify\" class=\"SN-clickable\">\r\n                    <span id=\"snArtistName\"></span> &ndash; <span id=\"snTrackName\"></span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"SN-player-controlbar\">\r\n            <span class=\"SN-player-mymusic-add SN-clickable\">\r\n                <svg class=\"icon add\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-plus\" /></svg>\r\n                <svg class=\"icon added\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-ok\" /></svg>\r\n                <svg class=\"icon remove\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-cross\" /></svg>\r\n            </span>\r\n            <span class=\"SN-player-prev SN-clickable\"><svg class=\"icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-last\" /></svg></span>\r\n            <span class=\"SN-player-play SN-clickable\" style=\"display: none;\"><svg class=\"icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-play\"/></svg></span> \r\n            <span class=\"SN-player-pause SN-clickable\"><svg class=\"icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-pause\" /></svg></span>\r\n            <span class=\"SN-player-next SN-clickable\"><svg class=\"icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-next\" /></svg></span>\r\n            <audio class=\"SN-player-controls\" id=\"snTrackPlayer\" src=\"\" autoplay>Sorry your browser is not supported\r\n            </audio>\r\n            <span class=\"SN-player-toggle-extension SN-clickable\"><svg class=\"icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-dots\" /></svg></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"SN-player-extension\">\r\n    <ul class=\"SN-player-extension-menu SN-player-extension-menu-top\">\r\n        <li class=\"SN-player-spotify-add SN-clickable\"><i class=\"icon icon-fw icon-music\"></i> Add to playlist</li>\r\n        <li>\r\n            <div class=\"SN-player-select-action SN-clickable\" data-for=\"#snTrackViewUrl\"><i class=\"icon icon-fw icon-link\"></i> Copy spotify URL</div>\r\n            <input id=\"snTrackViewUrl\" readonly style=\"width: 100%\">\r\n        </li>\r\n        <li><i class=\"icon icon-fw icon-help\"></i> Feedback</li>\r\n    </ul>\r\n    <ul class=\"SN-player-extension-menu SN-player-extension-menu-playlists\">\r\n    </ul>\r\n    <ul class=\"SN-player-extension-menu SN-player-extension-menu-playlist-new\">\r\n        <li class=\"SN-player-spotify-add SN-clickable\"><i class=\"icon icon-fw icon-angle-left\"></i> Add to existing playlist</li>\r\n        <li>\r\n            <input id=\"snNewPlaylistName\" placeholder=\"Playlist name\" style=\"width: 50%;\">\r\n            <button class=\"SN-player-spotify-add-new-submit SN-spotify-button\" data-for=\"#snNewPlaylistName\">Create</button>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["SN"]["templates"]["track"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "added ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "<li>\r\n    <span class=\"Track-icon add "
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.track : depth0)) != null ? stack1.spotifyAdded : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "icon\" data-track-add-spotify=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.track : depth0)) != null ? stack1.spotifyId : stack1), depth0))
    + "\" title=\"Click to add this song...\">\r\n                <svg class=\"icon plus\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-plus\" /></svg>\r\n                <svg class=\"icon ok\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-ok\" /></svg>\r\n                <svg class=\"icon remove\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-cross\" /></svg>\r\n    </span>\r\n    <p class=\"Track-title Track-previewLink SN-clickable\" data-prev-track-preview=\""
    + alias2(((helper = (helper = helpers.prevTrackIndex || (depth0 != null ? depth0.prevTrackIndex : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"prevTrackIndex","hash":{},"data":data}) : helper)))
    + "\" data-track-preview=\""
    + alias2(((helper = (helper = helpers.trackIndex || (depth0 != null ? depth0.trackIndex : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"trackIndex","hash":{},"data":data}) : helper)))
    + "\" data-next-track-preview=\""
    + alias2(((helper = (helper = helpers.nextTrackIndex || (depth0 != null ? depth0.nextTrackIndex : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"nextTrackIndex","hash":{},"data":data}) : helper)))
    + "\" title=\"Click to preview this song...\" data-artist-name=\""
    + alias2(((helper = (helper = helpers.artistName || (depth0 != null ? depth0.artistName : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"artistName","hash":{},"data":data}) : helper)))
    + "\">\r\n      <span class=\"SNplay-icon\">\r\n          <svg class=\"icon play\" viewBox=\"0 0 100 100\"><use xlink:href=\"#icon-play\" /></svg>\r\n      </span>\r\n      "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.track : depth0)) != null ? stack1.trackName : stack1), depth0))
    + "\r\n    </p>\r\n</li>\r\n\r\n\r\n";
},"useData":true});