/**
 * Account Form
 * - KJS
 */

var MD2AccountFunc = {};
MD2AccountFunc.form_id 		= '#user-profile-form';
MD2AccountFunc.validator 	= {};
MD2AccountFunc.options 		= {};

//Init Function
MD2AccountFunc.init = function() {
  //$('.progress').hide();
  MD2AccountFunc.form_theme_changes();
  
  /*MD2SongFunc.init_validator();
  MD2SongFunc.init_upload_form();
  MD2SongFunc.init_clone_fields();
  MD2SongFunc.init_sortables();
  MD2SongFunc.init_autocompletes();*/
};

MD2AccountFunc.form_theme_changes = function() {
	$("#user-profile-form legend").addClass('brick museoslab');
	
	$("#user-profile-form span.password-strength").remove();
	$("#user-profile-form span.password-confirm").remove();
	$("#user-profile-form #edit-pass-pass1").off();
	$("#user-profile-form #edit-pass-pass2").off();
	
	return true;
};

MD2AccountFunc.validate_form = function() {
	
	fieldErrors = 0;
	
	// Username
	if($("#edit-name").val() == ""){
		fieldErrors = fieldErrors + 1;
		setReport('error', 'Username', 'Username cannot be left blank.');
        hideReport();
        $(document).scrollTo($("#edit-name").eq(0),1000,{offset:-50});
        return false;
	}
	
	// Email 
	if($("#edit-mail").val() == ""){
		fieldErrors = fieldErrors + 1;
		setReport('error', 'E-mail Address', 'E-mail address cannot be left blank.');
        hideReport();
        $(document).scrollTo($("#edit-mail").eq(0),1000,{offset:-50});
        return false;
	}
	
	// Email Validity
	if(!isValidEmailAddress($("#edit-mail").val())){
		fieldErrors = fieldErrors + 1;
		setReport('error', 'E-mail Address', 'Please enter a valid email address.');
        hideReport();
        $(document).scrollTo($("#edit-mail").eq(0),1000,{offset:-50});
        return false;
	}
	
	// Passwords
	if($("#edit-pass-pass1").val() != "" || $("#edit-pass-pass1").val() != ""){
		
		if($("#edit-pass-pass1").val() == ""){
			fieldErrors = fieldErrors + 1;
			setReport('error', 'Password', 'Password cannot be left blank.');
	        hideReport();
	        $(document).scrollTo($("#edit-pass-pass1").eq(0),1000,{offset:-50});
	        return false;
		}
	
		if($("#edit-pass-pass2").val() == ""){
			fieldErrors = fieldErrors + 1;
			setReport('error', 'Password', 'Please confirm your password.');
	        hideReport();
	        $(document).scrollTo($("#edit-pass-pass2").eq(0),1000,{offset:-50});
	        return false;
		}
		
		// Match
		if($("#edit-pass-pass1").val() != $("#edit-pass-pass2").val()){
			fieldErrors = fieldErrors + 1;
			setReport('error', 'Password', 'Your passwords do not match.');
	        hideReport();
	        $(document).scrollTo($("#edit-pass-pass2").eq(0),1000,{offset:-50});
	        return false;
		}
		
	}
	
	// Submit Form
	if(fieldErrors == 0){
		md2_acccount_submit_form();
	} 

	return true;
};

MD2AccountFunc.finish = function() {
	  
  //console.log("Redirect Here:");
  setReport('success', 'Account Saved Successfully', 'Your account was saved successfully.');
  hideReport();
  //console.log('FIRST: '+first);
  //console.log(window.history.getState());
    
  /*
  // Redirect artists to the profile page
  else {
	  redirectTo = "/#!"+first.replace("/upload-song","");
  }
  
  console.log(redirectTo);  
  window.history.pushState('', '', redirectTo);
  $(window).trigger('hashchange');
  $("#report").fadeOut(); $("#report-overlay").fadeOut();
  //window.location.href = '' + first + '';
  */
	  
}

//Submit the form
function md2_acccount_submit_form() {
  $(MD2AccountFunc.form_id).submit();
  /*{success: function(ajaxResponse){
    console.log('Ajax Response:');
	console.log(ajaxResponse);
  }}*/

  var html = '<br/><p>Your account information is being saved. Thank you for your patience!</p>\
  <img style=\'margin:30px;\' src=\'/sites/all/themes/md_fusion/images/ajax-loader.gif\' />';
  setReport('success', 'Saving...', html);
  md2_account_save_before_exit();

}


//Having a hard time tying to the submit event so what I'll do is just watch for the save button status
//I'm just watching the value of the save button. If it's not loading, then it's done. Dirty? :D.
function md2_account_save_before_exit() {
  setTimeout(function() {
		
    var done = 1;
    $('.form-submit:visible').each(function(){
      if ($(this).val() == 'Loading...') {
        done = 0; return;
      }
    });

    if (done == 1) { 
      MD2AccountFunc.finish(); 
    }
    else { 
   	  md2_account_save_before_exit(); 
    }
 
  }, 5000); 
}

//Docready, init if loading the upload form page only
$(document).ready(function() {
	
	// URL / First Variable
	stateObject = $.bbq.getState();		// get entire state
	for (first in stateObject) break;	// get first
	
	// -- Initiate the form
	if(strstr(first.toLowerCase(),"my-account")){
		songForm = MD2AccountFunc.init();
	}
	
	// << Begin Events, these never need to be recreated, removed, or anything, bcuz they use $(document).on 
	// bcuz they work forever even on elements that don't exist yet...
	$(document)
	// -- Click event for submission/saving
	.on("click",".dashboard-form-wrapper #user-profile-form .form-submit",function(e) {
		
		e.preventDefault();
		console.log('clicked save account');
		MD2AccountFunc.validate_form();
		
	});
	
});


//Cleanup and re-init if navigating to the upload form page only
$(window).bind( 'hashchange', function(e) {
	
	// -- Reinititate the account form
	//console.log('Song Upload/Edit Form FIRST: ' + first);
	if(strstr(first.toLowerCase(),"my-account")){
		// A little extra help for js garbage cleenup
		if(typeof(accountForm) != 'undefined'){ delete accountForm; }
		accountForm = MD2AccountFunc.init();
	}	
});
