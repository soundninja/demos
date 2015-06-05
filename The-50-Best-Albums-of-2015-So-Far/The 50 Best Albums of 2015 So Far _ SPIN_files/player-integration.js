jQuery(document).on("ready", function ($) {
    $(".player-launch-button").on("click", function () {
        // Get reference to new or existing player window
        var player_window = window.open("", "music", "toolbar=no,location=no,status=no,menubar=no,scrollbars=0,resizable=no,width=770,height=823"),
            sc_url = $(this).data('url');

        if (player_window.location.pathname.indexOf("/player") != 0) {
            player_window.location.replace("/player/new-music?cmd=play&url=" + encodeURIComponent(sc_url));
        }

        player_window.postMessage({
                                      type: 'sm-player',
                                      cmd : 'play',
                                      url : sc_url
                                  }, '*');
    });
}(jQuery));