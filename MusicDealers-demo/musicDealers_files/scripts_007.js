/**
 * Multi Step Artist Profile Form Js. No node_form
 * -- RDJ, 08/09/2013
 */

var MD2ArtistFunc = {};
MD2ArtistFunc.form_id = '#md2-artist-create-form';
MD2ArtistFunc.validator = {};

// Watch out for trailing commas, Ive had some bad experiences even though - trailing comma is not legal in ECMA-262 object initializers
$(document).ready(function() {
  MD2ArtistFunc.options = {
    contract_status: 0
  }

  MD2ArtistFunc.init = function() {
    $('.progress').hide();

    // Flag to tell in the backend what page we are processing so it will validate the right
    // forms. If javascript is off, then this value is empty so the backend validates everything
    $('#edit-current-step').val(1);
    
    MD2ArtistFunc.form_theme_changes();
    MD2ArtistFunc.watch_dollar_min();
    MD2ArtistFunc.watch_country();
    MD2ArtistFunc.watch_contracting_fields();
    MD2ArtistFunc.watch_artist_name();
    MD2ArtistFunc.watch_agree_checkbox();
    MD2ArtistFunc.init_validator();
    MD2ArtistFunc.init_stepy();
    MD2ArtistFunc.init_upload_form();
    MD2ArtistFunc.init_clone_fields();
    MD2ArtistFunc.update_tax_close();
    MD2ArtistFunc.update_custcontract_close();

    // Hide song upload when creating new artist or when the artist needs to sign the contract first
    if ($('#edit-nid').val() == '' || $('#edit-nid').val() == 0) {
      $('#stepy-wrapper-title-5').hide();  
    }
  };

  MD2ArtistFunc.init_validator = function() {
    // Initiate validator and extra rules
    MD2ArtistFunc.validator = $(MD2ArtistFunc.form_id).validate();

    // [This is a hack!] Because of this multistep thing, we can't explicity require all the fields needed to be required
    // Using the class name "required", we are fooling the users via the validate js that the fields are requried
    $('.dashboard-form-wrapper form .required').each(function(){
      MD2ArtistFunc.add_required_text($(this));
    });

    // This includes validation for email right from the js
    $(".dashboard-form-wrapper form .form-item .email").rules("add", {
      email: true,
      messages: {
        email: "Enter a valid email"
      }
    });

    $.validator.addMethod("phone", function(value, element) {
      return this.optional(element) || /^\d+$/.test(value);
    }, "Please provide a valid phone number (numbers only).");

    if (MD2ArtistFunc.options.is_admin == false) {
      $('#edit-group-basic-artist-fid').rules('add', {
        messages: {
          required: 'Profile picture is required.'
        }
      });

      /*$.validator.addMethod("zipcode", function(value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      }, "Please provide a valid zipcode (numbers only).");*/
    }
  }

  MD2ArtistFunc.add_required_text = function(obj) {
	  var label = obj.parent().find('label');
    var str = label.html();
    if (str !== null && str.search('form-required') < 0) {
      label.prepend('<span title="This field is required." class="form-required">*</span>');
    }
  }

  MD2ArtistFunc.init_stepy = function() {
    // --- Initiate stepy to create the step by step form
    $('#stepy-wrapper').stepy({
      description: false,
      titleClick: true,
      validate: false,
      backLabel: 'Back',
      nextLabel: 'Continue',
      block: true,
      select: function(index) {},
      nextClass: 'austin-button btn-md btn-blue',
      backClass: 'austin-button btn-md btn-grey',
      next: function(index) {
        // Bypass any checking is user is admin
        if (MD2ArtistFunc.options.is_admin) {
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return true;
        }

        var num = MD2ArtistFunc.get_current_step();

        // User needs to sign that contract first! 
        if ($('#edit-group-pref-agree').is(':checked') == false && index > 3) {
          MD2ArtistFunc.show_agree_inline_error();
          setReport('error', 'Agreement', 'You have to agree to the license agreement first.');
          return false;
        }

        // Force save in first page for the first time to get the NID so I know what to update using the Save button
        var nid = $('#edit-nid').val();
        if (num == 0 && index != 6 && (nid.length == 0 || nid == 0 || nid == '')) {
          var res = MD2ArtistFunc.validate_form(true);
          if (res == true) {
            $("html, body").animate({ scrollTop: 0 }, "slow");
          }

          return res;
        }

        //if (num == 2 && $('#edit-save-contract').val() == 1 && MD2ArtistFunc.options.contract_status != 'complete') { // contract
        if (num == 2 && $('#edit-group-pref-agree').is(':checked') == false && MD2ArtistFunc.options.contract_status != 'complete') { // contract
          var vld = MD2ArtistFunc.validate_form(false);
          if (vld == false) {
            return false;
          }

          MD2ArtistFunc.show_agree_inline_error();

          return false; //MD2ArtistFunc.popup_contract();
        }

        if (index == 6) {
          if (num != 4) {
            MD2ArtistFunc.redirect_upload_song(); 
          }
          else {
            MD2ArtistFunc.validate_form(true);
          }

          return false;
        }

        var res = MD2ArtistFunc.validate_form(false);
        if (res == true) {
          $("html, body").animate({ scrollTop: 0 }, "slow");
        } else {
          setReport('error', 'QA', 'Some required fields are missing. Please double check your info.');
        }

        return res;
      },
      finish: function(index) {
        var num = MD2ArtistFunc.get_current_step();
        $('#edit-current-step').val(num);
      }
    });
  
    $('#stepy-wrapper-titles').addClass('artists-right-menu');
    $('#stepy-wrapper-titles').wrap("<div class='artists-right-column floatright relative two last'></div>");
    $('#stepy-wrapper').addClass('nine');

    $('#stepy-wrapper-buttons-0 input.form-submit,, #stepy-wrapper-buttons-1 input.form-submit, #stepy-wrapper-buttons-2 input.form-submit').click(function(e) {
      e.preventDefault();

      if (MD2ArtistFunc.options.is_admin == false && $('#edit-group-basic-request-removal-request-removal-checkbox').is(':checked') == false) {
        // User needs to sign that contract first! 
        if ($('#edit-group-pref-agree').is(':checked') == false) {
          MD2ArtistFunc.show_agree_inline_error();
          setReport('error', 'Agreement', 'You have to agree to the license agreement first.');
          return false;
        }
      }

      MD2ArtistFunc.validate_form(true);
      return true;
    })
  }

  MD2ArtistFunc.show_agree_inline_error = function() {
    if ($('#edit-group-pref-agree-wrapper label.error').length <= 0) {
      $('#edit-group-pref-agree-wrapper').append('<label class="error">This is required.</div>');
    }
  }

  MD2ArtistFunc.init_upload_form = function() {
    $('.progress').hide();

    function progress_show(obj, cur_width, new_width) {
      obj
        .show()
        .attr('aria-valuemin', new_width)
        .find('.bar')
          .css('width', new_width + '%')
          .width(cur_width)
          .animate({width: new_width}, 1200);
    }

    function progress_hide(obj) {
      obj
        .attr('aria-valuemin', 0)
        .hide()
        .find('.bar')
          .css('width', '0%');  
    }

    // -- File upload init. Everytime a new file is selected, it automatically process in the backend and
    // returns back the fid which we assign to our hidden field that the backend saves
    $('#artist_profile_form_main_wrapper .form-file').each(function(){
      $(this).fileupload({
        dataType: 'json',
        progressInterval: 10,
        start: function(e) {
          $('#report').hide();

          var id = $(e.target).attr('id');
          var progressbar = $('#' + id).parent().find('.description .progress');
          progress_show(progressbar, 0, 30)
        },
        progressall: function (e, data) {
          var progress = parseInt(data.loaded / data.total * 100, 10);
          var id = $(e.target).attr('id');
          var progressbar = $('#' + id).parent().find('.description .progress');
          var cur_width = progressbar.attr('aria-valuemin');
          progress_show(progressbar, cur_width, progress);
        },
        done: function (e, data) {
          var progressbar = $(e.target).parent().find('.description .progress');

          var cur_width = progressbar.attr('aria-valuemin');
          progress_show(progressbar, cur_width, 150);

          if (data.result == undefined || data.result.options == undefined || data.result.options.file == undefined) {
            setReport('error', 'Upload failed', 'Upload failed. Please try again.');
            progress_hide(progressbar);
            return;
          }

          var file = data.result.options.file;
          if (file.error != undefined) {
            setReport('error', 'Upload failed', file.error);
            progress_hide(progressbar);
            return;
          }

          // Notify user file has been uploaded except for group_basic because we already update the avatar
          if (file.source == 'group_contract' || file.source == 'group_payment') {
            // The progress percentage is not smooth. @progressall status, sometimes the value is at 50% and 
            // when it reach the @done status, it is already 100% without any interval update form 50% - 100%
            // so it looks like the progress just disappear without a progress. To show real progression
            // I set the timeout below to complete the progress bar from last update to 100%.
            setTimeout(function() {
              setReport('success', 'File Uploaded', 'File uploaded');
              progress_hide(progressbar);

              setTimeout(function() {
                $('#report').hide();
              }, 1000);

              // Process any necessary html changes
              if (file.source == 'group_contract') {
                var link = '<div class="mist"><a href="' + '/' + file.filepath + '" class="noshebang">' + file.filename + '</a> <a class="close">&nbsp;&nbsp;</a></div></div>';
                $(e.target).parent().find('.description').html(link);
                
                $('#edit-group-contract-custom-contract-file-fid').val(file.fid);
                $('#edit-group-contract-custom-contract').prop('checked', true);
                MD2ArtistFunc.update_custcontract_close();
              }
              else if (file.source == 'group_payment') {
                $('#edit-group-payment-tax-fid').val(file.fid);
                var link = '<div class="mist"><a href="' + '/' + file.filepath + '" class="noshebang">' + file.filename + '</a> <a class="close">&nbsp;&nbsp;</a></div></div>';
                $(e.target).parent().find('.description').prepend(link);  
                MD2ArtistFunc.update_tax_close();
              }

            }, 2000); 
          } 
          else {
            $('#edit-group-basic-artist-fid').val(file.fid);
            $('#user-avatar').attr('src', '/' + file.filepath);

            setTimeout(function() {
              progress_hide(progressbar);
            }, 1000);
          }
          
        }
      });
    });
  }

  MD2ArtistFunc.init_clone_fields = function() {
    // -- Time to call and assign the widgets created in our external file
    $('#contract-party').form_clone({
      afterClone: function() {
        // Only reset the contract status if the user editing is NOT an ADMIN user
        if (MD2ArtistFunc.options.is_admin === false) {
          MD2ArtistFunc.contract_status(0);
        }
      },
      afterDelete: function() {
        // Only reset the contract status if the user editing is NOT an ADMIN user
        if (MD2ArtistFunc.options.is_admin === false) {
          MD2ArtistFunc.contract_status(0);
        }
      }
    });
    $('#buzz-points').form_clone({remBtnLabel: 'Remove'});
    $('#band-members').form_clone();
  }

  MD2ArtistFunc.update_tax_input_display = function() {
    var v = $('#edit-group-payment-tax-fid').val();
    if (v.length > 0) {
      $('#edit-group-payment-tax-wrapper label').hide();
      $('#edit-group-payment-tax-wrapper input.form-file').hide();
    }
    else {
      $('#edit-group-payment-tax-wrapper label').show();
      $('#edit-group-payment-tax-wrapper input.form-file').show(); 
    }
  }

  MD2ArtistFunc.update_tax_close = function() {
    MD2ArtistFunc.update_tax_input_display();
    $('#edit-group-payment-tax-wrapper .description .close').click(function() {
      var x = confirm('Are you sure you want to remove this file?');
      if (x == true) {
        $('#edit-group-payment-tax-wrapper .description .mist').remove();
        $('#edit-group-payment-tax-fid').val('');
        MD2ArtistFunc.update_tax_input_display();
      } 
    })
  }

  MD2ArtistFunc.update_custcontract_display = function() {
    var v = $('#edit-group-contract-custom-contract').is(':checked');
    if (v == false) {
      $('#edit-group-contract-custom-contract-file-wrapper .form-file').show();
      $('#edit-group-contract-custom-contract-file-fid').val('');
    }
    else {
      $('#edit-group-contract-custom-contract-file-wrapper .form-file').hide();
    }
  }

  MD2ArtistFunc.update_custcontract_close = function() {
    MD2ArtistFunc.update_custcontract_display();
    $('#edit-group-contract-custom-contract-file-wrapper .description .close').click(function() {
      var x = confirm('Are you sure you want to remove this file?');
      if (x == true) {
        $('#edit-group-contract-custom-contract').prop('checked', false);
        $('#edit-group-contract-custom-contract-file-wrapper .description .mist').remove();
        MD2ArtistFunc.update_custcontract_display();
      } 
    })
  }

  // One time function call to change some theming and styling
  MD2ArtistFunc.form_theme_changes = function() {
    // Add the btn classes if stepy was not initialized
    if ($('.finish').length == 0) {
      $('#md2-artist-create-form #edit-submit')
        .addClass('finish')
        .addClass('austin-button')
        .addClass('btn-md').addClass('btn-blue')
    }

    // Moving this before the file upload button as per requirement in the design provided
    // Unfortunately, d6 #type = file doesn't have #field_prefix so there is no other way than to do it in js
    $('#edit-group-basic-artist-image').before($('.user-avatar-wrapper'));

    // Styling the music dealers percentages and add some calculation for visuals
    var val = 100 - $('#edit-group-contract-split-master').val();
    $('#edit-group-contract-split-master').before('Artist Split');
    $('#edit-group-contract-split-master').after('Music Dealers Split: <span id="md-split-master">'+val+'</span>%');
    var val = 100 - $('#edit-group-contract-split-publishing').val();
    $('#edit-group-contract-split-publishing').before('Artist Split');
    $('#edit-group-contract-split-publishing').after('Music Dealers Split: <span id="md-split-publishing">'+val+'</span>%');

    $('#edit-group-contract-split-master').change(function(){
      var val = 100 - $(this).val();
      $('#md-split-master').html(val);
    });

    $('#edit-group-contract-split-publishing').change(function(){
      var val = 100 - $(this).val();
      $('#md-split-publishing').html(val);
    });

    // Add some css love for our titles. 
    $('#stepy-wrapper fieldset').each(function(){
      $(this).children('legend').addClass('brick museoslab');
    });

    // Yet another hack because we cannot explicity require File fields. 
    // They are using a hidden field to store the existing file
    if (MD2ArtistFunc.options.is_admin == false) {
      var requiredSpanText = '<span class="form-required" title="This field is required.">*</span> ';
      $('.edit-group-basic-artist-image').prepend(requiredSpanText);
      $('.admin_only_contract .form-item-group.file b').prepend(requiredSpanText);
      //$('.edit-group-payment-tax').prepend(requiredSpanText);
    }

    // Sortable
    $('#buzz-points .clone-group').sortable({
      cursor: "move",
      update: function(event, ui) {
        var cnt = 0;
        $('#buzz-points .form-text').each(function() {
          var str = $(this).attr('name');
          if (str != undefined) {
            str = str.replace(/\[[0-9]*\]/, '[' + cnt + ']');
            $(this).attr('name', str);
          }
          cnt++;
        });

      }
    });

    

    MD2ArtistFunc.watch_artist_exclusion();
    $("#edit-group-pref-artist-exclusions-2253").live('change', function() {
      MD2ArtistFunc.watch_artist_exclusion();
    });
  }

  MD2ArtistFunc.watch_artist_exclusion = function() {
    $("#edit-group-pref-additional-custom-exclusion-wrapper").hide();
    if($("#edit-group-pref-artist-exclusions-2253").is(":checked")){
      $("#edit-group-pref-additional-custom-exclusion-wrapper").show();
    }
  }

  // <<< Start of generic functions specific to this page
  // When the dollar is being updated, check the checkbox associated to it
  MD2ArtistFunc.watch_dollar_min = function() {
    $('#edit-group-pref-dollar-min').change(function(){
      var val = false;
      if ($(this).val() != '' && $(this).val() != '0') val = true;
      $('#edit-group-pref-pref-min').prop('checked', val);
      if (val == true) {
        disable_checkbox();
      } 
      else {
        reenable_checkbox();
      }
      $('#edit-group-pref-promo-exclude').prop('disabled', val);
    });

    if ($('#edit-group-pref-dollar-min').val() != undefined && $('#edit-group-pref-dollar-min').val() != '' && $('#edit-group-pref-dollar-min').val() != '0') {
      disable_checkbox();
    }

    // Disable the promo opt out checkbox and check it if not yet done so.
    function disable_checkbox() {
      var msg = '<p class="note"><small>You have songs with minimum licensing fees therefore you are ineligible for promotional opportunities</small></p>';
      var val = true;
      if ($('#edit-group-pref-promo-exclude').is(':checked') == false) {
        $('#edit-group-pref-promo-exclude').click();  
      }
      $('#edit-group-pref-promo-exclude').prop('disabled', val);
      if ($('#edit-group-pref-promo-exclude-wrapper p.note').length <= 0) {
        $('#edit-group-pref-promo-exclude-wrapper').append(msg);
      }
    }

    // Reenabling is just removing the disabled status. No other changes should be done.
    function reenable_checkbox() {
      if ($('#edit-group-pref-promo-exclude').is(':checked') == true) {
        $('#edit-group-pref-promo-exclude-wrapper p.note').remove();
        $('#edit-group-pref-promo-exclude').prop('disabled', false);
      }
    }
  }

  // Changing the state fields based on the country selected. 
  // US should display the select field while the others display the text field.
  MD2ArtistFunc.watch_country = function() {
    $('.country').each(function(){
      _md2_artist_country_change($(this));
    }); 

    $('.country').live('change', function() {
      _md2_artist_country_change($(this));
    })  
  }

  // Add event tracker that when any of the contracting fields change, make sure to require the contract popup
  MD2ArtistFunc.watch_contracting_fields = function() {
    // Only reset the contract status if the user editing is NOT an ADMIN user
    if (MD2ArtistFunc.options.is_admin === false) {
      $('#contract-party input').each(function(){
        $(this).change(function(){
          MD2ArtistFunc.contract_status(0);
        });
      });

      $('#contract-party select').each(function(){
        $(this).change(function(){
          MD2ArtistFunc.contract_status(0); 
        });
      });

      $('.admin_only_contract select').each(function(){
        $(this).change(function(){
          MD2ArtistFunc.contract_status(0); 
        });
      });

      $('.group-preferences .form-checkbox').each(function() {
        $(this).change(function(){
          if ($(this).attr('id') == 'edit-group-pref-agree') return;
          MD2ArtistFunc.contract_status(0); 
        });
      });
    }
  }
  
  // Attach events to artist_name
  MD2ArtistFunc.watch_artist_name = function() {
    // Only reset the contract status if the user editing is NOT an ADMIN user
    if (MD2ArtistFunc.options.is_admin === false) {
      $('#edit-group-basic-artist-name').change(function(){
        MD2ArtistFunc.contract_status(0);
      });
    }
  }

  // Attach events to the form do display the popup modal
  MD2ArtistFunc.watch_agree_checkbox = function() {
    $('#edit-group-pref-agree').click(function() {
      if ($(this).is(':checked') == true) {
        $(this).closest('div').find('.error').remove();
        MD2ArtistFunc.contract_status(0); 
        MD2ArtistFunc.popup_contract();
      }
    });
  }

  // Adjust the checkfield depending on the passed status
  MD2ArtistFunc.contract_status = function(status) {
    var checked = false;

    if (status == 0) {
      MD2ArtistFunc.options.contract_status = 'pending';
    }
    else if (status == 1) {
      MD2ArtistFunc.options.contract_status = 'pending';
      checked = true;
    }
    else if (status == 2) {
      MD2ArtistFunc.options.contract_status = 'complete';
      checked = true;
    } else {
      MD2ArtistFunc.options.contract_status = '';
    }

    if (MD2ArtistFunc.options.contract_status == 'pending') {
      //$('.stepy-wrapper-buttons .form-submit').hide();
      $('#stepy-wrapper-title-5').hide();
    }

    $('#edit-group-pref-agree').prop('checked', checked);
  }
    
  
  // Simple redirection
  MD2ArtistFunc.redirect_upload_song = function() {
    window.location.href = '/artist/' + $('#edit-nid').val() + '/upload-song';
  }

  // Convenient function to get the current step from stepy
  MD2ArtistFunc.get_current_step = function() {
    var current_step = $('#stepy-wrapper-titles .current-step').attr('id').split('-');
    return current_step[3];
  }

  // Validate and submit the form if error free
  MD2ArtistFunc.validate_form = function(isSubmit) {
	
	var num = MD2ArtistFunc.get_current_step();
    $('#edit-current-step').val(num);

    $('#stepy-wrapper-step-' + num + ' .required').each(function(){
      MD2ArtistFunc.validator.element('#' + $(this).attr('id'));
    });

    if (MD2ArtistFunc.validator.numberOfInvalids() > 0) {
      return false;  
    }
    
    if (isSubmit == true) md2_artist_submit_form();
    return true;
  }

  MD2ArtistFunc.popup_contract = function() {
    var nid = $('#edit-nid').val();
    var cid = $('#edit-cid').val();

    $('#md2-artist-contract .print').hide();

    // Reset our modal
    $('#md2-artist-contract .the-contract').html('Loading Contract...');
    // $('.the-contract-checkbox :input').prop('checked', 0).attr('disabled', true);
    $('#submit-contract').addClass('btn-grey');
    $(".the-contract-outer").animate({ scrollTop: 0 }, "fast");

    //var data = $("#contract-party").find("select, textarea, input").serialize();

    var param = '';
    $("#contract-party").find("select, textarea, input").each(function(x,y) {
      var me = $(this)
      var name = me.attr('id').replace('edit-group-contract-', '');

      if (param != '') param += '&';
      param += name + '=' + me.val();
    })

    if ($('#edit-group-contract-split-master').length > 0) {
      param += '&master=' + $('#edit-group-contract-split-master').val();
    }

    if ($('#edit-group-contract-split-publishing').length > 0) {
      param += '&pub=' + $('#edit-group-contract-split-publishing').val();
    }

    var exclusions = '';
    $('#pref-promo .form-checkbox').each(function() {
      if ($(this).is(':checked')) {
        if (exclusions.length > 0) exclusions += '+'
        exclusions += $(this).val();
      }
    });

    if (exclusions.length > 0) {
      param += '&exclusions=' + exclusions;
    }

    if ($('#edit-group-pref-promo-exclude').is(':checked') == true) {
      param += '&promo=1';
    }

    $.ajax({
      url: "/ajax/getartistcontract/" + cid + '/' + nid + '?special_ajax=1&' + param,
      type: "GET",
      //data: data,
      context: document.body
    }).done(function(data) {
      var content = JSON.parse(data);

      $('#md2-artist-contract .print')
        .show()
        .attr('href', '/artist/' + nid + '/contract/' + cid + '?print=1&' + param);
      
      $('#md2-artist-contract .the-contract').html(content.data.html);
      $('#md2-artist-contract')
        .css('z-index', 1000075) /* force redraw to render css correctly */
        .contract_modal({
        done: function() {
          // The user approved the contract therefore we want to save a new instance
          // We want to notify the form that we want to save a new instance of the contract
          $('#edit-save-contract').val('1');
          $('#edit-group-pref-agree').prop('checked', true);
          md2_artist_submit_form();
          
          // Move to the next page after saving the contract
          MD2ArtistFunc.contract_status(2); // Status is complete

          $('#stepy-wrapper').stepy('step', 4);  
          $("html, body").animate({ scrollTop: 0 }, "slow");

          //$('.stepy-wrapper-buttons .form-submit').show();
          $('#stepy-wrapper-title-5').show();

          // We assume we already sent the right info, so this value again becomes 0
          $('#edit-save-contract').val('');
        }
      });
    });

    $('#md2-artist-contract').md2_modal();

    return false;
  }

  // Changing the state fields based on the country selected. 
  // US should display the select field while the others display the text field.
  function _md2_artist_country_change(obj) {
    var wrap = obj.parent().parent();
    if (obj.val() == 'US') {
      wrap.find('.state-text').removeClass('required');
      wrap.find('.state-select').parent().show();
      wrap.find('.state-text').parent().hide();

      if (MD2ArtistFunc.options.is_admin == false) {
        wrap.find('.state-select').addClass('required');
        MD2ArtistFunc.add_required_text(wrap.find('.state-select'));
      }
    }
    else {
      wrap.find('.state-select').removeClass('required');
      wrap.find('.state-select').parent().hide();
      wrap.find('.state-text').parent().show();

      if (MD2ArtistFunc.options.is_admin == false) {
        wrap.find('.state-text').addClass('required');
        MD2ArtistFunc.add_required_text(wrap.find('.state-text')); 
      }
    }
  }

  // Submit the form
  function md2_artist_submit_form() {
    $(MD2ArtistFunc.form_id).submit();

    // If the user just finished doing the Biography
    // Add some leeway time to save the content before proceeding to Uploading the song page
    var num = MD2ArtistFunc.get_current_step();
    if (num == 4) {
      var html = '<br/><p>Your artist profile is being updated. Thank you for your patience!</p>\
      <img style=\'margin:30px;\' src=\'/sites/all/themes/md_fusion/images/ajax-loader.gif\' />';
      setReport('success', 'Saving...', html);
      md2_artist_save_before_exit();
    }
  }

  // Having a hard time tying to the submit event so what I'll do is just watch for the save button status
  // I'm just watching the value of the save button. If it's not loading, then it's done. Dirty? :D
  function md2_artist_save_before_exit() {
	  
    setTimeout(function() {
      var done = 1;
      $('.form-submit.finish').each(function(){
    	      	  
        if ($(this).val() == 'Loading...') {
          done = 0; return;
        }
      });

      if ($('.messages.error').length > 0) {
        setReport('error', 'Error', 'Please check the error report.');
        return;
      }

      if (done == 1) { MD2ArtistFunc.redirect_upload_song(); }
      else { md2_artist_save_before_exit(); }
    }, 5000); 
  }

  // >>> END of generic functions
});

(function($) {
  // -- Hack in handling ajax errors
  jQuery.extend({
    handleError: function(s, xhr, status, e) {
    	
    	console.log('Handle Error -kjs');
    	
      // If a local callback was specified, fire it
      if ( s.error ) {
        s.error( xhr, status, e );
      }
      // If we have some XML response text (e.g. from an AJAX call) then log it in the console
      else if(xhr.responseText) {
        //console.log(xhr.responseText);
      }
    }
  });

  /*$(window).bind( 'hashchange', function(e) {
    first = '';

    stateObject = $.bbq.getState();         // get entire state
    for (first in stateObject) break;       // get first
    
    first = first.toString().toLowerCase();     // make sure its a string
    firstArray = first.split("/");          // break up the request uri (pathname)
    aid = firstArray[2];              // the artist name or id

    var isCurrentPage = false;
    if (firstArray[1] == 'dashboard' && firstArray[2] == 'create-artist-profile') isCurrentPage = true;
    else if (firstArray[1] == 'artist' && firstArray[3] == 'edit-artist-profile') isCurrentPage = true;

    if (isCurrentPage) {
      //console.log('bind has been activated');
      //console.log(firstArray);  
    }
    
  });*/

  /**
   *   Responsible for most of the cloning group. Below is an example html that should be followed to use this.
   *  It's not very flexible!
   *
   *  <div id="unique-id">
   *     <div class="clone-group">
   *       <div class="clone-template"></div>
   *     </div>
   *     <div class="btn-clone"></div>
   *   </div>
   */

  $.widget("md2.form_clone", {
    options: {
      remBtnLabel: '- Remove',
      afterClone: undefined,
      afterDelete: undefined
    },

    _create: function() {
      var self = this,
          o = self.options,
          el = self.element;

      $('.btn-clone', el).click(function(e) {
        e.preventDefault();
        self.add();

      });

      $('.btn-del-clone', el).each(function(){
        $(this).click(function(e){
          e.preventDefault();
          $(this).parent('.clone-clone').fadeOut(500, function() { $(this).remove(); });

          if (o.afterDelete != undefined) {
            o.afterDelete.call(self);  
          }
        });
      });
    },

    add: function() {
      var self = this,
          o = self.options,
          el = self.element;

      var clone = $('.clone-template', el).clone();

      clone.removeClass('clone-template').addClass('clone-clone');

      var num = $('.clone-clone', el).length + 1;
      var self_id = 'form-clone-' + num;
      var found = false;
      while(found == false) {
        if ($('#' + self_id).length <= 0) {
          found = true;
        }
        else {
          num = num + 1;
          self_id = 'form-clone-' + num;
        }
      }
      
      clone.attr('id', self_id);

      clone.find('[id]').each(function() { 
        var $th = $(this);
        var newID = $th.attr('id').replace(/-0-/, '-' + num + '-');
        $th.attr('id', newID);

        var str = $th.attr('name');
        if (str != undefined) {
          str = str.replace(/\[0\]/, '[' + num + ']');
          $th.attr('name', str);
        }

        $th.val('');

        if ($th.hasClass('country') == true) {
          $th.val('US');
        }
      });

      // labels
      clone.find('[for]').each(function() { 
        var $th = $(this);
        var str = $th.attr('for').replace(/-0-/, '-' + num + '-');
        $th.attr('for', str);

        str = $th.attr('class').replace(/-0-/, '-' + num + '-');
        $th.attr('class', str);
      });

      var remBtn = '<a href="javascript:void(0);" class="btn-del-clone">' + o.remBtnLabel + '</a>';
      clone.append(remBtn);

      var el_id = '#' + el.attr('id');
      clone.appendTo(el_id + ' .clone-group');

      $('.btn-del-clone', el).click(function(e){
        e.preventDefault();
        $(this).parent('.clone-clone').fadeOut(500, function() { $(this).remove(); });
      });

      if (o.afterClone != undefined) {
        o.afterClone.call(self);  
      }
    }

  });
  

  /**
   *  Attach events to the contract popup
   * 
   */

  $.widget("md2.contract_modal", {
    options: {
      contractClass: '.the-contract',
      contractOuterClass: '.the-contract-outer',
      contractCheckboxClass: '.the-contract-checkbox',
      done: undefined
    },

    _create: function() {
      var self = this,
          o = self.options,
          el = self.element;

      self.watchScroll();
      self.readBtn();
      self.acceptBtn();
    },

    watchScroll: function() {
      var self = this,
          o = self.options,
          el = self.element;

      // var box = $(o.contractOuterClass),
      // inner = $("> " + o.contractClass, box),

      // Subtracting 300 so checkbox startst to be enabled when nearing the end
      // innerOuterHeight = inner.outerHeight() - 300; 

      // boxHeight = box.height();
      // boxOffsetTop = box.offset().top;
      
      // $(".the-contract-outer").scroll(function() {
      //   if (Math.ceil(boxHeight - inner.offset().top + boxOffsetTop) >= innerOuterHeight ) {
      //     $(o.contractCheckboxClass + " input").attr("disabled", false);
      //   }
      // });

      $(o.contractCheckboxClass + " input").attr("disabled", false);
    },

    readBtn: function() {
      var self = this,
          o = self.options,
          el = self.element;

      $(o.contractCheckboxClass + ' input').click(function(){
        var submitBtn = $('.modal-footer #submit-contract', el);

        if ($(this).is(':checked') == true) {
          submitBtn.attr('disabled', false).removeClass('btn-grey');  
        }
        else {
          submitBtn.attr('disabled', true).addClass('btn-grey');
        }
      });
    },

    acceptBtn: function() {
      var self = this,
          o = self.options,
          el = self.element;

      $('.modal-footer #submit-contract', el).click(function(){
        if (o.done != undefined) {
          o.done.call(self);  
        }

        // Close and scroll to top
        $('.modal-cancel', el).click();
      });
    },

    destroy: function() {
      $.Widget.prototype.destroy.call( this );
    }
  });

})(jQuery);
