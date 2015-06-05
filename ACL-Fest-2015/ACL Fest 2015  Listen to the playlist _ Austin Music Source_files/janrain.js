/*
 * Janrain encapsulation
 *
 * This module wraps janrain's capture widget javascript to provide custom
 * events, conditional loading, and easier unit testing.
 *
 */
(function(cmg) {
    var protocol = window.location.protocol,
        hostname = cmg.site_meta.domain,
        same_domain = (window.location.hostname === hostname),
        base_url = (same_domain ? "/" : protocol + "//" + hostname + "/");
    window.janrain = {
        init: function() {
            /* This function takes care of  loading janrain's widget js,
             * initialize this object's state, and setting up the events for
             * signalling the readiness of janrain/the dom. We also enumerate our stylesheets here.
             */
            if (!cmg || !(cmg.janrain_app_id && cmg.janrain_client_id)) {
                console.error('could not find janrain settings; falling back to hardcoded which are almost certainly wrong.');
            }
            if (!cmg._ || !cmg.query) {
                return console.error('janrain module requires jquery and underscore.');
            }
            var _ = cmg._,
            $ = cmg.query;
            this._events = {};
            window.janrainCaptureWidgetOnLoad = _(this.on_widget_load).bind(this);
            var ready_states = ['complete', 'loaded', 'interactive'];
            if (_(ready_states).indexOf(document.readyState) > -1 && $('#signIn').length > 0) {
                janrain.ready = true;
            } else {
                function isReady() {
                    janrain.ready = true;
                }
                if (document.addEventListener) {
                    document.addEventListener("DOMContentLoaded", isReady, false);
                } else {
                    window.attachEvent('onload', isReady);
                }
            }

            /* why not just enumerate these in the object literal in settings?
             * Because we need to get cmg.mediaurl. An object property lookup
             * is a side-effect and no side-effects should trigger when a
             * module is loaded so this must happen in .init().
             */
            // this.settings.capture.noStyling = true; //this would unload the widgets.css
            // However, the icons and other images are kept there. So it will need to converted
            // over to get rid of it at the moment.
            //this.settings.capture.stylesheets.push(cmg.mediaurl + 'v2newspaper/css/cm-janrain.css');
            /* disabled this because all the styles from janrain.css work
             * across browsers.
             */
            // this.settings.capture.mobileStylesheets.push(cmg.mediaurl+'css/vendor/janrain-mobile.css');

            this.load_janrain_js();

            return this;
        },
        settings: {
            // deprecated and now set on server:
            // these are kept around in case we have to overwrite the server
            // settings in an emergency.

            // appUrl: 'https://cmg-dev.rpxnow.com',

            format: 'one column',
            providers: ['facebook', 'twitter', 'googleplus', 'yahoo'], // Setting googleplus for v2newspaper
            providersPerPage: '4',
            actionText: ' ',
            borderColor: '#ffffff',
            width: 400, // 392 will set larger icons, 391 will set smaller icons according to JR CSS
            backgroundColor: '#ffffff',
            language: 'en-US',

            packages: ['login', 'capture', 'share'],

            // Set these according to JR handoff
            // --- Engage Widget -------------------------------------------------------
            tokenUrl: protocol + '//' + hostname + '/',
            //tokenUrl: 'http://www.coxmediagroup.com/', // originally set to this, may need to change back
            type: 'embed',
            tokenAction: 'event',
            fontFamily: 'Helvetica, Lucida Grande, Verdana, sans-serif',

            showAttribution: false,
            fontColor: '#0a0909',
            buttonBorderRadius: '0',
            buttonBackgroundStyle: 'white',
            linkClass: 'janrainEngage',
            cmg: {
                // where to load their javascript from
                js_url: (protocol === 'https:' ? 'https://' : 'http://') + ((cmg && cmg.janrain_js_url) || 'd16s8pqtk4uodx.cloudfront.net/cmg-dev/load.js')
            },
            capture: {
                // refer to official janrain docs for explanation of these.
                redirectUri: protocol + '//' + hostname, // a mostly unused fallback url
                appId: (cmg && cmg.janrain_app_id) || 'u8wz9dtmm99upmpu52bazczfq3',
                clientId: (cmg && cmg.janrain_client_id) || '5cdyk76ckd8j6ux7pc4xyx8szpj28g5b',
                captureServer: (cmg && cmg.janrain_capture_server) || 'https://cmg.dev.janraincapture.com',
                responseType: 'token',
                dataDefaults: {
                    registrationUrl: window.location.href
                },
                registerFlow: 'socialRegistration',
                flowVersion: 'HEAD', //This defaults to HEAD so no need to set it now
                flowName: 'standard_newspaper',
                recaptchaPublicKey: '6LeVKb4SAAAAAGv-hg5i6gtiOV4XrLuCDsJOnYoP',
                setProfileData: '',
                stylesheets: [],
                mobileStylesheets: [],
                confirmModalClose: '',
                noModalBorderInlineCss: true,
                modalBorderColor: '#7AB433',
                modalBorderRadius: 0,
                modalBorderWidth: 5,
                modalBorderOpacity: 1,
                modalCloseHtml: '<span class="janrain-close-modal">x</span>',
                // Settings added from JR handoff, others changed
                setProfileCookie: true,
                keepProfileCookieAfterLogout: true,
                returnExperienceUserData: ['displayName'],
                // --- Federate  -----------------------------------------------------------
                federate: true,
                federateServer: (cmg && cmg.janrain_federate_server) || 'https://cmg-dev.janrainsso.com',
                federateXdReceiver: protocol + '//' + hostname + '/auth/federate_xd',
                federateLogoutUri: protocol + '//' + hostname + '/auth/logout',
                federateLogoutCallback: function() {
                    window.location = cmg.query('.cmLogout').attr('href');
                },
                federateEnableSafari: true
            },
            share: {
                message: "",
                title: "",
                url: "",
                description: "",
                attributionDisplay: false,
                previewMode: 0,
                shortenUrl: false,
                bodyBackgroundColor: "#FFFFFF",
                bodyBackgroundColorOverride: true,
                bodyColor: "#333",
                bodyContentBackgroundColor: "#ffffff",
                bodyFontFamily: "Helvetica",
                bodyTabBackgroundColor: "#FFFFFF",
                elementBackgroundColor: "#ffffff",
                elementBorderColor: "#ccc",
                elementBorderRadius: "3",
                elementButtonBorderRadius: "3",
                elementButtonBoxShadow: "0",
                elementColor: "#333333",
                elementHoverBackgroundColor: "#333333",
                elementLinkColor: "#173951"
            }
        },
        on: function(evnt, cb) {
            /* wrap janrain's event handler code to provide custom events. uses
             * a helper method depending on what kind of event is being
             * listened to.
             */
            if (this.events && this.events[evnt]) {
                this._janrain_on(evnt, cb);
            } else {
                this._custom_on(evnt, cb);
            }
        },
        _custom_on: function(evnt, cb) {
            var _ = cmg._;
            if (!_(this._events).has(evnt)) {
                this._events[evnt] = {
                    triggered: false,
                    handlers: [],
                    add_handler: function(cb) {
                        this.handlers.push(cb);
                    },
                    trigger: function() {
                        this.triggered = true;
                        var list = this.handlers, i = 0;
                        function runHandlers() {
                            try {
                                while (i < list.length) {
                                    list[i++]();
                                }
                            } finally {
                                if (i < list.length) {
                                    setTimeout(runHandlers, 0);
                                }
                            }
                        }
                        runHandlers();
                    }
                };
            }
            var evnt_obj = this._events[evnt];
            evnt_obj.add_handler(cb);
            if (evnt_obj.triggered) {
                cb();
            }
        },
        _janrain_on: function(evnt, cb) {
            // call janrain's event handler
            this.events[evnt].addHandler(cb);
        },
        trigger: function(evnt) {
            // trigger a custom event
            if (cmg._(this._events).has(evnt)) {
                this._events[evnt].trigger();
            }
        },
        save_profile: function() {
            var $ = cmg.query;
            var uuid = $.cookie('ur_uuid', {
                path: '/'
            });
            if (!uuid) {
                return console.error('panic: cannot find ur_uuid cookie');
            }
            $.ajax({
                url: base_url + 'auth/ajax/handle-profile-save',
                data: {
                    uuid: uuid,
                    nmredir: "true"
                },
                dataType: same_domain ? 'json' : 'jsonp',
                type: same_domain ? 'post' : 'get',
                context: this,
                success: function(data) {
                    if (!data || !data.display_name) {
                        return console.error('panic: cannot find display_name in response');
                    }
                    var display_name = data.display_name;
                    $.cookie('ur_name', '', {
                        expires: -2,
                        path: '/'
                    });
                    $.cookie('ur_name', display_name, {
                        path: '/'
                    });
                    cmg.update_auth_message('profile-save');
                }
            });
        },
        on_widget_load: function() {
            /* This function is what is called when the janrain js is done
             * loading. It means we now have full access to all of janrain's js
             * api and can start its ui.
             */
            var $ = cmg.query;
            var _ = cmg._;

            // We need to decide which screen and/or flow to use. Sadly the
            // only way we can figure this out is by examining the URL.
            // each individual page *should* be able to call ui.start on its
            // own. however since we need the signIn screen to show on nearly
            // every page we'd have to do some synchronous trickery to be able
            // to switch the screenToRender/flow before needing to call
            // ui.start. I don't like that this code is tied to the URL of the
            // page but it seemed like the alternative was far more confusing
            // and potentially even harder to maintain. I'd love someone to
            // disagree with me and make this better.
            // (this code is awful)
            var path = window.location.pathname;
            var matches = _(path.match).bind(path);
            var screen;

            janrain.events.onCaptureAccessDenied.addHandler(function(result){
                cmg.query(".cmLogout").click()
            });
            janrain.events.onModalOpen.addHandler(function(result){
                janrain.engage.signin.setNoReturnExperienceSwitchAccountLink(false);
                var token = localStorage.janrainCaptureToken,
                a = localStorage.janrainCaptureProfileData,
                b = a ? JSON.parse(a) : {};
                if (token){
                    return [token, b.uuid];
                }
            });
            if (matches('verify-email')) {
                this.settings.capture.screenToRender = 'verifyEmail';
                this.on('onCaptureEmailVerificationSuccess', function(data) {
                    janrain.settings.capture.federate = false;
                });
            } else if (matches('change-password')) {
                this.settings.capture.screenToRender = 'resetPasswordRequestCode';
            } else if (matches('profile/edit/private')) {
                //this.settings.capture.flowName = 'editProfile';
                this.settings.capture.screenToRender = 'editProfile';
                this.on('onCaptureProfileSaveSuccess', _(function() {
                    this.save_profile();
                }).bind(this));
                this.on('onCaptureSessionNotFound', function() {
                    // handle case where janrain's cookie timed out before
                    // medley's. send user to standalone signin page with a
                    // return redirect to here.
                    window.location = '/';
                    janrain.settings.capture.screenToRender = 'signIn';

                });
            } else {
                janrain.settings.capture.screenToRender = 'signIn';
                this.on('onCaptureProfileSaveSuccess', _(function() {
                    this.save_profile();
                }).bind(this));
            }
            ///// copypasta from janrain devs with tweaks
            // we may be called upon to update/merge this with new code from
            // them. Or fix it ourselves.
            function _addListener(element, type, listener) {
                if (!element) {
                    return false;
                }
                if (typeof window.attachEvent === 'object') {
                    element.attachEvent('on' + type, listener);
                } else {
                    element.addEventListener(type, listener, false);
                }
            }
            janrain.capture.ui.registerFunction('displayNameValidation', function(name, value, validation) {
                var displayNameRegex = /^[a-zA-Z0-9_-]+$/;
                if (displayNameRegex.test(value)) {
                    var whitespace = /\s/;
                    return displayNameRegex.test(value) && !whitespace.test(value);
                } else {
                    return false;
                }
            });
            janrain.capture.ui.registerFunction('zipCodeValidation', function(name, value, validation) {
                var zipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
                return zipCodeRegex.test(value);
            });
            janrain.capture.ui.registerFunction('phoneNumberValidation', function(name, value, validation) {
                var phoneNumberRegex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
                return phoneNumberRegex.test(value)
            });

            var emailValue;
            janrain.on('onCaptureRenderComplete', function(result) {
                if (result.screen === 'signIn') {
                    _addListener(document.getElementById('forgotPasswordLink'), 'click', function() {
                        emailValue = document.getElementById('capture_signIn_traditionalSignIn_emailAddress').value;
                    });
                }
                if (result.screen === 'forgotPassword') {
                    if (emailValue) {
                        document.getElementById('capture_forgotPassword_forgotPassword_emailAddress').value = emailValue;
                    }
                }
            });
            /////// end

            // start janrain's ui magic. this is required to use/do anything
            // besides configure settings and events.
            janrain.capture.ui.start();

            var login = _(function(data, leave_modal_open) {
                // handle a janrain login in medley. This callback logs the
                // user into medley and updates the UI.
                // It also updates the uuid cookie.
                if (!(data && data.userData && data.userData.uuid)) {
                    this.trigger('cmg_login_failed');
                    console.error('got bad data from janrain:', data);
                    return;
                }

                // We define `expire_days` here to be 90 days, which is not ideal :(
                // The '90 days' value should come from `SESSION_COOKIE_AGE` defined in conf/settings.py. However, if we want to use `SESSION_COOKIE_AGE`,
                // then one way to address this issue is to define `expire_days` in the templates that call `janrain.js`,
                // which are at least 6 places atm (ie. common/web/includes/auth/janrain/scripts.html, v2newspaper/web/includes/scripts.html, etc)
                var uuid = data.userData.uuid,
                    expire_days = 90;  // expire 90 days from now

                var cookie_options = {path: '/', expires: expire_days};
                $.cookie('ur_uuid', uuid, cookie_options);

                this.login_xhr = $.ajax({
                    url: base_url + 'auth/ajax/handle-auth/?nmredir=true',
                    data: {
                        uuid: uuid
                    },
                    type: same_domain ? 'post' : 'get',
                    dataType: same_domain ? 'json' : 'jsonp',
                    context: this,
                    success: function(data, status, xhr) {
                        if (!same_domain) {
                            // when making a JSONP request, cookies aren't set.
                            $.cookie('ur_name', data.user.displayName, cookie_options);
                            $.cookie('medley_id', data.user.id, cookie_options);
                            $.cookie('email_verified', data.user.emailVerified, cookie_options);
                        }

                        if (!leave_modal_open) {
                            this.capture.ui.modal.close();
                        }
                        cmg.update_auth_message('login');
                        this.trigger('cmg_login_complete');
                    },
                    error: function(xhr, status, error) {
                        console.error('error in login', status, error);
                        this.trigger('cmg_login_failed');
                    }
                });
            }).bind(this);

            var register = _(function(data) {
                // If this was a social login then log the user in
                // automatically. OW do nothing.
                if (!(data && data.action)) {
                    console.error('panic: register callback got strange object');
                    this.trigger('cmg_registration_failed');
                    return;
                }
                if (data.action !== 'traditionalRegister') {
                    login(data);
                }
            }).bind(this);

            var checkSession = function() {
                // call ajax endpoint to verify that our sessions are synced
                // and correct the issues if they are not

                if (flipper.is_active("disable_auth_recovery")) {
                    return;
                }

                var janrain_status = janrain.capture.ui.hasActiveSession();
                var recovery_xhr = $.ajax({
                    url: '/auth/ajax/recover-auth',
                    data: JSON.stringify({
                        janrain_status: janrain_status
                    }),
                    type: 'post',
                    context: this,
                    dataType: 'json',
                    contentType: 'application/json'
                });

                recovery_xhr.done(function(data) {
                    cmg.update_auth_message();

                    if (data.do_janrain_logout) {
                        console.log('Recovery Failed. Logging out.');
                        janrain.capture.ui.endCaptureSession();
                    } else {
                        console.log('Recovery Succeeded!');
                    }
                });

                recovery_xhr.fail(function() {
                    console.log('Recovery Failed');
                });

            };

            // TODO: remove/update this tracking when the change is made to DTM
            // omniture tracking
            var omni = {
                fire: function(evnt, msg, data) {
                    if (!flipper.is_active('DTMmetrics_Enable')) {
                        if (data && data.userData) {
                            omni.userDataHandler(data, true);
                        }
                        cmg.s_coxnews.linkTrackVars = 'events,' + omni.userDataTrackVars();
                        cmg.s_coxnews.linkTrackEvents = evnt;
                        cmg.s_coxnews.events = evnt;
                        cmg.s_coxnews.tl(document, 'o', msg);
                    }
                }
            };
            omni.onProviderLoginStart = _(omni.fire).bind(omni, 'event48', 'Login popup opened');
            omni.onProviderLoginStart = _.once(omni.onProviderLoginStart);
            omni.onProviderLoginError = _(omni.fire).bind(omni, 'event49', 'Error in login popup');
            omni.onProviderLoginSuccess = _(omni.fire).bind(omni, 'event50', 'Login Success');
            omni.onReturnExperienceFound = _(omni.fire).bind(omni, 'event52', 'Logged in via cookie');
            omni.onReturnExperienceFound = _.once(omni.onReturnExperienceFound);

            if (!flipper.is_active('DTMmetrics_Enable')) {
                try {
                    omni.userDataHandler = cmg.s_coxnews.utilities.userdata.transformer;
                    omni.userDataTrackVars = cmg.s_coxnews.utilities.userdata.track_vars;
                } catch(e) {
                    console.log(e);
                }
            }

            // this is a custome event. we trigger it ourselves in the login callback.
            this.on('cmg_login_complete', _(omni.fire).bind(omni, 'event51', 'Login Completed'));

            this.omni = omni;

            this.on('onCaptureLoginSuccess', login);
            this.on('onCaptureRegistrationSuccess', register);
            this.on('onCaptureEmailVerificationSuccess', function(data) { login(data, true)});
            // we want checkSession to fire exactly once, immediately after
            // Janrain checks for the session, regardless of outcome of the check
            this.on('onCaptureSessionFound', checkSession);
            this.on('onCaptureSessionNotFound', checkSession);

            this.on('onCaptureScreenShow', omni.onProviderLoginStart);
            this.on('onCaptureLoginSuccess', omni.onProviderLoginSuccess);
            this.on('onCaptureProfileSaveFailed', omni.onProviderLoginError);
            this.on('onCaptureSaveFailed', omni.onProviderLoginError);
            this.on('onCaptureRegistrationFailed', omni.onProviderLoginError);
            this.on('onCaptureFederateLogin', omni.onReturnExperienceFound);
            // end of metrics

            // Error handling; these errors are PANIC errors after which the
            // user just has to refresh the page.
            _([
                'cmg_login_failed',
                'cmg_registration_failed'
            ]).each(_(function(x) {
                this.on(x, function() {
                    console.error(x);
                    cmg.error_dialog();
                });
            }).bind(this));

            // These errors are recoverable and just need to be reported to the console.
            _([
                'onCaptureSaveFailed',
                'onCaptureRegistrationFailed',
                'onCaptureLoginFailed',
                'onCaptureLinkAccountError'
            ]).each(_(function(x) {
                this.on(x, function() {
                    //console.log(x);
                });
            }).bind(this));

            this.on('onCaptureScreenShow', _(function() {
                if (cmg.refresh_timer) {
                    clearTimeout(cmg.refresh_timer);
                }
            }).once());

            // set up the mobile/newsletter signup redirects
            // they use the same login flow but when the user is done they need
            // to be shuttled off to special places.
            var redirect = _(function(e) {
                e.preventDefault();
                var href = $(e.target).attr('href'),
                do_redirect = function() {
                    window.location = href;
                };
                if (this.capture.ui.hasActiveSession()) {
                    return do_redirect();
                }
                this.capture.ui.modal.open();
                this.on('cmg_login_complete', do_redirect);
            }).bind(this);

            var $body = $('body');
            var delegate = _($body.delegate).bind($body);
            // mogreet, favorites
            _([
                '.cmFeedUtilities .sprite.iconMobile a',
                'span.favorite a'
            ]).each(function(selector) {
                delegate(selector, 'click', redirect);
            });

            // logging out
            delegate('.cmLogout', 'click', _(function(e) {
                e.preventDefault();
                $.cookie('ur_name', '', {
                    expires: -2,
                    path: '/'
                });
                $.cookie('ur_metrics', '', {
                    expires: -2,
                    path: '/'
                });
                this.capture.ui.endCaptureSession();
                // window is sent to logout URI in federateLogoutCallback.
            }).bind(this));

            // modal opener
            delegate('.cmOpenJanrainModal', 'click', _(function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.capture.ui.modal.open('signIn');
                janrain.settings.capture.federate = true;
            }).bind(this));

            // all done; pages that need to set up additional behaviors can
            // listen for this event.
            this.trigger('cmg_ready');
        },
        _fired_janrain_events: function() {
            // really just for debugging in the console
            var e = this.events;
            return cmg._(e).chain()
            .keys()
            .filter(function(x) {
                return e[x].firedEvents && e[x].firedEvents.length > 0;
            })
            .value();
        },
        load_janrain_js: function() {
            cmg.query.getScript(this.settings.cmg.js_url);
        },
        go_next: function() {
            //wait for pending AJAX calls to complete
            if (cmg.query.active == 0 || cmg.query.cookie('ur_name')) {
                var next = cmg.parse_qs(window.location.search)['next'] || '/';
                window.location.href = next;
            }
            else {
                window.setTimeout(go_next, 250);
            }
        }

    };
})(window.cmg);
