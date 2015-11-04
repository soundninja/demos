/*! UIkit 2.22.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit&&(i=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-slider",["uikit"],function(){return i||t(UIkit)})}(function(t){"use strict";var i,e,s,n,a={};return t.component("slider",{defaults:{center:!1,threshold:10,infinite:!0,autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0,activecls:"uk-active"},boot:function(){t.ready(function(i){setTimeout(function(){t.$("[data-uk-slider]",i).each(function(){var i=t.$(this);i.data("slider")||t.slider(i,t.Utils.options(i.attr("data-uk-slider")))})},0)})},init:function(){var o=this;this.container=this.element.find(".uk-slider"),this.focus=0,t.$win.on("resize load",t.Utils.debounce(function(){o.resize(!0)},100)),this.on("click.uikit.slider","[data-uk-slider-item]",function(i){i.preventDefault();var e=t.$(this).attr("data-uk-slider-item");if(o.focus!=e)switch(o.stop(),e){case"next":case"previous":o["next"==e?"next":"previous"]();break;default:o.updateFocus(parseInt(e,10))}}),this.container.on({"touchstart mousedown":function(r){r.originalEvent&&r.originalEvent.touches&&(r=r.originalEvent.touches[0]),r.button&&2==r.button||!o.active||(o.stop(),s=t.$(r.target).is("a")?t.$(r.target):t.$(r.target).parents("a:first"),n=!1,s.length&&s.one("click",function(t){n&&t.preventDefault()}),e=function(t){n=!0,i=o,a={touchx:parseInt(t.pageX,10),dir:1,focus:o.focus,base:o.options.center?"center":"area"},t.originalEvent&&t.originalEvent.touches&&(t=t.originalEvent.touches[0]),i.element.data({"pointer-start":{x:parseInt(t.pageX,10),y:parseInt(t.pageY,10)},"pointer-pos-start":o.pos}),o.container.addClass("uk-drag"),e=!1},e.x=parseInt(r.pageX,10),e.threshold=o.options.threshold)},mouseenter:function(){o.options.pauseOnHover&&(o.hovering=!0)},mouseleave:function(){o.hovering=!1}}),this.resize(!0),this.on("display.uk.check",function(){o.element.is(":visible")&&o.resize(!0)}),this.element.find("a,img").attr("draggable","false"),this.options.autoplay&&this.start()},resize:function(i){var e,s,n,a,o=this,r=0,h=0;return this.items=this.container.children().filter(":visible"),this.vp=this.element[0].getBoundingClientRect().width,this.container.css({"min-width":"","min-height":""}),this.items.each(function(i){e=t.$(this),a=e.css({left:"",width:""})[0].getBoundingClientRect(),s=a.width,n=e.width(),h=Math.max(h,a.height),e.css({left:r,width:s}).data({idx:i,left:r,width:s,cwidth:n,area:r+s,center:r-(o.vp/2-n/2)}),r+=s}),this.container.css({"min-width":r,"min-height":h}),this.options.infinite&&r<=2*this.vp&&!this.itemsResized?(this.container.children().each(function(t){o.container.append(o.items.eq(t).clone(!0).attr("id",""))}).each(function(t){o.container.append(o.items.eq(t).clone(!0).attr("id",""))}),this.itemsResized=!0,this.resize()):(this.cw=r,this.pos=0,this.active=r>=this.vp,this.container.css({"-ms-transform":"","-webkit-transform":"",transform:""}),i&&this.updateFocus(this.focus),void 0)},updatePos:function(t){this.pos=t,this.container.css({"-ms-transform":"translateX("+t+"px)","-webkit-transform":"translateX("+t+"px)",transform:"translateX("+t+"px)"})},updateFocus:function(t,i){if(this.active){i=i||(t>this.focus?1:-1);var e,s,n=this.items.eq(t);if(this.options.infinite&&this.infinite(t,i),this.options.center)this.updatePos(-1*n.data("center")),this.items.filter("."+this.options.activecls).removeClass(this.options.activecls),n.addClass(this.options.activecls);else if(this.options.infinite)this.updatePos(-1*n.data("left"));else{for(e=0,s=t;s<this.items.length;s++)e+=this.items.eq(s).data("width");if(e>this.vp)this.updatePos(-1*n.data("left"));else if(1==i){for(e=0,s=this.items.length-1;s>=0;s--)if(e+=this.items.eq(s).data("width"),e>=this.vp){t=s;break}this.updatePos(-1*this.items.eq(t).data("left"))}}this.focus=t,this.trigger("focusitem.uk.slider",[t,this.items.eq(t),this])}},next:function(){var t=this.items[this.focus+1]?this.focus+1:this.options.infinite?0:this.focus;this.updateFocus(t,1)},previous:function(){var t=this.items[this.focus-1]?this.focus-1:this.options.infinite?this.items[this.focus-1]?this.items-1:this.items.length-1:this.focus;this.updateFocus(t,-1)},start:function(){this.stop();var t=this;this.interval=setInterval(function(){t.hovering||t.next()},this.options.autoplayInterval)},stop:function(){this.interval&&clearInterval(this.interval)},infinite:function(t,i){var e,s=this,n=this.items.eq(t),a=t,o=[],r=0;if(1==i){for(e=0;e<this.items.length&&(a!=t&&(r+=this.items.eq(a).data("width"),o.push(this.items.eq(a))),!(r>this.vp));e++)a=a+1==this.items.length?0:a+1;o.length&&o.forEach(function(t){var i=n.data("area");t.css({left:i}).data({left:i,area:i+t.data("width"),center:i-(s.vp/2-t.data("cwidth")/2)}),n=t})}else{for(e=this.items.length-1;e>-1&&(r+=this.items.eq(a).data("width"),a!=t&&o.push(this.items.eq(a)),!(r>this.vp));e--)a=a-1==-1?this.items.length-1:a-1;o.length&&o.forEach(function(t){var i=n.data("left")-t.data("width");t.css({left:i}).data({left:i,area:i+t.data("width"),center:i-(s.vp/2-t.data("cwidth")/2)}),n=t})}}}),t.$doc.on("mousemove.uikit.slider touchmove.uikit.slider",function(t){if(t.originalEvent&&t.originalEvent.touches&&(t=t.originalEvent.touches[0]),e&&Math.abs(t.pageX-e.x)>e.threshold&&(window.getSelection().toString()?i=e=!1:e(t)),i){var s,n,o,r,h,c,f,u,d,l;if(t.clientX||t.clientY?s=t.clientX:(t.pageX||t.pageY)&&(s=t.pageX-document.body.scrollLeft-document.documentElement.scrollLeft),h=a.focus,n=s-i.element.data("pointer-start").x,o=i.element.data("pointer-pos-start")+n,r=s>i.element.data("pointer-start").x?-1:1,c=i.items.eq(a.focus),1==r)for(f=c.data("left")+Math.abs(n),u=0,d=a.focus;u<i.items.length;u++){if(l=i.items.eq(d),d!=a.focus&&l.data("left")<f&&l.data("area")>f){h=d;break}d=d+1==i.items.length?0:d+1}else for(f=c.data("left")-Math.abs(n),u=0,d=a.focus;u<i.items.length;u++){if(l=i.items.eq(d),d!=a.focus&&l.data("area")<=c.data("left")&&l.data("center")<f){h=d;break}d=d-1==-1?i.items.length-1:d-1}i.options.infinite&&h!=a._focus&&i.infinite(h,r),i.updatePos(o),a.dir=r,a._focus=h,a.touchx=parseInt(t.pageX,10),a.diff=f}}),t.$doc.on("mouseup.uikit.slider touchend.uikit.slider",function(){if(i){i.container.removeClass("uk-drag"),i.items.eq(a.focus);var t,s,n,o=!1;if(1==a.dir)for(s=0,n=a.focus;s<i.items.length;s++){if(t=i.items.eq(n),n!=a.focus&&t.data("left")>a.diff){o=n;break}n=n+1==i.items.length?0:n+1}else for(s=0,n=a.focus;s<i.items.length;s++){if(t=i.items.eq(n),n!=a.focus&&t.data("left")<a.diff){o=n;break}n=n-1==-1?i.items.length-1:n-1}i.updateFocus(o!==!1?o:a._focus)}i=e=!1}),t.slider});