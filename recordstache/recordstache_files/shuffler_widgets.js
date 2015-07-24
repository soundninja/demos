Shufflerfm = {
  addEvent: function(obj, evType, fn){ 
    if (obj.addEventListener){ 
      obj.addEventListener(evType, fn, false); 
      return true; 
    } else if (obj.attachEvent){ 
      var r = obj.attachEvent("on"+evType, fn); 
      return r; 
    } else { 
      return false; 
    } 
  },
  init: function() {
    var as = document.getElementsByTagName('a')
    for(i = 0; i < as.length; i++) {
      var a = as[i];
      if((a.className.search(/^shuffler-subscribe-button$/) > -1) || 
          (a.className.search(/ shuffler-subscribe-button /) > -1)) {
        Shufflerfm.a = a;
        var width = '202px';
        var height = '40px';
        if (a.href.indexOf('subscribe_medium') !== -1) {
          height = '20px';
          if (a.href.indexOf('counter=1') !== -1) { width = '114px'; } else { width = '89px'; }
        }
        else if (a.href.indexOf('subscribe_large') !== -1) {
          if (a.href.indexOf('counter=1') !== -1) { width = '202px'; } else { width = '176px'; }
        }
        var src = a.href.replace(/http:\/\//, 'https://');
        a.innerHTML = '<iframe src="' + src + '" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:' + width +'; height:'+ height + ';">';
      }
    }
  }
};
Shufflerfm.addEvent(window, 'load', Shufflerfm.init);
