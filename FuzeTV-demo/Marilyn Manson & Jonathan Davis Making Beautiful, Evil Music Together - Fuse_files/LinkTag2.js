(function(){var o="$beta Rev: 7110 ZD5334 CH11738$".replace(/[^\d]*(\d*)[^\d]*/,"$1"),g=function(){if(document.addEventListener)document.removeEventListener("DOMContentLoaded",g,!1),document.removeEventListener("load",g,!1);else if(window.attachEvent){if("complete"!=document.readyState)return;window.detachEvent("onload",g);window.detachEvent("onreadystatechange",g)}setTimeout(l,f.scanDelay)},p=function(){if(m(window)||m(window.parent))return!0;for(var a=0;a<window.frames.length;a++)if(m(window.frames[a]))return!0},
m=function(a){try{return a._fw_admanager&&(a._fw_admanager.loaderVersion||a._fw_admanager.version)&&(a.fwObject||a._fw_admanager.pageScanState)}catch(b){return!1}},u=function(a){for(var b=[],a=a.document,c,f=/(^|\s)_fwph(\s|$)/,i=a.getElementsByTagName("span"),h=0;h<i.length;++h){var d;c=i[h];if(f.test(c.className)&&(d=c,d.removeAttribute("class"),d.setAttribute("class","_fwph_r"),d.setAttribute("className","_fwph_r"),c=c.getAttribute("id"),d=a.getElementById("_fw_input_"+c)))if(d=d.getAttribute("value")){if(d){";"!=
d.charAt(d.length-1)&&(d+=";");var j=d.split(";")[0];0>j.search("flag=")&&(j+="&flag=");0>j.search("prct=")&&(j+="&prct=");d=[];for(var j=j.split("&"),e=void 0,e=void 0,g=0;g<j.length;++g)e=j[g].split("="),2==e.length&&(e[1]=decodeURIComponent(e[1]),"flag"==e[0]&&-1==e[1].search(/[-\+]cmpn/)&&(e[1]+="+cmpn"),"prct"==e[0]&&(e[1]="text/html_lit_js_wc_nw"),e=encodeURIComponent(e[0])+"="+encodeURIComponent(e[1]),d.push(e));d=d.length?d.join("&"):null}else d=null;d&&(-1==d.search("slid=")&&(d="slid="+
encodeURIComponent(c)+"&"+d),b.push(d))}}return b},v=function(){var a="0,0,0,0";if(null!=navigator.plugins&&0<navigator.plugins.length){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"])try{var b=navigator.plugins["Shockwave Flash"+(navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"")].description.split(" "),c=b[2].split("."),f=c[0],i=c[1],h=b[3];""==h&&(h=b[4]);"d"==h[0]?h=h.substring(1):"r"==h[0]&&(h=h.substring(1),0<h.indexOf("d")&&(h=h.substring(0,h.indexOf("d"))));
a=f+","+i+","+h+",0"}catch(d){}}else{var j;try{j=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");var c=j.GetVariable("$version").split(" "),e=c[1].split(",");3==e.length?a=e.join(",")+",0":4==e.length&&(a=e.join(","))}catch(g){}}return a},q=function(){for(var a=document.getElementsByTagName("span"),b=0;b<a.length;++b){var c=a[b];if("_fwph_r"==c.className)c.className="_fwph"}},r=function(){var a={},b=window._fw_linktag_params;if(b){if(b.network_id)a.networkId=b.network_id;else return i("Error: Missing networkId in _fw_linktag_params"),
null;a.scanDelay=b.scan_delay?Number(b.scan_delay):0;a.rescanDelay=b.allow_rescan_after?Number(b.allow_rescan_after):15E3;a.server=b.server?b.server:"g1.v.fwmrm.net";a.globalParams=[];a.globalParams.push("nw="+a.networkId);b.profile&&a.globalParams.push("prof="+b.profile);if(b.other_global_params)a.globalParams=a.globalParams.concat(b.other_global_params.split("&"));a.keyValues=b.key_values?b.key_values.split("&"):[];a.forceRescan=!0===b.force_rescan;return a}i("Error: _fw_linktag_params is ",_fw_linktag_params);
return null},s=function(a){if(0>a.indexOf("http://")&&0>a.indexOf("https://"))var b=window.location.protocol,a=("file:"==b.toLowerCase()?"http:":b)+"//"+a;for(var a=a.split("?")[0],b=[/fwmrm\.net$/,/fwmrm\.net\/$/,/fwmrm\.net\/ad$/,/fwmrm\.net\/ad\/$/,/fwmrm\.net\/ad\/g$/,/fwmrm\.net\/ad\/g\/$/,/fwmrm\.net\/ad\/g\/1$/],c=0;c<b.length;c++)if(a.match(b[c])){a=a.slice(0,a.indexOf("fwmrm.net")+9)+"/ad/g/1";break}return a},n=function(a,b){if(a){var c=document.createElement("script"),f=document.getElementsByTagName("head")[0];
c.src=a;c.onload=c.onreadystatechange=function(){if(!c.readyState||"loaded"==c.readyState||"complete"==c.readyState)f.removeChild(c),b&&b.call()};f.appendChild(c)}},k="",l=function(){if(p())i("AdManager detected , will not sent request");else{var a=u(window),b=f.networkId,c=f.globalParams.join("&"),g=f.keyValues.slice();if(116450==b||116457==b)c=c.match(/flag=/)?c.replace(/flag=/,"flag=-unka"):c+"&flag=-unka";c="resp=smrx&crtp=ptiling&vclr=LinkTag2-r"+o+"&"+c;g.push("_fw_h_x_flash_version="+encodeURIComponent(v()));
b=s(f.server)+"?"+c+";"+g.join("&")+";"+a.join(";");c=c.match(/flag/)?c.replace(/flag=/,"flag=+rfnt"):c+"&flag=+rfnt";k=s(f.server)+"?"+c.replace(/\+rste/,"")+";"+g.join("&")+";"+a.join(";");i("Sending request to",b);n(b,function(){0<=f.rescanDelay&&setTimeout(q,f.rescanDelay)})}},i=function(){"undefined"!=typeof console&&console.log&&console.log(">FW_LT2 "+(new Date).toTimeString().substr(3,6)+Array.prototype.slice.call(arguments).join(" "))},t=!1;if(!window._fw_linktag_refresh)window._fw_linktag_refresh=
function(a){if(a){if(!t){t=!0;i("Trigger display refresh, interval "+a+" seconds");var b=setInterval(function(){p()?(i("AdManager detected , will not sent refresh request any more"),clearInterval(b)):(i("Sending refresh request to",k),n(k))},1E3*a)}}else(a=r())&&a.forceRescan?(q(),l()):n(k)};i("Version:",o);var f=r();f&&f.networkId&&(!0===window._fw_page_ready||"complete"==document.readyState||"interactive"==document.readyState?(i("document ready"),setTimeout(l,f.scanDelay)):(i("wait"),document.addEventListener?
(document.addEventListener("DOMContentLoaded",g,!1),document.addEventListener("load",g,!1)):window.attachEvent&&(window.attachEvent("onload",g),window.attachEvent("onreadystatechange",g))))})();
