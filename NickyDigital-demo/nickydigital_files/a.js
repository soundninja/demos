(function() {
  // only run this injector code once. it handles multiple embeds w/ ease!
  if (window.HAS_RUN_HIVE_INJECTOR){
    return;
  }
  window.HAS_RUN_HIVE_INJECTOR = true;

  console.log('inside hive code!');

  var urlPrefix = 'https://www.hive.co/';
  // var urlPrefix = 'http://local.hive.co:8000/';

  // Localize jQuery variable
  var jQuery;

  console.log('window jQuery: ' + window.jQuery);
  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.10.2') {
    console.log('jquery correct version not found');
    var script_tag = document.createElement('script');
    script_tag.setAttribute('type','text/javascript');
    script_tag.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          scriptLoadHandler();
        }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script_tag);
  } else {
    console.log('found right version of jquery');
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
  }

  /******** Called once jQuery has loaded ******/
  function scriptLoadHandler() {
    console.log('done loading jQuery');
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main();
  }

  /******** Our main function ********/
  function main() {
    console.log('running main()');
    jQuery(document).ready(function($) {
      console.log('jQuery loaded - running js injector code');

      // LOAD WIDGET CONTAINERS
      $.each($('.hive-widget-container'), function(k,v){
        var $hiveWidgetContainer = $(v);
        var widgetType = $hiveWidgetContainer.data('widget-type');
        var objectId = $hiveWidgetContainer.data('object-id');
        var elemId = "hive-" + widgetType + "-" + objectId;
        var html;

        if (widgetType === 'contest'){
          var contestUrl = urlPrefix + 'contests/contest/' + objectId + '/widget/';
          html = '<iframe id="' + elemId + '" src="' + contestUrl + '" style="width: 100%;border:none;"></iframe>';
        } else if (widgetType === 'signup'){
          var signupWidgetUrl = urlPrefix + 'signup/widget/' + objectId + '/embed/';
          html = '<iframe id="' + elemId + '" src="' + signupWidgetUrl + '" style="width: 100%;border:none;"></iframe>';
        } else if (widgetType === 'download'){
          var downloadUrl = urlPrefix + 'downloads/download/' + objectId + '/widget/';
          html = '<iframe id="' + elemId + '" src="' + downloadUrl + '" style="width: 100%;border:none;"></iframe>';
        }

        console.log('injecting #' + elemId);
        $hiveWidgetContainer.replaceWith(html);
      });

      // LOAD WIDGET MODELS
      containersLoaded = {}; // hash of the iFrame ids injected to avoid inserting dupicate iFrames
      $.each($('.hive-modal-launcher'), function(k,v){
        var $widgetLoader = $(v);
        var widgetType = $widgetLoader.data('widget-type');
        var objectId = $widgetLoader.data('object-id');
        var elemId = "hive-" + objectId + "-" + widgetType + "-modal";
        if(containersLoaded[elemId]){
          // If we have loaded the iframe with the modal..
          return;
        }

        var html;
        if (widgetType === 'signup'){
          var signupWidgetUrl = urlPrefix + 'signup/widget/' + objectId + '/modal/';
          html = '<iframe id="' + elemId + '" src="' + signupWidgetUrl + '" style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;z-index:99999999;display:none;"></iframe>';
        }

        console.log('injecting #' + elemId);
        $('body').append(html);
        containersLoaded[elemId] = true;
      });

      // HANDLE WIDGET LAUNCHER TRIGGER
      $(document).on('click', '.hive-modal-launcher', function(e) {
        e.preventDefault();
        $this = $(this);
        var widgetType = $this.data('widget-type');
        var objectId = $this.data('object-id');
        var elemId = "hive-" + objectId + "-" + widgetType + "-modal";
        if(widgetType === 'signup'){
          $("#" + elemId).fadeIn('fast');
        }
      });
      console.log('done injecting!');

      // messaging trasport used to communicate between iframe and parent page
      if(window.addEventListener) {
        window.addEventListener('message', handleMessage, false);
      } else if (window.attachEvent) {
        // legacy postMessage support
        window.attachEvent('onmessage', handleMessage, false);
      }
      function handleMessage(data){
        if (data.data && data.data.namespace == 'hive-widget'){
          if (data.data.messageId === 'updateHeight'){
            var elemId = "hive-" + data.data.widgetType + "-" + data.data.objectId;
            $("#" + elemId).css('height', data.data.messageVal);
          } else if (data.data.messageId === 'closeModal'){
            var elemId = "hive-" +  + data.data.objectId + "-" + data.data.widgetType + "-modal";
            $("#" + elemId).fadeOut('fast');
          }
        }
      }
    });
  }

})(); // We call our anonymous function immediately

console.log('outside of hive code!!');
