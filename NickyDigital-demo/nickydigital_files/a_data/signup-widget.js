var trackData = {SIGNUP_WIDGET_ID: window.SIGNUP_WIDGET_ID, tour_id: window.TOUR_ID};

$(function() {

  if (window.SIGNUP_WIDGET_ID == 92 && window.IS_MOBILE){
    window.IS_IN_APP_BROWSER = true;
  }

  // User is in Hive and hasn't yet joined fanclub
  if (window.USER_IS_AUTHENTICATED){
    showLoading(false);
    if(window.USER_IS_ALREADY_SIGNED_UP){
      signupWidgetDone();
    }
    else if (window.AUTOLAUNCH){
      createFanclubSignup();
    }
    else {
      goToStep1();
    }
  }

  // RESIZE SHIT FOR EMBEDED WIDGET
  postHeightMessage();

  // checks every XXXms and triggers resize messages if document height has changed
  // ie if an elemnent added to dom that caused height of document to change
  var currDocumentHeight = document.body.offsetHeight;
  setInterval(function(){
    if (document.body.offsetHeight !== currDocumentHeight){
      currDocumentHeight = document.body.offsetHeight;

      // sends message to a parent frame (eg if iframed)
      postHeightMessage();

      // send message to resize the fb canvas tab we might (or might not) be in
      try {
        FB.Canvas.setSize();
      } catch (err){}
    }
  }, 200);

  // triggered when window (ie frame) is resized
  $(window).resize(postHeightMessage);

  /////////////////////
  // EVENT LISTENERS //
  /////////////////////

  $('.signup-widget-launch').click(function(e){
    e.preventDefault();
    if(window.USER_IS_AUTHENTICATED){
      createFanclubSignup();
    } else {
      $(document).trigger("facebookLoginLaunch");
      trackExternalEvent('signup-widget-external-facebook-auth-launch', trackData);
    }
  });

  $("#no-facebook-link").click(function(e){
    e.preventDefault();
    $("#step1").hide();
    $(document).trigger("facebookLoginSkip");
    trackExternalEvent('signup-widget-facebook-skipped', trackData);
  });

  // Triggered by clicking the x in top right when in modal view
  $('.close-modal').click(closeModal);


  $(document).on('fanclubRegisterSuccess', createSignupWidgetEntry);
  $(document).on("facebookLoginFail", function(e){
    goToStep1();
  });

  $(document).on("fanclubRegisterFail", function(e){
    goToStep1();
  });

  // triggered when a user is already logged into Hive app on FB,
  // and (implictly) isn't logged into Hive
  $(document).on("FBUserAlreadyConnected", function(e, accessToken){
    FB.api('/me', function(response) {
      if (response && !response.error){
        window.ME = response;
        $.ajax({
          type: "POST",
          url: "/api/auth/createfromtoken/",
          data: {
            'access_token': accessToken,
            'firstName': window.ME.first_name,
            'lastName': window.ME.last_name,
            'email': window.ME.email,
            'gender': window.ME.gender,
            'birthday': window.ME.birthday,
            'location': window.ME.location,
          },
          success: function(data){
            window.location.reload();
          },
          error: function(data){
            goToStep1();
            alert(JSON.parse(data.responseText).msg);
          },
        });
      }
    });
  });

  /////////////////////
  // LOCAL FUNCTIONS //
  /////////////////////

  function closeModal() {
    var msg = {
      'namespace': 'hive-widget', // namespaced so we know what messages we're sending vs other code executing on host page
      'widgetType': 'signup',
      'objectId': window.SIGNUP_WIDGET_ID,
      'messageId': 'closeModal'
    };
    // "*" means all domains can recieve this message
    top.postMessage(msg, "*");
  }

  // sends a message to the top level frame w/ current document height
  // the top level frame responds to this message accordingly
  function postHeightMessage(){
    var msg = {
      'namespace': 'hive-widget', // namespaced so we know what messages we're sending vs other code executing on host page
      'widgetType': 'signup',
      'objectId': window.SIGNUP_WIDGET_ID,
      'messageId': 'updateHeight',
      'messageVal': document.body.offsetHeight,
    };
    // "*" means all domains can recieve this message
    top.postMessage(msg, "*");
  }

  function createSignupWidgetEntry() {
    var data = {
      signupWidgetId: window.SIGNUP_WIDGET_ID
    };
    $.post('/api/signup/widget/entry/create/', data, function(resp, success) {
      if(success === 'success'){
        if(window.ME){
          $('.username').text(window.ME.first_name);
        }
        signupWidgetDone(true);
      }
    });
  }

  function signupWidgetDone(doRedirect) {
    $('#completedSignupWidgetState').fadeIn('slow').siblings().hide();
    if(doRedirect && window.REDIRECT_URL){
      $('.redirect').show();
      setTimeout(function() {
        top.location = window.REDIRECT_URL;
      }, 7500);
    }
    if (window.IS_MODAL){
      setTimeout(closeModal, 5000);
    }
  }
});
