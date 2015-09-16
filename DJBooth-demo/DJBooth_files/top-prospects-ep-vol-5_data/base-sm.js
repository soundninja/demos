// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

function library(module) {
    "use strict";
    $(function () {
        if (module.init) {
            module.init();
        }
    });
    return module;
}

var isMobilePlayer = false;
var embedFetched = false;
var music_url = null;

/* global jQuery, soundManager */
var audiomackPlayer = library(function ($, soundManager) {
    "use strict";

    // "private" variables:
    var firstColor, secondColor, bgColor, trackTitle, trackPerformer, trackCount, trackCountLink,
    trackRank, trackRankLink, trackURL, canDownload, embedInput, buyURL, artUrl, url, preroll,
    uploader, height, userAgent, videoContent, adsLoader, adsManager, intervalTimer,
    adDisplayContainer;

    /**
     * Holds track information for the player playlist
     */
    var tracks = [];

    /**
     * The ID of the player containing element
     */
    var playerId;

    /**
     * Reference to the list player container element
     */
    var listPlayer;

    /**
     * Reference to the playlist container element for albums and charts
     */
    var playlist;

    var rendering = false;

    var lastTime = 0;

    // this holds a reference to the current track being played
    var currentTrack;

    // keep track of the number of preroll video ad plays this session
    var prerollPlays = 0;

    // flag that gets set if an advert has failed to play for whatever reason
    var adError = false;

    // how many ad errors have occurred in this session
    var adErrorCount = 0;

    // if this song or album is accessed from a promo URL
    var promoKey = false;

    // whether to start playing track after it has been loaded
    // we set this to false if there is a video ad preroll
    var autoplay = true;

    // array of albums that have a video ad play this session
    var albumPrerollPlays = [];

    // record the time of the last video ad play
    var prerollPlayTime;

    // limit playing ads to once per this number of minutes
    var prerollRateLimit = 4;

    // video ad vast tag to use
    var vastTag = null;

    // attempt to play adverts from this list of VAST tags.  Failure to play an ad moves onto the next tag.
    var vastChain = [];
    var vastChainCurrent = 0;

    // "private" methods:
    var loadConfigurationFromContainer = function (player) {
        // read player config
        firstColor     = player.data('firstColor');
        secondColor    = player.data('secondColor');
        bgColor        = player.data('bgColor');
        trackTitle     = player.data('title');
        trackPerformer = player.data('performer');
        trackCount     = player.data('count');
        trackCountLink = player.data('countLink');
        trackRank      = player.data('rank');
        trackRankLink  = player.data('rankLink');
        trackURL       = player.data('url');
        canDownload    = player.data('canDownload');
        embedInput     = player.data('embed');
        buyURL         = player.data('buyLink');
        artUrl         = player.data('artUrl');
        url            = player.data('src');
        preroll        = player.data('preroll');
        uploader       = player.data('uploader');
        height         = player.data('height');
        promoKey       = player.data('promoKey');
    };

    var setDefaultPlayerHeight = function () {
        if (!height) {
            height = 30;
        }

        if (isMobile()) {
            height = 60;
        }
    };

    var isMobile = function () {
        return (typeof CMNUNT == "object");
    };

    var isIos = function () {
        return ( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) );
    };

    var isAndroid = function () {
        return ( userAgent.match( /Android/i ) );
    };

    var createSongPlaylist = function () {
        tracks = [{
            image: artUrl,
            title: trackPerformer + ' - ' + trackTitle,
            sources: [{
                file:  '/api/music/url' + trackURL,
                label: '/api/music/url' + trackURL,
                type:  'mp3'
            }]
        }];
    };

    var createAlbumPlaylist = function () {
        playlist = $("div[for=" + playerId + "] div.song");

        if (playlist.length > 0) {
            tracks = [];
            playlist.each(function () {
                tracks.push({
                    image: artUrl,
                    title: trackPerformer + ' - ' + $('a', this).text(),
                    sources: [{
                        file:  $('a', this).data('url'),
                        label: $('a', this).data('url'),
                        type:  'mp3'
                    }]
                });
            });
        }
    };

    var createListplayerPlaylist = function () {
        // load list player tracks in, if available
        playlist = $(".track .row");
        listPlayer = $("#listplayer");

        // mobile
        if (playlist.length === 0) {
            playlist = $('.feed-item');
        }

        if (playlist.length > 0 && typeof listPlayer != "undefined" && listPlayer.length) {
            tracks = [];
            playlist.each(function () {
                // if we are dealing with an album, then push X tracks otherwise just push 1 track
                var url = $('a', this).data('url') || $('a', this).attr('href');

                if (url.match(/^\/album\//)) {
                    var albumPlaylist = $("div[for='" + $('a', this).data('id') + "'] div.song");
                    if (albumPlaylist.length) {
                        albumPlaylist.each(function () {
                            tracks.push({
                                title: $('a', this).text(),
                                sources: [{
                                    file:  url,
                                    label: url,
                                    type: 'mp3'
                                }]
                            });
                        });
                    }
                    else {
                    }
                } else {
                    var file  = '/api/music/url' + url;
                    var title = $('img', this).attr('alt');
                    tracks.push({
                        image:   '',
                        title:   title,
                        id: $('a', this).data('id'),
                        sources: [{
                            file: file,
                            label: file,
                            type: 'mp3'
                        }]
                    });
                }

            });

var playerTPLdesktop = '<div id="wrap"">' +
'   <div class="pborder">' +
'       <div class="pwrap zzzzzz">' +
'            <div class="player-left">' +
'                    <span class="prev-track glyphicon glyphicon-fast-backward"></span>' +
'                    <span id="play-button" class="playlist"><i class="glyphicon glyphicon-play icon"></i><span class="loading-icon song-loader"><span class="circle circle-1"></span><span class="circle circle-2"></span><span class="circle circle-3"></span></span></span>' +
'                    <span class="next-track glyphicon glyphicon-fast-forward"></span>' +
'            </div>' +
'            <div class="player-right">' +
'                <div class="player-header">' +
'                    <div class="player-title">' +
'                           <span class="artist"><a href="" target="_blank" ></a></span>' +
'                           <span class="song-title"><a href="" target="_blank" ></a></span>' +
'                    </div>' +
'                    <div class="player-icons">' +
'  						<div class="inner">' +
'                        <a class="scloud-icon ext-icon player-icon" href="<?=$this->song->stream_url;?>" target="_blank">' +
'                              <i class="fa fa-soundcloud"></i></a>' +
'                        <a data-toggle="tooltip" data-placement="left" class="player-icon download-song" title="Download" href="">' +
'                             <span class="glyphicon glyphicon-save"></span>' +
'                        </a>' +
'                        <a data-placement="left" class="player-embed player-icon" title="Embed" href="#embed" id="itsembed" data-toggle="modal" onClick="ga(\'send\', \'event\', { eventCategory: \'Embed\', eventAction: $(this).attr(\'href\').split(\'?\')[0], eventLabel: window.location.href});">' +
'                            <span class="glyphicons embed_close"></span>' +
'                        </a>' +
'                        <a data-toggle="tooltip" data-placement="left" href="" data-id="" id="listPlayerFavorite" title="Favorite" class="launch_login_modal player-favorite player-icon favorite ">' +
'                            <span class="glyphicon glyphicon-star"></span>' +
'                        </a>' +
'                        <a data-placement="left" title="Playlist" href="#" id="listPlayerPlaylist"  data-id="" class="player-icon launch_login_modal">' +
'                            <span class="glyphicon glyphicon-plus"></span>' +
'                        </a>' +
'                        <a data-placement="left" title="Re-Up" href="" id="listPlayerRepost" data-id="" data-action="repost" data-music_id="" class="player-icon launch_login_modal">' +
'                            <span class="glyphicons retweet"></span>' +
'                        </a>' +
'						 <span class="trigger close-icons"><i class="fa fa-times"></i></span>' +
'						</div>' +
'                    </div>' +
'                </div>' +
'				<div class="player-song-stats">' +
'					<span class="song-plays glyphicon glyphicon-play"></span><span class="song-plays-stat"></span><span class="divider"></span>' +
'					<span class="song-favorites glyphicon glyphicon-star"></span><span class="song-favorites-stat"></span><span class="divider"></span>' +
'				</div>' +
'				<div class="player-outer group">' +
'                <div class="player-jwplayer">' +
'                    <div class="elapsed">00:00</div>' +
'					 <div class="slider-outer group"> '+
'                    	<div class="slider">' +
'                        	<span class="progress"></span>' +
'                        	<div class="waveform" data-color="" data-duration="" data-waveform=""></div>' +
'						 	<div class="white-border"></div>' +
'                    	</div>' +
'					 </div>' +
'                    <div class="duration">00:00</div>' +
'                </div>' +
'			</div>'+
'            </div>' +
'            <a class="scloud-icon main-scloud-icon ext-icon player-icon" href="<?=$this->song->stream_url;?>" target="_blank">' +
'            <i class="fa fa-soundcloud"></i></a>' +
'           <div class="triple-dots-wrap"><span class="dots"></div></div>' +
'       </div>' +
'   </div>' +
'</div>';

var playerTPLmobile = '<div class="mobile-player">' +
'   <div class="mobile-player-inner">' +
'       <span class="prev-track fa fa-fast-backward"></span>' +
'        <span id="play-button" class="playlist"><i class="fa fa-play icon"></i><span class="loading-icon song-loader"><span class="circle circle-1"></span><span class="circle circle-2"></span><span class="circle circle-3"></span></span></span>' +
'        <span class="next-track fa fa-fast-forward"></span>' +
'        <div class="player-title">' +
'            <span class="artist"><a href=""  ></a></span>' +
'            <span class="song-title"><a href="" ></a></span>' +
'        </div>'+
'        <div class="dots">&#8226;&#8226;&#8226;</div>' +
'   </div>' +
'   <div class="dots-overlay">' +
'       <ul>'+
'           <li>' +
'               <span class="glyphicons star"></span>'+
'               <a href="#" class="player-favorite mobile-fav launch_login_modal" data-id="" id="listPlayerFavorite" data-action="favorite" data-music_id=""></a>'+
'           </li>' +
'           <li>' +
'               <span class="glyphicons plus"></span>'+
'               <a href="#playlistModal" role="button" class="launch_login_modal" data-toggle="modal" data-id="" href="#" id="listPlayerPlaylist" data-action="playlist" data-music_id="">Add to Playlist</a>'+
'           </li>'+
'           <li>' +
'              <span class="glyphicons repeat"></span>'+
'              <a href="" role="button" class="launch_login_modal" data-id="" id="listPlayerRepost" data-action="repost" data-music_id="">Repost</a>' +
'           </li>'+
'           <li class="via-soundcloud">' +
'               <span class="glyphicons music"></span>' +
'               <a href="" target="_blank" rel="nofollow">via SoundCloud</a>' +
'           </li>' +
'       </ul>'+
'   </div>'+
'   <div class="app-links">'+
'       <a onClick="ga("send", "event", "Mobile player", "App Link", "Android");" class="android-player-link" href="https://play.google.com/store/apps/details?id=com.audiomack"></a>' +
'       <a onClick="ga("send", "event", "Mobile player", "App Link", "iOS");" class="ios-player-link" href="https://itunes.apple.com/us/app/audiomack/id921765888?ls=1&mt=8"></a>'+
'   </div>'+
'   <div class="mobile-time">'+
'       <div class="elapsed">00:00</div>'+
'       <div class="duration">00:00</div>'+
'   </div>'+
'</div>';

            if(isMobilePlayer) {
                $("#"+playerId).replaceWith($(playerTPLmobile).attr('id',playerId));
                mobilePlayer();

                $('li > a.player-share').click(function(e) {
                    e.preventDefault();
                    $(this).hide();
                    $(this).next('div.addthis_responsive_sharing').css('height', '30px').css('margin-top', '-10px').show();
                });

                var mobileDotsOpened = false;
                $('div.dots').click(function(e) {
                    e.preventDefault();
                    if (!mobileDotsOpened) {
                        $('li > a.player-share').show();
                        $('div.dots-overlay').show();
                        mobileDotsOpened = true;
                    } else {
                        $('div.dots-overlay').hide();
                        $('li > div.addthis_responsive_sharing').hide();
                        mobileDotsOpened = false;
                    }
                });

            } else {
                $("#"+playerId).replaceWith($(playerTPLdesktop).attr('id',playerId));
                $('.player-icon').tooltip();
                embedFetched = false;
                $('.pwrap.zzzzzz').find('a.player-embed.player-icon').on("click", function(e) {
                    if (!embedFetched) {
                        e.stopPropagation();
                        var musicId = $(this).data('music_id');
                        $.ajax({
                            url: '/embed4/modal',
                            type: 'GET',
                            cache: false,
                            data: {'music_id': musicId},
                            dataType: 'html',
                            async: false,
                            success: function(data) {
                                $('#embed-modal-container').remove();
                                $('body').append('<div id="embed-modal-container">' + data + '</div>');
                                embedFetched = true;
                                setTimeout(function() {
                                    $('#itsembed').click();
                                }, 500);
                            }
                        });
                    }
                });
            }
        }
    };

    $(window).resize(function() {
        if ($('#wrap').hasClass('embed') || $('.pwrap').hasClass('zzzzzz')) {
            renderPlayer();
        }
    });
    
    // ==========================================================================
    // Waveform check
    // ==========================================================================
    
    var $waveform = $('.waveform');
    
    if (! $waveform.is(':empty') ){
	    
	    $waveform.css({
		    'background-image' : 'none',
		    'top' : 'auto',
		    'bottom' : '-5px',
		    'opacity' : '0.3!important'
	    });
	    
    }

    var renderPlayer = function (data, color, duration) {
        if (rendering) {
            return;
        }
        rendering = true;

        /* global google */
        if (preroll && typeof google.ima.AdDisplayContainer === 'function') {
            $("#play-button").css('visibility', 'visible');
        }

        if (typeof color == 'undefined') {
            color = $('div.waveform').data('color');
        }

        if (typeof duration == 'undefined') {
            duration =  $('div.waveform').data('duration');
        }

        if (typeof data == 'undefined') {
            data = $('div.waveform').data('waveform');
        }

        var waveformHeight = 30,
            barWidthPad = 3,
            embed = false;

        if ($('#wrap').hasClass('embed')) {
            embed = true;
        }

        if (embed) {
            var pad = 84;
            if ($('div.player-song-stats').css('display') == 'none') {
                $('div.player-jwplayer').css('width', $('div.player-right').width() - pad - 20);
            } else {
                $('div.player-jwplayer').css('width', $('div.player-right').width() - $('div.player-song-stats').width() - pad - 20);
            }
        }

        var w = $('div.slider').width();
        if (!w) {
            w = 730;
        }

        $('div.waveform').html('').css('width', w).css('height', waveformHeight);

        var vps = 1;
        if (duration > 0) {
            while ((duration * barWidthPad) / w < 0.95 && barWidthPad < 8) {
                barWidthPad++;
            }
            var s = Math.floor((w / barWidthPad)) + 1;
            vps = duration / s;
            if (vps < 1) {
                vps = 1;
            }
        }

        // determine baseline and build some waveform html
        var sum = 0,
            bmax = 0;
        for (var x = 0; x < duration; x++) {
            sum += data[x];
            if (data[x] > bmax) {
                bmax = data[x];
            }
        }

        var ratio = 100 / waveformHeight,
            bmaxRatio = Math.floor(100 / bmax),
            html = '',
            points = [],
            tally = 0,
            left = 0;

        for (var i = 0; i < duration; i++) {
            tally += 1;
            points.push(data[i]);
            if (tally >= vps) {
                sum = 0;
                for (x = 0; x < points.length; x++) {
                   sum += points[x];
                }
                var avg = Math.ceil(sum / points.length);
                if (isNaN(avg) || avg === 0) {
                    avg = 1;
                }
                html = html + '<span style="left:'+left + 'px;width:'+(barWidthPad - 1)+'px;height:' + avg * (bmaxRatio / ratio) + 'px;"></span>';
                left += barWidthPad;
                tally = tally - vps;
                points = [];
            }
        }
        $('div.waveform').html(html);

        rendering = false;
    };

   var highlightWaveform = function () {
        if (rendering) {
            return;
        }
        rendering = true;

        var color = $('div.waveform').data('color'),
            backgroundColor = $('div.waveform').data('background-color'),
            progressWidth = $('div.slider > span.progress').width();

        if (!color) {
            color = 'ffa200';
        }

        if (!backgroundColor) {
            backgroundColor = '999';
        }

        if (!progressWidth) {
            progressWidth = 1;
        }

        $('div.waveform > span').each(function() {
            if (parseInt($(this).css('left').replace('px', ''), 10) < progressWidth) {
                $(this).css('background', '#' + color);
            } else {
                $(this).css('background', '#' + backgroundColor);
            }
        });
        rendering = false;
    };

    var highlightSlider = function (position, duration) {
        if ((duration === 0 || duration === '' || duration === undefined) && $('div.waveform').data('duration')) {
            duration = $('div.waveform').data('duration');
        }
        var w = (position / duration) * 100;
        if (w > 100) {
            w = 100;
        }
        if (w < 0) {
            w = 0;
        }

        $('div.slider > .progress').css('width', w + '%');

        highlightWaveform();
    };

    var updateElapsed = function (position) {
        if (typeof position == 'undefined' || position < 0) {
            position = 0;
        }
        var sec_num = parseInt(position, 10); // don't forget the second param
        var minutes = Math.floor(sec_num / 60);
        var seconds = sec_num - (minutes * 60);

        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var time    = minutes+':'+seconds;
        $('div.elapsed').html(time);
    };

    var updateDuration = function (duration) {
        if (duration != -1 && typeof duration != 'undefined') {
            var sec_num = parseInt(duration, 10); // don't forget the second param
            var minutes = Math.floor(sec_num / 60);
            var seconds = sec_num - (minutes * 60);

            if (minutes < 10) {minutes = "0"+minutes;}
            if (seconds < 10) {seconds = "0"+seconds;}
            var time    = minutes+':'+seconds;
            $('div.duration').html(time);
        }
    };

    var cleanupVideoPlayer = function () {
        // desktop
        if ($('#video-ad_wrapper').length) {
            $('#video-ad_wrapper').hide();
        }

        if (isAndroid()) {
            $('#video-ad').hide();
        }

        $('#wrap').show();

        $('#listplayer-video-ad').css({height: '1px', bottom: '0'});
        $('#standard-video-ad').css({height: '1px', top: -10000});

        if ($('#listplayer-video-ad').length > 0) {
            $('#video-ad-message').hide();
        }
    };

    var onAdEvent = function (adEvent) {
        // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
        // don't have ad object associated.
        var ad = adEvent.getAd();
        if (!music_url) {
            music_url = window.location.pathname;
        }

        switch (adEvent.type) {
            case google.ima.AdEvent.Type.LOADED:
                trackAdPlay('loaded', music_url);
                console.log("LOADED");
                console.log("Ad ID: " + ad.getAdId());
                console.log("Ad system: " + ad.getAdSystem());
                console.log("Content type: " + ad.getContentType());
                console.log("Title: " + ad.getTitle());
                console.log("Description: " + ad.getDescription());

                showVideoAdContainer();
                break;
            case google.ima.AdEvent.Type.STARTED:
                trackAdPlay('started', music_url);
                console.log("STARTED");
                prerollPlays++;
                recordPrerollPlayForTrack();
                prerollPlayTime = new Date();
                break;
            case google.ima.AdEvent.Type.COMPLETE:
                trackAdPlay('completed', music_url);
                console.log("COMPLETE");
                // This event indicates the ad has finished - the video player
                // can perform appropriate UI actions, such as removing the timer for
                // remaining time detection.
                if (ad.isLinear()) {
                    clearInterval(intervalTimer);
                }
                break;
            case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                console.log("ALL_ADS_COMPLETED");
                // if we have played zero ads, then assume there was an issue (e.g. no ads for device/country)
                if (prerollPlays === 0) {
                    trackAdPlay('error', music_url);
                    console.log("Couldn't play any ads");

                    // move to next VAST tag in chain
                    vastChainCurrent++;

                    if (typeof vastChain[vastChainCurrent] !== 'undefined') {
                        vastTag = vastChain[vastChainCurrent];
                    } else {
                        console.log("Reached end of VAST chain");
                        return;
                    }

                    console.log("New VAST tag: " + vastTag);

                    showVideoAdContainer();

                    requestAds();

                    adError = true;
                    adErrorCount++;
                }
                break;
            case google.ima.AdEvent.Type.LOG:
                break;
            case google.ima.AdEvent.Type.SKIPPED:
                trackAdPlay('skipped', music_url);
                console.log("SKIPPED");
                break;
            case google.ima.AdEvent.Type.USER_CLOSE:
                console.log("USER_CLOSE");
                break;
        }
    };

    var onAdError = function (adErrorEvent) {
        if (currentTrack) {
            music_url = currentTrack.match(/\/api\/music\/url\/((?:song|album)\/[^\/]+\/[^\/\?]+(?:\/[0-9]+)?)/)[1];
        }
        if (!music_url) {
            music_url = window.location.pathname;
        }
        trackAdPlay('error', music_url);
        // Handle the error logging.
        console.log("ad error: " + adErrorEvent.getError().getMessage());
        adError = true;
        adErrorCount++;

        // clean up if we have no more VAST tags in chain
        vastChainCurrent++;

        if (typeof vastChain[vastChainCurrent] !== 'undefined') {
            vastTag = vastChain[vastChainCurrent];
            console.log("New VAST tag: " + vastTag);

            requestAds();

        } else {
            console.log("Reached end of VAST chain");
            adsManager.destroy();
            cleanupVideoPlayer();

            if (soundManager.getSoundById(playerId)) {
                soundManager.getSoundById(playerId).play();
            }
        }

        return;
    };

    var onContentResumeRequested = function () {
        if (showFallBackAd()) {
            console.log("Showing fallback ad");
            return;
        }

        cleanupVideoPlayer();

        if (soundManager.getSoundById(playerId)) {
            soundManager.getSoundById(playerId).play();
        }
    };

    var showFallBackAd = function () {
        console.log("prerollPlays: " + prerollPlays + " adErrorCount: " + adErrorCount);
        return (prerollPlays === 0 && adErrorCount < vastChain.length);
    };

    // encapulates business rules for determining whether or not to show a video preroll
    var showPreroll = function () {
        var show = false;

        if (preroll && preroll != 'no') {
            show = true;
        }

        var album = currentTrack.match(/\/api\/music\/url\/((?:album)\/[^\/]+\/[^\/\?]+)(?:\/[0-9]+)?/);

        if (album) {
            if (albumPrerollPlays.indexOf(album[1]) > -1) {
                show = false;
            }
        }

        // make sure we haven't played a preroll in the last 4 minutes
        if (prerollPlayTime) {
            var dateNow = new Date().getTime();
            if (Math.floor((dateNow - prerollPlayTime.getTime()) / (1000 * 60)) < prerollRateLimit) {
                console.log("Showed advert less than " + prerollRateLimit + " minutes ago");
                show = false;
            }
        }

        return show;
    };

    var showVideoAdContainer = function () {
        if(isMobilePlayer) {
            // listplayer case
            if ($('#listplayer-video-ad').length) {
                if (!isIos()) {
                    $('#listplayer-video-ad').css({height: '260px'});
                    $('#video-ad').show();
                }
            }
            else {
                if (!isIos()) {
                    $('#standard-video-ad').css({height: '260px', top: 'auto', bottom:0});
                    $('#video-ad').show();
                }
            }
        }
        else {
            // listplayer case
            if ($('#listplayer-video-ad').length) {
                $('#listplayer-video-ad').css({height: '486px'});
                $('#video-ad').show();
                $('#video-ad-message').show();
            }
            else {
                var height = 486;

                if ($(window).height() < 486) {
                    height = $(window).height();
                }

                $('#standard-video-ad').css({height: height + 'px', top: 0});
                $('#video-ad_wrapper').css('padding-bottom', '10px');
                $('#video-ad').show();
                $('#wrap').hide();
            }
        }
    };

    var onVideoEndsFullScreen = function () {
    };

    var recordPrerollPlayForTrack = function () {
        var album = currentTrack.match(/\/api\/music\/url\/((?:album)\/[^\/]+\/[^\/\?]+)(?:\/[0-9]+)?/);

        if (album) {
            albumPrerollPlays.push(album[1]);
        }
    };

    /* global cmnvideotagdefault */
    var complexVastTag = function () {
        return cmnvideotagdefault();
    };

    var googleAdsenseVastTag = function () {
        return 'https://googleads.g.doubleclick.net/pagead/ads?ad_type=video&' +
                    'client=ca-video-pub-3858157454086512&description_url=https%3A%2F%2Fwww.audiomack.com&' +
                    'videoad_start_delay=0&hl=en&max_ad_duration=30000';
    };

    var divisionDVastTag = function () {
        return 'https://ad4.liverail.com/?LR_PUBLISHER_ID=138009&LR_SCHEMA=vast2-vpaid&LR_AUTOPLAY=1';
    };

    var adCacheBuster = function () {
        return Math.random() * 10000000000000000;
    };

    var requestAds = function () {
        var adsRequest = new google.ima.AdsRequest();
        adsRequest.adTagUrl = vastTag;

        adsRequest.linearAdSlotWidth = 980;
        adsRequest.linearAdSlotHeight = 460;

        adsRequest.nonLinearAdSlotWidth = 980;
        adsRequest.nonLinearAdSlotHeight = 460;

        adsLoader.requestAds(adsRequest);
    };

    return {
        init: function () {
            soundManager.setup({
                url: '/cap/swf/',
                preferFlash: false,
                onready: this.initPlayers,
                debugMode: true
            });

            userAgent = navigator.userAgent || navigator.vendor || window.opera;

            // Complex ads don't work over HTTPS
            vastChainCurrent = 0;
            if (typeof cmnvideotagdefault == 'function' && window.location.protocol != 'https:') {
                vastChain = [complexVastTag(), divisionDVastTag(), googleAdsenseVastTag()];
            } else {
                vastChain = [divisionDVastTag(), googleAdsenseVastTag()];
            }

            vastTag = vastChain[vastChainCurrent];
            console.log("Setting VAST tag to " + vastTag);
        },

        initPlayers: function() {
            $("div.am-jwplayer").each(function () {
                audiomackPlayer.initPlayer($(this));
            });
        },

        initPlayer: function (player) {
            if ($('.player-icon').length !== 0) {
                $('.player-icon').tooltip();
            }

            loadConfigurationFromContainer(player);
            setDefaultPlayerHeight();
            createSongPlaylist();
            renderPlayer();

            playerId = player.attr('id');

            createAlbumPlaylist();

            createListplayerPlaylist();

            if (tracks.length === 0) {
                console.log("Could not read any tracks from the DOM");
            }
            else {
                currentTrack = tracks[0].sources[0].file;
            }

            this.bindEvents(playerId);
        },

        /* global audiomack, ga, writeCaptureRefresh */
        bindEvents: function (id) {
            $('#play-button').click(function (e, data) {
            	$(this).addClass('pulse');
                // we need to determine what to load -- either a/ play current track or b/ play specific track
                // so, did the user click on the play button, or did they click on a track in a playlist
                if (!soundManager.getSoundById(id)) {
                    autoplay = true;
                    music_url = currentTrack.match(/\/api\/music\/url\/((?:song|album)\/[^\/]+\/[^\/\?]+(?:\/[0-9]+)?)/)[1];
                    if (typeof data != 'undefined' && typeof data.autoplay != 'undefined') {
                        autoplay = data.autoplay;
                    }
                    else {
                        if (showPreroll()) {
                            autoplay = audiomackPlayer.playAd();
                        }
                    }

                    if (playlist.length > 0 && $("div[for=" + id + "] div.song.play").length === 0) {
                        $(playlist[0]).toggleClass('play', true);
                    }

                    // avoid iOS wankery that thinks we're autoplaying shit for no reason
                    var soundConfig = {
                        id: 'testsound',
                        url: '/point1sec.mp3',
                        multiShot: false,
                        stream: true,
                        autoLoad: true
                    };

                    soundManager.createSound(soundConfig);
                    // end iOS wankery avoidance

                    var isEmbed = false;
                    if ($('#wrap').length && $('#wrap').hasClass('embed')) {
                        isEmbed = true;
                    }

                    audiomackPlayer.asyncLoadTrack(id, currentTrack, $(this), autoplay);

                    // stats
                    var test_track = currentTrack.match(/\/api\/music\/url\/((?:song|album)\/[^\/]+\/[^\/\?]+(?:\/[0-9]+)?)/)[1];
                    trackEvent('play', test_track, audiomack.music_token);

                    if (promoKey) {
                        trackPromoEvent('play', test_track, audiomack.music_token, promoKey);
                    }

                    ga('send', 'event', {
                        eventCategory: 'Music',
                        eventAction: 'Play',
                        eventLabel: test_track
                    });
                }
                else {
                    if (soundManager.getSoundById(id).playState && !soundManager.getSoundById(id).paused) {
                        if (isMobilePlayer) {
                            $(this).find('.icon').removeClass('fa-pause').addClass('fa-play');
                            $('.profile-image .play .fa').removeClass('fa-pause').addClass('fa-play');
                        } else {
                            $(this).find('.icon').removeClass('glyphicon-pause').addClass('glyphicon-play');
                        }
                        soundManager.getSoundById(id).pause();
                    } else {
                        if (isMobilePlayer) {
                            $(this).find('.icon').removeClass('fa-play').addClass('fa-pause');
                            $('.profile-image .play .fa').removeClass('fa-play').addClass('fa-pause');
                        } else {
                            $(this).find('.icon').removeClass('glyphicon-play').addClass('glyphicon-pause');
                        }
                        soundManager.getSoundById(id).play();
                    }
                }

                return false;
            });

            $('div.slider').click(function (evt) {
                var x = (evt.pageX - $(this).offset().left) + $(window).scrollLeft();
                var duration = soundManager.getSoundById(id).duration;
                var w = $('div.slider').width();
                var ratio = x / w;
                var pos = parseInt(ratio * duration, 10);
                soundManager.getSoundById(id).setPosition(pos);
            });

            // album page events
            playlist = $("div[for=" + id + "] div.song");

            if (playlist.length > 0) {
                $(playlist).click(audiomackPlayer.playSong);
            }

            $('div.song > div.download-song > a').click(function (e) {
                e.stopPropagation();
            });

            $('div.song > div.favorite-song > a').click(function (e) {
                e.stopPropagation();
            });

            $('div.song > div.playlist-song > a').click(function (e) {
                e.stopPropagation();
            });

            $('span.next-track').click(function (e, programmatic) {
                e.preventDefault();
                var next;

                if (currentTrack.match(/\/api\/music\/url\/album/) || $(this).prev('span').hasClass('playlist')) {
                    next = $('div.song.play').next('div.song');
                    if (!next || next.length === 0) {
                        next = $('div.song.play').parent('div.song-wrap').next('div.song-wrap').find('div.song');
                    }

                    if (!next || next.length === 0) {
                        // should we move onto the next item?
                        if ($('.track .row a.playing').length) {
                            // desktop
                            if ($(".track .row a.playing").closest('.track').nextAll('.track').length) {
                                next = $(".track .row a.playing").closest('.track').nextAll('.track').first().find('div.overlay a.play');
                            } else {
                                // couldn't find a next track in the list, so play the first track from the first 'feed' list
                                next = $('.feed:eq(0) .track:eq(0)').find('a.play');
                            }
                        }
                        else if ($(".track span.playing").closest('.track').nextAll('.track').length) {
                            // mobile
                            next = $(".track span.playing").closest('.track').nextAll('.track').first().find('span.play');
                        }
                        else if (!$('div.song.play').length) {
                            // otherwise, loop round to first track if nothing has played yet
                            next = $('div.song').first();
                        } else {
                            return;
                        }
                    }
                }
                else {
                    if (isMobilePlayer) {
                       next = $(".track span.playing").closest('.track').nextAll('.track').first().find('span.play');
                    }
                    else {
                       next = $(".track .row a.playing").closest('.track').nextAll('.track').first().find('a.play');
                   }
                }

                next.trigger('click');

                if(!programmatic && typeof writeCaptureRefresh == 'function') {
                    var $tag = $("#cmn_ad_tag_head");
                    $tag.css('min-height', $tag.height());
                    $tag = $(".boxad:eq(0)");
                    $tag.css('min-height', $tag.height());
                    $tag = $(".160adunit-songs:eq(0)");
                    $tag.css('min-height', $tag.height());
                    writeCaptureRefresh();
                }
            });

            $('span.prev-track').click(function (e, programmatic) {
                e.preventDefault();
                var prev;

                if (currentTrack.match(/\/api\/music\/url\/album/) || $(this).next('span').hasClass('playlist')) {
                    prev = $('div.song.play').prev('div.song');

                    if (!prev || prev.length === 0) {
                        prev = $('div.song.play').parent('div.song-wrap').prev('div.song-wrap').find('div.song');
                    }

                    if (!prev || prev.length === 0) {
                        // should we move onto the prev item?
                        if ($('.track .row a.playing').length) {
                            // desktop
                            if ($(".track .row a.playing").closest('.track').prevAll('.track').length) {
                                prev = $(".track .row a.playing").closest('.track').prevAll('.track').first().find('div.overlay a.play');
                            } else {
                                // couldn't find a prev track in the list, so play the first track from the first 'feed' list
                                prev = $('.feed:eq(0) .track:eq(0)').find('a.play');
                            }
                        }
                        else if ($(".track span.playing").closest('.track').prevAll('.track').length) {
                            // mobile
                            prev = $(".track span.playing").closest('.track').prevAll('.track').first().find('span.play');
                        }
                        else {
                            prev = $('div.song').last();
                        }
                    }
                }
                else {
                    if (isMobilePlayer) {
                       prev = $(".track span.playing").closest('.track').prevAll('.track').first().find('span.play');
                    }
                    else {
                       prev = $(".track .row a.playing").closest('.track').prevAll('.track').first().find('a.play');
                    }
                }

                prev.trigger('click');

                if(!programmatic && typeof writeCaptureRefresh == 'function') {
                    var $tag = $("#cmn_ad_tag_head");
                    $tag.css('min-height', $tag.height());
                    $tag = $(".boxad:eq(0)");
                    $tag.css('min-height', $tag.height());
                    $tag = $(".160adunit-songs:eq(0)");
                    $tag.css('min-height', $tag.height());
                    writeCaptureRefresh();
                }
            });

            // charts/listplayer events
            if (!playlist.length) {
                playlist = $(".track");

                if (playlist.length > 0 && typeof listPlayer != "undefined" && listPlayer.length) {
                    $('div.feed').on('click', 'a.play', audiomackPlayer.playListSong);
                }

                // and chart album tracks
                if ($(".plwrapper .song").length) {
                    $(".plwrapper .song").click(audiomackPlayer.playChartAlbumSong);
                }
            }

            // charts/listplayer mobile events
            if (!playlist.length) {
                playlist = $(".feed-item");

                if (playlist.length > 0 && typeof listPlayer != "undefined" && listPlayer.length) {
                    $('div.feed-section').on('click', 'span.play', audiomackPlayer.playListSong);

                    $(".feed-section .feed-item .feed-image a").click(function(e) {
                        e.preventDefault();
                        if(!$(e.target).is('.play')) {
                            $(this).find('.play').trigger('click');
                            e.stopPropagation();
                        }
                        return;
                    });
                }
            }

            // mobile artwork play
            $('.profile-image .play').click(function (eventObject) {
                eventObject.preventDefault();
                eventObject.stopPropagation();
                $('#play-button').trigger('click');
            });
        },
        /**
         * Look up the streaming source of a track via the API.
         *
         * Tracks can either be native or SoundCloud
         *
         * @return string|bool streaming URL or false if it could be retrieved
         */
        getSignedUrl: function (url) {
            var error = '';

            if (url.match(/\/api\/music\/url\//)) {
                $.ajax({
                    url: url,
                    type: 'GET',
                    cache: false,
                    dataType: 'json',
                    async: false,
                    error: function(xhr, status, error) {
                        var data = $.parseJSON(xhr.responseText);

                        if(data.message) {
                            alert(data.message);
                        } else {
                            alert(error);
                        }
                    },
                    success: function(data) {
                        url   = data.url;

                        if (data.error) {
                            error = data.error;
                        }
                    }
                });
            }

            if (error === '') {
                return url;
            } else {
                return false;
            }
        },

        /**
         * load song info into main player display
         */
        loadSongData: function (song) {
            var plays = song.data('plays'),
                favorites = song.data('favorites'),
                artist = song.data('artist'),
                title = song.data('title'),
                soundcloud = song.data('soundcloud'),
                duration = song.data('duration'),
                color = song.data('color'),
                waveform = song.data('waveform'),
                is_favorite = song.data('is-favorite'),
                favorite_url = song.data('favorite-url'),
                track = song.data('track');

            if (typeof plays != 'undefined') {
                $('span.song-plays-stat').html(plays);
            }

            if (typeof favorites != 'undefined') {
                $('span.song-favorites-stat').html(favorites);
            }

            if (typeof artist != 'undefined') {
                $('span.artist a').text(artist);
            }

            if (typeof title != 'undefined') {
                if (!isMobilePlayer) {
                    $('a#song-title-link').text(title);
                }
            }

            if (typeof duration != 'undefined' && duration !== '') {
                updateDuration(duration);
            }

            if (typeof is_favorite != 'undefined') {
                if (is_favorite == '1') {
                    $('a.player-favorite').attr('title', 'Un-Favorite')
                      .tooltip('hide')
                      .attr('data-original-title', 'Un-Favorite')
                      .tooltip('fixTitle')
                      .tooltip('show');
                    $('a.player-favorite').addClass('active').blur();
                } else {
                    $('a.player-favorite').attr('title', 'Favorite')
                      .tooltip('hide')
                      .attr('data-original-title', 'Favorite')
                      .tooltip('fixTitle')
                      .tooltip('show');
                    $('a.player-favorite').removeClass('active').blur();
                }
            }

            if (typeof favorite_url != 'undefined') {
                $('a.player-favorite').attr('href', favorite_url);
            }

            if (typeof track != 'undefined') {
                $('a.player-favorite').data('track', track);
            }

            if (typeof soundcloud != 'undefined') {
                if(!isMobilePlayer) {
                    if (soundcloud == '0') {
                        $('a.scloud-icon').attr('href', '');
                        $('a.scloud-icon').hide();
                        $('div.player-jwplayer').css('width', '');
                    } else {
                        $('div.player-jwplayer').addClass('play-start');
                        $('a.scloud-icon').attr('href', soundcloud);
                        $('a.scloud-icon').show();
                    }
                } else {
                    if (soundcloud == '0') {
                        $('span.via-soundcloud a').attr('href', '');
                        $('span.via-soundcloud a').html("");
                    } else {
                        $('span.via-soundcloud a').attr('href', soundcloud);
                        $('span.via-soundcloud a').html("via Soundcloud");
                    }
                }
            }

            if (typeof waveform != 'undefined') {
                renderPlayer(waveform, color, duration);
            }
        },
        /**
         * playSong event is triggered by a user clicking on a track within a playlist
         */
        playSong: function (e) {
            e.stopPropagation();
            e.preventDefault();

            playerId = $(this).parents('#playlist').attr('for');
            playlist = $("div[for=" + playerId + "] div.song");

            if (playlist.length > 0 && $("div[for=" + playerId + "] div.song.play").length === 0) {
                $(playlist[0]).toggleClass('play', true);
            }

            url     = $(this).find('div.title').find('a').data('url');
            preroll = $(this).find('div.title').find('a').data('preroll');
            uploader = $(this).find('div.title').find('a').data('uploader');

            if (url) {
                currentTrack = url;

                // destroy existing
                if (soundManager.getSoundById(playerId)) {
                    soundManager.destroySound(playerId);
                }

                // trigger play click to re-load
                $('#play-button').triggerHandler( "click" );

                $(this).parents('#playlist').find("div.song").removeClass('play');
                $(this).addClass('play');

                // scroll to the currently playing song
                $('.plwrapper').animate({
                    scrollTop: $(this).offset().top -
                    $('.plwrapper').offset().top + $('.plwrapper').scrollTop()
                });

                audiomackPlayer.loadSongData($(this));
            }
        },

        playListSong: function (e) {
            e.preventDefault();
            e.stopPropagation();
            // avoid iOS wankery that thinks we're autoplaying shit for no reason
            var soundConfig = {
                id: 'testsound',
                url: '/point1sec.mp3',
                multiShot: false,
                stream: true,
                autoLoad: true
            };

            soundManager.createSound(soundConfig);
            // end iOS wankery avoidance

            var autoplay = false;

            $('.single-feed-item .play').toggleClass('playing', false);
            $('.feed-item .play').toggleClass('playing', false);

            // make sure no album tracks are flagged as being playing
            $('.plwrapper div.song').toggleClass('play', false);

            $(this).toggleClass('playing', true);

            // desktop || mobile

            var url = $('a', $(this).parent()).data('url') || $(this).parent().data('url') || $(this).parent().attr('href');
            currentTrack = '/api/music/url' + url;

            // read track details from data variables.  these will be injected into the list player HTML later.
            // desktop || mobile
            var artist = $('a', $(this).parent()).data('artist') || $(this).parent().data('artist');
            var title = $('a', $(this).parent()).data('title') || $(this).parent().data('title');
            var id = $('a', $(this).parent()).data('id') || $(this).parent().data('id');
            var favorite = $('a', $(this).parent()).data('favorite') || $(this).parent().data('favorite');
            var repost = $('a', $(this).parent()).data('repost') || $(this).parent().data('repost');
            preroll = $('a', $(this).parent()).data('preroll') || $(this).parent().data('preroll');
            uploader = $('a', $(this).parent()).data('uploader') || $(this).parent().data('uploader');
            var plays = $('a', $(this).parent()).data('plays');
            var favorites = $('a', $(this).parent()).data('favorites');

            if (showPreroll()) {
                autoplay = audiomackPlayer.playAd();
            }
            else {
                autoplay = true;
            }

            var type = 'song';
            // if album, move to first track
            if (url.match(/^\/album\//)) {
                type = 'album';
                currentTrack = currentTrack + '/0';

                $("div[class='song']").removeClass('play');

                $("a[data-url*='" + currentTrack + "']", $(this).closest('.track')).closest('div.song').addClass('play');

                // append track title to album title
                if (isMobilePlayer) {
                    title = $("a[data-url*='" + currentTrack + "']").text().replace(artist + " - ", "");
                }
                else {
                    title = title + ' - ' + $("a[data-url*='" + currentTrack + "']").text().replace(artist + " - ", "");
                }
            } else if (url.match(/^\/playlist\//)) {
                type = 'playlist';
            }

            listPlayer.show();
            listPlayer.load("/api/music/player"+url, function() {
                // destroy existing
                if (soundManager.getSoundById(playerId)) {
                    soundManager.destroySound(playerId);
                }

                audiomackPlayer.initPlayers();

                // inject content into listplayer HTML
                $('#play-button').triggerHandler( "click", {'autoplay': autoplay} );
                $('#listplayer').show();
                $('#listplayer .pinfo').attr({'href': url, 'target': '_blank'});
                $('#listplayer .favorite').attr({'href' : url+'/favorite'});
                $('#listPlayerRepost').attr({'href' : url + '/repost'});
                $('#listPlayerRepost').data('id', id);
                $('#listPlayerRepost').data('music_id', id);
                $('.player-title a').attr({'href': url});
                $('#listplayer').find('span.artist a').text(artist).html();
                $('#listplayer').find('span.song-title a').text(title).html();
                $('.player-icons').css("display", "flex").hide();
                $('.close-trigger').removeClass('inactive').addClass('activated');
                $('#listplayer .song-plays-stat').text(plays);
                $('#listplayer .song-favorites-stat').text(favorites);

                // Show listplayer
                if (  $('.listplayer-wrap').hasClass('not-visible') ){
	                $('.listplayer-wrap').removeClass('not-visible').addClass('visible');
                }

                // Hide searchbox
                if ( $('.search-form-wrap').hasClass('visible') ){
	                $('.search-form-wrap').removeClass('visible').addClass('not-visible');
                }

                // Make sure trigger icon is correct
                if ( $('.trigger').hasClass('close-search') ){
	                $('.trigger').removeClass('close-search').addClass('close-player');
                }

                $('#listplayer #listPlayerFavorite').data('id', id);
                $('#listplayer #listPlayerFavorite').data('music_id', id);
                $('#listplayer #listPlayerPlaylist').data('id', id);
                $('#listplayer #listPlayerPlaylist').data('music_id', id);

                if(favorite) {
                    $('#listplayer #listPlayerFavorite').addClass('active');
                } else {
                    $('#listplayer #listPlayerFavorite').removeClass('active');
                }

                if (repost) {
                    $('#listplayer #listPlayerRepost').addClass('active');
                } else {
                    $('#listplayer #listPlayerRepost').removeClass('active');
                }

                if (isMobilePlayer) {

                    if(!favorite) {
                        $('#listPlayerFavorite').html("Favorite this " + type);
                    } else {
                        $('#listPlayerFavorite').html("Un-Favorite this " + type);
                    }
                    $('#listplayer').find('a.player-favorite').attr('href', url + '/favorite');
                }

                $('.unit').css('bottom', '100px');
            });

        },

        playChartAlbumSong: function (e) {
            e.preventDefault();
            e.stopPropagation();

            var url = $(this).find('div.title').find('a').data('url');

            if (url) {
                currentTrack = url;

                // destroy existing
                if (soundManager.getSoundById(playerId)) {
                    soundManager.destroySound(playerId);
                }

                // trigger play click to re-load
                $('#play-button').triggerHandler( "click" );

                $("div.song").removeClass('play');
                $(this).addClass('play');

                // add track title
                $(this).data('title', $(this).find('div.title').find('a').data('title'));
                audiomackPlayer.loadSongData($(this));
            }
        },

        playAd: function() {
            autoplay = false;

            if ($('#video-ad').length) {
                if (vastTag === null) {
                    console.log('no vast tag assigned');
                    return;
                }

                videoContent = document.getElementById('video-ad-content');

                if (isIos()) {
                    // the Google SDK does not provide any events for when the user closes
                    // the native video player by pressing "DONE".  So we need to add a custom
                    // event handler here
                    console.log("Adding custom event handler for iOS native player");
                    videoContent.addEventListener('webkitendfullscreen', onVideoEndsFullScreen, false);
                }

                adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById('video-ad'));
                adDisplayContainer.initialize();
                adsLoader = new google.ima.AdsLoader(adDisplayContainer);

                adsLoader.addEventListener(
                    google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                    function onAdsManagerLoaded(adsManagerLoadedEvent) {
                        // Get the ads manager.
                        adsManager = adsManagerLoadedEvent.getAdsManager(videoContent);

                        // Add listeners to the required events.
                        adsManager.addEventListener(
                            google.ima.AdErrorEvent.Type.AD_ERROR,
                            onAdError
                        );
                        adsManager.addEventListener(
                            google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
                            onContentResumeRequested
                        );
                        adsManager.addEventListener(
                            google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
                            onAdEvent
                        );

                        // Listen to any additional events, if necessary.
                        adsManager.addEventListener(
                            google.ima.AdEvent.Type.LOADED,
                            onAdEvent
                        );
                        adsManager.addEventListener(
                            google.ima.AdEvent.Type.STARTED,
                            onAdEvent
                        );
                        adsManager.addEventListener(
                            google.ima.AdEvent.Type.COMPLETE,
                            onAdEvent
                        );
                        adsManager.addEventListener(
                            google.ima.AdEvent.Type.LOG,
                            onAdEvent
                        );
                        adsManager.addEventListener(
                            google.ima.AdEvent.Type.SKIPPED,
                            onAdEvent
                            );

                        try {
                            // Initialize the ads manager. Ad rules playlist will start at this time.
                            var width  = 980;
                            var height = 460;

                            if (listPlayer.length) {
                                width  = $(window).width();
                            }

                            if (isAndroid()) {
                                width  = $(window).width();
                                height = 260;
                            }

                            if ($(window).width() < width) {
                                width = $(window).width();
                            }

                            if ($(window).height() < height) {
                                height = $(window).height();
                            }

                            adsManager.init(width, height, google.ima.ViewMode.NORMAL);
                            // Call play to start showing the ad. Single video and overlay ads will
                            // start at this time; the call will be ignored for ad rules.
                            adsManager.start();
                        } catch (adError) {
                            console.log('ad error');
                            // An error may be thrown if there was a problem with the VAST response.
                        }
                    },
                    false
                );

                adsLoader.addEventListener(
                    google.ima.AdErrorEvent.Type.AD_ERROR,
                    onAdError,
                    false
                );

                var contentEndedListener = function () {
                    console.log("content video complete, play any post-roll ads");
                    adsLoader.contentComplete();
                };
                videoContent.onended = contentEndedListener;

                requestAds();

                music_url = currentTrack.match(/\/api\/music\/url\/((?:song|album)\/[^\/]+\/[^\/\?]+(?:\/[0-9]+)?)/)[1];
                trackAdPlay('requested', music_url);

                ga('send', 'event', {
                    eventCategory: 'Preroll Video Ads',
                    eventAction: 'Ad Attempted',
                    eventLabel: uploader,
                    eventValue: 1
                });
            } else {
                autoplay = true;
            }

            return autoplay;
        },

        asyncLoadTrack: function (id, currentTrack, el, action) {
            var error = '';

            if (currentTrack.match(/\/api\/music\/url\//)) {
                $.ajax({
                    url: currentTrack,
                    type: 'GET',
                    cache: false,
                    dataType: 'json',
                    data: {'extended' : 1},
                    async: true,
                    error: function(xhr, status, error) {
                        var data = $.parseJSON(xhr.responseText);

                        if(data.message) {
                            alert(data.message);
                        } else {
                            alert(error);
                        }
                    },
                    success: function(data) {
                        var url = data.url;
                        if (data.error) {
                            error = data.error;
                            console.log("error: " + error);
                        }

                        if(url.match(/^https?:\/\/(www\.)?soundcloud\.com/)) {
                            var consumer_key = "e8d4a4460406f85186559062901c8a33";

                            $.ajax({
                                url: 'https://api.soundcloud.com/resolve?url=' + url + '&format=json&consumer_key=' + consumer_key + '&callback=?',
                                dataType: 'json',
                                async: false,
                                success: function(track) {
                                    if(track.streamable) {
                                        var sc_url = track.stream_url;
                                        if(track.stream_url.indexOf("secret_token") == -1) {
                                            sc_url += '?';
                                        } else {
                                            sc_url += '&';
                                        }
                                        sc_url += 'consumer_key=' + consumer_key;
                                        data.soundcloud = track.permalink_url;
                                        $('.scloud-wrap div.waveform').css('background-image', 'url(' + track.waveform_url + ')');
                                        audiomackPlayer.loadTrack(id, currentTrack, el, action, data, sc_url);

                                    }
                                }
                            });
                        } else {
                            audiomackPlayer.loadTrack(id, currentTrack, el, action, data, url);
                        }
                    }
                });
            }
        },


        loadTrack: function(id, currentTrack, el, action, data, url) {

            //Put code here for the loading icon

            $('.icon').addClass('hidden');
            $('.song-loader').addClass('active');

            if (adError) {
                action = true;
            }
            embedFetched = false;
            var soundConfig = {
                id: id,
                url: url,
                onload: function () {
                    if(this.readyState == 3) {
                        //Put code here when the song is loaded to remove the loading icon
                        $('.song-loader').removeClass('active');
                        $('.icon').removeClass('hidden');
                    }
                },
                onbufferchange: function() {
                      soundManager._writeDebug('Buffering '+(this.isBuffering?'started': 'stopped')+'.');
                    },
                onpause: function () {
                },
                onfinish: function () {
                    $(".next-track").trigger('click', [true]);
                },
                onplay: function () {
                },
                onresume: function () {
                },
                whileplaying: function () {
                    var s = Math.round(this.position / 1000);
                    if (lastTime === 0) {
                        updateDuration(this.duration / 1000);
                    }
                    if (s === 0 || s != lastTime) {
                        highlightSlider(this.position / 1000, this.duration / 1000);
                        updateElapsed(this.position / 1000);
                        updateDuration(this.duration / 1000);
                        lastTime = s;
                    }

                },
                multiShot: false,
                stream: true,
                autoLoad: true,
                autoPlay: false
            };

            soundManager.createSound(soundConfig);

            if (soundManager.getSoundById(id).playState && !soundManager.getSoundById(id).paused) {
                if (isMobilePlayer) {
                    el.find('.icon').removeClass('fa-pause').addClass('fa-play');
                    $('.profile-image .play .fa').removeClass('fa-pause').addClass('fa-play');
                }
                else {
                    el.find('.icon').removeClass('glyphicon-pause').addClass('glyphicon-play');
                }

                if (action) {
                    soundManager.getSoundById(id).pause();
                }
            } else {
                if (isMobilePlayer) {
                    el.find('.icon').removeClass('fa-play').addClass('fa-pause');
                    $('.profile-image .play .fa').removeClass('fa-play').addClass('fa-pause');
                } else {
                    el.find('.icon').removeClass('glyphicon-play').addClass('glyphicon-pause');
                }

                if (action) {
                    soundManager.getSoundById(id).play();
                }
            }

            var ttitle;
            if ($('#listplayer').length) {
                // Even though we set the music id in playListSong() for #listPlayerPlaylist,
                // it will set it to the Album ID in the chartplayer, setting it here will ensure it
                // is set to the music id of the Album Track instead, which will ensure we properly
                // add to playlist in chartplayer context
                var playlistLink = $('#listplayer').find('#listPlayerPlaylist');
                if (playlistLink) {
                    playlistLink.data('id', 'music-' + data.id);
                }
                $('#listplayer').find('span.artist a').html(data.artist);

                if (isMobilePlayer) {
                    ttitle = data.title.replace(data.album_title + ' - ', '');
                    $('#listplayer').find('span.song-title a').html(ttitle);
                }
                else {
                    $('#listplayer').find('span.song-title a').html(data.title);
                }

                $('#listplayer').find('div.waveform').data('duration', data.duration);
                $('#listplayer').find('div.waveform').data('waveform', data.volume_data);
                if (data.album_id) {
                    $('#listplayer').find('a.player-embed.player-icon').data('music_id', data.album_id);
                } else {
                    $('#listplayer').find('a.player-embed.player-icon').data('music_id', data.id);
                }
                $('#listplayer').find('a.player-icon.download-song').hide();
                if (data.download_link) {
                     $('#listplayer').find('a.player-icon.download-song')
                        .attr('href', data.download_link)
                        .attr('target', '_self')
                        .click(function() {
                            ga('send', 'event', {
                                eventCategory: 'Downloads',
                                eventAction: $(this).attr('href').split('?')[0],
                                eventLabel: window.location.href
                            });
                            setTimeout(function() {
                                trackEvent('dl', data.id, data.token);
                            }, 250);
                        })
                        .attr('title', 'Download')
                        .show();
                    $('#listplayer').find('a.player-icon.download-song > span.glyphicon')
                        .removeClass('glyphicon-shopping-cart')
                        .addClass('glyphicon-save');
                }
                else {
                     $('#listplayer').find('a.player-icon.download-song')
                        .attr('href', '#')
                        .attr('target', '_self')
                        .click(function(e) {
                            e.preventDefault();
                        })
                        .attr('title', '');
                }
                if (data.buy_link) {
                     $('#listplayer').find('a.player-icon.download-song')
                        .attr('href', data.buy_link)
                        .attr('target', '_blank')
                        .attr('title', 'Buy Song')
                        .attr('data-original-title', 'Buy Song')
                        .click(function() {
                            ga('send', 'event', {
                                eventCategory: 'Buy Link',
                                eventAction: $(this).attr('href').split('?')[0],
                                eventLabel: window.location.href
                            });
                        })
                        .show();
                    $('#listplayer').find('a.player-icon.download-song > span.glyphicon')
                        .removeClass('glyphicon-save')
                        .addClass('glyphicon-shopping-cart');
                }
                var color = $('div.waveform').data('color');
                if (!color) {
                    color = 'ffa200';
                }
                renderPlayer(data.volume_data, color, data.duration);
            } else {
                if (isMobilePlayer) {
                    ttitle = data.title.replace(data.album_title + ' - ', '');
                    $('div.mobile-player').find('span.song-title a').html(ttitle);
                }
            }

            if(!isMobilePlayer) {
                    if (typeof data.soundcloud == 'undefined') {
                        $('a.scloud-icon').attr('href', '');
                        $('a.scloud-icon').hide();
                        $('div.player-jwplayer').css('width', '');
                    } else {
                        $('div.player-jwplayer').css('width', '100%').addClass('play-start');
                        $('a.scloud-icon').attr('href', data.soundcloud);
                        $('a.scloud-icon').show();
                    }
                } else {
                    if (typeof data.soundcloud == 'undefined') {
                        $('.via-soundcloud a').attr('href', '');
                        $('.via-soundcloud a').html("");
                        $('.via-soundcloud').hide();
                    } else {
                        $('.via-soundcloud a').attr('href', data.soundcloud);
                        $('.via-soundcloud a').html("via Soundcloud");
                        $('.via-soundcloud').show();
                    }
                }
        },

        getVastTag: function () {
            return vastTag;
        },

        setVastTag: function (v) {
            vastTag = v;
        }
    };
}(jQuery, soundManager));

function mobilePlayer() {
    isMobilePlayer = true;
    $('.mobile-player-initial').appendTo('body').toggleClass('mobile-player-initial').toggleClass('mobile-player');
}

function trackEvent(s, m, t, tn) {
    $.ajax({
        url: '/stats',
        data: {s: s, m: m, t: t, tn: tn},
        type: 'POST'
    });
}

function trackAdPlay(s, m) {
    $.ajax({
        url: '/api/ad',
        data: {s: s, m: m},
        type: 'POST'
    });
}

function trackPlaylistEvent(s, m, t, tn) {
	$.ajax({
		url: '/stats/playlist',
		data: {s: s, m: m, t: t, tn: tn},
		type: 'POST'
	});
}

function trackPromoEvent(s, m, t, promo_key) {
    $.ajax({
        url: '/stats/promo',
        data: {s: s, m: m, t: t, p: promo_key},
        type: 'POST'
    });
}

function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    var element = $(selector);
    var offset = element.offset();
    var offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time);
}

function getCurrentTS() {
    return Math.floor(new Date().getTime() / 1000);
}

function recordDl(url) {
    if (url) {
        trackEvent('dl', url, audiomack.music_token);
    }
}

function recordPromoDl(url, promo_key) {
    if (url && promo_key) {
        trackPromoEvent('dl', url, audiomack.music_token, promo_key);
    }
}

