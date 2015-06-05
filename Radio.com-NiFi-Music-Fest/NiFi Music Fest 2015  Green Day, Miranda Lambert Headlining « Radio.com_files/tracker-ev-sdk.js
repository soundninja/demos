var EventfulApi = (function (window, $) {
  "use strict";
  var my = {},
  data = window.gtm || {};
  // public pixel ping method
  my.ping = function(){
    $('body').append('<img src="//ev.cbslocal.com/store/apps/generic/cbs1x1.gif?data=' + encodeURIComponent(JSON.stringify(data)) + '&rnd=' + Math.random() + '"/>');
  };
  data.referer = document.referrer;
  // auto-ping
  my.ping();
  return my;
}(window, jQuery));
