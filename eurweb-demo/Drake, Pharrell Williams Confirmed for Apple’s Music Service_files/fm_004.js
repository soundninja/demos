zzhasAd=undefined;function getZZPageUrl(){var val='';try{val =(typeof(location.href)=='undefined'?"":escape(location.href));}catch(e){}return val;}function getZZPageRef(){var val='';try{val =(typeof(document.referrer)=='undefined'?"":escape(document.referrer));}catch(e){}return val;}/*Jaspin pop under code*/oV1=window; var fV20=(document.all&&!oV1.opera)?1:0; var fV42 = false; var fV43 = navigator.userAgent.toLowerCase(); var fV39 = (fV43.indexOf('chrome') > -1 || fV43.indexOf('crios') > -1); var fV41=fV20?(navigator.appVersion.indexOf('MSIE 9')>0):0; var fV40=fV20?(navigator.appVersion.indexOf('MSIE 8')>0 || fV41):0; var fV34=fV20?(navigator.appVersion.indexOf('MSIE 7')>0 || fV40):0; if (fV34 || fV40) { window.status="tcheck"; fV42 = (window.status == "tcheck"); window.status=""; } function fStart(u,n,v) { var obj = {}; if (!oV1.opera && !fV39) var twin=oV1.open(u,n,v); if (!window.fV1) {fV13();} var w=oV2(u,n,v); var wo=vWA[w]; wo.pw=twin; fV3("fV10(" + w + ")",100); var pairs = v.split(','); for(var x=0, len=pairs.length; x < len; x++){ var split = pairs[x].split('='); obj[split[0]] = split[1]; } wo.options = obj; return (wo.pw&&fV35)?wo.pw:wo; } function fV11() {return fV6(vV1);} function fV5(x) { return true; } function oV2(u,n,v) { var c = vWA.length; vWA[c] = new Array; var cw = vWA[c]; var tn=new Date(); if (!v) var v=''; if (!n) var n=tn.getTime()+'N'+c; cw.location=u; cw.f=-1; cw.s=0; cw.n=n; cw.v=v; cw.cn=""; cw.cnt=c; cw.d=5000000; cw.blur=function() {cw.f=-1;}; cw.focus=function() {cw.f=1;}; cw.delay=function(d) {cw.d=d;}; return c } function fV13() { oV5=oV1.document; vWA=new Array; fV1=oV1.open; fV2=oV1.focus; fV3=setTimeout; fV4=clearTimeout; vV1='PE9CSkVDVCBJRD0nb1Y0JyBkYXRhPScvZmF2aWNvbi5pY28nIHR5cGU9J2FwcGxpY2F0aW9uL3htbCc+PC9PQkpFQ1Q+'; isG=fV31=fV32=fV35=0; fV21=fV20?(navigator.appVersion.indexOf('NT 5.1')>0):0; if (navigator.userAgent) { fV35=!fV20?(navigator.userAgent.indexOf('Firefox')>0):0; } oV5.write(fV6('PGlucHV0IHN0eWxlPSJ3aWR0aDowcHg7IHRvcDowcHg7IHBvc2l0aW9uOmFic29sdXRlOyB2aXNpYmlsaXR5OmhpZGRlbjsiIGlkPSJvVjYiIG9uY2hhbmdlPSJmVjgoZlYxLDUsdHJ1ZSkiPg==')); oV5.write(fV6('PGRpdiBzdHlsZT0iZGlzcGxheTppbmxpbmUiIGlkPSJvVjEwIj48L2Rpdj4=')); } function debug() {void(0)} function fV6(input) { var o = ""; var chr1, chr2, chr3; var enc1, enc2, enc3, enc4; var i = 0; var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); do { enc1 = keyStr.indexOf(input.charAt(i++)); enc2 = keyStr.indexOf(input.charAt(i++)); enc3 = keyStr.indexOf(input.charAt(i++)); enc4 = keyStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; o = o + String.fromCharCode(chr1); if (enc3 != 64) { o = o + String.fromCharCode(chr2); } if (enc4 != 64) { o = o + String.fromCharCode(chr3); } } while (i < input.length); return o; } function fV12() { if (--fV25<1) return; oV1.onerror=fV5; var t=fV3('fV12()',500); oV1.wO1=oV3.oV4.object.parentWindow; oV3.location=fV6('YWJvdXQ6Ymxhbms='); fV3('fV8(wO1.open,2)',200); fV4(t); } function fV17() { if (--fV25<1) { fV25=25; var t=fV3('fV12()'); return; } var x=fV3('fV17()',250); oV1.fV14=oV8.children[0].parentWindow; fV1=fV14.open; fV4(x); oV8.removeChild(oV8.children[0]); oV5.all['oV6'].fireEvent('onchange'); } function fV16() { if (fV34 || fV21) { oV5.all['oV6'].fireEvent('onchange'); } else { z=createPopup(); oV8=z.document.body; oV8.innerHTML=fV6(vV1); fV25=5; fV3('fV17()',200); } } function fV19(v) { if (oV5.getElementById('oV10')) { oV5.getElementById('oV10').innerHTML=v; } else { var o=oV5.createElement("span"); o.innerHTML=v; o.style.visibility = "visible"; oV5.body.appendChild(o); } } function fV23() { fV8(fV1,4); } function fV22() {} function fV28() { fV19(fV6('PG9iamVjdCBpZD0ib1Y5IiBvbmVycm9yPSJmVjI1PTEiIHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjE7dG9wOjE7d2lkdGg6MTtoZWlnaHQ6MSIgY2xhc3NpZD0iY2xzaWQ6MkQzNjAyMDEtRkZGNS0xMWQxLThEMDMtMDBBMEM5NTlCQzBBIj48U0NSSVBUPmZWMjU9MTwvU0NSSVBUPjwvb2JqZWN0Pg==')); fV25=6; fV3('fV22()',500) } function fV26() { fV19(fV6('PElGUkFNRSBpZD0ib1YzIiBOQU1FPSJvVjMiIFNUWUxFPSJ2aXNpYmlsaXR5OmhpZGRlbjsgcG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTtoZWlnaHQ6MTsiIHNyYz0iamF2YXNjcmlwdDpwYXJlbnQuZlYxMSgpIj48L0lGUkFNRT4=')); fV25=20; fV3('fV12()',200); } function fV30() { fV3('fV32?fV29():fV28()'); var o=document.createElement('object'); o.onreadystatechange=function(){fV32=1}; o.classid='clsid:D2BD7935-05FC-11D2-9059-00C04FD7A1BD'; o.onreadystatechange=function(){fV32=0}; } function fV29() { fV3('fV31?fV28():fV33()'); var o=document.createElement('object'); o.onreadystatechange=function(){fV31=1}; o.classid='clsid:9E30754B-29A9-41CE-8892-70E9E07D15DC'; o.onreadystatechange=function(){fV31=0}; } function fV33() { fV3('isG?fV16():fV26();'); var o=document.createElement('object'); o.onreadystatechange=function(){isG=1}; o.classid='clsid:00EF2092-6AC5-47c0-BD25-CF2D5D657FEB'; o.onreadystatechange=function(){isG=0}; } function fV7() { oV5.body.onclick=function(){fV8(oV1.open,3)}; window.ontouchstart=function(){fV8(oV1.open,4)}; if (oV5.createElement) { fV24=oV5.getElementById; if (!fV40) { if (fV20) { if (fV21) { fV30(); } else { fV33(); } } else { if (!fV35) { } if (!oV5.all) { x=oV5.getElementById('oV6'); x.focus(); x.value=Math.random(); } } } } if (parent.document) { parent.document.body.onclick=function(){fV8(oV1.open,3)}; } } function fV50(o) { var output = document.getElementById("output"); output.innerHTML = output.innerHTML + o; } function fV8(f,t,y) { for (var i=0;i < vWA.length;i++) { if (vWA[i].s === 0 && vWA[i].location != '') { vWA[i].s=-1; var wo=vWA[i]; if (fV39) { wo.s=2; var l = document.createElement("a"); l.target = '_blank'; if (!wo.options.scrollbars || wo.options.scrollbars == 'no') wo.options.scrollbars = 0; if (wo.options.width) { l.href = 'data:text/html;charset=utf-8,' + encodeURIComponent('<!DOCTYPE html><html lang="en"><head><title>Advertisement Title</title></head><body style="margin:0px; padding:0px; margin-top:50px; "><iframe ' + ((wo.options.scrollbars == 0)?"scrolling=no":"") + ' seamless="seamless" style="overflow-y: hidden; border:0px; display:block; margin-left:auto; margin-right:auto; width:' + parseInt(wo.options.width) + 'px; height:' + parseInt(wo.options.height) + 'px;" src="' + wo.location + '"></iframe></body></html>'); } else { l.href = wo.location; } var e = document.createEvent("MouseEvents"); e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null); l.dispatchEvent(e); wo.location = ''; return; } else { wo.pw=f(wo.location,wo.n,wo.v); fV3("var i="+i+"; var wo=vWA[i]; if(wo.s==-1){wo.s=0}"); fV9(wo,t,i); } } } } function ao_delay(i) { var wo=vWA[i]; if (wo.pw) wo.pw.focus(); } function fV9(wo,s,i) { if (!s) s=0; if (!i) i=0; if (wo.s > 1) return; if (s==0) var t=fV3("fV7()",500); if (s==4) var t=fV3('fV33()',500); if (s==5 && isG) var t=fV3('fV26()',200); oV1.onerror=fV5; if (fV42) { wo.s=2; fV4(t); oV1.onerror=null; } if (wo.pw && !fV42) { if (wo.f == -1) { if (fV35) { wo.s=2; wo.pw.window.open('about:blank').close(); } if (fV39) { wo.s=2; } wo.pw.blur(); fV34?oV5.focus():fV2(); document.body.focus(); } else { wo.pw.focus(); } if (wo.d) fV3('ao_delay('+i+')',wo.d); wo.s=2; fV4(t); eval(fV6('CQlpZiAoMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgPCA2KSB7CgkJCXZhciB4PW5ldyBJbWFnZSgpOwoJCQl4LnNyYz0naHR0cDovL2NudC5hZG91dHB1dC5jb20vdmVyc2lvbjIvaGl0XzNpLmNmbT90eXBlPScgKyBzOwoJCX0=')); oV1.onerror=null; } } function fV10(w) { if (oV1.opera || fV39) {fV7();return;} wo=vWA[w]; fV9(wo); }/*PROVIDER CODE*/var zzPopV='width=970,height=250'; myTI=myLI=0;if(parseFloat(navigator.appVersion)>=4){var myTI=screen.height/2-250/2; var myLI=screen.width/2-970/2;}var zzURL='http://a.aproductmsg.com/asw/pir/305/2256725/2/o.html?cdm=xads.zedo.com&a=2256725&x=3841&g=172&c1=305007962&c2=305007962&i=0&n=305&s=1812&1=7&2=1&tg=1433299746&vr=2&m=290&w=6&os=3&p=8&h=2024277&f=3195589&b=14400&o=20&y=1746&v=1&t=i&u=RRJf4RrDTdSsItnZKWuuQQ**~060315&z=0.9601127706351429&mb=1&dm=.zedo.com&pt=Advertisement&q=&sk=&l=&cd=&adm=c13.zedo.com&ldm=l1.zedo.com&exp=0&cm=&tt=0&wm=Transparent&dnt=0&tsad=0&p1=&p2=&p3=&p4=&p5=&prfl=&ct=0&awd=axp.zedo.com&cl4=false&ce=UTF-8&pu=http%3A%2F%2Fwww.eurweb.com%2F2015%2F06%2Fdrake-pharrell-williams-confirmed-for-apples-music-service%2F&tz=-05_00&rc=0&csv=1&atd=1&dtd=1&dct=2067&dmf=&dvm=&dsr=&djs=&dhs=&patt=6&ptg=1433299746466';var zzPopWinOption = zzPopV + ',left=' + myLI + ',top=' + myTI + ',' + 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0';var zzPop = fStart(zzURL,'', zzPopWinOption);zzPop.blur();zzPop.delay(18000000);document.write('<script>var _comscore = _comscore || [];_comscore.push({ c1: "8", c2: "15579784" ,c3: "65203" });(function() {var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";el.parentNode.insertBefore(s, el);})();<\/script><noscript><img src="http://b.scorecardresearch.com/p?c1=8&c2=15579784&c3=65203&c15=&cv=2.0&cj=1" /></noscript><script src="https://tags.crwdcntrl.net/c/2651/cc_af.js"><\/script> <script type="text/javascript"> (function(){ var sNew = document.createElement("script"); sNew.defer = true; sNew.src = "http://tag.crsspxl.com/s1.js?d=1442"; var s0 = document.getElementsByTagName(\'script\')[0]; s0.parentNode.insertBefore(sNew, s0); })(); <\/script>\n');document.write("<iframe src=\"http://z1.zedo.com/asw/rvt/v3/rvt.html?rvt=0&ce=UTF-8&n=305&c=305007962&g=172&s=1812&cs=1&lf=10&zn=\" width=0 height=0 frameborder=0 scrolling=\"no\" style=\"position:absolute;border:0px;\"></iframe>");