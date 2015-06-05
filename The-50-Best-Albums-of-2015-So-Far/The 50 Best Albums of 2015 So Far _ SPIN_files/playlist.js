var Playlist = Playlist || {};

function pl_define($) {
    $.extend(Playlist, true, {
        $current_track: false,
        update_interval_object: false,
        update_interval_ms: 300,
        $track_template: false,
        saved_track_data: false,
        playlist: false,

        /**
         * Initialize playlist. Expect a "#track-template" element that can be
         * cloned.
         */
        init: function () {
            Playlist.$track_template = $("#track_template").remove().removeAttr('id');
            Playlist.saved_track_data = {};

            if (typeof localize == "undefined" || typeof localize.soundcloud_client_id == "undefined" || localize.soundcloud_client_id.length < 1) {
                console.log("client_id not found!");
            }
            else {
                SCobj.initialize({client_id: localize.soundcloud_client_id});
            }
        },

        /**
         * Get the SoundCloud playlists for the given user, can get any user's public playlists
         * @param user
         * @param callback
         */
        getUserPlaylists: function (user, callback) {
            SCobj.get("/users/" + user + "/playlists", {}, callback);
        },

        /**
         * Load given playlist element with ".track" HTML elements.
         *
         * @param playlist_id @param playlist_element
         * @param lp_callback
         */
        loadPlaylist: function (playlist_id, playlist_element, lp_callback) {
            if (typeof(playlist_id) != "undefined" && $.trim(playlist_id) != "") {
                SCobj.get('/playlists/' + playlist_id, {}, function (playlist) {
                    var $tracks = $(playlist.tracks),
                        $player = playlist_element;

                    $player.find(".track").remove();
                    // Save SC data to items
                    $tracks.each(function() {
                        Playlist.addTrack(this, $player);
                    });
                    Playlist.refreshTrackData(lp_callback);
                });
            }
            else {
                if (typeof lp_callback == "function") {
                    lp_callback();
                }
            }
        },

        /**
         * Refresh track data for all tracks in playlist based on current track elements
         */
        refreshTrackData: function(rtd_callback) {
            var sc_playlist = [];
            $(".track").each(function() {
                sc_playlist.push($(this).data('sc_track'));
            });

            // Check tracks for DB saved data
            // On success, populate track data with combined data
            $.ajax({
                       type    : "post",
                       url     : localize.ajaxurl,
                       dataType: 'json',
                       data    : {
                           action: 'get-track-data',
                           tracks: JSON.stringify(sc_playlist)
                       },
                       success : function (response) {
                           $(response.track_data).each(function () {
                               Playlist.saved_track_data["" + this.sc_id] = this;
                           });
                           $(".track").each(Playlist.applyTrackData);

                           if (typeof rtd_callback == "function") {
                               rtd_callback();
                           }
                       }
                   });
        },

        /**
         * Add a track to the playlist with the given SoundCloud track object
         * @param sc_track
         * @param $player
         * @returns {*}
         */
        addTrack: function (sc_track, $player) {
            var $old_track = Playlist.getTrack(sc_track.id),
                $new_track = Playlist.$track_template.clone();

            if($old_track.length == 0){
                $new_track.attr('id', "sc_" + sc_track.id);
                $player.append($new_track);
                Playlist.saveSCTrackData($new_track, sc_track);
            }
            else {
                $new_track = $old_track;
            }
            return $new_track;
        },

        /**
         * Get any tracks from playlist that match the given SoundCloud id
         * @param track_id
         * @returns {*|jQuery|HTMLElement}
         */
        getTrack: function(track_id) {
            return $("#sc_" + track_id);
        },

        /**
         * Save SoundCloud track data on element, also applies image.
         * @param $track_ele
         * @param sc_track
         */
        saveSCTrackData: function ($track_ele, sc_track) {
            $track_ele.data("sc_track", sc_track);

            Playlist.applyImage($track_ele.find(".artwork"), Playlist.change_image_size(sc_track.artwork_url, "badge"));
        },

        /**
         * Display data found in SoundCloud or in site's DB
         */
        applyTrackData: function () {
            var $track_ele = $(this),
                sc_track = $track_ele.data("sc_track");

            // Override SC values with saved values
            if ("" + sc_track.id in Playlist.saved_track_data) {
                $.extend(sc_track, true, Playlist.saved_track_data[sc_track.id]);
            }

            var artist = sc_track.artist ? sc_track.artist : sc_track.user.username,
                title = sc_track.title;
            if (!sc_track.streamable) {
                $track_ele.addClass("not-streamable");
            }
            $track_ele.find(".artist").text(artist).val(artist);
            $track_ele.find(".title").text(title).val(title);
            $track_ele.find(".duration").text(Playlist.duration_to_minutes(sc_track.duration));

            // save artist for next time
            sc_track.artist = artist;
        },

        /**
         * Convert SoundCloud "duration attribute to minutes:seconds
         * @param duration
         * @returns {string}
         */
        duration_to_minutes: function (duration) {
            var date = new Date(duration),
                mm = date.getUTCMinutes(),
                ss = date.getSeconds();
            if (mm < 10) {
                mm = "0" + mm;
            }
            if (ss < 10) {
                ss = "0" + ss;
            }
            return mm + ":" + ss;
        },

        /**
         * Change the SoundCloud thumbnail used
         * @param artwork_url
         * @param new_size
         */
        change_image_size: function (artwork_url, new_size) {
            if (/\-large\.(jpg|jpeg|png|gif)$/i.test(artwork_url)) {
                return artwork_url.replace("-large.", "-" + new_size + ".");
            }
            else {
                return artwork_url;
            }
        },

        /**
         * Apply image to track/playlist element. Show playlist icon if image is not found
         * @param ele
         * @param url
         * @param ele_class
         */
        applyImage: function (ele, url, ele_class) {
            $(ele)
                .show()
                .on("error", function () {
                    $("<div class='artwork'><div class='wp-menu-image dashicons-before dashicons-playlist-audio'></div></div>").insertAfter(this);
                    $(this).hide();
                })
                .prop("src", url);
        }
    });

    Playlist.init();
};

jQuery(function () {
    if (typeof SC != "undefined") {
        SCobj = SC;

        pl_define(jQuery);
    }
});