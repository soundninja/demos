(function(){var p=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ha=function(a){var b=aa(a);return"array"==b||"object"==b&&"number"==typeof a.length},ia=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ja=function(a,b,c){return a.call.apply(a.bind,arguments)},ka=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,
c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)},la=function(a,b){function c(){}c.prototype=b.prototype;a.Ia=b.prototype;a.prototype=new c;a.Ha=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var ma=(new Date).getTime();var r=function(a){r[" "](a);return a};r[" "]=function(){};var na=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)};var t=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{r(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(d){return!1}},oa=function(){var a=window;return t(a.top)?a.top:null},pa=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},u=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return c=qa(window),a[Math.floor(c*a.length)]}return null},qa=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},
ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},ya=/^([0-9.]+)px$/,za=/^(-?[0-9.]{1,30})$/,Aa=function(a){return za.test(a)&&(a=Number(a),!isNaN(a))?a:null},Ba=function(a){return(a=ya.exec(a))?+a[1]:null};var Ea=function(a,b,c,d,e,f){try{if((d?a.aa:Math.random())<(e||a.S)){var g=a.R+b+Ca(c),g=g.substring(0,2E3);"undefined"===typeof f?Da(g):Da(g,f)}}catch(h){}},Ca=function(a){var b="";ra(a,function(a,d){if(0===a||a)b+="&"+d+"="+encodeURIComponent(String(a))});return b},Da=function(a,b){p.google_image_requests||(p.google_image_requests=[]);var c=p.document.createElement("img");if(b){var d=function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",
a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};na(c,"load",d);na(c,"error",d)}c.src=a;p.google_image_requests.push(c)};var Fa=function(a,b,c){this.Y=a;this.U=b;this.N=c;this.J=null;this.T=this.u;this.ga=!1},Ga=function(a,b,c){this.message=a;this.fileName=b||"";this.lineNumber=c||-1},Ia=function(a,b,c,d,e){var f;try{f=c()}catch(g){var h=a.N;try{var n=Ha(g),h=(e||a.T).call(a,b,n,void 0,d)}catch(l){a.u("pAR",l)}if(!h)throw g;}finally{}return f},Ja=function(a,b){var c=w;return function(){var d=arguments;return Ia(c,a,function(){return b.apply(void 0,d)},void 0)}};
Fa.prototype.u=function(a,b,c,d,e){var f={};f.context=a;b instanceof Ga||(b=Ha(b));f.msg=b.message.substring(0,512);b.fileName&&(f.file=b.fileName);0<b.lineNumber&&(f.line=b.lineNumber.toString());a=p.document;f.url=a.URL.substring(0,512);f.ref=a.referrer.substring(0,512);Ka(this,f,d);Ea(this.Y,e||this.U,f,this.ga,c);return this.N};
var Ka=function(a,b,c){if(a.J)try{a.J(b)}catch(d){}if(c)try{c(b)}catch(e){}},Ha=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){var c=a.stack,d=b;try{-1==c.indexOf(d)&&(c=d+"\n"+c);for(var e;c!=e;)e=c,c=c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=c.replace(/\n */g,"\n")}catch(f){b=d}}return new Ga(b,a.fileName,a.lineNumber)};var La=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ma=/&/g,Na=/</g,Oa=/>/g,Pa=/"/g,Qa=/'/g,Ra=/\x00/g,Sa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},Ta={"'":"\\'"},Ua=function(a,b){return a<b?-1:a>b?1:0};var Va=function(a,b){return a===b};var ob=function(a,b){this.width=a;this.height=b};ob.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};ob.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var B;a:{var pb=p.navigator;if(pb){var qb=pb.userAgent;if(qb){B=qb;break a}}B=""}var C=function(a){return-1!=B.indexOf(a)};var rb=C("Opera")||C("OPR"),D=C("Trident")||C("MSIE"),sb=C("Edge"),tb=C("Gecko")&&!(-1!=B.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),ub=-1!=B.toLowerCase().indexOf("webkit")&&!C("Edge"),vb=function(){var a=B;if(tb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(sb)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ub)return/WebKit\/(\S+)/.exec(a)},wb=function(){var a=p.document;return a?a.documentMode:void 0},xb=function(){if(rb&&
p.opera){var a;var b=p.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=vb())&&(a=b?b[1]:"");return D&&(b=wb(),b>parseFloat(a))?String(b):a}(),yb={},zb=function(a){if(!yb[a]){for(var b=0,c=La(String(xb)).split("."),d=La(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",n=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var k=n.exec(g)||["","",""],m=l.exec(h)||["","",""];if(0==k[0].length&&0==m[0].length)break;b=Ua(0==k[1].length?0:parseInt(k[1],
10),0==m[1].length?0:parseInt(m[1],10))||Ua(0==k[2].length,0==m[2].length)||Ua(k[2],m[2])}while(0==b)}yb[a]=0<=b}},Ab=p.document,Bb=Ab&&D?wb()||("CSS1Compat"==Ab.compatMode?parseInt(xb,10):5):void 0;var Cb;if(!(Cb=!tb&&!D)){var Db;if(Db=D)Db=9<=Bb;Cb=Db}Cb||tb&&zb("1.9.1");D&&zb("9");var H=window;var I=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},J=function(a){return!!a&&"function"==typeof a&&!!a.call},Eb=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},K=function(a,b){if(a.indexOf){var c=a.indexOf(b);return 0<c||0===c}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Fb=function(a){na(document,"DOMContentLoaded",a)},Gb=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=
1},Hb=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},Ib=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},Jb=!!window.google_async_iframe_id,Kb=/(^| )adsbygoogle($| )/;var Lb,w,Mb="http"+("http:"==H.location.protocol?"":"s")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";Lb=new function(){this.R=Mb;this.S=.01;this.aa=Math.random()};w=new Fa(Lb,"jserror",!0);var Nb=function(a,b,c,d){Ia(w,a,c,d,b)},Ob=w.u,Pb=function(a,b){return Ja(a,b)},Qb=function(a){return Ja("aa:reactiveTag",a)};var Rb=null,Sb=function(){if(!Rb){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,t(a))b=a;else break;Rb=b}return Rb};var O={ia:{j:"17415661",i:"17415662"},Ga:{j:"453848100",i:"453848101"},sa:{j:"828064124",i:"828064125"},ra:{j:"828064127",i:"828064128"},ta:{j:"828064170",i:"828064171"},ka:{j:"453848130",i:"453848131",Ea:"453848132",Fa:"453848133"},wa:{j:"24819308",i:"24819309",ja:"24819320"},va:{j:"24819330",i:"24819331"},la:{pa:"828064119"},ya:{j:"828064162",i:"828064163"},xa:{j:"828064164",i:"828064165",na:"828064166"},qa:{j:"828064190",i:"828064191"},Aa:{j:"10573503",i:"10573504"},D:{j:"10573593",i:"10573594"},
Da:{j:"10573511",i:"10573512"},v:{j:"10573581",i:"10573582"},oa:{j:"10573521",i:"10573522"},B:{j:"10573571",i:"10573572"},Ba:{j:"10573531",i:"10573532"},F:{j:"10573561",i:"10573562"},Ca:{j:"10573551",i:"10573552"},ua:{j:24819400,i:24819401},za:{j:"312815000",i:"312815001"},C:{j:"312815100",i:"312815101"},ma:{j:"26835101",i:"26835102"}};var Q=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},Tb=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},Ub=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},Vb=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,Wb=function(a,b){if(!a)return b;var c=a.match(Vb);return c?c[0]:b};var Xb=Q("0.15"),Yb=Q("0.0"),Zb=Tb("101",-1),$b=Tb("10",0),ac=Q("0.05"),bc=Q("0.001"),cc=Q("0"),Dc=Q("0.001"),Ec=Q(""),Fc=Q("0.001"),Gc=
Q("0.2"),Hc=Ub("true",!0),Ic=Q(""),Jc=Q("0.001");var Kc=Ub("false",!1),Lc=Ub("false",!1),Mc=Lc||!Kc;var Nc=function(){},Pc=function(a,b,c){switch(typeof b){case "string":Oc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),Pc(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],"function"!=typeof f&&(c.push(d),Oc(e,
c),c.push(":"),Pc(a,f,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Qc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Rc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Oc=function(a,b){b.push('"');b.push(a.replace(Rc,function(a){if(a in Qc)return Qc[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Qc[a]=e+b.toString(16)}));
b.push('"')};var Sc=null,Tc=tb||ub||rb||"function"==typeof p.atob;var Uc={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Vc=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];I(a,function(a,d){if(null!=a){var e;try{var f=[];Pc(new Nc,a,f);e=f.join("")}catch(g){}e&&(e=e.replace(/\//g,"\\$&"),Eb(b,d,"=",e,";"))}});return b.join("")};var Wc={overlays:1,interstitials:2,vignettes:2,inserts:3,immersives:4};var R=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}};var Xc=function(a,b,c){Nb("files::getSrc",Ob,function(){if("https:"==H.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Yc=function(a,b,c){c||(c=Mc?"https":"http");return Xc(a,b,c)};var S=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},Zc=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var $c=null;var ad=function(a){this.s=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:q(this.fa,this)});this.ca=a.google_iframe_oncopy},bd;var V="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(V)&&(-1!=V.indexOf("&")&&(V=V.replace(Ma,"&amp;")),-1!=V.indexOf("<")&&(V=V.replace(Na,"&lt;")),-1!=V.indexOf(">")&&(V=V.replace(Oa,"&gt;")),-1!=V.indexOf('"')&&(V=V.replace(Pa,"&quot;")),-1!=V.indexOf("'")&&(V=V.replace(Qa,"&#39;")),-1!=V.indexOf("\x00")&&(V=V.replace(Ra,"&#0;")));bd=V;ad.prototype.set=function(a,b){this.ca.handlers[a]=b;this.s.addEventListener&&this.s.addEventListener("load",q(this.V,this,a),!1)};
ad.prototype.V=function(a){a=this.s.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};ad.prototype.fa=function(a,b){var c=cd("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var cd=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var dd=function(a,b,c){var d=["<iframe"],e;for(e in a)a.hasOwnProperty(e)&&Eb(d,e+"="+a[e]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var ed=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var fd={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var gd="google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),hd=function(a){try{var b=a.top.google_ads_params_store;if(b)return b;b=a.top.google_ads_params_store={};if(b===a.top.google_ads_params_store)return b}catch(c){}return null};var id,W=function(a){this.A=[];this.s=a||window;this.o=0;this.w=null;this.P=0},jd=function(a,b){this.W=a;this.ha=b};W.prototype.enqueue=function(a,b){0!=this.o||0!=this.A.length||b&&b!=window?this.K(a,b):(this.o=2,this.M(new jd(a,window)))};W.prototype.K=function(a,b){this.A.push(new jd(a,b||this.s));kd(this)};W.prototype.X=function(a){this.o=1;if(a){var b=Pb("sjr::timeout",q(this.L,this,!0));this.w=this.s.setTimeout(b,a)}};
W.prototype.L=function(a){a&&++this.P;1==this.o&&(null!=this.w&&(this.s.clearTimeout(this.w),this.w=null),this.o=0);kd(this)};W.prototype.ba=function(){return!(!window||!Array)};W.prototype.da=function(){return this.P};W.prototype.nq=W.prototype.enqueue;W.prototype.nqa=W.prototype.K;W.prototype.al=W.prototype.X;W.prototype.rl=W.prototype.L;W.prototype.sz=W.prototype.ba;W.prototype.tc=W.prototype.da;var kd=function(a){var b=Pb("sjr::tryrun",q(a.ea,a));a.s.setTimeout(b,0)};
W.prototype.ea=function(){if(0==this.o&&this.A.length){var a=this.A.shift();this.o=2;var b=Pb("sjr::run",q(this.M,this,a));a.ha.setTimeout(b,0);kd(this)}};W.prototype.M=function(a){this.o=0;a.W()};
var ld=function(a){try{return a.sz()}catch(b){return!1}},md=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&ld(a)&&J(a.nq)&&J(a.nqa)&&J(a.al)&&J(a.rl)},nd=function(){if(id&&ld(id))return id;var a=Sb(),b=a.google_jobrunner;return md(b)?id=b:a.google_jobrunner=id=new W(a)},od=function(a,b){nd().nq(a,b)},pd=function(a,b){nd().nqa(a,b)};var X=function(a){this.name="TagError";this.message=a||"";Error.captureStackTrace?Error.captureStackTrace(this,X):this.stack=Error().stack||""};la(X,Error);
var qd=Jb?1==Hb(H):!Hb(H),rd=function(){var a=Lc?"https":"http",b=r("script"),c;c=Wb("","pagead2.googlesyndication.com");return["<",b,' src="',Yc(c,"/pagead/js/r20150915/r20150820/show_ads_impl.js",a),'"></',b,">"].join("")},sd=function(a,b,c,d){return function(){var e=!1;d&&nd().al(3E4);var f=a.document.getElementById(b);f&&!t(f.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{var g=a.document.getElementById(b).contentWindow;if(t(g)){var h=a.document.getElementById(b).contentWindow,n=h.document;n.body&&n.body.firstChild||(n.open(),h.google_async_iframe_close=!0,n.write(c))}else{var l=a.document.getElementById(b).contentWindow,k;f=c;f=String(f);if(f.quote)k=f.quote();else{g=['"'];for(h=0;h<f.length;h++){var m=f.charAt(h),v=m.charCodeAt(0),n=g,E=h+1,P;if(!(P=Sa[m])){var F;if(31<v&&127>v)F=m;else{var z=m;if(z in Ta)F=
Ta[z];else if(z in Sa)F=Ta[z]=Sa[z];else{var x=z,G=z.charCodeAt(0);if(31<G&&127>G)x=z;else{if(256>G){if(x="\\x",16>G||256<G)x+="0"}else x="\\u",4096>G&&(x+="0");x+=G.toString(16).toUpperCase()}F=Ta[z]=x}}P=F}n[E]=P}g.push('"');k=g.join("")}l.location.replace("javascript:"+k)}e=!0}catch(ba){l=Sb().google_jobrunner,md(l)&&l.rl()}e&&(e=cd("google_async_rrc",c),(new ad(a)).set(b,sd(a,b,e,!1)))}},td=function(a){var b=["<iframe"];I(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");
return b.join("")},vd=function(a,b,c){ud(a,b,c,function(a,b,f){a=a.document;for(var g=b.id,h=0;!g||a.getElementById(g);)g="aswift_"+h++;b.id=g;b.name=g;g=Number(f.google_ad_width);h=Number(f.google_ad_height);16==f.google_reactive_ad_format?(f=a.createElement("div"),f.innerHTML=dd(b,g,h),c.appendChild(f.firstChild)):c.innerHTML=dd(b,g,h);return b.id})},ud=function(a,b,c,d){var e=r("script"),f,g;a:{try{var h=a.top.google_pubvars_reuse_experiment;if("undefined"!==typeof h){g=h;break a}h=u(["C","E"],
Ic)||null;a.top.google_pubvars_reuse_experiment=h;if(a.top.google_pubvars_reuse_experiment===h){g=h;break a}}catch(n){}g=null}if("E"===g){var l=null!=b.google_ad_client,k=null!=b.google_ad_width,m=null!=b.google_ad_height,v=hd(a);if(v){for(var E=0;E<gd.length;E++){var P=gd[E];null!=b[P]&&(v[P]=b[P])}var F=hd(a);if(F){var z=F.google_ad_width,x=F.google_ad_height,G=F.google_ad_format;if(z&&x&&G){var ba,Wa=G&&G.match(/(\d+)x(\d+)/);ba=Wa?{width:Wa[1],height:Wa[2]}:null;!ba||ba.width==z&&ba.height==x||
delete F.google_ad_format}}}var Xa=hd(a);if(Xa)for(var Ya=0;Ya<gd.length;Ya++){var sa=gd[Ya];null==b[sa]&&null!=Xa[sa]&&(b[sa]=Xa[sa])}var Xd=null!=b.google_ad_client,Yd=null!=b.google_ad_width,Zd=null!=b.google_ad_height;f=[l?"c2":Xd?"c1":"c0",k?"w2":Yd?"w1":"w0",m?"h2":Zd?"h1":"h0"].join()}var A={},$d=b.google_ad_height;A.width='"'+b.google_ad_width+'"';A.height='"'+$d+'"';A.frameborder='"0"';A.marginwidth='"0"';A.marginheight='"0"';A.vspace='"0"';A.hspace='"0"';A.allowtransparency='"true"';A.scrolling=
'"no"';A.allowfullscreen='"true"';A.onload='"'+bd+'"';var Za=d(a,A,b),ta;ta=wd(b)?u(["c","e"],Gc):null;var dc=b.google_ad_output,L=b.google_ad_format;L||"html"!=dc&&null!=dc||(L=b.google_ad_width+"x"+b.google_ad_height,"e"==ta&&(L+="_as"));var ae=!b.google_ad_slot||wd(b),L=L&&ae?L.toLowerCase():"";b.google_ad_format=L;for(var ec=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],fc,gc=[],hc=0,ca=c;ca&&25>hc;ca=ca.parentNode,++hc)gc.push(9!=ca.nodeType&&ca.id||
"");(fc=gc.join())&&ec.push(fc);b.google_ad_unit_key=Ib(ec.join(":")).toString();var ic=a.google_adk2_experiment=a.google_adk2_experiment||u(["C","E"],Fc)||"N";if("E"==ic){for(var y=c,jc=[],kc=0;y&&25>kc;++kc){var ua="",ua=(ua=9!=y.nodeType&&y.id)?"/"+ua:"",$a;a:{if(y&&y.nodeName&&y.parentElement)for(var be=y.nodeName.toString().toLowerCase(),lc=y.parentElement.childNodes,mc=0,ab=0;ab<lc.length;++ab){var bb=lc[ab];if(bb.nodeName&&bb.nodeName.toString().toLowerCase()==be){if(y==bb){$a="."+mc;break a}++mc}}$a=
""}jc.push((y.nodeName&&y.nodeName.toString().toLowerCase())+ua+$a);y=y.parentElement}var ce=jc.join()+":",T=a,nc=[];if(T)try{for(var da=T.parent,oc=0;da&&da!=T&&25>oc;++oc){for(var pc=da.frames,va=0;va<pc.length;++va)if(T==pc[va]){nc.push(va);break}T=da;da=T.parent}}catch(Fe){}b.google_ad_unit_key_2=Ib(ce+nc.join()).toString()}else"C"==ic&&(b.google_ad_unit_key_2="ctrl");var de=Vc(b),U=null,cb=u(["C","E"],Jc);if("E"==cb){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var db=
encodeURIComponent(window.JSON.stringify(b)),eb;if(Tc)eb=p.btoa(db);else{for(var M=[],qc=0,fb=0;fb<db.length;fb++){for(var ea=db.charCodeAt(fb);255<ea;)M[qc++]=ea&255,ea>>=8;M[qc++]=ea}if(!Sc){Sc={};for(var wa=0;65>wa;wa++)Sc[wa]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(wa)}for(var xa=Sc,rc=[],N=0;N<M.length;N+=3){var sc=M[N],tc=N+1<M.length,uc=tc?M[N+1]:0,vc=N+2<M.length,wc=vc?M[N+2]:0,ee=sc>>2,fe=(sc&3)<<4|uc>>4,xc=(uc&15)<<2|wc>>6,yc=wc&63;vc||(yc=64,tc||(xc=64));
rc.push(xa[ee],xa[fe],xa[xc],xa[yc])}eb=rc.join("")}U=eb;break a}Ea(Lb,"sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0},!0,void 0,void 0)}catch(ge){w.u("sblob",ge,void 0,void 0)}U=""}U||(U="{X}")}else"C"==cb&&(U="{C}");var gb;var he=b.google_ad_client,hb;if(hb=qd){if(!$c)b:{for(var ib=[H.top],jb=[],ie=0,fa;fa=ib[ie++];){jb.push(fa);try{if(fa.frames)for(var je=fa.frames.length,kb=0;kb<je&&1024>ib.length;++kb)ib.push(fa.frames[kb])}catch(Ge){}}for(var lb=0;lb<jb.length;lb++)try{var zc=
jb[lb].frames.google_esf;if(zc){$c=zc;break b}}catch(He){}$c=null}hb=!$c}if(hb){var ga={style:"display:none"};ga["data-ad-client"]=ed(he);ga.id="google_esf";ga.name="google_esf";ga.src=Yc(Wb("","googleads.g.doubleclick.net"),"/pagead/html/r20150915/r20150820/zrt_lookup.html");gb=td(ga)}else gb="";var mb=ma,Ac=(new Date).getTime(),Bc=a.google_top_experiment,nb=a.google_async_for_oa_experiment;nb&&(a.google_async_for_oa_experiment=
void 0);var Cc=a.google_always_use_delayed_impressions_experiment,ke=["<!doctype html><html><body>",gb,"<",e,">",de,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',Za,'";google_start_time=',mb,";",cb?'google_pub_vars = "'+U+'";':"",f?'google_pubvars_reuse_experiment_result = "'+f+'";':"",Bc?'google_top_experiment="'+Bc+'";':"",nb?'google_async_for_oa_experiment="'+nb+'";':"",Cc?'google_always_use_delayed_impressions_experiment="'+Cc+'";':"",ta?'google_append_as_for_format_override="'+
ta+'";':"","google_bpp=",Ac>mb?Ac-mb:1,";google_async_rrc=0;</",e,">",rd(),"</body></html>"].join("");(a.document.getElementById(Za)?od:pd)(sd(a,Za,ke,!0))},xd=Math.floor(1E6*Math.random()),yd=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var e=c[d].indexOf("=");-1!=e&&(b[c[d].substr(0,e)]=c[d].substr(e+1))}}catch(f){}c=b[3];if(b[1]==xd&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=
0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},wd=function(a){return a.google_override_format||!fd[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used},zd=function(a,b){var c=navigator;if(Hc&&a&&b&&c){var d=a.document,c=d.createElement("script"),e=ed(b);c.async=!0;c.type="text/javascript";c.src=Yc("pagead2.googlesyndication.com","/pub-config/"+e+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,
d)}};var Y=function(a,b){this.H=a;this.G=b};Y.prototype.minWidth=function(){return this.H};Y.prototype.height=function(){return this.G};var Ad=function(a){return function(b){return b.minWidth()<=a}},Bd=function(a){var b=Infinity;do{var c;a:{if(a&&a.style&&a.style.height&&(c=/^(\d+)px$/.exec(a.style.height))){c=+c[1];break a}c=null}c&&(b=Math.min(b,c))}while(a=a.parentNode);return b};var Cd=function(){return C("iPad")||C("Android")&&!C("Mobile")||C("Silk")};var Dd=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var e="google_ad_"+c[d];if(!b.hasOwnProperty(e)){var f;f=Ba(a[c[d]]);f=null===f?null:Math.round(f);null!=f&&(b[e]=f)}}},Ed=function(a,b){try{var c=b.document.documentElement.getBoundingClientRect(),d=a.getBoundingClientRect();return{x:d.left-c.left,y:d.top-c.top}}catch(e){return null}};var Fd={rectangle:1,horizontal:2,vertical:4,autorelaxed:1},Z=function(a,b,c){Y.call(this,a,b);this.$=c};la(Z,Y);var Gd=function(a){return function(b){return!!(b.$&a)}},Hd=[new Z(970,90,2),new Z(728,90,2),new Z(468,60,2),new Z(336,280,1),new Z(320,100,2),new Z(320,50,2),new Z(300,600,4),new Z(300,250,1),new Z(250,250,1),new Z(234,60,2),new Z(200,200,1),new Z(180,150,1),new Z(160,600,4),new Z(125,125,1),new Z(120,600,4),new Z(120,240,4)];var Id=[{l:[3,0,0],m:[6,12,14,0,1,3,2,4,13,5,7,8,9,10,11,15]},{l:[3,0,1],m:[6,15,0,1,2,3,4,13,5,7,8,9,10,11,12,14]},{l:[3,0,2],m:[6,15,0,1,2,3,4,7,8,9,10,13,5,11,12,14]},{l:[3,1,0],m:[6,12,15,0,1,3,4,13,2,5,7,8,9,10,11,14]},{l:[3,1,1],m:[6,15,0,1,7,8,11,2,3,4,5,9,10,12,13,14]},{l:[3,1,2],m:[6,15,0,1,2,3,4,7,9,11,5,8,10,12,13,14]},{l:[3,2,0],m:[0,6,12,15,1,2,3,4,13,5,7,8,9,10,11,14]},{l:[3,2,1],m:[0,6,12,14,1,2,3,4,13,5,7,8,9,10,11,15]},{l:[3,2,2],m:[0,15,1,2,3,4,13,9,5,6,7,8,10,11,12,14]},{l:[2,0,
0],m:[6,15,0,1,3,2,7,8,10,13,9,4,5,11,12,14]},{l:[2,0,1],m:[6,15,0,1,2,3,7,8,4,10,9,13,5,11,12,14]},{l:[2,0,2],m:[0,15,1,2,3,4,7,8,13,5,6,9,10,11,12,14]},{l:[4,0,0],m:[6,12,14,15,0,1,7,2,8,11,9,3,4,5,10,13]},{l:[4,0,1],m:[6,12,14,0,1,2,3,4,7,8,11,13,5,9,10,15]},{l:[4,0,2],m:[6,15,0,1,2,3,5,7,8,13,9,4,10,11,12,14]}],Jd=function(a,b){if(!b)return 0;var c=b.y;switch(a){case 2:return 285>c?0:1396>c?1:2;case 4:return 275>c?0:1057>c?1:2;default:return 216>c?0:838>c?1:2}};var Kd=function(a){return function(b){for(var c=a.length-1;0<=c;--c)if(!a[c](b))return!1;return!0}},Ld=function(a,b,c){for(var d=a.length,e=null,f=0;f<d;++f){var g=a[f];if(b(g)){if(!c||c(g))return g;null===e&&(e=g)}}return e};var Pd=function(a,b,c,d,e,f){var g;if(Md(c)){b:{g=!Cd()&&(C("iPod")||C("iPhone")||C("Android")||C("IEMobile"))?2:Cd()?4:3;var h=Ed(d,c);g=[g,h&&3==g?83>h.x?0:265>h.x?1:2:0,Jd(g,h)];for(h=0;h<Id.length;++h){var n=Id[h],l;c:{l=g;var k=n.l;if(ha(l)&&ha(k)&&l.length==k.length){for(var m=l.length,v=Va,E=0;E<m;E++)if(!v(l[E],k[E])){l=!1;break c}l=!0}else l=!1}if(l){g=n.m;break b}}throw Error("No format for "+g);}h=[];for(n=0;n<g.length;++n)h.push(Hd[g[n]]);g=h}else g=Hd.slice(0).sort(Nd);if(K(S(c),O.v.i)){h=
g.length;n=[];for(l=0;l<h;++l)k=Math.floor(Math.random()*(l+1)),n[l]=n[k],n[k]=g[l];g=n}a=Kd(Od(a,f,c,d));b=Gd(b);return e?Ld(g,a,b):Ld(g,Kd([a,b]))},Od=function(a,b,c,d){var e=488>R(c).clientWidth;a=[Ad(a),Qd(e),Rd(e,c,d)];if(b){var f=Bd(d);a.push(function(a){return a.height()<=f})}return a},Sd=function(a,b,c){if("auto"==c)return c=R(a).clientWidth,c=Math.min(1200,c),b/=c,Md(a)&&!(488>R(a).clientWidth)&&.6<b?2:.25>=b?4:3;a=0;for(var d in Fd)-1!=c.indexOf(d)&&(a|=Fd[d]);return a},Nd=function(a,b){return b.minWidth()-
a.minWidth()||b.height()-a.height()},Qd=function(a){return function(b){return!(320==b.minWidth()&&(a&&50==b.height()||!a&&100==b.height()))}},Rd=function(a,b,c){var d=a&&Td(c,b);return function(a){return!(d&&250<=a.height())}},Td=function(a,b){var c=Math.min(R(b).clientHeight,16*R(b).clientWidth/9),d=Ed(a,b);return(d?d.y:0)<c-100},Md=function(a){return K(S(a),O.D.i)||Ud(a)},Ud=function(a){var b=O.F;return"LE"==a.google_responsive_override_logs_experiment||K(S(a),b.i)};var Vd=[new Y(301,300),new Y(120,600)];var Wd=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};var le=function(a){var b;try{b=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(c){return null}if(0<=b&&1E3>b)return b;b=Math.floor(1E3*qa(a));try{return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(d){return null}};var me=new function(){this.Z=new Wd(100,199)};var ne=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:u([c,d],b)},oe=function(a,b,c,d){a=a.google_active_plles=a.google_active_plles||[];return K(S(b),c)?(a.push(c),c):K(S(b),d)?(a.push(d),d):null};var pe=function(a){return Kb.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},re=function(a,b){var c=window;a.setAttribute("data-adsbygoogle-status","done");qe(a,b,c)},qe=function(a,b,c){se(a,b,c);if(!te(a,b,c)){if(b.google_reactive_ads_config){if(ue)throw new X("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");ue=!0}Gb(c);1==Hb(c)&&zd(c,b.google_ad_client);I(Uc,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";var d=b.google_ad_output;if(d&&
"html"!=d)throw new X("adsbygoogle.push() error: No support for google_ad_output="+d);Nb("aa::load",Ob,function(){vd(c,b,a)})}},te=function(a,b,c){var d=b.google_reactive_ads_config;if(d)var e=d.page_level_pubvars,f=(ia(e)?e:{}).google_tag_origin;var g=b.google_ad_slot,e=c.google_ad_modifications;!e||Zc(e.ad_whitelist,g,f||b.google_tag_origin)?e=null:(f=e.space_collapsing||"none",e=(g=Zc(e.ad_blacklist,g))?{I:!0,O:g.space_collapsing||f}:e.remove_ads_by_default?{I:!0,O:f}:null);return e&&e.I&&"on"!=
b.google_adtest?("slot"==e.O&&(null!==Aa(a.getAttribute("width"))&&a.setAttribute("width",0),null!==Aa(a.getAttribute("height"))&&a.setAttribute("height",0),a.style.width="0px",a.style.height="0px"),!0):!(e=pa(a,c))||"none"!=e.display||"on"==b.google_adtest||0<b.google_reactive_ad_format||d?!1:(c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),!0)},ve=function(a,b){var c;try{c=a.getBoundingClientRect()}catch(d){}if(!c||
0==c.left&&0==c.right&&0==c.width&&0==c.height)return!1;var e=pa(a,b);if(!e)return!1;c=Ba(e.width);e=Ba(e.height);return null==c||null==e||fd[c+"x"+e]?!1:!0},se=function(a,b,c){for(var d=a.attributes,e=d.length,f=0;f<e;f++){var g=d[f];if(/data-/.test(g.name)){var h=g.name.replace("data","google").replace(/-/g,"_");if(!b.hasOwnProperty(h)){var g=g.value,n={google_reactive_ad_format:Tb,google_allow_expandable_ads:Ub},g=n.hasOwnProperty(h)?n[h](g,null):g;null===g||(b[h]=g)}}}d=c.google_ad_modifications=
c.google_ad_modifications||{};d.plle||(d.plle=!0,d=d.loeids=d.loeids||[],e=O.D,f=e.i,c.location&&c.location.hash=="#google_plle_"+f?e=f:(e=[e.j,f],f=new Wd(Zb,Zb+$b-1),(h=0>=$b||$b%e.length)||(h=me.Z,h=!(h.start<=f.start&&h.end>=f.end)),h?e=null:(h=le(c),e=null!==h&&f.start<=h&&f.end>=h?e[(h-Zb)%e.length]:null)),e&&d.push(e),e=O.C,(e=ne(c,ac,e.j,e.i))&&d.push(e),e=O.v,(e=ne(c,bc,e.j,e.i))&&d.push(e),e=O.B,(e=ne(c,cc,e.j,e.i))&&d.push(e),e=O.F,(e=ne(c,Dc,e.j,e.i))&&d.push(e));if(b.google_enable_content_recommendations&&
1==b.google_reactive_ad_format)b.google_ad_width=R(c).clientWidth,b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=R(c).clientWidth||0,b.google_ad_height=R(c).clientHeight||0,a.style.display="none";else if(9==b.google_reactive_ad_format)b.google_ad_width=R(c).clientWidth||0,b.google_ad_height=R(c).clientHeight||0,a.style.display="none";else{d=
b.google_ad_format;d="autorelaxed"==d&&K(S(c),O.C.i)?2:"auto"==d||/^((^|,) *(horizontal|vertical|rectangle|autorelaxed) *)+$/.test(d)?1:void 0;if(e=!d)ve(a,c)?(e=O.F,oe(b,c,e.j,e.i)!==e.i?e=!1:(b.google_ad_format="auto",e=!0)):e=!1;e&&(d=1);if(d){var l=d,k=O.D;oe(b,c,k.j,k.i);k=O.v;oe(b,c,k.j,k.i);k=O.B;oe(b,c,k.j,k.i);"autorelaxed"==b.google_ad_format&&(k=O.C,oe(b,c,k.j,k.i));k=a.offsetWidth;a:{var m=b.google_ad_format;switch(l){default:case 1:l=Sd(c,k,m);b&&(b.google_responsive_formats=l);c=Pd(k,
l,c,a,Ud(c),K(S(c),O.B.i)||Md(c)||K(S(c),O.v.i));if(!c)throw new X("adsbygoogle.push() error: No slot size for availableWidth="+k);break a;case 2:if(c=Ld(Vd,Ad(k)),!c)throw new X("adsbygoogle.push() error: No autorelaxed size for width="+k+"px");}}b.google_ad_width=300<k&&300<c.G?c.H:1200<k?1200:Math.round(k);b.google_ad_height=c.height();a.style.height=c.height()+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else{d=ve(a,c)?(d=u(["LC","LE"],Ec))?"LE"==(b.google_responsive_override_logs_experiment=
d):!1:!1;if(d)try{var k=a.offsetWidth,m=Sd(c,k,"auto"),v=Pd(k,m,c,a,!0,!0),l=v?new ob(300<k&&300<v.G?v.H:1200<k?1200:Math.round(k),v.height()):null;b.google_ember_w=l?l.width:"x";b.google_ember_h=l?l.height:"x"}catch(E){b.google_ember_w=b.google_ember_h="e"}!za.test(b.google_ad_width)&&!ya.test(a.style.width)||!za.test(b.google_ad_height)&&!ya.test(a.style.height)?(l=pa(a,c),a.style.width=l.width,a.style.height=l.height,Dd(l,b),b.google_ad_width||(b.google_ad_width=a.offsetWidth),b.google_ad_height||
(b.google_ad_height=a.offsetHeight),b.google_loader_features_used=256):(Dd(a.style,b),b.google_ad_output&&"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height||(l=a.style.width,a.style.width="100%",k=a.offsetWidth,a.style.width=l,b.google_available_width=k));k=b.google_ad_width;l=b.google_ad_height;k&&l&&!fd[k+"x"+l]&&(l=u("CD ED CA EA CW EW".split(" "),Yb))&&("CD"==l?b.google_overflowing_ads_experiment=l:((k=/W$/.test(l)&&728>k)||(k=/^E/.test(l),m=R(c),a&&a.getBoundingClientRect&&
m&&m.getBoundingClientRect?(c=a.getBoundingClientRect(),m=m.getBoundingClientRect(),c=Math.min(c.right,m.right)-Math.max(c.left,m.left),c=Math.round(Math.max(0,c))):c=0,160>c||15>b.google_ad_width-c?a=!1:(m=a.style.width||"",a.style.width="100%",v=a.offsetWidth,160>v||0>c-v?(a.style.width=m,a=!1):(k?(b.google_ad_width=c,a.style.width=c+"px"):a.style.width=m,a=!0)),k=!a&&"ED"!=l),k||(b.google_overflowing_ads_experiment=l)))}}},we=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<
b.length;d=b[++c])if(pe(d)&&(!a||d.id==a))return d;return null},ue=!1,xe=function(a){var b={};I(Wc,function(c,e){a.hasOwnProperty(e)&&(b[e]=a[e])});ia(a.enable_page_level_ads)&&(b.page_level_pubvars=a.enable_page_level_ads);var c=document.createElement("ins");c.className="adsbygoogle";c.style.display="none";document.body.appendChild(c);re(c,{google_reactive_ads_config:b,google_ad_client:a.google_ad_client})},ye=function(a){if(!oa())throw new X("adsbygoogle.push() error: Page-level tag must be placed in top window.");
document.body?xe(a):Fb(Qb(function(){xe(a)}))},ze=function(a,b,c,d){if(0==b.message.indexOf("TagError")){var e={};Ka(w,e,d);e.context=a;e.msg=b.message.substring(0,512);a=p.document;e.url=a.URL.substring(0,512);e.ref=a.referrer.substring(0,512);Ea(Lb,"puberror",e,!0,c||.01);return!1}return w.u(a,b,c,d)},Ae=function(a,b,c,d){return 0==b.message.indexOf("TagError")?!1:w.u(a,b,c,d)},Ce=function(a){var b={};Nb("aa::hqe",ze,function(){Be(a,b)},function(c){c.client=c.client||b.google_ad_client||a.google_ad_client;
c.slotname=c.slotname||b.google_ad_slot;c.tag_origin=c.tag_origin||b.google_tag_origin})},Be=function(a,b){ma=(new Date).getTime();var c;a:{if(a.enable_page_level_ads){if("string"==typeof a.google_ad_client){c=!0;break a}throw new X("adsbygoogle.push() error: 'google_ad_client' is missing from the tag config.");}c=!1}if(c)ye(a);else{c=a.element;var d=a.params;d&&I(d,function(a,c){b[c]=a});if(c){if(!pe(c)&&(c=c.id?we(c.id):null,!c))throw new X("adsbygoogle.push() error: 'element' has already been filled.");
if(!("innerHTML"in c))throw new X("adsbygoogle.push() error: 'element' is not a good DOM element.");}else if(c=we(),!c)throw new X("adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.");re(c,b)}},De=function(){Nb("aa::main",Ae,function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:t(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=H.top.frames.google_top_static_frame?
!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=u(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],Xb),"jp_c"!==window.google_top_experiment){na(window,"message",yd);window.google_top_js_status=3;a={0:"google_loc_request",1:xd};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{Ce(a)}catch(e){throw window.setTimeout(De,0),e;}if(!d||
!d.loaded){window.adsbygoogle={push:Ce,loaded:!0};d&&Ee(d.onload);try{Object.defineProperty(window.adsbygoogle,"onload",{set:Ee})}catch(f){}}})},Ee=function(a){J(a)&&window.setTimeout(a,0)};De();}).call(this);
