(function(){var b=(/msie/i).test(navigator.userAgent)&&!(/opera/i).test(navigator.userAgent);var a=window.soundcloud={version:"0.1",debug:false,_listeners:[],_redispatch:function(c,n,g){var j,m=this._listeners[c]||[],d="soundcloud:"+c;try{j=this.getPlayer(n)}catch(k){if(this.debug&&window.console){console.error("unable to dispatch widget event "+c+" for the widget id "+n,g,k)}return}if(window.jQuery){jQuery(j).trigger(d,[g])}else{if(window.Prototype){$(j).fire(d,g)}else{}}for(var h=0,f=m.length;h<f;h+=1){m[h].apply(j,[j,g])}if(this.debug&&window.console){console.log(d,c,n,g)}},addEventListener:function(c,d){if(!this._listeners[c]){this._listeners[c]=[]}this._listeners[c].push(d)},removeEventListener:function(e,g){var f=this._listeners[e]||[];for(var d=0,c=f.length;d<c;d+=1){if(f[d]===g){f.splice(d,1)}}},getPlayer:function(f){var c;try{if(!f){throw"The SoundCloud Widget DOM object needs an id atribute, please refer to SoundCloud Widget API documentation."}c=b?window[f]:document[f];if(c){if(c.api_getFlashId){return c}else{throw"The SoundCloud Widget External Interface is not accessible. Check that allowscriptaccess is set to 'always' in embed code"}}else{throw"The SoundCloud Widget with an id "+f+" couldn't be found"}}catch(d){}},onPlayerReady:function(c,d){this._redispatch("onPlayerReady",c,d)},onMediaStart:function(c,d){this._redispatch("onMediaStart",c,d)},onMediaEnd:function(c,d){this._redispatch("onMediaEnd",c,d)},onMediaPlay:function(c,d){this._redispatch("onMediaPlay",c,d)},onMediaPause:function(c,d){this._redispatch("onMediaPause",c,d)},onMediaBuffering:function(c,d){this._redispatch("onMediaBuffering",c,d)},onMediaSeek:function(c,d){this._redispatch("onMediaSeek",c,d)},onMediaDoneBuffering:function(c,d){this._redispatch("onMediaDoneBuffering",c,d)},onPlayerError:function(c,d){this._redispatch("onPlayerError",c,d)}}})();