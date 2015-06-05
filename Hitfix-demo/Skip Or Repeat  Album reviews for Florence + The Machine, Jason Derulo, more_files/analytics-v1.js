/*! amc-analytics-integration 2015-05-11T20:32:56Z */
!function(a){"use strict";function b(){try{a.$revee.debug&&a.console.log.apply(a.console,Array.prototype.slice.call(arguments))}catch(b){}}var c={};c.Helper={},c.Extension={},c.Helper.Common={getInternetExplorerVersion:function(){var b,c,d,e=-1;try{b=a.navigator.userAgent,c=/MSIE ([0-9]{1,}[\.0-9]{0,})/gi,d=/Trident.*rv[ :]*(\d+\.\d+)/gi,("Microsoft Internet Explorer"===a.navigator.appName&&c.test(b)||d.test(b))&&(e=parseFloat(RegExp.$1))}catch(f){}return e},delegate:function(a,b){var c,d=Array.prototype.slice.call(arguments);return d=d.slice(2),function(){return c=d.concat(Array.prototype.slice.call(arguments)),b&&b.apply(a,c)}}},c.Helper.Data=function(){var b="application/x-www-form-urlencoded";return{createCORSRequest:function(b,c){var d=new a.XMLHttpRequest;return void 0!==d.withCredentials?d.open(b,c,!0):a.hasOwnProperty&&a.hasOwnProperty("XDomainRequest")||a.XDomainRequest?(d=new a.XDomainRequest,d.open(b,c)):d=null,d},send:function(d,e,f,g){try{var h="POST",i=this.createCORSRequest(h,d);b="application/json",i?(i.onerror=c.Helper.Common.delegate(this,g,i),i.onload=c.Helper.Common.delegate(this,f,i),i.withCredentials=!0,"function"==typeof i.setRequestHeader&&i.setRequestHeader("Content-type",b),9===c.Helper.Common.getInternetExplorerVersion()?(i.onprogress=function(){},i.ontimeout=function(){},i.onerror=function(){},a.setTimeout(function(){i.send(e)},0)):i.send(e)):g()}catch(j){g&&g(j)}}}}(),c.Helper.DOM={addClass:function(a,b){this.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return new RegExp("(\\s|^)"+b+"(\\s|$)").test(a.className)},removeClass:function(a,b){this.hasClass(a,b)&&(a.className=a.className.replace(new RegExp("(\\s|^)"+b+"(\\s|$)")," ").replace(/^\s+|\s+$/g,""))},addEvent:function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)},addInlineStyles:function(b){var c=a.document.createElement("style");c.type="text/css",c.styleSheet?c.styleSheet.cssText=b:c.appendChild(a.document.createTextNode(b)),a.document.getElementsByTagName("head")[0].appendChild(c)},createElement:function(b){var c=a.document.createElement("div");return c.innerHTML=b,c.firstChild},getMetaElement:function(b){var c,d=a.document.getElementsByTagName("meta"),e="";for(c=0;c<d.length&&0===e.length;c++)if(null!==d[c].getAttribute("property"))switch(d[c].getAttribute("property")){case"og:image":"image"===b&&(e=d[c].getAttribute("content"));break;case"og:title":"title"===b&&(e=d[c].getAttribute("content"))}return e},getPropertyAndNameMetatags:function(){var b,c,d,e=a.document.getElementsByTagName("meta"),f={};for(b=0;b<e.length;b++)d=e[b],c=d.getAttribute("property")||d.getAttribute("name"),null!==c&&(f[c]=d.getAttribute("content")||"");return f},fadeElem:function(b,c,d,e){var f=0,g=d?1:-1,h=60,i=c/1e3*h,j=100/i/100,k=a.setInterval(function(){e=e||null,b.style&&b.style.opacity||(b.style.opacity=0),b.style.opacity=parseFloat(b.style.opacity)+g*j,f++,f>=i&&(a.clearInterval(k),b.style.opacity=d?1:0,null!==e&&e(b))},1e3/h)},resize:function(b,c,d,e){b.style.width=parseInt(b.offsetWidth,10)+"px",b.style.height=parseInt(b.offsetHeight,10)+"px";var f=0,g=60,h=c/1e3*g,i=Math.abs(d.width-b.offsetWidth)/h*(d.width>b.offsetWidth?1:-1),j=Math.abs(d.height-b.offsetHeight)/h*(d.height>b.offsetHeight?1:-1),k=a.setInterval(function(){e=e||null,b.style.width=Math.round(parseInt(b.style.width,10)+i)+"px",b.style.height=Math.round(parseInt(b.style.height,10)+j)+"px",f++,f>=h&&(a.clearInterval(k),b.style.width=d.width+"px",b.style.height=d.height+"px",null!==e&&e(b))},1e3/g)}},c.Helper.Vars={trim:function(a){return(a||"").replace(/^\s+|\s+$/g,"")},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},arrayIndexOf:function(a,b,c){if(Array.prototype.indexOf)return a.indexOf(b,c);var d=a.length>>>0;for(c=Number(c)||0,c=0>c?Math.ceil(c):Math.floor(c),0>c&&(c+=d),1;d>c;c++)if(a[c]===b)return c;return-1},isEmpty:function(a){var b;for(b in a)if(a.hasOwnProperty(b))return!1;return!0},objectPropertyDelete:function(a,b){try{delete a[b]}catch(c){a[b]=void 0}}},c.Session=function(b){function d(a){try{return JSON.parse(JSON.stringify(a))}catch(b){}}function e(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+a()}function f(){return{si:b.si||"",ci:b.ci||"",sci:b.sci||"",pu:b.pu||a.location.href||"",ru:a.document.referrer||"",img:c.Helper.DOM.getMetaElement("image")||"",tle:c.Helper.DOM.getMetaElement("title")||a.document.title||""}}var g,h;this.getId=function(){return g},this.getAcm=function(){var a=d(h);return a.ads=[],a.oads=[],a},g=e(),h=f(),b=null},c.SessionStorage=function(){var a={};this.reset=function(){a={}},this.setValue=function(b,c,d){var e=b.getId();a[e]=a[e]||{},a[e][c]=d},this.getValue=function(b,c){var d=a[b.getId()];return d?d[c]:void 0}},c.Sender=function(){function a(){return"//recommendation.revee.com/page/view"}function b(){return"//recommendation.revee.com/page/ad"}function c(a,b){return f.requestHandler(a,b)}function d(b){return c(b,a())}function e(a){return c(a,b())}var f=this;f.requestHandler=null,f.postToIncremental=d,f.postToNonIncremental=e,f.getIncrementalEndpointUrl=a,f.getNonIncrementalEndpointUrl=b},c.InfoTotem=function(){function d(a){var b,c,d,e="";if(0===a.length)e+="<div>Keywords: N/A</div><div>Discovered Ads: N/A</div>";else{for(e+="<table><tr><th>Ad</th><th>Keywords</th></tr>",b=0;b<a.length;b++){c=a[b],e+="<tr><td>Name: "+c.aun+"<br/>Size(s): "+c.aus+"</td><td><ul>";for(d in c.cc)c.cc.hasOwnProperty(d)&&(e+="<li>"+d+"="+c.cc[d]+"</li>");e+="</ul></td></tr>"}e+="</table>"}return e}function e(){var a="data:image/png;base64,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",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAAD7CAYAAADHEzmfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQwOURBQjdEMDZFQzExRTRBQUREQkU2MTQ3OTgwNzc1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQwOURBQjdFMDZFQzExRTRBQUREQkU2MTQ3OTgwNzc1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDA5REFCN0IwNkVDMTFFNEFBRERCRTYxNDc5ODA3NzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDA5REFCN0MwNkVDMTFFNEFBRERCRTYxNDc5ODA3NzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7e8bGLAAAVn0lEQVR42uyd7XUT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",d="#rev-page-info { position: fixed; top: 15px; left: 15px; z-index: 2147483647;opacity: 0;text-align:left;}#rev-page-info .rev-data { border: 2px ridge #dfdfdf; padding: 15px; background-color: #fff; overflow:scroll; height: 0;width: 0; font-family: Arial; font-size: 10px;}#rev-page-info .rev-data table {border: 1px solid #000; border-collapse: collapse;}#rev-page-info .rev-data th, #rev-page-info .rev-data td {border: 1px solid #000; border-collapse: collapse; padding: 5px;}#rev-page-info .rev-logo { background-image: url("+a+"); width: 175px; height: 50px; background-size: contain; background-repeat: no-repeat;}#rev-page-info .rev-close-button { text-transform: capitalize; width: 20px; height: 20px; color: #bbb; margin: 15px 15px 0 0; position: absolute; right: 0; top: 0; text-align: center;cursor: pointer;}#rev-page-info .rev-invis,#rev-page-info.rev-invis { display: none;}#rev-page-info .rev-totem-cont { background-color: #f00; border-radius: 50%; height: 75px; width: 75px;}#rev-page-info .rev-totem { background-image: url("+b+"); width: 50px; height: 50px; background-repeat: no-repeat; background-size: contain; position: relative; top: 18px; left: 12px;}";c.Helper.DOM.addInlineStyles(d)}function f(){var b=a.document.getElementById("rev-page-info");return b||(b=c.Helper.DOM.createElement('<div id="rev-page-info"></div>'),a.document.body.appendChild(b)),b}function g(){c.Helper.DOM.addEvent(m.dataPanel.querySelector(".rev-close-button"),"click",function(){c.Helper.DOM.resize(m.dataPanel,l,{width:0,height:0},function(){c.Helper.DOM.addClass(m.dataPanel,"rev-invis"),c.Helper.DOM.removeClass(m.totem,"rev-invis"),c.Helper.DOM.fadeElem(m.totem,l,!0)})})}function h(){c.Helper.DOM.addEvent(m.totem,"click",function(){c.Helper.DOM.fadeElem(m.totem,l,!1,function(){c.Helper.DOM.addClass(m.totem,"rev-invis"),c.Helper.DOM.removeClass(m.dataPanel,"rev-invis"),c.Helper.DOM.resize(m.dataPanel,l,{width:600,height:500})})})}function i(a,b){var e=a.adm,i=f();i.innerHTML='<div class="rev-totem-cont"><div class="rev-totem">&nbsp;</div></div><div class="rev-data rev-invis"><div><div class="rev-logo">&nbsp;</div><div class="rev-close-button">X</div></div><div><ul><li>Site: <span class="rev-site">'+e.site+'</span></li><li>IP Address: <span class="rev-ip">'+e.ip+'</span></li><li>Page URL: <span class="rev-ref">'+b.pu+'</span></li><li>Referrer: <span class="rev-ref">'+b.ru+'</span></li><li>Build: <span class="rev-bld">'+e.bld+'</span></li><li>Build Date: <span class="rev-date">'+e.date+'</span></li><li>Location: <span class="rev-bld">'+e.loc+"</span></li><li>Google Ad Tag: "+(e.googleAdTag||"-")+"</li><li>Brightcove: "+(e.brightcovePresent?"Yes":"No")+'</li><li>Cat: <span class="rev-cat">'+e.cat+'</span></li><li>Sub Cat: <span class="rev-sub-cat">'+e.subcat+"</span></li><li>Title: "+decodeURI(e.tle)+"</li><li>PageViews: "+e.tv+"</li><li>Internal PVs: "+e.iv+"</li><li>RPM: "+e.rp+"</li><li>"+d(b.ads)+"</li></ul></div></div>",c.Helper.DOM.fadeElem(i,l,!0),m.dataPanel=i.querySelector(".rev-data"),m.totem=i.querySelector(".rev-totem-cont"),i=null,g(),h()}function j(){e()}function k(){var b=a.document.getElementById("rev-page-info");b&&b.parentNode.removeChild(b),m=null}b("Revee.InfoTotem created");var l=1e3,m={dataPanel:null,totem:null};j(),this.update=i,this.destroy=k},c.Helper.DART={UNKNOWN_SIZE:"unknown",extractName:function(a){var b="",c="adj",d="";try{a&&a.indexOf(c)>-1&&(d=a.substring(a.indexOf(c)+c.length+1),b=d.substring(0,d.indexOf(";")))}catch(e){}return b},extractCC:function(a){var b,c,d,e={},f=[];try{if(a)for(f=a.substring(a.indexOf(";")+1).split(";"),b=0;b<f.length;b++)c=f[b],c.length>0&&(d=c.split("="),e[d[0]]=d[1].split(","))}catch(g){}return e},extractSize:function(a){var b,c=this.UNKNOWN_SIZE,d=";sz=",e=0,f=[],g=0;try{if(e=a.indexOf(d),e>-1&&(g=a.indexOf(";",e+1),g>-1)){for(f=a.substring(e+d.length,g).split(","),c="[",b=0;b<f.length;b++)f[b].length>0&&(c+=(b>0?",":"")+"["+f[b]+"]");c+="]"}}catch(h){}return c},srcExtract:function(a){var b=a&&a.attributes&&a.attributes.src?a.attributes.src.value:null;return b&&this.isAdUrl(b)?b:null},isAdUrl:function(a){return"string"==typeof a&&a.indexOf("doubleclick")>-1},processAdUrl:function(b){try{if(!this.isAdUrl(b))return;var c=a.decodeURIComponent(b);return{aun:this.extractName(c),aus:this.extractSize(c),cc:this.extractCC(c),tp:"d"}}catch(d){}}},c.Extension.Mashable=function(){function d(a,b){c.Helper.DOM.addClass(a,l),c.Helper.DOM.addClass(a,l+"-"+b.getId())}function e(a,b){return c.Helper.DOM.hasClass(a,l)?!0:b&&c.Helper.DOM.hasClass(a,l+"-"+b.getId())?!0:!1}function f(a){var b=a.parentNode;return b&&c.Helper.DOM.hasClass(b,"ad_container")?b:null}function g(){if(a.document.querySelectorAll)return a.document.querySelectorAll(".ad_container > iframe.ad");var b,d,e=[],g=a.document.body.getElementsByTagName("iframe");for(b=0;b<g.length;b++)d=g[b],c.Helper.DOM.hasClass(d,"ad")&&f(d)&&e.push(d);return e}function h(){var a,b,d,h,i,j=[];try{for(b=g(),a=0;a<b.length;a++)h=b[a],d=f(h),d&&!e(d)&&(i=c.Helper.DART.srcExtract(h),i&&j.push({ele:d,url:i}))}catch(k){}return j}function i(a,b){var f,g,i,j=b.ads||h(),k=[];for(f=0;f<j.length;f++)g=j[f],g&&"string"==typeof g.url&&g.ele&&"number"==typeof g.ele.nodeType&&!e(g.ele,a)&&(i=c.Helper.DART.processAdUrl(g.url),i&&(k.push(i),d(g.ele,a),g.ele.setAttribute(m,g.url)));return k}function j(b){var d,e,f,g=[];for(e=a.document.querySelectorAll("."+l+"-"+b.getId()),d=0;d<e.length;d++)f=c.Helper.DART.processAdUrl(e[d].getAttribute(m)),f&&g.push(f);return g}function k(){return void 0}b("Revee.Extension.Mashable created");var l="revee-scan",m="data-revee-url";this.collectNewAds=i,this.collectOldAds=j,this.destroy=k},c.Helper.GPT={getSlotDetails:function(a){var b,c=a.getSizes(),d=[],e=a.getTargetingKeys(),f={aus:"",aun:a.getAdUnitPath(),tp:"d",cc:{}};for(b=0;b<c.length;b++)d.push("["+c[b].getWidth()+","+c[b].getHeight()+"]");for(f.aus="["+d.join(",")+"]",b=0;b<e.length;b++)f.cc[e[b]]=a.getTargeting(e[b]);return f},getPageLevelKeys:function(){var b,c,d,e,f,g=[];try{if(b=a.googletag.pubads(),c="",d=/delete this\.(\w+)\[/.exec(b.clearTargeting.toString()),d&&(c=d[1]),e=b[c],"object"!=typeof e)throw new Error("Object with targeting details has not been found in googletag.pubads()");for(f in e)e.hasOwnProperty(f)&&g.push({key:f,val:e[f].slice()})}catch(h){return this.textParsePageLevelKeys()}return g},textParsePageLevelKeys:function(){var b,d,e,f,g,h,i,j,k,l,m,n,o,p,q=[],r=a.document.getElementsByTagName("script"),s=/\.setTargeting\(\s*['"]([^'"]+)['"]\s*,\s*(?:['"]([^'"]+)['"]|\[([^\]]+)\])\s*\)/g,t=/properties: \{\n[^\}]+\}/gm,u=/CN\.dart\.init\(\{[\s\S]+?kws:\[([\s\S]+)\]/gm,v=/"googlenewskeyword"\s?:\s?"([^"]*)"/g,w=/"keywords"\s?:\s?"([^"]*)"/g,x=/"taxonomykeywords"\s?:\s?"([^"]*)"/g;for(f=0;f<r.length;f++){if(b=r[f].text,a.CN&&a.CN.dart)for(d=u.exec(b);null!==d;){for(e=this.stripQuotes(d[1]).split(","),g=0;g<e.length;g++)e[g]=c.Helper.Vars.trim(e[g]);q.push({key:"targeting",val:e}),d=u.exec(b)}for(d=s.exec(b);null!==d;){for(h=d[1],i=(d[2]||d[3]).split(","),g=0;g<i.length;g++)i[g]=c.Helper.Vars.trim(this.stripQuotes(i[g]));q.push({key:h,val:i}),d=s.exec(b)}for(d=t.exec(b);null!==d;){for(k=/\s*\w+:\s*(?:".+"|'.+'),/gm,d=d[0].split(/properties: \{\n/g)[1],p=k.exec(d);null!==p;)h=p[0].split(":")[0].replace(/\s+/,""),j=p[0].split(":")[1].replace(/['" ]/g,""),","===j.charAt(j.length-1)&&(j=j.substring(0,j.length-1)),q.push({key:h,val:[j]}),p=k.exec(d);d=t.exec(b)}for(d=v.exec(b);null!==d;){for(l=d[1].split(","),g=0;g<l.length;g++)l[g]=this.cropStr(l[g]);l.length>0&&q.push({key:"googlekeywords",val:l}),d=v.exec(b)}for(d=x.exec(b);null!==d;){for(l=d[1].split(","),g=0;g<l.length;g++)l[g]=this.cropStr(l[g]);l.length>0&&q.push({key:"taxonomykeywords",val:l}),d=x.exec(b)}for(d=w.exec(b);null!==d;){for(l=d[1].split(","),g=0;g<l.length;g++)l[g]=this.cropStr(l[g]);l.length>0&&q.push({key:"generalkeywords",val:l}),d=w.exec(b)}}for(void 0!==a.document.body.attributes["data-categories"]&&(m=a.document.body.attributes["data-categories"].value.split("="),q.push({key:m[0],val:m[1]})),f=0;f<q.length;f++){for(n=q[f].val,o=!1,g=0;g<n.length&&!o;g++)null!==n[g]&&(o=!0);o||(q[f].val=[""])}return q},stripQuotes:function(a){return a.length>0&&(a.indexOf("'")>-1&&(a=a.replace(/'/g,"")),a.indexOf('"')>-1&&(a=a.replace(/"/g,""))),a},addKeysAndProps:function(a,b){var d,e,f,g;for(a.cc=a.cc||{},d=0;d<b.length;d++){if(e=b[d].key,f=b[d].val,c.Helper.Vars.isArray(f))for(g=0;g<f.length;g++)null===f[g]&&(f[g]="");if(a.cc.hasOwnProperty(e))if(c.Helper.Vars.isArray(f))for(g=0;g<f.length;g++)-1===c.Helper.Vars.arrayIndexOf(a.cc[e],f[g])&&a.cc[e].push(f[g]);else a.cc[e]=f;else a.cc[e]=f}},cropStr:function(a,b){var c,d,e;return a=this.trim(a||""),a.length>b?(c=a.substr(0,b-2),d=c.replace(/(?!\w)[\x00-\xC0]/g," "),e=d.lastIndexOf(" "),c=-1===e?c.substr(0,c.length-1):c.substr(0,this.trim(d.substr(0,e)).length),c+"..."):a}},c.Extension.GPT=function(){function d(a,b){return t.getValue(b,"slot"+a.getSlotId().getId())}function e(a){var b,d,e=c.Helper.GPT.getPageLevelKeys(),f=[];for(b=0;b<a.length;b++)d=c.Helper.GPT.getSlotDetails(a[b]),c.Helper.GPT.addKeysAndProps(d,e),f.push(d);return f}function f(b){var c,e,f=a.googletag.pubads().getSlots(),g=[];for(c=0;c<f.length;c++)e=f[c],d(e,b)&&g.push(e);return g}function g(b){var c,e,f=a.googletag.pubads().getSlots(),g=[];for(c=0;c<f.length;c++)e=f[c],d(e,b)||g.push(e);return g}function h(a){return e(f(a))}function i(){var b,c,d,g,i=Array.prototype.slice.call(arguments,0),j=q.apply(a.googletag.pubads(),i),k=[],l={},m=r.getAcm();try{if(0===i.length||1===i.length&&null===i[0])m.ads=h(r);else{for(d=f(r),b=0;b<d.length;b++)l[d[b].getSlotId().getId()]=!0;for(c=i[0],b=0;b<c.length;b++)g=c[b],g&&l[g.getSlotId().getId()]&&k.push(g);m.ads=e(k)}s.postToIncremental(m)}catch(n){}return j}function j(){var b=a.googletag.pubads();b&&!q&&(q=b.refresh,b.refresh=c.Helper.Common.delegate(p,i))}function k(){q&&(a.googletag.pubads().refresh=q,q=null)}function l(a){var b,c=g(a);for(j(),r=a,b=0;b<c.length;b++)t.setValue(a,"slot"+c[b].getSlotId().getId(),!0);return e(c)}function m(a){s=a}function n(a){t=a}function o(){k(),r=null,s=null,t=null,p=null}b("Revee.Extension.GPT created");var p=this,q=null,r=null,s=null,t=null;this.collectNewAds=l,this.collectOldAds=h,this.setSender=m,this.setSessionStorage=n,this.destroy=o},c.Helper.Brightcove={getAdUnitPath:function(a){var b="ad.doubleclick.net/pfad",c="",d=a.indexOf(b);return d>-1&&(c=a.substring(d+b.length+2),";"===c.charAt(c.length-1)&&(c=c.substring(0,c.length-1))),c},processSize:function(a){var b,c="",d=a.split(";");for(b=0;b<d.length&&0===c.length;b++)d[b].length>0&&d[b].indexOf("sz")>-1&&(c="["+d[b].split("=")[1]+"]");return c},processCC:function(a,b){var c,d=b,e=a.split(";");for(c=0;c<e.length;c++)e[c].length>0&&-1===e[c].indexOf("sz")&&(d[e[c].split("=")[0]]=e[c].split("=")[1].split(","));return d}},c.Extension.Brightcove=function(){function d(){return a.brightcove.api}function e(){return a.brightcove.experiences}function f(a,b){return o[a]=function(a){try{a.target.getAdPolicy(function(a){b.getCurrentVideo(function(b){var d,e=b.adKeys||{},f=q.collectAcmWithOldAds(n);e.ttid=[String(b.id)],e.lnid=[String(b.playlistID)],e.tags=b.tags,d=c.Helper.Brightcove.getAdUnitPath(a.adServerURL),a.playAdOnLoad&&f.ads.push({aun:d,aus:c.Helper.Brightcove.processSize(a.playerAdKeys),cc:c.Helper.Brightcove.processCC(a.playerAdKeys,e),tp:"v"}),a.prerollAds&&f.ads.push({aun:d,aus:c.Helper.Brightcove.processSize(a.prerollAdKeys),cc:c.Helper.Brightcove.processCC(a.prerollAdKeys,e),tp:"v"}),a.midrollAds&&f.ads.push({aun:d,aus:c.Helper.Brightcove.processSize(a.midrollAdKeys),cc:c.Helper.Brightcove.processCC(a.midrollAdKeys,e),tp:"v"}),a.postrollAds&&f.ads.push({aun:d,aus:c.Helper.Brightcove.processSize(a.postrollAdKeys),cc:c.Helper.Brightcove.processCC(a.postrollAdKeys,e),tp:"v"}),r.postToNonIncremental(f)})})}catch(d){}},o[a]}function g(){try{var a,b,c,g,h=d(),i=e();if(h&&i)for(g in i)i.hasOwnProperty(g)&&(a=h.getExperience(g),a&&(b=a.getModule(h.modules.APIModules.ADVERTISING),b&&(c=a.getModule(h.modules.APIModules.VIDEO_PLAYER),c&&(p=!0,o[g]&&b.removeEventListener(h.events.AdEvent.START,o[g]),o[g]=f(g,c),b.addEventListener(h.events.AdEvent.START,o[g])))))}catch(j){}}function h(){var a,b,c,e=d();if(p)for(a in o)o.hasOwnProperty(a)&&(b=e.getExperience(a),b&&(c=b.getModule(e.modules.APIModules.ADVERTISING),c&&c.removeEventListener(e.events.AdEvent.START,o[a])));

n=null,o={},p=!1,q=null,r=null}function i(a){return n||g(),n=a,[]}function j(){return[]}function k(a){q=a}function l(a){r=a}function m(){return p}b("Revee.Extension.Brightcove created");var n=null,o={},p=!1,q=null,r=null;this.collectNewAds=i,this.collectOldAds=j,this.setPublicInstance=k,this.setSender=l,this.getBrightcovePresent=m,this.destroy=h},c.PublicInstance=function(){function d(a){var c=null;return a&&(a.tp||a.tsi?a.tp&&a.tsi&&(c=s[a.tp+"-"+a.tsi]||null):a.si&&a.ci&&a.sci&&(c={si:a.si,ci:a.ci,sci:a.sci})),c||b("WARNING: classifier is not found by parameter(s)",a),c}function e(){var a=new c.Extension.GPT;return a.setSender(w),a.setSessionStorage(t),a}function f(){return new c.Extension.Mashable}function g(){var a=new c.Extension.Brightcove;return a.setPublicInstance(q),a.setSender(w),a}function h(a){var b=v[a];if(!b){switch(a){case u.GoogleTag:b=e();break;case u.MashableAdUnits:b=f();break;case u.Brightcove:b=g()}b&&(v[a]=b)}return b}function i(a,b){var c=t.getValue(a,"extensionList");c||(c=[],t.setValue(a,"extensionList",c)),c.push(b)}function j(a,b,c){var d,e,f=t.getValue(a,"extensionList"),g=[];if(f&&f.length)for(d=0;d<f.length;d++)try{e=h(f[d]),e&&e[b]&&(g=g.concat(e[b](a,c)))}catch(i){}return g}function k(){try{var a;for(a in v)v.hasOwnProperty(a)&&(b("reset(): destroy instance",a),v[a].destroy());v={},t.reset(),x&&(b("reset(): destroy totem popup",a),x.destroy())}catch(c){}}function l(a){var b=a.getAcm();return b.oads=j(a,"collectOldAds",{}),b}function m(a,d,e){try{if(b("call append()",a.getId(),d,e),a instanceof c.Session){var f=l(a);f.ads=j(a,"collectNewAds",{ads:e}),"string"==typeof d&&(f.pu=d),w.postToNonIncremental(f)}}catch(g){}}function n(e,f,g){try{b("call track()",e,f,g);var h,k,l=d(e);if(l)return"string"==typeof f&&(l.pu=f),k=new c.Session(l),b("new session created with id=",k.getId()),a.googletag?i(k,u.GoogleTag):e.si===r&&i(k,u.MashableAdUnits),a.brightcove&&i(k,u.Brightcove),h=k.getAcm(),h.ads=j(k,"collectNewAds",{ads:g}),w.postToIncremental(h),k}catch(m){}return null}function o(a,b,c){return n({si:a,ci:b,sci:c})}function p(){return"9.0.0-dev.0"}var q=this,r=8,s={"ob-1024":{si:15}},t=new c.SessionStorage,u={GoogleTag:"googletag",MashableAdUnits:"mashable",Brightcove:"brightcove"},v={},w=new c.Sender,x=null;w.requestHandler=function(a,d){c.Helper.Data.send(d,JSON.stringify(a),function(b){try{var d,e,f=JSON.parse(b.responseText),g=[];f&&(e=f.adm,f&&!c.Helper.Vars.isEmpty(e)&&(v[u.GoogleTag]&&g.push("GPT"),v[u.MashableAdUnits]&&g.push("DART"),e.googleAdTag=g.join(", "),d=v[u.Brightcove],d&&(e.brightcovePresent=d.getBrightcovePresent()),x=x||new c.InfoTotem,x.update(f,a)))}catch(h){}}),b("hitServer call:",a,d)},this.reset=k,this.collectAcmWithOldAds=l,this.track=n,this.init=o,this.append=m,this.getVersion=p,this.sender=w},a.$revee=new c.PublicInstance,a.$revee.debug=!1,a.$revee.Helper=c.Helper,a.$revee.Extension=c.Extension}(window);