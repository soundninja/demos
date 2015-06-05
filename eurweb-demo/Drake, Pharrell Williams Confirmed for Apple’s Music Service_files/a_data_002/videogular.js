"use strict";angular.module("com.zedo.videogular",["ngSanitize"]).constant("VG_STATES",{PLAY:"PLAYING",PAUSE:"PAUSED",STOP:"IDLE"}).constant("VG_EVENTS",{ON_PLAY:"onVgPlay",ON_PAUSE:"onVgPause",ON_PLAY_PAUSE:"onVgPlayPause",ON_START_PLAYING:"onVgStartPlaying",ON_COMPLETE:"onVgComplete",ON_SET_STATE:"onVgSetState",ON_MUTE:"onVgMute",ON_SET_VOLUME:"onVgSetVolume",ON_TOGGLE_FULLSCREEN:"onVgToggleFullscreen",ON_ENTER_FULLSCREEN:"onVgEnterFullscreen",ON_EXIT_FULLSCREEN:"onVgExitFullscreen",ON_BUFFERING:"onVgBuffering",ON_UPDATE_TIME:"onVgUpdateTime",ON_SEEK_TIME:"onVgSeekTime",ON_UPDATE_SIZE:"onVgUpdateSize",ON_UPDATE_THEME:"onVgUpdateTheme",ON_PLAYER_READY:"onVgPlayerReady",ON_SOURCE_CHANGE:"onVgSourceChange",ON_LOAD_POSTER:"onVgLoadPoster",ON_PLAYER_INIT:"onVgPlayerInit",ON_ERROR:"onVgError"}).service("VG_UTILS",function(){this.fixEventOffset=function(a){if(navigator.userAgent.match(/Firefox/i)){var b=a.currentTarget.currentStyle||window.getComputedStyle(a.target,null),c=parseInt(b.borderLeftWidth,10),d=parseInt(b.borderTopWidth,10),e=a.currentTarget.getBoundingClientRect(),f=a.clientX-c-e.left,g=a.clientY-d-e.top;a.offsetX=f,a.offsetY=g}return a},this.getZIndex=function(){var a=1;return angular.element("*").filter(function(){return"auto"!==angular.element(this).css("zIndex")}).each(function(){var b=parseInt(angular.element(this).css("zIndex"));b>a&&(a=b+1)}),a},this.isMobileDevice=function(){return"undefined"!=typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},this.isiOSDevice=function(){return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)},this.isWindowsPhone=function(){return navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/IEMobile/i)},this.isChrome=function(){return navigator.userAgent.match(/Chrome/i)||"Google Inc."===navigator.vendor},this.isIE10=function(){return navigator.userAgent.toString().toLowerCase().indexOf("trident/6")>-1},this.isMAC=function(){return navigator.userAgent.toString().toLowerCase().indexOf("mac")>-1},this.isAndroid=function(){return navigator.userAgent.match(/Android/i)?!0:!1}}).run(["$window","VG_UTILS",function(a,b){var c,d={w3:{enabled:"fullscreenEnabled",element:"fullscreenElement",request:"requestFullscreen",exit:"exitFullscreen",onchange:"fullscreenchange",onerror:"fullscreenerror"},newWebkit:{enabled:"webkitFullscreenEnabled",element:"webkitFullscreenElement",request:"webkitRequestFullscreen",exit:"webkitExitFullscreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},oldWebkit:{enabled:"webkitIsFullScreen",element:"webkitCurrentFullScreenElement",request:"webkitRequestFullScreen",exit:"webkitCancelFullScreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},moz:{enabled:"mozFullScreen",element:"mozFullScreenElement",request:"mozRequestFullScreen",exit:"mozCancelFullScreen",onchange:"mozfullscreenchange",onerror:"mozfullscreenerror"},ios:{enabled:"webkitFullscreenEnabled",element:"webkitFullscreenElement",request:"webkitEnterFullscreen",exit:"webkitExitFullscreen",onexit:"webkitendfullscreen",onbegin:"webkitbeginfullscreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},ie:{enabled:"msFullscreenEnabled",element:"msFullscreenElement",request:"msRequestFullscreen",exit:"msExitFullscreen",onchange:"MSFullscreenChange",onerror:"MSFullscreenError"}};for(var e in d)if(d[e].enabled in document){c=d[e],c.isFullScreen=function(){return null!=document[this.element]};break}b.isiOSDevice()&&(c=d.ios,c.isFullScreen=function(){return null!=document[this.element]}),angular.element(a)[0].fullScreenAPI=c}]).directive("videogular",["$window","VG_STATES","VG_EVENTS","VG_UTILS",function(a,b,c,d){return{restrict:"E",scope:{playerWidth:"=vgWidth",playerHeight:"=vgHeight",theme:"=vgTheme",autoPlay:"=vgAutoplay",responsive:"=vgResponsive",stretch:"=vgStretch",hideControls:"=vgHideControls",adMode:"=vgAdMode",muteOnLoad:"=vgOnLoadMute",vgMedia:"=",vgControls:"&",vgComplete:"&",vgUpdateVolume:"&",vgUpdateTime:"&",vgFullScreen:"&",vgUpdateSize:"&",vgMute:"&",vgPause:"&",vgBuffering:"&",vgStartPlay:"&",vgUpdateState:"&",vgPlayerReady:"&",vgOnError:"&",vgOnSeek:"&",vgOnClick:"&",vgOnReplay:"&"},controller:["$scope",function(e){{var f,g,h,i,j,k=null,l=null,m=null,n=b.STOP,o=e.stretch,p=0,q=0,r=0,s=!1,t=!1,u=!1,v=!1,w=!1,x=!1,y=!1,z=!1,A=!1,B=!1,C=this,D=1039,E=e.vgComplete(),F=e.vgUpdateVolume(),G=e.vgUpdateTime(),H=e.vgUpdateSize(),I=e.vgUpdateState(),J=e.vgPlayerReady(),K=e.vgFullScreen(),L=e.vgStartPlay(),M=e.vgMute(),N=e.vgPause(),O=e.vgBuffering(),P=e.vgControls(),Q=e.vgOnError(),R=e.vgOnSeek(),S=e.vgOnClick();e.vgOnReplay()}this.$on=function(){e.$on.apply(e,arguments)},this.isPlayerReady=function(){return x},this.seekTime=function(a){this.videoElement[0].currentTime=a},this.areControlsEnabled=function(){return null==this.videoElement[0].getAttribute("controls")?!1:"controls"==this.videoElement[0].getAttribute("controls")?!0:void 0},this.replay=function(){this.play()},this.playPause=function(){this.videoElement[0].paused?(this.play(),e.$emit(c.ON_PLAY)):(this.pause(),e.$emit(c.ON_PAUSE))},this.isMuted=function(){return this.videoElement[0].muted},this.hideControls=function(a){a?(this.videoElement[0].removeAttribute("controls"),this.videoElement.css("-webkit-media-controls","display:none !important"),P&&P(!1)):d.isiOSDevice()||(this.videoElement[0].setAttribute("controls","controls"),this.videoElement.css("-webkit-media-controls","display:webkit-flex"),P&&P(!0))},this.isFullScreen=function(){return!angular.element(a)[0].fullScreenAPI||d.isiOSDevice()?t:angular.element(a)[0].fullScreenAPI.isFullScreen()},this.setMuted=function(a){return this.videoElement[0].muted=a},this.setState=function(a){return a&&a!=n&&(I&&I(a),n=a,e.$emit(c.ON_SET_STATE,[n])),n},this.getState=function(){return n},this.play=function(){this.videoElement[0].play(),e.$emit(c.ON_PLAY)},this.pause=function(){this.videoElement[0].pause(),e.$emit(c.ON_PAUSE)},this.toggleFullScreen=function(){!angular.element(a)[0].fullScreenAPI||d.isiOSDevice()?(t?(window.parent.togglePlayerFullScreen(e.$parent.playerId),e.onExitFullScreen()):(window.parent.togglePlayerFullScreen(e.$parent.playerId),e.onBeginFullScreen()),t=!t,e.updateSize()):angular.element(a)[0].fullScreenAPI.isFullScreen()?d.isMobileDevice()?this.enterElementInFullScreen(this.videoElement[0]):document[angular.element(a)[0].fullScreenAPI.exit]():d.isMobileDevice()?d.isiOSDevice()?u?this.enterElementInFullScreen(this.videoElement[0]):(s=!0,this.play()):this.enterElementInFullScreen(this.videoElement[0]):this.enterElementInFullScreen(this.elementScope[0])},this.enterElementInFullScreen=function(b){b[angular.element(a)[0].fullScreenAPI.request]()},this.setVolume=function(a){F&&F(a),this.videoElement[0].volume=a,e.$emit(c.ON_SET_VOLUME,[a])},this.getVolume=function(){return this.videoElement[0].volume},this.updateTheme=function(a){if(k)for(var b=document.getElementsByTagName("link"),c=0,d=b.length;d>c;c++)b[c].outerHTML.indexOf(k)>=0&&b[c].parentNode.removeChild(b[c]);if(a){var e=angular.element(document).find("head");e.append("<link rel='stylesheet' href='"+a+"'>"),k=a}},this.updateStretch=function(a){o=a,e.updateSize()},this.setSize=function(a,b){l=a,m=b,e.updateSize()},this.getSize=function(){return{width:l,height:m}},this.getCurrentSource=function(){return this.videoElement[0].getAttribute("src")},this.getDuration=function(){return this.videoElement[0].duration},this.getCurrentTime=function(){return this.videoElement[0].currentTime},this.loadVideo=function(){this.videoElement[0].load()},this.isSeeking=function(){return this.videoElement[0].seeking},this.stop=function(){e.$parent.config.autoPlay=!1,e.$apply(),e.$parent.isStopped=!0,this.videoElement[0].load(),this.pause(),this.setState(b.STOP)},this.initialized=function(){e.$emit(c.ON_PLAYER_INIT)},this.sourceChanged=function(){this.hideControls(e.hideControls),e.$emit(c.ON_SOURCE_CHANGE)},this.isiOSDevice=function(){return d.isiOSDevice()?!0:!1},this.isMobileDevice=function(){return d.isMobileDevice()},this.isWindowsPhone=function(){return d.isWindowsPhone()?!0:!1},this.isChrome=function(){return d.isChrome()?!0:!1},this.isAndroid=function(){return d.isAndroid()?!0:!1},this.isMAC=function(){return d.isMAC()?!0:!1},this.isIE10=function(){return d.isIE10()},this.isMetaDataLoaded=function(){return u},this.getBandWidth=function(){return angular.isUndefined(i)?0:i},e.API=this,e.init=function(){C.updateTheme(e.theme),e.addBindings(),void 0==e.playerWidth||void 0==e.playerHeight||1==e.responsive?(y=!0,angular.element(a).bind("resize",e.onResizeBrowser)):(q=e.playerWidth,r=e.playerHeight,C.setSize(q,r)),angular.element(a)[0].fullScreenAPI&&document.addEventListener(angular.element(a)[0].fullScreenAPI.onchange,e.onFullScreenChange)},e.addBindings=function(){a.setup(),e.$watch("theme",function(a,b){a!=b&&C.updateTheme(a)}),e.$watch("stretch",function(a,b){a!=b&&C.updateStretch(a)}),e.$watch("hideControls",function(a){C.hideControls(a)}),e.$watch("autoPlay",function(a){a&&C.getCurrentSource()&&""!==C.getCurrentSource()&&C.play()});var b=e.$watch("muteOnLoad",function(a){a&&(A=!0,C.setMuted(a),b())});e.$watch("responsive",function(b,c){b!=c&&(y=b,y?(angular.element(a).bind("resize",e.onResizeBrowser),e.onResizeBrowser()):(angular.element(a).unbind("resize",e.onResizeBrowser),l=e.playerWidth,m=e.playerHeight,e.updateSize()))})},e.onElementReady=function(){v=!0,e.muteOnLoad&&(A=!0,e.API.setMuted(e.muteOnLoad)),w&&e.onPlayerReady()},e.onVideoReady=function(){w=!0,v&&e.onPlayerReady()},e.onPlayerReady=function(){C.videoElement.bind("loadstart",e.onLoadedMetaData),C.isiOSDevice()&&(C.videoElement.bind(angular.element(a)[0].fullScreenAPI.onbegin,e.onBeginFullScreen),C.videoElement.bind(angular.element(a)[0].fullScreenAPI.onexit,e.onExitFullScreen)),J&&J(C),e.doPlayerReady()},e.onLoadedMetaData=function(){u=!0,e.doPlayerReady()},e.doPlayerReady=function(){y&&(l=a.innerWidth,m=a.innerHeight),x=!0,B=!0,e.updateSize(),e.$emit(c.ON_PLAYER_READY),(e.autoPlay&&!d.isMobileDevice()&&u||n===b.PLAY)&&C.play()},e.updateSize=function(){if(x){var b;angular.element(a)[0].fullScreenAPI&&angular.element(a)[0].fullScreenAPI.isFullScreen()||t?(b=e.getVideoSize(window.screen.width,window.screen.height),t?(q=l,r=a.innerHeight):(q=a.screen.width,r=a.screen.height)):(b=e.getVideoSize(l,m),q=l,r=m),(0==m||isNaN(m))&&(q=b.width,r=b.height),0==b.width&&(b.width=l),0==b.height&&(b.height=m),H&&H(q,r,B),B=!1,e.$emit(c.ON_UPDATE_SIZE,[q,r])}},e.onResizeBrowser=function(){{var a=100*C.elementScope[0].parentNode.clientWidth/C.videoElement[0].videoWidth;C.videoElement[0].videoHeight*a/100}e.updateSize()},e.onBeginFullScreen=function(){K&&K(!0),e.$emit(c.ON_ENTER_FULLSCREEN),e.updateSize(),e.$apply()},e.onExitFullScreen=function(){K&&K(!1),e.$emit(c.ON_EXIT_FULLSCREEN),e.updateSize(),e.$apply()},e.onFullScreenChange=function(){angular.element(a)[0].fullScreenAPI.isFullScreen()?(K&&K(!0),e.$emit(c.ON_ENTER_FULLSCREEN)):(K&&K(!1),e.$emit(c.ON_EXIT_FULLSCREEN)),e.updateSize(),e.$apply()},e.onComplete=function(){E&&E(),C.setState(b.STOP),e.$emit(c.ON_COMPLETE),e.$apply(),!e.adMode&&e.API.isFullScreen()&&e.API.toggleFullScreen()},e.onStartBuffering=function(){O&&O(),e.$emit(c.ON_BUFFERING),e.$apply()},e.onStartPlaying=function(a){a.target.width++,a.target.width--,L&&L(),e.API.setState(b.PLAY),e.$emit(c.ON_START_PLAYING,[a.target.duration]),e.$apply()},e.onUpdateTime=function(a){C.isSeeking()||(G&&G(a.target.currentTime,a.target.duration),p=a.target.currentTime,e.$emit(c.ON_UPDATE_TIME,[a.target.currentTime,a.target.duration]),e.$apply())},e.seeked=function(a){R&&R(p,a.target.currentTime)},e.onVolumeChange=function(){return this.muted?(z=this.muted,M&&(M(z,A),A&&(A=!1)),e.$emit(c.ON_MUTE,[this.muted,this.volume]),void e.$apply()):z&&!this.muted?(e.$emit(c.ON_MUTE,[this.muted,this.volume]),z=!1,M&&(M(z,A),A&&(A=!1)),void e.$apply()):void(F&&F(this.volume))},e.onPlayerPause=function(){N&&N(),e.API.setState(b.PAUSE),e.$emit(c.ON_PAUSE)},e.onVideoError=function(a){if(!e.adMode&&a.target.error){var c="Error playing media";switch(a.target.error.code){case a.target.error.MEDIA_ERR_ABORTED:c="Aborted the video playback.";break;case a.target.error.MEDIA_ERR_NETWORK:c="A network error caused the video download to fail part-way.";break;case a.target.error.MEDIA_ERR_DECODE:c="The video playback was aborted due to a corruption problem or because the video used features your browser did not support.";break;case a.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:c="The video could not be loaded, either because the server or network failed or because the format is not supported.";break;default:c="An unknown error occurred."}Q&&Q(a.target.src,c),C.setState(b.STOP)}},e.clicked=function(){S&&S()},e.getVideoSize=function(){var a={};return a.width=0,a.height=0,a},e.detectBandWidth=function(){f=new Image,f.onload=function(){h=(new Date).getTime();var a=(h-g)/1e3,b=8*D;j=(b/a).toFixed(2),i=(j/1024).toFixed(2)},g=(new Date).getTime(),f.src=window.domainPath+"assets/images/10k.gif"},e.init(),e.detectBandWidth()}],link:{pre:function(a,b,c,d){d.videogularElement=b,d.elementScope=angular.element(b),d.videoElement=d.elementScope.find("video"),d.videoElement.bind("waiting",a.onStartBuffering),d.videoElement.bind("ended",a.onComplete),d.videoElement.bind("playing",a.onStartPlaying),d.videoElement.bind("timeupdate",a.onUpdateTime),d.videoElement.bind("volumechange",a.onVolumeChange),d.videoElement.bind("pause",a.onPlayerPause),d.videoElement.bind("error",a.onVideoError),d.videoElement.bind("seeking",a.seeked),d.videoElement.bind("click",a.clicked),d.videoElement.bind("touchenter",a.clicked),d.elementScope.ready(a.onElementReady),d.videoElement.ready(a.onVideoReady)}}}}]).directive("vgSrc",["$window","VG_EVENTS","VG_UTILS",function(a,b){return{restrict:"A",link:{pre:function(a,c,d){function e(){g="";for(var c=0,d=f.length;d>c;c++)if(g=h[0].canPlayType(f[c].type),"maybe"==g||"probably"==g){h.attr("src",f[c].src),h.attr("type",f[c].type),a.$parent.$broadcast(b.ON_SOURCE_CHANGE),a.config.autoPlay&&!a.config.adMode&&a.API.loadVideo();break}""==g&&(a.vgonErrorCallBack&&a.vgonErrorCallBack(f,"File type not supported"),a.$emit(b.ON_ERROR,{type:"Can't play file"}))}var f,g,h=c;a.$watch(d.vgSrc,function(a,b){f&&a==b||(f="string"==typeof a?JSON.parse(a):a,angular.isUndefined(f)||e())})}}}}]).directive("vgPoster",["$window","VG_EVENTS","VG_UTILS",function(){return{restrict:"A",link:{pre:function(a,b,c){function d(){angular.isUndefined(e)||f.attr("poster",e.url)}var e,f=b;a.$watch(c.vgPoster,function(a,b){e&&a==b||(e=a,d())})}}}}]);