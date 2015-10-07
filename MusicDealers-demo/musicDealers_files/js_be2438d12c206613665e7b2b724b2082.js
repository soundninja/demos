/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);;
// $Id: drupal.js,v 1.41.2.4 2009/07/21 08:59:10 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = true;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  // Execute all of them.
  jQuery.each(Drupal.behaviors, function() {
    this(context);
  });
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim(xmlhttp.responseText)) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message.replace(/\n/g, '<br />');
}

// Global Killswitch on the <html> element
$(document.documentElement).addClass('js');
// Attach all behaviors.
$(document).ready(function() {
  Drupal.attachBehaviors(this);
});

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
// $Id: ajax_load.js,v 1.11 2009/09/20 14:22:29 markuspetrux Exp $

(function ($) {

Drupal.AjaxLoad = Drupal.AjaxLoad || { externalScripts: [], loadPending: [] };

/**
 * Load JavaScript and CSS files and data. 
 */
Drupal.AjaxLoad.loadFiles = function (target, response) {
  // Handle scripts.

  // Initialize the list of currently loaded external scripts.
  if (Drupal.AjaxLoad.externalScripts.length < 1) {
    $('script[src]').each(function() {
      Drupal.AjaxLoad.externalScripts.push($(this).attr('src'));
    });
  }
  // See if we have any settings to extend. Do this first so that behaviors
  // can access the new settings easily.
  if (response.scripts) {
    // Each Ajax operation needs its own counter.
    var index = Drupal.AjaxLoad.loadPending.length;
    Drupal.AjaxLoad.loadPending[index] = 0;
    if (!response.__customSettings && response.scripts.setting) {
      $.extend(Drupal.settings, response.scripts.setting);
    }
    // Inline scripts will be handled separately.
    var types = ['core', 'module', 'theme'];
    $.each(types, function (i, type) {
      if (response.scripts[type]) {
        $.each(response.scripts[type], function (src, data) {
          // Load scripts.
          src = Drupal.settings.basePath + src;
          // Test if the script already exists.
          var found = false;
          for (var j = 0; j < Drupal.AjaxLoad.externalScripts.length; j++) {
            if (Drupal.AjaxLoad.externalScripts[j].indexOf(src) == 0) {
              found = true;
              break;
            }
          }
          if (!found) {
            Drupal.AjaxLoad.loadPending[index]++;
            $.getScript(src, function () {
              Drupal.AjaxLoad.externalScripts.push(src);
              Drupal.AjaxLoad.loadComplete(index, target, response);
            });
          }
        });
      }
    });
    // Ensure Drupal behaviors are attached to new content, even when no
    // new external scripts have been loaded.
    if (Drupal.AjaxLoad.loadPending[index] == 0) {
      Drupal.attachBehaviors(target);
      // Ensure inline scripts are parsed after all external scripts have loaded.
      Drupal.AjaxLoad.loadInline(response);
    }
  }
  if (response.css) {
    // Handle stylesheets.
    var types = ['module', 'theme'];
    $.each(response.css, function (media, files) {
      $.each(types, function (i, type) {
        if (files[type]) {
          $.each(files[type], function (src, data) {
            src = Drupal.settings.basePath + src;
            // Test if the stylesheet already exists.
            if (!$('link[href*=' + src + ']').size()) {
              $('<link type="text/css" rel="stylesheet" media="' + media + '" href="' + src + '" />').appendTo('head');
            }
          });
        }
      });
    });
  }
};

/**
 * When all scripts have loaded, attach behaviors. 
 */
Drupal.AjaxLoad.loadInline = function(response) {
  // Handle inline scripts.
  if (response.scripts.inline) {
    $.each(response.scripts.inline, function (i, script) {
      // document.write calls would mess things up.
      if (script.code.indexOf('document.write') == -1) {
        eval(script.code);
      }
    });
  }
};

/**
 * When all scripts have loaded, attach behaviors. 
 */
Drupal.AjaxLoad.loadComplete = function(index, target, response) {
  Drupal.AjaxLoad.loadPending[index]--;
  if (Drupal.AjaxLoad.loadPending[index] == 0) {
    Drupal.attachBehaviors(target);
    // Ensure inline scripts are parsed after all external scripts have loaded.
    Drupal.AjaxLoad.loadInline(response);
  }
};

})(jQuery);
;

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;
/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-06-19 20:25:28 -0500 (Tue, 19 Jun 2007) $
 * $Rev: 2111 $
 *
 * Version 2.1
 */
(function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&parseInt($.browser.version)<=6){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)this.insertBefore(document.createElement(html),this.firstChild);});}return this;};if(!$.browser.version)$.browser.version=navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)[1];})(jQuery);;
﻿/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);;
// $Id: nice_menus.js,v 1.21 2010/06/18 06:14:12 vordude Exp $

// This uses Superfish 1.4.8
// (http://users.tpg.com.au/j_birch/plugins/superfish)

// Add Superfish to all Nice menus with some basic options.
(function ($) {
  $(document).ready(function() {
    $('ul.nice-menu').superfish({
      // Apply a generic hover class.
      hoverClass: 'over',
      // Disable generation of arrow mark-up.
      autoArrows: false,
      // Disable drop shadows.
      dropShadows: false,
      // Mouse delay.
      delay: Drupal.settings.nice_menus_options.delay,
      // Animation speed.
      speed: Drupal.settings.nice_menus_options.speed
    // Add in Brandon Aaron’s bgIframe plugin for IE select issues.
    // http://plugins.jquery.com/node/46/release
    }).find('ul').bgIframe({opacity:false});
    $('ul.nice-menu ul').css('display', 'none');
  });
})(jQuery);
;

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;

$(document).ready(function() {

  // Expression to check for absolute internal links.
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");

  // Attach onclick event to document only and catch clicks on all elements.
  $(document.body).click(function(event) {
    // Catch only the first parent link of a clicked element.
    $(event.target).parents("a:first,area:first").andSelf().filter("a,area").each(function() {

      var dga = Drupal.settings.googleanalytics;
      // Expression to check for special links like gotwo.module /go/* links.
      var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
      // Expression to check for download links.
      var isDownload = new RegExp("\\.(" + dga.trackDownloadExtensions + ")$", "i");

      // Is the clicked URL internal?
      if (isInternal.test(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (dga.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          var extension = isDownload.exec(this.href);
          //_gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
          ga("send", "event", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, ''));
        }
        else if (isInternalSpecial.test(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          //_gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
          ga("send", "pageview", { page: this.href.replace(isInternal, '') });
        }
      }
      else {
        if (dga.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          //_gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
          ga("send", "event", "Mails", "Click", this.href.substring(7));
        }
        else if (dga.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          // External link clicked.
          //_gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
          ga("send", "event", "Outbound links", "Click", this.href);
        }
      }
    });
  });

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function() {
    var href = $.colorbox.element().attr("href");
    if (href) {
      //_gaq.push(["_trackPageview", href.replace(isInternal, '')]);
      ga("send", "pageview", { page: href.replace(isInternal, '') });
    }
  });

});
;
$(document).ready(function() {
  $("#md2_overlay_features").click(function(e){
    e.preventDefault();
    $("#md2_overlay_features").fadeOut(200);
    $("#new-feature-alert-window").fadeOut(200);
  });

});
;
/**
 * @file base.js
 *
 * Some basic behaviors and utility functions for Views.
 */

Drupal.Views = {};

/**
 * jQuery UI tabs, Views integration component
 */
Drupal.behaviors.viewsTabs = function (context) {
  $('#views-tabset:not(.views-processed)').addClass('views-processed').each(function() {
    new Drupal.Views.Tabs($(this), {selectedClass: 'active'});
  });

  $('a.views-remove-link')
    .addClass('views-processed')
    .click(function() {
      var id = $(this).attr('id').replace('views-remove-link-', '');
      $('#views-row-' + id).hide();
      $('#views-removed-' + id).attr('checked', true);
      return false;
    });
}

/**
 * For IE, attach some javascript so that our hovers do what they're supposed
 * to do.
 */
Drupal.behaviors.viewsHoverlinks = function() {
  if ($.browser.msie) {
    // If IE, attach a hover event so we can see our admin links.
    $("div.view:not(.views-hover-processed)").addClass('views-hover-processed').hover(
      function() {
        $('div.views-hide', this).addClass("views-hide-hover"); return true;
      },
      function(){
        $('div.views-hide', this).removeClass("views-hide-hover"); return true;
      }
    );
    $("div.views-admin-links:not(.views-hover-processed)")
      .addClass('views-hover-processed')
      .hover(
        function() {
          $(this).addClass("views-admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("views-admin-links-hover"); return true;
        }
      );
  }
}

/**
 * Helper function to parse a querystring.
 */
Drupal.Views.parseQueryString = function (query) {
  var args = {};
  var pos = query.indexOf('?');
  if (pos != -1) {
    query = query.substring(pos + 1);
  }
  var pairs = query.split('&');
  for(var i in pairs) {
    if (typeof(pairs[i]) == 'string') {
      var pair = pairs[i].split('=');
      // Ignore the 'q' path argument, if present.
      if (pair[0] != 'q' && pair[1]) {
        args[pair[0]] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
  }
  return args;
};

/**
 * Helper function to return a view's arguments based on a path.
 */
Drupal.Views.parseViewArgs = function (href, viewPath) {
  var returnObj = {};
  var path = Drupal.Views.getPath(href);
  // Ensure we have a correct path.
  if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
    var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
    returnObj.view_args = args;
    returnObj.view_path = path;
  }
  return returnObj;
};

/**
 * Strip off the protocol plus domain from an href.
 */
Drupal.Views.pathPortion = function (href) {
  // Remove e.g. http://example.com if present.
  var protocol = window.location.protocol;
  if (href.substring(0, protocol.length) == protocol) {
    // 2 is the length of the '//' that normally follows the protocol
    href = href.substring(href.indexOf('/', protocol.length + 2));
  }
  return href;
};

/**
 * Return the Drupal path portion of an href.
 */
Drupal.Views.getPath = function (href) {
  href = Drupal.Views.pathPortion(href);
  href = href.substring(Drupal.settings.basePath.length, href.length);
  // 3 is the length of the '?q=' added to the url without clean urls.
  if (href.substring(0, 3) == '?q=') {
    href = href.substring(3, href.length);
  }
  var chars = ['#', '?', '&'];
  for (i in chars) {
    if (href.indexOf(chars[i]) > -1) {
      href = href.substr(0, href.indexOf(chars[i]));
    }
  }
  return href;
};
;
/**
 * @file dependent.js
 *
 * Written by dmitrig01 (Dmitri Gaskin) for Views; this provides dependent
 * visibility for form items in Views' ajax forms.
 *
 * To your $form item definition add:
 * - '#process' => array('views_process_dependency'),
 * - Add '#dependency' => array('id-of-form-item' => array(list, of, values, that,
     make, this, item, show),
 *
 * Special considerations:
 * - radios are harder. Because Drupal doesn't give radio groups individual ids,
 *   use 'radio:name-of-radio'
 *
 * - Checkboxes don't have their own id, so you need to add one in a div
 *   around the checkboxes via #prefix and #suffix. You actually need to add TWO
 *   divs because it's the parent that gets hidden. Also be sure to retain the
 *   'expand_checkboxes' in the #process array, because the views process will
 *   override it.
 */

Drupal.Views = Drupal.Views || {};

Drupal.Views.dependent = { bindings: {}, activeBindings: {}, activeTriggers: [] };

Drupal.Views.dependent.inArray = function(array, search_term) {
  var i = array.length;
  if (i > 0) {
   do {
    if (array[i] == search_term) {
       return true;
    }
   } while (i--);
  }
  return false;
}


Drupal.Views.dependent.autoAttach = function() {
  // Clear active bindings and triggers.
  for (i in Drupal.Views.dependent.activeTriggers) {
    jQuery(Drupal.Views.dependent.activeTriggers[i]).unbind('change');
  }
  Drupal.Views.dependent.activeTriggers = [];
  Drupal.Views.dependent.activeBindings = {};
  Drupal.Views.dependent.bindings = {};

  if (!Drupal.settings.viewsAjax) {
    return;
  }

  // Iterate through all relationships
  for (id in Drupal.settings.viewsAjax.formRelationships) {

    // Drupal.Views.dependent.activeBindings[id] is a boolean,
    // whether the binding is active or not.  Defaults to no.
    Drupal.Views.dependent.activeBindings[id] = 0;
    // Iterate through all possible values
    for(bind_id in Drupal.settings.viewsAjax.formRelationships[id].values) {
      // This creates a backward relationship.  The bind_id is the ID
      // of the element which needs to change in order for the id to hide or become shown.
      // The id is the ID of the item which will be conditionally hidden or shown.
      // Here we're setting the bindings for the bind
      // id to be an empty array if it doesn't already have bindings to it
      if (!Drupal.Views.dependent.bindings[bind_id]) {
        Drupal.Views.dependent.bindings[bind_id] = [];
      }
      // Add this ID
      Drupal.Views.dependent.bindings[bind_id].push(id);
      // Big long if statement.
      // Drupal.settings.viewsAjax.formRelationships[id].values[bind_id] holds the possible values

      if (bind_id.substring(0, 6) == 'radio:') {
        var trigger_id = "input[name='" + bind_id.substring(6) + "']";
      }
      else {
        var trigger_id = '#' + bind_id;
      }

      Drupal.Views.dependent.activeTriggers.push(trigger_id);

      if (jQuery(trigger_id).attr('type') == 'checkbox') {
        $(trigger_id).parent().addClass('hidden-options');
      }

      var getValue = function(item, trigger) {
        if (item.substring(0, 6) == 'radio:') {
          var val = jQuery(trigger + ':checked').val();
        }
        else {
          switch (jQuery(trigger).attr('type')) {
            case 'checkbox':
              var val = jQuery(trigger).attr('checked') || 0;

              if (val) {
                $(trigger).parent().removeClass('hidden-options').addClass('expanded-options');
              }
              else {
                $(trigger).parent().removeClass('expanded-options').addClass('hidden-options');
              }

              break;
            default:
              var val = jQuery(trigger).val();
          }
        }
        return val;
      }

      var setChangeTrigger = function(trigger_id, bind_id) {
        // Triggered when change() is clicked.
        var changeTrigger = function() {
          var val = getValue(bind_id, trigger_id);

          for (i in Drupal.Views.dependent.bindings[bind_id]) {
            var id = Drupal.Views.dependent.bindings[bind_id][i];

            // Fix numerous errors
            if (typeof id != 'string') {
              continue;
            }

            // This bit had to be rewritten a bit because two properties on the
            // same set caused the counter to go up and up and up.
            if (!Drupal.Views.dependent.activeBindings[id]) {
              Drupal.Views.dependent.activeBindings[id] = {};
            }

            if (Drupal.Views.dependent.inArray(Drupal.settings.viewsAjax.formRelationships[id].values[bind_id], val)) {
              Drupal.Views.dependent.activeBindings[id][bind_id] = 'bind';
            }
            else {
              delete Drupal.Views.dependent.activeBindings[id][bind_id];
            }

            var len = 0;
            for (i in Drupal.Views.dependent.activeBindings[id]) {
              len++;
            }

            var object = jQuery('#' + id + '-wrapper');
            if (!object.size()) {
              object = jQuery('#' + id).parent();
            }

            var rel_num = Drupal.settings.viewsAjax.formRelationships[id].num;
            if (typeof rel_num === 'object') {
              rel_num = Drupal.settings.viewsAjax.formRelationships[id].num[0];
            }

            if (rel_num <= len) {
              // Show if the element if criteria is matched
              object.show(0);
              object.addClass('dependent-options');
            }
            else {
              // Otherwise hide
              object.hide(0);
            }
          }
        }

        jQuery(trigger_id).change(function() {
          // Trigger the internal change function
          // the attr('id') is used because closures are more confusing
          changeTrigger(trigger_id, bind_id);
        });
        // Trigger initial reaction
        changeTrigger(trigger_id, bind_id);
      }
      setChangeTrigger(trigger_id, bind_id);
    }
  }
}

Drupal.behaviors.viewsDependent = function (context) {
  Drupal.Views.dependent.autoAttach();

  // Really large sets of fields are too slow with the above method, so this
  // is a sort of hacked one that's faster but much less flexible.
  $("select.views-master-dependent:not(.views-processed)")
    .addClass('views-processed')
    .change(function() {
      var val = $(this).val();
      if (val == 'all') {
        $('.views-dependent-all').show(0);
      }
      else {
        $('.views-dependent-all').hide(0);
        $('.views-dependent-' + val).show(0);
      }
    })
    .trigger('change');
}
;
/*
 *
 * Copyright (c) 2006-2008 Sam Collett (http://www.texotela.co.uk)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version 2.2.4
 * Demo: http://www.texotela.co.uk/code/jquery/select/
 *
 * $LastChangedDate: 2008-06-17 17:27:25 +0100 (Tue, 17 Jun 2008) $
 * $Rev: 5727 $
 *
 */
;(function(h){h.fn.addOption=function(){var j=function(a,f,c,g){var d=document.createElement("option");d.value=f,d.text=c;var b=a.options;var e=b.length;if(!a.cache){a.cache={};for(var i=0;i<e;i++){a.cache[b[i].value]=i}}if(typeof a.cache[f]=="undefined")a.cache[f]=e;a.options[a.cache[f]]=d;if(g){d.selected=true}};var k=arguments;if(k.length==0)return this;var l=true;var m=false;var n,o,p;if(typeof(k[0])=="object"){m=true;n=k[0]}if(k.length>=2){if(typeof(k[1])=="boolean")l=k[1];else if(typeof(k[2])=="boolean")l=k[2];if(!m){o=k[0];p=k[1]}}this.each(function(){if(this.nodeName.toLowerCase()!="select")return;if(m){for(var a in n){j(this,a,n[a],l)}}else{j(this,o,p,l)}});return this};h.fn.ajaxAddOption=function(c,g,d,b,e){if(typeof(c)!="string")return this;if(typeof(g)!="object")g={};if(typeof(d)!="boolean")d=true;this.each(function(){var f=this;h.getJSON(c,g,function(a){h(f).addOption(a,d);if(typeof b=="function"){if(typeof e=="object"){b.apply(f,e)}else{b.call(f)}}})});return this};h.fn.removeOption=function(){var d=arguments;if(d.length==0)return this;var b=typeof(d[0]);var e,i;if(b=="string"||b=="object"||b=="function"){e=d[0];if(e.constructor==Array){var j=e.length;for(var k=0;k<j;k++){this.removeOption(e[k],d[1])}return this}}else if(b=="number")i=d[0];else return this;this.each(function(){if(this.nodeName.toLowerCase()!="select")return;if(this.cache)this.cache=null;var a=false;var f=this.options;if(!!e){var c=f.length;for(var g=c-1;g>=0;g--){if(e.constructor==RegExp){if(f[g].value.match(e)){a=true}}else if(f[g].value==e){a=true}if(a&&d[1]===true)a=f[g].selected;if(a){f[g]=null}a=false}}else{if(d[1]===true){a=f[i].selected}else{a=true}if(a){this.remove(i)}}});return this};h.fn.sortOptions=function(e){var i=h(this).selectedValues();var j=typeof(e)=="undefined"?true:!!e;this.each(function(){if(this.nodeName.toLowerCase()!="select")return;var c=this.options;var g=c.length;var d=[];for(var b=0;b<g;b++){d[b]={v:c[b].value,t:c[b].text}}d.sort(function(a,f){o1t=a.t.toLowerCase(),o2t=f.t.toLowerCase();if(o1t==o2t)return 0;if(j){return o1t<o2t?-1:1}else{return o1t>o2t?-1:1}});for(var b=0;b<g;b++){c[b].text=d[b].t;c[b].value=d[b].v}}).selectOptions(i,true);return this};h.fn.selectOptions=function(g,d){var b=g;var e=typeof(g);if(e=="object"&&b.constructor==Array){var i=this;h.each(b,function(){i.selectOptions(this,d)})};var j=d||false;if(e!="string"&&e!="function"&&e!="object")return this;this.each(function(){if(this.nodeName.toLowerCase()!="select")return this;var a=this.options;var f=a.length;for(var c=0;c<f;c++){if(b.constructor==RegExp){if(a[c].value.match(b)){a[c].selected=true}else if(j){a[c].selected=false}}else{if(a[c].value==b){a[c].selected=true}else if(j){a[c].selected=false}}}});return this};h.fn.copyOptions=function(g,d){var b=d||"selected";if(h(g).size()==0)return this;this.each(function(){if(this.nodeName.toLowerCase()!="select")return this;var a=this.options;var f=a.length;for(var c=0;c<f;c++){if(b=="all"||(b=="selected"&&a[c].selected)){h(g).addOption(a[c].value,a[c].text)}}});return this};h.fn.containsOption=function(g,d){var b=false;var e=g;var i=typeof(e);var j=typeof(d);if(i!="string"&&i!="function"&&i!="object")return j=="function"?this:b;this.each(function(){if(this.nodeName.toLowerCase()!="select")return this;if(b&&j!="function")return false;var a=this.options;var f=a.length;for(var c=0;c<f;c++){if(e.constructor==RegExp){if(a[c].value.match(e)){b=true;if(j=="function")d.call(a[c],c)}}else{if(a[c].value==e){b=true;if(j=="function")d.call(a[c],c)}}}});return j=="function"?this:b};h.fn.selectedValues=function(){var a=[];this.selectedOptions().each(function(){a[a.length]=this.value});return a};h.fn.selectedTexts=function(){var a=[];this.selectedOptions().each(function(){a[a.length]=this.text});return a};h.fn.selectedOptions=function(){return this.find("option:selected")}})(jQuery);;
$(document).ready(function() {
	$('tr.mb_exp_fil_tax_row_header.first').addClass('playing');
	//$('#edit-submit').hide();
});

function mb_exp_fil_show_add_a_filter() {
  $('#mb_exp_fil_jquery_select_box').fadeIn();
  $('#mb_exp_fil_show_add_a_filter').fadeOut();
}


function mb_exp_fil_add_filter() {
	
	wkey_id = $('#mb_exp_fil_jquery_select_box').selectedValues();  
  if (wkey_id == 'mb_none') {
   // alert('Please select a filter');
  } else {  
    
    $thisWidget = $('#views-exposed-widget-' + wkey_id);
    
    //move this widget to the end of the table
    $thisWidget.insertAfter($('#views-exposed-widgets-table tr:last').prev());
    
    
    //hide the very last row: the row to pick more rows
    $('#views-exposed-widgets-table tr:last').hide();
    
    //reset the plus sign and the drop down
    $('#mb_exp_fil_jquery_select_box').hide();
    $('#mb_exp_fil_show_add_a_filter').show();
    
    $('#mb_exp_fil_jquery_select_box').selectOptions('mb_none');
    
    
    
    var ss = ""+wkey_id;
    var pos = ss.indexOf("mbt_");
    
    
    if (pos == 0) {
      $thisWidget.find('a.mb-ex-fil-tax-add-another').click();
      $('#views-exposed-widgets-table tr:last').fadeIn(1000);
    } else {

      $thisWidget.find('a.mb_exp_fil_tax_selector').click(); 
    
      $('#mb_exp_fil_jquery_select_box').removeOption(wkey_id);
      
      

    $thisWidget.removeClass('hide');
    $thisWidget.addClass('show');
    $thisWidget.hide();
    
  
    //Fade in the new widget. then fade in the selector of new widgets. 
    $thisWidget.fadeIn('slow', function() {$('#views-exposed-widgets-table tr:last').fadeIn(1000); });    
    
    //show the submit button
    
   //there may be a need for more of these in the future, that's why
   //I'm naming this one _four    
   if (window.mb_exp_fil_custom_add_filter_four) {
     mb_exp_fil_custom_add_filter_four();
   }
   
   $('#views-exposed-widgets-table').parent().addClass('showing-a-filter');  
     $('#edit-submit').show();
   }
    
        
  //$thisWidget.fadeIn('slow', function() {$('#views-exposed-widgets-table tr:last').slideDown(4000); }); 
  }

  mb_exp_fil_update_display_of_clear_all();
}



function mb_exp_fil_remove_filter(wkey_id, label) {
	//do the hiding first
	$('#views-exposed-widget-' + wkey_id).addClass('hide');
	$('#views-exposed-widget-' + wkey_id).removeClass('show');
	$('#views-exposed-widget-' + wkey_id).hide();

	$('#views-exposed-widget-' + wkey_id + ' input').attr('value', '');
  $('#views-exposed-widget-' + wkey_id + ' select option').attr('selected', '');
	$('#views-exposed-widget-' + wkey_id + ' select').selectOptions("All");
	
	//clear out the temporary select lists
	$('#views-exposed-widget-' + wkey_id + ' .mb-views-taxonomy-insert').html("");
	
	
	$('#mb_exp_fil_jquery_select_box').addOption(wkey_id, label);
	$('#mb_exp_fil_jquery_select_box').selectOptions("mb_none");
	mb_exp_fil_update_display_of_clear_all();
	
}

function mb_exp_fil_clear_all() {
	$('.views-exposed-widgets .show .remove-filter a').each(function (i) {
      $(this).click();
      mb_exp_fil_update_display_of_clear_all();
  });
}

//show or hide the clear all link base on whether or not any filters are visible
function mb_exp_fil_update_display_of_clear_all() {
	
	clear_text = 'hide';
	$('table.views-exposed-widgets tr.views-exposed-widget.mb_filter').each(function (i) {
      if ($(this).is(".show")) {
        $('#views-exposed-widget-clear-all').show();
        $('#views-exposed-widget-clear-all').addClass('show');
        $('#views-exposed-widget-clear-all').removeClass('hide');
        clear_text = 'show';
        // breaks the loop
        return false;
      }
      
  });
  
  
  if (clear_text == 'hide') {
    $('#views-exposed-widget-clear-all').hide();
    $('#views-exposed-widget-clear-all').addClass('hide');
    $('#views-exposed-widget-clear-all').removeClass('show');
  
  }
};
$(document).ready(function() {
	$('a.mb_exp_fil_tax_selector_initial').click();	
});


function mb_exp_fil_tax_add_another(vid, element, element_name, label, thisObj) {
    $.getJSON(Drupal.settings.basePath + 'mb_exp_fil_tax_add_another/'+vid+'/'+element+'/'+element_name+'/'+ label + '/34', function(json) {  
     $('#views-exposed-widgets-table tr:last').before(json);
  });
} 
 

function mb_exp_fil_tax_remove_filter(row_id, element, element_name) {
	//do the hiding first
	$('#' + row_id).remove();
	mb_exp_fil_tax_update_element(element);
	mb_exp_fil_update_display_of_clear_all();
}


function mb_exp_fil_tax_initial_hide(tid, element, element_name, label, thisObj) {

  jqObj = jQuery(thisObj);
  jqObj.hide();
  $('#' + element).hide();
}


function mb_exp_fil_tax_get_vocab(tid, element, element_name, label, thisObj) {

  jqObj = jQuery(thisObj);
  jqObj.hide();
  
  $('#' + element).hide();
  $('#' + element + '_inserter-wait-image').show();

  $.getJSON(Drupal.settings.basePath + 'mb_exp_fil_tax_select_vocab/'+tid+'/'+element+'/'+element_name+'/'+label, function(json) {
    $("#" + element + "-inserter").html(json);
    Drupal.attachBehaviors();
    $('#' + element + '_inserter-wait-image').hide();
  });
}


function mb_exp_fil_tax_get_taxonomy_select(tid, element, element_name, label, integer) {

  $('#' + element + '_inserter-wait-image' + integer).show();

  $.getJSON(Drupal.settings.basePath + 'mb_exp_fil_tax_select/'+tid+'/'+element+'/'+element_name+'/'+label+'/'+integer, function(json) {  
      $("#" + element + "-inserter" + integer).html(json);
      Drupal.attachBehaviors();
      $('#' + element + '_inserter-wait-image' + integer).hide();
      mb_exp_fil_tax_update_element(element);
  });
}


function mb_exp_fil_tax_update_element(element, element_name, label) {
        
  $('#' + element).selectOptions('', true);    

  $('.mb-exp-fil-tax-last-select-for-' + element).each(function (i) {  
    allSelectedNumber = $(this).selectedValues();
    $('#' + element).selectOptions(allSelectedNumber);
  });
}


function mb_exp_fil_tax_update_select(element, element_name, label, integer, thisObj) {

  jqObj = jQuery(thisObj);
  
 selectedNumber = jqObj.selectedValues();

  if (selectedNumber == 'mb_none') {
    $('#mb-views-ex-fil-tax-reset-' + element).click();
  } else {    
    mb_exp_fil_tax_get_taxonomy_select(selectedNumber, element, element_name, label, integer);
  }
};
function select_or_other_check_and_show(ele, page_init) {
  var speed;
  if (page_init) {
    speed = 0;
  } else {
    speed = 400;
    ele = $(ele).parents(".select-or-other")[0];
  }
  if ($(ele).find(".select-or-other-select option:selected[value=select_or_other], .select-or-other-select:checked[value=select_or_other]").length) {
    $(ele).find(".select-or-other-other").parent("div.form-item").show(speed, function() {
      $(this).find(".select-or-other-other").focus();
    });
    if ($('#edit-hear-about-category--c-other-wrapper').is(':visible')) {
      $("#edit-referred-by-wrapper").css('display', 'none');
    }
  }
  /**
   * Custom hack for the Want Music page
   * 
   * Check if the want-music (/#!/want-music) "How did you hear about Music Dealers?"
   * dropdown option has the "Referred By" option selected.  If it is, show the 
   * hidden textfield for a user to enter the name of their referee and hide this 
   * modules "other" textfield.
   */
  else if ($(ele).find(".select-or-other-select option:selected[value=referred_by]").length) {
    $("#edit-referred-by-wrapper").show(speed, function () {
      $(this).find("#edit-referred-by").focus();
    });
    $('#edit-hear-about-category--c-other-wrapper').css('display', 'none');
  }
  else {
    $(ele).find(".select-or-other-other").parent("div.form-item").hide(speed);
    // Hide the "Referred By" field if the option is not selected
    if ($('#edit-hear-about-category--c-select').val() != 'referred_by') {
      $("#edit-referred-by-wrapper").hide(speed);
    }
    if (page_init) {
      // Special case, when the page is loaded, also apply 'display: none' in case it is
      // nested inside an element also hidden by jquery - such as a collapsed fieldset.
      $(ele).find(".select-or-other-other").parent("div.form-item").css("display", "none");
      $("#edit-referred-by-wrapper").css('display', 'none');
    }
  }
}

/**
 * The Drupal behaviors for the Select (or other) field.
 */
Drupal.behaviors.select_or_other = function(context) {
  $(".select-or-other:not('.select-or-other-processed')", context)
    .addClass('select-or-other-processed').each(function () {
    select_or_other_check_and_show(this, true);
  });
  // Use the click function for radios and checkboxes.
  $(".select-or-other-select", context).not("select").click(function () {
    select_or_other_check_and_show(this, false);
  });
  // Use the change function for selects.
  $("select.select-or-other-select", context).change(function () {
    select_or_other_check_and_show(this, false);
  });
};
;
/*
 * jQuery Form Plugin
 * version: 2.25 (08-APR-2009)
 * @requires jQuery v1.2.2 or later
 * @note This has been modified for ajax.module
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(5($){$.B.1s=5(u){2(!4.G){R(\'1b: 2M 9 2N - 2O 2P 1t\');6 4}2(S u==\'5\')u={T:u};3 v=4.14(\'1c\')||1d.2Q.2R;v=(v.2S(/^([^#]+)/)||[])[1];v=v||\'\';u=$.1n({1e:v,H:4.14(\'1u\')||\'1Q\'},u||{});3 w={};4.L(\'C-1R-1S\',[4,u,w]);2(w.1T){R(\'1b: 9 1U 1o C-1R-1S L\');6 4}2(u.1v&&u.1v(4,u)===I){R(\'1b: 9 1f 1o 1v 1V\');6 4}3 a=4.1w(u.2T);2(u.J){u.O=u.J;K(3 n 1x u.J){2(u.J[n]2U 15){K(3 k 1x u.J[n])a.D({7:n,8:u.J[n][k]})}E a.D({7:n,8:u.J[n]})}}2(u.1y&&u.1y(a,4,u)===I){R(\'1b: 9 1f 1o 1y 1V\');6 4}4.L(\'C-9-1W\',[a,4,u,w]);2(w.1T){R(\'1b: 9 1U 1o C-9-1W L\');6 4}3 q=$.1z(a);2(u.H.2V()==\'1Q\'){u.1e+=(u.1e.2W(\'?\')>=0?\'&\':\'?\')+q;u.J=F}E u.J=q;3 x=4,V=[];2(u.2X)V.D(5(){x.1X()});2(u.2Y)V.D(5(){x.1Y()});2(!u.16&&u.17){3 y=u.T||5(){};V.D(5(a){$(u.17).2Z(a).P(y,1Z)})}E 2(u.T)V.D(u.T);u.T=5(a,b){K(3 i=0,M=V.G;i<M;i++)V[i].30(u,[a,b,x])};3 z=$(\'W:31\',4).18();3 A=I;K(3 j=0;j<z.G;j++)2(z[j])A=Q;2(u.20||A){2(u.21)$.32(u.21,1A);E 1A()}E $.33(u);4.L(\'C-9-34\',[4,u]);6 4;5 1A(){3 h=x[0];2($(\':W[7=9]\',h).G){35(\'36: 37 22 38 39 3a 3b "9".\');6}3 i=$.1n({},$.23,u);3 s=$.1n(Q,{},$.1n(Q,{},$.23),i);3 j=\'3c\'+(1B 3d().3e());3 k=$(\'<20 3f="\'+j+\'" 7="\'+j+\'" 24="25:26" />\');3 l=k[0];k.3g({3h:\'3i\',27:\'-28\',29:\'-28\'});3 m={1f:0,19:F,1g:F,3j:0,3k:\'n/a\',3l:5(){},2a:5(){},3m:5(){},3n:5(){4.1f=1;k.14(\'24\',\'25:26\')}};3 g=i.2b;2(g&&!$.1C++)$.1h.L("3o");2(g)$.1h.L("3p",[m,i]);2(s.2c&&s.2c(m,s)===I){s.2b&&$.1C--;6}2(m.1f)6;3 o=0;3 p=0;3 q=h.U;2(q){3 n=q.7;2(n&&!q.1i){u.O=u.O||{};u.O[n]=q.8;2(q.H=="X"){u.O[7+\'.x\']=h.Y;u.O[7+\'.y\']=h.Z}}}1j(5(){3 t=x.14(\'17\'),a=x.14(\'1c\');h.1k(\'17\',j);2(h.2d(\'1u\')!=\'2e\')h.1k(\'1u\',\'2e\');2(h.2d(\'1c\')!=i.1e)h.1k(\'1c\',i.1e);2(!u.3q){x.14({3r:\'2f/C-J\',3s:\'2f/C-J\'})}2(i.1D)1j(5(){p=Q;11()},i.1D);3 b=[];2g{2(u.O)K(3 n 1x u.O)b.D($(\'<W H="3t" 7="\'+n+\'" 8="\'+u.O[n]+\'" />\').2h(h)[0]);k.2h(\'1l\');l.2i?l.2i(\'2j\',11):l.3u(\'2k\',11,I);h.9()}3v{h.1k(\'1c\',a);t?h.1k(\'17\',t):x.3w(\'17\');$(b).2l()}},10);3 r=0;5 11(){2(o++)6;l.2m?l.2m(\'2j\',11):l.3x(\'2k\',11,I);3 c=Q;2g{2(p)3y\'1D\';3 d,N;N=l.2n?l.2n.2o:l.2p?l.2p:l.2o;2((N.1l==F||N.1l.2q==\'\')&&!r){r=1;o--;1j(11,2r);6}m.19=N.1l?N.1l.2q:F;m.1g=N.2s?N.2s:N;m.2a=5(a){3 b={\'3z-H\':i.16};6 b[a]};2(i.16==\'3A\'||i.16==\'3B\'){3 f=N.1E(\'1F\')[0];m.19=f?f.8:m.19}E 2(i.16==\'2t\'&&!m.1g&&m.19!=F){m.1g=2u(m.19)}d=$.3C(m,i.16)}3D(e){c=I;$.3E(i,m,\'2v\',e)}2(c){i.T(d,\'T\');2(g)$.1h.L("3F",[m,i])}2(g)$.1h.L("3G",[m,i]);2(g&&!--$.1C)$.1h.L("3H");2(i.2w)i.2w(m,c?\'T\':\'2v\');1j(5(){k.2l();m.1g=F},2r)};5 2u(s,a){2(1d.2x){a=1B 2x(\'3I.3J\');a.3K=\'I\';a.3L(s)}E a=(1B 3M()).3N(s,\'1G/2t\');6(a&&a.2y&&a.2y.1p!=\'3O\')?a:F}}};$.B.3P=5(c){6 4.2z().2A(\'9.C-1q\',5(){$(4).1s(c);6 I}).P(5(){$(":9,W:X",4).2A(\'2B.C-1q\',5(e){3 a=4.C;a.U=4;2(4.H==\'X\'){2(e.2C!=12){a.Y=e.2C;a.Z=e.3Q}E 2(S $.B.2D==\'5\'){3 b=$(4).2D();a.Y=e.2E-b.29;a.Z=e.2F-b.27}E{a.Y=e.2E-4.3R;a.Z=e.2F-4.3S}}1j(5(){a.U=a.Y=a.Z=F},10)})})};$.B.2z=5(){4.2G(\'9.C-1q\');6 4.P(5(){$(":9,W:X",4).2G(\'2B.C-1q\')})};$.B.1w=5(b){3 a=[];2(4.G==0)6 a;3 c=4[0];3 d=b?c.1E(\'*\'):c.22;2(!d)6 a;K(3 i=0,M=d.G;i<M;i++){3 e=d[i];3 n=e.7;2(!n)1H;2(b&&c.U&&e.H=="X"){2(!e.1i&&c.U==e)a.D({7:n+\'.x\',8:c.Y},{7:n+\'.y\',8:c.Z});1H}3 v=$.18(e,Q);2(v&&v.1r==15){K(3 j=0,2H=v.G;j<2H;j++)a.D({7:n,8:v[j]})}E 2(v!==F&&S v!=\'12\')a.D({7:n,8:v})}2(!b&&c.U){3 f=c.1E("W");K(3 i=0,M=f.G;i<M;i++){3 g=f[i];3 n=g.7;2(n&&!g.1i&&g.H=="X"&&c.U==g)a.D({7:n+\'.x\',8:c.Y},{7:n+\'.y\',8:c.Z})}}6 a};$.B.3T=5(a){6 $.1z(4.1w(a))};$.B.3U=5(b){3 a=[];4.P(5(){3 n=4.7;2(!n)6;3 v=$.18(4,b);2(v&&v.1r==15){K(3 i=0,M=v.G;i<M;i++)a.D({7:n,8:v[i]})}E 2(v!==F&&S v!=\'12\')a.D({7:4.7,8:v})});6 $.1z(a)};$.B.18=5(a){K(3 b=[],i=0,M=4.G;i<M;i++){3 c=4[i];3 v=$.18(c,a);2(v===F||S v==\'12\'||(v.1r==15&&!v.G))1H;v.1r==15?$.3V(b,v):b.D(v)}6 b};$.18=5(b,c){3 n=b.7,t=b.H,1a=b.1p.1I();2(S c==\'12\')c=Q;2(c&&(!n||b.1i||t==\'1m\'||t==\'3W\'||(t==\'1J\'||t==\'1K\')&&!b.1L||(t==\'9\'||t==\'X\')&&b.C&&b.C.U!=b||1a==\'13\'&&b.1M==-1))6 F;2(1a==\'13\'){3 d=b.1M;2(d<0)6 F;3 a=[],1N=b.3X;3 e=(t==\'13-2I\');3 f=(e?d+1:1N.G);K(3 i=(e?d:0);i<f;i++){3 g=1N[i];2(g.1t){3 v=g.8;2(!v)v=(g.1O&&g.1O[\'8\']&&!(g.1O[\'8\'].3Y))?g.1G:g.8;2(e)6 v;a.D(v)}}6 a}6 b.8};$.B.1Y=5(){6 4.P(5(){$(\'W,13,1F\',4).2J()})};$.B.2J=$.B.3Z=5(){6 4.P(5(){3 t=4.H,1a=4.1p.1I();2(t==\'1G\'||t==\'40\'||1a==\'1F\')4.8=\'\';E 2(t==\'1J\'||t==\'1K\')4.1L=I;E 2(1a==\'13\')4.1M=-1})};$.B.1X=5(){6 4.P(5(){2(S 4.1m==\'5\'||(S 4.1m==\'41\'&&!4.1m.42))4.1m()})};$.B.43=5(b){2(b==12)b=Q;6 4.P(5(){4.1i=!b})};$.B.2K=5(b){2(b==12)b=Q;6 4.P(5(){3 t=4.H;2(t==\'1J\'||t==\'1K\')4.1L=b;E 2(4.1p.1I()==\'2L\'){3 a=$(4).44(\'13\');2(b&&a[0]&&a[0].H==\'13-2I\'){a.45(\'2L\').2K(I)}4.1t=b}})};5 R(){2($.B.1s.46&&1d.1P&&1d.1P.R)1d.1P.R(\'[47.C] \'+15.48.49.4a(1Z,\'\'))}})(4b);',62,260,'||if|var|this|function|return|name|value|submit||||||||||||||||||||||||||||fn|form|push|else|null|length|type|false|data|for|trigger|max|doc|extraData|each|true|log|typeof|success|clk|callbacks|input|image|clk_x|clk_y||cb|undefined|select|attr|Array|dataType|target|a_fieldValue|responseText|tag|ajaxSubmit|action|window|url|aborted|responseXML|event|disabled|setTimeout|setAttribute|body|reset|extend|via|tagName|plugin|constructor|a_ajaxSubmit|selected|method|beforeSerialize|a_formToArray|in|beforeSubmit|param|fileUpload|new|active|timeout|getElementsByTagName|textarea|text|continue|toLowerCase|checkbox|radio|checked|selectedIndex|ops|attributes|console|GET|pre|serialize|veto|vetoed|callback|validate|a_resetForm|a_clearForm|arguments|iframe|closeKeepAlive|elements|ajaxSettings|src|about|blank|top|1000px|left|getResponseHeader|global|beforeSend|getAttribute|POST|multipart|try|appendTo|attachEvent|onload|load|remove|detachEvent|contentWindow|document|contentDocument|innerHTML|100|XMLDocument|xml|toXml|error|complete|ActiveXObject|documentElement|a_ajaxFormUnbind|bind|click|offsetX|offset|pageX|pageY|unbind|jmax|one|a_clearFields|a_selected|option|skipping|process|no|element|location|href|match|semantic|instanceof|toUpperCase|indexOf|resetForm|clearForm|html|apply|file|get|ajax|notify|alert|Error|Form|must|not|be|named|jqFormIO|Date|getTime|id|css|position|absolute|status|statusText|getAllResponseHeaders|setRequestHeader|abort|ajaxStart|ajaxSend|skipEncodingOverride|encoding|enctype|hidden|addEventListener|finally|removeAttr|removeEventListener|throw|content|json|script|httpData|catch|handleError|ajaxSuccess|ajaxComplete|ajaxStop|Microsoft|XMLDOM|async|loadXML|DOMParser|parseFromString|parsererror|a_ajaxForm|offsetY|offsetLeft|offsetTop|a_formSerialize|a_fieldSerialize|merge|button|options|specified|a_clearInputs|password|object|nodeType|a_enable|parent|find|debug|jquery|prototype|join|call|jQuery'.split('|'),0,{}));
/**
 * Automatic ajax validation
 *
 * @see http://drupal.org/project/ajax
 * @see irc://freenode.net/#drupy
 * @depends Drupal 6
 * @author brendoncrawford
 * @note This file uses a 79 character width limit.
 * 
 *
 */

Drupal.Ajax = new Object;

Drupal.Ajax.plugins = {};

Drupal.Ajax.firstRun = false;

/**
 * Init function.
 * This is being executed by Drupal behaviours.
 * See bottom of script.
 * 
 * @param {HTMLElement} context
 * @return {Bool}
 */
Drupal.Ajax.init = function(context) {
  var f, s;
  if (f = $('.ajax-form', context)) {
    if (!Drupal.Ajax.firstRun) {
      Drupal.Ajax.invoke('init');
      Drupal.Ajax.firstRun = true;
    }
    s = $('input[type="submit"]', f);
    s.click(function(){
      this.form.ajax_activator = $(this);
      return true;
    });
    f.each(function(){
      this.ajax_activator = null;
      $(this).submit(function(){
        if (this.ajax_activator === null) {
          this.ajax_activator = $('#edit-submit', this);
        }
        if (this.ajax_activator.hasClass('ajax-trigger')) {
          Drupal.Ajax.go($(this), this.ajax_activator);
          return false;
        }
        else {
          return true;
        }
      });
      return true;
    });
  }
  return true;
};

/**
 * Invokes plugins
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 */
Drupal.Ajax.invoke = function(hook, args) {
  //console.log('invoking: ' + hook);
  var plugin, r, ret;
  ret = true;
  //console.log(Drupal.Ajax.plugins);
  for (plugin in Drupal.Ajax.plugins) {
    //console.log('doing this plugin ' + plugin + 'and the hook is ' + hook);
    r = Drupal.Ajax.plugins[plugin](hook, args);
    //console.log('r is ' + r);
    if (r === false) {
      ret = false;
    }
  }
  return ret;
};

/**
 * Handles submission
 * 
 * @param {Object} submitter_
 * @return {Bool}
 */
Drupal.Ajax.go = function(formObj, submitter) {
  var submitterVal, submitterName, extraData;
  Drupal.Ajax.invoke('submit', {submitter:submitter});
  submitterVal = submitter.val();
  submitterName = submitter.attr('name');
  submitter.val(Drupal.t('Loading...'));
  extraData = {};
  extraData[submitterName] = submitterVal;
  extraData['drupal_ajax'] = '1';
  formObj.a_ajaxSubmit({
    extraData : extraData,
    beforeSubmit : function(data) {
      data[data.length] = {
        name : submitterName,
        value : submitterVal
      };
      data[data.length] = {
        name : 'drupal_ajax',
        value : '1'
      };
      return true;
    },
    dataType : 'json',
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      window.alert(Drupal.t('ajax.module: An unknown error has occurred.'));
      if (window.console) {
        console.log('error', arguments);
      }
      return true;
    },
    success: function(data){
      submitter.val(submitterVal);
      Drupal.Ajax.response(submitter, formObj, data);
      return true;
    }
  });
  return false;
};

/**
 * Handles messaging
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 * @param {Object} data
 * @param {Object} options
 * @return {Bool}
 */
Drupal.Ajax.message = function(formObj, submitter, data, options) {
  var args;
  data.local = {
    submitter : submitter,
    form : formObj
  };
  if (Drupal.Ajax.invoke('message', data)) {
    Drupal.Ajax.writeMessage(data.local.form, data.local.submitter, options);
    Drupal.Ajax.invoke('afterMessage', data);
  }
  return true;
};

/**
 * Writes message
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 * @param {Object} options
 * @return {Bool}
 */
Drupal.Ajax.writeMessage = function(formObj, submitter, options) {
  var i, _i, thisItem, log, errBox, h, data;
  if (options.action === 'notify') {
    // Cleanups
    $('.messages, .ajax-preview', formObj).remove();
    $('input, textarea').removeClass('error status warning required');
    // Preview
    if (options.type === 'preview') {
      log = $('<div>').addClass('ajax-preview');
      log.html(options.messages);
      formObj.prepend(log);
    }
    // Status, Error, Message
    else {
      log = $('<ul>');
      errBox = $(".messages." + options.type, formObj[0])
      for (i = 0, _i = options.messages.length; i < _i; i++) {
        thisItem = $('#' + options.messages[i].id, formObj[0])
        thisItem.addClass(options.type);
        if (options.messages[i].required) {
          thisItem.addClass('required');
        }
        log.append('<li>' + options.messages[i].value + '</li>');
      }
      if (errBox.length === 0) {
        errBox = $("<div class='messages " + options.type + "'>");
        formObj.prepend(errBox);
      }
      errBox.html(log);
    }
  }
  else if (options.action === 'clear') {
    $('.messages, .ajax-preview', formObj).remove();
  }
  return true;
};

/**
 * Updates message containers
 * 
 * @param {Object} updaters
 * @return {Bool}
 */
Drupal.Ajax.updater = function(updaters) {
  var i, _i, elm;
  for (i = 0, _i = updaters.length; i < _i; i++) {
    elm = $(updaters[i].selector);
    // HTML:IN
    if (updaters[i].type === 'html_in') {
      elm.html(updaters[i].value);
    }
    // HTML:OUT
    else if (updaters[i].type === 'html_out') {
      elm.replaceWith(updaters[i].value);
    }
    // FIELD
    else if (updaters[i].type === 'field') {
      elm.val(updaters[i].value);
    }
    // REMOVE
    else if(updaters[i].type === 'remove') {
      elm.remove();
    }
  }
  return true;
};

/**
 * Handles data response
 * 
 * @param {Object} submitter
 * @param {Object} formObj
 * @param {Object} data
 * @return {Bool}
 */
Drupal.Ajax.response = function(submitter, formObj, data){
  var newSubmitter;
  data.local = {
    submitter : submitter,
    form : formObj
  };
  /**
   * Failure
   */
  if (data.status === false) {
    Drupal.Ajax.updater(data.updaters);
    Drupal.Ajax.message(formObj, submitter, data, {
      action : 'notify',
      messages : data.messages_error,
      type : 'error'
    });
  }
  /**
   * Success
   */
  else {
    // Display preview
    if (data.preview !== null) {
      Drupal.Ajax.updater(data.updaters);
      Drupal.Ajax.message(formObj, submitter, data, {
        action : 'notify',
        messages : decodeURIComponent(data.preview),
        type : 'preview'
      });
    }
    // If no redirect, then simply show messages
    else if (data.redirect === null) {
      if (data.messages_status.length > 0) {
        Drupal.Ajax.message(formObj, submitter, data, {
          action : 'notify',
          messages : data.messages_status,
          type : 'status'
        });
      }
      if (data.messages_warning.length > 0) {
        Drupal.Ajax.message(formObj, submitter, data, {
          action : 'notify',
          messages : data.messages_warning,
          type : 'warning'
        });
      }
      if (data.messages_status.length === 0 &&
          data.messages_warning.length === 0) {
        Drupal.Ajax.message(formObj, submitter, data, {action:'clear'});
      }
    }
    // Redirect
    else {
      if (Drupal.Ajax.invoke('redirect', data)) {
        Drupal.Ajax.redirect( data.redirect );
      }
      else {
        Drupal.Ajax.updater(data.updaters);
        if (data.messages_status.length === 0 &&
            data.messages_warning.length === 0) {
          Drupal.Ajax.message(formObj, submitter, data, {action:'clear'});
        }
        else {
          Drupal.Ajax.message(formObj, submitter, data, {
            action : 'notify',
            messages : data.messages_status,
            type : 'status'
          });
        }
      }
    }
  }
  return true;
};


/**
 * Redirects to appropriate page
 * 
 * @todo
 *   Some of this functionality should possibly hapen on
 *   the server instead of client.
 * @param {String} url
 */
Drupal.Ajax.redirect = function(url) {
  window.location.href = url;
};

Drupal.behaviors.Ajax = Drupal.Ajax.init;


;
/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.21",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.draggable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.21"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.droppable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var b=this.options,c=b.accept;this.isover=0,this.isout=1,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++)b[c]==this&&b.splice(c,1);return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"),this},_setOption:function(b,c){b=="accept"&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0])return!1;var e=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope==d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.extend(a.ui.droppable,{version:"1.8.21"}),a.ui.intersect=function(b,c,d){if(!c.offset)return!1;var e=(b.positionAbs||b.position.absolute).left,f=e+b.helperProportions.width,g=(b.positionAbs||b.position.absolute).top,h=g+b.helperProportions.height,i=c.offset.left,j=i+c.proportions.width,k=c.offset.top,l=k+c.proportions.height;switch(d){case"fit":return i<=e&&f<=j&&k<=g&&h<=l;case"intersect":return i<e+b.helperProportions.width/2&&f-b.helperProportions.width/2<j&&k<g+b.helperProportions.height/2&&h-b.helperProportions.height/2<l;case"pointer":var m=(b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left,n=(b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top,o=a.ui.isOver(n,m,k,i,c.proportions.height,c.proportions.width);return o;case"touch":return(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l)&&(e>=i&&e<=j||f>=i&&f<=j||e<i&&f>j);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d=a.ui.ddmanager.droppables[b.options.scope]||[],e=c?c.type:null,f=(b.currentItem||b.element).find(":data(droppable)").andSelf();g:for(var h=0;h<d.length;h++){if(d[h].options.disabled||b&&!d[h].accept.call(d[h].element[0],b.currentItem||b.element))continue;for(var i=0;i<f.length;i++)if(f[i]==d[h].element[0]){d[h].proportions.height=0;continue g}d[h].visible=d[h].element.css("display")!="none";if(!d[h].visible)continue;e=="mousedown"&&d[h]._activate.call(d[h],c),d[h].offset=d[h].element.offset(),d[h].proportions={width:d[h].element[0].offsetWidth,height:d[h].element[0].offsetHeight}}},drop:function(b,c){var d=!1;return a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,c))}),d},dragStart:function(b,c){b.element.parents(":not(body,html)").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var d=a.ui.intersect(b,this,this.options.tolerance),e=!d&&this.isover==1?"isout":d&&this.isover==0?"isover":null;if(!e)return;var f;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");g.length&&(f=a.data(g[0],"droppable"),f.greedyChild=e=="isover"?1:0)}f&&e=="isover"&&(f.isover=0,f.isout=1,f._out.call(f,c)),this[e]=1,this[e=="isout"?"isover":"isout"]=0,this[e=="isover"?"_over":"_out"].call(this,c),f&&e=="isout"&&(f.isout=0,f.isover=1,f._over.call(f,c))})},dragStop:function(b,c){b.element.parents(":not(body,html)").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.resizable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var b=this,c=this.options;this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=c.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var d=this.handles.split(",");this.handles={};for(var e=0;e<d.length;e++){var f=a.trim(d[e]),g="ui-resizable-"+f,h=a('<div class="ui-resizable-handle '+g+'"></div>');h.css({zIndex:c.zIndex}),"se"==f&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[f]=".ui-resizable-"+f,this.element.append(h)}}this._renderAxis=function(b){b=b||this.element;for(var c in this.handles){this.handles[c].constructor==String&&(this.handles[c]=a(this.handles[c],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var d=a(this.handles[c],this.element),e=0;e=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth();var f=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join("");b.css(f,e),this._proportionallyResize()}if(!a(this.handles[c]).length)continue}},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!b.resizing){if(this.className)var a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=a&&a[1]?a[1]:"se"}}),c.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").hover(function(){if(c.disabled)return;a(this).removeClass("ui-resizable-autohide"),b._handles.show()},function(){if(c.disabled)return;b.resizing||(a(this).addClass("ui-resizable-autohide"),b._handles.hide())})),this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var c=this.element;c.after(this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")})).remove()}return this.originalElement.css("resize",this.originalResizeStyle),b(this.originalElement),this},_mouseCapture:function(b){var c=!1;for(var d in this.handles)a(this.handles[d])[0]==b.target&&(c=!0);return!this.options.disabled&&c},_mouseStart:function(b){var d=this.options,e=this.element.position(),f=this.element;this.resizing=!0,this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()},(f.is(".ui-draggable")||/absolute/.test(f.css("position")))&&f.css({position:"absolute",top:e.top,left:e.left}),this._renderProxy();var g=c(this.helper.css("left")),h=c(this.helper.css("top"));d.containment&&(g+=a(d.containment).scrollLeft()||0,h+=a(d.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:h},this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:h},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio=typeof d.aspectRatio=="number"?d.aspectRatio:this.originalSize.width/this.originalSize.height||1;var i=a(".ui-resizable-"+this.axis).css("cursor");return a("body").css("cursor",i=="auto"?this.axis+"-resize":i),f.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c=this.helper,d=this.options,e={},f=this,g=this.originalMousePosition,h=this.axis,i=b.pageX-g.left||0,j=b.pageY-g.top||0,k=this._change[h];if(!k)return!1;var l=k.apply(this,[b,i,j]),m=a.browser.msie&&a.browser.version<7,n=this.sizeDiff;this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)l=this._updateRatio(l,b);return l=this._respectSize(l,b),this._propagate("resize",b),c.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",b,this.ui()),!1},_mouseStop:function(b){this.resizing=!1;var c=this.options,d=this;if(this._helper){var e=this._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:d.sizeDiff.height,h=f?0:d.sizeDiff.width,i={width:d.helper.width()-h,height:d.helper.height()-g},j=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,k=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;c.animate||this.element.css(a.extend(i,{top:k,left:j})),d.helper.height(d.size.height),d.helper.width(d.size.width),this._helper&&!c.animate&&this._proportionallyResize()}return a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b=this.options,c,e,f,g,h;h={minWidth:d(b.minWidth)?b.minWidth:0,maxWidth:d(b.maxWidth)?b.maxWidth:Infinity,minHeight:d(b.minHeight)?b.minHeight:0,maxHeight:d(b.maxHeight)?b.maxHeight:Infinity};if(this._aspectRatio||a)c=h.minHeight*this.aspectRatio,f=h.minWidth/this.aspectRatio,e=h.maxHeight*this.aspectRatio,g=h.maxWidth/this.aspectRatio,c>h.minWidth&&(h.minWidth=c),f>h.minHeight&&(h.minHeight=f),e<h.maxWidth&&(h.maxWidth=e),g<h.maxHeight&&(h.maxHeight=g);this._vBoundaries=h},_updateCache:function(a){var b=this.options;this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a,b){var c=this.options,e=this.position,f=this.size,g=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),g=="sw"&&(a.left=e.left+(f.width-a.width),a.top=null),g=="nw"&&(a.top=e.top+(f.height-a.height),a.left=e.left+(f.width-a.width)),a},_respectSize:function(a,b){var c=this.helper,e=this._vBoundaries,f=this._aspectRatio||b.shiftKey,g=this.axis,h=d(a.width)&&e.maxWidth&&e.maxWidth<a.width,i=d(a.height)&&e.maxHeight&&e.maxHeight<a.height,j=d(a.width)&&e.minWidth&&e.minWidth>a.width,k=d(a.height)&&e.minHeight&&e.minHeight>a.height;j&&(a.width=e.minWidth),k&&(a.height=e.minHeight),h&&(a.width=e.maxWidth),i&&(a.height=e.maxHeight);var l=this.originalPosition.left+this.originalSize.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(g),o=/nw|ne|n/.test(g);j&&n&&(a.left=l-e.minWidth),h&&n&&(a.left=l-e.maxWidth),k&&o&&(a.top=m-e.minHeight),i&&o&&(a.top=m-e.maxHeight);var p=!a.width&&!a.height;return p&&!a.left&&a.top?a.top=null:p&&!a.top&&a.left&&(a.left=null),a},_proportionallyResize:function(){var b=this.options;if(!this._proportionallyResizeElements.length)return;var c=this.helper||this.element;for(var d=0;d<this._proportionallyResizeElements.length;d++){var e=this._proportionallyResizeElements[d];if(!this.borderDif){var f=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],g=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(f,function(a,b){var c=parseInt(a,10)||0,d=parseInt(g[b],10)||0;return c+d})}if(!a.browser.msie||!a(c).is(":hidden")&&!a(c).parents(":hidden").length)e.css({height:c.height()-this.borderDif[0]-this.borderDif[2]||0,width:c.width()-this.borderDif[1]-this.borderDif[3]||0});else continue}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var d=a.browser.msie&&a.browser.version<7,e=d?1:0,f=d?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+f,height:this.element.outerHeight()+f,position:"absolute",left:this.elementOffset.left-e+"px",top:this.elementOffset.top-e+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(a,b,c){return{width:this.originalSize.width+b}},w:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{left:f.left+b,width:e.width-b}},n:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{top:f.top+c,height:e.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),b!="resize"&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.extend(a.ui.resizable,{version:"1.8.21"}),a.ui.plugin.add("resizable","alsoResize",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=function(b){a(b).each(function(){var b=a(this);b.data("resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};typeof e.alsoResize=="object"&&!e.alsoResize.parentNode?e.alsoResize.length?(e.alsoResize=e.alsoResize[0],f(e.alsoResize)):a.each(e.alsoResize,function(a){f(a)}):f(e.alsoResize)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?a.each(e.alsoResize,function(a,b){i(a,b)}):i(e.alsoResize)},stop:function(b,c){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","animate",{stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d._proportionallyResizeElements,g=f.length&&/textarea/i.test(f[0].nodeName),h=g&&a.ui.hasScroll(f[0],"left")?0:d.sizeDiff.height,i=g?0:d.sizeDiff.width,j={width:d.size.width-i,height:d.size.height-h},k=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;d.element.animate(a.extend(j,l&&k?{top:l,left:k}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var c={width:parseInt(d.element.css("width"),10),height:parseInt(d.element.css("height"),10),top:parseInt(d.element.css("top"),10),left:parseInt(d.element.css("left"),10)};f&&f.length&&a(f[0]).css({width:c.width,height:c.height}),d._updateCache(c),d._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(b,d){var e=a(this).data("resizable"),f=e.options,g=e.element,h=f.containment,i=h instanceof a?h.get(0):/parent/.test(h)?g.parent().get(0):h;if(!i)return;e.containerElement=a(i);if(/document/.test(h)||h==document)e.containerOffset={left:0,top:0},e.containerPosition={left:0,top:0},e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight};else{var j=a(i),k=[];a(["Top","Right","Left","Bottom"]).each(function(a,b){k[a]=c(j.css("padding"+b))}),e.containerOffset=j.offset(),e.containerPosition=j.position(),e.containerSize={height:j.innerHeight()-k[3],width:j.innerWidth()-k[1]};var l=e.containerOffset,m=e.containerSize.height,n=e.containerSize.width,o=a.ui.hasScroll(i,"left")?i.scrollWidth:n,p=a.ui.hasScroll(i)?i.scrollHeight:m;e.parentData={element:i,left:l.left,top:l.top,width:o,height:p}}},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.containerSize,g=d.containerOffset,h=d.size,i=d.position,j=d._aspectRatio||b.shiftKey,k={top:0,left:0},l=d.containerElement;l[0]!=document&&/static/.test(l.css("position"))&&(k=g),i.left<(d._helper?g.left:0)&&(d.size.width=d.size.width+(d._helper?d.position.left-g.left:d.position.left-k.left),j&&(d.size.height=d.size.width/d.aspectRatio),d.position.left=e.helper?g.left:0),i.top<(d._helper?g.top:0)&&(d.size.height=d.size.height+(d._helper?d.position.top-g.top:d.position.top),j&&(d.size.width=d.size.height*d.aspectRatio),d.position.top=d._helper?g.top:0),d.offset.left=d.parentData.left+d.position.left,d.offset.top=d.parentData.top+d.position.top;var m=Math.abs((d._helper?d.offset.left-k.left:d.offset.left-k.left)+d.sizeDiff.width),n=Math.abs((d._helper?d.offset.top-k.top:d.offset.top-g.top)+d.sizeDiff.height),o=d.containerElement.get(0)==d.element.parent().get(0),p=/relative|absolute/.test(d.containerElement.css("position"));o&&p&&(m-=d.parentData.left),m+d.size.width>=d.parentData.width&&(d.size.width=d.parentData.width-m,j&&(d.size.height=d.size.width/d.aspectRatio)),n+d.size.height>=d.parentData.height&&(d.size.height=d.parentData.height-n,j&&(d.size.width=d.size.height*d.aspectRatio))},stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.position,g=d.containerOffset,h=d.containerPosition,i=d.containerElement,j=a(d.helper),k=j.offset(),l=j.outerWidth()-d.sizeDiff.width,m=j.outerHeight()-d.sizeDiff.height;d._helper&&!e.animate&&/relative/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m}),d._helper&&!e.animate&&/static/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m})}}),a.ui.plugin.add("resizable","ghost",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size;d.ghost=d.originalElement.clone(),d.ghost.css({opacity:.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:""),d.ghost.appendTo(d.helper)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})},stop:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size,g=d.originalSize,h=d.originalPosition,i=d.axis,j=e._aspectRatio||b.shiftKey;e.grid=typeof e.grid=="number"?[e.grid,e.grid]:e.grid;var k=Math.round((f.width-g.width)/(e.grid[0]||1))*(e.grid[0]||1),l=Math.round((f.height-g.height)/(e.grid[1]||1))*(e.grid[1]||1);/^(se|s|e)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l):/^(ne)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l):/^(sw)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.left=h.left-k):(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l,d.position.left=h.left-k)}});var c=function(a){return parseInt(a,10)||0},d=function(a){return!isNaN(parseInt(a,10))}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.selectable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var b=this;this.element.addClass("ui-selectable"),this.dragged=!1;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]),c.addClass("ui-selectee"),c.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=c.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),this._mouseDestroy(),this},_mouseStart:function(b){var c=this;this.opos=[b.pageX,b.pageY];if(this.options.disabled)return;var d=this.options;this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.clientX,top:b.clientY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,!b.metaKey&&!b.ctrlKey&&(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().andSelf().each(function(){var d=a.data(this,"selectable-item");if(d){var e=!b.metaKey&&!b.ctrlKey||!d.$element.hasClass("ui-selected");return d.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting"),d.unselecting=!e,d.selecting=e,d.selected=e,e?c._trigger("selecting",b,{selecting:d.element}):c._trigger("unselecting",b,{unselecting:d.element}),!1}})},_mouseDrag:function(b){var c=this;this.dragged=!0;if(this.options.disabled)return;var d=this.options,e=this.opos[0],f=this.opos[1],g=b.pageX,h=b.pageY;if(e>g){var i=g;g=e,e=i}if(f>h){var i=h;h=f,f=i}return this.helper.css({left:e,top:f,width:g-e,height:h-f}),this.selectees.each(function(){var i=a.data(this,"selectable-item");if(!i||i.element==c.element[0])return;var j=!1;d.tolerance=="touch"?j=!(i.left>g||i.right<e||i.top>h||i.bottom<f):d.tolerance=="fit"&&(j=i.left>e&&i.right<g&&i.top>f&&i.bottom<h),j?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,c._trigger("selecting",b,{selecting:i.element}))):(i.selecting&&((b.metaKey||b.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),c._trigger("unselecting",b,{unselecting:i.element}))),i.selected&&!b.metaKey&&!b.ctrlKey&&!i.startselected&&(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,c._trigger("unselecting",b,{unselecting:i.element})))}),!1},_mouseStop:function(b){var c=this;this.dragged=!1;var d=this.options;return a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}}),a.extend(a.ui.selectable,{version:"1.8.21"})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.sortable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},destroy:function(){a.Widget.prototype.destroy.call(this),this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--)this.items[b].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){b==="disabled"?(this.options[b]=c,this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(b);var e=null,f=this,g=a(b.target).parents().each(function(){if(a.data(this,d.widgetName+"-item")==f)return e=a(this),!1});a.data(b.target,d.widgetName+"-item")==f&&(e=a(b.target));if(!e)return!1;if(this.options.handle&&!c){var h=!1;a(this.options.handle,e).find("*").andSelf().each(function(){this==b.target&&(h=!0)});if(!h)return!1}return this.currentItem=e,this._removeCurrentsFromItems(),!0},_mouseStart:function(b,c,d){var e=this.options,f=this;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),e.containment&&this._setContainment(),e.cursor&&(a("body").css("cursor")&&(this._storedCursor=a("body").css("cursor")),a("body").css("cursor",e.cursor)),e.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",e.opacity)),e.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",e.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!d)for(var g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",b,f._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var c=this.options,d=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+c.scrollSpeed:b.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+c.scrollSpeed:b.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(b.pageY-a(document).scrollTop()<c.scrollSensitivity?d=a(document).scrollTop(a(document).scrollTop()-c.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<c.scrollSensitivity&&(d=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed)),b.pageX-a(document).scrollLeft()<c.scrollSensitivity?d=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<c.scrollSensitivity&&(d=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed))),d!==!1&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var e=this.items.length-1;e>=0;e--){var f=this.items[e],g=f.item[0],h=this._intersectsWithPointer(f);if(!h)continue;if(g!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=g&&!a.ui.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],g):!0)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(b,f);else break;this._trigger("change",b,this._uiHash());break}}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(!b)return;a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b);if(this.options.revert){var d=this,e=d.placeholder.offset();d.reverting=!0,a(this.helper).animate({left:e.left-this.offset.parent.left-d.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-d.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1},cancel:function(){var b=this;if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("deactivate",null,b._uiHash(this)),this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",null,b._uiHash(this)),this.containers[c].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l=d+j>h&&d+j<i&&b+k>f&&b+k<g;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?l:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(b){var c=this.options.axis==="x"||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top,b.height),d=this.options.axis==="y"||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left,b.width),e=c&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return e?this.floating?g&&g=="right"||f=="down"?2:1:f&&(f=="down"?2:1):!1},_intersectsWithSides:function(b){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top+b.height/2,b.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left+b.width/2,b.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?f=="right"&&d||f=="left"&&!d:e&&(e=="down"&&c||e=="up"&&!c)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c=this,d=[],e=[],f=this._connectWith();if(f&&b)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&e.push([a.isFunction(j.options.items)?j.options.items.call(j.element):a(j.options.items,j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),j])}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var g=e.length-1;g>=0;g--)e[g][0].each(function(){d.push(this)});return a(d)},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");for(var b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(b){this.items=[],this.containers=[this];var c=this.items,d=this,e=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],f=this._connectWith();if(f&&this.ready)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&(e.push([a.isFunction(j.options.items)?j.options.items.call(j.element[0],b,{item:this.currentItem}):a(j.options.items,j.element),j]),this.containers.push(j))}}for(var g=e.length-1;g>=0;g--){var k=e[g][1],l=e[g][0];for(var i=0,m=l.length;i<m;i++){var n=a(l[i]);n.data(this.widgetName+"-item",k),c.push({item:n,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var c=this.items.length-1;c>=0;c--){var d=this.items[c];if(d.instance!=this.currentContainer&&this.currentContainer&&d.item[0]!=this.currentItem[0])continue;var e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item;b||(d.width=e.outerWidth(),d.height=e.outerHeight());var f=e.offset();d.left=f.left,d.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var c=this.containers.length-1;c>=0;c--){var f=this.containers[c].element.offset();this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(b){var c=b||this,d=c.options;if(!d.placeholder||d.placeholder.constructor==String){var e=d.placeholder;d.placeholder={element:function(){var b=a(document.createElement(c.currentItem[0].nodeName)).addClass(e||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return e||(b.style.visibility="hidden"),b},update:function(a,b){if(e&&!d.forcePlaceholderSize)return;b.height()||b.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10)),b.width()||b.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))}}}c.placeholder=a(d.placeholder.element.call(c.element,c.currentItem)),c.currentItem.after(c.placeholder),d.placeholder.update(c,c.placeholder)},_contactContainers:function(b){var c=null,d=null;for(var e=this.containers.length-1;e>=0;e--){if(a.ui.contains(this.currentItem[0],this.containers[e].element[0]))continue;if(this._intersectsWith(this.containers[e].containerCache)){if(c&&a.ui.contains(this.containers[e].element[0],c.element[0]))continue;c=this.containers[e],d=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1;else if(this.currentContainer!=this.containers[d]){var f=1e4,g=null,h=this.positionAbs[this.containers[d].floating?"left":"top"];for(var i=this.items.length-1;i>=0;i--){if(!a.ui.contains(this.containers[d].element[0],this.items[i].item[0]))continue;var j=this.containers[d].floating?this.items[i].item.offset().left:this.items[i].item.offset().top;Math.abs(j-h)<f&&(f=Math.abs(j-h),g=this.items[i],this.direction=j-h>0?"down":"up")}if(!g&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[d],g?this._rearrange(b,g,null,!0):this._rearrange(b,null,this.containers[d].element,!0),this._trigger("change",b,this._uiHash()),this.containers[d]._trigger("change",b,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;return d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(d[0].style.width==""||c.forceHelperSize)&&d.width(this.currentItem.width()),(d[0].style.height==""||c.forceHelperSize)&&d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)){var c=a(b.containment)[0],d=a(b.containment).offset(),e=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var f=b.pageX,g=b.pageY;if(this.originalPosition){this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top));if(c.grid){var h=this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1];g=this.containment?h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3]?h-this.offset.click.top<this.containment[1]?h+c.grid[1]:h-c.grid[1]:h:h;var i=this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0];f=this.containment?i-this.offset.click.left<this.containment[0]||i-this.offset.click.left>this.containment[2]?i-this.offset.click.left<this.containment[0]?i+c.grid[0]:i-c.grid[0]:i:i}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this,f=this.counter;window.setTimeout(function(){f==e.counter&&e.refreshPositions(!d)},0)},_clear:function(b,c){this.reverting=!1;var d=[],e=this;!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var f in this._storedCSS)if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static")this._storedCSS[f]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c&&d.push(function(a){this._trigger("update",a,this._uiHash())});if(!a.ui.contains(this.element[0],this.currentItem[0])){c||d.push(function(a){this._trigger("remove",a,this._uiHash())});for(var f=this.containers.length-1;f>=0;f--)a.ui.contains(this.containers[f].element[0],this.currentItem[0])&&!c&&(d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.containers[f])),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.containers[f])))}for(var f=this.containers.length-1;f>=0;f--)c||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over=0);this._storedCursor&&a("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",b,this._uiHash());for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return!1}c||this._trigger("beforeStop",b,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!c){for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}}),a.extend(a.ui.sortable,{version:"1.8.21"})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.accordion.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:!0,clearStyle:!1,collapsible:!1,event:"click",fillSpace:!1,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var b=this,c=b.options;b.running=0,b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),b.headers=b.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-focus")}),b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(c.navigation){var d=b.element.find("a").filter(c.navigationFilter).eq(0);if(d.length){var e=d.closest(".ui-accordion-header");e.length?b.active=e:b.active=d.closest(".ui-accordion-content").prev()}}b.active=b._findActive(b.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"),b.active.next().addClass("ui-accordion-content-active"),b._createIcons(),b.resize(),b.element.attr("role","tablist"),b.headers.attr("role","tab").bind("keydown.accordion",function(a){return b._keydown(a)}).next().attr("role","tabpanel"),b.headers.not(b.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide(),b.active.length?b.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):b.headers.eq(0).attr("tabIndex",0),a.browser.safari||b.headers.find("a").attr("tabIndex",-1),c.event&&b.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(a){b._clickHandler.call(b,a,this),a.preventDefault()})},_createIcons:function(){var b=this.options;b.icons&&(a("<span></span>").addClass("ui-icon "+b.icons.header).prependTo(this.headers),this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected),this.element.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.children(".ui-icon").remove(),this.element.removeClass("ui-accordion-icons")},destroy:function(){var b=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),this.headers.find("a").removeAttr("tabIndex"),this._destroyIcons();var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");return(b.autoHeight||b.fillHeight)&&c.css("height",""),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b=="active"&&this.activate(c),b=="icons"&&(this._destroyIcons(),c&&this._createIcons()),b=="disabled"&&this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(b){if(this.options.disabled||b.altKey||b.ctrlKey)return;var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._clickHandler({target:b.target},b.target),b.preventDefault()}return f?(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),!1):!0},resize:function(){var b=this.options,c;if(b.fillSpace){if(a.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}c=this.element.parent().height(),a.browser.msie&&this.element.parent().css("overflow",d),this.headers.each(function(){c-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")}else b.autoHeight&&(c=0,this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())}).height(c));return this},activate:function(a){this.options.active=a;var b=this._findActive(a)[0];return this._clickHandler({target:b},b),this},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===!1?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,c){var d=this.options;if(d.disabled)return;if(!b.target){if(!d.collapsible)return;this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),this.active.next().addClass("ui-accordion-content-active");var e=this.active.next(),f={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:e},g=this.active=a([]);this._toggle(g,e,f);return}var h=a(b.currentTarget||c),i=h[0]===this.active[0];d.active=d.collapsible&&i?!1:this.headers.index(h);if(this.running||!d.collapsible&&i)return;var j=this.active,g=h.next(),e=this.active.next(),f={options:d,newHeader:i&&d.collapsible?a([]):h,oldHeader:this.active,newContent:i&&d.collapsible?a([]):g,oldContent:e},k=this.headers.index(this.active[0])>this.headers.index(h[0]);this.active=i?a([]):h,this._toggle(g,e,f,i,k),j.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),i||(h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected),h.next().addClass("ui-accordion-content-active"));return},_toggle:function(b,c,d,e,f){var g=this,h=g.options;g.toShow=b,g.toHide=c,g.data=d;var i=function(){if(!g)return;return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data),g.running=c.size()===0?b.size():c.size();if(h.animated){var j={};h.collapsible&&e?j={toShow:a([]),toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace}:j={toShow:b,toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace},h.proxied||(h.proxied=h.animated),h.proxiedDuration||(h.proxiedDuration=h.duration),h.animated=a.isFunction(h.proxied)?h.proxied(j):h.proxied,h.duration=a.isFunction(h.proxiedDuration)?h.proxiedDuration(j):h.proxiedDuration;var k=a.ui.accordion.animations,l=h.duration,m=h.animated;m&&!k[m]&&!a.easing[m]&&(m="slide"),k[m]||(k[m]=function(a){this.slide(a,{easing:m,duration:l||700})}),k[m](j)}else h.collapsible&&e?b.toggle():(c.hide(),b.show()),i(!0);c.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur(),b.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(this.running)return;this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""}),this.toHide.removeClass("ui-accordion-content-active"),this.toHide.length&&(this.toHide.parent()[0].className=this.toHide.parent()[0].className),this._trigger("change",null,this.data)}}),a.extend(a.ui.accordion,{version:"1.8.21",animations:{slide:function(b,c){b=a.extend({easing:"swing",duration:300},b,c);if(!b.toHide.size()){b.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},b);return}if(!b.toShow.size()){b.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},b);return}var d=b.toShow.css("overflow"),e=0,f={},g={},h=["height","paddingTop","paddingBottom"],i,j=b.toShow;i=j[0].style.width,j.width(j.parent().width()-parseFloat(j.css("paddingLeft"))-parseFloat(j.css("paddingRight"))-(parseFloat(j.css("borderLeftWidth"))||0)-(parseFloat(j.css("borderRightWidth"))||0)),a.each(h,function(c,d){g[d]="hide";var e=(""+a.css(b.toShow[0],d)).match(/^([\d+-.]+)(.*)$/);f[d]={value:e[1],unit:e[2]||"px"}}),b.toShow.css({height:0,overflow:"hidden"}).show(),b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(g,{step:function(a,c){c.prop=="height"&&(e=c.end-c.start===0?0:(c.now-c.start)/(c.end-c.start)),b.toShow[0].style[c.prop]=e*f[c.prop].value+f[c.prop].unit},duration:b.duration,easing:b.easing,complete:function(){b.autoHeight||b.toShow.css("height",""),b.toShow.css({width:i,overflow:d}),b.complete()}})},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1e3:200})}}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var b=this,c=this.element[0].ownerDocument,d;this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(b.options.disabled||b.element.propAttr("readOnly"))return;d=!1;var e=a.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:b._move("previousPage",c);break;case e.PAGE_DOWN:b._move("nextPage",c);break;case e.UP:b._keyEvent("previous",c);break;case e.DOWN:b._keyEvent("next",c);break;case e.ENTER:case e.NUMPAD_ENTER:b.menu.active&&(d=!0,c.preventDefault());case e.TAB:if(!b.menu.active)return;b.menu.select(c);break;case e.ESCAPE:b.element.val(b.term),b.close(c);break;default:clearTimeout(b.searching),b.searching=setTimeout(function(){b.term!=b.element.val()&&(b.selectedItem=null,b.search(null,c))},b.options.delay)}}).bind("keypress.autocomplete",function(a){d&&(d=!1,a.preventDefault())}).bind("focus.autocomplete",function(){if(b.options.disabled)return;b.selectedItem=null,b.previous=b.element.val()}).bind("blur.autocomplete",function(a){if(b.options.disabled)return;clearTimeout(b.searching),b.closing=setTimeout(function(){b.close(a),b._change(a)},150)}),this._initSource(),this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",c)[0]).mousedown(function(c){var d=b.menu.element[0];a(c.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(c){c.target!==b.element[0]&&c.target!==d&&!a.ui.contains(d,c.target)&&b.close()})},1),setTimeout(function(){clearTimeout(b.closing)},13)}).menu({focus:function(a,c){var d=c.item.data("item.autocomplete");!1!==b._trigger("focus",a,{item:d})&&/^key/.test(a.originalEvent.type)&&b.element.val(d.value)},selected:function(a,d){var e=d.item.data("item.autocomplete"),f=b.previous;b.element[0]!==c.activeElement&&(b.element.focus(),b.previous=f,setTimeout(function(){b.previous=f,b.selectedItem=e},1)),!1!==b._trigger("select",a,{item:e})&&b.element.val(e.value),b.term=b.element.val(),b.close(a),b.selectedItem=e},blur:function(a,c){b.menu.element.is(":visible")&&b.element.val()!==b.term&&b.element.val(b.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),a.fn.bgiframe&&this.menu.element.bgiframe(),b.beforeunloadHandler=function(){b.element.removeAttr("autocomplete")},a(window).bind("beforeunload",b.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),a(window).unbind("beforeunload",this.beforeunloadHandler),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b==="source"&&this._initSource(),b==="appendTo"&&this.menu.element.appendTo(a(c||"body",this.element[0].ownerDocument)[0]),b==="disabled"&&c&&this.xhr&&this.xhr.abort()},_initSource:function(){var b=this,c,d;a.isArray(this.options.source)?(c=this.options.source,this.source=function(b,d){d(a.ui.autocomplete.filter(c,b.term))}):typeof this.options.source=="string"?(d=this.options.source,this.source=function(c,e){b.xhr&&b.xhr.abort(),b.xhr=a.ajax({url:d,data:c,dataType:"json",success:function(a,b){e(a)},error:function(){e([])}})}):this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val(),this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)===!1)return;return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){!this.options.disabled&&a&&a.length?(a=this._normalize(a),this._suggest(a),this._trigger("open")):this.close()},close:function(a){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",a))},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return typeof b=="string"?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.deactivate(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItem(b,c)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append(a("<a></a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term),this.menu.deactivate();return}this.menu[a](b)},widget:function(){return this.menu.element},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}})})(jQuery),function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length)return;c.preventDefault(),b.select(c)}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.scrollTop(),e=this.element.height();c<0?this.element.scrollTop(d+c):c>=e&&this.element.scrollTop(d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){if(!this.active)return;this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,c){if(!this.active){this.activate(c,this.element.children(b));return}var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(".ui-menu-item:first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:last")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(".ui-menu-item:last"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:first")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})}(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.button.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this).find(":ui-button");setTimeout(function(){b.button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(d?e=a(d).find("[name='"+c+"']"):e=a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",j),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.propAttr("disabled"):this.element.propAttr("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i=this.type==="checkbox"||this.type==="radio",l="ui-state-hover"+(i?"":" ui-state-active"),m="ui-state-focus";h.label===null&&(h.label=this.buttonElement.html()),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter.button",function(){if(h.disabled)return;a(this).addClass("ui-state-hover"),this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave.button",function(){if(h.disabled)return;a(this).removeClass(l)}).bind("click.button",function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus.button",function(){b.buttonElement.addClass(m)}).bind("blur.button",function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change.button",function(){if(f)return;b.refresh()}),this.buttonElement.bind("mousedown.button",function(a){if(h.disabled)return;f=!1,d=a.pageX,e=a.pageY}).bind("mouseup.button",function(a){if(h.disabled)return;if(d!==a.pageX||e!==a.pageY)f=!0})),this.type==="checkbox"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).toggleClass("ui-state-active"),b.buttonElement.attr("aria-pressed",b.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown.button",function(){if(h.disabled)return!1;a(this).addClass("ui-state-active"),c=this,a(document).one("mouseup",function(){c=null})}).bind("mouseup.button",function(){if(h.disabled)return!1;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(b){if(h.disabled)return!1;(b.keyCode==a.ui.keyCode.SPACE||b.keyCode==a.ui.keyCode.ENTER)&&a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){this.element.is(":checkbox")?this.type="checkbox":this.element.is(":radio")?this.type="radio":this.element.is("input")?this.type="input":this.type="button";if(this.type==="checkbox"||this.type==="radio"){var a=this.element.parents().filter(":last"),b="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible");var c=this.element.is(":checked");c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.attr("aria-pressed",c)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title"),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled"){c?this.element.propAttr("disabled",!0):this.element.propAttr("disabled",!1);return}this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b),this.type==="radio"?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",c))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c),a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var b=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy"),a.Widget.prototype.destroy.call(this)}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.dialog.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",d={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},e={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},f=a.attrFn||{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0,click:!0};a.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.options.title=this.options.title||this.originalTitle;var b=this,d=b.options,e=d.title||"&#160;",f=a.ui.dialog.getTitleId(b.element),g=(b.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass(c+d.dialogClass).css({zIndex:d.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(c){d.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(a){b.moveToTop(!1,a)}),h=b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),i=(b.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),j=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){j.addClass("ui-state-hover")},function(){j.removeClass("ui-state-hover")}).focus(function(){j.addClass("ui-state-focus")}).blur(function(){j.removeClass("ui-state-focus")}).click(function(a){return b.close(a),!1}).appendTo(i),k=(b.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),l=a("<span></span>").addClass("ui-dialog-title").attr("id",f).html(e).prependTo(i);a.isFunction(d.beforeclose)&&!a.isFunction(d.beforeClose)&&(d.beforeClose=d.beforeclose),i.find("*").add(i).disableSelection(),d.draggable&&a.fn.draggable&&b._makeDraggable(),d.resizable&&a.fn.resizable&&b._makeResizable(),b._createButtons(d.buttons),b._isOpen=!1,a.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;return a.overlay&&a.overlay.destroy(),a.uiDialog.hide(),a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),a.uiDialog.remove(),a.originalTitle&&a.element.attr("title",a.originalTitle),a},widget:function(){return this.uiDialog},close:function(b){var c=this,d,e;if(!1===c._trigger("beforeClose",b))return;return c.overlay&&c.overlay.destroy(),c.uiDialog.unbind("keypress.ui-dialog"),c._isOpen=!1,c.options.hide?c.uiDialog.hide(c.options.hide,function(){c._trigger("close",b)}):(c.uiDialog.hide(),c._trigger("close",b)),a.ui.dialog.overlay.resize(),c.options.modal&&(d=0,a(".ui-dialog").each(function(){this!==c.uiDialog[0]&&(e=a(this).css("z-index"),isNaN(e)||(d=Math.max(d,e)))}),a.ui.dialog.maxZ=d),c},isOpen:function(){return this._isOpen},moveToTop:function(b,c){var d=this,e=d.options,f;return e.modal&&!b||!e.stack&&!e.modal?d._trigger("focus",c):(e.zIndex>a.ui.dialog.maxZ&&(a.ui.dialog.maxZ=e.zIndex),d.overlay&&(a.ui.dialog.maxZ+=1,d.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)),f={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()},a.ui.dialog.maxZ+=1,d.uiDialog.css("z-index",a.ui.dialog.maxZ),d.element.attr(f),d._trigger("focus",c),d)},open:function(){if(this._isOpen)return;var b=this,c=b.options,d=b.uiDialog;return b.overlay=c.modal?new a.ui.dialog.overlay(b):null,b._size(),b._position(c.position),d.show(c.show),b.moveToTop(!0),c.modal&&d.bind("keydown.ui-dialog",function(b){if(b.keyCode!==a.ui.keyCode.TAB)return;var c=a(":tabbable",this),d=c.filter(":first"),e=c.filter(":last");if(b.target===e[0]&&!b.shiftKey)return d.focus(1),!1;if(b.target===d[0]&&b.shiftKey)return e.focus(1),!1}),a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(),b._isOpen=!0,b._trigger("open"),b},_createButtons:function(b){var c=this,d=!1,e=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);c.uiDialog.find(".ui-dialog-buttonpane").remove(),typeof b=="object"&&b!==null&&a.each(b,function(){return!(d=!0)}),d&&(a.each(b,function(b,d){d=a.isFunction(d)?{click:d,text:b}:d;var e=a('<button type="button"></button>').click(function(){d.click.apply(c.element[0],arguments)}).appendTo(g);a.each(d,function(a,b){if(a==="click")return;a in f?e[a](b):e.attr(a,b)}),a.fn.button&&e.button()}),e.appendTo(c.uiDialog))},_makeDraggable:function(){function f(a){return{position:a.position,offset:a.offset}}var b=this,c=b.options,d=a(document),e;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,g){e=c.height==="auto"?"auto":a(this).height(),a(this).height(a(this).height()).addClass("ui-dialog-dragging"),b._trigger("dragStart",d,f(g))},drag:function(a,c){b._trigger("drag",a,f(c))},stop:function(g,h){c.position=[h.position.left-d.scrollLeft(),h.position.top-d.scrollTop()],a(this).removeClass("ui-dialog-dragging").height(e),b._trigger("dragStop",g,f(h)),a.ui.dialog.overlay.resize()}})},_makeResizable:function(c){function h(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}c=c===b?this.options.resizable:c;var d=this,e=d.options,f=d.uiDialog.css("position"),g=typeof c=="string"?c:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:g,start:function(b,c){a(this).addClass("ui-dialog-resizing"),d._trigger("resizeStart",b,h(c))},resize:function(a,b){d._trigger("resize",a,h(b))},stop:function(b,c){a(this).removeClass("ui-dialog-resizing"),e.height=a(this).height(),e.width=a(this).width(),d._trigger("resizeStop",b,h(c)),a.ui.dialog.overlay.resize()}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(b){var c=[],d=[0,0],e;if(b){if(typeof b=="string"||typeof b=="object"&&"0"in b)c=b.split?b.split(" "):[b[0],b[1]],c.length===1&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c.join(" "),at:c.join(" "),offset:d.join(" ")};b=a.extend({},a.ui.dialog.prototype.options.position,b)}else b=a.ui.dialog.prototype.options.position;e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},b)),e||this.uiDialog.hide()},_setOptions:function(b){var c=this,f={},g=!1;a.each(b,function(a,b){c._setOption(a,b),a in d&&(g=!0),a in e&&(f[a]=b)}),g&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",f)},_setOption:function(b,d){var e=this,f=e.uiDialog;switch(b){case"beforeclose":b="beforeClose";break;case"buttons":e._createButtons(d);break;case"closeText":e.uiDialogTitlebarCloseText.text(""+d);break;case"dialogClass":f.removeClass(e.options.dialogClass).addClass(c+d);break;case"disabled":d?f.addClass("ui-dialog-disabled"):f.removeClass("ui-dialog-disabled");break;case"draggable":var g=f.is(":data(draggable)");g&&!d&&f.draggable("destroy"),!g&&d&&e._makeDraggable();break;case"position":e._position(d);break;case"resizable":var h=f.is(":data(resizable)");h&&!d&&f.resizable("destroy"),h&&typeof d=="string"&&f.resizable("option","handles",d),!h&&d!==!1&&e._makeResizable(d);break;case"title":a(".ui-dialog-title",e.uiDialogTitlebar).html(""+(d||"&#160;"))}a.Widget.prototype._setOption.apply(e,arguments)},_size:function(){var b=this.options,c,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),b.minWidth>b.width&&(b.width=b.minWidth),c=this.uiDialog.css({height:"auto",width:b.width}).height(),d=Math.max(0,b.minHeight-c);if(b.height==="auto")if(a.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();var f=this.element.css("height","auto").height();e||this.uiDialog.hide(),this.element.height(Math.max(f,d))}else this.element.height(Math.max(b.height-c,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),a.extend(a.ui.dialog,{version:"1.8.21",uuid:0,maxZ:0,getTitleId:function(a){var b=a.attr("id");return b||(this.uuid+=1,b=this.uuid),"ui-dialog-title-"+b},overlay:function(b){this.$el=a.ui.dialog.overlay.create(b)}}),a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(b){this.instances.length===0&&(setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return!1})},1),a(document).bind("keydown.dialog-overlay",function(c){b.options.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}),a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize));var c=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});return a.fn.bgiframe&&c.bgiframe(),this.instances.push(c),c},destroy:function(b){var c=a.inArray(b,this.instances);c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]),this.instances.length===0&&a([document,window]).unbind(".dialog-overlay"),b.remove();var d=0;a.each(this.instances,function(){d=Math.max(d,this.css("z-index"))}),this.maxZ=d},height:function(){var b,c;return a.browser.msie&&a.browser.version<7?(b=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),b<c?a(window).height()+"px":b+"px"):a(document).height()+"px"},width:function(){var b,c;return a.browser.msie?(b=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),b<c?a(window).width()+"px":b+"px"):a(document).width()+"px"},resize:function(){var b=a([]);a.each(a.ui.dialog.overlay.instances,function(){b=b.add(this)}),b.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}}),a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.slider.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(b.options.disabled)return;switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i),j===!1?!1:(this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a),a},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b),b;c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return Math.abs(c)*2>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.21"})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function e(){return++c}function f(){return++d}var c=0,d=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:!1,cookie:null,collapsible:!1,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(!0)},_setOption:function(a,b){if(a=="selected"){if(this.options.collapsible&&b==this.options.selected)return;this.select(b)}else this.options[a]=b,this._tabify()},_tabId:function(a){return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(a){return a.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(a,b){return{tab:a,panel:b,index:this.anchors.index(a)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function m(b,c){b.css("display",""),!a.support.opacity&&c.opacity&&b[0].style.removeAttribute("filter")}var d=this,e=this.options,f=/^#.+/;this.list=this.element.find("ol,ul").eq(0),this.lis=a(" > li:has(a[href])",this.list),this.anchors=this.lis.map(function(){return a("a",this)[0]}),this.panels=a([]),this.anchors.each(function(b,c){var g=a(c).attr("href"),h=g.split("#")[0],i;h&&(h===location.toString().split("#")[0]||(i=a("base")[0])&&h===i.href)&&(g=c.hash,c.href=g);if(f.test(g))d.panels=d.panels.add(d.element.find(d._sanitizeSelector(g)));else if(g&&g!=="#"){a.data(c,"href.tabs",g),a.data(c,"load.tabs",g.replace(/#.*$/,""));var j=d._tabId(c);c.href="#"+j;var k=d.element.find("#"+j);k.length||(k=a(e.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b-1]||d.list),k.data("destroy.tabs",!0)),d.panels=d.panels.add(k)}else e.disabled.push(b)}),c?(this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.lis.addClass("ui-state-default ui-corner-top"),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),e.selected===b?(location.hash&&this.anchors.each(function(a,b){if(b.hash==location.hash)return e.selected=a,!1}),typeof e.selected!="number"&&e.cookie&&(e.selected=parseInt(d._cookie(),10)),typeof e.selected!="number"&&this.lis.filter(".ui-tabs-selected").length&&(e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))),e.selected=e.selected||(this.lis.length?0:-1)):e.selected===null&&(e.selected=-1),e.selected=e.selected>=0&&this.anchors[e.selected]||e.selected<0?e.selected:0,e.disabled=a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(a,b){return d.lis.index(a)}))).sort(),a.inArray(e.selected,e.disabled)!=-1&&e.disabled.splice(a.inArray(e.selected,e.disabled),1),this.panels.addClass("ui-tabs-hide"),this.lis.removeClass("ui-tabs-selected ui-state-active"),e.selected>=0&&this.anchors.length&&(d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"),this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"),d.element.queue("tabs",function(){d._trigger("show",null,d._ui(d.anchors[e.selected],d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]))}),this.load(e.selected)),a(window).bind("unload",function(){d.lis.add(d.anchors).unbind(".tabs"),d.lis=d.anchors=d.panels=null})):e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected")),this.element[e.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible"),e.cookie&&this._cookie(e.selected,e.cookie);for(var g=0,h;h=this.lis[g];g++)a(h)[a.inArray(g,e.disabled)!=-1&&!a(h).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");e.cache===!1&&this.anchors.removeData("cache.tabs"),this.lis.add(this.anchors).unbind(".tabs");if(e.event!=="mouseover"){var i=function(a,b){b.is(":not(.ui-state-disabled)")&&b.addClass("ui-state-"+a)},j=function(a,b){b.removeClass("ui-state-"+a)};this.lis.bind("mouseover.tabs",function(){i("hover",a(this))}),this.lis.bind("mouseout.tabs",function(){j("hover",a(this))}),this.anchors.bind("focus.tabs",function(){i("focus",a(this).closest("li"))}),this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var k,l;e.fx&&(a.isArray(e.fx)?(k=e.fx[0],l=e.fx[1]):k=l=e.fx);var n=l?function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.hide().removeClass("ui-tabs-hide").animate(l,l.duration||"normal",function(){m(c,l),d._trigger("show",null,d._ui(b,c[0]))})}:function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.removeClass("ui-tabs-hide"),d._trigger("show",null,d._ui(b,c[0]))},o=k?function(a,b){b.animate(k,k.duration||"normal",function(){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),m(b,k),d.element.dequeue("tabs")})}:function(a,b,c){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),d.element.dequeue("tabs")};this.anchors.bind(e.event+".tabs",function(){var b=this,c=a(b).closest("li"),f=d.panels.filter(":not(.ui-tabs-hide)"),g=d.element.find(d._sanitizeSelector(b.hash));if(c.hasClass("ui-tabs-selected")&&!e.collapsible||c.hasClass("ui-state-disabled")||c.hasClass("ui-state-processing")||d.panels.filter(":animated").length||d._trigger("select",null,d._ui(this,g[0]))===!1)return this.blur(),!1;e.selected=d.anchors.index(this),d.abort();if(e.collapsible){if(c.hasClass("ui-tabs-selected"))return e.selected=-1,e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){o(b,f)}).dequeue("tabs"),this.blur(),!1;if(!f.length)return e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this)),this.blur(),!1}e.cookie&&d._cookie(e.selected,e.cookie);if(g.length)f.length&&d.element.queue("tabs",function(){o(b,f)}),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this));else throw"jQuery UI Tabs: Mismatching fragment identifier.";a.browser.msie&&this.blur()}),this.anchors.bind("click.tabs",function(){return!1})},_getIndex:function(a){return typeof a=="string"&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},destroy:function(){var b=this.options;return this.abort(),this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.anchors.each(function(){var b=a.data(this,"href.tabs");b&&(this.href=b);var c=a(this).unbind(".tabs");a.each(["href","load","cache"],function(a,b){c.removeData(b+".tabs")})}),this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}),b.cookie&&this._cookie(null,b.cookie),this},add:function(c,d,e){e===b&&(e=this.anchors.length);var f=this,g=this.options,h=a(g.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,d)),i=c.indexOf("#")?this._tabId(a("a",h)[0]):c.replace("#","");h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",!0);var j=f.element.find("#"+i);return j.length||(j=a(g.panelTemplate).attr("id",i).data("destroy.tabs",!0)),j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),e>=this.lis.length?(h.appendTo(this.list),j.appendTo(this.list[0].parentNode)):(h.insertBefore(this.lis[e]),j.insertBefore(this.panels[e])),g.disabled=a.map(g.disabled,function(a,b){return a>=e?++a:a}),this._tabify(),this.anchors.length==1&&(g.selected=0,h.addClass("ui-tabs-selected ui-state-active"),j.removeClass("ui-tabs-hide"),this.element.queue("tabs",function(){f._trigger("show",null,f._ui(f.anchors[0],f.panels[0]))}),this.load(0)),this._trigger("add",null,this._ui(this.anchors[e],this.panels[e])),this},remove:function(b){b=this._getIndex(b);var c=this.options,d=this.lis.eq(b).remove(),e=this.panels.eq(b).remove();return d.hasClass("ui-tabs-selected")&&this.anchors.length>1&&this.select(b+(b+1<this.anchors.length?1:-1)),c.disabled=a.map(a.grep(c.disabled,function(a,c){return a!=b}),function(a,c){return a>=b?--a:a}),this._tabify(),this._trigger("remove",null,this._ui(d.find("a")[0],e[0])),this},enable:function(b){b=this._getIndex(b);var c=this.options;if(a.inArray(b,c.disabled)==-1)return;return this.lis.eq(b).removeClass("ui-state-disabled"),c.disabled=a.grep(c.disabled,function(a,c){return a!=b}),this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b])),this},disable:function(a){a=this._getIndex(a);var b=this,c=this.options;return a!=c.selected&&(this.lis.eq(a).addClass("ui-state-disabled"),c.disabled.push(a),c.disabled.sort(),this._trigger("disable",null,this._ui(this.anchors[a],this.panels[a]))),this},select:function(a){a=this._getIndex(a);if(a==-1)if(this.options.collapsible&&this.options.selected!=-1)a=this.options.selected;else return this;return this.anchors.eq(a).trigger(this.options.event+".tabs"),this},load:function(b){b=this._getIndex(b);var c=this,d=this.options,e=this.anchors.eq(b)[0],f=a.data(e,"load.tabs");this.abort();if(!f||this.element.queue("tabs").length!==0&&a.data(e,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(b).addClass("ui-state-processing");if(d.spinner){var g=a("span",e);g.data("label.tabs",g.html()).html(d.spinner)}return this.xhr=a.ajax(a.extend({},d.ajaxOptions,{url:f,success:function(f,g){c.element.find(c._sanitizeSelector(e.hash)).html(f),c._cleanup(),d.cache&&a.data(e,"cache.tabs",!0),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.success(f,g)}catch(h){}},error:function(a,f,g){c._cleanup(),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.error(a,f,b,e)}catch(g){}}})),c.element.dequeue("tabs"),this},abort:function(){return this.element.queue([]),this.panels.stop(!1,!0),this.element.queue("tabs",this.element.queue("tabs").splice(-2,2)),this.xhr&&(this.xhr.abort(),delete this.xhr),this._cleanup(),this},url:function(a,b){return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs",b),this},length:function(){return this.anchors.length}}),a.extend(a.ui.tabs,{version:"1.8.21"}),a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(a,b){var c=this,d=this.options,e=c._rotate||(c._rotate=function(b){clearTimeout(c.rotation),c.rotation=setTimeout(function(){var a=d.selected;c.select(++a<c.anchors.length?a:0)},a),b&&b.stopPropagation()}),f=c._unrotate||(c._unrotate=b?function(a){e()}:function(a){a.clientX&&c.rotate(null)});return a?(this.element.bind("tabsshow",e),this.anchors.bind(d.event+".tabs",f),e()):(clearTimeout(c.rotation),this.element.unbind("tabsshow",e),this.anchors.unbind(d.event+".tabs",f),delete this._rotate,delete this._unrotate),this}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.datepicker.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);if(!c.length)return;c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);if($.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||!d.length)return;d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover")})}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}$.extend($.ui,{datepicker:{version:"1.8.21"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);if(c.hasClass(this.markerClassName))return;this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName))return;c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(d){$.datepicker.log(d)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a)return;var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a));var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+$(document).scrollLeft(),i=document.documentElement.clientHeight+$(document).scrollTop();return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!b||a&&b!=$.data(a,PROP_NAME))return;if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;var f=this._get(b,"onClose");f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!$.datepicker._curInst)return;var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);if(this._isDisabledDatepicker(d[0]))return;this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0]))return;var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;return c&&s++,c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;return r+=f[0].length,parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase())return f=c[0],r+=d.length,!1});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;do{var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}while(!0)}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;return c&&m++,c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;return c&&e++,c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal)return;var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', -"+i+", 'M');\""+' title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', +"+i+", 'M');\""+' title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+a.id+"');\""+">"+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+a.id+"',"+Y.getMonth()+","+Y.getFullYear()+', this);return false;"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" "+">";for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" "+">";for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return e=d&&e>d?d:e,e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.21",window["DP_jQuery_"+dpuuid]=$})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.progressbar.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove(),a.Widget.prototype.destroy.apply(this,arguments)},value:function(a){return a===b?this._value():(this._setOption("value",a),this)},_setOption:function(b,c){b==="value"&&(this.options.value=c,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;return typeof a!="number"&&(a=0),Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var a=this.value(),b=this._percentage();this.oldValue!==a&&(this.oldValue=a,this._trigger("change")),this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(b.toFixed(0)+"%"),this.element.attr("aria-valuenow",a)}}),a.extend(a.ui.progressbar,{version:"1.8.21"})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects||function(a,b){function c(b){var c;return b&&b.constructor==Array&&b.length==3?b:(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))?[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10)]:(c=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))?[parseFloat(c[1])*2.55,parseFloat(c[2])*2.55,parseFloat(c[3])*2.55]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:(c=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))?[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]:(c=/rgba\(0, 0, 0, 0\)/.exec(b))?e.transparent:e[a.trim(b).toLowerCase()]}function d(b,d){var e;do{e=a.curCSS(b,d);if(e!=""&&e!="transparent"||a.nodeName(b,"body"))break;d="backgroundColor"}while(b=b.parentNode);return c(e)}function h(){var a=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,b={},c,d;if(a&&a.length&&a[0]&&a[a[0]]){var e=a.length;while(e--)c=a[e],typeof a[c]=="string"&&(d=c.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b[d]=a[c])}else for(c in a)typeof a[c]=="string"&&(b[c]=a[c]);return b}function i(b){var c,d;for(c in b)d=b[c],(d==null||a.isFunction(d)||c in g||/scrollbar/.test(c)||!/color/i.test(c)&&isNaN(parseFloat(d)))&&delete b[c];return b}function j(a,b){var c={_:0},d;for(d in b)a[d]!=b[d]&&(c[d]=b[d]);return c}function k(b,c,d,e){typeof b=="object"&&(e=c,d=null,c=b,b=c.effect),a.isFunction(c)&&(e=c,d=null,c={});if(typeof c=="number"||a.fx.speeds[c])e=d,d=c,c={};return a.isFunction(d)&&(e=d,d=null),c=c||{},d=d||c.duration,d=a.fx.off?0:typeof d=="number"?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,e=e||c.complete,[b,c,d,e]}function l(b){return!b||typeof b=="number"||a.fx.speeds[b]?!0:typeof b=="string"&&!a.effects[b]?!0:!1}a.effects={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,e){a.fx.step[e]=function(a){a.colorInit||(a.start=d(a.elem,e),a.end=c(a.end),a.colorInit=!0),a.elem.style[e]="rgb("+Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2],10),255),0)+")"}});var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(b,c,d,e){return a.isFunction(d)&&(e=d,d=null),this.queue(function(){var g=a(this),k=g.attr("style")||" ",l=i(h.call(this)),m,n=g.attr("class")||"";a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),m=i(h.call(this)),g.attr("class",n),g.animate(j(l,m),{queue:!1,duration:c,easing:d,complete:function(){a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),typeof g.attr("style")=="object"?(g.attr("style").cssText="",g.attr("style").cssText=k):g.attr("style",k),e&&e.apply(this,arguments),a.dequeue(this)}})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}}),a.extend(a.effects,{version:"1.8.21",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data("ec.storage."+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data("ec.storage."+b[c]))},setMode:function(a,b){return b=="toggle"&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;try{e.id}catch(f){e=document.body}return b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),d.css(c).show()},removeWrapper:function(b){var c,d=document.activeElement;return b.parent().is(".ui-effects-wrapper")?(c=b.parent().replaceWith(b),(b[0]===d||a.contains(b[0],d))&&a(d).focus(),c):b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(b,c,d,e){var f=k.apply(this,arguments),g={options:f[1],duration:f[2],callback:f[3]},h=g.options.mode,i=a.effects[b];return a.fx.off||!i?h?this[h](g.duration,g.callback):this.each(function(){g.callback&&g.callback.call(this)}):i.call(this,g)},_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide:function(a){if(l(a))return this._hide.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="hide",this.effect.apply(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(l(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=k.apply(this,arguments);return c[1].mode="toggle",this.effect.apply(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}}),a.easing.jswing=a.easing.swing,a.extend(a.easing,{def:"easeOutQuad",swing:function(b,c,d,e,f){return a.easing[a.easing.def](b,c,d,e,f)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),e*(c/=f)*c*((g+1)*c-g)+d},easeOutBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),e*((c=c/f-1)*c*((g+1)*c+g)+1)+d},easeInOutBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),(c/=f/2)<1?e/2*c*c*(((g*=1.525)+1)*c-g)+d:e/2*((c-=2)*c*(((g*=1.525)+1)*c+g)+2)+d},easeInBounce:function(b,c,d,e,f){return e-a.easing.easeOutBounce(b,f-c,0,e,f)+d},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(b,c,d,e,f){return c<f/2?a.easing.easeInBounce(b,c*2,0,e,f)*.5+d:a.easing.easeOutBounce(b,c*2-f,0,e,f)*.5+e*.5+d}})}(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.blind.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.blind=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=f=="vertical"?"height":"width",i=f=="vertical"?g.height():g.width();e=="show"&&g.css(h,0);var j={};j[h]=e=="show"?i:0,g.animate(j,b.duration,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.bounce.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.bounce=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"up",g=b.options.distance||20,h=b.options.times||5,i=b.duration||250;/show|hide/.test(e)&&d.push("opacity"),a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",g=b.options.distance||(j=="top"?c.outerHeight({margin:!0})/3:c.outerWidth({margin:!0})/3);e=="show"&&c.css("opacity",0).css(j,k=="pos"?-g:g),e=="hide"&&(g=g/(h*2)),e!="hide"&&h--;if(e=="show"){var l={opacity:1};l[j]=(k=="pos"?"+=":"-=")+g,c.animate(l,i/2,b.options.easing),g=g/2,h--}for(var m=0;m<h;m++){var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing),g=e=="hide"?g*2:g/2}if(e=="hide"){var l={opacity:0};l[j]=(k=="pos"?"-=":"+=")+g,c.animate(l,i/2,b.options.easing,function(){c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}else{var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}c.queue("fx",function(){c.dequeue()}),c.dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.clip.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.clip=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","height","width"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=c[0].tagName=="IMG"?g:c,i={size:f=="vertical"?"height":"width",position:f=="vertical"?"top":"left"},j=f=="vertical"?h.height():h.width();e=="show"&&(h.css(i.size,0),h.css(i.position,j/2));var k={};k[i.size]=e=="show"?j:0,k[i.position]=e=="show"?0:j/2,h.animate(k,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.drop.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.drop=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","opacity"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight({margin:!0})/2:c.outerWidth({margin:!0})/2);e=="show"&&c.css("opacity",0).css(g,h=="pos"?-i:i);var j={opacity:e=="show"?1:0};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.explode.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.explode=function(b){return this.queue(function(){var c=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3,d=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":b.options.mode;var e=a(this).show().css("visibility","hidden"),f=e.offset();f.top-=parseInt(e.css("marginTop"),10)||0,f.left-=parseInt(e.css("marginLeft"),10)||0;var g=e.outerWidth(!0),h=e.outerHeight(!0);for(var i=0;i<c;i++)for(var j=0;j<d;j++)e.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(g/d),top:-i*(h/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/d,height:h/c,left:f.left+j*(g/d)+(b.options.mode=="show"?(j-Math.floor(d/2))*(g/d):0),top:f.top+i*(h/c)+(b.options.mode=="show"?(i-Math.floor(c/2))*(h/c):0),opacity:b.options.mode=="show"?0:1}).animate({left:f.left+j*(g/d)+(b.options.mode=="show"?0:(j-Math.floor(d/2))*(g/d)),top:f.top+i*(h/c)+(b.options.mode=="show"?0:(i-Math.floor(c/2))*(h/c)),opacity:b.options.mode=="show"?1:0},b.duration||500);setTimeout(function(){b.options.mode=="show"?e.css({visibility:"visible"}):e.css({visibility:"visible"}).hide(),b.callback&&b.callback.apply(e[0]),e.dequeue(),a("div.ui-effects-explode").remove()},b.duration||500)})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fade.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.fade=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide");c.animate({opacity:d},{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fold.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.fold=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.size||15,g=!!b.options.horizFirst,h=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(c,d),c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"}),j=e=="show"!=g,k=j?["width","height"]:["height","width"],l=j?[i.width(),i.height()]:[i.height(),i.width()],m=/([0-9]+)%/.exec(f);m&&(f=parseInt(m[1],10)/100*l[e=="hide"?0:1]),e=="show"&&i.css(g?{height:0,width:f}:{height:f,width:0});var n={},p={};n[k[0]]=e=="show"?l[0]:f,p[k[1]]=e=="show"?l[1]:0,i.animate(n,h,b.options.easing).animate(p,h,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.highlight.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.highlight=function(b){return this.queue(function(){var c=a(this),d=["backgroundImage","backgroundColor","opacity"],e=a.effects.setMode(c,b.options.mode||"show"),f={backgroundColor:c.css("backgroundColor")};e=="hide"&&(f.opacity=0),a.effects.save(c,d),c.show().css({backgroundImage:"none",backgroundColor:b.options.color||"#ffff99"}).animate(f,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),e=="show"&&!a.support.opacity&&this.style.removeAttribute("filter"),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.pulsate.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.pulsate=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"show"),e=(b.options.times||5)*2-1,f=b.duration?b.duration/2:a.fx.speeds._default/2,g=c.is(":visible"),h=0;g||(c.css("opacity",0).show(),h=1),(d=="hide"&&g||d=="show"&&!g)&&e--;for(var i=0;i<e;i++)c.animate({opacity:h},f,b.options.easing),h=(h+1)%2;c.animate({opacity:h},f,b.options.easing,function(){h==0&&c.hide(),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}).dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.scale.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.puff=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide"),e=parseInt(b.options.percent,10)||150,f=e/100,g={height:c.height(),width:c.width()};a.extend(b.options,{fade:!0,mode:d,percent:d=="hide"?e:100,from:d=="hide"?g:{height:g.height*f,width:g.width*f}}),c.effect("scale",b.options,b.duration,b.callback),c.dequeue()})},a.effects.scale=function(b){return this.queue(function(){var c=a(this),d=a.extend(!0,{},b.options),e=a.effects.setMode(c,b.options.mode||"effect"),f=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:e=="hide"?0:100),g=b.options.direction||"both",h=b.options.origin;e!="effect"&&(d.origin=h||["middle","center"],d.restore=!0);var i={height:c.height(),width:c.width()};c.from=b.options.from||(e=="show"?{height:0,width:0}:i);var j={y:g!="horizontal"?f/100:1,x:g!="vertical"?f/100:1};c.to={height:i.height*j.y,width:i.width*j.x},b.options.fade&&(e=="show"&&(c.from.opacity=0,c.to.opacity=1),e=="hide"&&(c.from.opacity=1,c.to.opacity=0)),d.from=c.from,d.to=c.to,d.mode=e,c.effect("size",d,b.duration,b.callback),c.dequeue()})},a.effects.size=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","width","height","overflow","opacity"],e=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],g=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],i=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],j=a.effects.setMode(c,b.options.mode||"effect"),k=b.options.restore||!1,l=b.options.scale||"both",m=b.options.origin,n={height:c.height(),width:c.width()};c.from=b.options.from||n,c.to=b.options.to||n;if(m){var p=a.effects.getBaseline(m,n);c.from.top=(n.height-c.from.height)*p.y,c.from.left=(n.width-c.from.width)*p.x,c.to.top=(n.height-c.to.height)*p.y,c.to.left=(n.width-c.to.width)*p.x}var q={from:{y:c.from.height/n.height,x:c.from.width/n.width},to:{y:c.to.height/n.height,x:c.to.width/n.width}};if(l=="box"||l=="both")q.from.y!=q.to.y&&(d=d.concat(h),c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(d=d.concat(i),c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to));(l=="content"||l=="both")&&q.from.y!=q.to.y&&(d=d.concat(g),c.from=a.effects.setTransition(c,g,q.from.y,c.from),c.to=a.effects.setTransition(c,g,q.to.y,c.to)),a.effects.save(c,k?d:e),c.show(),a.effects.createWrapper(c),c.css("overflow","hidden").css(c.from);if(l=="content"||l=="both")h=h.concat(["marginTop","marginBottom"]).concat(g),i=i.concat(["marginLeft","marginRight"]),f=d.concat(h).concat(i),c.find("*[width]").each(function(){var c=a(this);k&&a.effects.save(c,f);var d={height:c.height(),width:c.width()};c.from={height:d.height*q.from.y,width:d.width*q.from.x},c.to={height:d.height*q.to.y,width:d.width*q.to.x},q.from.y!=q.to.y&&(c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to)),c.css(c.from),c.animate(c.to,b.duration,b.options.easing,function(){k&&a.effects.restore(c,f)})});c.animate(c.to,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){c.to.opacity===0&&c.css("opacity",c.from.opacity),j=="hide"&&c.hide(),a.effects.restore(c,k?d:e),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.shake.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.shake=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"left",g=b.options.distance||20,h=b.options.times||3,i=b.duration||b.options.duration||140;a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",l={},m={},n={};l[j]=(k=="pos"?"-=":"+=")+g,m[j]=(k=="pos"?"+=":"-=")+g*2,n[j]=(k=="pos"?"-=":"+=")+g*2,c.animate(l,i,b.options.easing);for(var p=1;p<h;p++)c.animate(m,i,b.options.easing).animate(n,i,b.options.easing);c.animate(m,i,b.options.easing).animate(l,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}),c.dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.slide.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.slide=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"show"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c).css({overflow:"hidden"});var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight({margin:!0}):c.outerWidth({margin:!0}));e=="show"&&c.css(g,h=="pos"?isNaN(i)?"-"+i:-i:i);var j={};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.transfer.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.transfer=function(b){return this.queue(function(){var c=a(this),d=a(b.options.to),e=d.offset(),f={top:e.top,left:e.left,height:d.innerHeight(),width:d.innerWidth()},g=c.offset(),h=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:g.top,left:g.left,height:c.innerHeight(),width:c.innerWidth(),position:"absolute"}).animate(f,b.duration,b.options.easing,function(){h.remove(),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;;
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function (root, factory) {
  if (typeof exports === "object" && exports) {
    factory(exports); // CommonJS
  } else {
    var mustache = {};
    factory(mustache);
    if (typeof define === "function" && define.amd) {
      define(mustache); // AMD
    } else {
      root.Mustache = mustache; // <script>
    }
  }
}(this, function (mustache) {

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var RegExp_test = RegExp.prototype.test;
  function testRegExp(re, string) {
    return RegExp_test.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var Object_toString = Object.prototype.toString;
  var isArray = Array.isArray || function (object) {
    return Object_toString.call(object) === '[object Array]';
  };

  function isFunction(object) {
    return typeof object === 'function';
  }

  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function escapeTags(tags) {
    if (!isArray(tags) || tags.length !== 2) {
      throw new Error('Invalid tags: ' + tags);
    }

    return [
      new RegExp(escapeRegExp(tags[0]) + "\\s*"),
      new RegExp("\\s*" + escapeRegExp(tags[1]))
    ];
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate(template, tags) {
    tags = tags || mustache.tags;
    template = template || '';

    if (typeof tags === 'string') {
      tags = tags.split(spaceRe);
    }

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          delete tokens[spaces.pop()];
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(tagRes[0]);
      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(['text', chr, start, start + 1]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n') {
            stripSpace();
          }
        }
      }

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) break;
      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === '{') {
        value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
        type = '&';
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) {
        throw new Error('Unclosed tag at ' + scanner.pos);
      }

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection) {
          throw new Error('Unopened section "' + value + '" at ' + start);
        }
        if (openSection[1] !== value) {
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
        }
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        tagRes = escapeTags(tags = value.split(spaceRe));
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();
    if (openSection) {
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
    }

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      var string = match[0];
      this.tail = this.tail.substring(string.length);
      this.pos += string.length;
      return string;
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var index = this.tail.search(re), match;

    switch (index) {
    case -1:
      match = this.tail;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context(view, parentContext) {
    this.view = view == null ? {} : view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function (name) {
    var value;
    if (name in this.cache) {
      value = this.cache[name];
    } else {
      var context = this;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;

          var names = name.split('.'), i = 0;
          while (value != null && i < names.length) {
            value = value[names[i++]];
          }
        } else {
          value = context.view[name];
        }

        if (value != null) break;

        context = context.parent;
      }

      this.cache[name] = value;
    }

    if (isFunction(value)) {
      value = value.call(this.view);
    }

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer() {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null) {
      tokens = cache[template] = parseTemplate(template, tags);
    }

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function (tokens, context, partials, originalTemplate) {
    var buffer = '';

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    var self = this;
    function subRender(template) {
      return self.render(template, context, partials);
    }

    var token, value;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
        value = context.lookup(token[1]);
        if (!value) continue;

        if (isArray(value)) {
          for (var j = 0, jlen = value.length; j < jlen; ++j) {
            buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
          }
        } else if (typeof value === 'object' || typeof value === 'string') {
          buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
        } else if (isFunction(value)) {
          if (typeof originalTemplate !== 'string') {
            throw new Error('Cannot use higher-order sections without the original template');
          }

          // Extract the portion of the original template that the section contains.
          value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

          if (value != null) buffer += value;
        } else {
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        }

        break;
      case '^':
        value = context.lookup(token[1]);

        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if (!value || (isArray(value) && value.length === 0)) {
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        }

        break;
      case '>':
        if (!partials) continue;
        value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if (value != null) buffer += this.renderTokens(this.parse(value), context, partials, value);
        break;
      case '&':
        value = context.lookup(token[1]);
        if (value != null) buffer += value;
        break;
      case 'name':
        value = context.lookup(token[1]);
        if (value != null) buffer += mustache.escape(value);
        break;
      case 'text':
        buffer += token[1];
        break;
      }
    }

    return buffer;
  };

  mustache.name = "mustache.js";
  mustache.version = "0.8.1";
  mustache.tags = [ "{{", "}}" ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  mustache.to_html = function (template, view, partials, send) {
    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));
;

$(document).ready(function() {
  if (!$('#admin-menu').length) {
    return;
  }

  // Apply margin-top if enabled; directly applying marginTop doesn't work in IE.
  if (Drupal && Drupal.settings && Drupal.settings.admin_menu) {
    if (Drupal.settings.admin_menu.margin_top) {
      $('body').addClass('admin-menu');
    }
    if (Drupal.settings.admin_menu.position_fixed) {
      $('#admin-menu').css('position', 'fixed');
    }
    // Move page tabs into administration menu.
    if (Drupal.settings.admin_menu.tweak_tabs) {
      $('ul.tabs.primary li').each(function() {
        $(this).addClass('admin-menu-tab').appendTo('#admin-menu > ul');
      });
      $('ul.tabs.secondary').appendTo('#admin-menu > ul > li.admin-menu-tab.active').removeClass('secondary');
    }
    // Collapse fieldsets on Modules page. For why multiple selectors see #111719.
    if (Drupal.settings.admin_menu.tweak_modules) {
      $('#system-modules fieldset:not(.collapsed), #system-modules-1 fieldset:not(.collapsed)').addClass('collapsed');
    }
  }

  // Hover emulation for IE 6.
  if ($.browser.msie && parseInt(jQuery.browser.version) == 6) {
    $('#admin-menu li').hover(function() {
      $(this).addClass('iehover');
    }, function() {
      $(this).removeClass('iehover');
    });
  }

  // Delayed mouseout.
  $('#admin-menu li').hover(function() {
    // Stop the timer.
    clearTimeout(this.sfTimer);
    // Display child lists.
    $('> ul', this).css({left: 'auto', display: 'block'})
      // Immediately hide nephew lists.
      .parent().siblings('li').children('ul').css({left: '-999em', display: 'none'});
  }, function() {
    // Start the timer.
    var uls = $('> ul', this);
    this.sfTimer = setTimeout(function() {
      uls.css({left: '-999em', display: 'none'});
    }, 400);
  });
});
;
/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);
;
/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2011 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license) 
	Version: 1.3
*/
(function(a){var b=(a.browser.msie?"paste":"input")+".mask",c=window.orientation!=undefined;a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn"},a.fn.extend({caret:function(a,b){if(this.length!=0){if(typeof a=="number"){b=typeof b=="number"?b:a;return this.each(function(){if(this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}})}if(this[0].setSelectionRange)a=this[0].selectionStart,b=this[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}},unmask:function(){return this.trigger("unmask")},mask:function(d,e){if(!d&&this.length>0){var f=a(this[0]);return f.data(a.mask.dataName)()}e=a.extend({placeholder:"_",completed:null},e);var g=a.mask.definitions,h=[],i=d.length,j=null,k=d.length;a.each(d.split(""),function(a,b){b=="?"?(k--,i=a):g[b]?(h.push(new RegExp(g[b])),j==null&&(j=h.length-1)):h.push(null)});return this.trigger("unmask").each(function(){function v(a){var b=f.val(),c=-1;for(var d=0,g=0;d<k;d++)if(h[d]){l[d]=e.placeholder;while(g++<b.length){var m=b.charAt(g-1);if(h[d].test(m)){l[d]=m,c=d;break}}if(g>b.length)break}else l[d]==b.charAt(g)&&d!=i&&(g++,c=d);if(!a&&c+1<i)f.val(""),t(0,k);else if(a||c+1>=i)u(),a||f.val(f.val().substring(0,c+1));return i?d:j}function u(){return f.val(l.join("")).val()}function t(a,b){for(var c=a;c<b&&c<k;c++)h[c]&&(l[c]=e.placeholder)}function s(a){var b=a.which,c=f.caret();if(a.ctrlKey||a.altKey||a.metaKey||b<32)return!0;if(b){c.end-c.begin!=0&&(t(c.begin,c.end),p(c.begin,c.end-1));var d=n(c.begin-1);if(d<k){var g=String.fromCharCode(b);if(h[d].test(g)){q(d),l[d]=g,u();var i=n(d);f.caret(i),e.completed&&i>=k&&e.completed.call(f)}}return!1}}function r(a){var b=a.which;if(b==8||b==46||c&&b==127){var d=f.caret(),e=d.begin,g=d.end;g-e==0&&(e=b!=46?o(e):g=n(e-1),g=b==46?n(g):g),t(e,g),p(e,g-1);return!1}if(b==27){f.val(m),f.caret(0,v());return!1}}function q(a){for(var b=a,c=e.placeholder;b<k;b++)if(h[b]){var d=n(b),f=l[b];l[b]=c;if(d<k&&h[d].test(f))c=f;else break}}function p(a,b){if(!(a<0)){for(var c=a,d=n(b);c<k;c++)if(h[c]){if(d<k&&h[c].test(l[d]))l[c]=l[d],l[d]=e.placeholder;else break;d=n(d)}u(),f.caret(Math.max(j,a))}}function o(a){while(--a>=0&&!h[a]);return a}function n(a){while(++a<=k&&!h[a]);return a}var f=a(this),l=a.map(d.split(""),function(a,b){if(a!="?")return g[a]?e.placeholder:a}),m=f.val();f.data(a.mask.dataName,function(){return a.map(l,function(a,b){return h[b]&&a!=e.placeholder?a:null}).join("")}),f.attr("readonly")||f.one("unmask",function(){f.unbind(".mask").removeData(a.mask.dataName)}).bind("focus.mask",function(){m=f.val();var b=v();u();var c=function(){b==d.length?f.caret(0,b):f.caret(b)};(a.browser.msie?c:function(){setTimeout(c,0)})()}).bind("blur.mask",function(){v(),f.val()!=m&&f.change()}).bind("keydown.mask",r).bind("keypress.mask",s).bind(b,function(){setTimeout(function(){f.caret(v(!0))},0)}),v()})}})})(jQuery);
/*! Copyright 2012, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.0.10
*
* Requires: jQuery 1.2.3 ~ 1.8.0
*/
;( function ( $ ){
  $.fn.extend({
    actual : function ( method, options ){
      // check if the jQuery method exist
      if( !this[ method ]){
        throw '$.actual => The jQuery method "' + method + '" you called does not exist';
      }

      var defaults = {
        absolute      : false,
        clone         : false,
        includeMargin : false
      };

      var configs = $.extend( defaults, options );

      var $target = this;
      var fix, restore;

      if( configs.clone === true ){
        fix = function (){
          var style = 'position: absolute !important; top: -1000 !important; ';

          // this is useful with css3pie
          $target = $target.
            filter( ':first' ).
            clone().
            attr( 'style', style ).
            appendTo( 'body' );
        };

        restore = function (){
          // remove DOM element after getting the width
          $target.remove();
        };
      }else{
        var tmp = [];
        var $hidden, style;

        fix = function (){
          // get all hidden parents
          $hidden = $target.
            parents().
            andSelf().
            filter( ':hidden' );

          style += 'visibility: hidden !important; display: block !important; ';

          if( configs.absolute === true ) style += 'position: absolute !important; ';

          // save the origin style props
          // set the hidden el css to be got the actual value later
          $hidden.each( function (){
            var $this = $( this );

            // Save original style. If no style was set, attr() returns undefined
            tmp.push( $this.attr( 'style' ));
            $this.attr( 'style', style );
          });
        };

        restore = function (){
          // restore origin style values
          $hidden.each( function ( i ){
            var $this = $( this );
            var _tmp  = tmp[ i ];

            if( _tmp === undefined ){
              $this.removeAttr( 'style' );
            }else{
              $this.attr( 'style', _tmp );
            }
          });
        };
      }

      fix();
      // get the actual value with user specific methed
      // it can be 'width', 'height', 'outerWidth', 'innerWidth'... etc
      // configs.includeMargin only works for 'outerWidth' and 'outerHeight'
      var actual = /(outer)/g.test( method ) ?
        $target[ method ]( configs.includeMargin ) :
        $target[ method ]();

      restore();
      // IMPORTANT, this plugin only return the value of the first element
      return actual;
    }
  });
})( jQuery );;
/*! jQuery Placeholder Plugin - v0.6.0 - 2012-06-06
* http://andrew-jones.com/jquery-placeholder-plugin
* Copyright (c) 2012 Andrew Jones; Licensed MIT */

(function($) {
  "use strict";

  $.extend({
    placeholder : {
      settings : {
        focusClass: 'placeholderFocus',
        activeClass: 'placeholder',
        overrideSupport: false,
        preventRefreshIssues: true
      }
    }

  });

  // check browser support for placeholder
  $.support.placeholder = 'placeholder' in document.createElement('input');

  // Replace the val function to never return placeholders
  $.fn.plVal = $.fn.val;
  $.fn.val = function(value) {
    if(this[0]) {
      var el = $(this[0]);
      if(value !== undefined)
      {
        var currentValue = el.plVal();
        var returnValue = $(this).plVal(value);
        if(el.hasClass($.placeholder.settings.activeClass) && currentValue === el.attr('placeholder')){
          el.removeClass($.placeholder.settings.activeClass);
        }
        return returnValue;
      }

      if(el.hasClass($.placeholder.settings.activeClass) && el.plVal() === el.attr('placeholder')) {
        return '';
      } else {
        return el.plVal();
      }
    }
    return undefined;
  };

  // Clear placeholder values upon page reload
  $(window).bind('beforeunload.placeholder', function() {
    var els = $('input.' + $.placeholder.settings.activeClass);
    if(els.length > 0){
      els.val('').attr('autocomplete','off');
    }
  });


  // plugin code
  $.fn.placeholder = function(opts) {
    opts = $.extend({},$.placeholder.settings, opts);

    // we don't have to do anything if the browser supports placeholder
    if(!opts.overrideSupport && $.support.placeholder){
      return this;
    }
      
    return this.each(function() {
      var $el = $(this);

      // skip if we do not have the placeholder attribute
      if(!$el.is('[placeholder]')){
        return;
      }

      // we cannot do password fields, but supported browsers can
      if($el.is(':password')){
        return;
      }
      
      // Prevent values from being reapplied on refresh
      if(opts.preventRefreshIssues){
        $el.attr('autocomplete','off');
      }

      $el.bind('focus.placeholder', function(){
        var $el = $(this);
        if(this.value === $el.attr('placeholder') && $el.hasClass(opts.activeClass)){
          $el.val('')
             .removeClass(opts.activeClass)
             .addClass(opts.focusClass);
        }
      });

      $el.bind('blur.placeholder', function(){
        var $el = $(this);

        $el.removeClass(opts.focusClass);

        if(this.value === ''){
          $el.val($el.attr('placeholder'))
             .addClass(opts.activeClass);
        }
      });

      $el.triggerHandler('blur');

      // Prevent incorrect form values being posted
      $el.parents('form').submit(function(){
        $el.triggerHandler('focus.placeholder');
      });

    });
  };
}(jQuery));;
(function($,window){'$:nomunge';var undefined,aps=Array.prototype.slice,decode=decodeURIComponent,jq_param=$.param,jq_param_sorted,jq_param_fragment,jq_deparam,jq_deparam_fragment,jq_bbq=$.bbq=$.bbq||{},jq_bbq_pushState,jq_bbq_getState,jq_elemUrlAttr,special=$.event.special,str_hashchange='hashchange',str_querystring='querystring',str_fragment='fragment',str_elemUrlAttr='elemUrlAttr',str_href='href',str_src='src',re_params_querystring=/^.*\?|#.*$/g,re_params_fragment,re_fragment,re_no_escape,ajax_crawlable,fragment_prefix,elemUrlAttr_cache={};function is_string(arg){return typeof arg==='string'};function curry(func){var args=aps.call(arguments,1);return function(){return func.apply(this,args.concat(aps.call(arguments)))}};function get_fragment(url){return url.replace(re_fragment,'$2')};function get_querystring(url){return url.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,'$1')};function jq_param_sub(is_fragment,get_func,url,params,merge_mode){var result,qs,matches,url_params,hash;if(params!==undefined){matches=url.match(is_fragment?re_fragment:/^([^#?]*)\??([^#]*)(#?.*)/);hash=matches[3]||'';if(merge_mode===2&&is_string(params)){qs=params.replace(is_fragment?re_params_fragment:re_params_querystring,'')}else{url_params=jq_deparam(matches[2]);params=is_string(params)?jq_deparam[is_fragment?str_fragment:str_querystring](params):params;qs=merge_mode===2?params:merge_mode===1?$.extend({},params,url_params):$.extend({},url_params,params);qs=jq_param_sorted(qs);if(is_fragment){qs=qs.replace(re_no_escape,decode)}}result=matches[1]+(is_fragment?fragment_prefix:qs||!matches[1]?'?':'')+qs+hash}else{result=get_func(url!==undefined?url:location.href)}result=result.replace('=&','&');return result};jq_param[str_querystring]=curry(jq_param_sub,0,get_querystring);jq_param[str_fragment]=jq_param_fragment=curry(jq_param_sub,1,get_fragment);jq_param.sorted=jq_param_sorted=function(a,traditional){var arr=[],obj={};$.each(jq_param(a,traditional).split('&'),function(i,v){var key=v.replace(/(?:%5B|=).*$/,''),key_obj=obj[key];if(!key_obj){key_obj=obj[key]=[];arr.push(key)}key_obj.push(v)});return $.map(arr.sort(),function(v){return obj[v]}).join('&')};jq_param_fragment.noEscape=function(chars){chars=chars||'';var arr=$.map(chars.split(''),encodeURIComponent);re_no_escape=new RegExp(arr.join('|'),'g')};jq_param_fragment.noEscape(',/');jq_param_fragment.ajaxCrawlable=function(state){if(state!==undefined){if(state){re_params_fragment=/^.*(?:#!|#)/;re_fragment=/^([^#]*)(?:#!|#)?(.*)$/;fragment_prefix='#!'}else{re_params_fragment=/^.*#/;re_fragment=/^([^#]*)#?(.*)$/;fragment_prefix='#'}ajax_crawlable=!!state}return ajax_crawlable};jq_param_fragment.ajaxCrawlable(0);$.deparam=jq_deparam=function(params,coerce){var obj={},coerce_types={'true':!0,'false':!1,'null':null};$.each(params.replace(/\+/g,' ').split('&'),function(j,v){var param=v.split('='),key=decode(param[0]),val,cur=obj,i=0,keys=key.split(']['),keys_last=keys.length-1;if(/\[/.test(keys[0])&&/\]$/.test(keys[keys_last])){keys[keys_last]=keys[keys_last].replace(/\]$/,'');keys=keys.shift().split('[').concat(keys);keys_last=keys.length-1}else{keys_last=0}if(param.length===2){val=decode(param[1]);if(coerce){val=val&&!isNaN(val)?+val:val==='undefined'?undefined:coerce_types[val]!==undefined?coerce_types[val]:val}if(keys_last){for(;i<=keys_last;i++){key=keys[i]===''?cur.length:keys[i];cur=cur[key]=i<keys_last?cur[key]||(keys[i+1]&&isNaN(keys[i+1])?{}:[]):val}}else{if($.isArray(obj[key])){obj[key].push(val)}else if(obj[key]!==undefined){obj[key]=[obj[key],val]}else{obj[key]=val}}}else if(key){obj[key]=coerce?undefined:''}});return obj};function jq_deparam_sub(is_fragment,url_or_params,coerce){if(url_or_params===undefined||typeof url_or_params==='boolean'){coerce=url_or_params;url_or_params=jq_param[is_fragment?str_fragment:str_querystring]()}else{url_or_params=is_string(url_or_params)?url_or_params.replace(is_fragment?re_params_fragment:re_params_querystring,''):url_or_params}return jq_deparam(url_or_params,coerce)};jq_deparam[str_querystring]=curry(jq_deparam_sub,0);jq_deparam[str_fragment]=jq_deparam_fragment=curry(jq_deparam_sub,1);$[str_elemUrlAttr]||($[str_elemUrlAttr]=function(obj){return $.extend(elemUrlAttr_cache,obj)})({a:str_href,base:str_href,iframe:str_src,img:str_src,input:str_src,form:'action',link:str_href,script:str_src});jq_elemUrlAttr=$[str_elemUrlAttr];function jq_fn_sub(mode,force_attr,params,merge_mode){if(!is_string(params)&&typeof params!=='object'){merge_mode=params;params=force_attr;force_attr=undefined}return this.each(function(){var that=$(this),attr=force_attr||jq_elemUrlAttr()[(this.nodeName||'').toLowerCase()]||'',url=attr&&that.attr(attr)||'';that.attr(attr,jq_param[mode](url,params,merge_mode))})};$.fn[str_querystring]=curry(jq_fn_sub,str_querystring);$.fn[str_fragment]=curry(jq_fn_sub,str_fragment);jq_bbq.pushState=jq_bbq_pushState=function(params,merge_mode){if(is_string(params)&&/^#/.test(params)&&merge_mode===undefined){merge_mode=2}var has_args=params!==undefined,url=jq_param_fragment(location.href,has_args?params:{},has_args?merge_mode:2);location.href=url};jq_bbq.getState=jq_bbq_getState=function(key,coerce){return key===undefined||typeof key==='boolean'?jq_deparam_fragment(key):jq_deparam_fragment(coerce)[key]};jq_bbq.removeState=function(arr){var state={};if(arr!==undefined){state=jq_bbq_getState();$.each($.isArray(arr)?arr:arguments,function(i,v){delete state[v]})}jq_bbq_pushState(state,2)};special[str_hashchange]=$.extend(special[str_hashchange],{add:function(handleObj){var old_handler;function new_handler(e){var hash=e[str_fragment]=jq_param_fragment();e.getState=function(key,coerce){return key===undefined||typeof key==='boolean'?jq_deparam(hash,key):jq_deparam(hash,coerce)[key]};old_handler.apply(this,arguments)};if($.isFunction(handleObj)){old_handler=handleObj;return new_handler}else{old_handler=handleObj.handler;handleObj.handler=new_handler}}})})(jQuery,this);(function($,window,undefined){'$:nomunge';var str_hashchange='hashchange',doc=document,fake_onhashchange,special=$.event.special,doc_mode=doc.documentMode,supports_onhashchange='on'+str_hashchange in window&&(doc_mode===undefined||doc_mode>7);function get_fragment(url){url=url||location.href;return'#'+url.replace(/^[^#]*#?(.*)$/,'$1')};$.fn[str_hashchange]=function(fn){return fn?this.bind(str_hashchange,fn):this.trigger(str_hashchange)};$.fn[str_hashchange].delay=50;special[str_hashchange]=$.extend(special[str_hashchange],{setup:function(){if(supports_onhashchange){return false}$(fake_onhashchange.start)},teardown:function(){if(supports_onhashchange){return false}$(fake_onhashchange.stop)}});fake_onhashchange=(function(){var self={},timeout_id,last_hash=get_fragment(),fn_retval=function(val){return val},history_set=fn_retval,history_get=fn_retval;self.start=function(){timeout_id||poll()};self.stop=function(){timeout_id&&clearTimeout(timeout_id);timeout_id=undefined};function poll(){var hash=get_fragment(),history_hash=history_get(last_hash);if(hash!==last_hash){history_set(last_hash=hash,history_hash);$(window).trigger(str_hashchange)}else if(history_hash!==last_hash){location.href=location.href.replace(/#.*/,'')+history_hash}timeout_id=setTimeout(poll,$.fn[str_hashchange].delay)};$.browser.msie&&!supports_onhashchange&&(function(){var iframe,iframe_src;self.start=function(){if(!iframe){iframe_src=$.fn[str_hashchange].src;iframe_src=iframe_src&&iframe_src+get_fragment();iframe=$('<iframe tabindex="-1" title="empty"/>').hide().one('load',function(){iframe_src||history_set(get_fragment());poll()}).attr('src',iframe_src||'javascript:0').insertAfter('body')[0].contentWindow;doc.onpropertychange=function(){try{if(event.propertyName==='title'){iframe.document.title=doc.title}}catch(e){}}}};self.stop=fn_retval;history_get=function(){return get_fragment(iframe.location.href)};history_set=function(hash,history_hash){var iframe_doc=iframe.document,domain=$.fn[str_hashchange].domain;if(hash!==history_hash){iframe_doc.title=doc.title;iframe_doc.open();domain&&iframe_doc.write('<script>document.domain="'+domain+'"</script>');iframe_doc.close();iframe.location.hash=hash}}})();return self})()})(jQuery,this);;
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);;
(function($){$.widget("ui.multiselect",{options:{sortable:false,searchable:true,doubleClickable:true,animated:'fast',show:'slideDown',hide:'slideUp',dividerLocation:0.6,nodeComparator:function(node1,node2){var text1=node1.text(),text2=node2.text();return text1==text2?0:(text1<text2?-1:1)}},_create:function(){this.element.hide();this.id=this.element.attr("id");this.container=$('<div class="ui-multiselect ui-helper-clearfix ui-widget"></div>').insertAfter(this.element);this.count=0;this.selectedContainer=$('<div class="selected"></div>').appendTo(this.container);this.availableContainer=$('<div class="available"></div>').appendTo(this.container);this.selectedActions=$('<div class="actions ui-widget-header ui-helper-clearfix"><span class="count">0 '+$.ui.multiselect.locale.itemsCount+'</span><a href="#" class="remove-all">'+$.ui.multiselect.locale.removeAll+'</a></div>').appendTo(this.selectedContainer);this.availableActions=$('<div class="actions ui-widget-header ui-helper-clearfix"><label class="search-label">Search</label> <input type="text" class="search empty ui-widget-content ui-corner-all"/><!-- <a href="#" class="add-all">'+$.ui.multiselect.locale.addAll+'</a> --></div>').appendTo(this.availableContainer);this.selectedList=$('<ul class="selected connected-list"><li class="ui-helper-hidden-accessible"></li></ul>').bind('selectstart',function(){return false}).appendTo(this.selectedContainer);this.availableList=$('<ul class="available connected-list"><li class="ui-helper-hidden-accessible"></li></ul>').bind('selectstart',function(){return false}).appendTo(this.availableContainer);var that=this;this.container.width(this.element.width()+1);this.selectedContainer.width(Math.floor(this.element.width()*this.options.dividerLocation));this.availableContainer.width(Math.floor(this.element.width()*(1-this.options.dividerLocation)));this.selectedList.height(Math.max(this.element.height()-this.selectedActions.height(),1));this.availableList.height(Math.max(this.element.height()-this.availableActions.height(),1));if(!this.options.animated){this.options.show='show';this.options.hide='hide'}this._populateLists(this.element.find('option'));if(this.options.sortable){this.selectedList.sortable({placeholder:'ui-state-highlight',axis:'y',update:function(event,ui){that.selectedList.find('li').each(function(){if($(this).data('optionLink'))$(this).data('optionLink').remove().appendTo(that.element)})},receive:function(event,ui){ui.item.data('optionLink').attr('selected',true);that.count+=1;that._updateCount();that.selectedList.children('.ui-draggable').each(function(){$(this).removeClass('ui-draggable');$(this).data('optionLink',ui.item.data('optionLink'));$(this).data('idx',ui.item.data('idx'));that._applyItemState($(this),true)});setTimeout(function(){ui.item.remove()},1)}})}if(this.options.searchable){this._registerSearchEvents(this.availableContainer.find('input.search'))}else{$('.search').hide()}this.container.find(".remove-all").click(function(){that._populateLists(that.element.find('option').removeAttr('selected'));return false});this.container.find(".add-all").click(function(){var options=that.element.find('option').not(":selected");if(that.availableList.children('li:hidden').length>1){that.availableList.children('li').each(function(i){if($(this).is(":visible"))$(options[i-1]).attr('selected','selected')})}else{options.attr('selected','selected')}that._populateLists(that.element.find('option'));return false})},destroy:function(){this.element.show();this.container.remove();$.Widget.prototype.destroy.apply(this,arguments)},_populateLists:function(options){this.selectedList.children('.ui-element').remove();this.availableList.children('.ui-element').remove();this.count=0;var that=this;var items=$(options.map(function(i){var item=that._getOptionNode(this).appendTo(this.selected?that.selectedList:that.availableList).show();if(this.selected)that.count+=1;that._applyItemState(item,this.selected);item.data('idx',i);return item[0]}));this._updateCount();that._filter.apply(this.availableContainer.find('input.search'),[that.availableList])},_updateCount:function(){this.element.trigger('change');this.selectedContainer.find('span.count').text(this.count+" "+$.ui.multiselect.locale.itemsCount)},_getOptionNode:function(option){option=$(option);var node=$('<li class="ui-state-default ui-element" id="'+option.attr('value')+'" title="'+option.text()+'"><span class="ui-icon"/>'+option.text()+'<a href="#" class="action"><span class="ui-corner-all ui-icon"/></a></li>').hide();node.data('optionLink',option);return node},_cloneWithData:function(clonee){var clone=clonee.clone(false,false);clone.data('optionLink',clonee.data('optionLink'));clone.data('idx',clonee.data('idx'));return clone},_setSelected:function(item,selected){item.data('optionLink').attr('selected',selected);if(selected){var selectedItem=this._cloneWithData(item);item[this.options.hide](this.options.animated,function(){$(this).remove()});selectedItem.appendTo(this.selectedList).hide()[this.options.show](this.options.animated);console.log('clicked');$('li.search').before('<li class="keyword-box" key="similarto" type="0" id="tag-'+item.attr('id')+'" filter="'+item.attr('id')+'"><span>'+item.data('optionLink').html()+'</span><a class="keyword-close"></a></li>');$('.keyword-placeholder').hide();this._applyItemState(selectedItem,true);return selectedItem}else{var items=this.availableList.find('li'),comparator=this.options.nodeComparator;var succ=null,i=item.data('idx'),direction=comparator(item,$(items[i]));if(direction){while(i>=0&&i<items.length){direction>0?i++:i--;if(direction!=comparator(item,$(items[i]))){succ=items[direction>0?i:i+1];break}}}else{succ=items[i]}var availableItem=this._cloneWithData(item);succ?availableItem.insertBefore($(succ)):availableItem.appendTo(this.availableList);item[this.options.hide](this.options.animated,function(){$(this).remove()});availableItem.hide()[this.options.show](this.options.animated);this._applyItemState(availableItem,false);return availableItem}},_applyItemState:function(item,selected){if(selected){if(this.options.sortable)item.children('span').addClass('ui-icon-arrowthick-2-n-s').removeClass('ui-helper-hidden').addClass('ui-icon');else item.children('span').removeClass('ui-icon-arrowthick-2-n-s').addClass('ui-helper-hidden').removeClass('ui-icon');item.find('a.action span').addClass('ui-icon-minus').removeClass('ui-icon-plus');this._registerRemoveEvents(item.find('a.action'))}else{item.children('span').removeClass('ui-icon-arrowthick-2-n-s').addClass('ui-helper-hidden').removeClass('ui-icon');item.find('a.action span').addClass('ui-icon-plus').removeClass('ui-icon-minus');this._registerAddEvents(item.find('a.action'))}this._registerDoubleClickEvents(item);this._registerHoverEvents(item)},_filter:function(list){var input=$(this);var rows=list.children('li'),cache=rows.map(function(){return $(this).text().toLowerCase()});var term=$.trim(input.val().toLowerCase()),scores=[];if(!term){rows.show()}else{rows.hide();cache.each(function(i){if(this.indexOf(term)>-1){scores.push(i)}});$.each(scores,function(){$(rows[this]).show()})}},_registerDoubleClickEvents:function(elements){if(!this.options.doubleClickable)return;elements.dblclick(function(){elements.find('a.action').click()})},_registerHoverEvents:function(elements){elements.removeClass('ui-state-hover');elements.mouseover(function(){$(this).addClass('ui-state-hover')});elements.mouseout(function(){$(this).removeClass('ui-state-hover')})},_registerAddEvents:function(elements){var that=this;elements.click(function(){var item=that._setSelected($(this).parent(),true);that.count+=1;that._updateCount();return false})},_registerRemoveEvents:function(elements){var that=this;elements.click(function(){that._setSelected($(this).parent(),false);that.count-=1;that._updateCount();return false})},_registerSearchEvents:function(input){var that=this;input.focus(function(){$(this).addClass('ui-state-active')}).blur(function(){$(this).removeClass('ui-state-active')}).keypress(function(e){if(e.keyCode==13)return false}).keyup(function(){that._filter.apply(this,[that.availableList])})}});$.extend($.ui.multiselect,{locale:{addAll:'Add all',removeAll:'Remove all',itemsCount:'items selected'}})})(jQuery);;
/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (MIT_LICENSE.txt)
 * and GPL Version 2 (GPL_LICENSE.txt) licenses.
 *
 * Version: 1.1.1
 * Requires jQuery 1.3+
 * Docs: http://docs.jquery.com/Plugins/livequery
 */
(function(a){a.extend(a.fn,{livequery:function(e,d,c){var b=this,f;if(a.isFunction(e)){c=d,d=e,e=undefined}a.each(a.livequery.queries,function(g,h){if(b.selector==h.selector&&b.context==h.context&&e==h.type&&(!d||d.$lqguid==h.fn.$lqguid)&&(!c||c.$lqguid==h.fn2.$lqguid)){return(f=h)&&false}});f=f||new a.livequery(this.selector,this.context,e,d,c);f.stopped=false;f.run();return this},expire:function(e,d,c){var b=this;if(a.isFunction(e)){c=d,d=e,e=undefined}a.each(a.livequery.queries,function(f,g){if(b.selector==g.selector&&b.context==g.context&&(!e||e==g.type)&&(!d||d.$lqguid==g.fn.$lqguid)&&(!c||c.$lqguid==g.fn2.$lqguid)&&!this.stopped){a.livequery.stop(g.id)}});return this}});a.livequery=function(b,d,f,e,c){this.selector=b;this.context=d;this.type=f;this.fn=e;this.fn2=c;this.elements=[];this.stopped=false;this.id=a.livequery.queries.push(this)-1;e.$lqguid=e.$lqguid||a.livequery.guid++;if(c){c.$lqguid=c.$lqguid||a.livequery.guid++}return this};a.livequery.prototype={stop:function(){var b=this;if(this.type){this.elements.unbind(this.type,this.fn)}else{if(this.fn2){this.elements.each(function(c,d){b.fn2.apply(d)})}}this.elements=[];this.stopped=true},run:function(){if(this.stopped){return}var d=this;var e=this.elements,c=a(this.selector,this.context),b=c.not(e);this.elements=c;if(this.type){b.bind(this.type,this.fn);if(e.length>0){a.each(e,function(f,g){if(a.inArray(g,c)<0){a.event.remove(g,d.type,d.fn)}})}}else{b.each(function(){d.fn.apply(this)});if(this.fn2&&e.length>0){a.each(e,function(f,g){if(a.inArray(g,c)<0){d.fn2.apply(g)}})}}}};a.extend(a.livequery,{guid:0,queries:[],queue:[],running:false,timeout:null,checkQueue:function(){if(a.livequery.running&&a.livequery.queue.length){var b=a.livequery.queue.length;while(b--){a.livequery.queries[a.livequery.queue.shift()].run()}}},pause:function(){a.livequery.running=false},play:function(){a.livequery.running=true;a.livequery.run()},registerPlugin:function(){a.each(arguments,function(c,d){if(!a.fn[d]){return}var b=a.fn[d];a.fn[d]=function(){var e=b.apply(this,arguments);a.livequery.run();return e}})},run:function(b){if(b!=undefined){if(a.inArray(b,a.livequery.queue)<0){a.livequery.queue.push(b)}}else{a.each(a.livequery.queries,function(c){if(a.inArray(c,a.livequery.queue)<0){a.livequery.queue.push(c)}})}if(a.livequery.timeout){clearTimeout(a.livequery.timeout)}a.livequery.timeout=setTimeout(a.livequery.checkQueue,20)},stop:function(b){if(b!=undefined){a.livequery.queries[b].stop()}else{a.each(a.livequery.queries,function(c){a.livequery.queries[c].stop()})}}});a.livequery.registerPlugin("append","prepend","after","before","wrap","attr","removeAttr","addClass","removeClass","toggleClass","empty","remove","html");a(function(){a.livequery.play()})})(jQuery);;
/* mousetrap v1.1.1 craig.is/killing/mice */
window.Mousetrap=function(){function o(a,c,b){if(a.addEventListener)return a.addEventListener(c,b,!1);a.attachEvent("on"+c,b)}function u(a){return"keypress"==a.type?String.fromCharCode(a.which):h[a.which]?h[a.which]:v[a.which]?v[a.which]:String.fromCharCode(a.which).toLowerCase()}function p(a){var a=a||{},c=!1,b;for(b in l)a[b]?c=!0:l[b]=0;c||(n=!1)}function w(a,c,b,d,C){var g,e,f=[];if(!j[a])return[];"keyup"==b&&q(a)&&(c=[a]);for(g=0;g<j[a].length;++g)if(e=j[a][g],!(e.seq&&l[e.seq]!=e.level)&&b==
e.action&&("keypress"===b||c.sort().join(",")===e.modifiers.sort().join(",")))d&&e.combo==C&&j[a].splice(g,1),f.push(e);return f}function r(a,c){!1===a(c)&&(c.preventDefault&&c.preventDefault(),c.stopPropagation&&c.stopPropagation(),c.returnValue=!1,c.cancelBubble=!0)}function s(a){a.which="number"==typeof a.which?a.which:a.keyCode;var c=u(a);if(c)if("keyup"===a.type&&t===c)t=!1;else{var b=a.target||a.srcElement,d=b.tagName;if(!(-1<(" "+b.className+" ").indexOf(" mousetrap ")?0:"INPUT"==d||"SELECT"==
d||"TEXTAREA"==d)){b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");for(var b=w(c,b,a.type),f={},g=!1,d=0;d<b.length;++d)b[d].seq?(g=!0,f[b[d].seq]=1,r(b[d].callback,a)):!g&&!n&&r(b[d].callback,a);a.type==n&&!q(c)&&p(f)}}}function q(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function x(a,c,b){if(!b){if(!k){k={};for(var d in h)95<d&&112>d||h.hasOwnProperty(d)&&(k[h[d]]=d)}b=k[a]?"keydown":"keypress"}"keypress"===b&&c.length&&(b="keydown");
return b}function y(a,c,b,d,f){var a=a.replace(/\s+/g," "),g=a.split(" "),e,h,i=[];if(1<g.length){var k=a,m=b;l[k]=0;m||(m=x(g[0],[]));a=function(){n=m;++l[k];clearTimeout(z);z=setTimeout(p,1E3)};b=function(a){r(c,a);"keyup"!==m&&(t=u(a));setTimeout(p,10)};for(d=0;d<g.length;++d)y(g[d],d<g.length-1?a:b,m,k,d)}else{h="+"===a?["+"]:a.split("+");for(g=0;g<h.length;++g)e=h[g],A[e]&&(e=A[e]),b&&("keypress"!=b&&B[e])&&(e=B[e],i.push("shift")),q(e)&&i.push(e);b=x(e,i,b);j[e]||(j[e]=[]);w(e,i,b,!d,a);j[e][d?
"unshift":"push"]({callback:c,modifiers:i,action:b,seq:d,level:f,combo:a})}}for(var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},v={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},B={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6",
"&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},A={option:"alt",command:"meta","return":"enter",escape:"esc"},k,j={},i={},l={},z,t=!1,n=!1,f=1;20>f;++f)h[111+f]="f"+f;for(f=96;106>f;++f)h[f]=f-96;o(document,"keypress",s);o(document,"keydown",s);o(document,"keyup",s);return{bind:function(a,c,b){for(var d=a instanceof Array?a:[a],f=0;f<d.length;++f)y(d[f],c,b);i[a+":"+b]=c},unbind:function(a,c){i[a+":"+c]&&(delete i[a+":"+c],this.bind(a,function(){},c))},
trigger:function(a,c){i[a+":"+c]()},reset:function(){j={};i={}}}}();
;
/*
 * zClip :: jQuery ZeroClipboard v1.1.1
 * http://steamdev.com/zclip
 *
 * Copyright 2011, SteamDev
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: Wed Jun 01, 2011
 */


(function ($) {

    $.fn.zclip = function (params) {

        if (typeof params == "object" && !params.length) {

            var settings = $.extend({

                path: 'ZeroClipboard.swf',
                copy: null,
                beforeCopy: null,
                afterCopy: null,
                clickAfter: true,
                setHandCursor: true,
                setCSSEffects: true

            }, params);
			

            return this.each(function () {

                var o = $(this);

                if (o.is(':visible') && (typeof settings.copy == 'string' || $.isFunction(settings.copy))) {

                    ZeroClipboard.setMoviePath(settings.path);
                    var clip = new ZeroClipboard.Client();
                    
                    if($.isFunction(settings.copy)){
                    	o.bind('zClip_copy',settings.copy);
                    }
                    if($.isFunction(settings.beforeCopy)){
                    	o.bind('zClip_beforeCopy',settings.beforeCopy);
                    }
                    if($.isFunction(settings.afterCopy)){
                    	o.bind('zClip_afterCopy',settings.afterCopy);
                    }                    

                    clip.setHandCursor(settings.setHandCursor);
                    clip.setCSSEffects(settings.setCSSEffects);
                    clip.addEventListener('mouseOver', function (client) {
                        o.trigger('mouseenter');
                    });
                    clip.addEventListener('mouseOut', function (client) {
                        o.trigger('mouseleave');
                    });
                    clip.addEventListener('mouseDown', function (client) {

                        o.trigger('mousedown');
                        
			if(!$.isFunction(settings.copy)){
			   clip.setText(settings.copy);
			} else {
			   clip.setText(o.triggerHandler('zClip_copy'));
			}                        
                        
                        if ($.isFunction(settings.beforeCopy)) {
                            o.trigger('zClip_beforeCopy');                            
                        }

                    });

                    clip.addEventListener('complete', function (client, text) {

                        if ($.isFunction(settings.afterCopy)) {
                            
                            o.trigger('zClip_afterCopy');

                        } else {
                            if (text.length > 500) {
                                text = text.substr(0, 500) + "...\n\n(" + (text.length - 500) + " characters not shown)";
                            }
							
			    o.removeClass('hover');
                            alert("Copied text to clipboard:\n\n " + text);
                        }

                        if (settings.clickAfter) {
                            o.trigger('click');
                        }

                    });

					
                    clip.glue(o[0], o.parent()[0]);
					
		    $(window).bind('load resize',function(){clip.reposition();});
					

                }

            });

        } else if (typeof params == "string") {

            return this.each(function () {

                var o = $(this);

                params = params.toLowerCase();
                var zclipId = o.data('zclipId');
                var clipElm = $('#' + zclipId + '.zclip');

                if (params == "remove") {

                    clipElm.remove();
                    o.removeClass('active hover');

                } else if (params == "hide") {

                    clipElm.hide();
                    o.removeClass('active hover');

                } else if (params == "show") {

                    clipElm.show();

                }

            });

        }

    }	
	
	

})(jQuery);







// ZeroClipboard
// Simple Set Clipboard System
// Author: Joseph Huckaby
var ZeroClipboard = {

    version: "1.0.7",
    clients: {},
    // registered upload clients on page, indexed by id
    moviePath: 'ZeroClipboard.swf',
    // URL to movie
    nextId: 1,
    // ID of next movie
    $: function (thingy) {
        // simple DOM lookup utility function
        if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
        if (!thingy.addClass) {
            // extend element with a few useful methods
            thingy.hide = function () {
                this.style.display = 'none';
            };
            thingy.show = function () {
                this.style.display = '';
            };
            thingy.addClass = function (name) {
                this.removeClass(name);
                this.className += ' ' + name;
            };
            thingy.removeClass = function (name) {
                var classes = this.className.split(/\s+/);
                var idx = -1;
                for (var k = 0; k < classes.length; k++) {
                    if (classes[k] == name) {
                        idx = k;
                        k = classes.length;
                    }
                }
                if (idx > -1) {
                    classes.splice(idx, 1);
                    this.className = classes.join(' ');
                }
                return this;
            };
            thingy.hasClass = function (name) {
                return !!this.className.match(new RegExp("\\s*" + name + "\\s*"));
            };
        }
        return thingy;
    },

    setMoviePath: function (path) {
        // set path to ZeroClipboard.swf
        this.moviePath = path;
    },

    dispatch: function (id, eventName, args) {
        // receive event from flash movie, send to client		
        var client = this.clients[id];
        if (client) {
            client.receiveEvent(eventName, args);
        }
    },

    register: function (id, client) {
        // register new client to receive events
        this.clients[id] = client;
    },

    getDOMObjectPosition: function (obj, stopObj) {
        // get absolute coordinates for dom element
        var info = {
            left: 0,
            top: 0,
            width: obj.width ? obj.width : obj.offsetWidth,
            height: obj.height ? obj.height : obj.offsetHeight
        };

        if (obj && (obj != stopObj)) {
			info.left += obj.offsetLeft;
            info.top += obj.offsetTop;
        }

        return info;
    },

    Client: function (elem) {
        // constructor for new simple upload client
        this.handlers = {};

        // unique ID
        this.id = ZeroClipboard.nextId++;
        this.movieId = 'ZeroClipboardMovie_' + this.id;

        // register client with singleton to receive flash events
        ZeroClipboard.register(this.id, this);

        // create movie
        if (elem) this.glue(elem);
    }
};

ZeroClipboard.Client.prototype = {

    id: 0,
    // unique ID for us
    ready: false,
    // whether movie is ready to receive events or not
    movie: null,
    // reference to movie object
    clipText: '',
    // text to copy to clipboard
    handCursorEnabled: true,
    // whether to show hand cursor, or default pointer cursor
    cssEffects: true,
    // enable CSS mouse effects on dom container
    handlers: null,
    // user event handlers
    glue: function (elem, appendElem, stylesToAdd) {
        // glue to DOM element
        // elem can be ID or actual DOM element object
        this.domElement = ZeroClipboard.$(elem);

        // float just above object, or zIndex 99 if dom element isn't set
        var zIndex = 99;
        if (this.domElement.style.zIndex) {
            zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
        }

        if (typeof(appendElem) == 'string') {
            appendElem = ZeroClipboard.$(appendElem);
        } else if (typeof(appendElem) == 'undefined') {
            appendElem = document.getElementsByTagName('body')[0];
        }

        // find X/Y position of domElement
        var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);

        // create floating DIV above element
        this.div = document.createElement('div');
        this.div.className = "zclip";
        this.div.id = "zclip-" + this.movieId;
        $(this.domElement).data('zclipId', 'zclip-' + this.movieId);
        var style = this.div.style;
        style.position = 'absolute';
        style.left = '' + box.left + 'px';
        style.top = '' + box.top + 'px';
        style.width = '' + box.width + 'px';
        style.height = '' + box.height + 'px';
        style.zIndex = zIndex;

        if (typeof(stylesToAdd) == 'object') {
            for (addedStyle in stylesToAdd) {
                style[addedStyle] = stylesToAdd[addedStyle];
            }
        }

        // style.backgroundColor = '#f00'; // debug
        appendElem.appendChild(this.div);

        this.div.innerHTML = this.getHTML(box.width, box.height);
    },

    getHTML: function (width, height) {
        // return HTML for movie
        var html = '';
        var flashvars = 'id=' + this.id + '&width=' + width + '&height=' + height;

        if (navigator.userAgent.match(/MSIE/)) {
            // IE gets an OBJECT tag
            var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
            html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + protocol + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + width + '" height="' + height + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + flashvars + '"/><param name="wmode" value="transparent"/></object>';
        } else {
            // all other browsers get an EMBED tag
            html += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + width + '" height="' + height + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + flashvars + '" wmode="transparent" />';
        }
        return html;
    },

    hide: function () {
        // temporarily hide floater offscreen
        if (this.div) {
            this.div.style.left = '-2000px';
        }
    },

    show: function () {
        // show ourselves after a call to hide()
        this.reposition();
    },

    destroy: function () {
        // destroy control and floater
        if (this.domElement && this.div) {
            this.hide();
            this.div.innerHTML = '';

            var body = document.getElementsByTagName('body')[0];
            try {
                body.removeChild(this.div);
            } catch (e) {;
            }

            this.domElement = null;
            this.div = null;
        }
    },

    reposition: function (elem) {
        // reposition our floating div, optionally to new container
        // warning: container CANNOT change size, only position
        if (elem) {
            this.domElement = ZeroClipboard.$(elem);
            if (!this.domElement) this.hide();
        }

        if (this.domElement && this.div) {
            var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
            var style = this.div.style;
            style.left = '' + box.left + 'px';
            style.top = '' + box.top + 'px';
        }
    },

    setText: function (newText) {
        // set text to be copied to clipboard
        this.clipText = newText;
        if (this.ready) {
            this.movie.setText(newText);
        }
    },

    addEventListener: function (eventName, func) {
        // add user event listener for event
        // event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(func);
    },

    setHandCursor: function (enabled) {
        // enable hand cursor (true), or default arrow cursor (false)
        this.handCursorEnabled = enabled;
        if (this.ready) {
            this.movie.setHandCursor(enabled);
        }
    },

    setCSSEffects: function (enabled) {
        // enable or disable CSS effects on DOM container
        this.cssEffects = !! enabled;
    },

    receiveEvent: function (eventName, args) {
        // receive event from flash
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');

        // special behavior for certain events
        switch (eventName) {
        case 'load':
            // movie claims it is ready, but in IE this isn't always the case...
            // bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
            this.movie = document.getElementById(this.movieId);
            if (!this.movie) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 1);
                return;
            }

            // firefox on pc needs a "kick" in order to set these in certain cases
            if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 100);
                this.ready = true;
                return;
            }

            this.ready = true;
            try {
                this.movie.setText(this.clipText);
            } catch (e) {}
            try {
                this.movie.setHandCursor(this.handCursorEnabled);
            } catch (e) {}
            break;

        case 'mouseover':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('hover');
                if (this.recoverActive) {
                    this.domElement.addClass('active');
                }


            }


            break;

        case 'mouseout':
            if (this.domElement && this.cssEffects) {
                this.recoverActive = false;
                if (this.domElement.hasClass('active')) {
                    this.domElement.removeClass('active');
                    this.recoverActive = true;
                }
                this.domElement.removeClass('hover');

            }
            break;

        case 'mousedown':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('active');
            }
            break;

        case 'mouseup':
            if (this.domElement && this.cssEffects) {
                this.domElement.removeClass('active');
                this.recoverActive = false;
            }
            break;
        } // switch eventName
        if (this.handlers[eventName]) {
            for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
                var func = this.handlers[eventName][idx];

                if (typeof(func) == 'function') {
                    // actual function reference
                    func(this, args);
                } else if ((typeof(func) == 'object') && (func.length == 2)) {
                    // PHP style object + method, i.e. [myObject, 'myMethod']
                    func[0][func[1]](this, args);
                } else if (typeof(func) == 'string') {
                    // name of function
                    window[func](this, args);
                }
            } // foreach event handler defined
        } // user defined handler for event
    }

};	

;
/*!
 PowerTip - v1.2.0 - 2013-04-03
 http://stevenbenner.github.com/jquery-powertip/
 Copyright (c) 2013 Steven Benner (http://stevenbenner.com/).
 Released under MIT license.
 https://raw.github.com/stevenbenner/jquery-powertip/master/LICENSE.txt
*/
(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(){var t=this;t.top="auto",t.left="auto",t.right="auto",t.bottom="auto",t.set=function(o,n){e.isNumeric(n)&&(t[o]=Math.round(n))}}function o(e,t,o){function n(n,i){r(),e.data(v)||(n?(i&&e.data(m,!0),o.showTip(e)):(P.tipOpenImminent=!0,l=setTimeout(function(){l=null,s()},t.intentPollInterval)))}function i(n){r(),P.tipOpenImminent=!1,e.data(v)&&(e.data(m,!1),n?o.hideTip(e):(P.delayInProgress=!0,l=setTimeout(function(){l=null,o.hideTip(e),P.delayInProgress=!1},t.closeDelay)))}function s(){var i=Math.abs(P.previousX-P.currentX),s=Math.abs(P.previousY-P.currentY),r=i+s;t.intentSensitivity>r?o.showTip(e):(P.previousX=P.currentX,P.previousY=P.currentY,n())}function r(){l=clearTimeout(l),P.delayInProgress=!1}function a(){o.resetPosition(e)}var l=null;this.show=n,this.hide=i,this.cancel=r,this.resetPosition=a}function n(){function e(e,i,r,a,l){var p,c=i.split("-")[0],u=new t;switch(p=s(e)?n(e,c):o(e,c),i){case"n":u.set("left",p.left-r/2),u.set("bottom",P.windowHeight-p.top+l);break;case"e":u.set("left",p.left+l),u.set("top",p.top-a/2);break;case"s":u.set("left",p.left-r/2),u.set("top",p.top+l);break;case"w":u.set("top",p.top-a/2),u.set("right",P.windowWidth-p.left+l);break;case"nw":u.set("bottom",P.windowHeight-p.top+l),u.set("right",P.windowWidth-p.left-20);break;case"nw-alt":u.set("left",p.left),u.set("bottom",P.windowHeight-p.top+l);break;case"ne":u.set("left",p.left-20),u.set("bottom",P.windowHeight-p.top+l);break;case"ne-alt":u.set("bottom",P.windowHeight-p.top+l),u.set("right",P.windowWidth-p.left);break;case"sw":u.set("top",p.top+l),u.set("right",P.windowWidth-p.left-20);break;case"sw-alt":u.set("left",p.left),u.set("top",p.top+l);break;case"se":u.set("left",p.left-20),u.set("top",p.top+l);break;case"se-alt":u.set("top",p.top+l),u.set("right",P.windowWidth-p.left)}return u}function o(e,t){var o,n,i=e.offset(),s=e.outerWidth(),r=e.outerHeight();switch(t){case"n":o=i.left+s/2,n=i.top;break;case"e":o=i.left+s,n=i.top+r/2;break;case"s":o=i.left+s/2,n=i.top+r;break;case"w":o=i.left,n=i.top+r/2;break;case"nw":o=i.left,n=i.top;break;case"ne":o=i.left+s,n=i.top;break;case"sw":o=i.left,n=i.top+r;break;case"se":o=i.left+s,n=i.top+r}return{top:n,left:o}}function n(e,t){function o(){d.push(p.matrixTransform(u))}var n,i,s,r,a=e.closest("svg")[0],l=e[0],p=a.createSVGPoint(),c=l.getBBox(),u=l.getScreenCTM(),f=c.width/2,w=c.height/2,d=[],h=["nw","n","ne","e","se","s","sw","w"];if(p.x=c.x,p.y=c.y,o(),p.x+=f,o(),p.x+=f,o(),p.y+=w,o(),p.y+=w,o(),p.x-=f,o(),p.x-=f,o(),p.y-=w,o(),d[0].y!==d[1].y||d[0].x!==d[7].x)for(i=Math.atan2(u.b,u.a)*O,s=Math.ceil((i%360-22.5)/45),1>s&&(s+=8);s--;)h.push(h.shift());for(r=0;d.length>r;r++)if(h[r]===t){n=d[r];break}return{top:n.y+P.scrollTop,left:n.x+P.scrollLeft}}this.compute=e}function i(o){function i(e){e.data(v,!0),O.queue(function(t){s(e),t()})}function s(e){var t;if(e.data(v)){if(P.isTipOpen)return P.isClosing||r(P.activeHover),O.delay(100).queue(function(t){s(e),t()}),void 0;e.trigger("powerTipPreRender"),t=p(e),t&&(O.empty().append(t),e.trigger("powerTipRender"),P.activeHover=e,P.isTipOpen=!0,O.data(g,o.mouseOnToPopup),o.followMouse?a():(b(e),P.isFixedTipOpen=!0),O.fadeIn(o.fadeInTime,function(){P.desyncTimeout||(P.desyncTimeout=setInterval(H,500)),e.trigger("powerTipOpen")}))}}function r(e){P.isClosing=!0,P.activeHover=null,P.isTipOpen=!1,P.desyncTimeout=clearInterval(P.desyncTimeout),e.data(v,!1),e.data(m,!1),O.fadeOut(o.fadeOutTime,function(){var n=new t;P.isClosing=!1,P.isFixedTipOpen=!1,O.removeClass(),n.set("top",P.currentY+o.offset),n.set("left",P.currentX+o.offset),O.css(n),e.trigger("powerTipClose")})}function a(){if(!P.isFixedTipOpen&&(P.isTipOpen||P.tipOpenImminent&&O.data(T))){var e,n,i=O.outerWidth(),s=O.outerHeight(),r=new t;r.set("top",P.currentY+o.offset),r.set("left",P.currentX+o.offset),e=c(r,i,s),e!==I.none&&(n=u(e),1===n?e===I.right?r.set("left",P.windowWidth-i):e===I.bottom&&r.set("top",P.scrollTop+P.windowHeight-s):(r.set("left",P.currentX-i-o.offset),r.set("top",P.currentY-s-o.offset))),O.css(r)}}function b(t){var n,i;o.smartPlacement?(n=e.fn.powerTip.smartPlacementLists[o.placement],e.each(n,function(e,o){var n=c(y(t,o),O.outerWidth(),O.outerHeight());return i=o,n===I.none?!1:void 0})):(y(t,o.placement),i=o.placement),O.addClass(i)}function y(e,n){var i,s,r=0,a=new t;a.set("top",0),a.set("left",0),O.css(a);do i=O.outerWidth(),s=O.outerHeight(),a=k.compute(e,n,i,s,o.offset),O.css(a);while(5>=++r&&(i!==O.outerWidth()||s!==O.outerHeight()));return a}function H(){var e=!1;!P.isTipOpen||P.isClosing||P.delayInProgress||(P.activeHover.data(v)===!1||P.activeHover.is(":disabled")?e=!0:l(P.activeHover)||P.activeHover.is(":focus")||P.activeHover.data(m)||(O.data(g)?l(O)||(e=!0):e=!0),e&&r(P.activeHover))}var k=new n,O=e("#"+o.popupId);0===O.length&&(O=e("<div/>",{id:o.popupId}),0===d.length&&(d=e("body")),d.append(O)),o.followMouse&&(O.data(T)||(f.on("mousemove",a),w.on("scroll",a),O.data(T,!0))),o.mouseOnToPopup&&O.on({mouseenter:function(){O.data(g)&&P.activeHover&&P.activeHover.data(h).cancel()},mouseleave:function(){P.activeHover&&P.activeHover.data(h).hide()}}),this.showTip=i,this.hideTip=r,this.resetPosition=b}function s(e){return window.SVGElement&&e[0]instanceof SVGElement}function r(){P.mouseTrackingActive||(P.mouseTrackingActive=!0,e(function(){P.scrollLeft=w.scrollLeft(),P.scrollTop=w.scrollTop(),P.windowWidth=w.width(),P.windowHeight=w.height()}),f.on("mousemove",a),w.on({resize:function(){P.windowWidth=w.width(),P.windowHeight=w.height()},scroll:function(){var e=w.scrollLeft(),t=w.scrollTop();e!==P.scrollLeft&&(P.currentX+=e-P.scrollLeft,P.scrollLeft=e),t!==P.scrollTop&&(P.currentY+=t-P.scrollTop,P.scrollTop=t)}}))}function a(e){P.currentX=e.pageX,P.currentY=e.pageY}function l(e){var t=e.offset(),o=e[0].getBoundingClientRect(),n=o.right-o.left,i=o.bottom-o.top;return P.currentX>=t.left&&P.currentX<=t.left+n&&P.currentY>=t.top&&P.currentY<=t.top+i}function p(t){var o,n,i=t.data(y),s=t.data(H),r=t.data(k);return i?(e.isFunction(i)&&(i=i.call(t[0])),n=i):s?(e.isFunction(s)&&(s=s.call(t[0])),s.length>0&&(n=s.clone(!0,!0))):r&&(o=e("#"+r),o.length>0&&(n=o.html())),n}function c(e,t,o){var n=P.scrollTop,i=P.scrollLeft,s=n+P.windowHeight,r=i+P.windowWidth,a=I.none;return(n>e.top||n>Math.abs(e.bottom-P.windowHeight)-o)&&(a|=I.top),(e.top+o>s||Math.abs(e.bottom-P.windowHeight)>s)&&(a|=I.bottom),(i>e.left||e.right+t>r)&&(a|=I.left),(e.left+t>r||i>e.right)&&(a|=I.right),a}function u(e){for(var t=0;e;)e&=e-1,t++;return t}var f=e(document),w=e(window),d=e("body"),h="displayController",v="hasActiveHover",m="forcedOpen",T="hasMouseMove",g="mouseOnToPopup",b="originalTitle",y="powertip",H="powertipjq",k="powertiptarget",O=180/Math.PI,P={isTipOpen:!1,isFixedTipOpen:!1,isClosing:!1,tipOpenImminent:!1,activeHover:null,currentX:0,currentY:0,previousX:0,previousY:0,desyncTimeout:null,mouseTrackingActive:!1,delayInProgress:!1,windowWidth:0,windowHeight:0,scrollTop:0,scrollLeft:0},I={none:0,top:1,bottom:2,left:4,right:8};e.fn.powerTip=function(t,n){if(!this.length)return this;if("string"===e.type(t)&&e.powerTip[t])return e.powerTip[t].call(this,this,n);var s=e.extend({},e.fn.powerTip.defaults,t),a=new i(s);return r(),this.each(function(){var t,n=e(this),i=n.data(y),r=n.data(H),l=n.data(k);n.data(h)&&e.powerTip.destroy(n),t=n.attr("title"),i||l||r||!t||(n.data(y,t),n.data(b,t),n.removeAttr("title")),n.data(h,new o(n,s,a))}),s.manual||this.on({"mouseenter.powertip":function(t){e.powerTip.show(this,t)},"mouseleave.powertip":function(){e.powerTip.hide(this)},"focus.powertip":function(){e.powerTip.show(this)},"blur.powertip":function(){e.powerTip.hide(this,!0)},"keydown.powertip":function(t){27===t.keyCode&&e.powerTip.hide(this,!0)}}),this},e.fn.powerTip.defaults={fadeInTime:200,fadeOutTime:100,followMouse:!1,popupId:"powerTip",intentSensitivity:7,intentPollInterval:100,closeDelay:100,placement:"n",smartPlacement:!1,offset:10,mouseOnToPopup:!1,manual:!1},e.fn.powerTip.smartPlacementLists={n:["n","ne","nw","s"],e:["e","ne","se","w","nw","sw","n","s","e"],s:["s","se","sw","n"],w:["w","nw","sw","e","ne","se","n","s","w"],nw:["nw","w","sw","n","s","se","nw"],ne:["ne","e","se","n","s","sw","ne"],sw:["sw","w","nw","s","n","ne","sw"],se:["se","e","ne","s","n","nw","se"],"nw-alt":["nw-alt","n","ne-alt","sw-alt","s","se-alt","w","e"],"ne-alt":["ne-alt","n","nw-alt","se-alt","s","sw-alt","e","w"],"sw-alt":["sw-alt","s","se-alt","nw-alt","n","ne-alt","w","e"],"se-alt":["se-alt","s","sw-alt","ne-alt","n","nw-alt","e","w"]},e.powerTip={show:function(t,o){return o?(a(o),P.previousX=o.pageX,P.previousY=o.pageY,e(t).data(h).show()):e(t).first().data(h).show(!0,!0),t},reposition:function(t){return e(t).first().data(h).resetPosition(),t},hide:function(t,o){return t?e(t).first().data(h).hide(o):P.activeHover&&P.activeHover.data(h).hide(!0),t},destroy:function(t){return e(t).off(".powertip").each(function(){var t=e(this),o=[b,h,v,m];t.data(b)&&(t.attr("title",t.data(b)),o.push(y)),t.removeData(o)}),t}},e.powerTip.showTip=e.powerTip.show,e.powerTip.closeTip=e.powerTip.hide});;
/*
SiteTour v1.0 - An extremely slick site tour plugin
(c) 2012 Karl Steltenpohl <http://www.karlsteltenpohl.com>
MIT-style license.

History:
This plugin was originally developed by Karl Steltenpohl @ Music Dealers for musicdealers.com

Dependencies:
- jQuery (tested with 1.7.1)
- scrollTo Plugin (http://demos.flesler.com/jquery/scrollTo/)

*/	

/**
 * The Plugin
 */
(function($) {
	
	/**
	 * Methods
	 */		
	var methods = {
        init : function(options) {
        	
        	//Default tour options
        	settings = $.extend({
    	      	autoPlay 			: 	false, 					// coming soon... 
    	      	defaultDelay		:	'5000',					// the default delay between steps in autoplay mode
    	      	theme 				: 	'dark', 				// or light, switches the overall appearance
				data				: 	[],						// array of data elements... 
				startItem			:	0,						// defaults to the first 
				initialDelay		: 	0,  					// delay after tour is started till it starts 
				closeButtonText		:	'Close',				// default close button text
				openButtonText		:	'Tour',					// default "take tour" button text
				getStartedText		:	'Get Started',			// get started text
				textBoxTopOffset	:	60,					// how far the text box will be from each focused element
				/*scrollTopOffset		:	250,				// how far the window will scroll from the top of the element/text?*/
				itemDelay			:	1000,					// the timeout ms for the show item function
				elementDelay		:	500,					// the timeout ms for the show element&shadow delay adds to itemDelay
				highlight			:	'none',					// spotlight, ouline, or none
				shadow				:	'none'					// mouse shadow effect is either direct, perspective, or none
        	}, options);
        	
        	// Set Current Item and other imprtant vars
        	currentItem = settings.startItem; 						// Set the current item as the starting option's item */
        	lastItem = parseInt(settings.data.length - 1);
        	//console.log('LAST ITEM: ' + lastItem);
        	windowHeight = parseInt($(window.document).height());	// Window height 
			
			// Append the tour to the page 
			//$("body").append('<div class="sitetour-close gray-button">'+settings.openButtonText+'</div><div class="sitetour-overlay '+settings.theme+'" style="height:'+windowHeight+'px;"></div><div class="sitetour-wrapper"><div class="sitetour-fakemouse"></div><div class="sitetour-text '+settings.theme+'"><div class="sitetour-text-main"><h1></h1><p></p></div><div class="sitetour-text-navigation"><a class="sitetour-prev">Previous</a> <a class="sitetour-next">Next</a> <a class="sitetour-get-started blue-button">' + settings.getStartedText + '</a></div><!-- <div class="sitetour-text-shadow"></div> --></div><div class="sitetour-spotlight"><div class="sitetour-dropshadow"></div></div></div>');
			$("body").append('<div class="sitetour-overlay '+settings.theme+'" style="height:'+windowHeight+'px;"></div><div class="sitetour-wrapper"><div class="sitetour-fakemouse"></div><div class="sitetour-text '+settings.theme+'"><div class="sitetour-text-main"><h1></h1><p></p></div><div class="sitetour-text-navigation"><a class="sitetour-prev">Previous</a> <a class="sitetour-next">Next</a> <a class="austin-button btn-blue btn-sm sitetour-get-started">' + settings.getStartedText + '</a></div><div class="triangle-down"></div><!-- <div class="sitetour-text-shadow"></div> --></div><div class="sitetour-spotlight"><div class="sitetour-dropshadow"></div></div></div>');
			
			// Maximize
			// TODO... 
			
			//Pulsate Fake Mouse
			//$(".sitetour-fakemouse").effect( "pulsate", {times:100}, 500 );
			
			// Window resize event 
			$(window).resize(function(){
				if($('.sitetour-overlay').is(":visible")){
					windowHeight = parseInt($(window.document).height());
					$('.sitetour-overlay').css({'height': windowHeight+'px'});
					$('.sitetour-wrapper').css({'height': windowHeight+'px'});
				}
		    });
			
			// Window scoll event
			$(window).scroll(function(){
				if($('.sitetour-overlay').is(":visible")){
					windowHeight = parseInt($(window.document).height());
					$('.sitetour-overlay').css({'height': windowHeight+'px'});
					$('.sitetour-wrapper').css({'height': windowHeight+'px'});
				}
			});
			
			// Plugin Elements as vars
			overlay 				= $(".sitetour-overlay");
		    wrapper					= $(".sitetour-wrapper");
			textbox 				= $(".sitetour-text");
		    spotlight				= $(".sitetour-spotlight");
		    dropShadow				= $(".sitetour-dropshadow");
		    navigation				= $(".sitetour-text-navigation");
		    nextbutton				= $(".sitetour-text-navigation a.sitetour-next");
		    prevbutton				= $(".sitetour-text-navigation a.sitetour-prev");
		    getstarted				= $(".sitetour-text-navigation a.sitetour-get-started");
		    closebutton				= $(".sitetour-close");
		    
		    if(settings.highlight = 'none'){ spotlight.hide(); }
		    if(settings.shadow = 'none'){ dropShadow.hide(); }
		    
		    // Minimize
			closebutton.live('click',function(e){ 
				$.siteTour("minimize");
			});
			
			overlay.live('click',function(e){
				$.siteTour("minimize");
			});
		    
		    // Nextbutton event
		    nextbutton.click(function(e){
		    	$.siteTour("nextItem");
		    });
		    
		    // Prevbutton event
		    prevbutton.click(function(){
		    	$.siteTour("prevItem");
		    });
		    
		    // Get Started event
		    getstarted.click(function(){
		    	$.siteTour("minimize");
		    });
		    
		    // Mousemove event for the focused elements dropshadow
		    $(window).mousemove(function(event) {
		    	
		    	
		    	/**
		    	 * Perspective drop Shadow
		    	 */
				windowHeight 	= parseInt($(window).height());
				windowWidth 	= parseInt($(window).width());
				windowCenter 	= parseInt(windowWidth/2);
				x				= parseInt(event.pageX)
				//console.log('WINDOW CENTER: '+windowCenter+'');
				//console.log('MOUSE X: '+event.pageX);
				if(x < windowCenter){
					distance 		= (windowCenter) - (x);
					//console.log('DISTANCE 1: '+distance);
					shadowDega 		= parseInt(((distance/windowCenter) * 100) / 2);
					shadowDeg		= parseInt(shadowDega - (shadowDega*2));
					loffset			= parseInt(((distance/windowCenter) * 100) / 6);					
				} else {
					distance 		= (x) - (windowCenter);
					//console.log('DISTANCE 2: '+distance);
					shadowDeg		= parseInt(((distance/windowCenter) * 100) / 2);
					loffseta		= parseInt(((distance/windowCenter) * 100) / 6);
					loffset			= parseInt(loffseta - (loffseta*2));
				}
				
				//skewOffset = dropShadow.height()/loffset; // testing this out...
				//console.log('SHADOW DEG: '+shadowDeg);
				//console.log(shadowDeg);
				//console.log(textboxShadow);
				dropShadow.css('-moz-transform','skew('+shadowDeg+'deg, 0deg)');
				dropShadow.css('-webkit-transform','skew('+shadowDeg+'deg, 0deg)');
				dropShadow.css('-ms-transform','skew('+shadowDeg+'deg, 0deg)');
				////curLeft = parseInt(dropShadow.css('left').replace('px'));
				//console.log('LOFFSET: '+loffset);
				//console.log('CURLEFT: '+curLeft);
				//console.log('Drop Shadow Parent Width: '+dropShadow.parent().width());
				//console.log('Drop Shadow Width: '+dropShadow.width());
				//console.log('Pushing: '+parseInt(loffset + ((dropShadow.parent().width()/2) - (dropShadow.width()/2)))+'px');
				dropShadow.css('left',parseInt(loffset + ((dropShadow.parent().width()/2) - (dropShadow.width()/2)))+'px');
				//dropShadow.css('left',parseInt());
				//spotlight.css('left',parseInt());
		    });
		    
        },
        start : function( ) {												// start the tour
        	//console.log('tour start');										// log
        	//closebutton.html(settings.closeButtonText);						// set close button text
        	setTimeout(function(){											// initial delay timeout
        		//closebutton.css('position','fixed');						// make close button fixed while the tour is active
        		overlay.fadeIn('slow');										// fade in the overlay
        		wrapper.fadeIn('slow');										// fade in the wrapper
        		$('body *').addClass('blurry-text');						// cause blurry text
        		//closebutton.removeClass('blurry-text');						// cause blurry text
        		//closebutton.addClass('non-blurry-text');					// cause blurry text
        		
        		if(settings.data){
            		$.siteTour("showItem");									// show current item
    			}
        	},settings.initialDelay);
        },
        hideItem: function(){
        	if(typeof currentElement != 'undefined'){
	        	//tourItemArray = settings.data[currentItem];
	        	//currentElement = $(""+tourItemArray['selector']+"");
	        	/**
				 * Focused Elements original position
				 */
				//currentElementParent 	= currentElement.parent('div');
	        	//currentElementOffset	= currentElement.offset();
				currentElement.css('position' , currentElementPosition);
				currentElement.removeClass('sitetour-force-background');
				currentElement.removeClass('sitetour-force-border');
				currentElement.css('z-index',currentElementZindex);
				if($.isFunction(tourItemArray['afterHide'])) {
					// call user provided method
					tourItemArray['afterHide'].call();
				}
        	}
        	textbox.fadeOut('fast');
        	spotlight.fadeOut('fast');
        	dropShadow.fadeOut('fast');
        	
        },
        showItem : function () {
        	
        	tourItemArray = settings.data[currentItem];					// Get the item data
			currentElement = $(""+tourItemArray['selector']+"");		// the current focused element
			
			if(!currentElement.length){									// if the item doesn't exist skip to the next item
				++currentItem;
				$.siteTour("showItem");
			} else {
				
				// item options
	        	fixedFlag = 0;											// fixed flag is for fixed elements
				
	        	/**
	        	 * Item Defaults
	        	 */
				if(typeof tourItemArray['title'] == 'undefined'){ tourItemArray['title'] = ''; }
	        	if(typeof tourItemArray['text'] == 'undefined'){ tourItemArray['text'] = ''; }
	        	if(typeof tourItemArray['selector'] == 'undefined'){ tourItemArray['selector'] = 'body'; }
	        	if(typeof tourItemArray['scrollTopOffset'] == 'undefined'){ tourItemArray['scrollTopOffset'] = -250; }
	        	if(typeof tourItemArray['textBoxTopOffset'] == 'undefined'){ tourItemArray['textBoxTopOffset'] = 100; }
	        	if(typeof tourItemArray['forceBackground'] == 'undefined'){ tourItemArray['forceBackground'] = true; }
	        	if(typeof tourItemArray['forceBorder'] == 'undefined'){ tourItemArray['forceBorder'] = true; }
	        	if(typeof tourItemArray['extraLeft'] == 'undefined'){ tourItemArray['extraLeft'] = 0; }
	        	//if(typeof tourItemArray['beforeShow'] == 'undefined'){}	// callbacks are not needed as defaults
	        	//if(typeof tourItemArray['afterHide'] == 'undefined'){}	// callbacks are not needed as defaults
	        	
	        	// if the element's position is fixed then set the fixed flag
	        	if(currentElement.css('position') == 'fixed'){ fixedFlag = 1; }
				
				if($.isFunction(tourItemArray['beforeShow'])) {			// before show callback function
					tourItemArray['beforeShow'].call();
				}
	
				if(currentElement.closest('.ui-tabs-panel').length){ 	// handle elements that are hidden inside other jquery-ui tabs
					tabid = currentElement.closest('.ui-tabs-panel').attr('id');
					// Handle elements that are in tabs within tabs, oooohhhhhh...
					// click this parent tab first
					if($("a[href='#"+tabid+"']").closest('.ui-tabs-panel').length){
						tabidid = $("a[href='#"+tabid+"']").closest('.ui-tabs-panel').attr('id');
						$("a[href='#"+tabidid+"']").trigger('click');
						//console.log('clicked parent tab from tour #' + tabid + '');
					}
					// click the child tab
					$("a[href='#"+tabid+"']").trigger('click');
					//console.log("Length: "+$('ul.ui-tabs-nav li a[href="#'+tabid+'"').length);
					//console.log('clicked tab from tour #' + tabid + '');
				}
				
				// Timeout wrapper, settings.itemDelay , must be longer than the tabs animations if there are any
				setTimeout(function() {
					
					// Focused Elements original position
					currentElementParent 	= currentElement.parent('div');
					currentElementPosition 	= currentElement.css('position');
					//currentElementMargin 	= currentElement.css('margin');
					currentElementOffset	= currentElement.offset();
					currentElementZindex	= currentElement.css('z-index');
					currentElementWidth 	= currentElement.css('width').replace('px','');
					
					
					
					//console.log('OFFSET: ');
					//console.log('CURRENT WIDTH: '+currentElementWidth);
					
					// Centers, and shows the spotlight .5 sec after overlay
					//spotlight.css('top',(($(window).height()/2) - (spotlight.height()/2))+'px');
					
					// Bring up the spotlight in .5 sec
					if(fixedFlag != 1){
						
						// get this steps default scroll offset
						if(typeof tourItemArray['scrollTopOffset'] == 'undefined'){
							scrollTopOffset = currentElementOffset.top;
						} else {
							scrollTopOffset = tourItemArray['scrollTopOffset'];
						}
						
						// get this steps default textbox position
						if(typeof tourItemArray['textPosition'] == 'undefined'){ tourItemArray['textPosition'] = 'top'; }

						// Scroll to that element, only scroll to elements that are not fixed
						$.scrollTo(''+tourItemArray['selector']+'',900,{ offset : scrollTopOffset });
						
						paddingTop = parseInt(currentElement.css('padding-top').replace('px',''));
						//console.log('PADDING TOP: '+paddingTop);
						
						spotlightTop 	= parseInt(paddingTop + currentElementOffset.top + currentElement.height() - (spotlight.height()/2));
						spotlightLeft	= parseInt(currentElementOffset.left - (currentElement.width()/4));
						spotlightWidth	= parseInt(currentElement.width() + (currentElement.width()/2));
						//console.log("spotlightTop: "+spotlightTop);
						//console.log("spotlightLeft: "+spotlightLeft);
						//console.log("spotlightWidth: "+spotlightWidth);
						spotlight.css('top',spotlightTop+'px');			// Positions spotlight at the base of the element 
						spotlight.css('left',spotlightLeft+'px'); 		// Positions spotlight 5% to the left of the current element 
						spotlight.css('width',spotlightWidth+'px'); 	// Makes spotlight width 10% larger than the current element 
						spotlight.css('position','absolute');			// Makes the spotlight absolute
						if(settings.highlight != 'none'){
							spotlight.fadeIn('slow');
						} else {
							spotlight.hide();
						}
						
						// Text
						// enters .7 sec after overlay
						textbox.children('.sitetour-text-main').children('h1').html(tourItemArray['title']);
						textbox.children('.sitetour-text-main').children('p').html(tourItemArray['text']);
						
						//console.log('TextPosition: '+tourItemArray['textPosition']);
						
						if(tourItemArray['textPosition'] == 'left'){
							textBoxTop 	= parseInt(currentElementOffset.top) + 30;
							textBoxLeft = parseInt(currentElementOffset.left) - parseInt(textbox.width());
							//console.log('Left');
						}
						else if(tourItemArray['textPosition'] == 'right'){
							textBoxTop 	= parseInt(currentElementOffset.top) + 30;
							textBoxLeft = parseInt(currentElementOffset.left) + parseInt(currentElementWidth) - 10;
							//console.log('Right');
						}
						else if(tourItemArray['textPosition'] == 'bottom'){
							textBoxTop 	= parseInt(currentElementOffset.top - (textbox.height()) - settings.textBoxTopOffset);
							if(textBoxTop <= 10){ textBoxTop = 10; }		// Buffer the top of the window by 10px
							textBoxLeft = parseInt(currentElementOffset.left + 20);
							//console.log('Bottom');
						}
						else{
							// TOP
							textBoxTop 	= parseInt(currentElementOffset.top - (textbox.height()) - settings.textBoxTopOffset);
							if(textBoxTop <= 10){ textBoxTop = 10; }		// Buffer the top of the window by 10px
							textBoxLeft = parseInt(currentElementOffset.left + 20);
							//console.log('Top');
						}
						
						// ExtraLeft
						textBoxLeft = parseInt(textBoxLeft + tourItemArray['extraLeft']);
						
						//console.log("textBoxTop :"+textBoxTop);
						//console.log("textBoxLeft :"+textBoxLeft);
						
						textbox.css("top",textBoxTop+'px');
						textbox.css("left",textBoxLeft+'px');
						textbox.css("position","absolute");
						textbox.fadeIn('1000'); // This comes in later
					}
					
					// Bring up the element in 500ms after this
					setTimeout(function() {
						if(fixedFlag == 1){ 
							//console.log('Fixed');
							// fixed elements need to be positioned differently
							spotlightWidth	= parseInt(currentElement.width() + (currentElement.width()/2));
							
							fixedElementLeft = currentElement.css('left').replace('px','');
							fixedElementTop = currentElement.css('top').replace('px','');
							//console.log("fixed element left: "+fixedElementLeft);
							//console.log("fixed element top: "+fixedElementTop);
							
							
							spotlightLeft	= parseInt(parseInt(fixedElementLeft) - (currentElement.width()/4));
							spotlightTop 	= parseInt(parseInt(fixedElementTop) + currentElement.height() - (spotlight.height()/2) - (spotlight.height()/4));
	
							//console.log("fixed spotlightTop: "+spotlightTop);
							//console.log("fixed spotlightLeft: "+spotlightLeft);
							//console.log("fixed spotlightWidth: "+spotlightWidth);
							
							spotlight.css('top',spotlightTop+'px');			// Positions spotlight at the base of the element 
							spotlight.css('left',spotlightLeft+'px'); 		// Positions spotlight 5% to the left of the current element 
							spotlight.css('width',spotlightWidth+'px'); 	// Makes spotlight width 10% larger than the current element 
							spotlight.css('position','fixed');				// Makes the spotlight fixed
							if(settings.highlight != 'none'){
								spotlight.fadeIn('slow');
							} else {
								spotlight.hide();
							}
							textbox.children('.sitetour-text-main').children('h1').html(tourItemArray['title']);
							textbox.children('.sitetour-text-main').children('p').html(tourItemArray['text']);
							
							textBoxTop 	= parseInt(parseInt(fixedElementTop) - (textbox.height()) - settings.textBoxTopOffset);
							if(textBoxTop <= 10){ textBoxTop = 10; }		// Buffer the top of the window by 10px
							textBoxLeft = parseInt(parseInt(fixedElementLeft) + 20);
							
							textbox.css("top",textBoxTop+'px');
							textbox.css("left",textBoxLeft+'px');
							textbox.css('position','fixed');				// Makes the textbox fixed
							
							textbox.fadeIn('1000'); // This comes later
							
						} else { 
							currentElement.css('position','relative'); 
						}
						
						currentElement.css('z-index','10000004');
						
						// unblur the element
						currentElement.removeClass('blurry-text');
						currentElement.find('*').removeClass('blurry-text');
						
						currentTPadding = currentElement.css('padding-top');
						currentLPadding = currentElement.css('padding-left');
						currentBPadding = currentElement.css('padding-bottom');
						currentRPadding = currentElement.css('padding-right');
						
						currentBorder = currentElement.css('border');
						
						currentElement.css('border',''); // remove border
						
						currentWidth = currentElement.width();
						
						// Lock width
						$(currentElement).css('width',currentWidth+'px');
						
						//newWidth = parseInt(currentWidth - 20);
						//console.log('NEW WIDTH: '+newWidth);
						//currentElement.css('width', ''+newWidth+'px');
						
						//currentElement.css('padding','10px');
						
						/**
						 * if tourItemArray['foreceStyle'] == 'true'
						 */
						if(tourItemArray['forceBorder'] == true){
							currentElement.addClass('sitetour-force-border');
						}
						
						if(tourItemArray['forceBackground'] == true){
							currentElement.addClass('sitetour-force-background');
						}
						
						if(settings.theme == 'light'){
							currentElement.addClass('light');				// Force bg
							currentElement.addClass('non-blurry-text').addClass('light');				// make non blurry
							currentElement.find('*').addClass('non-blurry-text').addClass('light');		// make non blurry
						} else {
							currentElement.addClass('dark');
							currentElement.addClass('non-blurry-text').addClass('dark');
							currentElement.find('*').addClass('non-blurry-text').addClass('dark');
						}
						
						//currentElement.show("slide", { direction: "down" }, 'fast');
						//currentElement.show("slide", { direction: "down" }, 'fast');
						//currentElement.show('fast');
						if($.isFunction(tourItemArray['afterShow'])) {			// callback function for after item shows
							// call user provided method
							tourItemArray['afterShow'].call();
						}
					}, settings.elementDelay);
					
					
					// Shows the shadow element shadow 500ms later
					setTimeout(function() {
						// Drop Shadow
						//dropShadowTop 		= parseInt(currentElementOffset.top + currentElement.height() - (dropShadow.height()));
						//dropShadowLeft 		= parseInt(currentElementOffset.left);
						//dropShadowTop 			= parseInt(currentElementOffset.top + dropShadow.height());
						//dropShadowLeft 			= parseInt(currentElementOffset.left);
						//dropShadowTop 		= parseInt((dropShadow.parent('div').height()/2) - (currentElement.height()/2) + 2);
						dropShadowHeight 		= parseInt(currentElement.height() / 2);
						if(dropShadowHeight > parseInt(spotlight.height()/3)){ dropShadowHeight = parseInt(spotlight.height()/3); }
						dropShadowWidth 		= parseInt(currentElement.width() + 20);
						dropShadowBotom			= parseInt((spotlight.height()/2) - 24);
						dropShadowLeft			= parseInt(dropShadow.parent('div').width() - (currentElement.width() + (currentElement.width()/4)));
						dropShadowLeft 			= parseInt((dropShadow.parent('div').width()/2) - (dropShadowWidth/2) + 10);
						//console.log("dropShadowBotom: "+dropShadowBotom); 		// Positions dropshadow at the base ob element 
						//console.log("dropShadowLeft: "+dropShadowLeft);
						//console.log("dropShadowHeight: "+dropShadowHeight);
						//console.log("dropShadowWidth: "+dropShadowWidth);
						dropShadow.css('width',dropShadowWidth+'px');
						dropShadow.css('height',dropShadowHeight+'px');
						dropShadow.css('bottom',dropShadowBotom+'px');
						dropShadow.css('left',dropShadowLeft+'px');
						dropShadow.css('border-radius',currentElement.css('border-radius'));
						dropShadow.css('-moz-border-radius',currentElement.css('-moz-border-radius'));
						dropShadow.css('-webkit-border-radius',currentElement.css('-moz-webkit-radius'));
						dropShadow.css('-ms-border-radius',currentElement.css('-moz-border-radius'));
						//dropShadow.show("slide", { direction: "down" }, 'fast');
						if(settings.shadow != 'none'){
							dropShadow.show('fast');
						} else {
							dropShadow.hide;
						}
						
						// Navigation
						// Hide/Show Prev
						if(currentItem == 0){
							prevbutton.hide();
						} else {
							prevbutton.show();
						}
						
						// Hide/Show Next
						if(currentItem == lastItem){
							nextbutton.hide();
							getstarted.show();
						} else {
							nextbutton.show();
							getstarted.hide();
						}
					}, settings.elementDelay);
				}, settings.itemDelay);
			}
        },
        prevItem : function (){
        	//console.log('clicked prev');
        	--currentItem;
        	$.siteTour("hideItem");
        	$.siteTour("showItem");
        },
        nextItem : function () {
        	//console.log('clicked next');
        	++currentItem;
        	$.siteTour("hideItem");
        	$.siteTour("showItem");
        },
        minimize : function (){
        		if(overlay.is(":visible")){
        			//console.log('CLOSING TOUR');
        			$.siteTour("hideItem");
        			overlay.fadeOut('slow');
        			wrapper.fadeOut('slow');
        			// blur text
            		$('body *').removeClass('blurry-text');
            		$('body *').removeClass('non-blurry-text');
            		//closebutton.css('position','absolute');			// make close button absolute while the tour is minimized
            		//closebutton.html(settings.openButtonText)
        		} else {
        			currentItem = 0;
        			//console.log('OPENING TOUR');
        			$.siteTour("hideItem");
        			$.siteTour("start");
        			//closebutton.html(settings.closeButtonText);
        		}
        	
        },
        destroy : function () {
        	//console.log('tour destroy');
        }
    };
	
	/**
	 * Extend the plugin function so it can be called without an element
	 */
	$.extend({
		siteTour: function (options) {
			/**
			 * If a method
			 */
			if ( methods[options] ) {
	            return methods[ options ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	        }
			/**
			 * Initiate
			 */
			else if ( typeof options === 'object' || ! options ) {
	            // Default to "init"
	            return methods.init.apply( this, arguments );
	        } else {
	            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
	        } 
        }
    });
})(jQuery);;
//function md2_modal
//simple modal function
//nhalabuda@musicdealers.com
$.fn.md2_modal = function(){
	
	var modal = $('.modal-box', $(this));
	var wrap = $(this);
	var overlay = $('.modal-overlay');
	
	/*
	console.log('THIS: ');
	console.log($(this));
	
	console.log('MODAL: ');
	console.log(modal);
	*/
	
	overlay.css({'width':'100%','height':'100%','top':0,'left':0}).fadeTo(200,0.6);
	
	if(!$(this).is("#md2-browser")){
		overlay.add('.modal-close',$(this)).bind('click', function(){
			overlay.fadeOut(300);
		 	modal.removeClass('active').removeClass('abyss').fadeOut(300);
		 	wrap.fadeOut(300);
		 	//$("body").removeClass('abyss');
	    });    
	}	
    
	wrap.show();
	
    
  var wh = $(window).height();
	var ww = $(window).width();
	var mh = modal.height();
	var mw = modal.width();
  var c1 = wh/2-mh/2;
	var c1 = '5%';
	var c2 = ww/2-mw/2;
	
	/*
	console.log(wh+" x "+ ww);
	console.log(mh+" x "+ mw);
	console.log(c1);
	console.log(c2);
	*/
	
    setTimeout(function(){
    	//$("body").addClass('abyss');
        //modal.addClass('active');
        //modal.addClass('abyss');
        //modal.addClass('stack');
    	
    	//set
    	//modal.offset({ top: 0, left: 0}).offset({ top: (c1), left: (c2)});
    	//modal.css({'top': $(window).height()/2-modal.height()/2, 'left': $(window).width()/2-modal.width()/2});
    	modal.css({'top': c1, 'left': c2}).fadeIn(200).find('.modal-content').css({ 'max-height': Math.floor(wh*.6)+'px', 'overflow': 'auto' });
        
    },200);

    $('.modal-cancel').click(function(e){
  	overlay.fadeOut(300);
	 	modal.removeClass('active').removeClass('abyss').fadeOut(300);
	 	wrap.fadeOut(300);
	 	//$("body").removeClass('abyss');
    });
};
/**
 * jCarouselLite - jQuery plugin to navigate images/any content in a carousel style widget.
 * @requires jQuery v1.2 or above
 *
 * http://gmarwaha.com/jquery/jcarousellite/
 *
 * Copyright (c) 2007 Ganeshji Marwaha (gmarwaha.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 1.0.1
 * Note: Requires jquery 1.2 or above from version 1.0.1
 */

/**
 * Creates a carousel-style navigation widget for images/any-content from a simple HTML markup.
 *
 * The HTML markup that is used to build the carousel can be as simple as...
 *
 *  <div class="carousel">
 *      <ul>
 *          <li><img src="image/1.jpg" alt="1"></li>
 *          <li><img src="image/2.jpg" alt="2"></li>
 *          <li><img src="image/3.jpg" alt="3"></li>
 *      </ul>
 *  </div>
 *
 * As you can see, this snippet is nothing but a simple div containing an unordered list of images.
 * You don't need any special "class" attribute, or a special "css" file for this plugin.
 * I am using a class attribute just for the sake of explanation here.
 *
 * To navigate the elements of the carousel, you need some kind of navigation buttons.
 * For example, you will need a "previous" button to go backward, and a "next" button to go forward.
 * This need not be part of the carousel "div" itself. It can be any element in your page.
 * Lets assume that the following elements in your document can be used as next, and prev buttons...
 *
 * <button class="prev">&lt;&lt;</button>
 * <button class="next">&gt;&gt;</button>
 *
 * Now, all you need to do is call the carousel component on the div element that represents it, and pass in the
 * navigation buttons as options.
 *
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev"
 * });
 *
 * That's it, you would have now converted your raw div, into a magnificient carousel.
 *
 * There are quite a few other options that you can use to customize it though.
 * Each will be explained with an example below.
 *
 * @param an options object - You can specify all the options shown below as an options object param.
 *
 * @option btnPrev, btnNext : string - no defaults
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev"
 * });
 * @desc Creates a basic carousel. Clicking "btnPrev" navigates backwards and "btnNext" navigates forward.
 *
 * @option btnGo - array - no defaults
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      btnGo: [".0", ".1", ".2"]
 * });
 * @desc If you don't want next and previous buttons for navigation, instead you prefer custom navigation based on
 * the item number within the carousel, you can use this option. Just supply an array of selectors for each element
 * in the carousel. The index of the array represents the index of the element. What i mean is, if the
 * first element in the array is ".0", it means that when the element represented by ".0" is clicked, the carousel
 * will slide to the first element and so on and so forth. This feature is very powerful. For example, i made a tabbed
 * interface out of it by making my navigation elements styled like tabs in css. As the carousel is capable of holding
 * any content, not just images, you can have a very simple tabbed navigation in minutes without using any other plugin.
 * The best part is that, the tab will "slide" based on the provided effect. :-)
 *
 * @option mouseWheel : boolean - default is false
 * @example
 * $(".carousel").jCarouselLite({
 *      mouseWheel: true
 * });
 * @desc The carousel can also be navigated using the mouse wheel interface of a scroll mouse instead of using buttons.
 * To get this feature working, you have to do 2 things. First, you have to include the mouse-wheel plugin from brandon.
 * Second, you will have to set the option "mouseWheel" to true. That's it, now you will be able to navigate your carousel
 * using the mouse wheel. Using buttons and mouseWheel or not mutually exclusive. You can still have buttons for navigation
 * as well. They complement each other. To use both together, just supply the options required for both as shown below.
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      mouseWheel: true
 * });
 *
 * @option auto : number - default is null, meaning autoscroll is disabled by default
 * @example
 * $(".carousel").jCarouselLite({
 *      auto: 800,
 *      speed: 500
 * });
 * @desc You can make your carousel auto-navigate itself by specfying a millisecond value in this option.
 * The value you specify is the amount of time between 2 slides. The default is null, and that disables auto scrolling.
 * Specify this value and magically your carousel will start auto scrolling.
 *
 * @option speed : number - 200 is default
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      speed: 800
 * });
 * @desc Specifying a speed will slow-down or speed-up the sliding speed of your carousel. Try it out with
 * different speeds like 800, 600, 1500 etc. Providing 0, will remove the slide effect.
 *
 * @option easing : string - no easing effects by default.
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      easing: "bounceout"
 * });
 * @desc You can specify any easing effect. Note: You need easing plugin for that. Once specified,
 * the carousel will slide based on the provided easing effect.
 *
 * @option vertical : boolean - default is false
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      vertical: true
 * });
 * @desc Determines the direction of the carousel. true, means the carousel will display vertically. The next and
 * prev buttons will slide the items vertically as well. The default is false, which means that the carousel will
 * display horizontally. The next and prev items will slide the items from left-right in this case.
 *
 * @option circular : boolean - default is true
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      circular: false
 * });
 * @desc Setting it to true enables circular navigation. This means, if you click "next" after you reach the last
 * element, you will automatically slide to the first element and vice versa. If you set circular to false, then
 * if you click on the "next" button after you reach the last element, you will stay in the last element itself
 * and similarly for "previous" button and first element.
 *
 * @option visible : number - default is 3
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      visible: 4
 * });
 * @desc This specifies the number of items visible at all times within the carousel. The default is 3.
 * You are even free to experiment with real numbers. Eg: "3.5" will have 3 items fully visible and the
 * last item half visible. This gives you the effect of showing the user that there are more images to the right.
 *
 * @option start : number - default is 0
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      start: 2
 * });
 * @desc You can specify from which item the carousel should start. Remember, the first item in the carousel
 * has a start of 0, and so on.
 *
 * @option scrool : number - default is 1
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      scroll: 2
 * });
 * @desc The number of items that should scroll/slide when you click the next/prev navigation buttons. By
 * default, only one item is scrolled, but you may set it to any number. Eg: setting it to "2" will scroll
 * 2 items when you click the next or previous buttons.
 *
 * @option beforeStart, afterEnd : function - callbacks
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      beforeStart: function(a) {
 *          alert("Before animation starts:" + a);
 *      },
 *      afterEnd: function(a) {
 *          alert("After animation ends:" + a);
 *      }
 * });
 * @desc If you wanted to do some logic in your page before the slide starts and after the slide ends, you can
 * register these 2 callbacks. The functions will be passed an argument that represents an array of elements that
 * are visible at the time of callback.
 *
 *
 * @cat Plugins/Image Gallery
 * @author Ganeshji Marwaha/ganeshread@gmail.com
 */

(function($) {                                          // Compliant with jquery.noConflict()
$.fn.jCarouselLite = function(o) {
    o = $.extend({
        btnPrev: null,
        btnNext: null,
        btnGo: null,
        mouseWheel: false,
        auto: null,

        speed: 100,
        easing: false,

        vertical: false,
        circular: true,
        visible: 3,
        start: 0,
        scroll: 1,

        beforeStart: null,
        afterEnd: null
    }, o || {});

    return this.each(function() {                           // Returns the element collection. Chainable.

        var running = false, animCss=o.vertical?"top":"left", sizeCss=o.vertical?"height":"width";
        var div = $(this), ul = $("ul", div), tLi = $("li", ul), tl = tLi.size(), v = o.visible;

        if(o.circular) {
            ul.prepend(tLi.slice(tl-v-1+1).clone())
              .append(tLi.slice(0,v).clone());
            o.start += v;
        }

        var li = $("li", ul), itemLength = li.size(), curr = o.start;
        div.css("visibility", "visible");

        li.css({overflow: "hidden", float: o.vertical ? "none" : "left"});
        ul.css({margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1"});
        //div.css({overflow: "hidden", position: "static", "z-index": "2", left: "0px"});
		div.css({overflow: "hidden", position: "static", "z-index": "2", left: "0px"});

        var liSize = o.vertical ? height(li) : width(li);   // Full li size(incl margin)-Used for animation
        var ulSize = liSize * itemLength;                   // size of full ul(total length, not just for the visible items)
        var divSize = liSize * v;                           // size of entire div(total length for just the visible items)

        li.css({width: li.width(), height: li.height()});
		//li.css({width: "385px", height: li.height()});
		//li.css({width: "81px", height: "64px"});
        
        ul.css(sizeCss, ulSize+"px").css(animCss, -(curr*liSize));

        div.css(sizeCss, divSize+"px");                     // Width of the DIV. length of visible images
		//div.css({width: "100%", height: "52px"});
		
        if(o.btnPrev){
            $(o.btnPrev).click(function() {
                return go(curr-o.scroll);
            });
			
			/*
			var hoverinterval;
			
			$(o.btnPrev).hover(function() {				
				hoverinterval = setInterval(function() {
					go(curr-o.scroll);
				}, o.auto+o.speed);
			}, function() {
				clearInterval(hoverinterval);
			});
			*/			
		}
			

        if(o.btnNext){
            $(o.btnNext).click(function() {
                return go(curr+o.scroll);
            });
			
			/*
			var hoverinterval;
			
			$(o.btnNext).hover(function() {				
				hoverinterval = setInterval(function() {
					go(curr+o.scroll);
				}, o.auto+o.speed);
			}, function() {
				clearInterval(hoverinterval);
			});
			*/
		}


		
		
        if(o.btnGo)
            $.each(o.btnGo, function(i, val) {
                $(val).click(function() {
                    return go(o.circular ? o.visible+i : i);
                });
            });

        if(o.mouseWheel && div.mousewheel)
            div.mousewheel(function(e, d) {
                return d>0 ? go(curr-o.scroll) : go(curr+o.scroll);
            });

        if(o.auto)
            setInterval(function() {
                go(curr+o.scroll);
            }, o.auto+o.speed);

        function vis() {
            return li.slice(curr).slice(0,v);
        };

        function go(to) {
            if(!running) {

                if(o.beforeStart)
                    o.beforeStart.call(this, vis());

                if(o.circular) {            // If circular we are in first or last, then goto the other end
                    if(to<=o.start-v-1) {           // If first, then goto last
                        ul.css(animCss, -((itemLength-(v*2))*liSize)+"px");
                        // If "scroll" > 1, then the "to" might not be equal to the condition; it can be lesser depending on the number of elements.
                        curr = to==o.start-v-1 ? itemLength-(v*2)-1 : itemLength-(v*2)-o.scroll;
                    } else if(to>=itemLength-v+1) { // If last, then goto first
                        ul.css(animCss, -( (v) * liSize ) + "px" );
                        // If "scroll" > 1, then the "to" might not be equal to the condition; it can be greater depending on the number of elements.
                        curr = to==itemLength-v+1 ? v+1 : v+o.scroll;
                    } else curr = to;
                } else {                    // If non-circular and to points to first or last, we just return.
                    if(to<0 || to>itemLength-v) return;
                    else curr = to;
                }                           // If neither overrides it, the curr will still be "to" and we can proceed.

                running = true;

                ul.animate(
                    animCss == "left" ? { left: -(curr*liSize) } : { top: -(curr*liSize) } , o.speed, o.easing,
                    function() {
                        if(o.afterEnd)
                            o.afterEnd.call(this, vis());
                        running = false;
                    }
                );
                // Disable buttons when the carousel reaches the last/first, and enable when not
                if(!o.circular) {
                    $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                    $( (curr-o.scroll<0 && o.btnPrev)
                        ||
                       (curr+o.scroll > itemLength-v && o.btnNext)
                        ||
                       []
                     ).addClass("disabled");
                }

            }
            return false;
        };
    });
};

function css(el, prop) {
    return parseInt($.css(el[0], prop)) || 0;
};
function width(el) {
    return  el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
};
function height(el) {
    return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
};

})(jQuery);;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/*
 * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery.extend( jQuery.easing,
{
	easeIn: function (x, t, b, c, d) {
		return jQuery.easing.easeInQuad(x, t, b, c, d);
	},
	easeOut: function (x, t, b, c, d) {
		return jQuery.easing.easeOutQuad(x, t, b, c, d);
	},
	easeInOut: function (x, t, b, c, d) {
		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
	},
	expoin: function(x, t, b, c, d) {
		return jQuery.easing.easeInExpo(x, t, b, c, d);
	},
	expoout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutExpo(x, t, b, c, d);
	},
	expoinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutExpo(x, t, b, c, d);
	},
	bouncein: function(x, t, b, c, d) {
		return jQuery.easing.easeInBounce(x, t, b, c, d);
	},
	bounceout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBounce(x, t, b, c, d);
	},
	bounceinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBounce(x, t, b, c, d);
	},
	elasin: function(x, t, b, c, d) {
		return jQuery.easing.easeInElastic(x, t, b, c, d);
	},
	elasout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutElastic(x, t, b, c, d);
	},
	elasinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutElastic(x, t, b, c, d);
	},
	backin: function(x, t, b, c, d) {
		return jQuery.easing.easeInBack(x, t, b, c, d);
	},
	backout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBack(x, t, b, c, d);
	},
	backinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBack(x, t, b, c, d);
	}
});;
/*
 * jQuery Asynchronous Plugin 1.0 RC1
 *
 * Copyright (c) 2008 Vincent Robert (genezys.net)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 */
(function($){

// opts.delay : (default 10) delay between async call in ms
// opts.bulk : (default 500) delay during which the loop can continue synchronously without yielding the CPU
// opts.test : (default true) function to test in the while test part
// opts.loop : (default empty) function to call in the while loop part
// opts.end : (default empty) function to call at the end of the while loop
$.whileAsync = function(opts)
{
	var delay = Math.abs(opts.delay) || 10,
		bulk = isNaN(opts.bulk) ? 500 : Math.abs(opts.bulk),
		test = opts.test || function(){ return true; },
		loop = opts.loop || function(){},
		end  = opts.end  || function(){};
	
	(function(){

		var t = false, 
			begin = new Date();
			
		while( t = test() )
		{
			loop();
			if( bulk === 0 || (new Date() - begin) > bulk )
			{
				break;
			}
		}
		if( t ) 
		{
			setTimeout(arguments.callee, delay);
		}
		else
		{
			end();
		}
		
	})();
}

// opts.delay : (default 10) delay between async call in ms
// opts.bulk : (default 500) delay during which the loop can continue synchronously without yielding the CPU
// opts.loop : (default empty) function to call in the each loop part, signature: function(index, value) this = value
// opts.end : (default empty) function to call at the end of the each loop
$.eachAsync = function(array, opts)
{
	var i = 0, 
		l = array.length, 
		loop = opts.loop || function(){};
	
	$.whileAsync(
		$.extend(opts, {
			test: function(){ return i < l; },
			loop: function()
			{ 
				var val = array[i];
				return loop.call(val, i++, val);
			}
		})
	);
}

$.fn.eachAsync = function(opts)
{
	$.eachAsync(this, opts);
	return this;
}

})(jQuery);
/*
 * jQuery UI Widget 1.10.0+amd
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */

(function (factory) {
    if (typeof define === "function" && define.amd) {
        // Register as an anonymous AMD module:
        define(["jquery"], factory);
    } else {
        // Browser globals:
        factory(jQuery);
    }
}(function( $, undefined ) {

var uuid = 0,
	slice = Array.prototype.slice,
	_cleanData = $.cleanData;
$.cleanData = function( elems ) {
	for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
		try {
			$( elem ).triggerHandler( "remove" );
		// http://bugs.jquery.com/ticket/8235
		} catch( e ) {}
	}
	_cleanData( elems );
};

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );
};

$.widget.extend = function( target ) {
	var input = slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			// 1.9 BC for #7810
			// TODO remove dual storage
			.removeData( this.widgetName )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( value === undefined ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( value === undefined ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
			this.hoverable.removeClass( "ui-state-hover" );
			this.focusable.removeClass( "ui-state-focus" );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			// accept selectors, DOM elements
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^(\w+)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

}));
;
/*
 * jQuery Iframe Transport Plugin 1.6.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true, nomen: true */
/*global define, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts three additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            var form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // javascript:false as initial iframe src
                    // prevents warning popups on HTTPS in IE6.
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    iframe = $(
                        '<iframe src="javascript:false;" name="iframe-transport-' +
                            (counter += 1) + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="javascript:false;"></iframe>')
                                    .appendTo(form);
                                form.remove();
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                $(input).prop('name', clone.prop('name'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', 'javascript'.concat(':false;'));
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, and script:
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));
;
/*
 * jQuery File Upload Plugin 5.21.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global define, window, document, File, Blob, FormData, location */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // The FileReader API is not actually used, but works as feature detection,
    // as e.g. Safari supports XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads:
    $.support.xhrFileUpload = !!(window.XMLHttpRequestUpload && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // The form.elements propHook is added to filter serialized elements
    // to not include file inputs in jQuery 1.9.0.
    // This hooks directly into jQuery.fn.serializeArray.
    // For more info, see http://bugs.jquery.com/ticket/13306
    $.propHooks.elements = {
        get: function (form) {
            if ($.nodeName(form, 'form')) {
                return $.grep(form.elements, function (elem) {
                    return !$.nodeName(elem, 'input') || elem.type !== 'file';
                });
            }
            return null;
        }
    };

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default the complete document.
            // Set to null to disable paste support:
            pasteZone: $(document),
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uplaods, else
            // once for each file selection.
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows to override plugin options as well as define ajax settings.
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                data.submit();
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false
        },

        // A list of options that require a refresh after assigning a new value:
        _refreshOptionsList: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _BitrateTimer: function () {
            this.timestamp = +(new Date());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if (typeof options.formData === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if (options.formData) {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = +(new Date()),
                    total,
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                total = data.total || this._getTotal(data.files);
                loaded = parseInt(
                    e.loaded / e.total * (data.chunkSize || total),
                    10
                ) + (data.uploadedBytes || 0);
                this._loaded += loaded - (data.loaded || data.uploadedBytes || 0);
                data.lengthComputable = true;
                data.loaded = loaded;
                data.total = total;
                data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger('progress', e, data);
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger('progressall', e, {
                    lengthComputable: true,
                    loaded: this._loaded,
                    total: this._total,
                    bitrate: this._bitrateTimer.getBitrate(
                        now,
                        this._loaded,
                        data.bitrateInterval
                    )
                });
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _initXHRData: function (options) {
            var formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = options.paramName[0];
            options.headers = options.headers || {};
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
                options.contentType = file.type;
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: options.paramName[index] || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (options.formData instanceof FormData) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        options.headers['Content-Disposition'] = 'attachment; filename="' +
                            encodeURI(file.name) + '"';
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // Files are also Blob instances, but some browsers
                            // (Firefox 3.6) support the File API but not Blobs.
                            // This check allows the tests to run with
                            // dummy objects:
                            if ((window.Blob && file instanceof Blob) ||
                                    (window.File && file instanceof File)) {
                                formData.append(
                                    options.paramName[index] || paramName,
                                    file,
                                    file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && $('<a></a>').prop('href', options.url)
                    .prop('host') !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options, 'iframe');
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type || options.form.prop('method') || '')
                .toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes = options.uploadedBytes || 0,
                mcs = options.maxChunkSize || fs,
                slice = file.slice || file.webkitSlice || file.mozSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = 'Uploaded bytes exceed file size';
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options);
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if upload is done and no progress
                        // event has been invoked for this chunk, or there has been
                        // no progress event with loaded equaling total:
                        if (!o.loaded || o.loaded < o.total) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
            }
            this._active += 1;
            // Initialize the global progress values:
            this._loaded += data.uploadedBytes || 0;
            this._total += this._getTotal(data.files);
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            if (!this._isXHRUpload(options) || !options.loaded ||
                    options.loaded < options.total) {
                var total = this._getTotal(options.files) || 1;
                // Create a progress event for each iframe load,
                // or if there has been no progress event with
                // loaded equaling total for XHR uploads:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            options.result = result;
            options.textStatus = textStatus;
            options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            options.jqXHR = jqXHR;
            options.textStatus = textStatus;
            options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._loaded -= options.loaded || options.uploadedBytes || 0;
                this._total -= options.total || this._getTotal(options.files);
            }
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._active -= 1;
            this._trigger('always', null, options);
            if (this._active === 0) {
                // The stop callback is triggered when all uploads have
                // been completed, equivalent to the global ajaxStop event:
                this._trigger('stop');
                // Reset the global progress values:
                this._loaded = this._total = 0;
                this._bitrateTimer = null;
            }
        },

        _onSend: function (e, data) {
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger('send', e, options) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._sending -= 1;
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift(),
                                isPending;
                            while (nextSlot) {
                                // jQuery 1.6 doesn't provide .state(),
                                // while jQuery 1.8+ removed .isRejected():
                                isPending = nextSlot.state ?
                                        nextSlot.state() === 'pending' :
                                        !nextSlot.isRejected();
                                if (isPending) {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    pipe = (this._sequence = this._sequence.pipe(send, send));
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                limit = options.limitMultiFileUploads,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i;
            if (!(options.singleFileUploads || limit) ||
                    !this._isXHRUpload(options)) {
                fileSet = [data.files];
                paramNameSet = [paramName];
            } else if (!options.singleFileUploads && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < data.files.length; i += limit) {
                    fileSet.push(data.files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = data.files;
            $.each(fileSet || data.files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                newData.submit = function () {
                    newData.jqXHR = this.jqXHR =
                        (that._trigger('submit', e, this) !== false) &&
                        that._onSend(e, this);
                    return this.jqXHR;
                };
                result = that._trigger('add', e, newData);
                return result;
            });
            return result;
        },

        _replaceFileInput: function (input) {
            var inputClone = input.clone(true);
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                dirReader;
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                dirReader.readEntries(function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                }, errorHandler);
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data.fileInput);
                }
                if (that._trigger('change', e, data) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var cbd = e.originalEvent.clipboardData,
                items = (cbd && cbd.items) || [],
                data = {files: []};
            $.each(items, function (index, item) {
                var file = item.getAsFile && item.getAsFile();
                if (file) {
                    data.files.push(file);
                }
            });
            if (this._trigger('paste', e, data) === false ||
                    this._onAdd(e, data) === false) {
                return false;
            }
        },

        _onDrop: function (e) {
            var that = this,
                dataTransfer = e.dataTransfer = e.originalEvent.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
            }
            this._getDroppedFiles(dataTransfer).always(function (files) {
                data.files = files;
                if (that._trigger('drop', e, data) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onDragOver: function (e) {
            var dataTransfer = e.dataTransfer = e.originalEvent.dataTransfer;
            if (this._trigger('dragover', e) === false) {
                return false;
            }
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1) {
                dataTransfer.dropEffect = 'copy';
                e.preventDefault();
            }
        },

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            this._on(this.options.fileInput, {
                change: this._onChange
            });
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var refresh = $.inArray(key, this._refreshOptionsList) !== -1;
            if (refresh) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (refresh) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _create: function () {
            var options = this.options;
            // Initialize options set via HTML5 data-attributes:
            $.extend(options, $(this.element[0].cloneNode(false)).data());
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = this._loaded = this._total = 0;
            this._initEventHandlers();
        },

        _destroy: function () {
            this._destroyEventHandlers();
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data).then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));
;
(function(a){"use strict";var b=function(a,c,d){var e=document.createElement("img"),f,g;return e.onerror=c,e.onload=function(){g&&(!d||!d.noRevoke)&&b.revokeObjectURL(g),c(b.scale(e,d))},window.Blob&&a instanceof Blob||window.File&&a instanceof File?(f=g=b.createObjectURL(a),e._type=a.type):f=a,f?(e.src=f,e):b.readFile(a,function(a){var b=a.target;b&&b.result?e.src=b.result:c(a)})},c=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL;b.detectSubsampling=function(a){var b=a.width,c=a.height,d,e;return b*c>1048576?(d=document.createElement("canvas"),d.width=d.height=1,e=d.getContext("2d"),e.drawImage(a,-b+1,0),e.getImageData(0,0,1,1).data[3]===0):!1},b.detectVerticalSquash=function(a,b){var c=document.createElement("canvas"),d=c.getContext("2d"),e,f,g,h,i;c.width=1,c.height=b,d.drawImage(a,0,0),e=d.getImageData(0,0,1,b).data,f=0,g=b,h=b;while(h>f)i=e[(h-1)*4+3],i===0?g=h:f=h,h=g+f>>1;return h/b},b.renderImageToCanvas=function(a,c,d,e){var f=a.width,g=a.height,h=c.getContext("2d"),i,j=1024,k=document.createElement("canvas"),l,m,n,o,p;h.save(),b.detectSubsampling(a)&&(f/=2,g/=2),i=b.detectVerticalSquash(a,g),k.width=k.height=j,l=k.getContext("2d"),m=0;while(m<g){n=m+j>g?g-m:j,o=0;while(o<f)p=o+j>f?f-o:j,l.clearRect(0,0,j,j),l.drawImage(a,-o,-m),h.drawImage(k,0,0,p,n,Math.floor(o*d/f),Math.floor(m*e/g/i),Math.ceil(p*d/f),Math.ceil(n*e/g/i)),o+=j;m+=j}h.restore(),k=l=null},b.scale=function(a,c){c=c||{};var d=document.createElement("canvas"),e=a.width,f=a.height,g=Math.max((c.minWidth||e)/e,(c.minHeight||f)/f);return g>1&&(e=parseInt(e*g,10),f=parseInt(f*g,10)),g=Math.min((c.maxWidth||e)/e,(c.maxHeight||f)/f),g<1&&(e=parseInt(e*g,10),f=parseInt(f*g,10)),a.getContext||c.canvas&&d.getContext?(d.width=e,d.height=f,a._type==="image/jpeg"?b.renderImageToCanvas(a,d,e,f):d.getContext("2d").drawImage(a,0,0,e,f),d):(a.width=e,a.height=f,a)},b.createObjectURL=function(a){return c?c.createObjectURL(a):!1},b.revokeObjectURL=function(a){return c?c.revokeObjectURL(a):!1},b.readFile=function(a,b){if(window.FileReader&&FileReader.prototype.readAsDataURL){var c=new FileReader;return c.onload=c.onerror=b,c.readAsDataURL(a),c}return!1},typeof define=="function"&&define.amd?define(function(){return b}):a.loadImage=b})(this);;
(function(a){"use strict";var b=a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype,c=a.Blob&&function(){try{return Boolean(new Blob)}catch(a){return!1}}(),d=c&&a.Uint8Array&&function(){try{return(new Blob([new Uint8Array(100)])).size===100}catch(a){return!1}}(),e=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder,f=(c||e)&&a.atob&&a.ArrayBuffer&&a.Uint8Array&&function(a){var b,f,g,h,i,j;a.split(",")[0].indexOf("base64")>=0?b=atob(a.split(",")[1]):b=decodeURIComponent(a.split(",")[1]),f=new ArrayBuffer(b.length),g=new Uint8Array(f);for(h=0;h<b.length;h+=1)g[h]=b.charCodeAt(h);return i=a.split(",")[0].split(":")[1].split(";")[0],c?new Blob([d?g:f],{type:i}):(j=new e,j.append(f),j.getBlob(i))};a.HTMLCanvasElement&&!b.toBlob&&(b.mozGetAsFile?b.toBlob=function(a,c,d){d&&b.toDataURL&&f?a(f(this.toDataURL(c,d))):a(this.mozGetAsFile("blob",c))}:b.toDataURL&&f&&(b.toBlob=function(a,b,c){a(f(this.toDataURL(b,c)))})),typeof define=="function"&&define.amd?define(function(){return f}):a.dataURLtoBlob=f})(this);;
/*
 * jQuery File Upload File Processing Plugin 1.2.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global define, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'load-image',
            'canvas-to-blob',
            './jquery.fileupload'
        ], factory);
    } else {
        // Browser globals:
        factory(
            window.jQuery,
            window.loadImage
        );
    }
}(function ($, loadImage) {
    'use strict';

    // The File Upload FP version extends the fileupload widget
    // with file processing functionality:
    $.widget('blueimp.fileupload', $.blueimp.fileupload, {

        options: {
            // The list of file processing actions:
            process: [
            /*
                {
                    action: 'load',
                    fileTypes: /^image\/(gif|jpeg|png)$/,
                    maxFileSize: 20000000 // 20MB
                },
                {
                    action: 'resize',
                    maxWidth: 1920,
                    maxHeight: 1200,
                    minWidth: 800,
                    minHeight: 600
                },
                {
                    action: 'save'
                }
            */
            ],

            // The add callback is invoked as soon as files are added to the
            // fileupload widget (via file input selection, drag & drop or add
            // API call). See the basic file upload widget for more information:
            add: function (e, data) {
                $(this).fileupload('process', data).done(function () {
                    data.submit();
                });
            }
        },

        processActions: {
            // Loads the image given via data.files and data.index
            // as img element if the browser supports canvas.
            // Accepts the options fileTypes (regular expression)
            // and maxFileSize (integer) to limit the files to load:
            load: function (data, options) {
                var that = this,
                    file = data.files[data.index],
                    dfd = $.Deferred();
                if (window.HTMLCanvasElement &&
                        window.HTMLCanvasElement.prototype.toBlob &&
                        ($.type(options.maxFileSize) !== 'number' ||
                            file.size < options.maxFileSize) &&
                        (!options.fileTypes ||
                            options.fileTypes.test(file.type))) {
                    loadImage(
                        file,
                        function (img) {
                            if (!img.src) {
                                return dfd.rejectWith(that, [data]);
                            }
                            data.img = img;
                            dfd.resolveWith(that, [data]);
                        }
                    );
                } else {
                    dfd.rejectWith(that, [data]);
                }
                return dfd.promise();
            },
            // Resizes the image given as data.img and updates
            // data.canvas with the resized image as canvas element.
            // Accepts the options maxWidth, maxHeight, minWidth and
            // minHeight to scale the given image:
            resize: function (data, options) {
                var img = data.img,
                    canvas;
                options = $.extend({canvas: true}, options);
                if (img) {
                    canvas = loadImage.scale(img, options);
                    if (canvas.width !== img.width ||
                            canvas.height !== img.height) {
                        data.canvas = canvas;
                    }
                }
                return data;
            },
            // Saves the processed image given as data.canvas
            // inplace at data.index of data.files:
            save: function (data, options) {
                // Do nothing if no processing has happened:
                if (!data.canvas) {
                    return data;
                }
                var that = this,
                    file = data.files[data.index],
                    name = file.name,
                    dfd = $.Deferred(),
                    callback = function (blob) {
                        if (!blob.name) {
                            if (file.type === blob.type) {
                                blob.name = file.name;
                            } else if (file.name) {
                                blob.name = file.name.replace(
                                    /\..+$/,
                                    '.' + blob.type.substr(6)
                                );
                            }
                        }
                        // Store the created blob at the position
                        // of the original file in the files list:
                        data.files[data.index] = blob;
                        dfd.resolveWith(that, [data]);
                    };
                // Use canvas.mozGetAsFile directly, to retain the filename, as
                // Gecko doesn't support the filename option for FormData.append:
                if (data.canvas.mozGetAsFile) {
                    callback(data.canvas.mozGetAsFile(
                        (/^image\/(jpeg|png)$/.test(file.type) && name) ||
                            ((name && name.replace(/\..+$/, '')) ||
                                'blob') + '.png',
                        file.type
                    ));
                } else {
                    data.canvas.toBlob(callback, file.type);
                }
                return dfd.promise();
            }
        },

        // Resizes the file at the given index and stores the created blob at
        // the original position of the files list, returns a Promise object:
        _processFile: function (files, index, options) {
            var that = this,
                dfd = $.Deferred().resolveWith(that, [{
                    files: files,
                    index: index
                }]),
                chain = dfd.promise();
            that._processing += 1;
            $.each(options.process, function (i, settings) {
                chain = chain.pipe(function (data) {
                    return that.processActions[settings.action]
                        .call(this, data, settings);
                });
            });
            chain.always(function () {
                that._processing -= 1;
                if (that._processing === 0) {
                    that.element
                        .removeClass('fileupload-processing');
                }
            });
            if (that._processing === 1) {
                that.element.addClass('fileupload-processing');
            }
            return chain;
        },

        // Processes the files given as files property of the data parameter,
        // returns a Promise object that allows to bind a done handler, which
        // will be invoked after processing all files (inplace) is done:
        process: function (data) {
            var that = this,
                options = $.extend({}, this.options, data);
            if (options.process && options.process.length &&
                    this._isXHRUpload(options)) {
                $.each(data.files, function (index, file) {
                    that._processingQueue = that._processingQueue.pipe(
                        function () {
                            var dfd = $.Deferred();
                            that._processFile(data.files, index, options)
                                .always(function () {
                                    dfd.resolveWith(that);
                                });
                            return dfd.promise();
                        }
                    );
                });
            }
            return this._processingQueue;
        },

        _create: function () {
            this._super();
            this._processing = 0;
            this._processingQueue = $.Deferred().resolveWith(this)
                .promise();
        }

    });

}));
;
/*
 * jQuery timepicker addon
 * By: Trent Richardson [http://trentrichardson.com]
 * Version 1.2
 * Last Modified: 02/02/2013
 *
 * Copyright 2013 Trent Richardson
 * You may use this project under MIT or GPL licenses.
 * http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
 * http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
 */

/*jslint evil: true, white: false, undef: false, nomen: false */

(function($) {

	/*
	* Lets not redefine timepicker, Prevent "Uncaught RangeError: Maximum call stack size exceeded"
	*/
	$.ui.timepicker = $.ui.timepicker || {};
	if ($.ui.timepicker.version) {
		return;
	}

	/*
	* Extend jQueryUI, get it started with our version number
	*/
	$.extend($.ui, {
		timepicker: {
			version: "1.2"
		}
	});

	/* 
	* Timepicker manager.
	* Use the singleton instance of this class, $.timepicker, to interact with the time picker.
	* Settings for (groups of) time pickers are maintained in an instance object,
	* allowing multiple different settings on the same page.
	*/
	var Timepicker = function() {
		this.regional = []; // Available regional settings, indexed by language code
		this.regional[''] = { // Default regional settings
			currentText: 'Now',
			closeText: 'Done',
			amNames: ['AM', 'A'],
			pmNames: ['PM', 'P'],
			timeFormat: 'HH:mm',
			timeSuffix: '',
			timeOnlyTitle: 'Choose Time',
			timeText: 'Time',
			hourText: 'Hour',
			minuteText: 'Minute',
			secondText: 'Second',
			millisecText: 'Millisecond',
			timezoneText: 'Time Zone',
			isRTL: false
		};
		this._defaults = { // Global defaults for all the datetime picker instances
			showButtonPanel: true,
			timeOnly: false,
			showHour: true,
			showMinute: true,
			showSecond: false,
			showMillisec: false,
			showTimezone: false,
			showTime: true,
			stepHour: 1,
			stepMinute: 1,
			stepSecond: 1,
			stepMillisec: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			timezone: null,
			useLocalTimezone: false,
			defaultTimezone: "+0000",
			hourMin: 0,
			minuteMin: 0,
			secondMin: 0,
			millisecMin: 0,
			hourMax: 23,
			minuteMax: 59,
			secondMax: 59,
			millisecMax: 999,
			minDateTime: null,
			maxDateTime: null,
			onSelect: null,
			hourGrid: 0,
			minuteGrid: 0,
			secondGrid: 0,
			millisecGrid: 0,
			alwaysSetTime: true,
			separator: ' ',
			altFieldTimeOnly: true,
			altTimeFormat: null,
			altSeparator: null,
			altTimeSuffix: null,
			pickerTimeFormat: null,
			pickerTimeSuffix: null,
			showTimepicker: true,
			timezoneIso8601: false,
			timezoneList: null,
			addSliderAccess: false,
			sliderAccessArgs: null,
			controlType: 'slider',
			defaultValue: null,
			parse: 'strict'
		};
		$.extend(this._defaults, this.regional['']);
	};

	$.extend(Timepicker.prototype, {
		$input: null,
		$altInput: null,
		$timeObj: null,
		inst: null,
		hour_slider: null,
		minute_slider: null,
		second_slider: null,
		millisec_slider: null,
		timezone_select: null,
		hour: 0,
		minute: 0,
		second: 0,
		millisec: 0,
		timezone: null,
		defaultTimezone: "+0000",
		hourMinOriginal: null,
		minuteMinOriginal: null,
		secondMinOriginal: null,
		millisecMinOriginal: null,
		hourMaxOriginal: null,
		minuteMaxOriginal: null,
		secondMaxOriginal: null,
		millisecMaxOriginal: null,
		ampm: '',
		formattedDate: '',
		formattedTime: '',
		formattedDateTime: '',
		timezoneList: null,
		units: ['hour','minute','second','millisec'],
		control: null,

		/* 
		* Override the default settings for all instances of the time picker.
		* @param  settings  object - the new settings to use as defaults (anonymous object)
		* @return the manager object
		*/
		setDefaults: function(settings) {
			extendRemove(this._defaults, settings || {});
			return this;
		},

		/*
		* Create a new Timepicker instance
		*/
		_newInst: function($input, o) {
			var tp_inst = new Timepicker(),
				inlineSettings = {},
                fns = {},
		        overrides, i;

			for (var attrName in this._defaults) {
				if(this._defaults.hasOwnProperty(attrName)){
					var attrValue = $input.attr('time:' + attrName);
					if (attrValue) {
						try {
							inlineSettings[attrName] = eval(attrValue);
						} catch (err) {
							inlineSettings[attrName] = attrValue;
						}
					}
				}
			}
		    overrides = {
		        beforeShow: function (input, dp_inst) {
		            if ($.isFunction(tp_inst._defaults.evnts.beforeShow)) {
		                return tp_inst._defaults.evnts.beforeShow.call($input[0], input, dp_inst, tp_inst);
		            }
		        },
		        onChangeMonthYear: function (year, month, dp_inst) {
		            // Update the time as well : this prevents the time from disappearing from the $input field.
		            tp_inst._updateDateTime(dp_inst);
		            if ($.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)) {
		                tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
		            }
		        },
		        onClose: function (dateText, dp_inst) {
		            if (tp_inst.timeDefined === true && $input.val() !== '') {
		                tp_inst._updateDateTime(dp_inst);
		            }
		            if ($.isFunction(tp_inst._defaults.evnts.onClose)) {
		                tp_inst._defaults.evnts.onClose.call($input[0], dateText, dp_inst, tp_inst);
		            }
		        }
		    };
		    for (i in overrides) {
		        if (overrides.hasOwnProperty(i)) {
		            fns[i] = o[i] || null;
		        }
		    }
		    tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, overrides, {
		        evnts:fns,
		        timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
		    });
			tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(val) {
				return val.toUpperCase();
			});
			tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(val) {
				return val.toUpperCase();
			});

			// controlType is string - key to our this._controls
			if(typeof(tp_inst._defaults.controlType) === 'string'){
				if($.fn[tp_inst._defaults.controlType] === undefined){
					tp_inst._defaults.controlType = 'select';
				}
				tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType];
			}
			// controlType is an object and must implement create, options, value methods
			else{ 
				tp_inst.control = tp_inst._defaults.controlType;
			}

			if (tp_inst._defaults.timezoneList === null) {
				var timezoneList = ['-1200', '-1100', '-1000', '-0930', '-0900', '-0800', '-0700', '-0600', '-0500', '-0430', '-0400', '-0330', '-0300', '-0200', '-0100', '+0000', 
									'+0100', '+0200', '+0300', '+0330', '+0400', '+0430', '+0500', '+0530', '+0545', '+0600', '+0630', '+0700', '+0800', '+0845', '+0900', '+0930', 
									'+1000', '+1030', '+1100', '+1130', '+1200', '+1245', '+1300', '+1400'];

				if (tp_inst._defaults.timezoneIso8601) {
					timezoneList = $.map(timezoneList, function(val) {
						return val == '+0000' ? 'Z' : (val.substring(0, 3) + ':' + val.substring(3));
					});
				}
				tp_inst._defaults.timezoneList = timezoneList;
			}

			tp_inst.timezone = tp_inst._defaults.timezone;
			tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin? tp_inst._defaults.hourMin : 
							tp_inst._defaults.hour > tp_inst._defaults.hourMax? tp_inst._defaults.hourMax : tp_inst._defaults.hour;
			tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin? tp_inst._defaults.minuteMin : 
							tp_inst._defaults.minute > tp_inst._defaults.minuteMax? tp_inst._defaults.minuteMax : tp_inst._defaults.minute;
			tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin? tp_inst._defaults.secondMin : 
							tp_inst._defaults.second > tp_inst._defaults.secondMax? tp_inst._defaults.secondMax : tp_inst._defaults.second;
			tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin? tp_inst._defaults.millisecMin : 
							tp_inst._defaults.millisec > tp_inst._defaults.millisecMax? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec;
			tp_inst.ampm = '';
			tp_inst.$input = $input;

			if (o.altField) {
				tp_inst.$altInput = $(o.altField).css({
					cursor: 'pointer'
				}).focus(function() {
					$input.trigger("focus");
				});
			}

			if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
				tp_inst._defaults.minDate = new Date();
			}
			if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
				tp_inst._defaults.maxDate = new Date();
			}

			// datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
			if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
				tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
			}
			if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
				tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
			}
			if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
				tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
			}
			if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
				tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
			}
			tp_inst.$input.bind('focus', function() {
				tp_inst._onFocus();
			});

			return tp_inst;
		},

		/*
		* add our sliders to the calendar
		*/
		_addTimePicker: function(dp_inst) {
			var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + ' ' + this.$altInput.val() : this.$input.val();

			this.timeDefined = this._parseTime(currDT);
			this._limitMinMaxDateTime(dp_inst, false);
			this._injectTimePicker();
		},

		/*
		* parse the time string from input value or _setTime
		*/
		_parseTime: function(timeString, withDate) {
			if (!this.inst) {
				this.inst = $.datepicker._getInst(this.$input[0]);
			}

			if (withDate || !this._defaults.timeOnly) {
				var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
				try {
					var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
					if (!parseRes.timeObj) {
						return false;
					}
					$.extend(this, parseRes.timeObj);
				} catch (err) {
					$.timepicker.log("Error parsing the date/time string: " + err +
									"\ndate/time string = " + timeString +
									"\ntimeFormat = " + this._defaults.timeFormat +
									"\ndateFormat = " + dp_dateFormat);
					return false;
				}
				return true;
			} else {
				var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
				if (!timeObj) {
					return false;
				}
				$.extend(this, timeObj);
				return true;
			}
		},

		/*
		* generate and inject html for timepicker into ui datepicker
		*/
		_injectTimePicker: function() {
			var $dp = this.inst.dpDiv,
				o = this.inst.settings,
				tp_inst = this,
				litem = '',
				uitem = '',
				max = {},
				gridSize = {},
				size = null;

			// Prevent displaying twice
			if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
				var noDisplay = ' style="display:none;"',
					html = '<div class="ui-timepicker-div'+ (o.isRTL? ' ui-timepicker-rtl' : '') +'"><dl>' + '<dt class="ui_tpicker_time_label"' + ((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' + 
								'<dd class="ui_tpicker_time"' + ((o.showTime) ? '' : noDisplay) + '></dd>';

				// Create the markup
				for(var i=0,l=this.units.length; i<l; i++){
					litem = this.units[i];
					uitem = litem.substr(0,1).toUpperCase() + litem.substr(1);
					// Added by Peter Medeiros:
					// - Figure out what the hour/minute/second max should be based on the step values.
					// - Example: if stepMinute is 15, then minMax is 45.
					max[litem] = parseInt((o[litem+'Max'] - ((o[litem+'Max'] - o[litem+'Min']) % o['step'+uitem])), 10);
					gridSize[litem] = 0;

					html += '<dt class="ui_tpicker_'+ litem +'_label"' + ((o['show'+uitem]) ? '' : noDisplay) + '>' + o[litem +'Text'] + '</dt>' + 
								'<dd class="ui_tpicker_'+ litem +'"><div class="ui_tpicker_'+ litem +'_slider"' + ((o['show'+uitem]) ? '' : noDisplay) + '></div>';

					if (o['show'+uitem] && o[litem+'Grid'] > 0) {
						html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

						if(litem == 'hour'){
							for (var h = o[litem+'Min']; h <= max[litem]; h += parseInt(o[litem+'Grid'], 10)) {
								gridSize[litem]++;
								var tmph = $.datepicker.formatTime(useAmpm(o.pickerTimeFormat || o.timeFormat)? 'hht':'HH', {hour:h}, o);									
								html += '<td data-for="'+litem+'">' + tmph + '</td>';
							}
						}
						else{
							for (var m = o[litem+'Min']; m <= max[litem]; m += parseInt(o[litem+'Grid'], 10)) {
								gridSize[litem]++;
								html += '<td data-for="'+litem+'">' + ((m < 10) ? '0' : '') + m + '</td>';
							}
						}

						html += '</tr></table></div>';
					}
					html += '</dd>';
				}
				
				// Timezone
				html += '<dt class="ui_tpicker_timezone_label"' + ((o.showTimezone) ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
				html += '<dd class="ui_tpicker_timezone" ' + ((o.showTimezone) ? '' : noDisplay) + '></dd>';

				// Create the elements from string
				html += '</dl></div>';
				var $tp = $(html);

				// if we only want time picker...
				if (o.timeOnly === true) {
					$tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' + '<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' + '</div>');
					$dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
				}
				
				// add sliders, adjust grids, add events
				for(var i=0,l=tp_inst.units.length; i<l; i++){
					litem = tp_inst.units[i];
					uitem = litem.substr(0,1).toUpperCase() + litem.substr(1);

					// add the slider
					tp_inst[litem+'_slider'] = tp_inst.control.create(tp_inst, $tp.find('.ui_tpicker_'+litem+'_slider'), litem, tp_inst[litem], o[litem+'Min'], max[litem], o['step'+uitem]);

					// adjust the grid and add click event
					if (o['show'+uitem] && o[litem+'Grid'] > 0) {
						size = 100 * gridSize[litem] * o[litem+'Grid'] / (max[litem] - o[litem+'Min']);
						$tp.find('.ui_tpicker_'+litem+' table').css({
							width: size + "%",
							marginLeft: o.isRTL? '0' : ((size / (-2 * gridSize[litem])) + "%"),
							marginRight: o.isRTL? ((size / (-2 * gridSize[litem])) + "%") : '0',
							borderCollapse: 'collapse'
						}).find("td").click(function(e){
								var $t = $(this),
									h = $t.html(),
									n = parseInt(h.replace(/[^0-9]/g),10),
									ap = h.replace(/[^apm]/ig),
									f = $t.data('for'); // loses scope, so we use data-for

								if(f == 'hour'){
									if(ap.indexOf('p') !== -1 && n < 12){
										n += 12;
									}
									else{
										if(ap.indexOf('a') !== -1 && n === 12){
											n = 0;
										}
									}
								}
								
								tp_inst.control.value(tp_inst, tp_inst[f+'_slider'], litem, n);

								tp_inst._onTimeChange();
								tp_inst._onSelectHandler();
							})
						.css({
								cursor: 'pointer',
								width: (100 / gridSize[litem]) + '%',
								textAlign: 'center',
								overflow: 'hidden'
							});
					} // end if grid > 0
				} // end for loop

				// Add timezone options
				this.timezone_select = $tp.find('.ui_tpicker_timezone').append('<select></select>').find("select");
				$.fn.append.apply(this.timezone_select,
				$.map(o.timezoneList, function(val, idx) {
					return $("<option />").val(typeof val == "object" ? val.value : val).text(typeof val == "object" ? val.label : val);
				}));
				if (typeof(this.timezone) != "undefined" && this.timezone !== null && this.timezone !== "") {
					var local_date = new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12);
					var local_timezone = $.timepicker.timeZoneOffsetString(local_date);
					if (local_timezone == this.timezone) {
						selectLocalTimeZone(tp_inst);
					} else {
						this.timezone_select.val(this.timezone);
					}
				} else {
					if (typeof(this.hour) != "undefined" && this.hour !== null && this.hour !== "") {
						this.timezone_select.val(o.defaultTimezone);
					} else {
						selectLocalTimeZone(tp_inst);
					}
				}
				this.timezone_select.change(function() {
					tp_inst._defaults.useLocalTimezone = false;
					tp_inst._onTimeChange();
					tp_inst._onSelectHandler();
				});
				// End timezone options
				
				// inject timepicker into datepicker
				var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
				if ($buttonPanel.length) {
					$buttonPanel.before($tp);
				} else {
					$dp.append($tp);
				}

				this.$timeObj = $tp.find('.ui_tpicker_time');

				if (this.inst !== null) {
					var timeDefined = this.timeDefined;
					this._onTimeChange();
					this.timeDefined = timeDefined;
				}

				// slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
				if (this._defaults.addSliderAccess) {
					var sliderAccessArgs = this._defaults.sliderAccessArgs,
						rtl = this._defaults.isRTL;
					sliderAccessArgs.isRTL = rtl;
						
					setTimeout(function() { // fix for inline mode
						if ($tp.find('.ui-slider-access').length === 0) {
							$tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

							// fix any grids since sliders are shorter
							var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
							if (sliderAccessWidth) {
								$tp.find('table:visible').each(function() {
									var $g = $(this),
										oldWidth = $g.outerWidth(),
										oldMarginLeft = $g.css(rtl? 'marginRight':'marginLeft').toString().replace('%', ''),
										newWidth = oldWidth - sliderAccessWidth,
										newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%',
										css = { width: newWidth, marginRight: 0, marginLeft: 0 };
									css[rtl? 'marginRight':'marginLeft'] = newMarginLeft;
									$g.css(css);
								});
							}
						}
					}, 10);
				}
				// end slideAccess integration

			}
		},

		/*
		* This function tries to limit the ability to go outside the
		* min/max date range
		*/
		_limitMinMaxDateTime: function(dp_inst, adjustSliders) {
			var o = this._defaults,
				dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

			if (!this._defaults.showTimepicker) {
				return;
			} // No time so nothing to check here

			if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
				var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
					minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null) {
					this.hourMinOriginal = o.hourMin;
					this.minuteMinOriginal = o.minuteMin;
					this.secondMinOriginal = o.secondMin;
					this.millisecMinOriginal = o.millisecMin;
				}

				if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
					this._defaults.hourMin = minDateTime.getHours();
					if (this.hour <= this._defaults.hourMin) {
						this.hour = this._defaults.hourMin;
						this._defaults.minuteMin = minDateTime.getMinutes();
						if (this.minute <= this._defaults.minuteMin) {
							this.minute = this._defaults.minuteMin;
							this._defaults.secondMin = minDateTime.getSeconds();
							if (this.second <= this._defaults.secondMin) {
								this.second = this._defaults.secondMin;
								this._defaults.millisecMin = minDateTime.getMilliseconds();
							} else {
								if (this.millisec < this._defaults.millisecMin) {
									this.millisec = this._defaults.millisecMin;
								}
								this._defaults.millisecMin = this.millisecMinOriginal;
							}
						} else {
							this._defaults.secondMin = this.secondMinOriginal;
							this._defaults.millisecMin = this.millisecMinOriginal;
						}
					} else {
						this._defaults.minuteMin = this.minuteMinOriginal;
						this._defaults.secondMin = this.secondMinOriginal;
						this._defaults.millisecMin = this.millisecMinOriginal;
					}
				} else {
					this._defaults.hourMin = this.hourMinOriginal;
					this._defaults.minuteMin = this.minuteMinOriginal;
					this._defaults.secondMin = this.secondMinOriginal;
					this._defaults.millisecMin = this.millisecMinOriginal;
				}
			}

			if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
				var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
					maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null) {
					this.hourMaxOriginal = o.hourMax;
					this.minuteMaxOriginal = o.minuteMax;
					this.secondMaxOriginal = o.secondMax;
					this.millisecMaxOriginal = o.millisecMax;
				}

				if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()) {
					this._defaults.hourMax = maxDateTime.getHours();
					if (this.hour >= this._defaults.hourMax) {
						this.hour = this._defaults.hourMax;
						this._defaults.minuteMax = maxDateTime.getMinutes();
						if (this.minute >= this._defaults.minuteMax) {
							this.minute = this._defaults.minuteMax;
							this._defaults.secondMax = maxDateTime.getSeconds();
							if (this.second >= this._defaults.secondMax) {
								this.second = this._defaults.secondMax;
								this._defaults.millisecMax = maxDateTime.getMilliseconds();
							} else {
								if (this.millisec > this._defaults.millisecMax) {
									this.millisec = this._defaults.millisecMax;
								}
								this._defaults.millisecMax = this.millisecMaxOriginal;
							}
						} else {
							this._defaults.secondMax = this.secondMaxOriginal;
							this._defaults.millisecMax = this.millisecMaxOriginal;
						}
					} else {
						this._defaults.minuteMax = this.minuteMaxOriginal;
						this._defaults.secondMax = this.secondMaxOriginal;
						this._defaults.millisecMax = this.millisecMaxOriginal;
					}
				} else {
					this._defaults.hourMax = this.hourMaxOriginal;
					this._defaults.minuteMax = this.minuteMaxOriginal;
					this._defaults.secondMax = this.secondMaxOriginal;
					this._defaults.millisecMax = this.millisecMaxOriginal;
				}
			}

			if (adjustSliders !== undefined && adjustSliders === true) {
				var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
					minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
					secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
					millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10);

				if (this.hour_slider) {
					this.control.options(this, this.hour_slider, 'hour', { min: this._defaults.hourMin, max: hourMax });
					this.control.value(this, this.hour_slider, 'hour', this.hour - (this.hour % this._defaults.stepHour));
				}
				if (this.minute_slider) {
					this.control.options(this, this.minute_slider, 'minute', { min: this._defaults.minuteMin, max: minMax });
					this.control.value(this, this.minute_slider, 'minute', this.minute - (this.minute % this._defaults.stepMinute));
				}
				if (this.second_slider) {
					this.control.options(this, this.second_slider, 'second', { min: this._defaults.secondMin, max: secMax });
					this.control.value(this, this.second_slider, 'second', this.second - (this.second % this._defaults.stepSecond));
				}
				if (this.millisec_slider) {
					this.control.options(this, this.millisec_slider, 'millisec', { min: this._defaults.millisecMin, max: millisecMax });
					this.control.value(this, this.millisec_slider, 'millisec', this.millisec - (this.millisec % this._defaults.stepMillisec));
				}
			}

		},

		/*
		* when a slider moves, set the internal time...
		* on time change is also called when the time is updated in the text field
		*/
		_onTimeChange: function() {
			var hour = (this.hour_slider) ? this.control.value(this, this.hour_slider, 'hour') : false,
				minute = (this.minute_slider) ? this.control.value(this, this.minute_slider, 'minute') : false,
				second = (this.second_slider) ? this.control.value(this, this.second_slider, 'second') : false,
				millisec = (this.millisec_slider) ? this.control.value(this, this.millisec_slider, 'millisec') : false,
				timezone = (this.timezone_select) ? this.timezone_select.val() : false,
				o = this._defaults,
				pickerTimeFormat = o.pickerTimeFormat || o.timeFormat,
				pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix;

			if (typeof(hour) == 'object') {
				hour = false;
			}
			if (typeof(minute) == 'object') {
				minute = false;
			}
			if (typeof(second) == 'object') {
				second = false;
			}
			if (typeof(millisec) == 'object') {
				millisec = false;
			}
			if (typeof(timezone) == 'object') {
				timezone = false;
			}

			if (hour !== false) {
				hour = parseInt(hour, 10);
			}
			if (minute !== false) {
				minute = parseInt(minute, 10);
			}
			if (second !== false) {
				second = parseInt(second, 10);
			}
			if (millisec !== false) {
				millisec = parseInt(millisec, 10);
			}

			var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

			// If the update was done in the input field, the input field should not be updated.
			// If the update was done using the sliders, update the input field.
			var hasChanged = (hour != this.hour || minute != this.minute || second != this.second || millisec != this.millisec 
								|| (this.ampm.length > 0 && (hour < 12) != ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) 
								|| ((this.timezone === null && timezone != this.defaultTimezone) || (this.timezone !== null && timezone != this.timezone)));

			if (hasChanged) {

				if (hour !== false) {
					this.hour = hour;
				}
				if (minute !== false) {
					this.minute = minute;
				}
				if (second !== false) {
					this.second = second;
				}
				if (millisec !== false) {
					this.millisec = millisec;
				}
				if (timezone !== false) {
					this.timezone = timezone;
				}

				if (!this.inst) {
					this.inst = $.datepicker._getInst(this.$input[0]);
				}

				this._limitMinMaxDateTime(this.inst, true);
			}
			if (useAmpm(o.timeFormat)) {
				this.ampm = ampm;
			}

			// Updates the time within the timepicker
			this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o);
			if (this.$timeObj) {
				if(pickerTimeFormat === o.timeFormat){
					this.$timeObj.text(this.formattedTime + pickerTimeSuffix);
				}
				else{
					this.$timeObj.text($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix);
				}
			}

			this.timeDefined = true;
			if (hasChanged) {
				this._updateDateTime();
			}
		},

		/*
		* call custom onSelect.
		* bind to sliders slidestop, and grid click.
		*/
		_onSelectHandler: function() {
			var onSelect = this._defaults.onSelect || this.inst.settings.onSelect;
			var inputEl = this.$input ? this.$input[0] : null;
			if (onSelect && inputEl) {
				onSelect.apply(inputEl, [this.formattedDateTime, this]);
			}
		},

		/*
		* update our input with the new date time..
		*/
		_updateDateTime: function(dp_inst) {
			dp_inst = this.inst || dp_inst;
			var dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
				dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
				formatCfg = $.datepicker._getFormatConfig(dp_inst),
				timeAvailable = dt !== null && this.timeDefined;
			this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
			var formattedDateTime = this.formattedDate;
			
			// if a slider was changed but datepicker doesn't have a value yet, set it
			if(dp_inst.lastVal==""){
                dp_inst.currentYear=dp_inst.selectedYear;
                dp_inst.currentMonth=dp_inst.selectedMonth;
                dp_inst.currentDay=dp_inst.selectedDay;
            }

			/*
			* remove following lines to force every changes in date picker to change the input value
			* Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
			* If the user manually empty the value in the input field, the date picker will never change selected value.
			*/
			//if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
			//	return;
			//}

			if (this._defaults.timeOnly === true) {
				formattedDateTime = this.formattedTime;
			} else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
				formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
			}

			this.formattedDateTime = formattedDateTime;

			if (!this._defaults.showTimepicker) {
				this.$input.val(this.formattedDate);
			} else if (this.$altInput && this._defaults.altFieldTimeOnly === true) {
				this.$altInput.val(this.formattedTime);
				this.$input.val(this.formattedDate);
			} else if (this.$altInput) {
				this.$input.val(formattedDateTime);
				var altFormattedDateTime = '',
					altSeparator = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
					altTimeSuffix = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;

				if (this._defaults.altFormat) altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg);
				else altFormattedDateTime = this.formattedDate;
				if (altFormattedDateTime) altFormattedDateTime += altSeparator;
				if (this._defaults.altTimeFormat) altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
				else altFormattedDateTime += this.formattedTime + altTimeSuffix;
				this.$altInput.val(altFormattedDateTime);
			} else {
				this.$input.val(formattedDateTime);
			}

			this.$input.trigger("change");
		},

		_onFocus: function() {
			if (!this.$input.val() && this._defaults.defaultValue) {
				this.$input.val(this._defaults.defaultValue);
				var inst = $.datepicker._getInst(this.$input.get(0)),
					tp_inst = $.datepicker._get(inst, 'timepicker');
				if (tp_inst) {
					if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
						try {
							$.datepicker._updateDatepicker(inst);
						} catch (err) {
							$.timepicker.log(err);
						}
					}
				}
			}
		},

		/*
		* Small abstraction to control types
		* We can add more, just be sure to follow the pattern: create, options, value
		*/
		_controls: {
			// slider methods
			slider: {
				create: function(tp_inst, obj, unit, val, min, max, step){
					var rtl = tp_inst._defaults.isRTL; // if rtl go -60->0 instead of 0->60
					return obj.prop('slide', null).slider({
						orientation: "horizontal",
						value: rtl? val*-1 : val,
						min: rtl? max*-1 : min,
						max: rtl? min*-1 : max,
						step: step,
						slide: function(event, ui) {
							tp_inst.control.value(tp_inst, $(this), unit, rtl? ui.value*-1:ui.value);
							tp_inst._onTimeChange();
						},
						stop: function(event, ui) {
							tp_inst._onSelectHandler();
						}
					});	
				},
				options: function(tp_inst, obj, unit, opts, val){
					if(tp_inst._defaults.isRTL){
						if(typeof(opts) == 'string'){
							if(opts == 'min' || opts == 'max'){
								if(val !== undefined)
									return obj.slider(opts, val*-1);
								return Math.abs(obj.slider(opts));
							}
							return obj.slider(opts);
						}
						var min = opts.min, 
							max = opts.max;
						opts.min = opts.max = null;
						if(min !== undefined)
							opts.max = min * -1;
						if(max !== undefined)
							opts.min = max * -1;
						return obj.slider(opts);
					}
					if(typeof(opts) == 'string' && val !== undefined)
							return obj.slider(opts, val);
					return obj.slider(opts);
				},
				value: function(tp_inst, obj, unit, val){
					if(tp_inst._defaults.isRTL){
						if(val !== undefined)
							return obj.slider('value', val*-1);
						return Math.abs(obj.slider('value'));
					}
					if(val !== undefined)
						return obj.slider('value', val);
					return obj.slider('value');
				}
			},
			// select methods
			select: {
				create: function(tp_inst, obj, unit, val, min, max, step){
					var sel = '<select class="ui-timepicker-select" data-unit="'+ unit +'" data-min="'+ min +'" data-max="'+ max +'" data-step="'+ step +'">',
						ul = tp_inst._defaults.timeFormat.indexOf('t') !== -1? 'toLowerCase':'toUpperCase',
						m = 0;

					for(var i=min; i<=max; i+=step){						
						sel += '<option value="'+ i +'"'+ (i==val? ' selected':'') +'>';
						if(unit == 'hour' && useAmpm(tp_inst._defaults.pickerTimeFormat || tp_inst._defaults.timeFormat))
							sel += $.datepicker.formatTime("hh TT", {hour:i}, tp_inst._defaults);
						else if(unit == 'millisec' || i >= 10) sel += i;
						else sel += '0'+ i.toString();
						sel += '</option>';
					}
					sel += '</select>';

					obj.children('select').remove();

					$(sel).appendTo(obj).change(function(e){
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					});

					return obj;
				},
				options: function(tp_inst, obj, unit, opts, val){
					var o = {},
						$t = obj.children('select');
					if(typeof(opts) == 'string'){
						if(val === undefined)
							return $t.data(opts);
						o[opts] = val;	
					}
					else o = opts;
					return tp_inst.control.create(tp_inst, obj, $t.data('unit'), $t.val(), o.min || $t.data('min'), o.max || $t.data('max'), o.step || $t.data('step'));
				},
				value: function(tp_inst, obj, unit, val){
					var $t = obj.children('select');
					if(val !== undefined)
						return $t.val(val);
					return $t.val();
				}
			}
		} // end _controls

	});

	$.fn.extend({
		/*
		* shorthand just to use timepicker..
		*/
		timepicker: function(o) {
			o = o || {};
			var tmp_args = Array.prototype.slice.call(arguments);

			if (typeof o == 'object') {
				tmp_args[0] = $.extend(o, {
					timeOnly: true
				});
			}

			return $(this).each(function() {
				$.fn.datetimepicker.apply($(this), tmp_args);
			});
		},

		/*
		* extend timepicker to datepicker
		*/
		datetimepicker: function(o) {
			o = o || {};
			var tmp_args = arguments;

			if (typeof(o) == 'string') {
				if (o == 'getDate') {
					return $.fn.datepicker.apply($(this[0]), tmp_args);
				} else {
					return this.each(function() {
						var $t = $(this);
						$t.datepicker.apply($t, tmp_args);
					});
				}
			} else {
				return this.each(function() {
					var $t = $(this);
					$t.datepicker($.timepicker._newInst($t, o)._defaults);
				});
			}
		}
	});

	/*
	* Public Utility to parse date and time
	*/
	$.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
		if (parseRes.timeObj) {
			var t = parseRes.timeObj;
			parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
		}

		return parseRes.date;
	};

	/*
	* Public utility to parse time
	*/
	$.datepicker.parseTime = function(timeFormat, timeString, options) {		
		var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {});

		// Strict parse requires the timeString to match the timeFormat exactly
		var strictParse = function(f, s, o){

			// pattern for standard and localized AM/PM markers
			var getPatternAmpm = function(amNames, pmNames) {
				var markers = [];
				if (amNames) {
					$.merge(markers, amNames);
				}
				if (pmNames) {
					$.merge(markers, pmNames);
				}
				markers = $.map(markers, function(val) {
					return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&');
				});
				return '(' + markers.join('|') + ')?';
			};

			// figure out position of time elements.. cause js cant do named captures
			var getFormatPositions = function(timeFormat) {
				var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z|'.*?')/g),
					orders = {
						h: -1,
						m: -1,
						s: -1,
						l: -1,
						t: -1,
						z: -1
					};

				if (finds) {
					for (var i = 0; i < finds.length; i++) {
						if (orders[finds[i].toString().charAt(0)] == -1) {
							orders[finds[i].toString().charAt(0)] = i + 1;
						}
					}
				}
				return orders;
			};

			var regstr = '^' + f.toString()
					.replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[lz]|'.*?')/g, function (match) {
							var ml = match.length;
							switch (match.charAt(0).toLowerCase()) {
								case 'h': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 'm': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 's': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 'l': return '(\\d?\\d?\\d)';
								case 'z': return '(z|[-+]\\d\\d:?\\d\\d|\\S+)?';
								case 't': return getPatternAmpm(o.amNames, o.pmNames);
								default:    // literal escaped in quotes
									return '(' + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (m) { return "\\" + m; }) + ')?';
							}
						})
					.replace(/\s/g, '\\s?') +
					o.timeSuffix + '$',
				order = getFormatPositions(f),
				ampm = '',
				treg;

			treg = s.match(new RegExp(regstr, 'i'));

			var resTime = {
				hour: 0,
				minute: 0,
				second: 0,
				millisec: 0
			};

			if (treg) {
				if (order.t !== -1) {
					if (treg[order.t] === undefined || treg[order.t].length === 0) {
						ampm = '';
						resTime.ampm = '';
					} else {
						ampm = $.inArray(treg[order.t].toUpperCase(), o.amNames) !== -1 ? 'AM' : 'PM';
						resTime.ampm = o[ampm == 'AM' ? 'amNames' : 'pmNames'][0];
					}
				}

				if (order.h !== -1) {
					if (ampm == 'AM' && treg[order.h] == '12') {
						resTime.hour = 0; // 12am = 0 hour
					} else {
						if (ampm == 'PM' && treg[order.h] != '12') {
							resTime.hour = parseInt(treg[order.h], 10) + 12; // 12pm = 12 hour, any other pm = hour + 12
						} else {
							resTime.hour = Number(treg[order.h]);
						}
					}
				}

				if (order.m !== -1) {
					resTime.minute = Number(treg[order.m]);
				}
				if (order.s !== -1) {
					resTime.second = Number(treg[order.s]);
				}
				if (order.l !== -1) {
					resTime.millisec = Number(treg[order.l]);
				}
				if (order.z !== -1 && treg[order.z] !== undefined) {
					var tz = treg[order.z].toUpperCase();
					switch (tz.length) {
					case 1:
						// Z
						tz = o.timezoneIso8601 ? 'Z' : '+0000';
						break;
					case 5:
						// +hhmm
						if (o.timezoneIso8601) {
							tz = tz.substring(1) == '0000' ? 'Z' : tz.substring(0, 3) + ':' + tz.substring(3);
						}
						break;
					case 6:
						// +hh:mm
						if (!o.timezoneIso8601) {
							tz = tz == 'Z' || tz.substring(1) == '00:00' ? '+0000' : tz.replace(/:/, '');
						} else {
							if (tz.substring(1) == '00:00') {
								tz = 'Z';
							}
						}
						break;
					}
					resTime.timezone = tz;
				}


				return resTime;
			}
			return false;
		};// end strictParse

		// First try JS Date, if that fails, use strictParse
		var looseParse = function(f,s,o){
			try{
				var d = new Date('2012-01-01 '+ s);
				if(isNaN(d.getTime())){
					d = new Date('2012-01-01T'+ s);
					if(isNaN(d.getTime())){
						d = new Date('01/01/2012 '+ s);
						if(isNaN(d.getTime())){
							throw "Unable to parse time with native Date: "+ s;
						}
					}
				}

				return {
					hour: d.getHours(),
					minute: d.getMinutes(),
					second: d.getSeconds(),
					millisec: d.getMilliseconds(),
					timezone: $.timepicker.timeZoneOffsetString(d)
				};
			}
			catch(err){
				try{
					return strictParse(f,s,o);
				}
				catch(err2){
					$.timepicker.log("Unable to parse \ntimeString: "+ s +"\ntimeFormat: "+ f);
				}				
			}
			return false;
		}; // end looseParse
		
		if(typeof o.parse === "function"){
			return o.parse(timeFormat, timeString, o)
		}
		if(o.parse === 'loose'){
			return looseParse(timeFormat, timeString, o);
		}
		return strictParse(timeFormat, timeString, o);
	};

	/*
	* Public utility to format the time
	* format = string format of the time
	* time = a {}, not a Date() for timezones
	* options = essentially the regional[].. amNames, pmNames, ampm
	*/
	$.datepicker.formatTime = function(format, time, options) {
		options = options || {};
		options = $.extend({}, $.timepicker._defaults, options);
		time = $.extend({
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			timezone: '+0000'
		}, time);

		var tmptime = format,
			ampmName = options.amNames[0],
			hour = parseInt(time.hour, 10);

		if (hour > 11) {
			ampmName = options.pmNames[0];
		}

		tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[lz]|('.*?'|".*?"))/g, function(match) {
		switch (match) {
			case 'HH':
				return ('0' + hour).slice(-2);
			case 'H':
				return hour;
			case 'hh':
				return ('0' + convert24to12(hour)).slice(-2);
			case 'h':
				return convert24to12(hour);
			case 'mm':
				return ('0' + time.minute).slice(-2);
			case 'm':
				return time.minute;
			case 'ss':
				return ('0' + time.second).slice(-2);
			case 's':
				return time.second;
			case 'l':
				return ('00' + time.millisec).slice(-3);
			case 'z':
				return time.timezone === null? options.defaultTimezone : time.timezone;
			case 'T': 
				return ampmName.charAt(0).toUpperCase();
			case 'TT': 
				return ampmName.toUpperCase();
			case 't':
				return ampmName.charAt(0).toLowerCase();
			case 'tt':
				return ampmName.toLowerCase();
			default:
				return match.replace(/\'/g, "") || "'";
			}
		});

		tmptime = $.trim(tmptime);
		return tmptime;
	};

	/*
	* the bad hack :/ override datepicker so it doesnt close on select
	// inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
	*/
	$.datepicker._base_selectDate = $.datepicker._selectDate;
	$.datepicker._selectDate = function(id, dateStr) {
		var inst = this._getInst($(id)[0]),
			tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			tp_inst._limitMinMaxDateTime(inst, true);
			inst.inline = inst.stay_open = true;
			//This way the onSelect handler called from calendarpicker get the full dateTime
			this._base_selectDate(id, dateStr);
			inst.inline = inst.stay_open = false;
			this._notifyChange(inst);
			this._updateDatepicker(inst);
		} else {
			this._base_selectDate(id, dateStr);
		}
	};

	/*
	* second bad hack :/ override datepicker so it triggers an event when changing the input field
	* and does not redraw the datepicker on every selectDate event
	*/
	$.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
	$.datepicker._updateDatepicker = function(inst) {

		// don't popup the datepicker if there is another instance already opened
		var input = inst.input[0];
		if ($.datepicker._curInst && $.datepicker._curInst != inst && $.datepicker._datepickerShowing && $.datepicker._lastInput != input) {
			return;
		}

		if (typeof(inst.stay_open) !== 'boolean' || inst.stay_open === false) {

			this._base_updateDatepicker(inst);

			// Reload the time control when changing something in the input text field.
			var tp_inst = this._get(inst, 'timepicker');
			if (tp_inst) {
				tp_inst._addTimePicker(inst);

//				if (tp_inst._defaults.useLocalTimezone) { //checks daylight saving with the new date.
//					var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay, 12);
//					selectLocalTimeZone(tp_inst, date);
//					tp_inst._onTimeChange();
//				}
			}
		}
	};

	/*
	* third bad hack :/ override datepicker so it allows spaces and colon in the input field
	*/
	$.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
	$.datepicker._doKeyPress = function(event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if ($.datepicker._get(inst, 'constrainInput')) {
				var ampm = useAmpm(tp_inst._defaults.timeFormat),
					dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
					datetimeChars = tp_inst._defaults.timeFormat.toString()
											.replace(/[hms]/g, '')
											.replace(/TT/g, ampm ? 'APM' : '')
											.replace(/Tt/g, ampm ? 'AaPpMm' : '')
											.replace(/tT/g, ampm ? 'AaPpMm' : '')
											.replace(/T/g, ampm ? 'AP' : '')
											.replace(/tt/g, ampm ? 'apm' : '')
											.replace(/t/g, ampm ? 'ap' : '') + 
											" " + tp_inst._defaults.separator + 
											tp_inst._defaults.timeSuffix + 
											(tp_inst._defaults.showTimezone ? tp_inst._defaults.timezoneList.join('') : '') + 
											(tp_inst._defaults.amNames.join('')) + (tp_inst._defaults.pmNames.join('')) + 
											dateChars,
					chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
				return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
			}
		}

		return $.datepicker._base_doKeyPress(event);
	};

	/*
	* Fourth bad hack :/ override _updateAlternate function used in inline mode to init altField
	*/
	$.datepicker._base_updateAlternate = $.datepicker._updateAlternate;
	/* Update any alternate field to synchronise with the main field. */
	$.datepicker._updateAlternate = function(inst) {
		var tp_inst = this._get(inst, 'timepicker');
		if(tp_inst){
			var altField = tp_inst._defaults.altField;
			if (altField) { // update alternate field too
				var altFormat = tp_inst._defaults.altFormat || tp_inst._defaults.dateFormat,
					date = this._getDate(inst),
					formatCfg = $.datepicker._getFormatConfig(inst),
					altFormattedDateTime = '', 
					altSeparator = tp_inst._defaults.altSeparator ? tp_inst._defaults.altSeparator : tp_inst._defaults.separator, 
					altTimeSuffix = tp_inst._defaults.altTimeSuffix ? tp_inst._defaults.altTimeSuffix : tp_inst._defaults.timeSuffix,
					altTimeFormat = tp_inst._defaults.altTimeFormat !== null ? tp_inst._defaults.altTimeFormat : tp_inst._defaults.timeFormat;
				
				altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst, tp_inst._defaults) + altTimeSuffix;
				if(!tp_inst._defaults.timeOnly && !tp_inst._defaults.altFieldTimeOnly && date !== null){
					if(tp_inst._defaults.altFormat)
						altFormattedDateTime = $.datepicker.formatDate(tp_inst._defaults.altFormat, date, formatCfg) + altSeparator + altFormattedDateTime;
					else altFormattedDateTime = tp_inst.formattedDate + altSeparator + altFormattedDateTime;
				}
				$(altField).val(altFormattedDateTime);
			}
		}
		else{
			$.datepicker._base_updateAlternate(inst);
		}
	};

	/*
	* Override key up event to sync manual input changes.
	*/
	$.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
	$.datepicker._doKeyUp = function(event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
				try {
					$.datepicker._updateDatepicker(inst);
				} catch (err) {
					$.timepicker.log(err);
				}
			}
		}

		return $.datepicker._base_doKeyUp(event);
	};

	/*
	* override "Today" button to also grab the time.
	*/
	$.datepicker._base_gotoToday = $.datepicker._gotoToday;
	$.datepicker._gotoToday = function(id) {
		var inst = this._getInst($(id)[0]),
			$dp = inst.dpDiv;
		this._base_gotoToday(id);
		var tp_inst = this._get(inst, 'timepicker');
		selectLocalTimeZone(tp_inst);
		var now = new Date();
		this._setTime(inst, now);
		$('.ui-datepicker-today', $dp).click();
	};

	/*
	* Disable & enable the Time in the datetimepicker
	*/
	$.datepicker._disableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			tp_inst._defaults.showTimepicker = false;
			tp_inst._updateDateTime(inst);
		}
	};

	$.datepicker._enableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			tp_inst._defaults.showTimepicker = true;
			tp_inst._addTimePicker(inst); // Could be disabled on page load
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create our own set time function
	*/
	$.datepicker._setTime = function(inst, date) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var defaults = tp_inst._defaults;

			// calling _setTime with no date sets time to defaults
			tp_inst.hour = date ? date.getHours() : defaults.hour;
			tp_inst.minute = date ? date.getMinutes() : defaults.minute;
			tp_inst.second = date ? date.getSeconds() : defaults.second;
			tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec;

			//check if within min/max times.. 
			tp_inst._limitMinMaxDateTime(inst, true);

			tp_inst._onTimeChange();
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create new public method to set only time, callable as $().datepicker('setTime', date)
	*/
	$.datepicker._setTimeDatepicker = function(target, date, withDate) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			this._setDateFromField(inst);
			var tp_date;
			if (date) {
				if (typeof date == "string") {
					tp_inst._parseTime(date, withDate);
					tp_date = new Date();
					tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
				} else {
					tp_date = new Date(date.getTime());
				}
				if (tp_date.toString() == 'Invalid Date') {
					tp_date = undefined;
				}
				this._setTime(inst, tp_date);
			}
		}

	};

	/*
	* override setDate() to allow setting time too within Date object
	*/
	$.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
	$.datepicker._setDateDatepicker = function(target, date) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;

		this._updateDatepicker(inst);
		this._base_setDateDatepicker.apply(this, arguments);
		this._setTimeDatepicker(target, tp_date, true);
	};

	/*
	* override getDate() to allow getting time too within Date object
	*/
	$.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
	$.datepicker._getDateDatepicker = function(target, noDefault) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			// if it hasn't yet been defined, grab from field
			if(inst.lastVal === undefined){
				this._setDateFromField(inst, noDefault);
			}

			var date = this._getDate(inst);
			if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) {
				date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
			}
			return date;
		}
		return this._base_getDateDatepicker(target, noDefault);
	};

	/*
	* override parseDate() because UI 1.8.14 throws an error about "Extra characters"
	* An option in datapicker to ignore extra format characters would be nicer.
	*/
	$.datepicker._base_parseDate = $.datepicker.parseDate;
	$.datepicker.parseDate = function(format, value, settings) {
		var date;
		try {
			date = this._base_parseDate(format, value, settings);
		} catch (err) {
			// Hack!  The error message ends with a colon, a space, and
			// the "extra" characters.  We rely on that instead of
			// attempting to perfectly reproduce the parsing algorithm.
			date = this._base_parseDate(format, value.substring(0,value.length-(err.length-err.indexOf(':')-2)), settings);
			$.timepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format);
		}
		return date;
	};

	/*
	* override formatDate to set date with time to the input
	*/
	$.datepicker._base_formatDate = $.datepicker._formatDate;
	$.datepicker._formatDate = function(inst, day, month, year) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			tp_inst._updateDateTime(inst);
			return tp_inst.$input.val();
		}
		return this._base_formatDate(inst);
	};

	/*
	* override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
	*/
	$.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
	$.datepicker._optionDatepicker = function(target, name, value) {
		var inst = this._getInst(target),
	        name_clone;
		if (!inst) {
			return null;
		}

		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var min = null,
				max = null,
				onselect = null,
				overrides = tp_inst._defaults.evnts,
				fns = {},
				prop;
		    if (typeof name == 'string') { // if min/max was set with the string
		        if (name === 'minDate' || name === 'minDateTime') {
		            min = value;
		        } else if (name === 'maxDate' || name === 'maxDateTime') {
		            max = value;
		        } else if (name === 'onSelect') {
		            onselect = value;
		        } else if (overrides.hasOwnProperty(name)) {
		            if (typeof (value) === 'undefined') {
		                return overrides[name];
		            }
		            fns[name] = value;
		            name_clone = {}; //empty results in exiting function after overrides updated
		        }
		    } else if (typeof name == 'object') { //if min/max was set with the JSON
		        if (name.minDate) {
		            min = name.minDate;
		        } else if (name.minDateTime) {
		            min = name.minDateTime;
		        } else if (name.maxDate) {
		            max = name.maxDate;
		        } else if (name.maxDateTime) {
		            max = name.maxDateTime;
		        }
		        for (prop in overrides) {
		            if (overrides.hasOwnProperty(prop) && name[prop]) {
		                fns[prop] = name[prop];
		            }
		        }
		    }
		    for (prop in fns) {
		        if (fns.hasOwnProperty(prop)) {
		            overrides[prop] = fns[prop];
		            if (!name_clone) { name_clone = $.extend({}, name);}
		            delete name_clone[prop];
		        }
		    }
		    if (name_clone && isEmptyObject(name_clone)) { return; }
		    if (min) { //if min was set
		        if (min === 0) {
		            min = new Date();
		        } else {
		            min = new Date(min);
		        }
		        tp_inst._defaults.minDate = min;
		        tp_inst._defaults.minDateTime = min;
		    } else if (max) { //if max was set
		        if (max === 0) {
		            max = new Date();
		        } else {
		            max = new Date(max);
		        }
		        tp_inst._defaults.maxDate = max;
		        tp_inst._defaults.maxDateTime = max;
		    } else if (onselect) {
		        tp_inst._defaults.onSelect = onselect;
		    }
		}
		if (value === undefined) {
			return this._base_optionDatepicker.call($.datepicker, target, name);
		}
		return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
	};
	/*
	* jQuery isEmptyObject does not check hasOwnProperty - if someone has added to the object prototype,
	* it will return false for all objects
	*/
	var isEmptyObject = function(obj) {
		var prop;
		for (prop in obj) {
			if (obj.hasOwnProperty(obj)) {
				return false;
			}
		}
		return true;
	};

	/*
	* jQuery extend now ignores nulls!
	*/
	var extendRemove = function(target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] === null || props[name] === undefined) {
				target[name] = props[name];
			}
		}
		return target;
	};

	/*
	* Determine by the time format if should use ampm
	* Returns true if should use ampm, false if not
	*/
	var useAmpm = function(timeFormat){
		return (timeFormat.indexOf('t') !== -1 && timeFormat.indexOf('h') !== -1);
	};

	/*
	* Converts 24 hour format into 12 hour
	* Returns 12 hour without leading 0
	*/
	var convert24to12 = function(hour) {
		if (hour > 12) {
			hour = hour - 12;
		}

		if (hour == 0) {
			hour = 12;
		}

		return String(hour);
	};

	/*
	* Splits datetime string into date ans time substrings.
	* Throws exception when date can't be parsed
	* Returns [dateString, timeString]
	*/
	var splitDateTime = function(dateFormat, dateTimeString, dateSettings, timeSettings) {
		try {
			// The idea is to get the number separator occurances in datetime and the time format requested (since time has 
			// fewer unknowns, mostly numbers and am/pm). We will use the time pattern to split.
			var separator = timeSettings && timeSettings.separator ? timeSettings.separator : $.timepicker._defaults.separator,
				format = timeSettings && timeSettings.timeFormat ? timeSettings.timeFormat : $.timepicker._defaults.timeFormat,
				timeParts = format.split(separator), // how many occurances of separator may be in our format?
				timePartsLen = timeParts.length,
				allParts = dateTimeString.split(separator),
				allPartsLen = allParts.length;

			if (allPartsLen > 1) {
				return [
						allParts.splice(0,allPartsLen-timePartsLen).join(separator),
						allParts.splice(0,timePartsLen).join(separator)
					];
			}

		} catch (err) {
			$.timepicker.log('Could not split the date from the time. Please check the following datetimepicker options' +
					"\nthrown error: " + err +
					"\ndateTimeString" + dateTimeString +
					"\ndateFormat = " + dateFormat +
					"\nseparator = " + timeSettings.separator +
					"\ntimeFormat = " + timeSettings.timeFormat);

			if (err.indexOf(":") >= 0) {
				// Hack!  The error message ends with a colon, a space, and
				// the "extra" characters.  We rely on that instead of
				// attempting to perfectly reproduce the parsing algorithm.
				var dateStringLength = dateTimeString.length - (err.length - err.indexOf(':') - 2),
					timeString = dateTimeString.substring(dateStringLength);

				return [$.trim(dateTimeString.substring(0, dateStringLength)), $.trim(dateTimeString.substring(dateStringLength))];

			} else {
				throw err;
			}
		}
		return [dateTimeString, ''];
	};

	/*
	* Internal function to parse datetime interval
	* Returns: {date: Date, timeObj: Object}, where
	*   date - parsed date without time (type Date)
	*   timeObj = {hour: , minute: , second: , millisec: } - parsed time. Optional
	*/
	var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var date;
		var splitRes = splitDateTime(dateFormat, dateTimeString, dateSettings, timeSettings);
		date = $.datepicker._base_parseDate(dateFormat, splitRes[0], dateSettings);
		if (splitRes[1] !== '') {
			var timeString = splitRes[1],
				parsedTime = $.datepicker.parseTime(timeFormat, timeString, timeSettings);

			if (parsedTime === null) {
				throw 'Wrong time format';
			}
			return {
				date: date,
				timeObj: parsedTime
			};
		} else {
			return {
				date: date
			};
		}
	};

	/*
	* Internal function to set timezone_select to the local timezone
	*/
	var selectLocalTimeZone = function(tp_inst, date) {
		if (tp_inst && tp_inst.timezone_select) {
			tp_inst._defaults.useLocalTimezone = true;
			var now = typeof date !== 'undefined' ? date : new Date();
			var tzoffset = $.timepicker.timeZoneOffsetString(now);
			if (tp_inst._defaults.timezoneIso8601) {
				tzoffset = tzoffset.substring(0, 3) + ':' + tzoffset.substring(3);
			}
			tp_inst.timezone_select.val(tzoffset);
		}
	};

	/*
	* Create a Singleton Insance
	*/
	$.timepicker = new Timepicker();

	/**
	 * Get the timezone offset as string from a date object (eg '+0530' for UTC+5.5)
	 * @param  date
	 * @return string
	 */
	$.timepicker.timeZoneOffsetString = function(date) {
		var off = date.getTimezoneOffset() * -1,
			minutes = off % 60,
			hours = (off - minutes) / 60;
		return (off >= 0 ? '+' : '-') + ('0' + (hours * 101).toString()).slice(-2) + ('0' + (minutes * 101).toString()).slice(-2);
	};

	/**
	 * Calls `timepicker()` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * n.b. The input value must be correctly formatted (reformatting is not supported)
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the timepicker() call
	 * @return jQuery
	 */
	$.timepicker.timeRange = function(startTime, endTime, options) {
		return $.timepicker.handleRange('timepicker', startTime, endTime, options);
	};

	/**
	 * Calls `datetimepicker` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @return jQuery
	 */
	$.timepicker.dateTimeRange = function(startTime, endTime, options) {
		$.timepicker.dateRange(startTime, endTime, options, 'datetimepicker');
	};

	/**
	 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @return jQuery
	 */
	$.timepicker.dateRange = function(startTime, endTime, options, method) {
		method = method || 'datepicker';
		$.timepicker.handleRange(method, startTime, endTime, options);
	};

	/**
	 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @return jQuery
	 */
	$.timepicker.handleRange = function(method, startTime, endTime, options) {
		$.fn[method].call(startTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates(this, endTime, dateText);
			},
			onSelect: function(selectedDateTime) {
				selected(this, endTime, 'minDate');
			}
		}, options, options.start));
		$.fn[method].call(endTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates(this, startTime, dateText);
			},
			onSelect: function(selectedDateTime) {
				selected(this, startTime, 'maxDate');
			}
		}, options, options.end));
		// timepicker doesn't provide access to its 'timeFormat' option, 
		// nor could I get datepicker.formatTime() to behave with times, so I
		// have disabled reformatting for timepicker
		if (method != 'timepicker' && options.reformat) {
			$([startTime, endTime]).each(function() {
				var format = $(this)[method].call($(this), 'option', 'dateFormat'),
					date = new Date($(this).val());
				if ($(this).val() && date) {
					$(this).val($.datepicker.formatDate(format, date));
				}
			});
		}
		checkDates(startTime, endTime, startTime.val());

		function checkDates(changed, other, dateText) {
			if (other.val() && (new Date(startTime.val()) > new Date(endTime.val()))) {
				other.val(dateText);
			}
		}
		selected(startTime, endTime, 'minDate');
		selected(endTime, startTime, 'maxDate');

		function selected(changed, other, option) {
			if (!$(changed).val()) {
				return;
			}
			var date = $(changed)[method].call($(changed), 'getDate');
			// timepicker doesn't implement 'getDate' and returns a jQuery
			if (date.getTime) {
				$(other)[method].call($(other), 'option', option, date);
			}
		}
		return $([startTime.get(0), endTime.get(0)]);
	};

	/**
	 * Log error or data to the console during error or debugging
	 * @param  Object err pass any type object to log to the console during error or debugging
	 * @return void
	 */
	$.timepicker.log = function(err){
		if(window.console)
			console.log(err);
	};

	/*
	* Keep up with the version
	*/
	$.timepicker.version = "1.2";

})(jQuery);
;
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();;
/**
 * ON DONE TYPING
 */
$.fn.onTypeFinished = function(func){
	var T = undefined, S = 0, D = 1000;
	//$(this).bind('keypress', onKeyPress).bind('focusout', onTimeOut);
	//$(this).live('keypress',onKeyPress).live('focusout',onTimeOut);
	$(this).live('keypress',onKeyPress);

	function onKeyPress() {
  	    clearTimeout(T);
  	    if (S == 0) { S = new Date().getTime(); D = 1000; T = setTimeout(onTimeOut, 1000); return; }
  	    var t = new Date().getTime();
  	    D = (D + (t - S)) / 2; S = t; T = setTimeout(onTimeOut, D * 2);
  	}
  	function onTimeOut() {
         func.apply(); S = 0;
  	}
  	return this;
};

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/**
 * Front-end validation
 * There is server side validation as well you fools!
 */
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

/**
 * Get the window hash
 */
function getHash() {
  var hash = window.location.hash;
  return hash.substring(1); // remove #
}
	 
/**
 * Get Link Target
 * @param link
 * @returns
 */
function getLinkTarget(link) {
  return link.href.substring(link.href.indexOf('#')+1);
}

/**
 * only for arrays . use native indexOf() for strings
 */
function getIndexOf(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle) {
            return i;
        }
    }
    return -1;
}

/**
 * only for arrays . use native lastIndexOf() for strings
 */
function getLastIndexOf(needle, haystack) {
    for (var i = haystack.length; i >= 0; i--) {
        if (haystack[i] == needle) {
            return i;
        }
    }
    return -1;
}

/**
 * Replace Spaces
 */
function replaceSpaces(str, replace) {
    return str.replace(/ /g, replace);
}

/**
 * Check for and Empty String
 */
function isEmptyStr(str){  
    if (str == '' || str == 'none') {
        return true;
    }
    return false;
}

/**
 * Javascript Foreach Function
 */
if (!Array.prototype.forEach){
  Array.prototype.forEach = function(fun /*, thisp*/){
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
        fun.call(thisp, this[i], i, this);
    }
  };
}

function typeOf(obj) {
    if ( typeof(obj) == 'object' ) {
        if (obj.length)
            return 'array';
        else
            return 'object';
    } else
    return typeof(obj);
}

/**
 * Converts a js obj to an array
 * "yes i know js arrays are objects"
 * { '': '' } -> [ '','' ]
 */
function objToArray(obj){
	var arr = [];
    if (typeOf(obj) == 'object') {
    	//console.log('TYPE: OBJECT');
    	for (var key in obj) {
    		//console.log('KEY: ' + key);
    		//console.log('VALUE: ' + obj[key]);
    		arr.push(key);
    		arr.push(obj[key]);
    	}
    }
    return arr;
}

/**
 * Get an object of the hash
 * urlhash to object
 * #h/playlists/v/playlist/id/123457
 * {'h':'library', ... }
 * @returns
 *
function getHashObject(hash){
	hash = typeof hash !== 'undefined' ? hash : false;
	// b = typeof b !== 'undefined' ? b : 'default_b';
	if(hash == false){ hash = getHash(); }
	
	//console.log("Hash inside getHashObject() = " + hash);
	
	paramArray = hash.split('/'); 
	//console.log(paramArray);
	hashObject = {};
	i=0;
	key	 	= "";
	value 	= "";
	if(paramArray.length){
		paramArray.forEach(function(element, index, array){
			if(i==0){ key = element; }
			if(i==1){ 
				value = element;
				hashObject[key] = value;
			}
			//console.log("Element: "+ element +" | Index: " + index + " | Array: " + array + "");
			i++;
			if(i==2){ i = 0; }
		});
		//console.log(hashObject);
	}
	return hashObject;
}*/

/**
 * object into urlhash
 * @param hashObject
 * @returns
 *
function getUrlHash(hashArray){
	hashURL = "";
	//console.log("THIS");
	//console.log(hashObject);
	i=0;
	key	 	= "";
	value 	= "";
	hashArray.forEach(function(element, index, array){
		if(i==0){ key = element; }
		if(i==1){ 
			value = element;
			hashURL = hashURL + key + "/" + value + "/";
		}
		//console.log("Element: "+ element +" | Index: " + index + " | Array: " + array + "");
		i++;
		if(i==2){ i = 0; }
	});
	return hashURL;
}*/

/**
 * js strstr function yay!
 */
function strstr (haystack, needle, bool) {
  var pos = 0;
  haystack += '';
  hasstack = haystack.toLowerCase(); 	// -kjs
  needle = needle.toLowerCase(); 		// -kjs
  pos = haystack.indexOf(needle);
  if (pos == -1) {
    return false;
  } else {
    if (bool) {
      return haystack.substr(0, pos);
    } else {
      return haystack.slice(pos);
    }
  }
}

/**
 * is sring a num
 */
function isNumeric(input){
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}

/**
 * Run frontend permissions
 */
function mdPageAuthenticate(){
	return true;
}

/**
 * Show Loading, simple for now
 * will become cooler w/ effects and sparklies
 */
function showLoading(parentSelector){
	if(typeof parentSelector == 'undefined'){ parentSelector = ""; }
	
	//console.log('Show Loading');
	//console.log('Parent Selector: '+parentSelector);
	
	if($(""+parentSelector+" .loading-window").parent('div').length){
		
		//windowWidth = $(""+parentSelector+" .loading-window").parent('div').width()-1;
		//windowHeight = $(""+parentSelector+" .loading-window").parent('div').height()-1;
		
		//windowWidth = $(""+parentSelector+" .loading-window").parent('div').actual('width')-1;
		windowWidth = $(""+parentSelector+" .loading-window").parent('div').actual('width');
		windowHeight = $(""+parentSelector+" .loading-window").parent('div').actual('height')-1;
		
		//this console logging is sometimes causing my chrome dev tools to freeze -nh
		//console.log('The parent of hthe loading window exists');
		//console.log($(""+parentSelector+" .loading-window").parent('div'));
		// console.log(windowWidth + ' x ' + windowHeight);
		//console.log(windowHeight + ' x ' + windowHeight);
		
		$(""+parentSelector+" .loading-window").css('width',''+windowWidth+'px');
		$(""+parentSelector+" .loading-window").css('height',''+windowHeight+'px');
		$(""+parentSelector+" .loading-window").css('line-height',''+windowHeight+'px');
		$(""+parentSelector+" .loading-window").show();
	
	} else {
		//console.log('The parent of the loading window doesnt exist');
	}
	//$(""+parentSelector+" div.loading").show();
}


/**
 * Hide Loading, simple right now
 * will become cooler w/ effects and sparklies
 */
function hideLoading(f){
	//console.log('hide loading');
	$(".loading-window:visible").fadeOut(400);
	//$("div.loading").fadeOut('slow');
	T = setTimeout(function(){
		if (typeof f == "function") { f(); }
		$(".loading-window:visible").fadeOut(400);
	}, 400);
}

/**
 * Set a debug param
 * for the console/terminal
 */
function setDebug(theclass,value){
	$(theclass).html(value); // set the browser debug data
} 

function hideReport(){
	hideTimeout = setTimeout(function(){

		$("#report").fadeOut();
		delete hideTimout
	},5000);
}

/**
 * Report
 * title is gone, to much...
 * 
 */
function setReport(status,title,message){
	$("#report").removeClass("error");
	$("#report").removeClass("success");
	$("#report").removeClass("info");
	$("#report").removeClass("warn");
	
	if(status == 'error'){ $("#report").addClass("error"); }
	if(status == 'success'){ $("#report").addClass("success"); }
	if(status == 'info'){ $("#report").addClass("info"); }
	if(status == 'warn'){ $("#report").addClass("warn"); }
	
	//$("#report h2�").html(title);
	//if($('#report:visible').length){
	//	$("#report p").after()html(message);
	//} else {
		$("#report p").html(message);
	//}
	
	
	var wh = $(window).height();
	var ww = $(window).width();
	var rh = $("#report").height();
	var rw = $("#report").width();
	var c1 = wh/2-rh/2;
	var c2 = ww/2-rw/2;
	
	//console.log(wh+" x "+ ww);
	//console.log(rh+" x "+ rw);
	//console.log(c1);
	//console.log(c2);
	
	//$("#report-overlay").show();
	//console.log('showing report-overlay');
	
	setTimeout(function(){
    	$("#report").css({ 'left': c2 }).fadeIn(200);
    },100);
	
	//$("#report").show();
	
}

/**
 * Centers images with the imagecenter wrapper vertically
 */
function centerImagesVertically(){
	
	//console.log('centering images vertically');
	
	$("div.imagecenter").children('div').children('img').load(function(){
		imageheight = $(this).height();
		//console.log('this happened! ' + imageheight + '');
		$(this).css('margin-top', + imageheight / -2 + "px"); 
		$(this).css('position', 'relative'); 
		$(this).css('top', '50%'); 
	});
	
	
	// Do it again for images hidden on the artist page when they are loaded and visible
	imageheight = $(".artist-scroll div.imagecenter").children('div').children('img').height();
	//console.log('this happened! ' + imageheight + '');
	$(".artist-scroll div.imagecenter").children('div').children('img').css('margin-top', + imageheight / -2 + "px"); 
	$(".artist-scroll div.imagecenter").children('div').children('img').css('position', 'relative'); 
	$(".artist-scroll div.imagecenter").children('div').children('img').css('top', '50%'); 
	
	// Do it again for the player tooo!
	imageheight = $("#now-playing div.imagecenter").children('div').children('img').height();
	//console.log('this happened! ' + imageheight + '');
	$("#now-playing div.imagecenter").children('div').children('img').css('margin-top', + imageheight / -2 + "px"); 
	$("#now-playing div.imagecenter").children('div').children('img').css('position', 'relative'); 
	$("#now-playing div.imagecenter").children('div').children('img').css('top', '50%'); 
	
	
	/**
	 * Advanced Image Center is for small songview artist images
	 */
	$("div.advanced-imagecenter").children('div.song-view-image-wrapper').children('img').load(function(){
		imageheight = $(this).height();
		//console.log('Resizing Advanced Image Vertically: ' + imageheight + '');
		$(this).css('margin-top', + imageheight / -2 + "px"); 
		$(this).css('position', 'relative'); 
		$(this).css('top', '50%'); 
	});
}

/**
 * Cool... look its an nl2br function
 * 
 */
function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
;
/**
 * 
 */
var sitePath 					= '/'; // Moved from md2_dtool.js -kjs
	
/**
 * These are default sorts and amount....
 */
var defaultPlaylistSort 		= 'Modified';
var defaultSongSort 			= 'classic';
var defaultArtistSort 			= 'Curated';
var defaultAmount 				= '25';
var search_group_filter 		= '-1';

/**
 * These vars help maintain state...
 */
var first = 					"";	// first is the first chunk of explode(request_uri), /mddtool, /artist, etc...
var lastFirst = 				"";	// lastfirst is the last first chuck that was in a hashchange
var lastq = 					"";	// lastq is the last query " ...
var lastp = 					""; // lastp is the last page " ...

var siteLoaded = 				0;

var currentPlaylist = 			0; // keeps track of the player's song list
var lastPlaylist = 				0; // keeps track of the player's song list
var dtoolPlaylistFlag = 		0; // 
var systemPlaylist = 			0; // keeps track of the player's song list on other pages with independant play buttons such as home page, our-music page, etc...
var playingMainRealEstateSong = 0; // '' may not be necessary
var mediaId =					0; // 

var firstLoadFlag =				0; // equals 1 after first haschange on docready
var playerLoadFlag =			0; // equals 1 after player src is loaded the first time

var playlistsDashFlag = 		0; 						// equals 1 after first playlists dashbord load
var playlistsDashAmountFlag = 	defaultAmount; 			// keeps track of the playlist dash state
var playlistsDashSortFlag = 	defaultPlaylistSort; 	// keeps track of the playlist dash state
var playlistsDashPageFlag = 	'1'; 					// keeps track of the playlist dash state

var searchFlag = 				0; 						// equals 1 after the first search

var searchQueryFlag = 			0; 						// keeps track of the dtool view state
var searchPageFlag = 			'1'; 					// keeps track of the dtool view state
var searchSortFlag = 			defaultSongSort; 		// keeps track of the dtool view state
var searchAmountFlag = 			defaultAmount; 			// keeps track of the dtool view state
var search_group_filter = -1;               // keeps track of group filter
var last_keywordTerm = '';                  // keeps track of last autocomplete term

var playlistIdFlag = 			0; 						// keeps track of the playlist view state
var playlistPageFlag = 			'1'; 					// keeps track of the playlist view state
var playlistSortFlag = 			defaultSongSort; 		// keeps track of the playlist view state
var playlistAmountFlag = 		defaultAmount; 			// keeps track of the playlist view state

var altPlaylistLoadedFlag = 	0; 						// equals 1 when there is an alternate song loaded in the player then back to 0 whent there isn't
var adminFlag =					0;						// local frontent permission for admins, everyth is locked down on the server side so don't even try....
var clientFlag = 				0; 						// local frontend permission for clients, everything is locked down on the server side so don't even try...
var anonFlag = 					1; 						// local frontend permission for anon., everything is locked down on the server side so don't even try...
var probational					= 0;
//var preview 					= 1;					// ... -kjs
//var locale 					= '';					// ... -kjs
var multiSelectLoadFlag 		= 0; 					// equals 1 after the multiselect ui element has loaded in the dTool

var playlistLength = 			0;						// -kjs for Anonymous perview duration of songs
var playlistIndex =				0;						// -kjs for Anonymous perview duration of songs
var preview = 					1;						// -kjs for Anonymous perview duration of songs
var previewDuration = 			45;						// -kjs for Anonymous perview duration of songs

var artistIdFlag =				0;						// keeps track of the artist song view state
var artistPageFlag =			'1';					// keeps track of the artist song view state
var artistSortFlag = 			defaultPlaylistSort;	// keeps track of the artist song view state
var artistAmountFlag = 			defaultAmount;			// keeps track of the artist song view state

var ajaxFlag = 					0;
var percentLoaded = 			5;						// loader

var forceReload = 				0;						// set this to 1 to force the html ajax page area to reload // actually not necessry notfunctionsl!
var lastWholeString = 			'';
var subContentLoading =			0;						// value to tell if subcontent is loading

var reorderingPlaylist = 		false;					// Flag for when sort/re-order mode is active for playlist pages
var reorderingArtist =			false;					// Flag for when sort/re-order mode is active for artist pages

var search_behavior_type 		= 'init';
var search_behavior_init 		= true;
var drupal_user_id 				= Drupal.settings.uid;
var drupal_user_staff 			= Drupal.settings.staff ? 'internal':'external';

var tmpParentNidHolder 			= 0;	// -kjs for add version modal
var tmpArtistNidHolder 			= 0;	// -kjs for add version modal 
var tmpArtistUrlHolder 			= 0;	// -kjs for add version modal
var drupal_user_staff = Drupal.settings.staff ? 'internal':'external';

var gid = -1; // group filter -mx
;
/**
 * //console.js
 * 
 * Type: "shift + c o n s o l e" to toggle the console
 * 
 * clear 			- clear the history
 * exit				- close the console
 * js <script>		- eval() a script
 * flush <target>	- flush "localStorage" or "drupal"
 */

if($('.pheonix-console input').length) {


  trace = 		false;
  traceCount = 	1;

  /**
   * 
   */
  function preterminalTrace(message){
  	if(trace == true){
  		$('.pheonix-console-history').append('<li class="pre-terminal-trace">|-------------------------------------------------</li>');
  		$('.pheonix-console-history').append('<li class="pre-terminal-trace">| '+traceCount+' | <span class="count-'+traceCount+'">0</span>s | '+message+'<script type="text/javascript">var ti'+traceCount+' = 1; if(typeof ttt != "undefined"){ clearTimeout(ttt); } (function t_'+traceCount+'(){ ttt = setTimeout(function(){ $(".count-'+traceCount+'").html((ti'+traceCount+'/100)); ++ti'+traceCount+';  t_'+traceCount+'(); },1); })();</script></li>');
  	    $('.pheonix-console-history-wrapper').scrollTo('100%',0,{ axis:'y'});
  	}
  }

  /**
   * ms is the time in milliseconds it took to return
   * message is the message your logging to the trace
   * subtrace is an object of additional data from a server response for example
   */
  function terminalTrace(ms,message,subtrace){
  	if(typeof ttt != "undefined"){ clearTimeout(ttt); }
  	if(!!window.trace == true){
  		
  		ms = ms/1000;
  		if(ms == 0){
  			ms = 'n/a';
  		}
  		//if(subtrace){
  		//	$('.pheonix-console-history').append('<li>w | '+traceCount+' | '+ms+'s | <st class="'+traceCount+'">'+message+'</st></li>');
  		//} else {
  		$('.pre-terminal-trace').remove();
      	$('.pheonix-console-history').append('<li>|-------------------------------------------------</li>');
  		$('.pheonix-console-history').append('<li>| '+traceCount+' | '+ms+'s | '+message+'</li>');
  		if(subtrace){
  			var metrics = $.parseJSON(subtrace);
  			//console.log('Subtrace:');
  			//console.log(metrics);
  			metrics = objToArray(metrics);
  			for (var i=0;i<metrics.length;)
  			{
  				j = i+1;
  				//console.log(i);
  				nbsp = '&nbsp;&nbsp;&nbsp;';
  				$('.pheonix-console-history').append('<li> '+nbsp+' | '+(metrics[j]/1000).toFixed(3)+'s | '+metrics[i]+'</li>');
  				i = i+2;
  			}
  		}
  		//}
  		++traceCount;
  		// Go to last line line
          $('.pheonix-console-history-wrapper').delay(300).scrollTo('100%',300,{ axis:'y'});
  	}
  }

  $(document).ready(function(){
  	
  	/**
  	 * terminal console command
  	 */
  	Mousetrap.bind('t e r m i n a l',function(){
  		$('.pheonix-console').toggle(function(){
  			if($('.pheonix-pheonix').is(':visible')){
  				$('.pheonix-console input').blur();
  			} else {
  				setTimeout(function(){ $('.pheonix-console input').focus(); },100);
  				var wrapWidth = $(".pheonix-console-history-wrapper")[0].scrollWidth;
  				$(".pheonix-console-history-wrapper-parent").css('width',''+wrapWidth + 'px');
  				var wrapHeight = $(".pheonix-console-history-wrapper")[0].scrollHeight;
  				$(".pheonix-console-history-wrapper-parent").css('height',''+wrapHeight + 'px');
  			}
  		});
  	});	
  	
  	/**
  	 * Make console draggable
  	 */
  	$( ".pheonix-console" ).draggable();
  	$( ".pheonix-debug" ).draggable();
  	
  	/**
  	 * Setup the windows
  	 */
  	//wrapWidth = $(".pheonix-console-history-wrapper").scrollWidth();
  	//$(".pheonix-console-history-wrapper-parent").css('width',''+wrapWidth + 'px');
  	
  	// get the width of the textarea minus scrollbar
  	var wrapWidth = $(".pheonix-console-history-wrapper")[0].scrollWidth;
  	$(".pheonix-console-history-wrapper-parent").css('width',''+wrapWidth + 'px');
  	var wrapHeight = $(".pheonix-console-history-wrapper")[0].scrollHeight;
  	$(".pheonix-console-history-wrapper-parent").css('height',''+wrapHeight + 'px');
  	
  	/**
  	 * Setup the caveat
  	 */
  	var cursor;

  	$('.pheonix-console-input').blur(function() {
  		clearInterval(cursor);
  	    $('#cursor').css({ visibility: 'visible' }); 
  	    if(trace == false){
  		    $(".pheonix-console").css('opacity','0.3');
  		    $(".pheonix-debug").css('opacity','0.3');
  	    }
  	});
  	
  	$('.pheonix-console-input').focus(function() {
  		clearInterval(cursor);
  		$(".pheonix-console").css('opacity','0.8');
  		$(".pheonix-debug").css('opacity','0.8');
  		cursor = window.setInterval(function() {
  		    if ($('#cursor').css('visibility') === 'visible') {
  		     $('#cursor').css({ visibility: 'hidden' });
  		    } else {
  		     $('#cursor').css({ visibility: 'visible' });  
  		    }  
  		  }, 500);   
  	});
  	
  	$('.pheonix-console').click(function(){
  		//$('.pheonix-console-input').focus();
  		setTimeout(function(){ $('.pheonix-console input').focus(); },100);
  	});
  	
  	var historyIndex = 0;
  	var hideText = 0;
  	
  	$('.pheonix-console input').live('keyup',function(e){
  		
  		// hide text flag like passwords
  		if(hideText == 0){
  			$('#cmd span').text($(this).val());
  			//console.log($('.pheonix-console input').val());
  		}
  		
  		//up
  		if(e.keyCode == 38){
  			--historyIndex;
  			//console.log('browsing history up');
  			//console.log('History Index: '+historyIndex);
  			$('.pheonix-console input').val($('.pheonix-console-history li.history:eq('+historyIndex+')').html());
  			$('.pheonix-console input').trigger('keyup');
  		}
  		
  		//down
  		if(e.keyCode == 40){
  			++historyIndex;
  			//console.log('browsing history down');
  			//console.log('History Index: '+historyIndex);
  			$('.pheonix-console input').val($('.pheonix-console-history li.history:eq('+historyIndex+')').html());
  			$('.pheonix-console input').trigger('keyup');
  		}
  		
  		//enter
  		if(e.keyCode == 13){
  	        //console.log('hit enter');
  	        commandArray = $('.pheonix-console input').val().split(" ");
  	        wholeCommand = $('.pheonix-console input').val();
  	        command = commandArray[0];
  	        theRest = $('.pheonix-console input').val().substr($('.pheonix-console input').val().indexOf(' ')+1);
  	        indent = '&nbsp;&nbsp;';
  	        
  	        //console.log('command: '+command+'');
  	        //console.log('therest: '+theRest+'');
  	        
  	        $('.pheonix-console input').val('');
  	        $('#cmd span').html('');
  	        
  	        /**
  	         * Clear Console
  	         */
  	        if(command == 'clear'){
  	        	$('.pheonix-console-history').html('');
  	        }
  	        
  	        /**
  	         * Exit Conosle
  	         */
  	        else if(command == 'exit' || command == 'q' || command == 'quit' || command == 'x'){
  	        	$('.pheonix-debug').fadeOut();
  	        	$('.pheonix-console').toggle(function(){
  	        		$('.pheonix-console input').blur();
  	        	});
  	        }
  	        
  	        /**
  	         * Flush Commands
  	         */
  	        else if(command == 'flush'){
  	        	/**
  	        	 * Clear Local Storage Cache
  	        	 */
  	        	if(theRest == 'localStorage'){
  	        		localStorage.clear("md2-pheonix-cache");
  		        	$(window).trigger('hashchange');
  		        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  		        	$('.pheonix-console-history').append('<li>Status: local storage flushed successfully.</li>');
  	        	}
  	        	/**
  	        	 * Clear HTML Cache
  	        	 * The html cache builds up when pages are injected into the page via ajax
  	        	 * Once a page has been loaded once, its visibility is toggled from that point on
  	        	 * rather than reloading the whole page again. This function clears that html cache.
  	        	 */
  	        	else if(theRest == 'html'){
  	        		$(".pheonix-page:hidden").remove();
  	        		$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  		        	$('.pheonix-console-history').append('<li>Status: html flushed successfully.</li>');
  	        	
  	        	}
  	        	/**
  	        	 * Clear Drupals Cache
  	        	 */
  	        	else if(theRest == 'drupal'){
  		        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  		        	$('.pheonix-console-history').append('<li>Status: Whoops I\'m sorry but this command is not complete :(</li>');
  	        	}
  	        	else if(theRest == 'autocomplete'){
  	        		$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  		        	$('.pheonix-console-history').append('<li>Status: Whoops I\'m sorry but this command is not complete :(</li>');
  	        	}
  	        	else if(theRest == 'dtool'){
  	        		$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  		        	$('.pheonix-console-history').append('<li>Status: Whoops I\'m sorry but this command is not complete :(</li>');
  	        	}
  	        	/* Requires command... */
  	        	else{
  	        		$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  		        	$('.pheonix-console-history').append('<li class="status">Status: "flush" requires a target, usually either "localStorage" or "drupal"</li>');
  	        	}
  	        }
  	        
  	        /**
  	         * Show
  	         */
  	        else if(command == 'show'){
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	if(theRest == 'grid'){
  	        		$('.column-overlay-wrapper').show();
  		        	$('.pheonix-console-history').append('<li class="status">Status: Showing Grid</li>');
  	        	} else {
  		        	$('.pheonix-console-history').append('<li class="status">Status: "show" requires a target, usually "grid"</li>');
  	        	}
  	        }
  	        
  	        /**
  	         * Fumigate
  	         */
  	        else if(command == 'fumigate'){
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	//if(theRest == 'grid'){
  	        		$('.column-overlay-wrapper').toggle();
  		        //	$('.pheonix-console-history').append('<li class="status">Status: Showing Grid</li>');
  	        	//} else {
  		        //	$('.pheonix-console-history').append('<li class="status">Status: "show" requires a target, usually "grid"</li>');
  	        	//}
  	        }
  	        
  	        
  	        /**
  	         * Hide
  	         */
  	        else if(command == 'hide'){
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	if(theRest == 'grid'){
  	        		$('.column-overlay-wrapper').hide();
  		        	$('.pheonix-console-history').append('<li class="status">Status: Hiding Grid</li>');
  	        	} else {
  		        	$('.pheonix-console-history').append('<li class="status">Status: "hide" requires a target, usually "grid"</li>');
  	        	}
  	        }
  	        
  	        /**
  	         * JS Console
  	         */
  	        else if(command == 'js'){
  	        	eval(theRest);
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	$('.pheonix-console-history').append('<li class="status">Status: javascript evaluated.</li>');
  	        }
  	        
  	        /**
  	         * debug window
  	         */
  	        else if(command == 'debug'){
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	if(theRest == 'close'){
  		        	$('.pheonix-console-history').append('<li class="status">Status: debug window closed.</li>');
  		        	$('.pheonix-debug').fadeOut();
  	        	} else {
  		        	$('.pheonix-console-history').append('<li class="status">Status: debug window open.</li>');
  		        	$('.pheonix-debug').fadeIn();
  	        	}
  	        }
  	        
  	        /**
  	         * login
  	         */
  	        else if(command == 'login'){
  	        	
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	$('.pheonix-console-history').append('<li class="status">Status: validating username...</li>');
  	        	$('.pheonix-console-history').append('<li class="status">Status: please enter your password.</li>');

  	        	/*$.ajax({
  	        		url:		'',
  	        		type:		'GET',
  	        		data: 		{ username : theRest },
  	        		success: 	function(data){
  	    	        	$('.pheonix-console-history').append('<li class="status">Status: please enter your password.</li>');
  	    	        	hideText = 1;
  	        		}
  	        	});*/
  	        }
  	        
  	        /**
  	         * logout
  	         */
  	        else if(command == 'logout'){
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	$('.pheonix-console-history').append('<li>Status: command not complete...</li>');
          	}
  	        
  	        /**
  	         * Goto
  	         */
  	        else if(command == 'goto'){
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	if(theRest){
  		        	window.location.hash = "!"+theRest;
  		        	$('.pheonix-console-history').append('<li>Status: going to '+theRest+'.</li>');
  	        	} else {
  		        	$('.pheonix-console-history').append('<li>Status: please enter a location, for example "/mddtool" or "/artist/theivorys".</li>');
  	        	}
  	        }
  	        
  	        /**
  	         * about
  	         */
  	        else if(command == 'about'){
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	$('.pheonix-console-history').append('<li> </li>');
  	        	$('.pheonix-console-history').append('<li> </li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'This is the MusicDealers.com command line tool.</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'Type "help" for a list of commands. Have fun ;)</li>');
  	        	$('.pheonix-console-history').append('<li> </li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'There is a complete history of your commands using the up and down arrow keys.</li>');
  	        	$('.pheonix-console-history').append('<li> </li>');
  	        	$('.pheonix-console-history').append('<li> </li>');
          	}
  	        
  	        /**
  	         * Trace
  	         * the trace command traces the 
  	         */
  	        else if(command == 'trace'){
  	        	if(theRest == 'start'){
  	        		$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  		        	$('.pheonix-console-history').append('<li>|-------------------------------------------------</li>');
  		        	$('.pheonix-console-history').append('<li>| Status: Running trace...</li>');
  		        	trace = true;
  		        	//traceCount = 1;
  	        	}
  	        	else if(theRest == 'stop'){
  		        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  		        	$('.pheonix-console-history').append('<li>Status: Trace stopped</li>');
  		        	trace = false;
  	        	}
  	        	else{
  	        		$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  		        	$('.pheonix-console-history').append('<li class="status">Status: "trace" requires a target, usually either "start" or "stop"</li>');
  	        	}
  	        }
  	        
  	        /**
  	         * Testing
  	         */
  	        else if(command == 'check'){
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	if(theRest == 'dtool'){
  	        		checkDtool();
  	        	} 
  	        	else if(theRest == 'pheonix'){
  	        		checkPheonix();
  	        	}
  	        	else if(theRest == 'everything'){
  	        		//checkDtool();
  	        		//checkPheonix();
  	        	}
  	        	else{
  	        		$('.pheonix-console-history').append('<li class="status">Status: "check" requires a target, usually either "dtool", "pheonix", or "comprehensive"</li>');
  	        	}
  	        }
  	        
  	        /**
  	         * help
  	         */
  	        else if(command == 'help'){
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	$('.pheonix-console-history').append('<li> </li>');
  	        	$('.pheonix-console-history').append('<li> </li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|---------------------------------------</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'<strong>Terminal Command List:</strong></li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|---------------------------------------</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'clear</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'exit</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'flush [html], [localStorage], [drupal]</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'trace [start], [stop]</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'check [dtool], [pheonix], [everything]</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'js [javascript]</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'debug [open], [close]</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'login [username]</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'logout</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'goto [/page]</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'show [grid]</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'hide [grid]</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'about</li>');
  	        	$('.pheonix-console-history').append('<li>'+indent+'|'+indent+'help</li>');
  	        	$('.pheonix-console-history').append('<li> </li>');
  	        	$('.pheonix-console-history').append('<li> </li>');
  	        }
  	        /**
  	         * Unrecognized Commands
  	         */
  	        else{
  	        	$('.pheonix-console-history').append('<li class="history">'+wholeCommand+'</li>');
  	        	$('.pheonix-console-history').append('<li class="status">Status: command "'+command+'" not found.</li>');
  	        }
  	        
  	        
  	        historyIndex = $('.pheonix-console-history li.history').length;
  	        liIndex = $('.pheonix-console-history li').length;

  	        /**
  	         * Go to last line line
  	         */
  	        $('.pheonix-console-history-wrapper').scrollTo('100%',0,{ axis:'y'});
  	    }
  	});
  	
  	function checkDtool(){
  		$("a#dashboard").trigger('click');
  		$("a#playlists").delay(300).trigger('click');
  		$("a#discovery-tool").delay(600).trigger('click');
  	}
  	
  });

}
	;

$(document).ready(function() {

  // scroll to top button
  $('<a class="to-top" href="#"></a>').appendTo('body');

  // show or hide the sticky footer button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $('.to-top').fadeIn(200);
    } else {
      $('.to-top').fadeOut(200);
    }
  }).load(function() {
    if ($(this).scrollTop() > 400) {
      $('.to-top').fadeIn(200);
    }
  });

  // scroll to top
  $('.to-top').click(function(evt) {
    evt.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
  });

});

// have register/sign-in cta stick to top on scroll
$(window).on('scroll', function() {
  var $el = $('#probational-hint-top');
  if ($el.length < 1) {
    return;
  }
  $el.toggleClass('sticky-top', $(window).scrollTop() > 80); // fixed header size. skip flashing by not targeting element top
});

// window.requestAnimationFrame polyfill
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

function runLoadingBar() {
  // prepend loadingbar
  if (window.loadingBar) {
    if ($("#loadingbar").length === 0) {
      $("<div id='loadingbar'></div>").addClass("waiting").width('2%').appendTo('body').append($("<dt/><dd/>"));
    }
    var currentWidth = parseInt( (+$("#loadingbar").width() / +$(window).width() ) * 100);
    var remainingWidth = parseInt( ( +$(window).width() - +$("#loadingbar").width() ) / +$(window).width() * 100);
    remainingWidth = (remainingWidth > (+$(window).width() / 5)) ? +$(window).width() / 5 : remainingWidth;
    var newWidth = currentWidth + remainingWidth * Math.random() * 2;
    $("#loadingbar").width(newWidth + "%");
    requestAnimationFrame(runLoadingBar);
  } else {
    $("#loadingbar").width("101%").delay(200).fadeOut(400, function() {
      $(this).remove();
    });
  }
}

function updateSplashProgressBar(percentLoaded) {
  if (siteLoaded == 0) {
    $(".splash-progress .ui-progressbar-value").animate({ width: ""+percentLoaded+"%" }, {queue: false});
    if (percentLoaded >= 100) {
      siteLoaded = 1;
      $("#splash").delay(300).fadeOut(300);

      /**
       * On Doc ready if its the homepage
       * hide the player && if not ie 8 because scroll is a cpu heavy event
       *
       */
      if (first == '' || first == '/') {
        $("#md-frame").css('bottom','-60px');
        playerHomeHide = 1;

        // add scroll show...
        $(window).scroll(function() {
          if (playerHomeHide == 1) {
            $("#md-frame").delay(500).animate({bottom:0}, 500, function() {
              //callback?
            });
          }
          if ($(window).scrollTop() == 0 && playerHomeHide == 0) {
            resizeContent();
          }
          playerHomeHide = 0;
        });
      }
    }
  }
}

/**
 * A full 100% Run For visual purposes
 * Takes 0.7 seconds...
 */
function runProgressBar(subContentLoading) {
    t_l1 = setTimeout(function() {
      updateSplashProgressBar(percentLoaded);
      t_l2 = setTimeout(function() {
        percentLoaded = percentLoaded + 10;
        updateSplashProgressBar(percentLoaded);
        t_l3 = setTimeout(function() {
          percentLoaded = percentLoaded + 30;
          updateSplashProgressBar(percentLoaded);
          t_l4 = setTimeout(function() {
            percentLoaded = percentLoaded + 10;
            updateSplashProgressBar(percentLoaded);
            t_l5 = setTimeout(function() {
              percentLoaded = percentLoaded + 20;
              updateSplashProgressBar(percentLoaded);
              t_l6 = setTimeout(function() {
                percentLoaded = percentLoaded + 10;
                updateSplashProgressBar(percentLoaded);
                t_l7 = setTimeout(function() {
                  percentLoaded = percentLoaded + 20;
                  updateSplashProgressBar(percentLoaded);
                  delete t_l7;
                }, 100);
                delete t_l6;
              }, 100);
              delete t_l5;
            }, 100);
            delete t_l4;
          }, 100);
          delete t_l3;
        }, 100);
        delete t_l2;
      }, 100);
      delete t_l1;
    }, 100);
  //}
}

/**
 * Max Duration 8 seconds (for the dtool)....
 * The load will not take 4 seconds, But if it does it will look active...
 * Deep linking the dtool w/search results takes like 8 seconds
 */
function slowBump() {
  // bump it a lil' if its taking a bit to ajax the content...
  setTimeout(function() {
    percentLoaded = percentLoaded + 5;
    updateSplashProgressBar(percentLoaded);
    setTimeout(function() {
      percentLoaded = percentLoaded + 10;
      updateSplashProgressBar(percentLoaded);
      setTimeout(function() {
        percentLoaded = percentLoaded + 5;
        updateSplashProgressBar(percentLoaded);
        setTimeout(function() {
          percentLoaded = percentLoaded + 10;
          updateSplashProgressBar(percentLoaded);
          setTimeout(function() {
            percentLoaded = percentLoaded + 5;
            updateSplashProgressBar(percentLoaded);
            setTimeout(function() {
              percentLoaded = percentLoaded + 10;
              updateSplashProgressBar(percentLoaded);
              setTimeout(function() {
                percentLoaded = percentLoaded + 5;
                updateSplashProgressBar(percentLoaded);
                setTimeout(function() {
                  percentLoaded = percentLoaded + 10;
                  updateSplashProgressBar(percentLoaded);
                  setTimeout(function() {
                    percentLoaded = percentLoaded + 5;
                    updateSplashProgressBar(percentLoaded);
                    setTimeout(function() {
                      percentLoaded = percentLoaded + 5;
                      updateSplashProgressBar(percentLoaded);
                      setTimeout(function() {
                        percentLoaded = percentLoaded + 5;
                        updateSplashProgressBar(percentLoaded);
                        setTimeout(function() {
                          percentLoaded = percentLoaded + 5;
                          updateSplashProgressBar(percentLoaded);
                          setTimeout(function() {
                            percentLoaded = percentLoaded + 5;
                            updateSplashProgressBar(percentLoaded);
                            setTimeout(function() {
                              percentLoaded = percentLoaded + 5;
                              updateSplashProgressBar(percentLoaded);
                              setTimeout(function() {
                                percentLoaded = percentLoaded + 5;
                                updateSplashProgressBar(percentLoaded);
                                setTimeout(function() {
                                  percentLoaded = percentLoaded + 5;
                                  updateSplashProgressBar(percentLoaded);
                                },500);
                              },500);
                            },500);
                          },500);
                        },500);
                      },500);
                    },500);
                  },500);
                },500);
              },500);
            },500);
          },500);
        },500);
      },500);
    },500);
  },500);
}

/**
 * Setup the progress bar
 */
function setupProgressBar() {
  // don't load on blog pages
  if (window.location.pathname.substr(0,5) == '/blog') {
    $('#splash').hide();
    return;
  }

  // don't load on (home)pages for first view
  // if (!window.location.hash) {
  if (window.location.pathname.substr(1,6) != 'artist'
      && window.location.pathname.substr(1,7) != 'mddtool'
      && (!window.location.hash || window.location.hash == '#!/')) {
    $('#splash').hide();
    return;
  }

  $(".splash-progress").show();
  $(".splash-progress").progressbar({
        value: percentLoaded,
        max: 100,
        create: function( event, ui ) { }
    });
  slowBump();
}

// force these to the full /+hash format for bbq (song listings and interaction)
if (window.location.pathname.substr(1,6) == 'artist'
    || window.location.pathname.substr(1,7) == 'mddtool') {
  setupProgressBar();
  var url = '/#!'+window.location.pathname;
  if (window.location.hash.substr(1)) {
    url += '&' + window.location.hash.substr(1);
  }
  window.location = url;
}

/**
 * Pheonix cleanup removes .phonix-page's that should not be persistant (meaning they should be removed from the site's html)
 * The usual case for this is when element's must only exist in the html once to work well with certain javascripts....
 * This is something we could pass in through $vars[other] from the preprocess hook for pages and forms on the backend...
 * Then this js function would be dynamic.
 */
function pheonixCleanup() {

  $(".pheonix-page").each(function() {

      var thisId = $(this).attr("id");

      // -- Remove the upload song form and the edit song form if it is present
      if (strstr(thisId,'upload-song') || strstr(thisId,'edit-song')) {
        $(this).remove();
      }

      // -- Remove the blog pages, specifically for the search functionality and for other unforseen cases
      if (strstr(thisId,'pheonix-page-blog')) {
        $(this).remove();
      }

      // -- Remove the edit artist profile forms
      if (strstr(thisId,'edit-artist-profile')) {
        $(this).remove();
      }

      // -- Remove the view artist contract pages
      if (strstr(thisId,'pheonix-page-artist') && strstr(thisId,'contract')) {
        $(this).remove();
      }

      // -- Remove the my-account pages, just to be safe :)
      if (strstr(thisId,'pheonix-page-my-account')) {
        $(this).remove();
      }

  });
}

  // Uservoice object properties
  var uvObj = {
    mode: 'full',
    primary_color: '#0d469a',
    link_color: '#0d469a',
    default_mode: 'support',
    forum_id: 141395,
    tab_label: 'Contact Support',
    tab_color: '#0d469a',
    tab_position: 'middle-right',
    tab_inverted: false
  }

  UserVoice = window.UserVoice || [];
  UserVoice.push(['showTab', 'classic_widget', uvObj]);
  function showClassicWidget() {
    UserVoice.push(['showLightbox', 'classic_widget', uvObj]);
  }

/**
 * Docready
 */
$(document).ready(function() {

  // Inject uservoice script into the page
  (function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='//widget.uservoice.com/TrUs9WTgtUdivPTUxnffbg.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();

  $.param.fragment.ajaxCrawlable( true );

  // If the player was already loaded server side; don't load on the blog
  if ($("#md-frame").attr('src') != ''
      || window.location.pathname.substr(0,5) == '/blog') {
    playerLoadFlag = 1;
  }

  if (window.location.pathname.substr(0,5) == '/blog') {
    $("#md-frame").remove();
  }

  // DEMO MODAL REGISTER LINK JS
  $(".modal-footer button#register-now").live('click', function() {
    window.history.pushState('', '', '/#!/want-music');
    $(".modal-demo .modal-close").trigger('click'); // close login
    $(window).trigger('hashchange');
  });

  // Close Reports
  $(".report-close, #report-overlay").click(function() {
    $("#report").fadeOut(200);
    $("#report-overlay").fadeOut(200);
  });

  /**
   * For all forms
   * clear out the .form-items, which float:left universally in pheonix
   */
  $("form:visible").livequery(function() {
    $(this).append('<div class="br-clear"></div>');
  });

  // This essentially intercepts the link handler
  // delegate handler for links: this replaces all livequery link handling
  // - also, don't f with href values until a click actually happens
  //   (don't waste time updating the dom, only one click will happen)
  // - work with in-page hash links
  $('body').on('click', 'a', function() {

    var href = $(this).attr('href');
    // non-link
    if (!href) return;
    // find internal scroll links (e.g., faq)
    if (href.indexOf('#') != -1 && $(href.substr(href.indexOf('#'))).length) {
      $(window).scrollTo($(href.substr(href.indexOf('#'))).offset().top);
      return false;
    }
    // MAKE SURE NO HREF HAS ?special_ajax=1, cuz no HREF should... -kjs
    if (strstr(href, "special_ajax=1")) {
      href = href.replace("special_ajax=1", "");
      // Update the href
      $(this).attr('href', href);
    }
    // make back button work if you land on non-hashbang index page
    if (window.location.pathname == '/' && window.location.hash == '') {
      window.location.hash = '#!/';
    }
    // non async friendly links
    if (  strstr(href, "#") // don't add shebang if there is a hash, this occurs in ui-tabs for example
          || $(this).hasClass("noshebang") // don't add shebang to the noshebang class
          || $(this).hasClass("austin-content-edit-open") // don't add shebang to the austin panel links
          || $(this).hasClass("pheonix-login") // don't add shebang to the austin panel links
          || strstr(href, "mailto") // don't add shebang to mailto links
          || strstr(href, "javascript") // don't add shebang to hrefs with inline js
          || href == '' // don't add shebang to empty hrefs, one of these exist somewhere, do a //console.log to see -stk
          || href === undefined // don't add shebang to NULL hrefs(austin panel edit links)
          || $(this).closest("#admin-menu").length // don't add shebang to admin menu links
          || strstr(href, "comment/") // don't add shebang to comment links for now in the blog for example
          || strstr(href, "http://") // don't add shebang to outbound links
          || strstr(href, "https://") // don't add shebang to outbound https links
          || strstr(href, "//") // don't add shebang to outbound http-less links
          || strstr(href, "/blog") // don't add shebang to blog links
          || strstr(href, "/content") // don't add shebang to work links
          || href.match(/(gif|jpg|png)$/) // don't add shebang to work links
      ) {
      // don't modify href for these instances
    } else {
      // If it is an internal & absolute path force it to be relative
      if (strstr(href, window.location.host)) { href.replace(window.location.host, ""); }
      // Check that the path doesn't already have a shebang (#!) then add it
      if (href.indexOf("#!") == -1) { href = "/#!" + href; }
      // if we computed the same url we are on, skip it.
      if ('/'+window.location.hash != href) {
        // console.log('/'+window.location.hash != href, '/'+window.location.hash, href);
        href = href.replace('?', '&');
        // trigger loading
        window.loadingBar = true;
        runLoadingBar();
        // don't update the dom/href
        window.location = href;
      }

      return false; // don't trigger link click
    }

    // let normal link handling occur

  });


  /**
   * Ajax Login
   */
  itemList = $(".modal-login .item-list").html();
  $(".modal-login input[type='submit']").remove();
  $(".modal-login .item-list").remove();
  $(".modal-login .modal-footer").append(itemList);
  $(".modal-login .modal-footer").append("<div class='br-clear'></div>");

  $(".open-login, .pheonix-login").live('click', (function(e) {
    e.preventDefault();
    $('#md2-login').md2_modal();
    $('#user-login-form input').eq(0).focus();
    setTimeout("$('#user-login-form input').eq(0).focus();",1000);
  }));

    // Close Login Modal when create account is clicked
  $("a.create_account_link").live('click',function(e) {
    // Go to the want-music page to create account, don't open modal
    $(".modal-login .modal-close").trigger('click'); // close login
  });

  $("#submit-login").click(function(e) {
    e.preventDefault();

    $(".modal-login .modal-content").hide();
    $(".modal-login .modal-loading").show();

    $.ajax({
      type: 'POST',
      url: '/ajax/login',
      data: { username: $('.modal-login input[name="name"]').val(), password: $('.modal-login input[name="pass"]').val() },
      success: function(data) {

        data = $.parseJSON(data);

        /**
         * Successful Login
         */
        start = new Date().getTime();
        if (data.status == 1) {
          $('#no-access-splash').hide();
          duration = (new Date().getTime() - start);
          $(".head-logout").removeClass('hidden');
          $(".head-dash").removeClass('hidden');
          $(".head-welcome").removeClass('hidden');
          $(".head-login").addClass('hidden');
          $(".head-account").removeClass('hidden');
          $("a.name span.welcome-name").html($('.modal-login input[name="name"]').val());
          anonFlag = 0;

          /**
           * Admins
           */
          if (data.data['account_type']=='admin') {
            if (first == '' || first == '/') {
              // push the dtool page
              window.location = "/#!/mddtool&m=dashboard&v=tabs-themes";
              setReport('success','','Login successful. Thanks for your patience while we redirect you to your dashboard.');
            }
            window.location.reload();

            // FOR WHEN THE SITE DOESN"T RELOAD
            // @todo...
            $(".head-staff").removeClass('hidden');     // Show staff link
            $(".head-dash a").attr('href','/#!/mddtool&m=dashboard&v=tabs-themes'); // Set dash to the dtool
            $("a.my-account").attr('href','/want/'+data.data['name']+'/my-home/my-account');  // Set Account link for clients
            clientFlag = 1; // client flag true for admins
            adminFlag = 1;  // admin flag true for admins
            anonFlag = 0; // anon flag false for admins

          }
          /**
           * Clients
           */
          else if (data.data['account_type']=='client') {
            if (first == '' || first == '/' || first.match(/^\/want-music/i)) {
              window.location = '/#!/mddtool&m=dashboard&v=tabs-themes';
              setReport('success','','Login successful. Thanks for your patience while we redirect you to your dashboard.');
            } else {
            }
            window.location.reload();

            // FOR WHEN THE SITE DOESN"T RELOAD
            // @todo...
            $(".head-dash a").attr('href','#!/mddtool&m=dashboard&v=tabs-themes');                    // Set dash to the dtool
            $("a.my-account").attr('href','/want/'+data.data['name']+'/my-home/my-account');  // Set Account link for clients
            clientFlag = 1; // client flag true for clients
            adminFlag = 0;
            anonFlag = 0;
            setDebug('.debug-role','client');
            // clients get redirected to the dtool if loggin in from the home page
          }

          /**
           * Artists
           */
          else if (data.data['account_type']=='artist') {

            /**
             *
             */
            window.location = '/myhome';
            setReport('success','','Login successful. Thanks for your patience while we redirect you to your dashboard.');

            // FOR WHEN THE SITE DOESN"T RELOAD
            // @todo...
            $(".head-dash a").addClass('noshebang');        // Prevent Shebang
            $(".head-dash a").attr('href','/myhome');       // Set dash url
            $(".head-dash a").html('My Dashboard');         // Set dash html
            $("a.my-account").attr('href','/my-account');     // Set my account for artists
            $(".head-signout").removeClass('hidden');       // show sign out
            $(".modal-login .modal-close").trigger('click');    // close login
            $(".modal-login .modal-close").trigger('click');    // close login
            setReport('success','',data.statusMessage);
            setTimeout(function() {
              $("#report").fadeOut(); // hide any previous reports from failed validations
            },'1000');

            //probational-hint-top
            setDebug('.debug-role','artist');
            $(".modal-login .modal-content").show();
            $(".modal-login .modal-loading").hide();
            $("#probational-hint-top").hide(); // hide the probational banner on dtool
          }

          $(window).trigger('hashchange'); // trigger a hashchange to refresh ajaxed content
          $("#report").fadeOut(); // hide any previous reports from failed validations

          var w = $("#md-frame")[0].contentWindow;
          var d = $("#md-frame")[0].contentWindow.document; // contentWindow works in IE7 and FF

        }

        /**
         * Js Validation
         */
        else {
          if ($('.modal-login input[name="name"]').val() == '') {
            $('.modal-login input[name="name"]').addClass('error');
          }

          if ($('.modal-login input[name="pass"]').val() == '') {
            $('.modal-login input[name="pass"]').addClass('error');
          }
          setReport('error','Uh-Oh',data.statusMessage);
          $(".modal-login .modal-content").show();
          $(".modal-login .modal-loading").hide();
        }
      }
    });
  });

  /**
   * Ajax Logout
   */
  $(".pheonix-logout").click(function(e) {
    e.preventDefault();
  });

  /**
   * If user hits enter
   * in a form then submit the proper button click to ajax the form
   * (i think this needs to be killed in order to get auto-complete return to work correctly)
   */
  $('input:focus').live('keyup',function(e) {
    if (e.keyCode == 13) {
      formId = $(this).closest('form').attr('id');
      if (formId == 'user-login-form' ) {
        $("button#submit-login").trigger('click');
      }
    }
  });

  /**
   * On Hash Change Event - Managing state,etc...
   * Everything happen's on hashchange, its our dispatcher.
   */
  $i = 0;
  $(window).bind('hashchange', function(e) {

    /**
     * Get the whole state and nothing but the state so help me...
     * Fade out any pheonix pages then load the requested page via ajax or html cache
     * This condition does not happen on the first load as first will = 0
     * lastFirst is the value of first dureing the last/previous hashchange event
     */
    stateObject = $.bbq.getState();
    for (first in stateObject) { break; }
    first = first.toString().toLowerCase();
    if (strstr(first,'?')) { first = first.split('?')[0]; }
    /**
     * This is for the main nav
     */
    $(".main-nav-list li a").removeClass('active');
    $(".main-nav-list li a").each(function() {
      linkUrl = $(this).attr('href').replace('#!/', '');
      if (strstr(first,linkUrl)) {
        $(this).addClass('active');
      }
    });

    /**
     * Set initial iframe src
     * if not already set by the md_dtool.js
     */
    if (playerLoadFlag == 0) {
      // If the artist page then don't load the default welcome src for the iframe...
      // wait for the artist src.
      //console.log('typeof(stateObject.id)' + typeof(stateObject.id));  //left for code review,  S-01511
      if ((!strstr(first.toLowerCase(),"artist")) && (typeof(stateObject.id) == 'undefined' )) {
        $("#md-frame").attr("src", "/mdplayer?dtool=1");
        playerLoadFlag = 1;
      }
    }

    if ($.browser.msie && $.browser.version.substr(0,1) != 1 && $.browser.version.substr(0,1) <= 7) { // less than ie 7
      // Artist page IE modal
      if (strstr(first.toLowerCase(),"artist")) {
        $("#md2-browser .modal-top-graphic span").html("Our new artist page requires that you update...");
        $("#md2-browser .modal-footer").html("In 10 seconds you will redirected to a compatible version of this page.");
        var artistArray = first.split("/");
        countDown = 9;
        if (typeof tt != "undefined") { clearTimeout(tt); }
        (function timerCountDownA() {
          tt = setTimeout(function() {
            $("#md2-browser .modal-footer").html("In "+countDown+" seconds you will redirected to a compatible version of this page.");
            if (countDown == 0) {
              $("#md2-browser .modal-footer").html("You are being redirected to a compatible version of this page, thanks for your patience ;)");
              window.location = window.location.protocol + "//" + window.location.host + "/artist_v1/"+artistArray[2]+"";
            } else {
              countDown = countDown - 1;
              timerCountDownA();
            }
          }, 1000);
        })();
      }

      // Popup IE Modal on all pages but the dtool
      if (!strstr(first.toLowerCase(), "mddtool")) {
      } else {
        if (clientFlag == 1) {
          // Dtool page Ie modal
          if (strstr(first.toLowerCase(), "mddtool")) {
            $("#md2-browser .modal-top-graphic span").html("Our new Discovery Tool requires that you update...");
            $("#md2-browser .modal-footer").html("In 10 seconds you will redirected to a compatible version of this page.");
            var artistArray = first.split("/");
            countDown = 9;
            if (typeof tt != "undefined") { clearTimeout(tt); }
            (function timerCountDownB() {
              tt = setTimeout(function() {
                $("#md2-browser .modal-footer").html("In "+countDown+" seconds you will redirected to a compatible version of this page.");
                if (countDown == 0) {
                  $("#md2-browser .modal-footer").html("You are being redirected to a compatible version of this page, thanks for your patience ;)");
                  window.location = window.location.protocol + "//" + window.location.host + "/discovery-tool";
                } else {
                  countDown = countDown - 1;
                  timerCountDownB();
                }
              }, 1000);
            })();
          }

        }
      }
    } // if < ie8

    /**
     * first = the current request uri that is ajaxed in.
     * lastFirst = the last request uri that was ajaxed in.
     * This condition prevents the same request from being...
     * issued if it already is the most current request.
     */
    specialClass = '';
    // special condition for the password page
    if (strstr(first, 'set-password')) {
      specialClass = 'set-password';
    }

    // assume home for default
    first = first || '/';

    slashFirst = first.replace(/\//g,"").toLowerCase(); // slash first is the request uri with no slashes

    if (window.location.hash.indexOf('&') != -1 && first.substr(0,8) != '/mddtool' && first.substr(0,7) != '/artist' && window.currentURL != window.location.hash) {
      lastFirst = null;
    }

    // console.log('f:', first, 'lf:', lastFirst, 'sf:', slashFirst);
    if (first != lastFirst && !(first == '/' && !lastFirst)) {
      pheonixCleanup();

      // need to do this for slashfirst to find existing param pages
      ajaxData = { 'special_ajax' : '1' }; // !important
      // grab other params, if not dtool page
      if (first.substr(0,8) != '/mddtool' && first.substr(0,7) != '/artist') {
        for (val in stateObject) {
          if (val != first) {
            ajaxData[val] = stateObject[val];
            slashFirst += val+stateObject[val];
          }
        }
      }

      /**
       * Get page title
       */

      // Freeze Height
      currentContentHeight = $("#content").height();
      currentWindowHeight = $(window).height();
      currentDocumentHeight = $(document).height();

      newContentHeight = currentWindowHeight;
      $("#content").css('height', ''+newContentHeight+'px');
      var $lastPage = $(".pheonix-page:visible"); // gets the current visible page if there is one
      $(document).scrollTo('#login-bar');

      $('#content').css('opacity', 0.3);

      // Hide Sidebar menu,
      // This was for blocks, may be deprecated
      $("#sidebar-menus").hide();
      $("#sidebar-menus > div").hide();

      /**
       * Load page via html cache (not local storage),
       * meaning it is already in the html,
       * the user has already called it at least once through ajax
       */
      if ($("#pheonix-page-"+slashFirst).length) {

        // Fade In the Correct Page, if we're reloading the same page like we
        // would on an  song merge or add a version, then don't do the .hide();
        //
        var $thisPage = $("#pheonix-page-"+slashFirst).show();
        // }
        if ($thisPage.length && $lastPage.length && $thisPage[0].id != $lastPage[0].id) {
          $lastPage.hide();
        }

        $('#content').css('opacity', 1);

        // Run the progress bar after half a second
        setTimeout(function() {
          runProgressBar(subContentLoading);
        },'500');

        // get the page title
        window.document.title = $("#pheonix-page-"+slashFirst+"").attr('data-title') || 'We Are Music Dealers'; // updates the window title

        $("#mini-splash").fadeOut();       // Hide the mini splash
        $('#no-access-splash').hide();
        $("#content").css('height','');

        //Trigger the _gaq for cached pages (Async Google Analytics)
        // if (typeof(_gaq) != 'undefined') {
        //   _gaq.push(["_setAccount", "UA-9466637-1"]);
        //   _gaq.push(["_trackPageview", ""+first+""]);
        // }
        if (typeof(ga) != 'undefined') {
          ga('send', 'pageview', ""+first+"");
        }

        window.loadingBar = false;
      }
      /**
       * Ajax the content
       */
      else {
        start = new Date().getTime();
        window.document.title = "We Are Music Dealers"; // updates the window title

        $.ajax({
          url: first,
          data: ajaxData,
          type: 'GET',
          success: function(data) {
            duration = (new Date().getTime() - start);

            returnedData = JSON.parse(data);
            sideBarMenu = '';
            sideBarMenuClass = '';

            // Redirect handling
            redirectFlag = 0;
            if (typeof(returnedData.data.other) != 'undefined' && typeof(returnedData.data.other) == 'object') {
              if (returnedData.data.other != null) {
                if (typeof(returnedData.data.other.redirect) != 'undefined') {
                  if (returnedData.data.other.redirect != null) {
                    window.history.pushState('', '', '/#!'+returnedData.data.other.redirect+'');
                    redirectFlag = 1;
                  }
                }
              }
            }

            if (typeof returnedData == 'object') {
              data = returnedData.data.html; // important
            }

            // Auth Pages
            mdPageAuthenticate();

            // Insert Content
            $("#mini-splash").fadeOut(300);

            // Do not insert html if we redirected
            if (redirectFlag == 0) {
              pageTitle = returnedData.data.other.title;
              window.document.title = pageTitle; // updates the window title

              // -- Insert the Content
              $("#ajax-before").before("<div id='pheonix-page-"+slashFirst+"' data-title='"+pageTitle+"' class='pheonix-page "+sideBarMenuClass+" "+specialClass+"' menu='"+sideBarMenu+"'>"+data+"<div class='br-clear'></div></div>");

              $lastPage.hide();
              $('#content').css('opacity', 1);

              // -- Google Analytics Async Push
              // if (typeof(_gaq) != 'undefined') {
              //   _gaq.push(["_setAccount", "UA-9466637-1"]);
              //   _gaq.push(["_trackPageview", ""+first+""]);
              // }
              if (typeof(ga) != 'undefined') {
                ga('send', 'pageview', ""+first+"");
              }
            }

            $('#no-access-splash').hide();
            Drupal.attachBehaviors($('.main-container'));  //do not remove this. contact steve or look up Drupal.attachBehaviors, this is for ajaxing form flow
            $("body #content").css('height','auto'); // !important

            t_progress = setTimeout(function() {
              runProgressBar(subContentLoading);
              delete t_progress;
            },'50');
            /**
             * Set another timeout for the loading.
             * To allow for anything in a haschange to finish up...
             * This allows the pages to load smoother.
             */
            t_02 = setTimeout(function() {
              // this is a bit hacky to avoid a infinite redirect on pages that must clear the lastFirst on load
              window.currentURL = window.location.hash;
              $(window).trigger( "hashchange" );
              loadSocialNetworks();
              //$("#splash").fadeOut(300); // fade out the splash if theis is a deep linked hash page
              delete t_02;
            },50);

            window.loadingBar = false;

          },
          error: function(data) {
            // redirect to 404
            $("#splash").fadeOut(300); // fade out the splash if theis is a deep linked hash page
            $("#mini-splash").fadeOut(300);
            // or go to home page
            $("#pheonix-page-").show();
            $("body #content").css('height','auto'); // !important
          }
        });
      }
      // lastWholeString = wholeString;
    }
    firstLoadFlag = 1; // !! IMPORTANT now we now that the site has loaded the first and only time
    lastFirst = first; // save the last request

  });

  /**
   * Truncated text toggle
   * This is for....
   */
  $(".toggle-more").die("click");
  $(".toggle-less").die("click");


  $(".toggle-more").live('click', function(e) {
    e.preventDefault();
    var uid = $(this).attr('uid');
    $("a[uid='"+uid+"'].toggle-more").hide();
    $("span[uid='"+uid+"']").show().after("<a href='javascript:void(0);' uid='"+uid+"' class='toggle-less' >less...</a>");
  });

  $(".toggle-less").live('click', function(e) {
    e.preventDefault();
    var uid = $(this).attr('uid');
    $("a[uid='"+uid+"'].toggle-less").remove();
    $("a[uid='"+uid+"'].toggle-more").show();
    $("span[uid='"+uid+"']").hide();
  });

  $('#status-contact').live('click', function() {
    $('#report .report-close').click();
    $('#md2-login .modal-close').click();
    $('#uvTabLabel img').click();
  });

});
;
$(document).ready(function(){
  //We have to bind datepicker here, normally drupal would do this for us...
 // if (typeof datepicker == 'function') { 
    $( "#edit-field-due-date-0-value-datepicker-popup-0" ).datepicker({
                changeYear: true,
                beforeShow: function (textbox, instance) {   
                instance.dpDiv.css({
                    marginTop: (-175) + 'px',
                    marginLeft: 30 + 'px'
                });
                }
    });
 // }
	var error_copy = '<div id="brief-error-message"></div>';
	var pager_1 = "<div class='progress'>Step <span class='step'>1</span> <span class='delim'>of</span> <span class='total'>2</span></div><hr class='fieldset-rule clear'>";
		var pager_2 = "<div class='progress'>Step <span class='step'>2</span> <span class='delim'>of</span> <span class='total'>2</span></div><hr class='fieldset-rule clear'>";
	//do a few layout/element mods/adds
    $('#submit-a-brief-modal .node-form fieldset.group-step-one > legend').after(pager_1 + error_copy);
    $('#submit-a-brief-modal .node-form fieldset.group-step-two > legend').after(pager_2 + error_copy);	
	//if(typeof live == 'function') {
	/*$('a.license-me').live('click',function(e){
		return ; // Disabling -- RDJ
	    console.log('request use clicked');
		e.preventDefault();
		$('#submit-a-brief-modal').md2_modal();
		//get the nid, then traverse the DOM to get the song title and set it in the modal
		$('#edit-field-request-gmcg-wrapper').hide();
		var nid = $(this).attr('nid');
		var catalog = $(this).attr('catalog');
		$('input#edit-field-song-reference-0-value').val(nid);
		var title = $("ul.song-view li[nid="+nid+"] .big-column .song-column .first-floor .title").html();
		$('#request-title').html(title);
		$('input#edit-field-song-title-0-value').val(title);
		$('input#edit-field-request-gmcg').val(catalog);

					
	});	*/
//}

/* Handle Navigation Here */
	$('#submit-a-brief-modal .modal-nav span').click(function(e){
		e.preventDefault();
		var act = $(this).attr('href');
		console.log(act);
		if(act == '#next' ){
		    var errors = md2_submit_brief_validate();
			if(errors!=0){
			  $('#brief-error-message').html('Please fix the following errors.(' + errors + ')');
			  return false;
			}
			md2_brief_navigate('#next');

			
		}else if(act == '#prev' ){
		  md2_brief_navigate('#prev');
		}
	});

/*The actual submission, oh BOY! */
	$('#submit-a-brief-modal span.submit').click(function(e){
	var errors = md2_submit_brief_validate('#submit');
		if(errors!=0){
		console.log('Errors exist with the submission: ' + errors);
		var error_message = 'Please fix the following errors.(' + errors + ')';
		  $('#brief-error-message').after(error_message);
		  return false;
		}
		$('span.submit').click(function(){return false;});  //disable clicking 
		$('form#node-form #edit-submit').click();  //auth form div id
        $('form#node-form #edit-submit-2').click();  //anon form div id, long story
        $('#submit-a-brief-modal').hide();  //hide the main modal body
        $('#mini-splash').show();  //show the loader
        //$('.modal-close').click();

	}); 
	

function md2_brief_navigate(action){
  if(action=='#next') {
			$('#submit-a-brief-modal .node-form fieldset.group-step-one').hide();
			$('#submit-a-brief-modal .node-form fieldset.group-step-two').show();
			$('span.prev').show();
		    $('span.next').hide();
		    $('span.submit').show();
  }
  else if(action=='#prev') {
			$('#submit-a-brief-modal .node-form fieldset.group-step-one').show();
			$('#submit-a-brief-modal .node-form fieldset.group-step-two').hide();
			$('span.prev').hide();
		    $('span.next').show();
		    $('span.submit').hide();
  }
}

	function md2_submit_brief_validate(){
	   console.log('trace');
	    var debug = true;
		var err = 0;
		/* Handle the textual input validations */
		$('#submit-a-brief-modal form#node-form input[type="text"].required:visible').each(function(){
	      if(!$(this).val()){
		    err++;
			$(this).addClass('error');
		  }
		  else {
		    $(this).removeClass('error');
		  }
		});
		/* Validate the dropdown options */
		$('select.required:visible').each(function(){
		  if($(this).val()===""){
		    if(debug) {
		      console.log('we have an error');
		      console.log($(this));
		    }
		    err++;
		    $(this).addClass('error');
		  }
		  else{
		    $(this).removeClass('error');
		  }
		});
	   /* Validate the checkboxes */
		var checkboxes = $("#submit-a-brief-modal input[type='checkbox']:visible");
		console.log(checkboxes);
		if(checkboxes.length && !checkboxes.filter(':checked').length){
			if(debug) {
		      console.log('we have an error with checkboxes');
		      console.log('checkboxes length: ' + checkboxes.length);
		      console.log('length of checked check boxes? ' + checkboxes.filter(':checked').length);
		      console.log($(this));
		    }
			err++;
			checkboxes.addClass('error');	
		}else{
			checkboxes.removeClass('error');
		}

		$('input.error, select.error','#submit-a-brief-modal div.fieldgroup:visible').bind('change', function(){
		console.log('state changed somehow?');
			submit_brief_validate();
		});
		
		return err;
	}
	
});
;
$(document).ready(function() {
  $('#md2-commerce-add-to-cart .modal-content-checkout').hide();

  $(document).on('click','a.license-me',function(e){
      e.preventDefault();
      //get the nid, then traverse the DOM to get the song title and set it in the modal
      var nid = $(this).attr('nid');
      var title = '';
      var artist = '';
      if ($('#song_view_page').length > 0) {
        title = $('#song_view_page .title h1 .song').html();
        artist = $('#song_view_page .title .artist a').html();
      } else {
        title = $("ul.song-view li[nid="+nid+"] .big-column .song-column .first-floor .title").html();
        artist = $("ul.song-view li[nid="+nid+"] .big-column .song-column .first-floor .artist a").html();
      }
      $('#title').html(title);
      // Below, we're only toggling this feature if the user is allowed to use the commerce forms
      if (can_access_commerce == '0') {
        $('#create-an-account-modal').md2_modal();
        // $('input#edit-field-song-reference-0-value').val(nid);
        // $('#request-title').html(title);
        // $('input#edit-field-song-title-0-value').val(title);
        return;
      }

      $('input#edit-field-song-reference-0-value').val(nid);
      $('#artist-name').html(artist);

      // Resetting forms
      $('#md2-commerce-add-to-cart .modal-content-checkout').hide();
      $('#md2-commerce-add-to-cart .modal-content-getquote').hide();
      $('#md2-commerce-add-to-cart .modal-content-main').show();
      md2_commerce_reset_form();
      md2_commerce_get_song_alt();

      // Let's call the modal
      $('#md2-commerce-add-to-cart').md2_modal();
  });

  $('#md2-commerce-add-to-cart .form-license-type').change(function() {
    $('#md2-commerce-add-to-cart #final-price .number').html('0');
    md2_commerce_update_form();
  });

  $('#md2-commerce-add-to-cart .form-radio').live('click', function() {
    $('select[name="tid"]').prop('disabled', 'disabled');
    var form_name = $(this).attr('name');
    if (form_name == 'term') {
      md2_commerce_update_form();
      md2_commerce_update_price_display();
      $('#md2-commerce-add-to-cart .add-cart').removeClass('btn-grey').addClass('btn-red').prop('disabled', '').click(function() {
        if (window.ga) {
          ga('send', 'event', 'Commerce', 'Cart Model Submit: '+$(this).text(), '');
        }
      });
    }
    else {
      md2_commerce_update_form();
    }
  });

  $(document).on('click', '#md2-commerce-add-to-cart #md2-commerce-modal-reset', function(e) {
    e.preventDefault();
    md2_commerce_reset_form();
  })

  $(document).on('click', '#md2-commerce-add-to-cart .add-cart', function() {
    if ($('#md2-commerce-add-to-cart #request-loading').is(':visible')) return;

    var nid = $('input#edit-field-song-reference-0-value').val();
    $('#md2-commerce-add-to-cart #request-loading').show();
    var post_data = md2_commerce_get_form_values();
    $.post("/cart/add", post_data.url, function( data ) {
      $('#md2-commerce-add-to-cart #request-loading').hide();

      var d = JSON.parse(data);
      if (d.order_id == undefined) {
        var error = 'Something went wrong. Please try again.';
        if (d.error != undefined) {
          error = d.error;
        }
        setReport('error', 'Checkout', error);
        return;
      }

      $('#md2-commerce-add-to-cart .modal-content-main').hide();
      $('#md2-commerce-add-to-cart .modal-content-checkout').show();
    });
  })

  $('#md2-commerce-add-to-cart .btn-continue').click(function() {
    $('.modal-close').click();
  });

  $('#md2-commerce-add-to-cart .btn-checkout').click(function() {
    $('.modal-close').click();
  });

  $('#md2-commerce-add-to-cart .get-quote').click(function(e) {
    e.preventDefault();
    md2_commerce_get_quote();
  });

  $('#md2-commerce-add-to-cart .btn-send-quote').click(function(e) {
    e.preventDefault();
    $('#md2-commerce-add-to-cart .btn-continue').hide();
    $('#md2-commerce-add-to-cart .btn-send-quote').show();
    $('#md2-commerce-add-to-cart #request-loading').show();

    var best_time = $('#md2-commerce-request-form  #edit-time').val();
    if (best_time.trim() == '') {
      setReport('error', 'Quote', 'Best time to be reached is required.');
      return;
    }

    var phone = $('#md2-commerce-request-form #edit-phone').val();
    if (phone.trim() == '') {
      setReport('error', 'Quote', 'Your phone number is required.');
      return;
    }

    var company = $('#md2-commerce-request-form #edit-company').val();
    if (company.trim() == '') {
      setReport('error', 'Quote', 'Company is required.');
      return;
    }

    var data = md2_commerce_get_form_values();
    var song = $("#md2-commerce-add-to-cart h1#title").html() + ' by ' + $("#md2-commerce-add-to-cart #artist-name").html();
    string_data = data.url;

    var address_city = $('#md2-commerce-request-form  #edit-location-city').val();
    var address_state = $('#md2-commerce-request-form #edit-location-state').val();
    var address_country = $('#md2-commerce-request-form  #edit-location-country').val();

    if (address_city.trim() == '' || address_country.trim() == '') {
      setReport('error', 'Quote', 'City and Country is required.');
      return;
    }

    var address = address_city + ', ' + address_state + ' ' + address_country;
    string_data += '&company=' + company + '&phone=' + phone + '&location=' + address + '&time=' + best_time;
    $.ajax({
      url: "/cart/send-quote?song=" + song + "&" + string_data,
      context: document.body
    }).done(function(data) {
      $('#md2-commerce-add-to-cart #request-loading').hide();
      $('#md2-commerce-add-to-cart .modal-content-main').hide();
      $('#md2-commerce-add-to-cart .modal-content-getquote').show().find('.content').html(data);

      $('#md2-commerce-add-to-cart .btn-send-quote').hide();
      $('#md2-commerce-add-to-cart .btn-continue').show();
    });
  });

  function md2_commerce_get_quote() {
    $('#md2-commerce-add-to-cart .btn-continue').hide();
    $('#md2-commerce-add-to-cart .btn-send-quote').show();
    $('#md2-commerce-add-to-cart #request-loading').show();
    var data = md2_commerce_get_form_values();

    var song = $("#md2-commerce-add-to-cart h1#title").html() + ' by ' + $("#md2-commerce-add-to-cart #artist-name").html();
    $.ajax({
      url: "/cart/get-quote?song=" + song + "&" + data.url,
      context: document.body
    }).done(function(data) {
      $('#md2-commerce-add-to-cart #request-loading').hide();
      $('#md2-commerce-add-to-cart .modal-content-main').hide();
      $('#md2-commerce-add-to-cart .modal-content-getquote').show().find('.content').html(data);
    });
  }

  function md2_commerce_reset_form() {
    // form
    $('select[name="tid"]').prop('disabled', '').val('');

    // price info
    $('#md2-commerce-add-to-cart #final-price .number').html('0');

    // selection content
    $('#md2-commerce-add-to-cart #form-options').html('');

    // buttons
    $('#md2-commerce-add-to-cart #show-price').show();
    $('#md2-commerce-add-to-cart #show-contact').hide();
    $('#md2-commerce-add-to-cart .add-cart').removeClass('btn-red').addClass('btn-grey').prop('disabled', 'disabled');
  }

  function md2_commerce_update_price_display() {
    var data = md2_commerce_get_form_values();
    $('#md2-commerce-add-to-cart #request-loading').show();

    $.ajax({
      url: "/cart/compute?" + data.url ,
      context: document.body
    }).done(function(data) {
      $('#md2-commerce-add-to-cart #request-loading').hide();
      var d = JSON.parse(data);
      if (d.is_contact == 1) {
        $('#md2-commerce-add-to-cart #show-price').hide();
        $('#md2-commerce-add-to-cart #show-contact').show();
        $('#md2-commerce-add-to-cart #final-price .number').html(0);
        $('#md2-commerce-add-to-cart #final-price .number').html(d.data);
      }
      else {
        $('#md2-commerce-add-to-cart #show-price').show();
        $('#md2-commerce-add-to-cart #show-contact').hide();
        $('#md2-commerce-add-to-cart #final-price .number').html(d.data);
      }
    });
  }

  function md2_commerce_update_form() {
    $('#md2-commerce-add-to-cart #request-loading').show();
    var data = md2_commerce_get_form_values();

    if (data.territory != '' && data.term != '' && data.format != '') {
      $.ajax({
        url: "/cart/get-options?" + data.url,
        context: document.body
      }).done(function(data) {
        $('#md2-commerce-add-to-cart #request-loading').hide();
        $('#md2-commerce-add-to-cart #form-options').html(data);
      });
    }
  }

  function md2_commerce_get_form_values() {
    var format = $('input[name="format"]:checked').val();
    if (format == 'undefined') format = '';

    var term = $('input[name="term"]:checked').val();
    if (term == 'undefined') term = '';

    var territory = $('input[name="territory"]:checked').val();
    if (territory == 'undefined') territory = '';

    var nid = $('input[name="nid"]').val();
    var catalog = $('input[name="catalog"]').val();
    var tid = $('select[name="tid"]').val();

    var alt_nid = $('#edit-field-song-alt').val();

    var url = 'nid=' + nid + '&tid=' + tid + '&format=' + format + '&term=' + term + '&territory=' +  territory + '&catalog=' + catalog + '&alt_nid=' + alt_nid;

    var data = {
      format: format,
      term: term,
      territory: territory,
      catalog: catalog,
      tid: tid,
      url: url,
      alt_nid: alt_nid
    }

    return data;
  }

  function md2_commerce_get_song_alt() {
    $('#md2-commerce-add-to-cart #request-loading').show();
    $('#md2-commerce-add-to-cart #alternate-version').html('');
    $('select[name="tid"]').prop('disabled', 'disabled');
    var nid = $('input[name="nid"]').val();
    $.ajax({
      url: "/cart/get-song-alt?nid=" + nid,
      context: document.body
    }).done(function(data) {
      $('#md2-commerce-add-to-cart #request-loading').hide();
      $('select[name="tid"]').prop('disabled', '');
      $('#md2-commerce-add-to-cart #alternate-version').html(data);
    });
  }
});

// close create account modal
$(document).on('click','#create-an-account-modal .form-submit', function(e) {
  // e.preventDefault();
  window.setTimeout(function() {
    // $('.modal-close').click();
  }, 500);
})
;
// String Scoring Algorithm 0.1.21 | (c) 2009-2014 Joshaven Potter <yourtech@gmail.com>
// MIT License: http://opensource.org/licenses/MIT | https://github.com/joshaven/string_score
String.prototype.score=function(e,f){'use strict';if(this===e)return 1;if(""===e)return 0;var c=0,a,g=this.toLowerCase(),n=this.length,h=e.toLowerCase(),k=e.length,b;a=0;var l=1,m;f&&(m=1-f);if(f)for(var d=0;d<k;++d)b=g.indexOf(h[d],a),-1===b?l+=m:(a===b?a=.7:(a=.1," "===this[b-1]&&(a+=.8)),this[b]===e[d]&&(a+=.1),c+=a,a=b+1);else for(d=0;d<k;++d){b=g.indexOf(h[d],a);if(-1===b)return 0;a===b?a=.7:(a=.1," "===this[b-1]&&(a+=.8));this[b]===e[d]&&(a+=.1);c+=a;a=b+1}c=.5*(c/n+c/k)/l;h[0]===g[0]&&.85>c&&(c+=.15);return c};

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

Date.now = Date.now || function() { return +new Date; };

/**
 * DotG Object Constructor
 * @param {[type]} keyword [description]
 * @todo register an input element on construct, make other elements relative
 * @todo templatize dropdown container
 * @todo remove dropdown dependence on being inside container with input
 * @todo cache expiration
 * @todo fix key up/down in dropdown list
 * @todo refactor event handlers to be relative to object (lines 2500+...)
 */
var Dotg = function(keyword) {
  // ensure we are a constructor
  if (!(this instanceof Dotg)) return new Dotg(keyword);
  // set the term (this will trigger the data request)
  if (!!keyword) {
    this.setTerm(keyword);
  }
  if(supports_html5_storage()) {
    this.acResponseCache = JSON.parse(window.localStorage.getItem('mdAutocompleteCache'));
    this.acResponseCache = !!(this.acResponseCache) ? this.acResponseCache : {};
  }
}

Dotg.prototype.acAjaxCache = {};
Dotg.prototype.acResponseCache = {};
Dotg.prototype.keyTitleMap = {
  'similarto'           : 'Similar To',
  'soundslike'          : 'Sounds Like',
  'vocal themes'        : 'Vocal Theme',
  'vocal types'         : 'Vocal Type',
  'vocalthemes'         : 'Vocal Theme',
  'vocaltypes'          : 'Vocal Type',
  'attribute'           : 'Attribute',
  'nickname'            : 'keyword'
};
Dotg.prototype.keyTypeMap = {
  'similarto'           :  0,
  'soundslike'          :  0,
  'genre'               :  1,
  'brand'               :  1,
  'vocal/instrumental'  :  2,
  'mood'                :  3,
  'instruments'         :  4,
  'vocalthemes'         :  5,
  'vocaltypes'          :  6,
  'artist'              :  8,
  'song'                :  8,
  'album'               :  8,
  'tempo'               :  8,
  'city'                :  8,
  'state'               :  8,
  'country'             :  8,
  'catalog'             :  8,
  'label'               : 10,
  'keyword'             :  8,
  'nickname'            :  9,
  'attribute'           :  8
};

Dotg.prototype.hide = function() {
  // this timeout is nice, but also allows a click to happen
  window.setTimeout(function() {
    $('#the-dropdown-of-the-gods').css('left','-3000px').hide();
  }, 300);
}

Dotg.prototype.empty = function() {
  $('#the-dropdown-of-the-gods ul').empty();
  this.hide();
  this.term = '';
}

Dotg.prototype.show = function() {
  // assume position is called
  if (!$('#the-dropdown-of-the-gods').is('visible') && !!this.term) {
    $('#the-dropdown-of-the-gods').show();
  }
}

// change in term state triggers the pull and population of the dropdown
Dotg.prototype.setTerm = function(term) {
  if (!term) {
    this.hide();
  }
  // set term, skip if it is null, short, or that same term
  if (!term || term == this.term || term.length < 3) {
    return;
  }
  this.term = term.replace(/&/g, "%2526").replace(/,/g, '');
  // set URL
  this.acURL = (Drupal.settings.pie_autocomplete == 1)
            ? 'api/pie/autocomplete/' + this.term
            : '/dtool/autocomplete/' + this.term;
  // get data
  this.getAutoCompleteData();
  // always try to autocomplete against what we have
  this.matchAutoComplete();
}

// helper to consistently define a key
Dotg.prototype.getCacheKey = function(term) {
  term = term || this.term;
  return term.replace(/[^\w\d]/g, '');
}

// positions the dropdown near the input; assumes a wrapping container
Dotg.prototype.positionDropdown = function(tgt) {
  // use parent to position as we move the input around...
  var p = $(tgt).parent().position();
  var h = $(tgt).parent().height();
  var listHeight = $('#the-dropdown-of-the-gods').height();
  var taxHeight = $('#the-dropdown-of-the-gods ul').height();
  listHeight = (taxHeight > 300) ? 300 : taxHeight;
  // ensure we're not in a hidden container
  // $('#the-dropdown-of-the-gods').appendTo('body'); // this needs to happen, including a separately loaded template...
  $('#the-dropdown-of-the-gods')
    .css('top', (p.top + h) + 'px')
    .css('left', (p.left + 15) + 'px')
    .css('height', listHeight + 'px');
  // are we already populated?
  if ($('#the-dropdown-of-the-gods a').length) {
    this.show();
  }
}

// handles registering ajax call success/failure and triggers call
// -- checks cached values first
// -- calls build list
Dotg.prototype.getAutoCompleteData = function() {

  // if we have the data cached
  if (!!this.cacheList(this.getCacheKey())) {
    this.buildList(this.cacheList(this.getCacheKey()));
  } else {
    // trigger async call
    var _self = this; // ajax callback is outside of `this` scope
    this.acAjaxCache[this.getCacheKey()] = $.getJSON(this.acURL);
    // set an attribute on the xhr object for this term
    this.acAjaxCache[this.getCacheKey()].term = this.term;
    this.acAjaxCache[this.getCacheKey()].fail(function(jqxhr, textStatus, error) {
      // console.log( "Request Failed: " + err );
    });
    this.acAjaxCache[this.getCacheKey()].done(function(data, string, xhr) {
      // explicitly pass in the term used in the xhr request
      // -- using the term/data here prevents mis-storing data for the wrong term
      _self.buildList( _self.cacheList(xhr.term, data), xhr.term );
    });
  }

}

// generates the html for the selection
// -- validates that we have the correct values/term before caching
Dotg.prototype.buildList = function(data, term) {

  // always build a list
  var $myNewUL = $('<ul></ul>');
  // ensure we're operating with the term for this data response
  term = term || this.term;

  if (!!data) {
    var _self = this; // $.each changes `this`
    // loop through categories
    $.each(data, function(key, val) {
      // clean category label
      var keyTitle = (!!_self.keyTitleMap[key]) ? _self.keyTitleMap[key] : key;
      // insert section label
      $myNewUL.append('<li class="hr"></li><li class="new-tax">' + keyTitle + '</li>');
      // loop through some values
      $.each(val, function(key1, val1) {
        // THIRD LOOP
        $.each(val1, function(key2, val2) {
          // assign types
          var keyType = !!(_self.keyTypeMap[key.toLowerCase().replace(' ', '')])
                            ? _self.keyTypeMap[key.toLowerCase().replace(' ', '')]
                            : 0;
          // Append the tag
          val2 += '';
          if (val2.match(/_keyword$/)) {
            var key_upperfirst = key.replace(/\w\S*/g, function(txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
            var key_upperfirst2 = key2.replace(/\w\S*/g, function(txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
            $myNewUL.append('<li><a href="javascript:void(0);" key="' + key
              + '" type="' + keyType
              + '" id="' + val2
              + '"><strong>' + key_upperfirst2
              + '</strong> in ' + key_upperfirst + 's</a></li>');
          } else {
            $myNewUL.append('<li><a href="javascript:void(0);" key="' + key
              + '" type="' + keyType
              + '" id="' + val2 + '">'
              + key2 + '</a></li>');
          }
        });
      });
    });
  }
  // always add keyword
  $myNewUL.append('<li class="hr"></li><li class="new-tax">All</li>');
  $myNewUL.append('<li><a id="' + term + '" type="8" key="keyword" href="javascript:void(0);">' + term + '</a></li>');
  // populate
  $('#the-dropdown-of-the-gods ul').replaceWith($myNewUL);
  this.show();
  this.matchAutoComplete();
}

// method to cache the generated list
// -- store in dom cache
// -- serialize to local storage
// -- pop from local storage on construct if available
// -- build in cache for taxonomy (DAY?)
Dotg.prototype.cacheList = function(key, data) {
  // if data, then we are storing, otherwise just accessing
  if (!!data) {
    var cObj = { data: data, time: Date.now() }
    // store into dom cache
    this.acResponseCache[key] = cObj;
    if (supports_html5_storage() && !!JSON) {
      window.localStorage.setItem('mdAutocompleteCache', JSON.stringify(this.acResponseCache));
      // console.log('added to local storage', key, this.acResponseCache, JSON.stringify(this.acResponseCache));
    }
  }
  // only use the data if it's a day old
  if (!!this.acResponseCache[key] && this.acResponseCache[key].time > (Date.now() - (1000*60*60*24*1))) {
    return this.acResponseCache[key].data;
  } else {
    return false;
  }
}

// trigger to match typed entries to dropdown values
// -- exact match, fuzzy match, and auto select of either
// -- needs to ensure that it doesn't over-select a user's action
Dotg.prototype.matchAutoComplete = function(clickIt) {

  // don't process short-to-empty terms
  if (!this.term || this.term.length < 2) {
    return;
  }

  var closestMatch = 0;
  var foundMatch = false;
  var optionCount = $('#the-dropdown-of-the-gods li a').length - 1;

  // if it's open, and we find a match
  if (!clickIt) {

    var _self = this; // $.each changes `this`
    // perform the string manip once
    var local_term = this.term.toLowerCase().replace(/^not /,'exclude: ');
    // exact match
    $('#the-dropdown-of-the-gods li a').each(function(idx, el) {

      if (local_term == $(el).text().toLowerCase()
          && idx < optionCount
          && !foundMatch) {
        // console.log('exact match', _self.term, el);
        _self.choose(idx);
        foundMatch = true;
      }
    });

    if (!foundMatch && !clickIt) { // don't re-match on a click
      var closestIndex = -1;
      // close match
      $('#the-dropdown-of-the-gods li a').each(function(idx, el) {
        var n = $(el).text().score(_self.term, 0.8);
        if (n > 0 && n > closestMatch && idx < optionCount && n > 0.8) {
          closestMatch = n;
          closestIndex = idx;
          // console.log('close match', _self.term, el);
        };
      });
      if (closestIndex > -1) {
        _self.choose(closestIndex);
      }
    }

  }

  if (clickIt) {
    $item = ($('#the-dropdown-of-the-gods a.highlighted').length)
      ? $('#the-dropdown-of-the-gods a.highlighted')
      : $('#the-dropdown-of-the-gods a').last() // assume it's a keyword
    $item.click();
  }
}

// function for selecting an item in the dropdown
// -- handles explicit indices from code and keyboard interaction
Dotg.prototype.choose = function(opt) {

  // nothing to select
  if (!$('#the-dropdown-of-the-gods li').length) {
    return false;
  }

  // given direct index to select
  if (typeof opt == 'number') {
    $('#the-dropdown-of-the-gods li a')
      .removeClass('highlighted')
      .eq(opt)
      .addClass('highlighted');
  } else {
    // figure out key action
    switch (opt) {
      case 'up':
        if ($('#the-dropdown-of-the-gods li a.highlighted').length) {
          var $prevLI = $('#the-dropdown-of-the-gods li a.highlighted')
                          .removeClass('highlighted') // remove class
                          .closest('li') // find parent li
                          .prevAll('li:has(a)'); // find previous li
          if ($prevLI.length) {
            $prevLI.eq(0).find('a').addClass('highlighted');
          }
        } else {
          $('#the-dropdown-of-the-gods li a:last').addClass('highlighted');
        }
        break;
      case 'down':
        if ($('#the-dropdown-of-the-gods li a.highlighted').length) {
          var $nextLI = $('#the-dropdown-of-the-gods li a.highlighted')
                          .removeClass('highlighted') // remove class
                          .closest('li') // find parent li
                          .nextAll('li:has(a)'); // find next li
          if ($nextLI.length) {
            $nextLI.eq(0).find('a').addClass('highlighted');
          }
        } else {
          $('#the-dropdown-of-the-gods li a:first').addClass('highlighted');
        }
        break;
      case 'enter':
        $('#the-dropdown-of-the-gods li a.highlighted').click();
        break;
      case 'clear':
        $('#the-dropdown-of-the-gods a').removeClass('highlighted');
        break;
    }
  }

  // move the cursor to the end
  // var el = $("#dtool-keywords").get(0);
  // el.selectionStart = el.selectionEnd = el.value.length;

  // scroll to selection
  if ($('#the-dropdown-of-the-gods a.highlighted').length) {
    // get LI offset
    var scrollVal = ($('#the-dropdown-of-the-gods a.highlighted').position().top) - 45;
    // get current scroll amount
    var offsetVal = $('#the-dropdown-of-the-gods ul').scrollTop();
    // adjust for any current offset
    scrollVal = scrollVal + offsetVal;
    // ensure non-negative
    scrollVal = (scrollVal > 0) ? scrollVal : 0;
    // scroll
    $('#the-dropdown-of-the-gods ul').scrollTop(scrollVal);
  }

};

// create/extend container
var MD = MD || {};
// create DOTG module
MD.dotg = new Dotg();


///////-------end dotg--------////////

/**
 * Docready
 */
/*jslint indent: 2, eqeq: true */
/*global $, jQuery*/

$(document).ready(function() {

  //select all songs checkbox stuff.
  $(document).on('click', 'input#select-all-songs', function () {
    $('.song-view').find(':checkbox').prop('checked', this.checked);
  });

  $.param.fragment.ajaxCrawlable(true);

  /**
   * If the player was already loaded server side
   */
  if ($("#md-frame").attr('src') != '') {
    playerLoadFlag = 1;
  }

  /**
   * Help Menu
   */
  $(document).on({
    mouseenter:
      function() {
        $("ul.help-menu").show();
        $(".help-menu-hover-box").addClass('help-box-active');
      },
    mouseleave:
      function() {
        $(".help-menu-hover-box").removeClass('help-box-active');
        $("ul.help-menu").hide();
      }
  }, ".help-trigger");

  /**
   * Setup "M" tabs (horizontal main tabs)
   */
  $('#tabs').livequery(function() {
    $(this).tabs({
      select: function(event, ui) {
        // Push this URL "state" onto the history hash.
        $.bbq.pushState({m: ui.tab.hash.replace('#', '')});
        if (ui.tab.hash != '#dashboard') { //show gms button when needed
          $('div#tabs #gms-button input').show();
        }
        else {
          $('div#tabs #gms-button input').hide(); //hide gms button when on the dashboard, the user sees the brands there
        }
        hideLoading();
        exclusion_button_off();
      },
      fx: {opacity: 'toggle', duration: 'slow'}
    });

    // Hide specific "M" tabs
    $('div#tabs ul li').eq(0).hide();
    $('div#tabs ul li').eq(4).hide(); // hide client-activity for now... Todo...
  });

  // Setup the "V" tabs (vertical tabs)
  $('#vert-tabs').livequery(function() {
    $(this).tabs({
      select: function(event, ui) {
        /* mix js tracking -mx */
        if (search_behavior_init && ui.index < 6 && ui.index >= 0) {
          search_behavior_type = 'filters';
          search_behavior_init = false;
        }

        $.bbq.pushState({v: ui.tab.hash.replace('#', '')});
        lastdv = ui.tab.hash.replace('#', '');
        exclusion_button_off();
      },
      fx: {opacity: 'toggle', duration: 'slow'}
    }).addClass('ui-tabs-vertical ui-helper-clearfix');

    // -- Hide specific "V" tabs
    $('#filter-link-savedsearches').parent().hide();
    $('#filter-link-advanced').parent().hide();
    $('#filter-link-results').parent().hide();
    $('#filter-link-dashboard').parent().hide();
  });

  /**
   * Setup the "Hidden" tabs for the playlist page
   */
  $('#hidden-playlist-tabs').livequery(function() {
    $(this).tabs({
      select: function(event, ui) {
        $.bbq.pushState({v1: ui.tab.hash.replace('#', '')});
        lastmv = ui.tab.hash.replace('#', '');
      },
      fx: {opacity: 'toggle', duration: 'slow'}
    });

    /**
     * Hide all "hidden" tabs
     */

    $('div#hidden-playlist-tabs ul li').eq(0).hide(); //
    $('div#hidden-playlist-tabs ul li').eq(1).hide(); //
    $('div#hidden-playlist-tabs ul li').eq(2).hide(); //
  });

  /**
   * Setup PlaceHolder
   */
  $(":input[placeholder]").livequery(function() {
    $(this).placeholder();
  });
  $("textarea[placeholder]").livequery(function() {
    $(this).placeholder();
  });

  /**
   * BPM Slider
   */
  $("#bpm_slider").livequery(function() {
    $(this).slider({
      range: true,
      min: 0,
      max: 200,
      values: [60, 120],
      slide: function(event, ui) {
        ui.values[ 1 ] = ui.values[ 1 ] == 200 ? '200+' : ui.values[ 1 ];
        $("#adv-search-bpmgt").val(ui.values[ 0 ]);
        $("#adv-search-bpmlt").val(ui.values[ 1 ]);
        $("label#bpmgt").html(ui.values[ 0 ]);
        $("label#bpmlt").html(ui.values[ 1 ]);
        var new_bpm_tag = "BPM " + ui.values[ 0 ] + " TO " + ui.values[ 1 ];
        $("li#tag-bpm span").html(new_bpm_tag);

        if (!$('a#link-filter-bpm').hasClass('checked')) {
          $('a#link-filter-bpm').trigger('click');
        }
      }
    });
  });

  /**
   * Duration Slider
   */
  $("#duration_slider").livequery(function() {
    $(this).slider({
      range: true,
      min: 0,
      max: 360,
      values: [60, 240],
      slide: function(event, ui) {
        var sec = ui.values[ 0 ] % 60
        var min = Math.floor(ui.values[ 0 ] / 60)
        ui.values[0] = min + ':' + sec;

        if (ui.values[1] == 360)
        {
          ui.values[1] = "6:00+";
        }
        else {
          var sec = ui.values[ 1 ] % 60
          var min = Math.floor(ui.values[ 1 ] / 60)
          ui.values[1] = min + ':' + sec;
        }

        $("#adv-search-durationgt").val(ui.values[ 0 ]);
        $("#adv-search-durationlt").val(ui.values[ 1 ]);
        $("label#durationgt").html(ui.values[ 0 ]);
        $("label#durationlt").html(ui.values[ 1 ]);
        var new_duration_tag = "Dur. " + ui.values[ 0 ] + " TO " + ui.values[ 1 ];
        $("li#tag-duration span").html(new_duration_tag);

        if (!$('a#link-filter-duration').hasClass('checked')) {
          $('a#link-filter-duration').trigger('click');
        }
      }
    });
  });

  /**
   * Reordering Playlists
   */
  //.playlists-right-column .reorder a
  $(document).on('click', ".playlists-right-column .reorder a", function(e) {
    e.preventDefault();
    if ($.bbq.getState('v1') == 'tabs-playlist') {
      $.bbq.pushState({s2: "Curated", p2: 1}); // Force Curated
      reorderingPlaylist = true;
      $(window).trigger('hashchange'); // force the change
    }
  });

  /**
   * Done Reordering Playlists
   */
  $(document).on('click', "#playlists #reorder-done", function(e) {
    e.preventDefault();
    $("#reorder-wrapper").fadeOut();
    $("#reorder-wrapper").delay('300').remove();
    if ($.bbq.getState('v1') == 'tabs-playlist') {
      $.bbq.pushState({s2: "Curated", p2: 1}); // Force Curated
      $(window).trigger('hashchange'); // force the change
    }
  });

  /**
   * On Hash Change Event - Managing state,etc...
   * Everything happen's on hashchange, its our dispatcher.
   */
  $i = 0;
  $(window).bind('hashchange', function(e) {
    /**
     * Set default hash variables...
     * all of these vars manage the "state" of the dtool and playlist pages
     */
    // partener = typeof $.bbq.getState( "partener" ) !== 'undefined' ? $.bbq.getState( "partener" ) : ''; //tongal for example
    m = typeof $.bbq.getState("m") !== 'undefined' ? $.bbq.getState("m") : 'discovery-tool'; // Main State
    // tesla fix; explicit skip of setting v if v1 is tabs-playlist
    // if (  ($.bbq.getState("v1") == 'tabs-playlist'
    //       || $.bbq.getState("v1") == 'tabs-playlist-dashboard')
    //       && typeof $.bbq.getState("v") !== 'undefined' ) {
    //   v = 'tabs-dashboard';
    // } else {
    v = typeof $.bbq.getState("v") !== 'undefined' ? $.bbq.getState("v") :
      ($.bbq.getState("m") === 'discovery-tool') ? 'tabs-themes' : $.bbq.getState("v");    // Discovery-tool Tab View State...removing tabs-dashboard option in ternary operator, all users will go to tabs-themes -swhite 09292015
    // }
    p = typeof $.bbq.getState("p") !== 'undefined' ? $.bbq.getState("p") : '1';              // Discovery-tool Page State
    a = typeof $.bbq.getState("a") !== 'undefined' ? $.bbq.getState("a") : '25';             // Discovery-tool Per Page Amout
    s = typeof $.bbq.getState("s") !== 'undefined' ? $.bbq.getState("s") : 'bestmatch';        // Discovery-tool Sort State
    //d = $.bbq.getState( "d" );    // Discovery-tool Sort Direction State

    v1 = typeof $.bbq.getState("v1") !== 'undefined' ? $.bbq.getState("v1") : 'tabs-playlist-dashboard';  // Playlist Tab View State
    p1 = typeof $.bbq.getState("p1") !== 'undefined' ? $.bbq.getState("p1") : '1';           // Playlist Dashboard Page
    s1 = typeof $.bbq.getState("s1") !== 'undefined' ? $.bbq.getState("s1") : 'Modified';    // Playlist Dash Sort
    a1 = typeof $.bbq.getState("a1") !== 'undefined' ? $.bbq.getState("a1") : '25';          // Playlist Dash Per Page Amount

    p2 = typeof $.bbq.getState("p2") !== 'undefined' ? $.bbq.getState("p2") : '1';           // Playlist Tab Page
    s2 = typeof $.bbq.getState("s2") !== 'undefined' ? $.bbq.getState("s2") : 'Curated';     // Playlist Sort
    a2 = typeof $.bbq.getState("a2") !== 'undefined' ? $.bbq.getState("a2") : '25';          // Playlist Per Page Amount

    id = typeof $.bbq.getState("id") !== 'undefined' ? $.bbq.getState("id") : '';            // Playlist Id
    q = typeof $.bbq.getState("q") !== 'undefined' ? $.bbq.getState("q") : 0;                // Playlist Sort
    t = typeof $.bbq.getState("t") !== 'undefined' ? $.bbq.getState("t") : '';               // Share Playlist Anon Token

    p_themes = typeof $.bbq.getState("p_themes") !== 'undefined' ? $.bbq.getState("p_themes") : '1';  // Themes Search Page
    a_themes = typeof $.bbq.getState("a_themes") !== 'undefined' ? $.bbq.getState("a_themes") : '48';  // Themes Search Amount

    // without these, pagination on themes search/tesla breaks.
    if (($.trim(v) === 'tabs-themes') && ($.bbq.getState("v") === undefined)) {
      if (strstr(window.location.href.toLowerCase(), "mddtool") != false) {
        $.bbq.pushState({m: 'discovery-tool', v: 'tabs-themes'});
      }
    }

    gid = typeof $.bbq.getState("gid") !== 'undefined' ? $.bbq.getState("gid") : -1;  // group filter
    // If there is no #! in the dtool request then the page was loaded without ajax...
    // We know this because the pathname will be /mddtool, instead of the hash
    if (strstr(window.location.pathname.toLowerCase(), "/mddtool")) {
      first = window.location.pathname;
    } else {
      stateObject = $.bbq.getState();    // get entire state
      for (first in stateObject) {
        break;  // get first
      }
    }

    first = first.toString().toLowerCase();      // make sure its a string
    firstArray = first.split("/");    // break up the request uri (pathname)

    $(".sitetour-close").hide();
    if (first == '/mddtool') {

      $(".sitetour-close").show();

      /**
       *
       * Dtool Authentication
       * hashchange authentication
       *
       */
      if (typeof (authX) != 'undefined') {
        authX.abort();
      }
      //console.log('ajax1');
      authX = $.ajax({
        url: '/dtool/authenticate',
        type: 'GET',
        success: function(authData) {
          $('#tabs-playlist').css('margin-top', '36px');         // push the playlist down
          $('#no-access-splash').hide();                // hide the no-access-splash
          $(".ajax-playlist .play-column").css("margin-left", "0px");  // undo any small adjustment to this

          if (strstr(authData, 'true') || strstr(authData, 'client') || strstr(authData, 'admin')) {
            clientFlag = 1;                      // Is Client
            anonFlag = 0;                      // Not Anon
            $('.all-playlists').show();                  // Show the "<< all aplaylists" link
            $('.dtool-main-tabs').show();                // Show the main tabs wrapper
            $(".help-menu-hover-box").show();            // Show the help icon
          }
          // Anonymous User
          else {
            // Hide the main tabs wrapper
            $('.dtool-main-tabs').hide();                  // Hide the main tabs wrapper
            $('#tabs-playlist').css('margin-top', '0px');
            anonFlag = 1; // flag anons

            /**
             * Check for anonymous usage
             * for now we only allow playlist access on the anon level...
             */
            //$(".sitetour-close").hide();
            $(".help-menu").css('top', '0');
            if (m == 'playlists' && id != '') {
              $.bbq.pushState({v1: 'tabs-playlist'}); // If there is an id and it is the playlists mode then push the tab

              $(".ajax-playlist .play-column").css("margin-left", "10px"); // make a small ajustment to the play button margin since there are no checkboxes

              /**
               * Hide all the main tabs...
               * and other things
               */
              $('.all-playlists').hide();                  // Hide the "<< all aplaylists" link
              $('#no-access-splash').hide();              // hide the no-access-splash
              $(".help-menu-hover-box").hide();            // Hide the help icon

            }
            /**
             * Block if not supposed to be here
             */
            else if (m != 'discovery-tool') {

              $.bbq.pushState({m: 'discovery-tool'});
              $(window).trigger("hashchange");
            }
          }

          /**
           * First Load of Iframe src
           * The iframe src can only be loaded once, due to an FF quirk
           * if you change the iframe src with js the js in the iframe
           * will bind to the parent dom recursively... Big mem leak.
           * There may be a solution to this, just know what
           * your getting yourself into...
           * -kjs
           */
          if (playerLoadFlag == 0) {
            /**
             * Set initial iframe src
             * On the first load we set the src of the iframe
             * as either a playlist or favorites or search
             */
            if ($.bbq.getState("m") == "playlists" && $.bbq.getState("id") != "") {
              if ($.bbq.getState("favorites")) {
                $("#md-frame").attr("src", "mdplayer?favorites=1&dtool=0&sort=" + s2 + "&page=" + p2 + "&amount=" + a2 + "");
              } else {
                $("#md-frame").attr("src", "mdplayer?media=" + id + "&favorites=0&dtool=0&sort=" + s2 + "&page=" + p2 + "&amount=" + a2 + "");
              }
              $("#md-frame").show();
              playerLoadFlag = 1;
            } else {
              $("#md-frame").attr("src", "mdplayer?dtool=1");
              $("#md-frame").show();
            }

          }
          delete authX;
        }
      });
      //} // authentication

      // IF there is a mode (dash, playlist, or dtool) then click its tab
      if (m) {
        $("#tabs ul.tabs-nav li a").each(function() {
          thisHref = $(this).attr('href');
          if (m == thisHref.replace('#', '')) {
            $("a[href='#" + m + "']").trigger('click');
          }
        });
      }

      // Playlist v's tabs
      if (m == 'playlists') {

        // set dash if not a playlist otherwise v will be...
        if (v1 == 'tabs-playlist-dashboard') {
          $.bbq.pushState({v1: 'tabs-playlist-dashboard'});
        }

        if (v1 == "tabs-playlist" && typeof id != 'undefined') {
          /**
           * Trigger the hidden playlist tab/panel
           * !! Important This must come first in this condition so that
           * the playlist tab is loaded, so that the loading-window can
           * detect the correct widths x heights
           */
          $("a[href='#tabs-playlist']").trigger('click');

          dtool3_ajax_playlist(p2, id, s2, a2, t);

        } else {
          /**
           * The playlist dash view only needs to be refreshed
           * if ever when there are new playlists added, etc.
           * !! Important This must come first in this condition so that
           * the playlist tab is loaded, so that the loading-window can
           * detect the correct widths x heights
           */
          $("a[href='#tabs-playlist-dashboard']").trigger('click');

          dtool3_ajax_playlists(p1, s1, a1);
          playlistsDashAmountFlag = a1;
          playlistsDashSortFlag = s1;
          playlistsDashPageFlag = p1;

        }

      }
      /**
       * Dashboard
       */
      else if (m == 'dashboard') {
        $.ajax({
          url: "/md2_functions/recent_searches",
          success: function(data) {
            $('.searches-ajax-wrapper').replaceWith(data);
          }
        });

        /**
         * Move the keyword box into the dashboard
         */
        moveKeywordBoxToDashboard();
      }

      /**
       * Discovery-Tool v's tabs
       */
      else if (m == 'discovery-tool') {

        moveKeywordBoxToDtool();

        if (typeof v == 'undefined') {
          v = 'tabs-themes';
          $.bbq.pushState({'v': 'tabs-themes'});
        }
        flag = 0;

        $("#vert-tabs ul.tabs-nav li a").each(function() {
          thisHref = $(this).attr('href');
          // if we are on the proper view of the dtool mode
          if (v == thisHref.replace('#', '')) {

            // click it the proper v tab
            $("a[href='#" + v + "']").trigger('click');
            // if there is a query/search
            $("#vert-tabs .ui-tabs-panel#tabs-results").addClass('active');

            // If soundslike and multiselect has not loaded then load it
            if (v == 'tabs-soundslike' && multiSelectLoadFlag == 0) {
              $(".multiselect").multiselect();
              $('#tabs-soundslike div.ui-multiselect div.actions input').after('');
              multiSelectLoadFlag = 1;
            }

            if (v == 'tabs-themes') {
              dtool3_ajax_themes_search(p_themes, a_themes);
            }
            else {
              // This conditional and variable flags are very important...
              // It prevents the search from re-issuing everytime the hash...
              // changes on the dtool. Playlists and artist page song view's do reload when...
              // the hash changes but the search results should not so we need thes flags and...
              // this condition.
              if (searchQueryFlag != q || searchPageFlag != p || searchSortFlag != s || searchAmountFlag != a || search_group_filter != gid) {

                searchQueryFlag = q; // important to make sure only new searches execute
                searchPageFlag = p;
                searchSortFlag = s;
                searchAmountFlag = a;
                search_group_filter = gid;

                dtool3_ajax_search(p, q, s, a, gid);
                searchObject = JSON.parse(q);

                /**
                 * Clear the filters before they are about to be rebuilt
                 * but actually trigger the click so that any corresponding
                 * checkboxes are cleared
                 * organically uncheckig and removing one at a time
                 */
                $('ul.keyword-input-wrapper li a.keyword-close').each(function() {
                  $(this).trigger('click');
                });
                /**
                 * Setup Search Keyword Box Tags
                 * And CheckBoxes
                 */

                if ((typeof searchObject != 'undefined') && (searchObject.length > 0) && !("masterCatalog" in searchObject)) {
                  // Set master catalog to 'All'
                  $('#filter-master-catalog-select').val(0);
                }

                if ((typeof searchObject != 'undefined') && (searchObject.length > 0) && !("exactMatch" in searchObject)) {
                  $('#md-exact-match').attr('checked', true);
                }

                // Check if is_exclusively_licensed is in the search query, if not uncheck the box
                // This is necessary for Tesla themes and saved searches to kill the checkbox.
                var isExclusivelyLicensedSet = false;
                if ((searchObject['attributes'])) {
                  for (var attribute in searchObject['attributes']) {
                    for (var key2 in attribute) {
                      if (attribute[key2].filter == 'is_exclusively_licensed') {
                        isExclusivelyLicensedSet = true;
                      }
                    }
                  }
                }
                if (!isExclusivelyLicensedSet) {
                  $('#md-is-exclusively-licensed').attr('checked', false);
                }

                /**
                 * Loop through the search objects
                 */
                k = 0;
                for (var key in searchObject) {
                  k++;

                  // key = filter, voalTypes, Vocal Instr..., etc...
                  var obj = searchObject[key]; // obj = { filter=> 234234, human=> 'text' }
                  //var objFilter = '';
                  //var objHuman  = '';

                  /**
                   * Loop Through Each type of search object:
                   * genre, voal type, etc...
                   */
                  advFlag = 0;
                  for (var key2 in obj) {
                    var obj2 = obj[key2];
                    objHuman = obj2.human;
                    var ex = '';
                    if (obj2.filter != undefined)
                    {
                      objFilter = obj2.filter;
                      ex = 'no';
                    }
                    else if (obj2.exfilter != undefined)
                    {
                      objExfilter = obj2.exfilter;
                      ex = 'yes';
                    }

                    /**
                     * Assign Types To the tag bubbles
                     * This is to make the keyword box tags match the tags from the taxonomy checkboxes
                     */
                    var keyType = '';

                    if (key.toLowerCase().replace(' ', '') == 'similarto' || key == 'soundslike') {
                      keyType = '0';
                    }

                    /**
                     * Taxonomy...
                     */
                    if (key.toLowerCase().replace(' ', '') == 'filters') {
                      keyType = '1';
                    }
                    /**
                     * Static
                     */
                    id_append = '';
                    if (key.toLowerCase().replace(' ', '') == 'vocalinstr') {
                      keyType = '2';
                      id_append = 'vocalinstr-';
                    }
                    if (key.toLowerCase().replace(' ', '') == 'vocaltypes') {
                      keyType = '6';
                      id_append = 'vocaltype-';
                    }

                    /**
                     * Advanced
                     */
                    if (key.toLowerCase().replace(' ', '') == 'artist') {
                      keyType = '8';
                    }
                    if (key.toLowerCase().replace(' ', '') == 'song') {
                      keyType = '8';
                    }
                    if (key.toLowerCase().replace(' ', '') == 'album') {
                      keyType = '8';
                    }
                    if (key.toLowerCase().replace(' ', '') == 'tempo') {
                      keyType = '8';
                    }
                    if (key.toLowerCase().replace(' ', '') == 'city') {
                      keyType = '8';
                    }
                    if (key.toLowerCase().replace(' ', '') == 'state') {
                      keyType = '8';
                    }
                    if (key.toLowerCase().replace(' ', '') == 'country') {
                      keyType = '8';
                    }
                    if (key.toLowerCase().replace(' ', '') == 'catalog') {
                      keyType = '8';
                    }
                    if (key.toLowerCase().replace(' ', '') == 'keyword') {
                      keyType = '8';
                    }
                    if (key.toLowerCase().replace(' ', '') == 'attribute') {
                      keyType = '8';
                    }
                    if(key.toLowerCase().replace(' ','') == 'nickname'){ keyType = '9'; }
                    if(key.toLowerCase().replace(' ','') == 'label'){ keyType = '10'; }
                    /**
                     * Advanced Filters
                     * Seriously this is tricky... -kjs
                     * dont mess with it...
                     * if you think you get it, you don't.
                     * This advanced loop acts differently by looping more times than necessary
                     *
                     * I forgot what advFlag is for -kjs 12/4/2012
                     *
                     */
                    if (key.toLowerCase().replace(' ', '') == 'advfilters' && advFlag == 0) {
                      keyType = '7';
                      for (advKey in obj) {
                        if (obj[advKey] != '') {
                          $('#adv-search-' + advKey + '').val(obj[advKey]);
                          if (!$('a#link-filter-' + advKey + '').hasClass('checked')) {
                            $('a#link-filter-' + advKey + '').trigger('click');
                          }
                          /**
                           * Duration and BPM are sliders as well as unique cases...
                           * no need for bpmlt, as long as one of them is recognized.
                           */
                          if (advKey == 'bpmgt') {
                            if (!$('a#link-filter-bpm').hasClass('checked')) {
                              $('a#link-filter-bpm').trigger('click');
                            }
                          }
                          if (advKey == 'durationgt') {
                            if (!$('a#link-filter-duration').hasClass('checked')) {
                              $('a#link-filter-duration').trigger('click');
                            }
                          }
                        } // if there is an advanced filter value
                      } // loop through advanced filters

                      advFlag = 1; // makes sure we only hit advanced once??????
                    }
                    else
                    {
                      /**
                       * else
                       * Not advanced
                       * Add the tag to the keyword box
                       */
                      /**
                       * If the keyword has a checkbox
                       * then click it, this will add it back to they keyword box
                       * else just add it. Hence preventing dupes
                       */
                     if (key == "exactMatch") {
                        // Set Exact Match or Not
                        if (objFilter == 1) {
                          $('#md-exact-match').attr('checked', true);
                        } else {
                          $('#md-exact-match').attr('checked', false);
                        }
                      }
                      else if (keyType != '9' && ex == 'no' && $('a#link-filter-' + id_append + objFilter + '').length && objFilter != objHuman) {
                        if (!$('a#link-filter-' + id_append + objFilter + '').hasClass('checked')) {
                          $('a#link-filter-' + id_append + objFilter + '').trigger('click');
                        }
                      }
                      //add back exclusion filters
                      else if (keyType != '9' && ex == 'yes' && $('a#link-filter-' + id_append + objExfilter + '').length)
                      {
                        if (!$('a#link-filter-' + id_append + objExfilter + '').hasClass('checked')) {
                          if ($('button#exclusion').val() != 'on') {
                            $('button#exclusion').val('on');
                            $('a#link-filter-' + id_append + objExfilter + '').trigger('click');
                            $('button#exclusion').val('off');
                          } else {
                            $('a#link-filter-' + id_append + objExfilter + '').trigger('click');
                          }
                        }
                      }
                      else if (ex == 'yes') {
                        $('li.search').before('<li class="keyword-box exclude" key="' + key + '" type="' + keyType + '" id="tag-' + objExfilter + '" filter="' + objExfilter + '" exclusion="true"><strong class="hint_not">not&nbsp;&nbsp;</strong><span>' + objHuman + '</span><a class="keyword-close"></a></li>');
                      }
                      /**
                       * Add it organically
                       */
                      else if (ex == 'no') {
                        if (key == "masterCatalog") {
                          // Master Catalog
                          $('#filter-master-catalog-select').val(objFilter);
                        } else {
                          // Set is_exclusively_licensed.
                          if (objFilter == "is_exclusively_licensed") {
                            $('#md-is-exclusively-licensed').attr('checked', true);
                          } else {
                            $('li.search').before('<li class="keyword-box" key="' + key + '" type="' + keyType + '" id="tag-' + objFilter + '" filter="' + objFilter + '"><span>' + objHuman + '</span><a class="keyword-close"></a></li>');
                          }
                        }
                      }
                    }
                  }
                }
              } // if a duplicate search

              /**
               * If there is not a new search we still need
               * to reload the Iframe with the songs in
               * the results pane even if we don't need to reload the
               * results pane itself
               */
              else {
                // set the current playlist
                $.ajax({
                  url: '/md2/mdplayer/getsongsjson',
                  type: 'GET',
                  success: function(data) {

                    if (data != '' && data != '\n') { // Added the second condition of ' ' to fix a bug. It seems like ajax calls that return strings that are not json and not html are returning in such a way that they don't match like there is a line or a space in them
                      currentPlaylist = JSON.parse(data);
                    }
                  }
                });
              }
              flag = 1;
            } // if v is this specific vert tab

            // Check if we need to fade in the placeholder
            if ($('#dtool-keywords').val() == "" && $('ul.keyword-input-wrapper li').length == 1) {
              $('.keyword-placeholder').fadeIn('slow');
            } else {
              $('.keyword-placeholder').fadeOut('fast');
            }
          }

        }); // .each of vert tabs

        if (flag == 0) {
          $("a[href='#tabs-themes']").trigger('click');
        } // double check default

      } // if m == discovery-tool
    } // if first == '/mddtool'
  }); // END hashchange



  // $(window).bind('keyup', function(e) {

  //   v = typeof $.bbq.getState("v") !== 'undefined' ? $.bbq.getState("v") : 'tabs-themes';
  //   if (v == 'tabs-genres' || v == 'tabs-vocalinst' || v == 'tabs-moods' || v == 'tabs-instruments' || v == 'tabs-vocaltheme' || v == 'tabs-vocaltype')
  //   {
  //     if (e.keyCode == 18 && $('button#exclusion').val() == 'off')
  //     {
  //       $('button#exclusion').trigger('click');
  //     } else if (e.keyCode == 18 && $('button#exclusion').val() == 'on')
  //     {
  //       $('button#exclusion').trigger('click');
  //     }
  //   }

  // });

  // $(document).on('click', 'a.back_to_result', function(e) {
  //   e.preventDefault();
  //   $('a.back-to-results').trigger('click');
  // });

  /**
   * Click Playlists Dashboard Buttons
   */
  $(document).on('click', '.all-playlists, .see_all', function(e) {
    e.preventDefault();
    $.bbq.pushState({m: 'playlists', v1: 'tabs-playlist-dashboard'});
  });

  /**
   * Click "Get Songs" event
   * page is 1 because user
   * is searching. The ajax_search function
   * handles everything from here
   */
  var last_search = ""; //variable used to store the last performed dtool search in order to prevent duplicate saves
  $(document).on('click', 'button.dtool-get', function(e) {
    e.preventDefault();
    exclusion_button_off();
    page = 1;

    /**
     * Wrap up the leftover search tags into
     * a keyword search
     */
    if ($('input#dtool-keywords').val() != '') {
      $('li.search').before(
        '<li class="keyword-box" key="keyword" type="8" id="tag-' +
        $('#dtool-keywords').val() + '" filter="' + $('#dtool-keywords').val() +
        '"><span>' +
        $('#dtool-keywords').val() +
        '</span><a class="keyword-close"></a></li>'
      );
      $('input#dtool-keywords').val('');
    }

    /**
     * When a user clicks search the dtool2_search gets the search and sticks it in the url
     */
    search = dtool3_search(); //changed by mx, no comments.
    // $.bbq.pushState({m: 'discovery-tool', v: 'tabs-results', q: '' + search + '', p: '1'});
    // swap from BBQ so that we can set the full URL;
    //  - if we use bbq, it only appends the query to the hash and does not load the full URL we want
    window.location = '/#!/mddtool&m=discovery-tool&p=1&v=tabs-results&q=' + escape(search);

    //if current search differs from previous search enable the save search feature
    if (search != last_search) {
      last_search = search;
      $('.save-search').removeClass('inactive');
    }
  });

  // -- Clearing keywords
  $(document).on('click', '.dtool-clear', function(e) {
    e.preventDefault();
    exclusion_button_off();
    $('#dtool-keywords').val('');
    // -- Remove All The Tags
    $('.keyword-input-wrapper li.keyword-box').remove();

    // -- Populate any similar to...
    $("ul.multiselect option:selected").attr('selected', '');
    $("ul.selected li a.action").trigger("click");

    /**
     * !!IMPORTANT - DO NOT CHANGE THE FOLLOWING .each LOOP CODE
     * IT NEEDS TO BE JUST THE WAY IT IS, EVEN THOUGH ITS NOT THE
     * MOST EFFICIENT WAY OF LOOPING THROUGH THOSE ITEMS, ITS NECESSARY
     * FOR UNIQUE PARENT -> CHILD BEHAVIOR
     * Uncheck All The Boxes
     * $('a.checkbox-custom.checked').trigger('click');
     * looping is important vs doing:
     * because of parent->child checkbox click behaviors
     */
    $('a.checkbox-custom').each(function() {
      if ($(this).hasClass('checked')) {
        $(this).trigger('click');
      }
    });

    MD.dotg.hide();
  });

  /**
   * Sorting Song View
   */
  $(document).on('click', 'ul.sort-options li a', function(e) {
    e.preventDefault();
    var sorter = '';

    /**
     * Sorting Dtool
     */
    if ($.bbq.getState('m') == 'discovery-tool') {
      sorter = swapSort(this, $.bbq.getState('s'));
      $.bbq.pushState({s: sorter, p: 1});
    }
    /**
     * Sorting Playlists And Dashboard
     */
    else if ($.bbq.getState('m') == 'playlists') {

      // Playlist
      if ($.bbq.getState('v1') == 'tabs-playlist') {
        sorter = swapSort(this, $.bbq.getState('s2'));
        $.bbq.pushState({s2: sorter, p2: 1});
      }
      // Playlist Dash
      else {

        sorter = swapSort(this, $.bbq.getState('s1'));

        // Add class to playlist wrapper
        // Don't remember what this does?
        // I think its ownder grouping... -kjs
        if (sorter == 'Owner' || sorter == "!Owner") {
          $(".ajax-playlists").addClass('owner-wrapper');
        } else {
          $(".ajax-playlists").removeClass('owner-wrapper');
        }

        $.bbq.pushState({s1: sorter, p1: 1, v1: 'tabs-playlist-dashboard'});

      }
    }

    // -- Sorting Artist
    else {
      sorter = swapSort(this, $.bbq.getState('s3'));
      $.bbq.pushState({s3: sorter, p3: 1});
    }
  });

  // Add bing to sort
  function swapSort(that, sortState) {
    if ($.bbq.getState('m') == 'discovery-tool') {
      sorter = $.bbq.getState('s');
    }
    else if ($.bbq.getState('v1') == 'tabs-playlist') {
      sorter = $.bbq.getState('s2');
    }
    else if ($.bbq.getState('v1') == 'tabs-playlist-dashboard') {
      sorter = $.bbq.getState('s1');
    }
    else {
      sorter = $.bbq.getState('s3');
    }

    if (sorter == $(that).attr('sort')) {
      sorter = "!" + $(that).attr('sort');
    } else {
      sorter = $(that).attr('sort');
    }
    return sorter;
  }

  /**
   * Pagination JS
   * Click Page..
   */
  $(document).on('click', '.pagination ul li a.page', function(e) {
    e.preventDefault();
    if ($.bbq.getState('m') == 'discovery-tool') {
      if ($.bbq.getState('v') == 'tabs-themes') {
        $.bbq.pushState({p_themes: $(this).html()});
      } else {
        $.bbq.pushState({p: $(this).html()});
      }
    } else if ($.bbq.getState('v1') == 'tabs-playlist-dashboard') {
      $.bbq.pushState({p1: $(this).html()});
    } else if ($.bbq.getState('v1') == 'tabs-playlist') {
      $.bbq.pushState({p2: $(this).html()});
    }
    // artists
    else {
      $.bbq.pushState({p3: $(this).html()});
      $.bbq.pushState({p_themes: $(this).html()});
    }
  });

  /**
   * Click Page Back
   */
  $(document).on('click', '.pagination ul li.leftarrow a', function(e) {

    e.preventDefault();

    if (typeof $.bbq.getState('p') == 'undefined') {
      p = 1;
    } else {
      p = parseInt($.bbq.getState('p'));
    }
    if (typeof $.bbq.getState('p1') == 'undefined') {
      p1 = 1;
    } else {
      p1 = parseInt($.bbq.getState('p1'));
    }
    if (typeof $.bbq.getState('p2') == 'undefined') {
      p2 = 1;
    } else {
      p2 = parseInt($.bbq.getState('p2'));
    }
    if (typeof $.bbq.getState('p3') == 'undefined') {
      p3 = 1;
    } else {
      p3 = parseInt($.bbq.getState('p3'));
    }
    if (typeof $.bbq.getState('p_themes') == 'undefined') {
      p_themes = 1;
    } else {
      p_themes = parseInt($.bbq.getState('p_themes'));
    }

    if ($.bbq.getState('m') == 'discovery-tool') {
      if ($.bbq.getState('v') == 'tabs-themes') {
        $.bbq.pushState({p_themes: parseInt(p_themes - 1)});
      } else {
        $.bbq.pushState({p: parseInt(p - 1)});
      }
    } else if ($.bbq.getState('v1') == 'tabs-playlist-dashboard') {
      $.bbq.pushState({p1: parseInt(p1 - 1)});
    } else if ($.bbq.getState('v1') == 'tabs-playlist') {
      $.bbq.pushState({p2: parseInt(p2 - 1)});
    }
    // artists
    else {
      $.bbq.pushState({p3: parseInt(p3 - 1)});
    }
  });

  /**
   * Click Page Forward
   */
  $(document).on('click', '.pagination ul li.rightarrow a', function(e) {

    e.preventDefault();

    if (typeof $.bbq.getState('p') == 'undefined') {
      p = 1;
    } else {
      p = parseInt($.bbq.getState('p'));
    }
    if (typeof $.bbq.getState('p1') == 'undefined') {
      p1 = 1;
    } else {
      p1 = parseInt($.bbq.getState('p1'));
    }
    if (typeof $.bbq.getState('p2') == 'undefined') {
      p2 = 1;
    } else {
      p2 = parseInt($.bbq.getState('p2'));
    }
    if (typeof $.bbq.getState('p3') == 'undefined') {
      p3 = 1;
    } else {
      p3 = parseInt($.bbq.getState('p3'));
    }
    if (typeof $.bbq.getState('p_themes') == 'undefined') {
      p_themes = 1;
    } else {
      p_themes = parseInt($.bbq.getState('p_themes'));
    }

    if ($.bbq.getState('m') == 'discovery-tool') {
      if ($.bbq.getState('v') == 'tabs-themes') {
        $.bbq.pushState({p_themes: parseInt(p_themes + 1)});
      } else {
        $.bbq.pushState({p: parseInt(p + 1)});
      }
    } else if ($.bbq.getState('v1') == 'tabs-playlist-dashboard') {
      $.bbq.pushState({p1: parseInt(p1 + 1)});
    } else if ($.bbq.getState('v1') == 'tabs-playlist') {
      $.bbq.pushState({p2: parseInt(p2 + 1)});
    }
    // artists
    else {
      $.bbq.pushState({p3: parseInt(p3 + 1)});
    }
  });

  /**
   * Input Page into pagination
   */
  $(document).on('keyup', '.currentpage input', function(event) {
    if ($.bbq.getState('m') == 'discovery-tool') {
      if (event.keyCode == 13) {
        if ($(event.target).is(':focus')) {
          $.bbq.pushState({p: parseInt($('.currentpage:visible input').val())});
        }
      }
    } else if ($.bbq.getState('v1') == 'tabs-playlist-dashboard') {
      if (event.keyCode == 13) {
        if ($(event.target).is(':focus')) {
          $.bbq.pushState({p1: parseInt($('.currentpage:visible input').val())});
        }
      }
    } else if ($.bbq.getState('v1') == 'tabs-playlist') {
      if (event.keyCode == 13) {
        if ($(event.target).is(':focus')) {
          $.bbq.pushState({p2: parseInt($('.currentpage:visible input').val())});
        }
      }
    }
    // artists
    else {
      if (event.keyCode == 13) {
        if ($(event.target).is(':focus')) {
          $.bbq.pushState({p3: parseInt($('.currentpage:visible input').val())});
        }
      }
    }
  });

  /**
   * Per Page Handle
   */
  $(document).on('click', '.page-drop-handle', function(e) {
    e.preventDefault();
    $('ul.page-drop').show();
  });

  $(document).on('click', '.page-drop-handle2', function(e) {
    e.preventDefault();
    $('ul.page-drop2').show();
  });

  $(document).on('click', '.page-drop-sort-handle', function(e) {
    e.preventDefault();
    $('ul.page-drop-sort').show();
  });

  /**
   * Hover Out Page DropDown
   */
  $(document).on('mouseleave', "ul.page-drop", function(e) {
    $('ul.page-drop').hide();
  });

  $(document).on('mouseleave', "ul.page-drop2", function(e) {
    $('ul.page-drop2').hide();
  });

  $(document).on('mouseleave', "ul.page-drop-sort", function(e) {
    $('ul.page-drop-sort').hide();
  });

  /**
   * Clicking Per Page
   */
  $(document).on('click', '.page-drop li a,.page-drop2 li a', function(e) {
    e.preventDefault();
    var amount = $(this).html();
    // Dtool
    if ($.bbq.getState('m') == 'discovery-tool') {
      if ($.bbq.getState('v') == 'tabs-themes') {
        $.bbq.pushState({a_themes: parseInt(amount), p_themes: 1});
      } else {
        $.bbq.pushState({a: parseInt(amount), p: 1});
      }
    }
    // Dashboard
    else if ($.bbq.getState('v1') == 'tabs-playlist-dashboard') {
      $.bbq.pushState({a1: parseInt(amount), p1: 1});
    }
    // Playsist
    else if ($.bbq.getState('v1') == 'tabs-playlist') {
      $.bbq.pushState({a2: parseInt(amount), p2: 1});
    }
    // Artist
    else {
      $.bbq.pushState({a3: parseInt(amount), p3: 1});
    }
  });

  /**
   * Song View JS
   */

  /**
   * Expand/Collapse song details in the song view
   * nhalabuda@musicdealers.com
   * (rewrote this to make the whole container of the arrow icon clickable -nmh)
   * */
  $(document).on('click', '.more-column', function(e) {
    e.preventDefault();
    //console.log('clicked more');
    if ($(this).children('a').hasClass('less')) {
      $(this).closest('li').removeClass('big').addClass('small');
      $(this).children('a').removeClass('less').addClass('more');
    } else {
      $(this).closest('li').removeClass('small').addClass('big');
      $(this).children('a').removeClass('more').addClass('less');
    }
  });

  $(document).on('click', '.see-lyrics', function(e) {
    e.preventDefault();
    var lyrics_text = $(this).closest('li').children('div').children('.lyrics-column').html();
    var songtitle = $(this).parent().parent().find('a.title.play').html();
    var artistname = $(this).parent().parent().find('span.artist').find('a').html();

    lyrics_text = '<div class = lyrics_box>' + lyrics_text + '</div>';

    $('#md2-lyrics .lyrics').html(lyrics_text);
    $('#md2-lyrics .modal-top-graphic h2.songtitle').html(songtitle);
    $('#md2-lyrics .modal-top-graphic h2.artistname').html(artistname);
    $('#md2-lyrics').md2_modal();
  });

  /**
   * Liking a Song from the song-view
   */
  $(document).on('click', ".song-view a.dtool-like, .song-view a.add-to-favorites", function(e) {
    e.preventDefault();
    var nid = $(this).closest('li').attr('nid');
    that = this;
    if ($(this).hasClass("liked")) {
      $(this).removeClass("liked");
      $(this).closest('li a.dtool-like').removeClass("liked");
      $(this).closest('li a.add-to-favorites').removeClass("liked");
      $.ajax({
        url: "/md2/song/downvote/" + nid + "",
        success: function(data) {
          if ($(that).hasClass("add-to-favorites")) {
            $(that).html("Add to Favorites");
            $('.dtool-like[nid="' + nid + '"]').removeClass("liked");
          } else {
            $('.add-to-favorites[nid="' + nid + '"]').html("Add to Favorites");
            $('.add-to-favorites[nid="' + nid + '"]').removeClass("liked");
          }
        }
      });
    } else {
      $(this).addClass("liked");
      parentLi = $(this).closest('li');
      parentLi.children('.big-column').children('.artist-column').children('a.dtool-like').addClass("liked");
      $(this).closest('li').children('.image-column').children('.add-to-favorites').addClass("liked");
      $.ajax({
        url: "/md2/song/upvote/" + nid + "",
        success: function(data) {
          if ($(that).hasClass("add-to-favorites")) {
            $(that).html("Remove Favorite");
            $('.dtool-like[nid="' + nid + '"]').addClass("liked");
          } else {
            $('.add-to-favorites[nid="' + nid + '"]').html("Remove Favorite");
            $('.add-to-favorites[nid="' + nid + '"]').addClass("liked");
          }
        }
      });
    }
  });

  /**
   * Quick Search Tag
   */
  $(document).on('click', '.quick-search-tag', function(e) {
    // get first
    if (strstr(first, 'artist')) {
      //return true;
    } else {
      e.preventDefault();
      /**
       * Search clicks disabled for non clients
       */
      if (clientFlag == 1) {
        /**
         * If there is a checkbox for this tag the click it.
         */
        if ($('a#link-filter-' + $(this).attr('tid') + '').length) {

          // change state to results
          $.bbq.pushState({m: 'discovery-tool', v: 'tabs-results'});

          // clear all current tags, the loop is important
          if ($('ul.keyword-input-wrapper li a.keyword-close').length) {
            $('ul.keyword-input-wrapper li a.keyword-close').each(function() {
              $(this).trigger('click');
            });
          }

          // click corresponding tag so the tag is built and the checkbox is checked
          $('a#link-filter-' + $(this).attr('tid') + '').trigger('click');

          // click search
          $('.dtool-get').trigger('click');

        } else if ($(this).attr('type') == '10') { //if quick search tag type 10 (2nd genre)
          //open up advanced search tab
          $.bbq.pushState({m: 'discovery-tool', v: 'tabs-advanced'});
          //clear all current tags
          $('ul.keyword-input-wrapper li a.keyword-close').each(function() {
            $(this).trigger('click');
          });
          //trigger the change event on the select menu to create our tag bubble
          $('#adv-search-secondgenre').val($(this).attr('tid')).trigger('change');
          //trigger the search
          $('.dtool-get').trigger('click');
        } else {

          $('ul.keyword-input-wrapper li a.keyword-close').each(function() {
            $(this).trigger('click');
          });

          $('li.search').before('<li class="keyword-box" key="' + $(this).attr('key') + '" type="1" id="tag-' + $(this).attr('tid') + '" filter="' + $(this).attr('tid') + '"><span>' + $(this).html() + '</span><a class="keyword-close"></a></li>');
          $('.dtool-get').trigger('click');
        }
      }
    }
  });


  /**
   * Click Advanced Search
   */
  $(document).on('click', '.dtool-adv', function(e) {
    e.preventDefault();
    $.bbq.pushState({m: 'discovery-tool', v: 'tabs-advanced'});
  });

  /**
   * Back To Results
   */
  $(document).on('click', '.back-to-results, .back-to-result', function(e) {
    e.preventDefault();
    $.bbq.pushState({m: 'discovery-tool', v: 'tabs-results'});
  });

  /**
   * Add One or Many to playlist from songview
   * nhalabuda@musicdealers.com
   */
  $(document).on('click', '.song-view-header button.add-to-playlist, .song-view-footer button.add-to-playlist, .song-view .add-to-playlist', function(e) {
    e.preventDefault();

    var song_nids = ($(this).attr('nid')) ? $(this).attr('nid') : $('ul.song-view:visible input[type=checkbox]:checked').map(function(){return $(this).closest('li').attr('nid');}).get().join();
    if($(this).attr('nid')) {
      var gmcg_warnings = $(this).attr('catalog') ? $(this).attr('catalog') : $(this).parent().parent().attr('catalog');
    }
    else{
      var gmcg_warnings = $('ul.song-view:visible input[type=checkbox]:checked').map(function(){return $(this).closest('li').attr('catalog');}).get();
    }
    var gmcg_warning = new Array();

    if(!song_nids){return false;}
    if(typeof gmcg_warnings != 'undefined' && gmcg_warnings.length > 0){
      if(typeof(gmcg_warnings) != "string"){
        for(i in gmcg_warnings){
          if(gmcg_warnings[i] != "" && $.inArray(gmcg_warnings[i] ,gmcg_warning) != 0){
            gmcg_warning[gmcg_warnings[i]] = 1;
          }
        }
        var gmcg_message = '';
        for (gmcg in gmcg_warning){
          if(gmcg != ""){
            gmcg_message = gmcg_message + gmcg + ', ';
          }
        }

        if(gmcg_message != ""){
            gmcg_message = gmcg_message.replace(/\s+$/g, '');
          gmcg_message = gmcg_message.replace(/,$/g, '');
          setReport('error','Uh-Oh','CAUTION, you are about to add song(s) from catalog: '+gmcg_message+' to the playlist');
        }
      }
      else{
        setReport('error','Uh-Oh','CAUTION, you are about to add song(s) from catalog: '+gmcg_warnings+' to the playlist');
      }
    }





    $('#md2-add-to-playlist .playlists').html("<center style='margin:65px 0px;'><img src='/sites/all/modules/custom/md2/md2_player/images/loader_big.gif'/></center>");
    $('#md2-add-to-playlist').md2_modal();
    $.ajax({
      url: sitePath + 'md2/usersplaylists/checks/0', // URL to the local file
      type: 'GET', // POST or GET
      data: {}, // Data to pass along with your request
      success: function(data, status) {

        $('#md2-add-to-playlist .playlists').html(data);

        $('#md2-add-to-playlist a.can-not-curate').addClass('gray');
        $('#md2-add-to-playlist a.can-not-curate').siblings('input.playlist-checkbox').css('visibility', 'hidden');
        $('#md2-add-to-playlist a.can-not-curate').each(function() {
          $(this).replaceWith("<span class=\"" + $(this).attr("class") + "\">" + $(this).text() + "</span>");
        });

        $('#md2-add-to-playlist a').removeClass('playlist-goto');
        $(document).on('click', '#md2-add-to-playlist a', function(e) {
          e.preventDefault();
          $(this).siblings('input.playlist-checkbox').click();
        });

      }
    });


    $('#md2-add-to-playlist #add-to-playlist').unbind('click').click(function(e) {

      // Get the Playlist Nids
      var playlist_nids = $('#md2-add-to-playlist .playlists input[type=checkbox]:checked').map(function() {
        return this.value
      }).get().join();

      if (!playlist_nids) {
        return false;
      }

      $('#md2-add-to-playlist .playlists').html("<center style='margin:65px 0px;'><img src='/sites/all/modules/custom/md2/md2_player/images/loader_big.gif'/></center>");

      $.ajax({
        url: sitePath + 'dtool/save_songs_to_playlists', // URL to the local file
        type: 'POST', // POST or GET
        data: {'songIds': song_nids, 'playlistIds': playlist_nids}, // Data to pass along with your request
        dataType: 'json', //auto parsing json
        success: function(data, status) {
          if (data.hasOwnProperty('message')) {
            if (data.message.hasOwnProperty('group_check_error')) {
              var str = '<ul>';
              for (index in data.message.group_check_error) {
                str += '<li>' + data.message.group_check_error[index] + '</li>';
              }
              str += '<ul/>';
              setReport('error', 'group_check', str);
            }
          }

          $('#md2-add-to-playlist .playlists').html("<h2>Saved.</h2>");
          dtool3_ajax_playlists();

        },
        complete: function() {
          $('#md2-add-to-playlist .modal-box, .modal-overlay').delay(1000).fadeOut();
        }
      });

    });

  });

  /**
   * Remove from playlist
   * nhalabuda@musicdealers.com
   */
  $(document).on('click', '.ajax-playlist .song-view-header .delete-from-playlist, .ajax-playlist .song-view-footer .delete-from-playlist', function(e) {
    e.preventDefault();
    var playlist_nid = $.bbq.getState('id');
    var song_nids = $('.ajax-playlist ul.song-view li input[type=checkbox]:checked').map(function() {
      var nid = $(this).closest('li').attr('nid');
      $(this).closest('li').slideUp(function(el) {
        $(this).remove();
      });
      return nid;
    }).get().join();
    if (!playlist_nid || !song_nids) {
      return false;
    }
    $.ajax({
      url: sitePath + 'dtool/remove_songs_from_playlists', // URL to the local file
      type: 'POST', // POST or GET
      data: {'songIds': song_nids, 'playlistIds': playlist_nid}, // Data to pass along with your request
      success: function(data, status) {
        var count = JSON.parse(data).count;
        count += (count == 1) ? ' Song' : ' Songs';
        $('.ajax-playlist span.count').html(count);
      },
      error: function() {
        alert("Error!\n" + error);
      },
    });
  });

  /**
   * Click Save Search
   * nhalabuda@musicdealers.com
   */
  $(document).on('click', '.save-search', function(e) {
    //return false immediately if save-search is set inactive
    if ($(this).hasClass('inactive')) {
      return false;
    }
    $(this).addClass('inactive');
    e.preventDefault();
    $(this).after('<span class="save-status save-search">Saving...</span>').hide();
    var save_status = "";
    $.ajax({
      url: "/dtool/save_search",
      data: '&search=' + $.bbq.getState('q').toString(),
      dataType: 'TEXT',
      type: 'POST',
      success: function(resp) {
        save_status = "<b>Saved!</b>";
        $.get('/dtool/get_saved_searches_ul', function(data) {
          $('ul.my-saved-searches').replaceWith(data);
        });
      },
      error: function(err) {
        save_status = "Error saving your search.";
      },
      complete: function() {
        $('.save-status').html(save_status).fadeOut(2000, function() {
          $('.save-status').remove();
          $('.save-search').show();
        });
      }
    });
  });

  /**
   * Load a saved search, or recent search
   * nhalabuda@musicdealers.com
   */
  $(document).on('click', '.my-saved-searches .saved-search a.search, .my-recent-searches a.search', function(e) {
    e.preventDefault();
    var q = $(this).attr('rel');
    // Added page number, p, so it returns to page 1 when clicking a new saved search - mrk
    // $.bbq.pushState({'q': q, 'p': 1, 'm': 'discovery-tool', 'v': 'tabs-results'}, 0);
    // $.bbq.pushState({m: 'discovery-tool', v: 'tabs-results', q: '' + search + '', p: '1'});
    // swap from BBQ so that we can set the full URL;
    //  - if we use bbq, it only appends the query to the hash and does not load the full URL we want
    window.location = '/#!/mddtool&m=discovery-tool&p=1&v=tabs-results&q=' + escape(q);
    if ($(this).closest('#saved-searches-modal').length) {
      $('#saved-searches-modal .modal-box, .modal-overlay').fadeOut('fast');
    }
  });

  /**
   * Delete a saved search
   * nhalabuda@musicdealers.com
   */
  $(document).on('click', '.my-saved-searches .saved-search a.delete', function(e) {
    e.preventDefault();
    if (typeof ul_update != 'undefined') {
      ul_update.abort();
    }//cancel any existing ajax request to update the saved searches UL
    $(this).closest('li.saved-search').slideUp('fast', 'linear', function(el) {
      $(this).remove();
    });
    $.ajax({
      url: sitePath + 'dtool/delete_saved_search', // URL to the local file
      type: 'POST', // POST or GET
      data: {"nid": $(this).attr('nid')}, // Data to pass along with your request
      success: function(data, status) {
      },
      error: function(err) {
        alert("Error!\n" + err);
      },
      complete: function(data) {
        ul_update = $.get('/dtool/get_saved_searches_ul', function(data) {
          $('ul.my-saved-searches').replaceWith(data);
        });
      },
    });
  });

  /**
   * Click Saved Searches
   */
  $(document).on('click', '.saved-searches', function(e) {
    e.preventDefault();
    $('#saved-searches-modal').md2_modal();
    $.get('/dtool/get_saved_searches_ul', function(data) {
      $('#saved-searches-modal .modal-content').html(data);
    });
  });

  /**
   * Sharing Playlists Modal
   */
  $(document).on('click', 'div.share a, .playlist-share-icon', function(e) {
    e.preventDefault();
    playlist_nid = $(this).attr('nid');
    playlist_vid = $(this).attr('vid');

    $('#md2-share-playlists').md2_modal();
    var url = "/dtool/playlist/collaborators/" + playlist_nid + "?id=" + playlist_nid + "";

    $(".collaborators").html("<center class='zero-load'><img src='/sites/all/modules/custom/md2/md2_player/images/loader_big.gif' /></center>");
    $("#share-playlist, .playlist-link").attr('nid', playlist_nid);
    $("#share-playlist, .playlist-link").attr('vid', playlist_vid);

    //http://localmusicdealers:8887/mddtool#id=1775158&m=playlists&p2=1&s2=Classic&v1=tabs-playlist&t=karl@webksd.com
    var shareLink = '' + window.location.protocol + '//' + window.location.host + '/#!/mddtool&id=' + playlist_nid + '&m=playlists&p2=1&v1=tabs-playlist';
    $("a.playlist-link").attr('link', shareLink);
    $("a.playlist-link").trigger('click'); // gotta trigger the click to load up the flash...

    /**
     * Get the playlists collaborators
     */
    if (typeof xhrShare != 'undefined') {
      xhrShare.abort();
    }
    xhrShare = $.ajax({
      url: url,
      type: 'GET',
      success: function(data) {
        $(".collaborators").html(data);
        delete xhrShare;
      }
    });
  });

  /**
   * Copy link to clipboard
   * double click to fix a bug, but only double
   */
  $("a.playlist-link").click(function(e) {
    cText = $("a.playlist-link").attr('link');
    $("a.playlist-link").zclip({
      path: '/sites/all/themes/md_pheonix/js/ZeroClipboard.swf',
      copy: function() {
        return cText;
      },
      afterCopy: function() {
        setReport('success', 'copied', 'The link has been copied to your clipboard.');
        setTimeout('$(".report-close").trigger("click");', 2000);
      }
    });
  });

  /**
   * Share Playlist Submit
   * Ajax
   * ...doesn't need .live
   */
  $('#share-playlist').click(function(e) {
    e.preventDefault();

    var playlist_nid = $(this).attr('nid');
    var playlist_vid = $(this).attr('vid');

    var emails = $('.give-access').val();
    var emailString = '';
    var emailSend = 0;
    var message = '';
    var copy = 0;

    // If There is a message
    if ($('.add-a-message').html() == 'Cancel message') {
      if ($('.share-message').val() != '') {
        message = $('.share-message').val();
      } else {
        $('.share-message').css('border-color', 'red');
        return false;
      }
    }

    // If copying myself
    if ($('.send-myself-copy').is(':checked')) {
      copy = 1;
    }

    // If empty...
    if ($('.give-access').val() == "") {
      $('.give-access').css('border-color', 'red');
      return false;
    }

    // If Sending Email
    if ($(".send-sharee-copy").is(':checked')) {
      emailSend = 1;
    }

    $("#share-playlist").html("Sending...");
    $("#cancel-share").css('opacity', '0.5');

    var url = "/dtool/playlist/collab_share/" + playlist_nid + "";
    if (typeof xhrShareIt != 'undefined') {
      xhrShareIt.abort();
    }
    xhrShareIt = $.ajax({
      url: url,
      type: 'GET',
      data: {
        'nid': playlist_nid,
        'vid': playlist_vid,
        'send': emailSend,
        'emails': emails,
        'message': message,
        'copy': copy
      },
      success: function(data) {
        returnData = JSON.parse(data);

        $("#share-playlist").html("Share");
        $("#cancel-share").css('opacity', '1');

        // If error
        if (returnData.status != 1) {
          $('.give-access').css('border-color', 'red');
          for (var key in returnData.statusMessage) {
            var error = returnData.statusMessage[key];
            if (strstr(error.toLowerCase(), 'email')) {
              semail = error.split(/[ ]+/).pop();
              setReport('error', 'Uh-Oh', error);
            }
          }
        }

        $('.give-access').css('border-color', '#ddd');
        $('.share-message').css('border-color', '#ddd');

        // Refresh the list
        var url = "/dtool/playlist/collaborators/" + playlist_nid + "?id=" + playlist_nid + "";
        $(".collaborators").html("<center class='zero-load'><img src='/sites/all/modules/custom/md2/md2_player/images/loader_big.gif' /></center>");
        /**
         * Get the playlists collaborators
         */
        if (typeof xhrShare != 'undefined') {
          xhrShare.abort();
        }
        xhrShare = $.ajax({
          url: url,
          type: 'GET',
          success: function(data) {
            $(".collaborators").html(data);
            $('.give-access').val('');
            county = $('.collaborators ul li').length - 1;
            $('li[nid="' + playlist_nid + '"] .you-and').html('You and <strong>' + county + '</strong> others');
            $('.you-and-2').html('You and <strong>' + county + '</strong> others');
            delete xhrShare;
          }
        });
        /**
         * Todo...
         * Eventually replace the block above with some fancy animations...
         */
        delete xhrShareIt;
      }
    });

  });

  /**
   * collaborator change permission
   */
  $(document).on('change', '.share-dd', function(e) {
    playlist_nid = $('#share-playlist').attr('nid');
    playlist_vid = $('#share-playlist').attr('vid');
    change_uid = $(this).attr('uid');
    new_permission = $(this).val();
    var url = "/dtool/playlist/collab_change/" + playlist_nid + "";
    $.ajax({
      url: url,
      type: 'GET',
      data: {
        nid: playlist_nid,
        vid: playlist_vid,
        uid: change_uid,
        perm: new_permission
      },
      success: function(data) {
      }
    });
  });

  /**
   * collab-delete
   */
  $(document).on('click', '.collab-delete', function(e) {
    e.preventDefault();
    delete_uid = $(this).attr('uid');
    playlist_nid = $(this).attr('nid');
    var url = "/dtool/playlist/collab_delete/" + playlist_nid + "";
    $.ajax({
      url: url,
      type: 'GET',
      data: {
        uid: delete_uid,
        nid: playlist_nid
      },
      success: function(data) {
      }
    });
    $(this).closest('li').fadeOut('slow').delay(300).remove(); // remove the row
  });

  $('.add-a-message').click(function(e) {
    e.preventDefault();
    // canel
    if ($('.share-message').is(':visible')) {
      $('.share-message').fadeOut('slow', function() {
        $('.collaborators').animate({height: '150px'}, 'slow');
        $('.add-a-message').html('Add a message');

      });
    }
    // show
    else {
      $('textarea.share-message').val('');
      $('.collaborators').animate({height: '90px'}, 'slow', function() {
        $('.share-message').fadeIn('slow');
        $('.add-a-message').html('Cancel message');
      });
    }
  });

  /**
   * Cue Sheet Modal
   */
  $(document).on('click', '.cue-modal', function(e) {
    e.preventDefault();
    $('#cue-modal').md2_modal();
  });

  /**
   * Download Cue Sheet
   * Ajax....
   * /get-cue/{data:[nid,nid,nid]}/{options:{"target":"default", "format":"minimum"}}
   */
  $("#download-cuesheet").click(function(e) {
    e.preventDefault();
    cueFormat = $('.cue-radio[name="cue-format"]:checked').val();
    playlistId = $.bbq.getState('id');
    cueUse = $('#cue-type').val();
    if ($('#cue-mtv').val() == 'yes') {
      cueTarget = 'mtv';
    }
    else if ($('input#viasat-user').val() == 'yes') {
      cueTarget = 'viasat'; //don't give viasat splits anymore
    } else {
      cueTarget = $('#cue-country').val();
      cueUse = $('#cue-type').val();
    }
    // Open new window
    window.open('/get-cue/{"data":[' + playlistId + ']}/{"options":{"target":"' + cueTarget + '", "format":"' + cueFormat + '", "use":"' + cueUse + '"}}');
  });

  /**
   *
   * FILTERS
   *
   * This "live" event handles Taxonomy Checkbox Levels
   * - filter checkboxes taxonmy dispay/visibility toggling
   *
   */
  $(document).on('click', ".parent-filter .filter-link", function(e) {
    e.preventDefault();

    var self = $(this);
    var myParent = self.parent(".filter-list li");
    var rel = self.attr("rel");
    var nextLevel = $("#" + self.attr("rel"));

    /**
     * Unselecting
     */
    if (myParent.hasClass("selected-filter")) {
      myParent.removeClass("selected-filter");
      self.removeClass("selected-filter-link");

      // IF CLICKING A SELECTED LEVEL THREE PARENT THEN CLOSE LEVEL FOUR
      if (self.hasClass('level-3')) {
        $('li.level-4').hide();
      } else {
        $("div.level-2:visible").fadeOut();

      }
      nextLevel.fadeOut();
    }
    /**
     * Selecting
     */
    else {
      /**
       * Remove all the selections
       */
      self.closest(".filter-list").children("li").removeClass("selected-filter");
      self.closest(".filter-list").children().children(".filter-link").removeClass("selected-filter-link");

      /**
       * Set the current selection
       */
      myParent.addClass("selected-filter");
      self.addClass("selected-filter-link");

      /**
       * HIDING FIELDS
       */
      // IF CLICKING A FIRST LEVEL LINK THEN HIDE THE SECOND LEVEL
      // AND THE THIRD LEVEL
      // AND UNSET THE SELECTED CLASSES IN LEVEL 2 AND 3
      if (self.hasClass('level-1')) {
        $('div.level-1').hide();
        $('div.level-2').hide();
        $('a.level-2').parent('li').removeClass('selected-filter');
        $('a.level-2').removeClass('selected-filter-link');
        $('a.level-3').parent('li').removeClass('selected-filter');
        $('a.level-3').removeClass('selected-filter-link');
      }

      // IF CLICKING A SECOND LEVEL THEN HIDE THE THIRD LEVEL
      // AND UNSET THE SELECTEC CLASSES IN LEVEL 3
      if (self.hasClass('level-2')) {
        $('div.level-2').hide();
        $('a.level-3').parent('li').removeClass('selected-filter');
        $('a.level-3').removeClass('selected-filter-link');
      }

      // IF CLICKING A LEVEL THREE PARENT THEN HIDE ALL LEVEL FOURS
      if (self.hasClass('level-3')) {
        $('li.level-4').hide();
      }

      // OPEN THE LEVEL DESIRED
      // LEVEL 4 ACCORIDIANS
      // LEVEL 3 IS THE ANCHORS CLASS THAT OPENS THE LEVEL ACCORDIANS
      if (self.hasClass('level-3')) {
        var thisFilter = self.attr('filter');
        $('li[parent=' + thisFilter + ']').fadeIn('fast');
        var newHeight = $(self).closest('ul').height();
        $(self).closest('.jspContainer').height(newHeight);
      } else {
        // IF CLICKING A LEVEL 2 PARENT THEN FADE OUT LEVEL 4 WHEN OPENED
        if (self.hasClass('level-2')) {
          $('li.level-4').hide();
        }
        // STANDARD LEVEL FADE IN
        nextLevel.fadeIn();
      }
    }
  });

  /**
   * Advanced texts on keyup
   */
  $("ul#adv-filter-list li input[type='text']").keyup(function(e) {
    checkBox = $(this).siblings('a.checkbox-custom');
    contents = $(this).val();
    if (contents.length != 0) {
      tagid = $(this).attr('id').replace("adv-search-", "");
      $("li#tag-" + tagid + " span").html(contents);

      if (!checkBox.hasClass('checked')) {
        checkBox.trigger('click');
      }

      /**
       * BPM is unique
       */
      if (tagid == 'bpmgt' || tagid == 'bpmlt') {
        if ($('#adv-search-bpmgt').val() == '') {
          $('#adv-search-bpmgt').val('');
        }
        if ($('#adv-search-bpmlt').val() == '') {
          $('#adv-search-bpmlt').val('');
        }
        contents = "BPM " + $('#adv-search-bpmgt').val() + "";

        if (!$('#adv-search-bpmlt').val().search('+'))
        {
          contents = contents + " TO " + $('#adv-search-bpmlt').val();
        }

        checkBox = $(e.target).parent('div').siblings('a.checkbox-custom');
        $("li#tag-bpm span").html(contents);
      }

      /*
       * and following by the duration -mx
       */
      if (tagid == 'durationgt' || tagid == 'durationlt') {
        if ($('#adv-search-durationgt').val() == '') {
          $('#adv-search-durationgt').val('');
        }
        if ($('#adv-search-durationlt').val() == '') {
          $('#adv-search-durationlt').val('');
        }
        contents = "Dur. " + $('#adv-search-durationgt').val() + "";

        if (!$('#adv-search-durationlt').val().search('+'))
        {
          contents = contents + " TO " + $('#adv-search-durationlt').val();
        }
        checkBox = $(e.target).parent('div').siblings('a.checkbox-custom');
        $("li#tag-duration span").html(contents);
      }
      if (!checkBox.hasClass('checked')) {
        checkBox.trigger('click');
      }
    } else {
      if (checkBox.hasClass('checked')) {
        checkBox.trigger('click');
      }
    }

  });

  /**
   * Advanced Selects & inputs on change
   */
  $(document).on('change', "ul#adv-filter-list li select", function(e) {
    contents = $(this).val();
    checkBox = $(this).siblings('a.checkbox-custom');

    if (contents.search("Select Option") != -1) {
      if (checkBox.hasClass('checked')) {
        checkBox.trigger('click');
      }
    } else {
      humancontents = $(this).children(" option[value='" + contents + "']").html();
      tagid = $(this).attr('id').replace("adv-search-", "");
      $("li#tag-" + tagid + " span").html(humancontents);

      if (!checkBox.hasClass('checked')) {
        checkBox.trigger('click');
      }
    }

  });

  /**
   * Advanced inputs Keypress / Onchange
   */
  $(document).on('keyup', "ul#adv-filter-list li input", function(e) {
    contents = $(this).val();
    checkBox = $(this).siblings('a.checkbox-custom');

    if (!checkBox.hasClass('checked')) {
      checkBox.trigger('click');
    }

    // node id
    if ($(this).is('#adv-search-nodeid')) {
      $("ul.keyword-input-wrapper li[filter='nodeid'] span").html(contents);
      if (contents == "") {
        $("ul.keyword-input-wrapper li[filter='nodeid'] a.keyword-close").trigger("click");
      }
    }

    // lyrics
    if ($(this).is('#adv-search-lyrics')) {
      $("ul.keyword-input-wrapper li[filter='lyrics'] span").html(contents);
      if (contents == "") {
        $("ul.keyword-input-wrapper li[filter='lyrics'] a.keyword-close").trigger("click");
      }
    }

    // description
    if ($(this).is('#adv-search-description')) {
      $("ul.keyword-input-wrapper li[filter='description'] span").html(contents);
      if (contents == "") {
        $("ul.keyword-input-wrapper li[filter='description'] a.keyword-close").trigger("click");
      }
    }

  });

  /**
   * MASTER CATALOG
   *
   */
  $(document).on('change', '#filter-master-catalog-select', function(e) {
    // var self = $(this);
    // var catalogId = self.val();
    // var catalogName = $("#filter-master-catalog-select option:selected").text();
    // if (catalogId != 0) {
    //   keywordtagHtml = "<li type='24' id='tag-" + catalogId + "' filter='" + catalogId + "' class='keyword-box catalog'><span>" + catalogName + "</span><a class='keyword-close'></a></li>";
    //   $("li.search").before(keywordtagHtml);
    // } else {
    //   $("li.keyword-box.catalog").fadeOut(300).delay(300).remove();
    // }

    // if ($('ul.keyword-input-wrapper li').length > 1) {
    //   $('.keyword-placeholder').hide();
    // }
  });

  /**
   *
   * FILTERS
   *
   * Ensure drill-down items get custom checkbox handlers
   * D-TOOL SEARCH CHECKBOX DELEGATION
   *
   */
  $(document).on('click', '.filter-list .checkbox-custom', function(e) {

    var self = $(this);
    var parentOfLabel = self.parent(".filter-list li");
    var siblingLink = self.siblings(".filter-link");
    //var clonedLink = $("#search-" + self.attr("rel"));
    var siblingLinkId = siblingLink.attr("id");
    var searchFilterId = 'search-' + siblingLinkId; // search-link-filter-1320
    var lastDash = siblingLinkId.lastIndexOf('-') + 1;
    //var filterId = siblingLinkId.substr(lastDash);
    var filterId = self.attr("filter");
    var filterName = siblingLink.html();
    var currentTab = $("#vert-tabs").tabs('option', 'selected');
    if (self.hasClass("checked")) {
      if (window.ga) {
        ga('send', 'event', 'Search Behavior', 'Checkbox Clicked', '');
      }
    }
    // This currentTab variable is very important it represents the parent tab of the checkboxes...
    // If the structure changes in the jquery ui.tabs then searching can break -kjs
    var tabOffset = 2; // this is to more easily handle the bug someone keeps cauing that breaks search -kjs
    var currentTab = self.closest('#vert-tabs .ui-tabs-panel').index() - tabOffset;

    var isAdvanced = false;
    if (currentTab == 8) {
      isAdvanced = true;
    }
    var keywordtagHtml = "";

    // UNCHECKING BOX !!
    if (self.hasClass("checked")) {

      //UNCHECKING ADV FILTERS
      if (isAdvanced) {
        self.siblings('select').children('option[val=""]').attr('selected', 'selected');
        self.siblings('input').val('');
      }
      self.removeClass("checked");
      parentOfLabel.removeClass("checked-filter");
      parentOfLabel.removeClass("checked-filter-exclusion");
      siblingLink.removeClass("checked-filter-link");
      self.children().attr("checked", false);

      $("#tag-" + self.attr("filter") + "").fadeOut(300).delay(300).remove();
    }
    // CHECKING BOX !!
    else {

      var siblingLinkId = siblingLink.attr("id");
      var searchFilterId = 'search-' + siblingLinkId; // search-link-filter-1320

      self.addClass("checked");
      if ($('button#exclusion').val() == 'on') {
        parentOfLabel.addClass("checked-filter-exclusion");
      } else {
        parentOfLabel.addClass("checked-filter");
      }

      siblingLink.addClass("checked-filter-link");

      self.children().change();        // ...what?
      self.children().attr("checked", true);  // ...what?
      // Soundslike
      if (currentTab == 0) {
        // IF No Soundslike Option Selected Yet, Then Get The Current Option In the dropdown
        if (filterName == 'Similar To') {
          filterId = $('#textbox-soundslike').val();
          filterName = 'Similar To ' + $('#textbox-soundslike option:selected').html();
          $('ul#sounds-like-list li a.filter-link').html('Similar To ' + filterName);
          $('ul#sounds-like-list li a.filter-link').attr('id', 'filter-soundslike-' + filterId);
          $('ul#sounds-like-list li a.checkbox-custom').attr('id', 'link-filter-soundslike-' + filterId);
          $('ul#sounds-like-list li a.checkbox-custom').attr('filter', filterId);
        }
      }

      /**
       * Add tag to keyword box
       * to set the type we need to get the closest
       * tab-panel for the keyword box
       */
      activeTabIs = self.closest('#vert-tabs .ui-tabs-panel').index()
      tagtype = self.closest('#vert-tabs .ui-tabs-panel').index() - tabOffset;  // important because of hidden tabs in the left sidebar/filters // because of the h2 and ul elements in the #vert-tabs wrapper

      // Add .advanced class to the tag if it is an advanced filter
      if (isAdvanced) {
        $('#tag-' + filterId).addClass("advanced");
        tagtype = 7;
        if ($('#adv-search-' + filterId + '').is('select')) {
          theVal = $('#adv-search-' + filterId + '').val();
          filterName = $('#adv-search-' + filterId + ' option[value="' + theVal + '"]').text();
        } else {
          filterName = $('#adv-search-' + filterId + '').val();
          /**
           * BPM is unique
           */

          if (filterId == 'bpm') {
            if ($('#adv-search-bpmgt').val() == '') {
              $('#adv-search-bpmgt').val('60');
            }
            if ($('#adv-search-bpmlt').val() == '') {
              $('#adv-search-bpmlt').val('120');
            }
            filterName = '';
            filterName = 'BPM ' + $('#adv-search-bpmgt').val() + '';
            filterName = filterName + ' TO ' + $('#adv-search-bpmlt').val() + '';
          }

          /**
           * So is duration? -mx
           */

          if (filterId == 'duration') {
            if ($('#adv-search-durationgt').val() == '') {
              $('#adv-search-durationgt').val('60');
            }
            if ($('#adv-search-durationlt').val() == '') {
              $('#adv-search-durationlt').val('120');
            }
            filterName = '';
            filterName = 'Dur. ' + $('#adv-search-durationgt').val() + '';
            filterName = filterName + ' TO ' + $('#adv-search-durationlt').val() + '';
          }

        }
      }

      if ($('button#exclusion').val() == 'on') {
        keywordtagHtml = "<li type='" + tagtype + "' id='tag-" + filterId + "' filter='" + filterId + "' class='keyword-box exclude' exclusion='true'><strong class='hint_not'>not&nbsp;&nbsp;</strong><span>" + filterName + "</span><a class='keyword-close'></a></li>";
      } else {
        keywordtagHtml = "<li type='" + tagtype + "' id='tag-" + filterId + "' filter='" + filterId + "' class='keyword-box'><span>" + filterName + "</span><a class='keyword-close'></a></li>";
      }

      $("li.search").before(keywordtagHtml);

      // Add .advanced class to the tag if it is an advanced filter
      if (isAdvanced) {
        $('#tag-' + filterId).addClass("advanced");
      }

    } // END CHECKING BOX

    /**
     * Hide the keyword box placeholder if there are tags
     */
    if ($('ul.keyword-input-wrapper li').length > 1) {
      $('.keyword-placeholder').hide();
    }

    e.preventDefault();
  });

  /**
   * moveKeywordBoxToDashboard
   */
  function moveKeywordBoxToDashboard() {
    if ($('#tabs #discovery-tool .keyword-box').html()) {
      keywordtxt = $('#tabs #discovery-tool .keyword-box #dtool-keywords').val();
      kewywordBox = $('#tabs #discovery-tool .keyword-box').html();
      $('#tabs #dashboard .keyword-box').html(kewywordBox);
      $('#tabs #dashboard .keyword-box #dtool-keywords').val(keywordtxt);
      $('#tabs #discovery-tool .keyword-box').html(''); // delete the other box
      if ($('#dtool-keywords').val() == "" && $('ul.keyword-input-wrapper li').length == 1) {
        $('.keyword-placeholder').fadeIn('slow');
      } else {
        $('.keyword-placeholder').fadeOut('fast');
      }
    }
  }

  /**
   * moveKeywordBoxToDtool
   */
  function moveKeywordBoxToDtool() {
    if ($('#tabs #dashboard .keyword-box').html()) {
      keywordtxt = $('#tabs #dashboard .keyword-box #dtool-keywords').val();
      kewywordBox = $('#tabs #dashboard .keyword-box').html();
      $('#tabs #discovery-tool .keyword-box').html(kewywordBox);
      $('#tabs #discovery-tool .keyword-box #dtool-keywords').val(keywordtxt);
      $('#tabs #dashboard .keyword-box').html(''); // delete the other box
      if (keywordtxt == "") {
        $('.keyword-placeholder').fadeIn('slow');
      }
    }
  }


  // trigger forceListPosition independently
  $(document).on('keyup focus', '#dtool-keywords', function(evt) {
    // skip non char/num keys, assume focus if no key
    if ((evt.keyCode < 122 && evt.keyCode > 65) || (evt.keyCode == 8) || (!evt.which)) {
      MD.dotg.positionDropdown(evt.target);
      MD.dotg.matchAutoComplete();
  }
                    });

  /**
   * Selecting an autocomplete term
   */
  $(document).on('click', '#the-dropdown-of-the-gods ul li a', function(e) {

    currentValue = $(this).html();
    if ($(this).closest('li').is("#search-for")) {
      currentValue = $(this).children('span#search-for-val').html();
    }

    currentType = $(this).attr('type');
    currentId = $(this).attr('id');
    currentKey = $(this).attr('key');
    if (window.ga) {
      ga('send', 'event', 'Search Behavior', 'Univeral Dropdown Clicked', currentType);
    }
    if (currentId == '') {
      currentValue = 'basdf';
    }

    $('.keyword-input-wrapper li input').val('');

    id_append = '';
    if (currentType == '2') {
      id_append = 'vocalinstr-';
    }
    if (currentType == '6') {
      id_append = 'vocaltype-';
    }

    if (currentType == 8) {
      if (currentValue.search('exclude:') == 0)
      {
        $('li.search').before('<li class="keyword-box exclude" key="' + currentKey + '" type="' + currentType + '" id="tag-' + currentId + '" filter="' + currentId + '" exclusion="true"><strong class="hint_not">not&nbsp;&nbsp;</strong><span>' + currentValue.substr(9) + '</span><a class="keyword-close"></a></li>');
      }
      else
      {
        $('li.search').before('<li class="keyword-box" key="' + currentKey + '" type="' + currentType + '" id="tag-' + currentId + '" filter="' + currentId + '"><span>' + currentValue + '</span><a class="keyword-close"></a></li>');
      }
    } else {

      if (currentType != 9 && $('a#link-filter-' + id_append + currentId + '').length)
      {
        if (currentValue.search('exclude:') == 0)
        {
          if ($('button#exclusion').val() != 'on')
          {
            $('button#exclusion').val('on');
            $('a#link-filter-' + id_append + currentId + '').trigger('click');
            $('button#exclusion').val('off');
          }
          else
          {
            $('a#link-filter-' + id_append + currentId + '').trigger('click');
          }
        }
        else
        {
          $('a#link-filter-' + id_append + currentId + '').trigger('click');
        }
      }
      else
      {
        if (currentValue.search('exclude:') == 0)
        {
          $('li.search').before('<li class="keyword-box exclude" key="' + currentKey + '" type="' + currentType + '" id="tag-' + currentId + '" filter="' + currentId + '" exclusion="true"><strong class="hint_not">not&nbsp;&nbsp;</strong><span>' + currentValue.substr(9) + '</span><a class="keyword-close"></a></li>');
        }
        else
        {
          $('li.search').before('<li class="keyword-box" key="' + currentKey + '" type="' + currentType + '" id="tag-' + currentId + '" filter="' + currentId + '"><span>' + currentValue + '</span><a class="keyword-close"></a></li>');
        }
      }
    }

    MD.dotg.empty();
  });



  /**
   * Keyword search keypress event
   */
  $(document).on('keyup', '#dtool-keywords', function(e) {

    MD.dotg.setTerm($('#dtool-keywords').val());

    // input not empty
    if (e.keyCode == 13 && $('#the-dropdown-of-the-gods:visible').length) {
      MD.dotg.matchAutoComplete(true);
    // return without an autocompleted value
    } else if (e.keyCode == 13) {
      // empty input, trigger the form
      $('.dtool-get').trigger('click');
    } else if (e.keyCode == 40) { // down
      MD.dotg.choose('down', e);
    } else if (e.keyCode == 38) { // up
      MD.dotg.choose('up', e);
    } else if (e.keyCode == 188) {
      MD.dotg.matchAutoComplete(true);
    }

    if (search_behavior_init) {
      search_behavior_type = 'keybox';
      search_behavior_init = false;
    }

  });

  $(document).on('keydown', '#dtool-keywords', function(e) {
    /**
     * If the user is backspacing delete tags
     */
    if (e.keyCode == 8 && $('#dtool-keywords').val() == '') {
      $('ul.keyword-input-wrapper li.keyword-box:last').children('a.keyword-close').trigger('click');
      }
  });

  // Keyword Box On Focus
  $(document).on('focus', '#dtool-keywords', function(e) {
    // var keywordTerm = $('#dtool-keywords').val();
    // showDropdownOfTheGods(keywordTerm);
    $('.keyword-placeholder').hide();
    MD.dotg.setTerm($('#dtool-keywords').val());
  });

  // Click Keyword Box Area -> Focus Input
  $(document).on('click', '.keyword-border', function() {
    $('#dtool-keywords').focus();
  });

  // Close the-dropdown-of-the-gods on blur of keyword input
  $(document).on('blur', '#dtool-keywords', function(e) {
    window.setTimeout(MD.dotg.hide, 500);
    if ($('#dtool-keywords').val() == "" && $('ul.keyword-input-wrapper li').length == 1) {
      $('.keyword-placeholder').fadeIn('slow');
    }
  });

  // Remove Filters From Keyword Box
  $(document).on('click', ".keyword-close", function(e) {

    var self = $(this).parent('li');
    var tagType = self.attr('type');

    var originalLink = '';
    var idAppend = '';
    /**
     * Similar To
     */
    if (tagType == '0') {
      /**
       * Add the similar to back to the multiselect
       */
      $("ul.multiselect option[value='" + self.attr('filter') + "']:selected").attr('selected', '');
      $("ul.selected li[id='" + self.attr('filter') + "'] a.action").trigger("click");
    }
    /**
     * Vocal/Instr
     */
    else if (tagType == '2') {
      idAppend = 'vocalinstr-';
    }
    /**
     * Vocal Type
     */
    else if (tagType == '6') {
      idAppend = 'vocaltype-';
    }
    // New Advanced (no checkboxes represent this )
    if (tagType != '9' && tagType != '8' && $('a#link-filter-' + idAppend + self.attr('filter') + '').length) {
      $('a#link-filter-' + idAppend + self.attr('filter') + '').trigger('click'); // HA! Works/Drills
      // DONE UNCHECKING
    }
    self.fadeOut(300).delay(300).remove(); // REMOVING THE TAG FROM THE KEYWORD BOX
    e.preventDefault();
  });

  /**
   * Loading scroll events
   * for song view
   */
  // $(window).bind('scroll', function(e) {
  //   if ($(".loading-window:visible").length) {
  //     $(".loading-window img:visible").css('position', 'absolute').css('top', '50px');
  //   }
  // });

  /**
   * Get Playlists for dashboard
   */
  function dtool3_ajax_playlists(page, sort, amount) {
    subContentLoading = 1;
    page = typeof page !== 'undefined' ? page : 1;
    sort = typeof sort !== 'undefined' ? sort : defaultPlaylistSort;
    amount = typeof amount !== 'undefined' ? amount : defaultAmount;

    var url = "/dtool/playlists?amount=" + amount + "&page=" + page + "&sort=" + sort + "";

    // Ajax the users playlists
    if (typeof xhrPls != 'undefined') {
      xhrPls.abort();
    }

    xhrPls = $.ajax({
      url: url,
      type: 'GET', // POST or GET
      beforeSend: function () {
        $("#tabs-playlist-dashboard .song-view-wrapper").remove();
        showLoading('#tabs-playlist-dashboard');
      },
      success: function(data, status) {
        $("#tabs-playlist-dashboard .loading-window").after(data);
      },
      complete: function () {
        hideLoading();
        delete xhrPls;
      }
    });
  }

  /**
   * Get Playlists for dashboard
   */
  function dtool3_ajax_themes_search(page, amount) {
    var start = new Date().getTime();
    subContentLoading = 1;
    page = typeof page !== 'undefined' ? page : 1;
    amount = typeof amount !== 'undefined' ? amount : 24;

    var url = "/dtool/filter_themes?a_themes=" + amount + "&p_themes=" + page + "";
    showLoading('#theme-results');

    $.ajax({
      url: url,
      type: 'GET',
      success: function(data, status) {
        duration = (new Date().getTime() - start);
        $("#theme-results .song-view-wrapper").remove();
        $("#theme-results .loading-window").after(data);
        hideLoading();
      }
    });
  }

  /**
   * The ajax playlist function
   * is used by the get playlists events
   * and the deep linking functionality that
   * loads a playlist song view html
   */
  function dtool3_ajax_playlist(page,playlist,sort,amount,token,gid){
    $(".play-all-playlist").hide();
    page = typeof page !== 'undefined' ? page : 1;
    playlist = typeof playlist !== 'undefined' ? playlist : "";
    sort = typeof sort !== 'undefined' ? sort : defaultSongSort;
    amount = typeof amount !== 'undefined' ? amount : defaultAmount;
    token = typeof token !== 'undefined' ? token : "";
    gid = typeof gid !== 'undefined' ? gid : "-1"
    showLoading('#tabs-playlist div.ajax-playlist');

    // Ajax single playlists Deats
    url = "/dtool/playlist_details/" + playlist + "?&id=" + playlist + "";
    if (typeof xhrPlData != 'undefined') {
      xhrPlData.abort();
    }
    xhrPlData = $.ajax({
      url: url,
      type: 'GET',
      success: function(data, status) {
        playlistDeats = JSON.parse(data);
        if ($.bbq.getState("id") == 'favorites') {
          $('.playlist-description-wrapper a.playlist-big-play').attr('nid', 'favorites');
          $('.playlist-description-wrapper h1').html('My Favorites');
          $('.playlist-description-wrapper span').hide();
          // show the play button.
          $('.playlist-description-wrapper span.playicon').show();
        }
        // Update Playlist Title & Description Html
        else {
          $('.playlist-description-wrapper span').show();
          $('.playlist-description-wrapper a.playlist-big-play').attr('nid', playlistDeats.nid);
          $('.playlist-description-wrapper h1').html(playlistDeats.title);
          $('.playlist-description-wrapper span.created-date').html(playlistDeats.created);
          $('.playlist-description-wrapper span.last-by-date').html(playlistDeats.modified);
          if (playlistDeats.groupinfo.length > 0) {
            $('.playlist-description-wrapper span.playlist-group').html('<span class="gray-italic playlist-group-title">playlist group:  </span>' + playlistDeats.groupinfo);
          }
          else {
            $('.playlist-description-wrapper span.playlist-group').html('');
          }
          $('.playlist-description-wrapper .playlist-description').html(playlistDeats.description);
        }
      }
    });

    var ammendH = '';
    // Ajax single playlist Right Column
    if ($.bbq.getState('t') != '') {
      ammendH = "&uid=" + t + "";
    } // assight t (token)
    url = "/dtool/playlist_right_menu/" + playlist + "?&id=" + playlist + ammendH + "";
    if (typeof xhrPlMenu != 'undefined') {
      xhrPlMenu.abort();
    }
    xhrPlMenu = $.ajax({
      url: url,
      type: 'Get',
      success: function(data, status) {
        $('#tabs-playlist .playlists-right-column').html(data);
      }
    });

    // Ajax single playlist Songs
    if(reorderingPlaylist == true){ amount = 1000; }
    url = "/dtool/playlist/"+playlist+"?amount=" + amount + "&page=" + page + "&sort=" + sort + "&id=" + playlist + "&gid=" + gid + "&token=" + token  ;

    if (typeof xhrPl == 'undefined') {
      xhrPl = $.ajax({
        url: url,
        type: "GET",
        beforeSend: function () {
          // remove song view wrapper
          $("#tabs-playlist .song-view-wrapper").remove();
          // show loading window
          showLoading('#tabs-playlist');
          // Start the timer for metrics tracking
          start = new Date().getTime();
        },
        success: function (data, status, xhr) {
          // End the timer for metrics tracking
          duration = (new Date().getTime() -  start)/1000;
          // Send mixpanel a tracking event
          if (window.ga) {
            ga('send', 'event', 'Performance', 'Playlist load time', '', duration);
          }
          // Parse JSON response
          data = $.parseJSON(data);
          // Current playlist, this is parsed after the
          currentPlaylist = $.parseJSON(data.data.json);
          // insert received data after loading window
          $("#tabs-playlist .loading-window").after(data.data.html);
          $(".play-all-playlist").fadeIn();

          if ($.bbq.getState('s2') == "Curated" || $.bbq.getState('s2') == "!Curated") {
            //console.log('reordering playlists b');
            if (reorderingPlaylist == true) {
              /**
               * The Good way -kjs
               * This is better than above because it actually creates panels that cover the faded/inactive elements
               */
              $("#reorder-wrapper").remove();
              $("#playlists").append("<div id='reorder-wrapper'> <div id='reorder-alpha'></div> <div id='reorder-beta'></div> <a id='reorder-done' class='austin-button btn-blue btn-sm' href='javascript:void'>Done</a> </div>");
              $("#reorder-wrapper").fadeIn();
              $("#reorder-alpha").height($(".playlist-description-wrapper").height() + 89 + 68 + $("#admin-menu").height());
              $("#reorder-beta").width($(".playlists-right-column").width());
              $("#reorder-done").css('top', $(".playlist-description-wrapper").height() + 89 + 218 + $("#admin-menu").height());

              /**
               *
               *  Make sortable
               *
               */
              $('#tabs-playlist .song-view').sortable({
                stop: function(event, ui) {
                  var songorder = [];
                  $('.song-view:visible > li').each(function() {
                    songorder.push($(this).attr('nid'));
                  });
                  if ($.bbq.getState('s2') == "Curated") {
                    songorder = songorder.reverse();
                  }
                  songorder = JSON.stringify(songorder);

                  if (typeof xhrPlMenu != 'undefined') {
                    xhrPlMenu.abort();
                  }
                  $.ajax({
                    url: "/dtool/playlist_sort/" + playlist + "",
                    data: {playlist: playlist, songorder: songorder},
                    type: "GET",
                    success: function(data) {
                    }
                  });
                }
              });

              $('.ajax-playlist .checkbox-column.view-column input').hide();
              $('.ajax-playlist .checkbox-column.view-column div.draggableicon').show();

              $('.ajax-playlist .song-view.ui-sortable li').mouseenter(function() {
                $(this).children('div.checkbox-column').children('div.draggableicon').addClass("hover");
              });

              $('.ajax-playlist .song-view.ui-sortable li').mouseleave(function() {
                $(this).children('div.checkbox-column').children('div.draggableicon').removeClass("hover");
              });

              reorderingPlaylist = false;
            }
          }

          delete xhrPl;
        },
        complete: function () {
          // just in case, always do this
          // remove loading window
          hideLoading();
        }
      });
    }
  }

  /**
   * The ajax search function is
   * used by the get songs event, and
   * the deep linking functionality that
   * loads a search song view html.
   *
   * $that =
   * $page =
   * $search = "{  }" // string of json
   *
   */
  function dtool3_ajax_search(page, search, sort, amount, gid, callback) {
    page = typeof page !== 'undefined' ? page : 1;
    search = typeof search !== 'undefined' ? search : "";
    sort = typeof sort !== 'undefined' ? sort : defaultSongSort;
    amount = typeof amount !== 'undefined' ? amount : defaultAmount;
    if (search == "") {
      search = dtool3_search(); // Search Function
    }
    gid = typeof gid !== 'undefined' ? gid : -1;
    var url = "/dtool/search?amount=" + amount + "&page=" + page + "&sort=" + sort + "&gid=" + gid;

    // Ajax Search
    if (typeof xhrSearch == 'undefined' || xhrSearch.readyState == 4) {
      var start = null;
      var duration = null;

      // Rewrite the ajax request using non-deprecated code to fix an issue
      // with the loading window speaker gif displaying over songview
      // during long loads -ckh 5/2/2014
      xhrSearch = $.ajax({
        url: url,
        type: "POST",
        data: { filters: search },
        beforeSend: function () {
          // remove song view wrapper
          $("#tabs-results .song-view-wrapper").remove();
          // show loading window
          showLoading('#tabs-results');
          // Start the timer for metrics tracking
          start = new Date().getTime();
          // trigger loading
          window.loadingBar = true;
          runLoadingBar();
        },
        success: function (data, status, xhr) {
          // End the timer for metrics tracking
          duration = (new Date().getTime() -  start)/1000;
          if (window.ga) {
            ga('send', 'event', 'Performance', 'Search Time', '', duration);
          }
          // Parse JSON response
          try {
            data = $.parseJSON(data);
          } catch (e) {
            console.error('bad response', data);
            data = null;
            // show some error state
          }
          if (data) {
            // insert received data after loading window
            $("#tabs-results .loading-window").after(data.data.html);
            // Current playlist, this is parsed after the
            currentPlaylist = $.parseJSON(data.data.json);
            if (window.terminalTrace)
              terminalTrace(duration,'search completed',data.data.metrics);
          }
          // delete xhrSearch;
        },
        complete: function () {
          // just in case, always do this
          // remove loading window
          hideLoading();
          window.loadingBar = false;
        },
        error: function(e) {
          console.error('error', e);
        }
      });
    }
  }

  /**
   * Our JS UI search function
   * create the filter arrays, and objects and
   * return json string using JSON.stringify
   */
  // Search Function
  function dtool3_search() {
    var filters = [];
    var vocalTypes = [];
    var vocalInstr = [];
    var similarto = [];
    var artist = [];
    var album = [];
    var song = [];
    var tempo = []; // tax
    var keyword = [];
    var city = [];
    var state = [];
    var country = [];
    var catalog = [];
    var advFiltersObj = {};
    var nickname = [];
    var gmcg = [];
    var attribute = [];
    var masterCatalog = [];
    var exactMatch = [];

    // define the adv filters
    var advFilters = {
      'nodeid': '',
      'key': '',
      'lyrics': '',
      'durationgt': '',
      'durationlt': '',
      'description': '',
      'era': '',
      'rhythmicfeel': '',
      'explicit': '',
      'timesig': '',
      'secondgenre': '',
      'tempo': '',
      'bpmgt': '',
      'bpmlt': '',
      'language': ''
    };

    // Master Catalog
    tmpMasterCatalogObj = {
      'human': $("#filter-master-catalog-select option:selected").text(),
      'filter': $('#filter-master-catalog-select').val()
    };
    masterCatalog.push(tmpMasterCatalogObj);

    // MusicDealers Exclusive
    if ($('#md-is-exclusively-licensed').is(':checked')) {
      tmpIsExclusivelyLicensed = {
        'human': 'MusicDealers Exclusive',
        'filter': 'is_exclusively_licensed'
      }
      attribute.push(tmpIsExclusivelyLicensed);
    }

    // Exact Match
    if (!$('#md-exact-match').is(':checked')) {
      tmpExactMatch = {
        'human': "Best Match",
        'filter': 0
      }
    } else {
      tmpExactMatch = {
        'human': "Exact Match",
        'filter': 1
      }
    }
    exactMatch.push(tmpExactMatch);

    $('.keyword-input-wrapper li.keyword-box').each(function() {
      var type = $(this).attr('type');
      var filter = $(this).attr('filter');
      var exclusion = $(this).attr('exclusion');
      var name = $(this).children('span').html();
      /**
       * Sounds Like / Similar to
       */
      if (type == '0') {
        if (!isEmptyStr(filter)) {
          tmpObj = {'human': '' + name + '', 'filter': filter};
          similarto.push(tmpObj);
        }
      }
      /**
       * Vocal/Instr
       */
      else if (type == '2') {
        if (!isEmptyStr(filter)) {
          if (exclusion == 'true') {
            tmpObj = {'human': '' + name + '', 'exfilter': filter};
            vocalInstr.push(tmpObj);
          } else {
            tmpObj = {'human': '' + name + '', 'filter': filter};
            vocalInstr.push(tmpObj);
          }
        }
      }
      /**
       * Taxonomy (Genre,Mood,Instruments,Vocal Theme)
       */
      else if (type == '1' || type == '3' || type == '4' || type == '5') {
        if (!isEmptyStr(filter)) {
          if (exclusion == 'true') {
            tmpObj = {'human': '' + name + '', 'exfilter': filter};
            filters.push(tmpObj);
          } else {
            tmpObj = {'human': '' + name + '', 'filter': filter};
            filters.push(tmpObj);
          }
        }
      }
      /**
       * Vocal Types
       */
      else if (type == '6') {
        if (!isEmptyStr(filter)) {
          if (exclusion == 'true') {
            tmpObj = {'human': '' + name + '', 'exfilter': filter};
            vocalTypes.push(tmpObj);
          } else {
            tmpObj = {'human': '' + name + '', 'filter': filter};
            vocalTypes.push(tmpObj);
          }
        }
      }
      /**
       * Advanced
       */
      else if (type == '7') {
        for (var filtera in advFilters) {
          if ($('#adv-search-' + filtera).length) {
            var filterVal = $('#adv-search-' + filtera).val();
            var checkBox = $('#adv-search-' + filtera).siblings('.checkbox-custom');
            if (checkBox.hasClass('checked')) {
              if (filterVal != '' && filterVal != 'undefined') {
                advFiltersObj['' + filtera + ''] = filterVal;
              }
            }
          }
          /**
           * BPM is unique
           */
          if (filtera == 'bpmgt') {
            var checkBox = $('#adv-search-bpmgt').parent('div').parent('div').siblings('a.checkbox-custom');
            if (checkBox.hasClass('checked')) {
              if ($('#adv-search-bpmgt').val() == '') {
                $('#adv-search-bpmgt').val('1');
              }
              advFiltersObj['bpmgt'] = $("#adv-search-bpmgt").val();
            }
          }
          if (filtera == 'bpmlt') {
            var checkBox = $('#adv-search-bpmlt').parent('div').parent('div').siblings('a.checkbox-custom');
            if (checkBox.hasClass('checked')) {
              if ($('#adv-search-bpmlt').val() == '') {
                $('#adv-search-bpmlt').val('1200');
              }
              advFiltersObj['bpmlt'] = $("#adv-search-bpmlt").val();
            }
          }
          /*
           * So is duration? mx
           */

          if (filtera == 'durationgt') {
            var checkBox = $('#adv-search-durationgt').parent('div').parent('div').siblings('a.checkbox-custom');
            if (checkBox.hasClass('checked')) {
              if ($('#adv-search-durationgt').val() == '') {
                $('#adv-search-durationgt').val('1');
              }
              advFiltersObj['durationgt'] = $("#adv-search-durationgt").val();
            }
          }
          if (filtera == 'durationlt') {
            var checkBox = $('#adv-search-durationlt').parent('div').parent('div').siblings('a.checkbox-custom');
            if (checkBox.hasClass('checked')) {
              if ($('#adv-search-durationlt').val() == '') {
                $('#adv-search-durationlt').val('1200');
              }
              advFiltersObj['durationlt'] = $("#adv-search-durationlt").val();
            }
          }
        }
      }
      else if (type == '8') {

        // Get Key
        var key = $(this).attr('key').toLowerCase();
        if (exclusion == 'true')
        {
          tmpObj = {'human': '' + name + '', 'exfilter': filter};
        }
        else
        {
          tmpObj = {'human': '' + name + '', 'filter': filter};
        }
        // Artists
        if (key == 'artist') {
          artist.push(tmpObj);
        }
        // Songs
        else if (key == 'song') {
          song.push(tmpObj);
        }
        // Albums
        else if (key == 'album') {
          album.push(tmpObj);
        }
        // Tempos
        else if (key == 'tempo') {
          tempo.push(tmpObj);
        }
        // Keywords
        else if (key == 'keyword') {
          keyword.push(tmpObj);
        }
        // Cities
        else if (key == 'city') {
          city.push(tmpObj);
        }
        // States
        else if (key == 'state') {
          state.push(tmpObj);
        }
        // Countries
        else if (key == 'country') {
          country.push(tmpObj);
        }
        // Catalogs
        else if (key == 'catalog') {
          catalog.push(tmpObj);
        }
        // Attributes
        else if (key == 'attribute') {
          attribute.push(tmpObj);
        }
      }
      else if (type == '9') {
        tmpObj = {'human': '' + name + '', 'filter': filter};
        nickname.push(tmpObj);
      }
      else if (type == '10'){
        tmpObj = { 'human'  : ''+name+'', 'filter' : filter };
        gmcg.push(tmpObj);
      }


    });

    search = {
      "filters": filters,
      "vocalTypes": vocalTypes,
      "similarto": similarto,
      "vocalInstr": vocalInstr,
      "artist": artist,
      "album": album,
      "song": song,
      "tempo": tempo,
      "keyword": keyword,
      "city": city,
      "state": state,
      "country": country,
      "catalog": catalog,
      "advfilters": advFiltersObj,
      "nickname" : nickname,
      "gmcg" : gmcg,
      "attribute" : attribute,
      "masterCatalog" : masterCatalog,
      "exactMatch" : exactMatch,
    };

    var searchString = JSON.stringify(search);
   // track_search_behavior();
    return searchString;
  } // end dtool_3 search


  /**
   * The siteTour plugin
   * Dtool Tour implimentation...
   */
  var siteTourData = [
    {
      title: 'DASHBOARD',
      text: 'Your new dashboard lets you get started right away - search for new music or pick up where you left off with your playlists and saved/recent searches.',
      selector: '#dashboard .second_warp',
      scrollTopOffset: -250,
      textBoxTopOffset: 200,
      visibleToAnon: false
    },
    {
      title: 'A PLACE FOR EVERYTHING...',
      text: 'We\'ve moved things around so you can easily jump between your Discovery Tool, Dashboard, and Playlists.',
      selector: '#tabs .ui-tabs-nav',
      scrollTopOffset: -250,
      extraLeft: 350,
      textPosition: 'top',
      visibleToAnon: false
    },
    {
      title: 'ENHANCED SEARCH',
      text: 'Enter keywords or use advanced search features to pinpoint the artist, genre, vocal style, or instrumental sound that best fits your project.',
      selector: '.keyword-border',
      scrollTopOffset: -250,
      visibleToAnon: true
    },
    {
      title: 'PLAYLISTS',
      text: 'We\'ll keep your shared and saved playlists right here so you can find them again anytime.',
      selector: '.playlists-left-column',
      scrollTopOffset: -250,
      visibleToAnon: false,
      beforeShow: function() {
        $('.playlists-left-column').css('height', '400px');
        $('.playlists-left-column').css('overflow', 'hidden');
      },
      afterHide: function() {
        $('.playlists-left-column').css('height', 'auto');
        $('.playlists-left-column').css('overflow', 'visible');
      }
    },
    {
      title: 'FAVORITES',
      text: 'You\'ll always be able to find your Favorites right at the top of your Playlists page. When you find a track you like, click the heart icon to add it to your Favorites.',
      selector: '#tabs-playlist-dashboard ul.playlist-view li:first',
      scrollTopOffset: -250,
      visibleToAnon: false
    },
    {
      title: 'SHARING PLAYLISTS',
      text: 'Share your playlists with others to collaborate on a project. They\'ll be able to listen to the tracks you share and even download them, if you choose.',
      selector: '#tabs-playlist-dashboard ul.playlist-view li:eq(1) .playlist-share-column',
      scrollTopOffset: -250,
      visibleToAnon: false
    },
    {
      title: 'DISCOVERY TOOL',
      text: 'This supercharged new tool lets you click to explore-by genre, vocal theme, mood, and more-or take the controls to search for specifics by keyword. You can even sort and compare songs to find the perfect fit, then save your search and come back to it anytime.',
      selector: '#discovery-tool',
      scrollTopOffset: -250,
      visibleToAnon: true,
      beforeShow: function() {
        $('#discovery-tool').css('height', '450px');
        $('#discovery-tool').css('overflow', 'hidden');
      },
      afterHide: function() {
        $('#discovery-tool').css('height', 'auto');
        $('#discovery-tool').css('overflow', 'visible');
      }
    },
    {
      title: 'FILTERS',
      text: 'We kept the in-depth filters you love so you can still search for music by genre, vocal theme, instrument, and more.',
      selector: 'div#vert-tabs ul.search-menu',
      scrollTopOffset: -250,
      visibleToAnon: true
    },
    {
      title: 'SORTING',
      text: 'Now it\'s super simple to prioritize your search results-sort by popularity, song title, duration, and more.',
      selector: '#tabs-results .sorter',
      scrollTopOffset: -250,
      visibleToAnon: true
    },
    {
      title: 'SONG DETAILS',
      text: 'Take a quick look at any song\'s details to compare tracks, see alternate versions, and learn more about the artist.',
      selector: '#tabs-results ul.song-view li:first',
      scrollTopOffset: -250,
      visibleToAnon: true,
      beforeShow: function() {
        $("#tabs-results ul.song-view li:first a.more").trigger('click');
      },
      afterShow: function() {
        $("#tabs-results ul.song-view li:first *").off("click");
      },
      afterHide: function() {
        $("#tabs-results ul.song-view li:first *").on("click");
      }
    },
    {
      title: 'Universal Player',
      text: 'No matter where you are on the site, your playlist travels with you so you can listen to the tracks you\'ve already found while searching for more you want to hear.',
      selector: '#md-frame',
      forceBorder: false,
      forceBackground: false,
      visibleToAnon: true
    }
  ];

  // If the current user is anonymous, remove the parts of
  // the tour that are specific to logged in users
  if (anonFlag === 1) {
    for (var i = siteTourData.length - 1; i >= 0; i--) {
      if (siteTourData[i].visibleToAnon === false) {
        siteTourData.splice(i, 1);
      }
    }
  }

  var siteTourOptions = {
    auto: true,
    data: siteTourData,
    theme: 'light',
    closeButtonText: 'Close Tour',
    openButtonText: 'Dtool Tour',
    getStartedText: 'Get Started'
  }

  $.siteTour(siteTourOptions);

  $("#take-the-tour").click(function(e) {
    $.siteTour("start");
    $('#md2-tour').fadeOut(300);
    $(".modal-overlay").fadeOut(300);
  });

  /**
   * Delete Playlist Click Handler and Ajax Function (from within playlists list)
   * nhalabuda@musicdealers.com
   */
  $(document).on('click', 'ul .playlist-edit-icon, #tabs-playlist .edit a', function(e) {
    e.preventDefault();

    var nid = $(this).attr('nid');
    var loc = 'listpage';

    if ($(this).parent().hasClass('edit')) {
      loc = 'editpage';
    }

    var formGetContent = function(nid) {
      $.ajax({
        url: "/dtool/edit_playlist/" + nid,
        type: 'GET',
        success: function(resp) {
          $('#md2-edit-playlist-modal .form').html(resp);
          formSubmit();
        },
        error: function(err) {
          alert("Error!\n" + err);
        },
      });
    }

    var formSubmit = function() {
      $('#md2-edit-playlist-modal form').submit(function() {
        formLoader('<h2>Saving...</h2>');
        $('#md2-edit-playlist-modal .form').hide();

        var url = $(this).attr('action');
        var data = $(this).serialize();
        $.ajax({
          url: url,
          data: data,
          type: 'POST',
          success: function(resp) {
            $('#md2-edit-playlist-modal .status').html('');
            $('#md2-edit-playlist-modal .form').show();

            if ($(resp).find('.required.error').length > 0) {
              setReport('error', 'Form save', 'Please check the error');
              $('#md2-edit-playlist-modal .form').html(resp);
              formSubmit();
            }
            else {
              $('#md2-edit-playlist-modal .form').html('<h2>Saved</h2>');
              modalClose();

              if (loc == 'editpage') {
                window.location.reload();
              }
              else {
                dtool3_ajax_playlists();
              }

            }
          },
          error: function(err) {
            alert("Error!\n" + err);
          },
        });

        return false;
      });

      var modalClose = function() {
        $('#md2-edit-playlist-modal, .modal-overlay').delay(1000).fadeOut();
      }
    }

    var modalLoader = function(content) {
      if (content == undefined)
        content = '';
      $('#md2-edit-playlist-modal .form').html("<center style='margin:65px 0px;'>" + content + "<img src='/sites/all/modules/custom/md2/md2_player/images/loader_big.gif'/></center>");
    }

    var formLoader = function(content) {
      if (content == undefined)
        content = '';
      $('#md2-edit-playlist-modal .status').html("<center style='margin:65px 0px;'>" + content + "<img src='/sites/all/modules/custom/md2/md2_player/images/loader_big.gif'/></center>");
    }

    modalLoader();
    $('#md2-edit-playlist-modal').md2_modal();
    formGetContent(nid);

  });

  /**
   * Delete Playlist Click Handler and Ajax Function (from within playlists list)
   * nhalabuda@musicdealers.com
   */
  $(document).on('click', 'ul .playlist-delete-icon', function(e) {
    e.preventDefault();
    var row = $(this).closest('li');
    var nid = $(this).attr('nid');
    row.slideUp('fast', 'swing', function() {
      row.remove();
    });

    start = new Date().getTime();
    //preterminalTrace('deleting playlist...');
    $.ajax({
      url: "/dtool/delete_playlist",
      data: {"nid": nid},
      type: 'POST',
      success: function(resp) {
        duration = (new Date().getTime() - start);
        //terminalTrace(duration,'playlist '+nid+' deleted');
        $('.ajax-playlists span.count').html($.parseJSON(resp).playlist_count);
      },
      error: function(err) {
        console.error("Error!\n" + err);
      },
    });
  });

  /**
   * Delete Playlist Click Handler and Ajax Function (from within playlist)
   * nhalabuda@musicdealers.com
   */
  $(document).on('click', '.playlists-right-column .delete a', function(e) {
    e.preventDefault();
    var del_link = $(this);
    var del_orig = del_link.html();
    var nid = $(this).attr('nid');
    del_link.html('Deleting...');
    $.ajax({
      url: "/dtool/delete_playlist",
      data: {"nid": nid},
      type: 'POST',
      success: function(resp) {
        del_link.html('Deleted.').fadeOut('slow', function() {
          //remove the delete link
          del_link.remove();
          //reload the playlists via ajax
          dtool3_ajax_playlists();
          //open the playlists tab
          $('.all-playlists').trigger('click');
        });
      },
      error: function(err) {
        alert("Error!\n" + err);
      },
    });
  });


  /*
   * Add a New Playlist (playlists tab)
   */
  $(document).on('click', '.playlists-left-column .new-playlist, .playlists-right-column .new-playlist, .slate .new_playlist', function(e) {
    e.preventDefault();
    md2_create_playlist_modal($('.playlist-view li:eq(1)'));
    });

  /*
   * Add a New Playlist (dashboard tab)
   */
  $(document).on('click', '#my_playlists .new_playlist', function(e) {
    e.preventDefault();
    md2_create_playlist_modal($('#my_playlists tr:first'));
    });


  /*
   * Generic function for creating playlist via modal
   */
  function md2_create_playlist_modal(list_obj) {
    var id = '#md2-create-playlist-modal';
    var obj = $(id);
    var modalClose = function() {
      $(id + ', .modal-overlay').delay(1000).fadeOut();
    }
    var formLoader = function(content) {
      if (content == undefined)
        content = '';
      obj.find('.status').html("<center style='margin:65px 0px;'>" + content + "<img src='/sites/all/modules/custom/md2/md2_player/images/loader_big.gif'/></center>");
    }

    obj.md2_modal();
    obj.find('.form').show();
    obj.find('.status').html('');
    obj.find('input[name=playlist-name]').val('').focus();

    //click handler for our forms cancel button
    obj.find('.new-playlist .cancel').click(function(e) {
      e.preventDefault();
      modalClose();
    });

    //click handler for our forms save button
    obj.find('.new-playlist .save').unbind();
    obj.find('.new-playlist .save').bind('click', function(e) {
      formLoader('<h2>Saving...</h2>');
      obj.find('.form').hide();

      e.preventDefault();
      var playlist_name = $(this).closest('form').find('input[name=playlist-name]').val();

      //return false immediately if playlist name is not set
      if (!playlist_name) {
        return false;
      }

      $.ajax({
        url: sitePath + 'md2/playlists/create', // URL to the local file
        type: 'POST', // POST or GET
        data: {"name": playlist_name}, // Data to pass along with your request
        success: function(data, status) {
          json_data = $.parseJSON(data);
          var html = '<tr><td class="second_column"><a href="javascript:void(0);" nid="' + json_data.nid + '" class="playlist-goto">' + json_data.title_ucwords + '</a> <p class="playlist_song_sum">0 songs</p></td><td class="third_column">Today</td></tr>';
          list_obj.before(html);

          modalClose();
        },
        error: function(err) {
          console.error("Error!\n" + err);
        },
        complete: function() {
          dtool3_ajax_playlists();
        },
      });
    });
  }

  /*
   * Add a New Playlist (add to playlists)
   */
  $('#md2-add-to-playlist').delegate('.new-playlist', 'click', function(e) {
    e.preventDefault();

    //if the new playlist form already exists return false and prevent duplicates
    if ($('#new-playlist-form form').length > 0) {
      $('#new-playlist-form form').slideDown('fast', 'swing', function(e) {
        $(this).find('input[name=playlist-name]').focus();
      });
      return false;
    }

    //prepend our new<li> and <form> to the <ul> and set the focus
    $('<form><input type="text" name="playlist-name"><button class="save">Save</button><button class="cancel">Cancel</button></form>').appendTo('#new-playlist-form').hide().slideDown('fast', 'swing', function(e) {
      $(this).find('input[name=playlist-name]').focus();
    });

    //click handler for our forms cancel button
    $('#new-playlist-form .cancel').click(function(e) {
      e.preventDefault();
      $(this).closest('#new-playlist-form form').slideUp('fast', 'swing', function(e) {
        $(this).remove();
      });
    });
    //click handler for our forms save button
    $('#new-playlist-form .save').click(function(e) {
      e.preventDefault();
      var playlist_name = $(this).closest('form').find('input[name=playlist-name]').val();
      //return false immediately if playlist name is not set
      if (!playlist_name) {
        return false;
      }
      row = $(this).closest('#new-playlist-form form');
      row.addClass('saving').html('<div class="status">Saving...</div>');
      $.ajax({
        url: sitePath + 'md2/playlists/create', // URL to the local file
        type: 'POST', // POST or GET
        data: {"name": playlist_name}, // Data to pass along with your request
        success: function(data, status) {
        },
        error: function(err) {
          console.error("Error!\n" + err);
        },
        complete: function() {
          //reload the playlists via ajax
          $.ajax({
            url: sitePath + 'md2/usersplaylists/checks/0', // URL to the local file
            type: 'GET',
            data: {},
            success: function(data, status) {
              row.remove();

              $('#md2-add-to-playlist .playlists').html(data);

              $('#md2-add-to-playlist a.can-not-curate').addClass('gray');
              $('#md2-add-to-playlist a.can-not-curate').siblings('input.playlist-checkbox').css('visibility', 'hidden');
              $('#md2-add-to-playlist a.can-not-curate').each(function() {
                $(this).replaceWith("<span class=\"" + $(this).attr("class") + "\">" + $(this).text() + "</span>");
              });

              $('#md2-add-to-playlist a').removeClass('playlist-goto');
            }
          });

        },
      });
    });
  });

  /**
   * Duplicate a Playlist (playlist view)
   * nhalabuda@musicdealers.com
   */
  $(document).on('click', '.playlist-view .playlist-copy-icon', function(e) {
    e.preventDefault();
    $(this).closest('.playlist-copy-column').addClass('cloning').end().remove();
    $.ajax({
      url: sitePath + 'md2/playlists/clone', // URL to the local file
      type: 'POST', // POST or GET
      data: {"nid": $(this).attr('nid')}, // Data to pass along with your request
      success: function(data, status) {
        ;
        dtool3_ajax_playlists();
      },
      error: function(err) {
        alert("Error!\n" + err);
      },
      complete: function() {
      },
    });
  });


  $(document).on('click', 'button.exclusion_button', function(e) {
    $('button#exclusion').trigger('click');
  });

  $(document).on('click', 'button#exclusion', function(e) {
    e.preventDefault();
    if ($(this).val() == 'off')
    {
      $(this).val('on')
      $('button.exclusion_button').removeClass('btn-grey');
      $('button.exclusion_button').addClass('btn-red');
      $('button.exclusion_button').html('Exclude from Search: ON');
    }
    else if ($(this).val() == 'on')
    {
      $(this).val('off')
      $('button.exclusion_button').removeClass('btn-red');
      $('button.exclusion_button').addClass('btn-grey');
      $('button.exclusion_button').html('Exclude from Search: OFF');
    }

  });

  function exclusion_button_off() {
    if ($('button#exclusion').val() == "on") {
      $('button#exclusion').trigger('click');
    }
  }

  /**
   * click / mouseout handler for the brands GMS dropdown menu
   * nhalabuda@musicdealers.com
   */
  $(document).on('click', '#gms-button', function() {
    $('#gms-dropdown').slideToggle('fast').one('mouseleave', function() {
      $(this).slideUp('fast');
    });
  });

  /**
   * click handler for brand search buttons in the GMS dropdown and widget
   * nhalabuda@musicdealers.com
   */
  $(document).on('click', '#gms-dropdown .brand-button, #gms-widget .brand-button', function() {
    window.location.href = $(this).attr('href');
  });

  $(document).on('change', '#group-filters-select', function() {
    $.bbq.pushState({"gid": $(this).val()});
  });


  $(document).on('click', 'a.anon-sign-in', function(e) {
    e.preventDefault();
    $('#md2-login').delay(300).md2_modal();
    $('#edit-name').focus();
  });



  $(document).on("click", 'a.dtool-adv', function() {
    if (search_behavior_init) {
      search_behavior_type = 'advance';
      search_behavior_init = false;
    }
  });
/*
  function track_search_behavior() {
    return;
    switch (search_behavior_type) {
      case 'keybox':
          mixpanel.mdtech.track("search_behavior", {
          "type": "keyword-box",
          "staff": drupal_user_staff,
          "id": drupal_user_id
        });
        break;
      case 'filters':
          mixpanel.mdtech.track("search_behavior", {
          "type": "filters",
          "staff": drupal_user_staff,
          "id": drupal_user_id
        });
        break;
      case 'advance':
          mixpanel.mdtech.track("search_behavior", {
          "type": "advance",
          "staff": drupal_user_staff,
          "id": drupal_user_id
        });
        break;
      default:
          mixpanel.mdtech.track("search_behavior", {
          "type": "other",
          "staff": drupal_user_staff,
          "id": drupal_user_id
        });
        break;
    }
    search_behavior_type = 'init';
    search_behavior_init = true;
  }
*/
  // << Click Events
  // Click Add Version
  $(document).on("click", ".add-version", function(e) {
    e.preventDefault();

    $('#md2-add-version').md2_modal();
    $(".artist-parents-wo-children").html('<Br><center><img src="/sites/all/modules/custom/md2/md2_player/images/loader_big.gif" alt="Loading"></center><Br>');
    tmpParentNidHolder = $(e.target).attr('data-nid');
    tmpArtistNidHolder = $(e.target).attr('data-artist-nid');
    tmpArtistUrlHolder = $(e.target).attr('data-artist-url');
    $.ajax({
      url: '/artist/' + tmpArtistNidHolder + '/version-modal/' + tmpParentNidHolder,
      type: 'GET',
      success: function(data) {
        $(".artist-parents-wo-children").html(data);
      }
    });
  })
    // Click upload a new version
    .on("click", "a#alt-version-upload:visible", function(e) {
      e.preventDefault();
      $('.modal-close:visible').trigger('click');  // mimic the close click
      window.history.pushState('', '', '/#!/artist/' + tmpArtistUrlHolder + '/upload-song/alternate/' + tmpParentNidHolder + '');
      $(window).trigger('hashchange');       // force the async redirect
    })
    // Click un-merge
    .on("click", ".un-merge", function(e) {
      e.preventDefault();
      tmpChildNidHolder = $(e.target).attr('data-nid');
      tmpArtistUrlHolder = $(e.target).attr('data-artist-nid');
      $.ajax({
        url: '/artist/' + tmpArtistUrlHolder + '/un-assign-alternate/' + tmpChildNidHolder + '',
        type: 'POST',
        success: function(data) {

          setReport('success', 'Alternate Version Removed', '<b>Success, alternate version<br>removed from parent track.</b><br><i>Your updates will be live on the site<br>in the next few minutes.</i>');
          // -- force a refresh of the already loaded page asynchronously
          window.lastFirst = '';
          window.lastq = '';
          $(window).trigger('hashchange');

        }
      });
    })
    // Click assign existing track as alt version
    .on("click", "button#alt-version-add:visible", function(e) {
      e.preventDefault();
      tmpChildNidHolder = $(".alt-version-radio:checked").val();
      $(".artist-parents-wo-children").html('<Br><center><img src="/sites/all/modules/custom/md2/md2_player/images/loader_big.gif" alt="Loading"></center><Br>');
      $.ajax({
        url: '/artist/' + tmpArtistUrlHolder + '/assign-alternate/' + tmpParentNidHolder + '/' + tmpChildNidHolder + '',
        type: 'POST',
        success: function(data) {

          setReport('success', 'Alternate Version Added', '<b>Success, your alternate version<br>has been added.</b><br><i>Your updates will be live on the site<br>in the next few minutes.</i>');
          $('.modal-close:visible').trigger('click');  // mimic the close click
          // -- force a refresh of the already loaded page asynchronously
          window.lastFirst = '';
          $(window).trigger('hashchange');

        }
      });
    })
    // -- Click Filter
    .on("click", "#filter-themes", function(e) {
      e.preventDefault();
      themeKeywords = $("#keywords-themes").val();
      if (typeOf(themeKeywords) == 'undefined') {
        themeKeywords = '';
        return false;
      }
      $("#nickname-filter-reset").show();
      // -- Loading
      $("#filter-themes").val('Loading');
      $.ajax({
        url: '/dtool/filter_themes/' + themeKeywords + '',
        type: 'POST',
        success: function(data) {
          // -- data is html to be injected into #theme-results
          $.bbq.pushState({p_themes: '1'});
          $("#theme-results").html(data);
          $("#filter-themes").val('Filter Themes');
        },
        fail: function() {
          alert("failed to get data.");
        }
      });

    })
    // -- Click A Theme Image
    .on("click", ".show-nicknames", function(e) {
      e.preventDefault();
      nicCatId = $(this).attr('data-id');
      row = $(this).attr('data-row');
      nicknameTitle = $.trim($(this).find("div.nickname-title").html());
      if (window.ga) {
        ga('send', 'event', 'Search Behavior', 'Tesla Image Clicked', nicknameTitle);
      }
      $(".nickname-bubbles-row").each(function( index ) {
        row_num = $(this).attr('data-row');
        // console.log(index + ": " + row_num);
        $(".nickname-bubbles-row[data-row='" + row_num + "']").slideUp({
          duration: 'slow'
        });
      });

      $.ajax({
        url: '/dtool/get_themes_nicknames/' + nicCatId + '',
        type: 'POST',
        success: function(jsondata) {
          data = JSON.parse(jsondata);
          // -- data is html to be injected into #theme-results
          if (data.num_bubbles == 1) {
            $.bbq.pushState(data.theme_link, 2);
          } else {
            // Add to queue, so html is changed after slideUp finishes
            // http://api.jquery.com/queue/#entry-longdesc-1
            $(".nickname-bubbles-row[data-row='" + row + "']").queue(function() {
              $(".nickname-bubbles-row[data-row='" + row + "']").html(data.html);
              $(this).dequeue();
            }).slideDown();
          }
        },
        error: function(data, textStatus, errorThrown) {
          // console.log("show-nicknames: an error occurred. " + errorThrown);
        }
      });
    })
    // -- Click A Nickname Itself and cause search to happen...
    .on("click", ".nickname-bubbles-row ul.keyword-input-wrapper li.keyword-box a", function(e) {
      // Get the text string so we can send it to mixpanel
      bubbles_string = "";
      $(this).find("span").each(function ( index ) {
        if (bubbles_string != "") {
          bubbles_string += ", "
        }
        bubbles_string += $(this).text().replace("Admin Edit", "").trim();
      });
      // Account for admin mode.
      if (bubbles_string == "") {
        $(this).parent().parent().find("span").each(function ( index ) {
          if (bubbles_string != "") {
            bubbles_string += ", "
          }
          bubbles_string += $(this).text().replace("Admin Edit", "").trim();
        });
      }
      if (window.ga) {
        ga('send', 'event', 'Search Behavior', 'Tesla Bubble Clicked', bubbles_string);
      }

    })
    // -- Click Clear Filters
    .on("click", "#nickname-filter-reset", function(e) {
      e.preventDefault();
      $("#keywords-themes").val("");
      $.bbq.pushState({p_themes: '1'});
      $("#filter-themes").trigger('click');
      $("#nickname-filter-reset").hide();
    });

  $(document).on('change', '#filter-master-catalog-select', function() { $('.dtool-get').click() });
  $(document).on('change', '#md-is-exclusively-licensed', function() { $('.dtool-get').click() });
});
;
/**
 *
 *
 * Docready
 *
 *
 */
var load_once =         0;
var firstArtistHashchange =   0;

// this only partially works on a non-hashbang URL
// if (window.location.hash = '') {

// }

$(document).ready(function(){

  $.param.fragment.ajaxCrawlable( true );

  /**
   *
   * Events
   *
   */

  /**
   * Reordering Playlists
   */
  //.playlists-right-column .reorder a
  $(".artists-right-menu li.reorder a").live('click',function(e){
    e.preventDefault();

    if ($(".artists-right-menu li.reorder a").hasClass('disabled')) {
      setReport(
        'error',
        'Refresh before trying to reorder again.',
        '<i>Your changes will be on the site<br>in the next few minutes.</i>  Please refresh, and then try to reorder again.'
      );
      hideReport();
      exit();
    }

    //console.log('ARTIST FIRST: '+first);
    if (strstr(first, 'artist') || window.location.pathname.substr(1,6) == 'artist') {
      $.bbq.pushState({s3: "Curated", p3: 1});
      reorderingArtist = true;
      $(window).trigger('hashchange'); // force the change
    }
  });

  /**
   * Done Reordering Artist
   */
  $(".artist-reorder-done:visible").live('click', function(e) {
    e.preventDefault();

    $(".artists-right-menu li.reorder a").fadeTo("fast", .5).addClass('disabled');

    // save the song order now.
    var songorder = [];
    i = 1;
    $('.song-view:visible > li').each(function(){
      songorder.push($(this).attr('nid'));
      i++;
    });

    songorder = JSON.stringify(songorder);

    $.ajax({
      url: "/ajax/artist_sort/"+aid+"",
      data: { artist: aid, songorder: songorder },
      type: "GET",
      success: function(data){
        // console.log(data);
      }
    });

    $("#artist-reorder-wrapper").fadeOut();
    $("#artist-reorder-wrapper").delay('300').remove();
    $(".artist-reorder-done").remove();
    $(".reorder-overlay").remove();

    setReport('success', 'Songs Reordered Successfully', '<b>Your new order saved successfully.</b><br><i>Your changes will be on the site<br>in the next few minutes.</i>');
    hideReport();

    if (strstr(first, 'artist') || window.location.pathname.substr(1,6) == 'artist') {
      $.bbq.pushState({s3: "Curated", p3: 1});
      reorderingArtist = false;
      $(".artist-wrapper:visible").closest('.full').addClass('bg_white');
      $("*").removeClass('recessed');
      $(window).trigger('hashchange'); // force the change
    }
  });

  $(window).bind('hashchange', function(e) {

    $(".play-all-artist").hide();
    $(".artists-right-menu li.reorder a").hide();

    // Set default hash variables...
    // all of these vars manage the "state" of the artist page
    p3 = typeof $.bbq.getState( "p3" ) !== 'undefined' ? $.bbq.getState( "p3" ) : '1';            // artist page
    s3 = typeof $.bbq.getState( "s3" ) !== 'undefined' ? $.bbq.getState( "s3" ) : 'Curated';        // artist sort
    a3 = typeof $.bbq.getState( "a3" ) !== 'undefined' ? $.bbq.getState( "a3" ) : '25';           // artist amount
    aid = typeof $.bbq.getState( "aid" ) !== 'undefined' ? $.bbq.getState( "aid" ) : '';          // artist id
    first = '';
    stateObject = $.bbq.getState();         // get entire state
    if (!aid || !$.isEmptyObject(stateObject)) {
      for (first in stateObject) break;       // get first
      first = first.toString().toLowerCase();     // make sure its a string
      firstArray = first.split("/");          // break up the request uri (pathname)
      aid = firstArray[2];              // the artist name or id
    }
    // catch if we fell through without an artist identifier
    // if (!aid) {
      // default to second param
      // aid = window.location.pathname.split('/')[2];
      // first = 'artist';
    // }

    // Only execute this on the artist page
    // with or without the shebang (#!) for fallback
    if (strstr(first.toLowerCase(), 'artist')) {

      /**
       * Authentication
       * this may not be necessary here ??? -kjs
       */
      $.ajax({
        url: '/dtool/authenticate',
        type: 'GET',
        success: function(data){
          if (data == 'true' || data == 'client'){
            clientFlag = 1;
            anonFlag = 0;
          }
          else if (data == 'admin'){
            clientFlag = 1;
            adminFlag = 1;
            anonFlag = 0;
          }
          else {
            adminFlag = 0;
            clientFlag = 0;
            anonFlag = 1;
          }
        }
      });

      // get the nid from the artist url
      $.ajax({
        type: 'GET',
        url: '/ajax/getartistnid',
        data: { artist : aid },
        success: function(data){
          aid = data;
          if ($("#md-frame").attr('src') == '') {
            $("#md-frame").attr("src","mdplayer?media="+aid+"&favorites=0&dtool=0&sort="+s3+"&page="+p3+"&amount="+a3+"&gid="+gid);
            $("#md-frame").show();
            playerLoadFlag = 1;
          }
          ajax_artist(p3,aid,s3,a3,gid);
        }
      });
    } // if first == artistiheh
  });

  /**
   * Right column click events
   */
  $(".artists-right-column ul li a.false").live('click',function(e){
    e.preventDefault();
    // set state
    $(".artists-right-column ul li a").removeClass('active');
    $(this).addClass('active');
    var jump = $(this).attr('id');
    var new_position = $(this).closest('.pheonix-page').children('div').children('div').children('div').children('div.playlists-left-column').children('#'+jump+'').offset();
    window.scrollTo(new_position.left,new_position.top - 85);
  });

  /**
   * Right column scroll events
   * not in ie8, don't bind any scroll events in IE8 they are heavy
   */
  if ($.browser.version.substr(0,1) != 1 && $.browser.msie && $.browser.version.substr(0,1) < 8){
    // Don't Bind
  } else {

    $(window).bind('scroll', function(e) {

    // the artist right menu and the scroll menu
    if ( $(".artist-wrapper:visible .artists-right-menu").length ){

      colOffset     = $(".artist-wrapper:visible .artists-right-column").offset();
      footerOffset  = $("#footer").offset();
      footerHeight  = $("#footer").height() + 156 + 20; // 20 for admin menu, or the datepicker bug space after body... 156 for padding...
      menuOffset    = $(".artist-wrapper:visible .artists-right-menu").offset();
      menuHeight    = $(".artist-wrapper:visible .artists-right-menu").height();
      menuTop     = menuOffset.top;
      menuBottom    = menuTop + menuHeight;
      bottomBoundary  = footerOffset.top - 100;
      topBoundary   = colOffset.top - 25;
      menuFixedBottom = bottomBoundary - menuHeight;

      // -- Top Lock
      if ($(window).scrollTop() <= (topBoundary)){
        $(".artists-right-column").css('position','relative');
        $(".artist-wrapper:visible .artists-right-menu").css('position','absolute').css('top', '0px');
        $(".artist-wrapper:visible .artist-scroll").hide();
        // top list item active
        $(".artists-right-menu li a").removeClass('active');
        $(".artists-right-menu li a:first").addClass('active');
      }
      // -- Bottom Lock
      else if ($(window).scrollTop() >= (menuFixedBottom - 120)) {
        $(".artist-wrapper:visible .artists-right-menu").css('position', 'absolute').css('top', (parseInt(menuFixedBottom - topBoundary - 25))+'px');
      }

      // -- Middle
      //else if ($(window).scrollTop() > (colOffset.top - 25)) {
      else if ($(window).scrollTop() > topBoundary) {
        // -- Fixed right menu
        $(".artists-right-column").css('position','relative');
        $(".artist-wrapper:visible .artists-right-menu").css('position', 'fixed').css('top', '120px');

        //console.log('First'+ first);
        if (!strstr(first,'create-artist-profile')) {
          $(".artist-wrapper:visible .artist-scroll").fadeIn('fast');
        }

        var xst = setTimeout(function(){
          centerImagesVertically();
          delete xst;
        }, 500);

          // << Begin Js for Artist Profile Sticky right column active states
          // Link Active or inactive
          if ($("#tracks:visible").length){
            tracksOffset = $("#tracks").offset();
            if ($(this).scrollTop() > (tracksOffset.top - 100)){
              $(".artists-right-menu li a").removeClass('active');
              $(".artists-right-menu li a[id='tracks']").addClass('active');
            }
            else if ($("#buzz").length){
              buzzOffset = $("#buzz").offset();
              if ($(this).scrollTop() > (buzzOffset.top - 100)) {
                $(".artists-right-menu li a").removeClass('active');
                $(".artists-right-menu li a[id='buzz']").addClass('active');
              }
            }
            else if ($("#buzz-point").length) {
              buzzOffset = $("#buzz-point").offset();
              if ($(this).scrollTop() > (buzzOffset.top - 100)) {
                $(".artists-right-menu li a").removeClass('active');
                $(".artists-right-menu li a[id='buzz-point']").addClass('active');
              }
            }
          }

          // << Begin Js for Song Upload Sticky right column active states
          // much better than the code above, yes a plugin could have been used, but isn't fun to try things yourself sometimes -kjs!
          $("ul.artists-right-menu li a.rl-dyn-link:visible").each(function(){
            var ela = $(this);
            var dataRefa = ela.attr('data-ref');
            var scrollTopa = $(window).scrollTop();
            var sectionTopOffset = $('form#md2-song-upload-form h4').eq(dataRefa).offset();
            var sectionTopa = sectionTopOffset.top - 100;
            //console.log(scrollTopa + '>' + sectionTopa);
            if (scrollTopa > sectionTopa){
              $("ul.artists-right-menu li a.rl-dyn-link.active:visible").removeClass('active');
              ela.addClass('active');
            }
          });

        }
		}
	  });
	}

	/**
	 * Ajax artist
	 */
	function ajax_artist(page,artist,sort,amount,gid){
		page = typeof page !== 'undefined' ? page : 1;
		artist = typeof artist !== 'undefined' ? artist : "";
		sort = typeof sort !== 'undefined' ? sort : defaultSongSort;
		amount = typeof amount !== 'undefined' ? amount : defaultAmount;
    if (!artist) return;
		showLoading('#tracks-songs');
		// Ajax artist Songs
		if(reorderingArtist == true){ amount = 1000;}
		url = "/artist-songs/"+artist+"?amount=" + amount + "&page=" + page + "&sort=" + sort + "&id=" + artist + "&gid=" + gid + "";
		// If the request is already going don't fire it again...
		if(typeof xhrAr == 'undefined'){

      xhrAr = $.ajax({
        url: url,
        type: "GET",
        beforeSend: function () {
          // remove song view wrapper
          $("#tracks-songs .song-view-wrapper").remove();
          // show loading window
          showLoading('#tracks-songs');
          // Start the timer for metrics tracking
          start = new Date().getTime();
        },
        success: function (data, status, xhr) {
          // End the timer for metrics tracking
          duration = (new Date().getTime() -  start)/1000;
          if (window.ga) {
            ga('send', 'event', 'Performance', 'Artist Results Loaded', '', duration);
          }
          // Parse JSON response
          data = $.parseJSON(data);

          // insert received data after loading window
          $("#tracks-songs .loading-window").after(data.data.html);

          $(".play-all-artist").delay('300').fadeIn();
          $(".artists-right-menu li.reorder a").delay('300').fadeIn();
          // Current playlist, this is parsed after the
          currentPlaylist = $.parseJSON(data.data.json);

          if($.bbq.getState('s3') == "Curated" || $.bbq.getState('s3') == "!Curated"){
            if(reorderingArtist == true){
              reorderT = setTimeout(function(){
                /**
                 * This is a very round-about way of achieving this overlay effect, however it is necessary, as this song view
                 * is between a rock and a hard place. The rock being the iframe for buzz points whose load time varies along with its
                 * height, the hard place being a jQuery bug on draggable items with any parent element explicitely positioned: relative,
                 * in Firefox when scrolled down on a page so the solution
                 * was to recess all other elements. -kjs
                 */
                $(".header-bottom-row:visible").prepend("<a class='artist-reorder-done austin-button btn-blue btn-sm' href='javascript:void'>Done</a>");
                $(".playlists-left-column:visible").prepend("<div class='reorder-overlay'></div>");
                $(".artist-wrapper:visible").closest('.full').removeClass('bg_white');
                $("#bio:visible").addClass('recessed');
                $("#buzz:visible").addClass('recessed');
                $("#bio:visible").addClass('recessed');
                $(".h2tracks:visible").addClass('recessed');
                $(".artists-right-column").addClass('recessed');
                delete reorderT;
              },500);

              /** Make sortable */
              $('.artist-section .song-view').sortable({
                stop: function(event, ui) {
                  // var songorder = [];
                  // $('.song-view:visible > li').each(function(){
                  //   songorder.push($(this).attr('nid'));
                  // });

                  // songorder = JSON.stringify(songorder);

                  // $.ajax({
                  //   url: "/ajax/artist_sort/"+artist+"",
                  //   data: { artist: artist, songorder: songorder },
                  //   type: "GET",
                  //   success: function(data){
                  //     //console.log(data);
                  //   }
                  // });
                }
              });

              $('.artist-wrapper .checkbox-column.view-column input').hide();
              $('.artist-wrapper .checkbox-column.view-column div.draggableicon').show();

              $('.artist-wrapper .song-view.ui-sortable li').mouseenter(function(){
                $(this).children('div.checkbox-column').children('div.draggableicon').addClass("hover");
              });

              $('.artist-wrapper .song-view.ui-sortable li').mouseleave(function(){
                $(this).children('div.checkbox-column').children('div.draggableicon').removeClass("hover");
              });

              reorderingArtist = false;
            }
          }

          delete xhrAr;
        },
        complete: function () {
          // just in case, always do this
          // remove loading window
          hideLoading();
        }
      });
		}
	}
});
;
/**
 * Resize The Main Real Estate
 */
itHappenedFlag = 0;
function resizeContent(){
  // just don't do it.
  return;
	// double check, no need to fire in ie 6,7,8
	//if($.browser.msie && $.browser.version.substr(0,1) < 9){
		//alert('CON1 Browser is '+$.browser.version+' | Hopefully is IE8');
	//} else {
		minHeight = 480; 				// the min height the mainwrapper can be
		//playerHeight = 60;				// accounts for the offset necessary for the iframe
		playerHeight = 0;				// accounts for the offset necessary for the iframe
		
		if(typeof(playerHomeHide) != 'undefined'){
			if(playerHomeHide == 0){
				playerHeight = 60;	
			}
		}
		
		windowWidth = $(window).width();// Window WIdth
		newHeight = $(window).height(); // default
		
		$("#main-real-estate img").width(windowWidth); // The Image is always the width of the window
		//console.log('Initial window height: '+newHeight);
		
		// Determine the crop offset, newHeight becomes the height of the visible image
		// If there is an image
		if($("#main-real-estate img").length){
			imPos = $("#main-real-estate img").position();			// Get the position
			imHeight = $("#main-real-estate img").height();			// Get the current height
			newHeight = imPos.top + imHeight;						// newHeight is the image height - the crop offset
			//console.log('Original Img Top Offset: '+imPos.top);
		}
		
		// If the visible image height is less than min height
		// then we freeze the image width 
		if(newHeight < minHeight){ 
			
			//if($("#main-real-estate img").height < minHeight){
			//$("#main-real-estate img").height(newHeight);
			//$("#main-real-estate img").css('width','auto');
			//}
			
			//Freeze the img
			if(itHappenedFlag == 0){
				freezeHeight = newHeight;
				freezeWidth = $(window).width(); // get window width now
				//console.log('It Happened.' + freezeWidth + ' x ' + freezeHeight );
				itHappenedFlag = 1;
			}
			//freezeWidth = parseInt(freezeWidth + 10);
			
			// freezeWidth is remembered from when it happend
			$("#main-real-estate img").width(freezeWidth);
			newHeight = minHeight;
			
		} 
		// Unfreeze the image
		else {
			itHappenedFlag = 0; // Unfreeze
			//$("#main-real-estate img").css('top',newImageHeightTop+'px');
			//$("#main-real-estate img").css('width','100%');
			//$("#main-real-estate img").css('height',' ');
			
		}
		
		// For the player
		if(newHeight > ($(window).height() - playerHeight)){
			newHeight = $(window).height() - playerHeight;
		}
		
		// For the admin menu
		if($("#admin-menu").length){
			newHeight = newHeight - 20;
		}
		
		// Set the new height
		//if()
		//console.log("New Height: " + newHeight);
		$("#main-real-estate").height(newHeight +1);
		//$("#main-real-estate .shadow-overlay").height(newNumber + fuzzyHeight);
		
	//}
}

$(document).ready(function() {
	
	
	
	
	/**
	 * Home Page Carousel
	 */
	$("#home-page-carousel").jCarouselLite({
		btnNext: ".rightarrow",
		btnPrev: ".leftarrow",
		speed: 1000,
		visible: 2,
		scroll: 1
	});
	
	// Hover Placement Carousel
	$("#home-page-carousel ul li").live({
        mouseenter:
            function()
            {
        		//if($(this).children('div').children('div').children('div.work-placement-overlay:visible').length){
        		//	$(this).children('div').children('div').children('div.work-placement-overlay').hide();
        		//	$(this).children('div').children('div').children('div.work-placement-overlay-trans').hide();
        		//}
    			$(this).children('div').children('div').children('div.work-placement-overlay-brand').fadeOut(200);
        		$(this).children('div').children('div').children('div.work-placement-overlay').delay(200).fadeIn(200);
        		$(this).children('div').children('div').children('div.work-placement-overlay-trans').delay(200).fadeIn(200);
            },
         mouseleave:
            function()
            {
        	 	$(this).children('div').children('div').children('div.work-placement-overlay-brand').delay(600).fadeIn(600);
	     		$(this).children('div').children('div').children('div.work-placement-overlay').fadeOut(600);
	    		$(this).children('div').children('div').children('div.work-placement-overlay-trans').fadeOut(600);
            }
    });
	
	// Home Placement Click Play...
	$("#home-page-carousel ul li div.work-placement-overlay").live('click',function(e){
		$('#md2-placement').md2_modal();
		currentPlacement = $(this).closest('li').attr('nid');
		updatePlacementModal();
	});
	
	/**
	 * Resize doesn't happen in IE8 
	 * too heavy...
	 */
	//if($.browser.msie && $.browser.version.substr(0,1) < 9){
		//alert('CON1 Browser is '+$.browser.version+' | Hopefully is IE8');
	//} else {
		// Only resize in something other than IE 6,7 8...
		//alert('CON2 Browser is '+$.browser.version+'');
		
	
		// resizeContent(); // resize the content on doc ready
		
		// resize the content on window resize
		// $(window).resize(function(){
		// 	if(first == '/' || first == '' ){
				// resizeContent();
		// 	}
		// });
		
		// Resize the content when the img loads
		// $("#main-real-estate img:visible").livequery(function(){
		// 	$(this).load(function(){
		// 		resizeContent();
		// 	});
		// });
		
		$(window).bind( 'hashchange', function(e) {
			/**
			 * Get the whole state and nothing but the state so help me...
			 * Fade out any pheonix pages then load the requested page via ajax or html cache
			 * This condition does not happen on the first load as first will = 0
			 * lastFirst is the value of first dureing the last/previous hashchange event
			 */
			stateObject = $.bbq.getState();
			for (first in stateObject) break;
			first = first.toString().toLowerCase();
			// if(first == '/' || first == '' ){
				// resize the content when the page is loaded since the winow may have been resized
				// in the mean time
				// resizeContent();
			// }
			
			
			
		});
	//}
});

;
/**
 * The work page is pretty much its own little js app
 * 
 */


/**
 * Default Vars...
 */
var category = '0';
var currentPlacement = '';
var lastPlacement = '';
var lastCat = '0'; // is set as the default cat to prevent duplicate ajax requests on initial ajax load...
var firstWorkHashchange = 0;

/**
 * Ajax the Single placement for modal viewing
 */
function updatePlacementModal(){
	//if(currentPlacement != lastPlacement){
		console.log("Current Placement: "+currentPlacement);

		$(".placement-modal-video").css('opacity','0');
		$(".placement-modal-details").css('opacity','0');
		
		$.ajax({
			url: 'ajax/placement/'+currentPlacement+'',
			data: {
				nid: currentPlacement
			},
			success: function(data){
				// Put the data in its place
				placementData = JSON.parse(data);
				console.log(placementData);
				console.log(placementData[0].title);
				
				$("div.placement-modal-video").html(placementData[0].field_placement_video_file_value);
				$("div.placement-modal-title").html(placementData[0].title);
				$(".placement-modal-deats span[x='field_placement_client_value']").html(placementData[0].field_placement_client_value);
				$(".placement-modal-deats span[x='field_placement_artist_nid_nid']").html(placementData[0].artist_name);
				$(".placement-modal-deats span[x='field_placement_agency_value']").html(placementData[0].field_placement_agency_value);
				$(".placement-modal-deats span[x='field_placement_category_value']").html(placementData[0].category_name);
				$(".placement-modal-deats span[x='field_placement_song_nid_nid']").html(placementData[0].field_placement_song_nid_nid);
				$(".placement-modal-deats span[x='field_placement_supervisor_value']").html(placementData[0].field_placement_supervisor_value);
				
				
				$(".placement-modal-details").fadeTo(1000, 1).delay(2500).fadeTo(1000, 1);
				$(".placement-modal-video").delay(1500).fadeTo(1000, 1);
		
				var myPlayer = document.getElementById('playerid');
				myPlayer.startPlayer();
				
				/*
				$(".placement-modal-deats .placement-modal-deat").each(function(){
					thisField = $(this).children('span').attr('x');
					console.log("THIS FIELD: "+thisField);
					console.log("THIS FIELD: "+placementData[0].thisField);
					$(this).children('span').html(placementData[0].thisField);
				});*/
			}
		});
		lastPlacement = currentPlacement;
	//}
}

/**
 * Doc Ready for Work Page
 */
$(document).ready(function() {
	
	/**
	 * Window Scroll For Universal Scroll...
	 * Todo...
	 * Phase II...
	 * -kjs
	 *
	$(window).scroll(function(){
		if($('.work-list-bottom:visible').length){
			if(isScrolledIntoView('.work-list-bottom')){
				
				console.log('ajax more placements');
				
				$.ajax({
					url: '',
					data: {
						category: category,
						action: 'ajax-placements'
					},
					success: function(data){
						console.log(data);
					}
				});
				
			}
		}
	});
	*/
	
	// Work Nav
	/*
	$('.work-nav-wrapper ul li a').live('click',function(e) {
		e.preventDefault();
		console.log('clicked the our work nav');
		// Push to state
		$.bbq.pushState({ cat: $(this).attr('cat') });
		
	});
	*/
	
	// Hover Placements
	$("ul.work-placements li").live({
        mouseenter:
            function()
            {
        		//if($(this).children('div.work-placement-overlay:visible').length){
        		//	$(this).children('div.work-placement-overlay').hide();
        		//	$(this).children('div.work-placement-overlay-trans').hide();
        		//}
        		$(this).children('div.work-placement-overlay-brand').fadeOut(100);
        		$(this).children('div.work-placement-overlay').fadeIn(100);
        		$(this).children('div.work-placement-overlay-trans').fadeIn(100);
            },
         mouseleave:
            function()
            {
	     		$(this).children('div.work-placement-overlay-brand').delay(400).fadeIn(300);
	     		$(this).children('div.work-placement-overlay').fadeOut(400);
	    		$(this).children('div.work-placement-overlay-trans').fadeOut(400);
            }
    });
	
	// Click Play
	$("ul.work-placements li div.work-placement-overlay").live('click',function(e){
		$('#md2-placement').md2_modal();
		currentPlacement = $(this).closest('li').attr('nid');
		updatePlacementModal();
	});
	
	// Close Modal
	$(".modal-overlay").live('click',function(){
		$('.placement-modal-video iframe').attr('src',''); // kill the video
	});
	
	/**
	 * Hashchange function for our work page....
	 *
	$(window).bind( 'hashchange', function(e) {
		
		//console.log('Hash change');
		//console.log('FIRST: '+first);
		// This condition prevents the ajax call from happening more than necessary
		// It also makes sure that the placements don't refresh on the first hashchange
		// since they should already be loaded via server side php
		cat = typeof $.bbq.getState( "cat" ) !== 'undefined' ? $.bbq.getState( "cat" ) : '0'; 			// Main State	
		
		if(first == '/our-work' && firstWorkHashchange == 1 && cat != lastCat){
			$("#mini-splash").show(); // shows the mini splash
			//$("#mini-splash").show(); // shows the mini splash
			$(".work-nav-wrapper li a").removeClass('active');
			$(".work-nav-wrapper li a[cat='"+cat+"']").addClass('active');
			
			$.ajax({
				url:	'/ajax/placements',
				data:	{ cat: cat },
				success: function(data){
					$("ul.work-placements").html(data);
					$("#mini-splash").fadeOut(); // shows the mini splash
					lastCat = cat;
				}
			});
			
		}
		firstWorkHashchange = 1;
	});
	*/
	
});
;
/**
 * Resize The Main Real Estate
 * this is dynamic for all main real-estates other than homepage
 */
//itHappenedDynamicFlag = 0;
function resizeDynamicContent(parentSelector){
	
	return;
	
	//console.log('Trying to Resize Dynamic Content');

	var cropWindow = $(""+parentSelector+" .main-real-estate");
	var respImg = $(""+parentSelector+" .main-real-estate img");
	
	
	
	//console.log("LENGTH: "+$(".main-real-estate img:visible").length);
	
	// Determine the crop offset, newHeight becomes the height of the visible image
	// If there is an image
	//if($(".main-real-estate img:visible").length){
	//if(respImg.complete){	
	
		
	if(respImg.length){	
		// unbind all events
		respImg.unbind('load');
		respImg.load(function(){
			var cropWindow = $(""+parentSelector+" .main-real-estate");
			var respImg = $(""+parentSelector+" .main-real-estate img");
			//console.log('Resizing Dynamic Content');
			
			var ohadd = 0;
			var minDYHeight = 500; 						// the min height the mainwrapper can be
			var maxDYHeight = 528;
			var playerHeight = 60;						// accounts for the offset necessary for the iframe
			var windowWidth = $(window).width();		// Window WIdth
			//var newDYHeight = $(window).height(); 	// default
			
			var imPos = 	respImg.position();			// Get the position
			var imHeight = 	respImg.height();			// Get the current height
			var imWidth = 	respImg.width();			// Get the current height
			var wrHeight =  cropWindow.height();		// the height of the mr window
			var newDYHeight = imPos.top + imHeight;		// The height of the visible portion of the image
			
			// The window width should never be less than the window width
			if(respImg.width() < $(window).width()){
				console.log('Image width should never be less than the window width');
				respImg.width(windowWidth); // The Image is always the width of the window
			}	
			
			// For the player
			//if(newDYHeight > ($(window).height() - playerHeight)){
			//	console.log('The visible portion of the image should never be larger than the entire height of the window minus the player height');
			//	newDYHeight = $(window).height() - playerHeight;
			//}
			
			// For the admin menu
			if($("#admin-menu").length){
				//console.log('The Admin Menu is present so subtract 20 from the new image portion height')
				newDYHeight = newDYHeight - 20;
				ohAdd = 20;
			}
			
			// Set the new height
			//console.log("Visible Portion of Image and MR: " + newDYHeight);
			if(newDYHeight > maxDYHeight){ newDYHeight = maxDYHeight; }
			
			if(newDYHeight != 0 && newDYHeight > minDYHeight){
				//console.log("Visible Portion of Image and MR: " + newDYHeight);
				
				cropWindow.height(newDYHeight);
				console.log('A: Setting Crop Window Height To to ' + newDYHeight);
				
				
				//var gap = parseInt(wrHeight - newDYHeight);
				//console.log('GAP: ' + gap);
				//if(gap != 0){ 
					respImg.width($(window).width()); // The Image is always the width of the window
					console.log('A: Setting width to '+$(window).width());
				//}
			}
			
			//if(cropWindow.height() != newDYHeight && newDYHeight > minDYHeight){
			//	cropWindow.height(newDYHeight);
			//}
			
			/*
			if(newDYHeight < minDYHeight){
				// gapfix
				//setTimeout(function(){
					var gap = parseInt(wrHeight - newDYHeight);
					console.log('GAP: ' + gap);
					if(gap > 0){
						aa = respImg.height();
						bb = respImg.width();
						cc = parseInt(respImg.height() + gap);
						dd = (bb * cc) / aa;
						//console.log(aa);
						//console.log(bb);
						//console.log(cc);
						//console.log(dd);
						
						dd = Math.round(dd);
						console.log('B: Setting width to '+dd);
						respImg.width(dd); // The Image is always the width of the window
					}
				//},50);
				
			}
			*/
			
			
			//console.log('LOADDDDD');
		});
		respImg.trigger('load');
		
	} else {
		//console.log("Image does not exist yet");
	}
	//}
	
	/*
	if(newDYHeight < minDYHeight){
		// gapfix
		var gap = parseInt(wrHeight - newDYHeight);
		console.log('GAP: ' + gap);
		if(gap > 0){
			aa = imHeight;
			bb = windowWidth;
			cc = parseInt(imHeight + gap);
			dd = (bb * cc) / aa;
			console.log(aa);
			console.log(bb);
			console.log(cc);
			console.log(dd);
			$(".main-real-estate img:visible").width(dd); // The Image is always the width of the window
		}
	}
	*/
	
	/*
	console.log("Wrapper Height: "+wrHeight);
	if(newDYHeight < minDYHeight ){
		var oh = wrHeight - newDYHeight - ohAdd;
		console.log('oh: '+ oh);
		var newWidth = ((oh + newDYHeight) * imWidth) / newDYHeight;
		console.log('newWidht: '+ newWidth);
		$(".main-real-estate img:visible").width(newWidth);
	}
	*/
		
}

$(document).ready(function() {
	
	// $(window).resize(function(){
	// 	if(strstr(first.toLowerCase(),"our-services")){
	// 		resizeDynamicContent("#pheonix-page-our-services");
	// 	}
	// });
	
	$(window).bind( 'hashchange', function(e) {
		if(strstr(first.toLowerCase(),"our-services")){
			
			//console.log($("#pheonix-page-our-services .main-real-estate img").load);
			
			//setTimeout(function(){
			resizeDynamicContent("#pheonix-page-our-services");
			//},'500');
			
		}
	});
	
	//console.log('FIRSTYS: '+first);
	//if(first == 'our-services'){
		
	//}
	/*
	$("#pheonix-page-our-services .main-real-estate img").live('load',function(){
		console.log('LOAD!');
		resizeDynamicContent("#pheonix-page-our-services");
	});
	*/
	//$("#pheonix-page-our-services .main-real-estate img").livequery(function(){
	/*$("#pheonix-page-our-services .main-real-estate img").load(function(){
			console.log('LOAD!');
			resizeDynamicContent("#pheonix-page-our-services");
		});*/
	//});
	
});

;
$(document).ready(function() {
	
	// $(window).resize(function(){
	// 	if(strstr(first.toLowerCase(),"our-music")){
	// 		resizeDynamicContent("#pheonix-page-our-music");
	// 	}
	// });
	
	// $(window).bind( 'hashchange', function(e) {
	// 	if(strstr(first.toLowerCase(),"our-music")){
	// 		resizeDynamicContent("#pheonix-page-our-music");
	// 	}
	// });
	
});;

/**
 * A new function I wrote to async load the social share plugins, cuz it was driving me crazy that we were not doing this decently!!!
 * -kjs
 */
function loadSocialNetworks() {

  // TWITTER
  if ($(".twitter-share-button").length > 0) {
    if (typeof (twttr) != 'undefined') {
      twttr.widgets.load();
    } else {
      $.getScript('http://platform.twitter.com/widgets.js');
    }
  }

  // Google Plus
  if ($(".social-button.g-plus").length > 0) {
    $.getScript("https://apis.google.com/js/plusone.js");
  }

  // Linked In
  if ($(".social-button.linkedin").length > 0) {
    if (typeof (IN) != 'undefined') {
      IN.parse();
    } else {
      $.getScript("//platform.linkedin.com/in.js");
    } 
  }

  // Facebook
  var s = 'script';
  var id = 'facebook-jssdk';
  var js, fjs = document.getElementsByTagName(s)[0];
  if (!document.getElementById(id)) {
    js = document.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=639534466109124";
    fjs.parentNode.insertBefore(js, fjs);
  }

}


$(document).ready(function() {

  //$(window).bind( 'hashchange', function(e) {
  // $('.blog-sidebar .form-submit:visible').livequery(function() {
  //   $(this).hide();
  // });
  //}

  loadSocialNetworks();


  /**
   * Search Button
   */
  // $('#edit-submit-public-blogs').live('click', function(e) {
  //   e.preventDefault();
  // });

  /**
   * New Button Docready
   */
  // $("a#blog-search").attr('href', '/#!/blog?search=' + $("#edit-search").val() + '');

  // -- Keyup Event
  // $(window).bind('keyup', function(e) {
  //   $("#blog-search").attr('href', '/#!/blog?search=' + $("#edit-search:visible").val() + '');
  //   // Handle Enter Key
  //   if (e.keyCode == 13) {
  //     if ($("#edit-search:visible").is(':focus')) {
  //       window.history.pushState('', '', '/#!/blog?search=' + $("#edit-search:visible").val() + '');
  //       $(window).trigger('hashchange');
  //     }
  //   }
  // });

  // -- Hashchange Event
  // $(window).bind('hashchange', function(e) {
  //   if (!strstr(first, 'blog-entry')) {
  //     $('.blogity-blog .node .content iframe').attr('src', ''); // kill the video
  //   }
  // });
});;


$(document).ready(function() {
	
	/**
	 * Trigger The hash change event for initial deeplinking
	 */
	$(window).trigger( "hashchange" );
	//console.log("hashchange from md_pheonix.js docready");
	
});;
/*jshint undef:false */

/**
 * This JS essentially creates a plugin that redirects people in the MD Pheonix theme
 *
 * @see http://drupal.org/project/ajax *
 * @depends Drupal 6
 * @author stkrzysiak
 * @note This file uses a 79 character width limit.
 * 
 * @see http://drupal.org/node/114774#javascript-behaviors
 *
 */


/**
 * Ajax Forms plugin for thickbox
 * 
 * @param {String} hook
 * @param {Object} args
 * @return {Bool}
 * 
 */
Drupal.Ajax.plugins.pheonix = function(hook, args) {
  "use strict"; //http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
  if ($ === "undefined") {
    console.log('MD: Jquery resource is unavailable');
  }
  
  // -- After Ajax Response
  if (hook === 'afterMessage' && args.status === true) {
    
	console.log(args);
	  
	// -- Want Music Form
    if(args.form_id==='md2_page_want_music_form') {
      // if we have a modal open, close it
      $('.modal-close').click();
    	window.history.pushState('', '', '/#!/set-password/'+args.messages_status[0].value);
    }
    
    // -- Password Form
    else if(args.form_id==='md2_page_set_password_form') {
      if(Drupal.settings.staff) {
        setReport('success','Some title','Congratulations! A Music Dealers Account was set up for ' + args.messages_status[2].value + ' and an email has been sent.');
        $('#md2-page-want-music-form')[0].reset();
        window.history.pushState('', '', '/#!/want-music');
      }
      else {
        md2_login_client(args.messages_status[0].value, args.messages_status[1].value);
        window.history.pushState('', '', '/#!/mddtool');
        location.reload();
      }
    }   
    
    // -- Services Page Form
    else if(args.form_id==='md2_page_services_form_form') {
      setReport('success','Some title','Thank you for your request, <br>we will be in touch shortly!');
      window.history.pushState('', '', '/#!/our-services');
    }
    
    // -- Brief Form
    else if (args.form_id==='brief_node_form') {
      setReport('success','Some title','Thank you for your request, <br>we will be in touch shortly!');
      $('#submit-a-brief-modal').hide();
      $('.modal-overlay').hide();
      $('#mini-splash').hide();
    }
    
    // -- Create Artist Form
    else if (args.form_id === 'md2_artist_create_form') {
      if (args.status == true) {
        //window.history.pushState('', '', '/#!/want-music');
        //location.reload();
      }

      if (args.options.nid != undefined) {
        $('#edit-nid').val(args.options.nid);
      }
    }
    
    // -- Song Upload Form, redirect successfult song uploads to artist profile sorted by recent so the uploaded song is on 
    else if (args.form_id === 'md2_song_upload_form') {
    	
      // remove the upload page so there are no conflicts
      // -- this is also done in pheonix cleanup...
      $(".pheonix-page").each(function(){
        var thisId = $(this).attr("id");
        if(strstr(thisId,'upload-song') || strstr(thisId,'edit-song')){
      	  $(this).remove();
        }
      });
      
      window.lastFirst = ''; // force page refresh
    	
      if (args.options.nid != undefined) {
        var redirectToHere = "/#!" + window.first.replace("/upload-song","") + "&p3=1&s3=recent&goto=tracks";
	
        // Redirect admins to the edit page
        if(window.clientFlag == 1){
	      redirectToHere = "/#!" + first.replace("/upload-song","/edit-song/" + args.options.nid + "");
          window.history.pushState('', '', redirectToHere);
        } 
        // Redirect artists to their profile
        else {
	      window.history.pushState('', '', redirectToHere);
        }
      }
      
    }
    
    /*
    else if (args.form_id === 'user_profile_form') {
    	
      // remove this upload page so there are no conflicts...
      // -- this is also done in pheonix cleanup...
      $(".pheonix-page").each(function(){
        var thisId = $(this).attr("id");
        if(strstr(thisId,'pheonix-page-my-account')){
      	  $(this).remove();
        }
      });
    	
      window.lastFirst = ''; // force page refresh
      //if (args.options.)
      // -- NO Redirect leave them on the account page...
      
    }
    */
    
    // -- Other Forms
    else {
      console.log('ajax_pheonix.js says nothing to do with this form: ' + args.form_id);
    }
    
    // trigger a hashchange to refresh ajaxed content 
    $("body").trigger('hashchange'); 
  
  }
  return true;
};


//taken from Karl's md2_pheonix.js
function md2_login_client(firstname, username) {
  "use strict"; //http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
  
  $(".head-logout").removeClass('hidden');
  $(".head-dash").removeClass('hidden');
  $(".head-welcome").removeClass('hidden');
  $(".head-login").addClass('hidden');
  $(".head-account").removeClass('hidden');
  $(".head-signout").removeClass('hidden');
  $("a.name span.welcome-name").html(firstname);
  $(".head-dash a").attr('href','#!/mddtool');                    		   // Set dash to the dtool
  $("a.my-account").attr('href','/want/'+username+'/my-home/my-account');  // Set Account link for clients


  clientFlag = 1; // client flag true for clients
  setDebug('.debug-role','client');
}
;
