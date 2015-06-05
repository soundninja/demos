/* This source code is Copyright (c) Vibrant Media 2001-2015 and forms part of the patented Vibrant Media product "IntelliTXT" (sm). */
$iTXT.js.loader["$iTXT.fx2.Fade2"]=true;$iTXT.fx2.Fade2_Load=function(){$iTXT.fx2.Fade2={};(function(exports){var timeouts={};var set_timeout=function(name,to_id){if(timeouts[name]){clearInterval(timeouts[name]);clearTimeout(timeouts[name]);}
timeouts[name]=to_id;};var clear_all_timeouts=function(){for(var i in timeouts){clearInterval(timeouts[i]);clearTimeout(timeouts[i]);}};var clear_timeout=function(name){clearInterval(timeouts[name]);clearTimeout(timeouts[name]);};var iv=-1;var tmo=-1;var fade=function(name,elmt,duration,options){var el=$iTXT.core.$(elmt);var from=1,to=0;var curr;var fader=function(val){curr=val;el.itxtOpacity(val);};var endfunc=(options&&options.onend?options.onend:null);if(options&&options.fadein){from=0;to=1;}
if(options&&options.from!==undefined&&options.to!==undefined){from=options.from;to=options.to;}
duration=Number(duration);var tween=new $iTXT.fx2.Tweens.Tween({duration:duration,endfunc:endfunc,from:from,stepfunc:fader,to:to,tween:$iTXT.fx2.Tweens.easers.easeIn});set_timeout(name+"_int",setInterval(tween.step,10));set_timeout(name+"_to",setTimeout(function(){if(options&&options.reset)el.itxtOpacity(1);clear_timeout(name+"_int");tween.finish();},duration+1));var kill=function(){clear_timeout(name+"_int");clear_timeout(name+"_to");return curr;};return kill;};var clearIEOpacity=function(el){el=$iTXT.core.$(el);if(typeof el.style.removeProperty=="function"){el.style.removeProperty("filter");return true;}else if(el.style.cssText){var styles=el.style.cssText;var st=styles.toLowerCase().indexOf("filter");var semi=styles.toLowerCase().indexOf(";",st);styles=styles.substr(0,st)+styles.substr(semi+1);el.style.cssText=styles;return true;}
return false;};exports.clearIEOpacity=clearIEOpacity;exports.fade=fade;}).call(this,$iTXT.fx2.Fade2);};$iTXT.js.loader["$iTXT.fx2.Tweens"]=true;$iTXT.fx2.Tweens_Load=function(){$iTXT.fx2.Tweens={};(function(exports){exports.easers={ease:function(now,fac){var easefac=1.4;if(fac!==undefined){easefac=fac;}
if(now>1)return 1;return Math.pow(now,easefac)*now;},linear:function(now){return now;},easeOut:function(now){return exports.easers.ease(now,-0.5);},easeIn:function(now){return exports.easers.ease(now,1.4);},easeInOut:function(now,fac){var easefac=2.2;if(fac!==undefined){easefac=fac;}
var from_one=1-now;return now+(Math.sin(now*Math.PI*2)/(Math.PI*easefac));}};var Tween=function(options){var now=(new Date()).getTime();var duration=(options&&options.duration)?options.duration:150;var finish=(options&&options.endfunc)?options.endfunc:function(){};var onstep=(options&&options.stepfunc)?options.stepfunc:function(){};var from=(options&&options.from!==undefined)?options.from:0;var to=(options&&options.to!==undefined)?options.to:1;var tween=(options&&options.tween)?options.tween:exports.easers.linear;var _map=function(curr){return curr*(to-from)+from;};var _normalise=function(curr){return curr/duration;};var step=function(){var t=new Date().getTime();var val=_map(tween(_normalise(t-now)));if(t>now+duration){finish(val);}else{onstep(val);}
return val;};return{step:step,finish:finish};};exports.Tween=Tween;}).call(this,$iTXT.fx2.Tweens);};