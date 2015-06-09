
//ECMAScript 6 Poly Fill
if ( !String.prototype.contains ) {
    String.prototype.contains = function() {
        return String.prototype.indexOf.apply( this, arguments ) !== -1;
    };
}


var original_url = window.location.pathname;





var sitemeter_iframe;
/**
 * Registers pageview via ajax
 *
 */
function registerPageView(url){

  // pageTracker._trackPageview(url + '?image=' + currentPage);
  //_gaq.push(['_trackPageview', url + '?page=' + currentPage]);

  if ( window.location.host.contains('radio.green-label') ) {
    ga('send', 'pageview');  
  } else {
    _gaq.push(['_trackPageview', url]); 
    _gaq.push(['greenlabel_p._trackPageview', url]);
    ga('send', 'pageview');
  }
    

  // COMSCORE
  try {

    COMSCORE.beacon({
      c1:2,
      c2:6685975,
      c3:"",
      c4:"",
      c5:"",
      c6:"",
      c15:""
    });  
  
  } catch(e){}
    
     
    
  try {
    _qevents.push({qacct:"p-a0gOdUACucKCE", event:"refresh" });
  } catch (e) { }    
    

  //reload SailThru tracking code
  if (typeof reloadHorizon == 'function') { 
      reloadHorizon(); 
  }


  //var sitemeter_url = '/includes/html/sitemeter-tracker.html?t=1&url=' + escape(url) + '&image=' + currentPage;
  var sitemeter_url = '/wp-includes/sitemeter/sitemeter-tracker.html?t=1&url=' + escape(url);
  
  if (!sitemeter_iframe) {        
      sitemeter_iframe = createIFrame(sitemeter_url, 0, 0, 'sitemeter_iframe');        
      document.body.appendChild(sitemeter_iframe);        
  } else {        
      //sitemeter_iframe.src = sitemeter_url;
      sitemeter_iframe.contentWindow.location.replace(sitemeter_url);
  }
  
}

function createIFrame(src, width, height, ad_iframe_id) {
    ifrm = document.createElement("IFRAME");
    ifrm.setAttribute("src", src);
    ifrm.style.width = width +"px";
    ifrm.style.height = height +"px";
    ifrm.style.border = "none";
    ifrm.style.position = "absolute";
    ifrm.style.zIndex = "1000";
    ifrm.marginheight = 0;
    ifrm.marginwidth = 0;
    ifrm.width = width;
    ifrm.height = height;
    ifrm.scrolling = "no";
    ifrm.frameBorder = "0";
    ifrm.border = "0";
    ifrm.id = ad_iframe_id; 
    return ifrm;
} 

var sidebar_scroll_fixed;



/**
* Attaches ads to channel sidebar. Not currently being used
function appendSidebarAds() {
   var neword = Math.random()*10000000000000000;
    tile_num++;
    sidebarIFrame300x250_tile_num = tile_num;

    // To Do: change this to use cmnUNT for ad refreshing 
   $('#sidebar-scroll-300x250-container').writeCapture().html('<div id="cmn_ad_tag_300x250"><scr'+'ipt language="JavaScript" src="http://ad.doubleclick.net/adj/'+cmn_site+'/'+zone+subzone+';kw='+ silo + subsilo + cmntier + keywords + ',writecap' + kw_exclude + searchkw +';'+ exclude +'sz=300x250;tile='+sidebarIFrame300x250_tile_num+';ord='+neword+'?" type="text/javascript"></scr'+'ipt></div>');
   
}
*/




  

  
  
  
/**
 * Append In-Content Ad Call for Infinite Scroll
 * @param  bool incr true or false to increment
 * @return {[type]}      [description]
 */
function appendInContentAd( incr ){
  jQuery('#main .row').append('<div id="in-content-ad-container-' + tile_num + '" class="post in-content-ad"/>');
  postscribe('#in-content-ad-container-'+tile_num, '<script>cmnUNT("100x100", tile_num++);<\/script>');
  
  if(incr){
    inf_scroll_page += 1;
  }
}




/**
 * Detects whether the sidebar ad div should be turned into fixed postion
 * @param event
 */
function hoverSidebarDetect(event) {
      // what the y position of the scroll is
      var y = $(this).scrollTop();
      
      // If the scrollbar isn't in the fixed position, get the distance from top of the sidebar scroll div.
      if (!sidebar_scroll_fixed) {
          sidebar_scroll_top = $('#sidebar-scroll-ad-container').offset().top - parseFloat($('#sidebar-scroll-ad-container').css('margin-top').replace(/auto/, 0));
      }
      
      // Hides the ads when the user scrolls up past where the ads are visible 
      if ( y <= sidebar_scroll_top - $(window).height() ) {
        //console.log('Reached top of scrolling ads: Y:' + y + ' window height: ' + (sidebar_scroll_top - $(window).height()) );
        $('#sidebar-scroll-ad-container').addClass('disabled');
      }
      
      // whether that's below the part where it should be fixed
      if (y >= sidebar_scroll_top) {
                                           
        //console.log('add fixed. scrollTop: ' + $(this).scrollTop() + ' top:' + sidebar_scroll_top);
                
        if (!sidebar_scroll_fixed) {
          sidebar_scroll_top = $('#sidebar-scroll-ad-container').offset().top - parseFloat($('#sidebar-scroll-ad-container').css('margin-top').replace(/auto/, 0));
          sidebar_scroll_fixed = true;
        }
       
        $('#sidebar-scroll-ad-container').removeClass('disabled');
        $('#sidebar-scroll-ad-container').addClass('fixed');
        
      } else {
        
        // Sets back to relative               
        //console.log('remove fixed. scrollTop: ' + $(this).scrollTop() + ' top:' + sidebar_scroll_top);
        // otherwise remove it
        if (sidebar_scroll_fixed) {
           sidebar_scroll_fixed = false;           
        }

        // Sets to relative pos but does not hide ads. Ads get hidden when user scrolls up past top of ads
        $('#sidebar-scroll-ad-container').removeClass('fixed');
      }
      
}

/**
 * Callback for infinite scroll plugin. Instantiated in the actual plugin admin.
 */

var inf_scroll_page =1;

function infiniteScrollCallback(newElements, data) {
    
    appendInContentAd(false);
    registerPageView(window.location + '#continuous');
    writeCaptureRefresh();
    
    try { 
    
        if (newElements && $('#grid-content').size() > 0) {
            
            // To uniquely style the non ajax loaded ad with a different margin-top
            $('.ad-300x250-container:first').addClass('first-ad');
            $('.ad-300x250-container').addClass('ajax-ad');
            
            var infScrollOpts = $('#grid-content').data('infinitescroll').options;
            var infScrollClass = 'inf-scr-page-' + infScrollOpts.state.currPage;
            
            var $newElems = $( newElements ).css({ opacity: 0 }).addClass(infScrollClass);    
            
            var $container = $('#grid-content');
            
            $newElems.imagesLoaded(function(){
                
                // show elems now they're ready
                $newElems.animate({ opacity: 1 });
                cmnUNT('300x250', tile_num++,1,'.' + infScrollClass + ' .ad-300x250');
                
                $container.masonry( 'appended', $newElems, true);                
               
            });
            
        }
    
       
    
        
        // Manuall refreshes the ad. Should be moved to cmnUNT
        //if ($('#sidebar-scroll-300x250-container').size() > 0) {
        //    $('#sidebar-scroll-300x250-container').writeCapture().html('<div id="cmn_ad_tag_300x250"><scr'+'ipt language="JavaScript" src="http://ad.doubleclick.net/adj/'+cmn_site+'/'+zone+subzone+';kw='+ silo + subsilo + cmntier + keywords + ',writecap' + kw_exclude + searchkw +';'+ exclude +'sz=300x250;tile='+sidebarIFrame300x250_tile_num+';ord='+neword+'?" type="text/javascript"></scr'+'ipt></div>');
        //}
    } catch (e) {
        
    }
    
}



$(document).ready(function() {
    
    
    // search widget animations 
    function search_inactive() {
        $('#header-search-wrapper').stop().animate({width: '100px', 'padding-left':'22px'}, 340);
        $('#headersearchform').css({'width':'94px'});   
        $('#header-search-wrapper').find('form input:text').stop().animate({'text-indent':0}, 200); 
        $('#header-search-button').removeClass('inactive');
        $('#header-search-button').addClass('active');
    }   
    function search_active() {
        $('#header-search-wrapper').find('form input:text').stop().animate({'text-indent':'-110px'}, 100);
        $('#headersearchform').css({'width':'0px'});
        $('#header-search-wrapper').stop().animate({width: '30px', 'padding-left': '0px'}, 340);    
        $('#header-search-button').removeClass('active');
        $('#header-search-button').addClass('inactive');
    }   
    $('#header-search-button').click(function() {
        if($(this).attr('class') == 'inactive') {
            search_inactive();
        } else {
            search_active();
        }       
    });
    search_active();
    
    
    // Appends element after every third. No longer being used.
    // $('.entry-content p:nth-child(3n)').append('<div class="ad-fullwidth-container"><div class="ad-728x90-container"><div class="ad-729x90"></div></div></div>');
    $('#grid-content').masonry({
    // options
        itemSelector : '.post',
        columnWidth : 325,
        animationOptions: {
            duration: 400
        }
    });
    
    $("#searchBoxOne input").focus(function() {
        $("#searchBoxOne").addClass("curFocus");
    });
    
    $("#searchBoxOne input").blur(function() {
        $("#searchBoxOne").removeClass("curFocus");
    });

    if ($('#sidebar-scroll-ad-container').size() > 0) {
        $(window).scroll( $.throttle( 100, hoverSidebarDetect) );
        var sidebar_scroll_top = $('#sidebar-scroll-ad-container').offset().top - parseFloat($('#sidebar-scroll-ad-container').css('margin-top').replace(/auto/, 0));
    }
    
    $('#facebook_hdr_icon').mouseover(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/facebook_rollover.png');    
    });
    $('#facebook_hdr_icon').mouseout(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/facebook_static.png');    
    })
    
        $('#instagram_hdr_icon').mouseover(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/instagram_rollover.png');    
    });
    $('#instagram_hdr_icon').mouseout(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/instagram_static.png');    
    });
    
    $('#tumblr_hdr_icon').mouseover(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/tumblr_rollover.png');    
    });
    $('#tumblr_hdr_icon').mouseout(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/tumblr_static.png');    
    });

    $('#twitter_hdr_icon').mouseover(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/twitter_rollover.png');    
    });
    $('#twitter_hdr_icon').mouseout(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/twitter_static.png');    
    });
    
    $('#youtube_hdr_icon').mouseover(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/youtube_rollover.png');    
    });
    $('#youtube_hdr_icon').mouseout(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/youtube_static.png');    
    });
    
    $('#google_plus_hdr_icon').mouseover(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/google_plus_rollover.png');    
    });
    $('#google_plus_hdr_icon').mouseout(function() {
        $(this).attr('src', 'http://cdn.greenlabel.com/img/google_plus_static.png');    
    });
    

    // Long Form List
    if ( $('hr.slide').length > 0 ) {
      jQuery('hr.slide').waypoint(function() {
        registerPageView( window.location.pathname );
        writeCaptureRefresh();
      }, {
        offset: 'bottom-in-view' 
      }); 
    }

  /*
   *  Initial Infinite Scroll In-Content Ad Tag on Page Load
   *  Not on single posts
   */ 
  
  if ( $('body.single').length == 0 ) {
    appendInContentAd(true);
  } 
  
  /**
   * Keep Track of Related Stories and Trending Stories Google Analytics
   */
  
  $('#related-posts div.related-post').click(function(){
	  var storyURL = $(this).find('h3').find('a').attr('href');
	  _gaq.push(['_trackEvent', 'Related Posts', 'Click', storyURL]); 
  });

  $('#viewportGAbela .postcontain').click(function(){
	  var storyURL = $(this).find('table').find('tr').find('td').find('a').attr('href');
	  //console.log('storyURL: ' + storyURL);
	  _gaq.push(['_trackEvent', 'From Around', 'Click', storyURL]);
  });
  
  $('div.zergentity').click(function(){
	  var storyURL = $(this).find('a').attr('href');
	  //console.log('storyURL: ' + storyURL);
	  _gaq.push(['_trackEvent', 'Around The Web', 'Click', storyURL]);
  });
  
  /**
   * Track social interactions on Google Analytics (Facebook and Twitter)
   */
  setTimeout(function(){
	  _ga.trackFacebook();
	  _ga.trackTwitter();
  },8000);
  
    
});

/**
 * Google Analytics
 * 09/24/14 Benyi Johnson
 */

var _ga = _ga || {};

/**
 * Tracks social interactions by iterating through each tracker object
 * of the page, and calling the _trackSocial method. This function
 * should be pushed onto the _gaq queue. For details on parameters see
 * http://code.google.com/apis/analytics/docs/gaJS/gaJSApiSocialTracking.html
 * @param {string} network The network on which the action occurs.
 * @param {string} socialAction The type of action that happens.
 * @param {string} opt_target Optional text value that indicates the
 *     subject of the action.
 * @param {string} opt_pagePath Optional page (by path, not full URL)
 *     from which the action occurred.
 * @return a function that iterates over each tracker object
 *    and calls the _trackSocial method.
 * @private
 */

_ga.getSocialActionTrackers_ = function(
    network, socialAction, opt_target, opt_pagePath) {
  return function() {
    var trackers = _gat._getTrackers();
    for (var i = 0, tracker; tracker = trackers[i]; i++) {
      tracker._trackSocial(network, socialAction, opt_target, opt_pagePath);
    }
  };
};

/**
 * Tracks Facebook likes, unlikes and sends by suscribing to the Facebook
 * JSAPI event model. Note: This will not track facebook buttons using the
 * iframe method.
 * @param {string} opt_pagePath An optional URL to associate the social
 *     tracking with a particular page.
 */

_ga.trackFacebook = function(opt_pagePath) {
  try {
    if (FB && FB.Event && FB.Event.subscribe) {
      FB.Event.subscribe('edge.create', function(opt_target) {
        _gaq.push(_ga.getSocialActionTrackers_('facebook', 'like',
            opt_target, opt_pagePath));
      });
      FB.Event.subscribe('edge.remove', function(opt_target) {
        _gaq.push(_ga.getSocialActionTrackers_('facebook', 'unlike',
            opt_target, opt_pagePath));
      });
      FB.Event.subscribe('message.send', function(opt_target) {
        _gaq.push(_ga.getSocialActionTrackers_('facebook', 'send',
            opt_target, opt_pagePath));
      });
    }
  } catch (e) {}
};

/**
 * Handles tracking for Twitter click and tweet Intent Events which occur
 * everytime a user Tweets using a Tweet Button, clicks a Tweet Button, or
 * clicks a Tweet Count. This method should be binded to Twitter click and
 * tweet events and used as a callback function.
 * Details here: http://dev.twitter.com/docs/intents/events
 * @param {object} intent_event An object representing the Twitter Intent Event
 *     passed from the Tweet Button.
 * @param {string} opt_pagePath An optional URL to associate the social
 *     tracking with a particular page.
 * @private
 */
_ga.trackTwitterHandler_ = function(intent_event, opt_pagePath) {
  var opt_target; //Default value is undefined
  if (intent_event && intent_event.type == 'tweet' ||
          intent_event.type == 'click') {
    if (intent_event.target.nodeName == 'IFRAME') {
      opt_target = _ga.extractParamFromUri_(intent_event.target.src, 'url');
    }
    var socialAction = intent_event.type + ((intent_event.type == 'click') ?
        '-' + intent_event.region : ''); //append the type of click to action
    _gaq.push(_ga.getSocialActionTrackers_('twitter', socialAction, opt_target,
        opt_pagePath));
  }
};

/**
 * Binds Twitter Intent Events to a callback function that will handle
 * the social tracking for Google Analytics. This function should be called
 * once the Twitter widget.js file is loaded and ready.
 * @param {string} opt_pagePath An optional URL to associate the social
 *     tracking with a particular page.
 */
_ga.trackTwitter = function(opt_pagePath) {
  intent_handler = function(intent_event) {
    _ga.trackTwitterHandler_(intent_event, opt_pagePath);
  };

  //bind twitter Click and Tweet events to Twitter tracking handler
  try {
    twttr.events.bind('click', intent_handler);
    twttr.events.bind('tweet', intent_handler);
  } catch(e){}
};


/**
 * Extracts a query parameter value from a URI.
 * @param {string} uri The URI from which to extract the parameter.
 * @param {string} paramName The name of the query paramater to extract.
 * @return {string} The un-encoded value of the query paramater. undefined
 *     if there is no URI parameter.
 * @private
 */
_ga.extractParamFromUri_ = function(uri, paramName) {
  if (!uri) {
    return;
  }
  var regex = new RegExp('[\\?&#]' + paramName + '=([^&#]*)');
  var params = regex.exec(uri);
  if (params != null) {
    return unescape(params[1]);
  }
  return;
};

