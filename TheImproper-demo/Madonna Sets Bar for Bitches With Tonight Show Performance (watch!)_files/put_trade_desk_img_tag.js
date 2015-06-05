if (typeof blogads_tracer_for_book_excerpt_tracking_tags === 'undefined') {
    function blogads_tracer_for_book_excerpt_tracking_tags(tracer_id) {
        var targetImage = new Image();
        targetImage.src = '//tracer.blogads.com/click.php?zoneid='+tracer_id+'&rand='+Math.floor(Math.random()*100000);
    }
}

if (typeof getCookie_for_blogads_book_excerpt_tracking_tags === 'undefined') {
    function getCookie_for_blogads_book_excerpt_tracking_tags(c_name)
    {
      var i,x,y,ARRcookies=document.cookie.split(";");
      for (i=0;i<ARRcookies.length;i++)
      {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("=")).trim();
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1).trim();
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
        {
          return unescape(y);
        }
      }
      return false;
    }
}

if (typeof search_in_array === 'undefined') {
    function search_in_array(searched_element,list_in_search) {
        for(var i=0;i<list_in_search.length;i++){
            if (list_in_search[i]===searched_element) return true;
        }
        return false;
    }
}


if (typeof setCookie_for_blogads_book_excerpt_tracking_tags === 'undefined') {
    function setCookie_for_blogads_book_excerpt_tracking_tags(c_name,value)
    {
        var now = new Date();
        var time = now.getTime();
        time += 60*60*1000*24*3000;
        now.setTime(time);
        var parts = document.location.host.split('.');
        var upperleveldomain = parts[parts.length-2]+'.'+parts[parts.length-1];
        var c_value=escape(value) + "; expires="+now.toUTCString() + '; path=/; domain=.'+upperleveldomain;
        document.cookie=c_name + "=" + c_value;
        if (!getCookie_for_blogads_book_excerpt_tracking_tags(c_name)) {
            var c_value=escape(value) + "; expires="+now.toUTCString() + '; path=/';
            document.cookie=c_name + "=" + c_value;
        }
    }
}

if (typeof insert_tracking_tag === 'undefined') {
    function insert_tracking_tag(tracking_tag_url) {
        if (tracking_tag_url!=='') {
            var targetImage = new Image();
            targetImage.src = tracking_tag_url;
            return true;
        }
    }
}

if (typeof getAudienceSegments === 'undefined') {
    function getAudienceSegments()
    {
        var images = document.getElementsByTagName('img');
        for (var i=0;i<images.length;i++){
            if (images[i].src.indexOf('i.blogads.com/static/book_excerpt_feature/images/blank.gif?audience_segments=')!==-1) {
                return images[i].src.split('audience_segments=')[1]
            }
        }
        return '';
    }
}

function put_trade_desk_image_tag(){
    try {
        if (!getCookie_for_blogads_book_excerpt_tracking_tags('blogads_book_excerpt_put_ttd_tracking_tags')){
            if (typeof window['audience_segments_and_ttd_tracking_tags']==='undefined') {
                var s = document.createElement('script');
                s.type='text/javascript';
                s.src= '//i.blogads.com/static/book_excerpt_feature/audience_segments_and_tracking_tags_pairs.js'+'?rand='+Math.floor(Math.random()*10000);
                document.getElementsByTagName('head')[0].appendChild(s);
            }
            
            if (getAudienceSegments()==='') {
                var s = document.createElement('script');
                s.type='text/javascript';
                s.src= '//bef.blogads.com/book_excerpt_feature_get_segments_cookie_new.php'+'?rand='+Math.floor(Math.random()*10000);
                document.getElementsByTagName('head')[0].appendChild(s);
        
                if (typeof window['circle_counter_for_put_trade_desk_tracing_tags'] ==='undefined') window['circle_counter_for_put_trade_desk_tracing_tags'] = 1;
                else window['circle_counter_for_put_trade_desk_tracing_tags'] += 1;
                if (getAudienceSegments()==='' && window['circle_counter_for_put_trade_desk_tracing_tags']<=3) {
                    setTimeout(function(){
                            put_trade_desk_image_tag();
                    },3000);
                    return false;
                }
                else if (getAudienceSegments()==='' && window['circle_counter_for_put_trade_desk_tracing_tags']>3) {
                    if (typeof console == "undefined") {
                        window.console = {
                            log: function () {}
                        };
                    }
                    console.log('The "blogads_book_excerpt_segments" cookie is not available.');
                }
            }
            else if (typeof window['audience_segments_and_ttd_tracking_tags']!=='undefined') {
                var audience_segments = getAudienceSegments();
                var audience_segments_array = audience_segments.split('|');
                var put_tracking_tags = Array();
                if (audience_segments_array.length>0){
                    for (var i=0;i<audience_segments_array.length;i++){
                        var audience_segment = audience_segments_array[i];
                        if (typeof window['audience_segments_and_ttd_tracking_tags'][audience_segment.replace('_hover','').replace('_int','').replace('_click','')] !=='undefined'){
                            if (audience_segment.indexOf('_hover')!==-1) {
                                insert_tracking_tag(window['audience_segments_and_ttd_tracking_tags'][audience_segment.replace('_hover','')]['hover']);
                                if (!search_in_array(audience_segment.replace('_hover','').replace('_int','').replace('_click',''),put_tracking_tags)) put_tracking_tags.push(audience_segment.replace('_hover','').replace('_int','').replace('_click',''));
                            }
                            else if (audience_segment.indexOf('_click')!==-1){ 
                                insert_tracking_tag(window['audience_segments_and_ttd_tracking_tags'][audience_segment.replace('_hover','')]['click']);
                                if (!search_in_array(audience_segment.replace('_hover','').replace('_int','').replace('_click',''),put_tracking_tags)) put_tracking_tags.push(audience_segment.replace('_hover','').replace('_int','').replace('_click',''));
                            }
                            else if (audience_segment.indexOf('_int')!==-1){ 
                                insert_tracking_tag(window['audience_segments_and_ttd_tracking_tags'][audience_segment.replace('_hover','')]['int']);
                                if (!search_in_array(audience_segment.replace('_hover','').replace('_int','').replace('_click',''),put_tracking_tags)) put_tracking_tags.push(audience_segment.replace('_hover','').replace('_int','').replace('_click',''));
                            }
                            else {
                                insert_tracking_tag(window['audience_segments_and_ttd_tracking_tags'][audience_segment.replace('_hover','')]['int']);
                                if (!search_in_array(audience_segment.replace('_hover','').replace('_int','').replace('_click',''),put_tracking_tags)) put_tracking_tags.push(audience_segment.replace('_hover','').replace('_int','').replace('_click',''));
                            }
                        }
                    }
                    if (put_tracking_tags.length > 0) {
                        blogads_tracer_for_book_excerpt_tracking_tags('blogads_book_excerpt_sum_of_visitors_who_had_any_segments');
                    }
                    for (var i=0;i<put_tracking_tags.length;i++){
                        blogads_tracer_for_book_excerpt_tracking_tags('blogads_book_excerpt_segment_'+put_tracking_tags[i]+'_active_reach');
                    }
                }
            }
            setCookie_for_blogads_book_excerpt_tracking_tags('blogads_book_excerpt_put_ttd_tracking_tags','1');
            blogads_tracer_for_book_excerpt_tracking_tags('blogads_book_excerpt_sum_of_visitors_who_we_have_already_cookied');
        }
    }
    catch(e) {
        return true;
    }
}

