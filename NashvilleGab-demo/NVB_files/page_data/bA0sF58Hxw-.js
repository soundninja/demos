/*!CK:1452396676!*//*1444807170,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["FgyOo"]); }

__d('destroyOnUnload',['Run'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){h.onLeave(j);}f.exports=i;},null);
__d('JSLogger',['lowerFacebookDomain'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={MAX_HISTORY:500,counts:{},categories:{},seq:0,pageId:(Math.random()*2147483648|0).toString(36),forwarding:false};function j(o){if(o=='/'||o.indexOf('/',1)<0)return false;var p=/^\/(v\d+\.\d\d?|head)\//.test(o);if(p)return (/^\/(dialog|plugins)\//.test(o.substring(o.indexOf('/',1))));return (/^\/(dialog|plugins)\//.test(o));}function k(o){if(o instanceof Error&&b.ErrorUtils)o=b.ErrorUtils.normalizeError(o);try{return JSON.stringify(o);}catch(p){return '{}';}}function l(o,event,p){if(!i.counts[o])i.counts[o]={};if(!i.counts[o][event])i.counts[o][event]=0;p=p==null?1:Number(p);i.counts[o][event]+=isFinite(p)?p:0;}i.logAction=function(event,o,p){if(this.type=='bump'){l(this.cat,event,o);}else if(this.type=='rate'){o&&l(this.cat,event+'_n',p);l(this.cat,event+'_d',p);}else{var q={cat:this.cat,type:this.type,event:event,data:o!=null?k(o):null,date:Date.now(),seq:i.seq++};i.head=i.head?i.head.next=q:i.tail=q;while(i.head.seq-i.tail.seq>i.MAX_HISTORY)i.tail=i.tail.next;return q;}};function m(o){if(!i.categories[o]){i.categories[o]={};var p=function(q){var r={cat:o,type:q};i.categories[o][q]=function(){i.forwarding=false;var s=null;if(h.isValidDocumentDomain())return;s=i.logAction;if(j(location.pathname)){i.forwarding=false;}else try{s=b.top.require('JSLogger')._.logAction;i.forwarding=s!==i.logAction;}catch(t){}s&&s.apply(r,arguments);};};p('debug');p('log');p('warn');p('error');p('bump');p('rate');}return i.categories[o];}function n(o,p){var q=[];for(var r=p||i.tail;r;r=r.next)if(!o||o(r)){var s={type:r.type,cat:r.cat,date:r.date,event:r.event,seq:r.seq};if(r.data)s.data=JSON.parse(r.data);q.push(s);}return q;}f.exports={_:i,DUMP_EVENT:'jslogger/dump',create:m,getEntries:n};},null);
__d('VideosRenderingInstrumentation',['DataStore'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={storeRenderTime:function(j){var k=Date.now();h.set(j,'videos_rendering_instrumentation',k);return k;},retrieveRenderTime:function(j){var k=h.get(j,'videos_rendering_instrumentation',NaN);if(Number.isNaN(k))k=i.storeRenderTime(j);return k;}};f.exports=i;},null);
__d('DisplayTimeEmbeddedVideoPlayButton',['CSS','DataStore','Event','cx','VideoPlayerExperiments'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={},n={register:function(o){var p=o.id;m[p]=j.listen(o,'click',function(){if(n.isClicked(o)){if(l.redesign){h.removeClass(o,"_3alj");}else h.removeClass(o,"_5dz2");h.addClass(o,"_5dz0");i.set(o,'clicked',false);}else{h.removeClass(o,"_5dz0");if(l.redesign){h.addClass(o,"_3alj");}else h.addClass(o,"_5dz2");i.set(o,'clicked',true);}});},unregister:function(o){if(m.hasOwnProperty(o))m[o].remove();},isClicked:function(o){return i.get(o,'clicked',false);}};f.exports=n;},null);