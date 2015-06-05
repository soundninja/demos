var Player = Player || {};

function player_define($) {
    $.extend(Player, true, {
        $current_track        : false,
        update_interval_object: false,
        update_interval_ms    : 300,
        locks: [],

        init: function () {
            if (typeof SC != "object")
                return;

            var $player = $("#player"),
                soundcloud_playlist_id = $player.data("scPlaylistId");

            if ($player.length > 0) {
                Player.update_interval_object = setInterval(Player.update_play_status, Player.update_interval_ms);
                Playlist.loadPlaylist(soundcloud_playlist_id, $player, function () {
                    if ($(".track").length > 0) {
                        Player.initTrackBindings($player);
                        Player.play();
                    }
                });
                Player.urlCommand();
                Player.initBindings();
            }
        },

        /**
         * This can be called on a player with play/pause buttons or where the whole track is clickable
         * It can be called on tracks or on a list of tracks
         *
         * @param $container
         */
        initTrackBindings: function ($container) {
            var $track_container = false,
                $play_buttons;
            if ($container.hasClass("track")) {
                $track_container = $container;
            } else {
                $track_container = $container.find(".track");
            }

            $play_buttons = $track_container.find(".play");
            if ($play_buttons.length > 0) {
                $play_buttons
                    .off("click.player")
                    .on("click.player", Player.play_click);
                $track_container.find(".pause")
                    .off("click.player")
                    .on("click.player", Player.pause);
            } else {
                $track_container
                    .off("click.player")
                    .on("click.player", function () {
                            if ($(this).hasClass('playing')) {
                                Player.pause();
                            } else {
                                Player.play($(this));
                            }
                            return false;
                        });
            }
            $container.find(".duration-bar")
                .off("click.player")
                .on("click.player", Player.duration_click);
        },

        initBindings: function () {
            var $mainControl = $(".main-control");
            $mainControl.find(".skip-reverse").on("click", function () {
                Player.pause();
                Player.prev();
                Player.play();
                return false;
            });
            $mainControl.find(".play").on("click", function () {
                Player.play();
                return false;
            });
            $mainControl.find(".pause").on("click", function () {
                Player.pause();
                return false;
            });
            $mainControl.find(".skip-forward").on("click", function () {
                Player.pause();
                Player.next();
                Player.play();
                return false;
            });
            $(window).on("message", Player.receiveMessage);
        },

        urlCommand: function () {
            var params = Player.getUrlParams();
            params["url"] = decodeURIComponent(params["url"]);
            Player.performCommand(params);
        },

        getUrlParams: function () {
            var query_params = location.search.split("?")[1],
                split_params = [],
                params = {};

            if (typeof query_params == "string") {
                split_params = query_params.split("&");
                $.each(split_params, function () {
                    var param = this.split("=");
                    params[param[0]] = param[1];
                });
            }
            return params;
        },

        performCommand: function (cmd) {
            var $player = $("#player");
            if (cmd.cmd == "play") {
                SC.get(
                    '/resolve',
                    {url: cmd.url},
                    function (track) {
                        var $track_ele = Playlist.addTrack(track, $player);
                        Playlist.refreshTrackData();
                        Player.initTrackBindings($track_ele);
                        Player.play($track_ele);
                    }
                );
            }
        },

        /**
         * Accept messages from other windows
         * @param event
         */
        receiveMessage: function (event) {
            if (event.originalEvent.origin == location.origin && event.originalEvent.data.type == "sm-player") {
                var message = event.originalEvent.data;
                Player.performCommand(message);
            }
        },
        showPlay      : function () {
            var $mainControl = $(".main-control");
            $mainControl.find(".pause").css("display", "none");
            $mainControl.find(".play").css("display", "inline-block");
        },
        show_pause    : function () {
            var $mainControl = $(".main-control");
            $mainControl.find(".pause").css("display", "inline-block");
            $mainControl.find(".play").css("display", "none");
        },

        play_click: function () {
            Player.play($(this).closest(".track"));
            return false;
        },

        play: function ($track_ele, callback) {
            // Default to current, then first track
            if (typeof $track_ele !== "object" && typeof Player.$current_track == "object") {
                $track_ele = Player.$current_track;
            }
            if (typeof $track_ele !== "object") {
                $track_ele = $($(".track")[0]);
            }

            // Lock out while call is pending
            if(Player.locks["play" + $track_ele.attr('id')])
                return;
            // Lock for current id
            Player.locks["play" + $track_ele.attr('id')] = true;

            // Scroll to new track
            $("#player").scrollTop($track_ele.offset().top);

            // Stop currently playing track
            if (typeof Player.$current_track == "object" && typeof Player.$current_track.data('sound') == "object") {
                if($track_ele == Player.$current_track) {
                    Player.$current_track.data('sound').pause();
                } else {
                    Player.$current_track.data('sound').stop();
                }
            }
            //$(".track").each(function(){ if($(this).data('sound')){$(this).data('sound').pause()} })

            var $loader = $track_ele.find('.loading'),
                $track_data = $track_ele.data("sc_track");

            // Play existing sound or stream new one
            Player.$current_track = $track_ele;
            if ($track_ele.data('sound')) {
                $track_ele.data('sound').play();
                Player.show_pause();

                Player.locks["play" + $track_ele.attr('id')] = false;
                if (typeof callback == "function") {
                    callback();
                }
            }
            else {
                $loader.show();
                SC.stream(
                    "/tracks/" + $track_data.id,
                    {},
                    function (sound) {
                        $loader.hide();
                        $track_ele.data('sound', sound);
                        $track_ele.data('sound').play();

                        $track_ele.data('loaded', $track_ele.data('loaded') ? $track_ele.data('loaded') + 1 : 0);
                        console.log("loaded " + $track_ele.data('loaded'));

                        Player.show_pause();

                        Player.locks["play" + $track_ele.attr('id')] = false;
                        if (typeof callback == "function") {
                            callback();
                        }
                    });
            }

            var art = Playlist.change_image_size($track_data.artwork_url, 't500x500'),
                $hero = $("#hero");

            // Toggle classes
            $('#player .track').removeClass('current playing');
            Player.$current_track.addClass('current playing');
            $hero.find('.song-image img').attr('src', art).toggle(Boolean(art !== null));
            $hero.find(".artist").text($track_data.artist);
            $hero.find(".title").text($track_data.title);
        },

        pause: function () {
            Player.$current_track.removeClass('playing')
                .data('sound').pause();
            Player.showPlay();
            return false;
        },

        update_play_status: function () {
            // Guard against uninitialized player
            if (typeof Player.$current_track !== "object" || typeof Player.$current_track.data('sound') !== "object") {
                return false;
            }
            var sound = Player.$current_track.data('sound'),
                percent_duration = (100 * sound.position / sound.duration);

            if (sound.readyState == 3) {
                $('#hero .main-control .status').html(
                    Playlist.duration_to_minutes(sound.position) + "/" +
                    Playlist.duration_to_minutes(sound.duration) + ""
                );
                Player.$current_track.find(".progress-bar").width(percent_duration + "%");
                $("#hero .progress-bar").width(percent_duration + "%");
            }

            // Update current track to next if complete
            if (sound.readyState == 3 && sound.position == sound.duration) {
                Player.next();
                Player.play(Player.$current_track);
            }
        },

        /**
         * Get the next track, skip not-streamable
         */
        next: function () {
            var $next = Player.get_next_track(Player.$current_track);
            while ($next.hasClass('not-streamable')) {
                $next = Player.get_next_track($next);
            }

            if ($next.length > 0) {
                Player.$current_track = $next
            }
        },

        prev          : function () {
            var $prev = Player.get_prev_track(Player.$current_track);
            while ($prev.hasClass('not-streamable')) {
                $prev = Player.get_prev_track($prev);
            }
            if ($prev.length > 0) {
                Player.$current_track = $prev
            }
        },

        // Get the next track, loop back to first at end, ignore streamable
        get_next_track: function ($track) {
            var $next,
                $tracks = $('.track');
            if (typeof $track == "undefined") {
                $track = Player.$current_track
            }

            if ($track.is($('.track').last())) {
                $next = $tracks.first();
            }
            else {
                $next = $track.next();
            }
            return $next;
        },

        // Get the next track, loop back to first at end, ignore streamable
        get_prev_track: function ($track) {
            var $prev,
                $tracks = $('.track');
            ;
            if (typeof $track == "undefined") {
                $track = Player.$current_track
            }
            if ($track.is($('.track').first())) {
                $prev = $tracks.last();
            }
            else {
                $prev = $track.prev();
            }
            return $prev;
        },

        duration_click: function (e) {
            var $duration_bar = $(this),
                $track = $duration_bar.closest('.track'),
                click_x = e.pageX - $duration_bar.offset().left;

            Player.play($track, function () {
                var new_position = Math.round(click_x / $duration_bar.width() * $track.data('sound').duration);
                Player.$current_track.data('sound').setPosition(new_position)
            });

            return false;
        }
    });

    Player.init();
};

jQuery(document).on("ready", function () {
    if (typeof SC != "undefined") {
        player_define(jQuery);
    }
});