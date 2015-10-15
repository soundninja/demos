/*! scripts/tumblr.js */
(typeof Tumblr!=="undefined")||(Tumblr={});
/*! scripts/tumblr/post_message_listener.js */
Tumblr.PostMessageListener=(function(){return{initialize:function(d){d=d||function(){};var c=window.addEventListener?"addEventListener":"attachEvent";var b=window[c];var a=c=="attachEvent"?"onmessage":"message";b(a,function(g){var f=(g.data&&g.data.split)?g.data.split(";"):[""];d(f,g.origin)},false)}}})();
/*! scripts/tumblr/teaser_iframe.js */
(function(k,d,c){var g=function(m,l){if(!m){m=document.location.href}var n=m.replace(/^[^\/]+\/\/([^\/]+).*/i,"$1");var p=n.split(".");if(p.length<2){return n}var o=p.slice(l?1:-2).join(".");if(o.toLowerCase()==="tumblr.net"){return n}return o};var f=function(){var l={};window.location.hash.replace(/[#?&]+([^=&]+)(=[^&]*)?/gi,function(n,o,p){if(typeof p==="undefined"){l[o]=true}else{l[o]=p.substring(1);if(l[o].indexOf("/")!==-1){l[o]=encodeURIComponent(l[o])}}});window.location.search.replace(/[?&]+([^=&]+)(=[^&]*)?/gi,function(n,o,p){l[o]=(p===undefined)?true:p.substring(1)});return l};var i=function(n,l,m){if(!m){m=parent}if(typeof n!=="string"){n=n.join(";")}if(m!==window){m.postMessage(n,l)}};var b=g();var h=(b.toLowerCase()!=="tumblr.com"?"https://"+b:"https://www.tumblr.com");var a=f();var j=decodeURIComponent(a.src);var e={initialize:function(){this.jqXHR=false;this.posts=[];this.current_post=false;this.cache_selectors();this.$body.addClass("inactive");this.link=h+"/register/get_started?referring_blog="+decodeURIComponent(a.name);this.$get_started.attr("href",this.link);Tumblr.PostMessageListener.initialize(k.bind(this.post_message_event,this));this.bind_events();if(window.parent!==window){this.hide()}else{this.show()}},cache_selectors:function(){this.$fullscreen_post_bg=d("#fullscreen_post_bg");this.$fullscreen_post_image=d("#fullscreen_post_image");this.$by_tumblelog=d("#by_tumblelog");this.$by_avatar_link=d("#by_avatar_link");this.$by_avatar=d("#by_avatar");this.$get_started=d("#get_started");this.$body=d(document.body)},bind_events:function(){var l=this;var m=function(){i(["teaser_iframe","close",(document.location.protocol+"//"+document.location.host)],decodeURIComponent(j),window.parent)};this.$fullscreen_post_image.on("load",function(){l.$body.removeClass("loading");l.$body.on("click",function(){d(document).off("mouseleave");window.parent.location.href=l.link})});d(document).on("mouseleave",function(){m()})},unbind_events:function(){this.$fullscreen_post_image.off("load");d(document).off("mouseleave")},post_message_event:function(m,l){if(m[0]!=="teaser"||m.length<2){return}switch(m[1]){case"refresh":this.prepare_next_post();return;case"show":this.show();return;case"hide":this.hide();return}},prepare_next_post:function(){if(!this.posts.length){return this.load_posts(true)}this.current_post=this.posts.shift();this.set_post(this.current_post);if(!this.posts.length){return this.load_posts(false)}},load_posts:function(l){if(this.jqXHR){return}this.jqXHR=d.ajax({type:"get",url:h+"/svc/teaser",success:k.bind(function(m){if(!m.length){if(console&&console.log){console.log("No posts returned!")}return}this.posts=m;if(l){this.prepare_next_post()}},this),complete:k.bind(function(m){this.jqXHR=false},this)})},set_post:function(l){this.$body.addClass("loading");this.$by_tumblelog.attr("href",l.tumblelog.url).text(l.tumblelog.name);this.$by_avatar_link.attr("href",l.tumblelog.url).css("background-image","url('"+l.tumblelog.avatar+"')");this.$by_avatar.attr({src:l.tumblelog.avatar,alt:l.tumblelog.name});this.$fullscreen_post_bg.css("background-image","url('"+l.post.media_url+"')");this.$fullscreen_post_image.attr("src",l.post.media_url).each(function(){if(this.complete||this.naturalWidth||this.naturalHeight){d(this).load()}})},show:function(){if(!this.posts.length){this.load_posts(true)}this.$body.removeClass("inactive waiting")},hide:function(){this.$body.addClass("waiting")}};c.TeaserIframe=e})(_,jQuery,Tumblr);