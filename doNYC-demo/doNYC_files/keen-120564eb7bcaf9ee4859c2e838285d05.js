var Keen=Keen||{configure:function(e){this._cf=e},addEvent:function(e,n,t,r){this._eq=this._eq||[],this._eq.push([e,n,t,r])},setGlobalProperties:function(e){this._gp=e},onChartsReady:function(e){this._ocrq=this._ocrq||[],this._ocrq.push(e)}};!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://":"http://")+"dc8na2hxrj29i.cloudfront.net/code/keen-2.1.0-min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}(),function(e){e.browserTest=function(n,t){var r="unknown",o="X",a=function(e,n){for(var t=0;t<n.length;t+=1)e=e.replace(n[t][0],n[t][1]);return e},i=function(n,t,i,s){var d={name:a((t.exec(n)||[r,r])[1],i)};return d[d.name]=!0,d.version=(s.exec(n)||[o,o,o,o])[3],d.name.match(/safari/)&&d.version>400&&(d.version="2.0"),"presto"===d.name&&(d.version=e.browser.version>9.27?"futhark":"linear_b"),d.versionNumber=parseFloat(d.version,10)||0,d.versionX=d.version!==o?(d.version+"").substr(0,1):o,d.className=d.name+d.versionX,d};n=(n.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?a(n,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,""],["Chrome Safari","Chrome"],["KHTML","Konqueror"],["Minefield","Firefox"],["Navigator","Netscape"]]):n).toLowerCase(),e.browser=e.extend(t?{}:e.browser,i(n,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/)),e.layout=i(n,/(gecko|konqueror|msie|opera|webkit)/,[["konqueror","khtml"],["msie","trident"],["opera","presto"]],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/),e.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[r])[0].replace("sunos","solaris")},t||e("html").addClass([e.os.name,e.browser.name,e.browser.className,e.layout.name,e.layout.className].join(" "))},e.browserTest(navigator.userAgent)}(jQuery);var keen_meta_data=[];$.fn.ds_stop_bubble=function(e){return $(this).each(function(){return $(this).on(e,function(e){return e.stopPropagation()})})},function(n){"undefined"==typeof t_string&&(t_string=0);var t={site_domain:"",site_property_id:0,site_property_type:"",site_property_name:"",site_url:"",user_id:0,user_cookie:t_string,user_browser:n.browser.name,user_browser_version:n.browser.version,user_browser_os:n.os.name,tracker_data:null,keen_action:null,keen_subject:null,keen_event_id:null,keen_brand_id:null,keen_widget_id:null,keen_location_id:null,event_hash:null,widget_hash:null,brand_hash:null},r={init:function(r){r&&n.extend(t,r),n("body").on("mouseenter",".ds-keen-trigger-hover",function(){n(this).data("ds-keen-did-trigger-hover")||(i(n(this),"hover"),o(),n(this).parents("footer").length>0?n(this).hasClass("ds-featured-venue-event")?ga("send","event","FEATURED_EVENTS","hover","featured_section_venues"):"widget"!=n(this).data("ds-keen-subject")&&ga("send","event","FEATURED_EVENTS","hover","featured_section_events"):ga("send","event","FEATURED_EVENTS","hover","sidebar")),n(this).data("ds-keen-did-trigger-hover",!0)}),n("body").on("mousedown",".ds-keen-trigger-click",function(){n(this).is("a")&&e.preventDefault(),n(this).data("ds-keen-did-trigger-click")||(i(n(this),"click"),o(),n(this).parents("footer").length>0?n(this).hasClass("ds-featured-venue-event")?ga("send","event","FEATURED_EVENTS","click","featured_section_venues"):ga("send","event","FEATURED_EVENTS","click","featured_section_events"):ga("send","event","FEATURED_EVENTS","click","sidebar")),n(this).data("ds-keen-did-trigger-click",!0),n(this).is("a")&&(n(this).hasClass("external")||(parent.location.href=n(this).attr("href")))}),n("body").on("carousel:change",function(e,t){t=n(t),t.find(".ds-keen-trigger-load").each(function(){a(this)})})},setUser:function(e,n){t.user_id=e,t.user_cookie=n},setPath:function(){t.site_url=location.pathname},trackLoads:function(e){e.find(".ds-keen-trigger-load").each(function(){a(this)})},loadAndPush:function(e,t){i(n(e),t),o()}},o=function(){var e={action:t.keen_action,subject:t.keen_subject};t.event_hash&&(e.event=t.event_hash),t.widget_hash&&(e.widget=t.widget_hash),t.brand_hash&&(e.brand=t.brand_hash),n.extend(e,s()),document.location.href.indexOf("debugkeen=true")>-1&&console.log("keen_push_site_action",e),Keen.addEvent("site_action",e)},a=function(e){$el=n(e),window.el||(window.el=$el);var t=$el.get(0);!$el.data("ds-keen-processed")&&t.isVisible()&&($el.data("ds-keen-processed",!0),$el.waypoint(function(){$el.waypoint("destroy"),i(n(this),"load"),o()},{offset:"bottom-in-view"}))},i=function(e,n){t.keen_subject="undefined"!=typeof e.attr("data-ds-keen-subject")?e.attr("data-ds-keen-subject"):null,t.keen_action="undefined"!=typeof e.attr("data-ds-keen-action")?e.attr("data-ds-keen-action"):n,t.keen_event_id="undefined"!=typeof e.attr("data-ds-keen-event-id")?e.attr("data-ds-keen-event-id"):null,t.keen_brand_id="undefined"!=typeof e.attr("data-ds-keen-brand-id")?e.attr("data-ds-keen-brand-id"):null,t.keen_widget_id="undefined"!=typeof e.attr("data-ds-keen-widget-id")?e.attr("data-ds-keen-widget-id"):null,t.keen_location_id="undefined"!=typeof e.attr("data-ds-keen-location")?e.attr("data-ds-keen-location"):null,t.keen_event_id?(t.event_hash={},t.event_hash.id=t.keen_event_id,t.event_hash.location=t.keen_location_id):t.event_hash=null,t.keen_brand_id?(t.brand_hash={},t.brand_hash.id=t.keen_brand_id,t.brand_hash.location=t.keen_location_id):t.brand_hash=null,t.keen_widget_id?(t.widget_hash={},t.widget_hash.id=t.keen_widget_id,t.widget_hash.location=t.keen_location_id):t.widget_hash=null},s=function(){var e=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,n=window.location!=window.parent.location?document.referrer:document.location,r=e.exec(n),o="",a="";r&&r.length>=4&&(o=r[3]),r&&r.length>=6&&(a="/"+r[5]);var i={site:{domain:o,property_id:t.site_property_id,property_type:t.site_property_type,property_name:t.site_property_name,url:a},user:{id:t.user_id,cookie:t.user_cookie,browser:{name:t.user_browser,version:t.user_browser_version,os:t.user_browser_os}}};return i};n.fn.dsKeen=function(e){return r[e]?r[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?(n.error("Method "+e+" does not exist on jQuery.dsKeen"),void 0):r.init.apply(this,arguments)}}(jQuery);