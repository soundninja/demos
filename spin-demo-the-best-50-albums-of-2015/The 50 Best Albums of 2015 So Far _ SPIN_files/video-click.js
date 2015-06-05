jQuery(function($){
    var video_ckick_id = 0;

    function fix_5min_video(str) {
        rx = /<script[^>]+src=['"](.*?)['"]/i;
        var m = str.match(rx);
        if (!m) {
            return str;
        }
        var src = m[1];
        if (src.indexOf('http://pshared.5min.com/')!=0) {
            return str;
        }
        if (src.indexOf('createdByUser')>0 || src.indexOf('userPlaceHolder')>0) {
            return str;
        }
        var new_src = src+'&amp;createdByUser=true&amp;autoStart=true&amp;userPlaceHolder='+id;
        return str.replace(src, new_src);
    }

    $('.cbme-video-swap').click(function(){
        var el = $(this),
            $videoEmbedCode = $('.video-embed-code', this);
        if (el.hasClass('swapped') || !$videoEmbedCode.length) {
            return;
        }
        el.addClass('swapped');
        video_ckick_id++;
        var embed_code = decodeURIComponent( $videoEmbedCode.text() );
        embed_code = fix_5min_video(embed_code);
        el.empty().append(embed_code);
    });
});
