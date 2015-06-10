/**
 * © 2015 Cedexis Inc.
 * Radar JavaScript client
 * Application Version: 0.1.119
 * Build Timestamp: 1433807157
 */
(function(window,document){'use strict';var e={"true":!0};window.cedexis=window.cedexis||{};window.cedexis.radar=window.cedexis.radar||{};window.radar=window.radar||{};window.cdx=window.cdx||{};
function f(a){this.window=a.window;this.document=a.document;this.zoneId=a.v;this.customerId=a.g;this.createdAt=(new Date).getTime();this.domains={code:a.q,init:a.k,report:a.t};this.runCalledAt=0;this.sendPLT=a.u in e;this.masterSampleRate=a.m;this.pltSampleRate=a.o;this.remoteProbingSampleRate=a.s;k(this,"masterSampleRate","radar-master-sample-rate");k(this,"pltSampleRate","radar-plt-sample-rate");k(this,"remoteProbingSampleRate","radar-remote-probing-sample-rate");this.includePartnerTags=a.j in e;
this.buildTimestamp=a.f;this.c=[]}function k(a,b,d){if(1<a.window.location.search.length)for(var c=a.window.location.search.slice(1).split("&"),h=c.length;h--;){var g=c[h].split("=");2===g.length&&d===g[0]&&(g=parseInt(g[1],10)/100,isNaN(g)?a.log("Warning: "+d+" should be set to a number"):a[b]=g)}}f.prototype.log=function(a){(this.window.console||{log:function(){}}).log(a)};
f.prototype.e=function(){return{a:function(a){return/radar-no-ajax/i.test(a.location.search)?"0":a.XMLHttpRequest&&void 0!==(new a.XMLHttpRequest).withCredentials?"1":"0"}(this.window),b:function(a){a=a.createElement("script");return a.addEventListener?"2":a.readyState?"1":"0"}(this.document),l:"function"!==typeof Object.keys?"1":"0",n:function(a,b){if(/msie/i.test(a.navigator.userAgent))if(void 0!==b.documentMode){if(9>b.documentMode)return"0"}else if("BackCompat"===b.compatMode)return"0";return void 0===
a.performance?"0":"1"}(this.window,this.document),p:function(a){return"function"===typeof a.postMessage&&"function"===typeof a.addEventListener?"1":"0"}(this.window),r:function(a){var b;if(b=a.performance&&"function"===typeof a.performance.getEntriesByType)a=/msie (\d+)/i.exec(a.navigator.userAgent),b=!(a&&10>=parseInt(a[1],10));return b?"1":"0"}(this.window)}};f.prototype.deviceCaps=f.prototype.e;
function l(){var a={C:/keynote/i,A:/gomez/i,w:/catchpoint/i,D:/pingdom/i,B:/ip-label/,F:/witbe-/i},b,d,c;b=window.cedexis.radar.allowed_monitoring_agents||[];d=function(a){var c,d;for(c=0;c<b.length;c+=1)if(d=b[c].toLowerCase(),d===a)return!0;return!1};for(c in a)if(a.hasOwnProperty(c)&&a[c].test(window.navigator.userAgent)&&!d(c))return!0;return!1}
f.prototype.d=function(a,b){for(var d=this.window.cedexis.main,c=[this.domains.report,"n1"],h=22;h--;)c.push(0);c.push(this.requestSignature);c.push(a+":"+d.y64enc(JSON.stringify(b)));c.push(0);d.send_report("//"+c.join("/"))};f.prototype.plt_ex=f.prototype.d;f.prototype.h=function(a){var b=this.window.cedexis;b&&(b.main&&this.requestSignature?this.d("impact_kpi",a):this.c.push(a))};f.prototype.impact=f.prototype.h;
f.prototype.i=function(){for(var a=10;a--&&0<this.c.length;){var b=this.c.shift();this.d("impact_kpi",b)}};f.prototype.sendQueuedPltReports=f.prototype.i;var m=new f({window:window,document:document,v:"1",g:"14617",q:"radar.cedexis.com",k:"cedexis-radar.net",t:"rpt.cedexis.com",u:"true",m:parseFloat("1"),o:parseFloat("1"),s:parseFloat("1"),j:"true",f:parseInt("1433807157",10)});
if(Math.random()<m.masterSampleRate){var n=window.cedexis;n.requestors=n.requestors||{};n.requestors["1;14617"]=m;var p;a:{for(var q=[/opera mini/i,/skyfire/i,/teashark/i,/uzard/i,/puffin/i,/yabrowser/i],r=q.length;r--;)if(q[r].test(m.window.navigator.userAgent)){p=!0;break a}p=!1}var t;if(!(t=p)){var u;if(u=l())u=!/radar-allow-monitors=1/.test(m.window.location.search);t=u}t||setTimeout(function(){var a;var b;(b=m.window.crypto||m.window.msCrypto)&&b.getRandomValues?
(a=new Uint32Array(1),b.getRandomValues(a),a=a[0]):a=0;m.transactionId=a||Math.floor(1E9*Math.random());a=m.e();var d=b="",c;for(c in a)a.hasOwnProperty(c)&&(d+=b+c+"="+a[c],b="&");c="//"+m.domains.code+"/"+m.buildTimestamp+"/radar/main.js?"+d;a:{if(0<m.window.location.search.length){a=m.window.location.search.slice(1).split("&");b=[];for(d=a.length;d--;)"providers=all"===a[d]&&b.push(a[d]);b=b.join("&");if(0<b.length){a="&"+b;break a}}a=""}c=c+a;a=m.document.getElementById("cdx");a||
(a=m.document.createElement("div"),a.id="cdx",m.document.body.appendChild(a));b=m.document.createElement("script");b.type="text/javascript";b.async=!0;b.src=c;a.appendChild(b)},parseInt("2000",10))};}(window,document));