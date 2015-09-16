var playerTPL = '<i class="caPlayer">' +
	'<a href="http://www.audiomack.com" class="plogo" target="_blank">Audiomack</a>' +
	'<a href="#" class="ps paused"></a>' +
	'<a class="pinfo" href="#" target="_blank"><span class="pband"></span><span class="psong"></span></a>' +
	'<i class="next"></i>' +
	'<i class="prev"></i>' +
	'<i class="vol"><i class="bg"><i class="bar"></i></i><i class="icon-volume-up volicon"></i></i>' +
	'<i class="progressbar">' +
			'<i class="currentTime">00:00</i>' +
			'<i class="bar">' +
					'<i class="barPlaying"><i></i></i>' +
					'<i class="barLoading"></i>' +
			'</i>' +
			'<i class="totalTime">00:00</i>' +
	'</i>' +
	'<i class="pbottom">' +
		'<i class="pleft">' +
			'<a href="#" class="pcount" target="_blank"><strong>#</strong></a>' +
			'<a href="#" class="prank" target="_blank">Rank: <strong>#</strong> this week</a>' +
		'</i>' +
		'<i class="pright">' +
			'<i class="plink">Share</i>' +
			'<i class="pembed">Embed</i>' +
			'<a href="#" target="_blank" class="dl" style="display: none;"><i>Download</i></a>' +
		'</i>' +
	'</i>' +
	'<i class="embedfield"><input type="text" /></i><i class="psocial"></i>' +
'</i>';

var skinCSSRules = [
	'.caPlayer .paused',
	'.caPlayer .progress .bar .barPlaying',
	'.caPlayer .vol .bar',
	'.caPlayer .played'
];
var skinCSSRulesMainBGH = ['.caPlayer .ps'];
var skinCSSRulesMainBG = ['.caPlayer'];
var skinCSSRulesVolumeBG = ['.caPlayer .vol .bar i','.caPlayer .vol'];
var skinCSSRulesTextColor = ['.caPlayer .progressbar .currentTime','.caPlayer .progressbar .totalTime'];
var sounds = [];
var vol = 100;

$(document).ready(function() {
		soundManager.setup({url: '/cap/swf/',  preferFlash: false, onready: initSounds});
});

function pausePlaying() {
	var id = this.id;
	$("#" + id + " .ps").removeClass('played').addClass('paused').trigger('touchend');
}

function finishPlaying() {
	var id = this.id;
	$("#" + id + " .ps").removeClass('played').addClass('paused');
	$("#" + id + " .next").click();
}

function startPlaying() {
	var id = this.id;
	$("#" + id + " .ps").removeClass('paused').addClass('played').trigger('touchend');

	var playlist = $("div[for="+id+"] div.song");

	if(playlist.length > 0 && $("div[for="+id+"] div.song.play").length == 0) {
		$(playlist[0]).toggleClass('play', true);
	}

	if(typeof ga != 'undefined') {
		ga('send', 'event', { eventCategory: 'Video Plays', eventAction: this.url.split('?')[0], eventLabel: window.location.href});
	}
	trackEvent('play', m, statToken);

	soundManager.setVolume(id, parseInt(vol));
}

function initSounds() {
	$("audio").each(function() {
		var id = $(this).attr('id');
		var url = $(this).attr('src');

		var firstColor     = $(this).data('firstColor');
		var secondColor    = $(this).data('secondColor');
		var bgColor        = $(this).data('bgColor');
		var trackTitle     = $(this).data('title');
		var trackPerformer = $(this).data('performer');
		var trackCount     = $(this).data('count');
		var trackCountLink = $(this).data('countLink');
		var trackRank      = $(this).data('rank');
		var trackRankLink  = $(this).data('rankLink');
		var trackURL       = $(this).data('url');
		var canDownload    = $(this).data('canDownload');
		var embedInput     = $(this).data('embed');
		var buyURL         = $(this).data('buyLink');
		var preroll        = $(this).data('preroll');

		applySkinColor(id, firstColor, secondColor, bgColor);
		setTrackInfo(id, trackTitle, trackPerformer, trackCount, trackCountLink, trackRank, trackRankLink, trackURL, canDownload, embedInput, buyURL);
		setBottomClicks();
		bindEvents(id);
		$("#" + id).data('url', url);

		if (preroll) {
			$("#" + id + " .ps").off('click').attr('href', trackURL).attr('target', '_blank');
		}
	});
}

function bindEvents(id) {
	$("#" + id + " .ps").click(play);
	$("#" + id + " .vol").click(volume);
	$("#" + id + " .progressbar").click(progress);

	var playlist = $("div[for="+id+"] div.song");

	if(playlist.length > 0) {
		$(playlist).click(playSong);

		$("#" + id + " .prev").show().click(prevSong);
		$("#" + id + " .next").show().click(nextSong);
	}
}

function playSong() {
	var id = $(this).parent().attr('for');
	var url = $(this).find('a').data('url');

	if(!soundManager.getSoundById(id)) {
		// avoid iOS wankery that thinks we're autoplaying shit for no reason
		var soundConfig = {
			id: 'testsound',
			url: '/point1sec.mp3',
			onpause: pausePlaying,
			onfinish: finishPlaying,
			onplay: startPlaying,
			onresume: startPlaying,
			whileplaying: progressPlaying,
			whileloading: progressLoading,
			multiShot: false,
			stream: true,
			autoLoad: true
		};

		soundManager.createSound(soundConfig);
		// end iOS wankery avoidance
	}

	initSound(id, url, true);

	$(this).parent().find("div.song").removeClass('play');
	$(this).addClass('play');

	if($("#playlist")) {
		$("#playlist").scrollTo(this);
	}

	return false;
}

function initSound(id, url, play_on_load) {
	var soundConfig = {
		id: id,
		url: url,
		onpause: pausePlaying,
		onfinish: finishPlaying,
		onplay: startPlaying,
		onresume: startPlaying,
		whileplaying: progressPlaying,
		whileloading: progressLoading,
		multiShot: false,
		stream: true,
		autoLoad: true
	};

	if(play_on_load) {
		soundConfig.autoPlay = true;
	}

	if(url.match(/^https?:\/\/(www\.)?soundcloud\.com/)) {
		var consumer_key = "e8d4a4460406f85186559062901c8a33";

		$.getJSON('https://api.soundcloud.com/resolve?url=' + url + '&format=json&consumer_key=' + consumer_key + '&callback=?', function(track) {
			if(track.streamable) {
				scurl = track.stream_url;
				(scurl.indexOf("secret_token") == -1) ? scurl = scurl + '?' : scurl = scurl + '&';
				scurl = scurl + 'consumer_key=' + consumer_key;

				soundConfig.url = scurl;
				soundManager.destroySound(id);
				soundManager.createSound(soundConfig);

				$(".dl").toggleClass('soundcloud', true)
					.attr('href', url).show()
					.children("i").text("via SoundCloud");
			}
		});
	} else if(url.match(/api\/music\/url\//)) {
		$.ajax({
			url: url,
			type: 'GET',
			cache: false,
			dataType: 'json',
			error: function(xhr, status, error) {
				var data = $.parseJSON(xhr.responseText);

				if(data.message) {
					alert(data.message);
				} else {
					alert(error);
				}
			},
			success: function(data, status, xhr) {
				soundConfig.url = data.url;
				soundManager.destroySound(id);
				soundManager.createSound(soundConfig);

				$.event.trigger({
					type: 'sm2-sound-ready',
					sm2_sound_id: id
				});
			}
		});
	} else {
		soundManager.destroySound(id);
		soundManager.createSound(soundConfig);
	}
}

function applySkinColor(id, firstColor, secondColor, bgColor) {
	$("#"+id).replaceWith($(playerTPL).attr('id',id));

	$('.pband, .pbottom .pleft .pcount, .pbottom .pright .dl i').css('color', secondColor);
	$('.caPlayer, .embedfield, .psocial, .plwrapper').css('background-color', bgColor);

	$('.plink, .pembed, .prank, .pcount, .dl i').css('color', secondColor).on({
		mouseenter: function() {
			$(this).css('color',firstColor)
		},
		mouseleave: function() {
			$(this).css('color',secondColor)
		}
	});

	$('.caPlayer .ps').on({
		touchstart: function() {
			$('.caPlayer .ps').off('mouseenter,mouseleave');
			$(this).css('background-color', '#5f5f5f')
		},
		touchend: function() {
			$(this).css('background-color', firstColor)
		},
		touchcancel: function() {
			$(this).css('background-color', firstColor)
		}
	});

	$('.caPlayer .ps').css('background-color', firstColor).on({
		mouseenter: function() {
			$(this).css('background-color', '#5f5f5f')
		},
		mouseleave: function() {
			$(this).css('background-color', firstColor)
		}
	});

	$('.caPlayer .progressbar .bar .barPlaying, .caPlayer .progressbar .bar .barPlaying i, .caPlayer .vol .bar').css('background-color',firstColor);
	$('.progressbar .bar, .caPlayer .vol bg').css('background-color',secondColor);
	$('.pright .btn').css('background', firstColor);
	$('.psong, .index').css('color', firstColor);
	$('.caPlayer .progressbar .currentTime, .caPlayer .progressbar .totalTime').css('color', secondColor);
}

function setTrackInfo(id, trackTitle, trackPerformer, trackCount, trackCountLink, trackRank, trackRankLink, trackURL, canDownload, embedInput, buyURL) {
	$('.pinfo').attr('href', trackURL);
	$('.pband').text(trackPerformer);
	$('.psong').text(trackTitle);
	$('.pcount strong').text(trackCount).parent().attr('href', trackURL);
	$('.prank strong').text(trackRank);
	$('.prank').attr('href', trackRankLink);
	$('.pright .dl').attr('href', trackURL);
	$('.embedfield input').attr('value', embedInput);
	$('.psocial').append($("#sharing"));
	if($(".dl.soundcloud").length == 0) {
		if(canDownload != true && !buyURL) {
			$('.pbottom .dl').hide();
		} else if(buyURL) {
			$('.pbottom .dl').attr('href', buyURL);
			$('.pbottom .dl i').text('Buy');
			$('.pbottom .dl').show();
		} else if(canDownload == true) {
			$('.pbottom .dl').show();
		}
	}
}

function setBottomClicks() {
	$('.plink').click(function() {
		$('.embedfield').removeClass('shown');
		$('.psocial').toggleClass('shown');
	});

	$('.pembed').click(function() {
		$('.psocial').removeClass('shown');
		$('.embedfield').toggleClass('shown');
		$('.embedfield input').focus().select();
	});

	$('.closeit').click(function() {
		$('.embedfield, .psocial').removeClass('shown');
	});
}

function volume(e) {
	var fullwidth = $(this).width();
	var id = $(this).parent().attr('id');
	vol = (e.pageX - $(this).offset().left) / fullwidth * 100;

	if(vol < 0)  { vol = 0; }
	if(vol > 95) { vol = 100; }

	soundManager.setVolume(id, parseInt(vol));
	var width = parseInt(fullwidth*(vol/100));

	$("#" + id + " .vol .bar").css('width', width + "px");
}

function progress(e) {
	var id = $(this).parent().attr('id');
	var x = e.pageX - $(".bar", this).offset().left;
	var duration = soundManager.getSoundById(id).durationEstimate;
	var min = 0;
	var max = $(".bar", this).width();
	var pos = 0;

	if ( x < min) {
		pos = 0;
	} else if ( x > max) {
		pos = 1;
	} else {
		pos = ( x - min ) / max;
	}

	soundManager.setPosition(id,parseInt(pos*duration));
	soundManager.play(id);
}

function play(e) {
	e.preventDefault();

	var id = $(this).parents('.caPlayer').attr('id');

	if(!soundManager.getSoundById(id)) {
		// avoid iOS wankery that thinks we're autoplaying shit for no reason
		var soundConfig = {
			id: 'testsound',
			url: '/point1sec.mp3',
			onpause: pausePlaying,
			onfinish: finishPlaying,
			onplay: startPlaying,
			onresume: startPlaying,
			whileplaying: progressPlaying,
			whileloading: progressLoading,
			multiShot: false,
			stream: true,
			autoLoad: true
		};

		soundManager.createSound(soundConfig);
		// end iOS wankery avoidance

		initSound(id, $(this).parents('.caPlayer').data('url'), true);
	} else if( $(this).hasClass('paused') ) {
		soundManager.play(id);
	} else {
		soundManager.pause(id);
	}
}

function nextSong(e) {
	e.preventDefault();

	var id = $(this).parent().attr('id');

	var current = $("div[for="+id+"] div.song.play");
	var nextSong = current.next();

	if(!current) {
		$("div[for="+id+"] div.song:first-child").click();
	} else if(nextSong.hasClass('song')) {
		nextSong.click();
	}
}

function prevSong(e) {
	e.preventDefault();

	var id = $(this).parent().attr('id');

	var current = $("div[for="+id+"] div.song.play");
	var prevSong = current.prev();

	if(!current) {
		$("div[for="+id+"] div.song:last-child").click();
	} else if(prevSong.hasClass('song')) {
		prevSong.click();
	}
}

function progressLoading() {
	var id = this.id;

	var current = (this.bytesLoaded/this.bytesTotal) * 100;
	$("#" + id + " .barLoading").css( 'width', current +'%');
}

function progressPlaying() {
	var id = this.id;

	var current = (this.position/this.durationEstimate)*100;
	$("#" + id + " .barPlaying").css( 'width', current +'%');
	$("#" + id + " .currentTime").html(ms2time(this.position));
	$("#" + id + " .totalTime").html(ms2time(this.durationEstimate));
}

function ms2time(ms) {
	var sec = parseInt(ms/1000);
	var min = parseInt(sec/60)
	var sec = sec % 60;

	return min + ":" + ( sec < 10 ? '0' + sec : sec);
}

function trackEvent(s, m, t) {
	$.ajax({
		url: '/stats',
		data: {s: s, m: m, t: t},
		type: 'POST'
	});
}

$.fn.scrollTo = function( target, options, callback ){
	if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
	var settings = $.extend({
		scrollTarget  : target,
		offsetTop     : 200,
		duration      : 500,
		easing        : 'swing'
	}, options);
	return this.each(function() {
		var scrollPane = $(this);
		var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
		var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
		scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function() {
			if (typeof callback == 'function') { callback.call(this); }
		});
	});
}
