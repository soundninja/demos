var cityAutocomplete = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: '/api/userprofile/autocomplete/city/?query=%QUERY',
  limit: 5,
});

cityAutocomplete.initialize();

$(document).ready(function($) {
  trackData = trackData || {};

  /////////////////////
  // EVENT LISTENERS //
  /////////////////////

  $("#mini-continue-btn").click(function(e){
    e.preventDefault();
    submitMiniForm();
  });

  $("#big-continue-btn").click(function(e){
    e.preventDefault();
    submitBigForm();
  });

  $(document).on("fanclubRegisterFail", function(){
    trackExternalEvent('global-popup-fanclub-register-fail', trackData);
  });

  // Signup with email
  $(document).on("facebookLoginSkip", function(){
    $("#step2").find(".mini-form, .user-rollup").hide().siblings(".big-form").show();
    $("#step2").fadeIn('slow');
  });

  $(document).on("facebookLoginLaunch", function(e){
    e.preventDefault();
    triggerFacebookOauthFlow();
  });

  $(".edit-link").click(function(e){
    e.preventDefault();
    $(".mini-form, .user-rollup").hide();
    $(".big-form").show();

    delete window.ME.location;
  });

  ///////////////
  // INIT SHIT //
  ///////////////

  // Load FB JS SDK async
  window.fbAsyncInit = function() {
    FB.init({
      version    : 'v2.0',
      appId      : window.FB_MAIN_APP_ID, // App ID
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    FB.Canvas.setSize();

    // if the current user isn't authenticated w/ hive or we don't know if they are (ie legacy code)
    // check if they're logged in w/ FB and handle accordingly
    if (!window.USER_IS_AUTHENTICATED){
      FB.getLoginStatus(function(response) {
        if (response.status == 'connected'){
          var accessToken = response.authResponse.accessToken;
          // XXX temporary hack to handle new contest flow
          if (window.NEW_AUTH_FLOW){
            $(document).trigger("FBUserAlreadyConnected", [accessToken]);
          } else{
            FBLoginCallback(accessToken);
          }
        } else{
          goToStep1();
        }
      });
    }

    // Additional initialization code here
    FB.Event.subscribe('edge.create', function(href, widget) {
      $(document).trigger("FBLikeSuccess", [$(widget)]);
    });
  };

  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));

  // Init typeahead
  $("#city").typeahead({
    minLength: 2,
    highlight: true,
  },
  {
    name: 'id',
    displayKey: function(data){
      return data.city + ", " + data.province;
    },
    source: cityAutocomplete.ttAdapter(),
    templates: {
      suggestion: suggestionTemplate,
    }
  }).on('typeahead:selected', selectedCallback);


  /////////////////////
  // LOCAL FUNCTIONS //
  /////////////////////

  // Called on Facebook Login success populates dom with user information
  // triggers step2 for users to confirm their information
  function FBLoginCallback(token){
    FB.api('/me', function(response) {
      if (response && !response.error){
        window.ME = window.ME || {};
        $.extend(window.ME, response, {token: token});
        window.ME.token = token;

        // Populate user information into #step2 fields so it can be confirmed
        $userRollup = $(".user-rollup");
        $userRollup.find(".user-pic").attr("src", '//graph.facebook.com/' + window.ME.id + '/picture?width=100&height=100');
        $userRollup.find(".name").html(window.ME.first_name + " " + window.ME.last_name);

        if (typeof(window.ME.location) != 'undefined'){
          $userRollup.find(".location").html(window.ME.location.name);
        }

        $("#firstName").val(window.ME.first_name);
        $("#lastName").val(window.ME.last_name);

        if (window.TOUR_ID != 401){
         $("#email, #mini-email").val(window.ME.email);
        }

        // Step3 dom nodes
        $(".bg-wrapper .second .name").html(", " + window.ME.first_name);
        $('.user-image').attr('src', '//graph.facebook.com/' + window.ME.id + '/picture?width=100&height=100');

        if(window.ME.email && (window.TOUR_ID == 229 || window.TOUR_ID == 288 || window.TOUR_ID == 261 || window.TOUR_ID == 100 || window.TOUR_ID == 96)){
          // dont do this for people with bad emails
          createUserFromFacebookToken(token, createFanclubSignup);
        } else {
          $.post('/api/auth/loginfromtoken/', {
            access_token: window.ME.token,
          }, function(data) {
            if(data.exists && data.valid_email){
              createFanclubSignup();
            } else {
              goToStep2();
            }
          });
        }

      } else {
        // delete their old token and do shit
        trackExternalEvent('global-popup-deleting-bad-token', trackData);
        $.ajax({
          type: "POST",
          data: {
            method: "delete",
            access_token: token,
          },
          url: "https://graph.facebook.com/v2.0/me/permissions/",
          success: function(){
            goToStep1();
          },
        });
      }
    });
  }

  /**
  * Creates a user given their Facebook token
  * @param  {String} token        Facebook token
  * @param  {function} doneCallback function to call when user is sucessfully created
  */
  function createUserFromFacebookToken(token, doneCallback) {
    $.ajax({
      type: "POST",
      url: "/api/auth/createfromtoken/",
      data: {
        'access_token': token,
        'firstName': window.ME.first_name,
        'lastName': window.ME.last_name,
        'email': window.ME.email,
        'gender': window.ME.gender,
        'birthday': window.ME.birthday,
        'location': window.ME.location,
      },
      success: function(data){
        // XXX HACKY: Youtube refersh tokens are a bitch. This way we can force re-auth.
        window.HAS_YOUTUBE_REFRESH_TOKEN = data.user.has_youtube_refresh_token;

        $(document).trigger('FBLoginDone');

        window.ME.user_pk = data.user.pk;

        doneCallback();
      },
      error: function(data){
        goToStep1();
        alert(JSON.parse(data.responseText).msg);
      },
    });
  }

  function triggerFacebookOauthFlow(){

    showLoading(true, 'Waiting to hear back from Facebook...');

    var scope = "email,user_actions.music,user_likes,user_birthday,user_friends,user_location";

    try {
      // XXX turning this off for now for carnage shazam signup widget - ask PMH 
      //if(window.IS_IN_APP_BROWSER && window.IS_IPHONE){
      if(window.IS_IN_APP_BROWSER){
        trackExternalEvent('global-popup-redirect-auth', trackData, function(){
          var redirectURL;
          if (window.TAB_URL){
            redirectURL = window.TAB_URL;
          } else if (self.location.href.indexOf("?") != -1){
            redirectURL = self.location.href + "&autolaunch=true";
          } else {
            redirectURL = self.location.href + "?autolaunch=true";
          }
          top.location = 'https://www.facebook.com/v2.0/dialog/oauth?client_id=' + window.FB_MAIN_APP_ID + '&scope=' + scope + '&redirect_uri=' + encodeURIComponent(redirectURL);
        });
      } else {
        FB.login(function(response) {
          if (response.authResponse) {
            var token = response.authResponse.accessToken;
            FBLoginCallback(token);
            trackExternalEvent('global-popup-facebook-login-success', trackData);
          } else {
            showLoading(false);
            $(document).trigger("facebookLoginFail");
            trackExternalEvent('global-popup-facebook-login-fail', trackData);
          }
        }, {scope: scope});
      }
    }
    catch(err) {
      showLoading(false);
      $(document).trigger("facebookLoginFail");
      trackExternalEvent('global-popup-facebook-login-fail', trackData);
    }

    trackExternalEvent('global-popup-facebook-login-launch', trackData);
  }

  function selectedCallback(e, data) {
    $("#city").attr('data-location-id', data.id);
    return false;
  }

  function suggestionTemplate(data){
    return '<div class="city-suggestion">' + data.city + ", " + data.province +'</div>';
  }

  function submitBigForm() {

    showLoading(true, 'Saving your information...');

    validateField($("#firstName, #lastName, #email"), /\S/);
    validateField($("#email"), /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/);
    validateField($("#city"), /^[a-zA-Z]+,\s*[a-zA-Z]+|^[a-zA-Z]+/);


    if($(".big-form").find(".has-error").length){
      alert("Please make sure you have filled out each field correctly.");
      return goToStep2();
    } else {
      if (!window.ME){
        window.ME = {};
      }
      window.ME.first_name = $("#firstName").val();
      window.ME.last_name = $("#lastName").val();
      window.ME.email = $("#email").val();
      window.ME.city = $('#city').val();

      // resolve location, then create/update user, then create fcsu
      resolveUserLocation(function(){
        createOrUpdateUser(createFanclubSignup);
      });
    }
    trackExternalEvent('global-popup-big-button-click', trackData);
  }

  function submitMiniForm() {
    showLoading(true, 'Saving your information...');

    validateField($("#mini-email"), /\S/);
    validateField($("#mini-email"), /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/);

    if($(".mini-form").find(".has-error").length){
      alert("Please make sure you have filled out each field correctly.");
      return goToStep2();
    } else {
      window.ME.email = $("#mini-email").val();

      // resolve location, then create/update user, then create fcsu
      resolveUserLocation(function(){
        createOrUpdateUser(createFanclubSignup);
      });
    }
    trackExternalEvent('global-popup-mini-button-click', trackData);
  }

  function resolveUserLocation(doneCallback){
    var location = null;
    if(typeof(window.ME.location) != 'undefined' && window.ME.location.id){
      // if we're here then the user fb authed
      // so we do an api hit to fb to get detailed location data
      FB.api('/' + window.ME.location.id, function(response) {
        window.ME.location = {
          lat: response.location.latitude,
          long: response.location.longitude,
          name: response.name,
        };
        doneCallback();
      });
    } else {
      if (typeof($("#city").data('location-id')) != 'undefined'){
        // user picked an existing CityLatLongMapping id from autocomplete dropdown
        window.ME.location = {
          id: $("#city").data('location-id'),
        };
      } else {
        // user entered a location we didn't match in the autocomplete
        window.ME.location = {
          name: window.ME.city,
        };
      }
      doneCallback();
    }
  }

  // creates or updates the current user
  function createOrUpdateUser(doneCallback){
    var url;
    var facebookAccessToken = FB.getAccessToken();
    if (window.ME.user_pk){
      // existing user (therefore already authed too)
      // just update info then fcsu create
      url = "/api/auth/updatefaninfo/";
    } else if(facebookAccessToken){
      // User didn't have an email in facebook so now that
      // we have it we will create a user for them
      return createUserFromFacebookToken(facebookAccessToken, doneCallback);
    } else {
      // create a new user (user will be authed), then fcsu create
      url = "/api/auth/createfromemail/";
    }
    $.ajax({
      type: "POST",
      url: url,
      data: {
        'userInfo': JSON.stringify(window.ME),
      },
      success: function(data){
        doneCallback();
      },
      error: function(data){
        alert(JSON.parse(data.responseText).msg);
        $(document).trigger("fanclubRegisterFail");
        showLoading(false);
      },
    });
  }

  validateField = function(elem, regex){
    // remove whitespace and check for the specified regex.
    // apply error css if there is an error
    if (elem.length === 0){
      return;
    } else if ($(elem).val().replace(" ", "").match(regex) === null){
      $(elem).addClass("has-error");
      $(elem).closest(".input-group").addClass("has-error");
      $("label[for=" + $(elem).attr("id") + "]").addClass("has-error");
    } else {
      $(elem).removeClass("has-error");
      $(elem).closest(".input-group").removeClass("has-error");
      $("label[for=" + $(elem).attr("id") + "]").removeClass("has-error");
    }
  };

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  $(document).on("fanclubRegisterSuccess", function(){
    // Saving phone numbers for signup widgets sometimes
    // Parse phone number out of the url
    var phone_number = getParameterByName('phone_number');
    if (phone_number) {
      $.ajax({
        type: "POST",
        url: "/api/auth/updatefaninfo/",
        data: {
          'userInfo': JSON.stringify({
            'phone_number': phone_number,
          }),
        }
      });
    }
  });

  //////////////////////
  // GLOBAL FUNCTIONS //
  //////////////////////

  showLoading = function(isLoading, msg){
    var $loading = $("#loading");
    $loading.find('span').html(msg);
    if (isLoading){
      $loading.show().siblings().hide();
    } else {
      $loading.hide();
    }
  };
  // immediately show loading info, since we have to first see
  // if they're already signed in with Facebook
  showLoading(true, 'Loading Facebook info...');

  goToNextURL = function(){
    top.location = window.NEXT_URL;

    setTimeout(function(){
      top.location = window.TAB_URL;
    }, 1000 * 5);
  };

  goToStep1 = function() {
    showLoading(false);
    $("#step1").fadeIn('slow').siblings().hide();
  };

  goToStep2 = function() {
    showLoading(false);
    $("#step2").fadeIn('slow').siblings().hide();
    trackExternalEvent('global-popup-step2-show', trackData);
  };

  // creates a fcsu
  createFanclubSignup = function(){
    $.ajax({
      type: "POST",
      url: "/api/event/fanclubregister/",
      data: {
        'tourId': window.TOUR_ID,
      },
      success: function(data){
        $(document).trigger("fanclubRegisterSuccess");
      },
      error: function(data){
        alert(JSON.parse(data.responseText).msg);
        $(document).trigger("fanclubRegisterFail");
        showLoading(false);
      },
    });
  };
});
