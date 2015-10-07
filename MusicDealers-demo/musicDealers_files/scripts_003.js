/**
 * Song Form
 * - KJS
 */

var MD2SongFunc = {};
MD2SongFunc.form_id 		= '#md2-song-upload-form';
MD2SongFunc.validator 		= {};
MD2SongFunc.options 		= {};

// Init Function
MD2SongFunc.init = function() {
  console.log('initiate the upload form js');
  $('.progress').hide();
  MD2SongFunc.form_theme_changes();
  MD2SongFunc.init_validator();
  MD2SongFunc.init_upload_form();
  MD2SongFunc.init_clone_fields();
  MD2SongFunc.init_sortables();
  MD2SongFunc.init_autocompletes();
};

// Initiate Validation
MD2SongFunc.init_validator = function(){

  // Initiate the Validator
  MD2SongFunc.validator = $(MD2SongFunc.form_id).validate();

  // << Extra validation rules...
  // [This is a hack!] Because of this multistep thing, we can't explicity require all the fields needed to be required
  // Using the class name "required", we are fooling the users via the validate js that the fields are requried
  $('.dashboard-form-wrapper form .required').each(function(){
    var label = $(this).parent().find('label');
    var str = label.html();
    if(str !== null){
	  if (str.search('form-required') < 0) {
        label.prepend('<span title="This field is required." class="form-required">*</span>');
      }
    }
  });

};

// -- Sortables
MD2SongFunc.init_sortables = function(){
  // -- Sounds Like / Similar To Sortable
  if(typeof(similarSort) != 'undefined'){ delete similarSort; }
  similarSort = $('.similar-to-sortable').sortable({
    cursor: "move",
    /*helper: "clone",*/
    placeholder: "ui-state-highlight",
    handle: "label",
    update: function(event, ui) {
      var cnt = 0;
      $('.similar-to-sortable .form-text').each(function() {
        var str = $(this).attr('name');
        //console.log(str);
        if (str != undefined) {
          str = str.replace(/\[[0-9]*\]/, '[' + cnt + ']');
          //console.log("Changed: "+str);
          $(this).attr('name', str);
        }
        cnt++;
      });
    }
  });
};

// << AutoCompletes
MD2SongFunc.init_autocompletes = function(){

	// Similar To...
	if(typeof(similarAutoComp) != 'undefined'){ delete similarAutoComp; }
	similarAutoComp = 	$( ".similar-to-sortable input" ).autocomplete({
							source: '/artist/ajax/similartoautocomplete'
						});

	// Artist / artistnid
	if(typeof(artistAutoComp) != 'undefined'){ delete artistAutoComp; }
	artistAutoComp = 	$( "#edit-group-basic-admin-artist-autocomplete-wrapper input" ).autocomplete({
							source: '/artist/ajax/artistautocomplete'
						});

	/*
	// Song Writer rightsAPI
	if(typeof(songwriterAutoComp) != 'undefined'){ delete songwriterAutoComp; }
	songwriterAutoComp = $( "input.songwriter-name" ).autocomplete({
							 source: function( request, response ) {

								 		 //self = $(this);
								 		 songwriterName = $("input:focus");
								 		 songwriterKeywords = $("input:focus").val();
								 		 parent = $("input:focus").closest('.group-set-border');
										 if(typeof(xhr) != 'undefined'){ xhr.abort(); }
										 xhr = 	 $.ajax({
													 url: "http://api.rightsapi.com/writers.jsonp?keywords="+songwriterKeywords+"&meticulous=false&limit=10&titles=false&api_key=62NW2n+UP4L60Olouh9kfheUFZ7ElwmAEqpcSBvxMss=",
													 dataType: "jsonp",
													 success: function( data ) {
														 response( $.map( data.data.result, function( item ) {
															 //$(".autocomplete-loading").hide();
															 return {
																 label: item.name + ' ['+item.society+'] ['+item.caeipi+']',
																 value: item.name,
																 data: item
															 }
														 }));
														 delete xhr;
													 }
												 });
							 			},
							 search: function( event, ui ) {
								 parent = $("input:focus").closest('.group-set-border');
								 parent.children('.verified-messages').show();
								 parent.children('.verified-messages').children('.form-item').show();
								 //parent.children('.verified-messages').children('.form-item').children('input').removeClass('hidden').show();
								 parent.children('.verified-messages').children('.form-item').children('.description').html('Searching for your songwriter affiliation...');

							 },
							 response: function( event, ui){

							 },
							 open: function( event, ui ) {
								 parent = $("input:focus").closest('.group-set-border');
								 //open: function(event,ui){
								 var len = $('.ui-autocomplete > li').length;
								 parent.children('.verified-messages').children('.form-item').children('.description').html('' + len + ' matche(s) found.');
							 },
							 close: function( event ){
								 parent = $("input:focus").closest('.group-set-border');
								 //parent.children('.verified-messages').show();
								 parent.children('.verified-messages').children('.form-item').children('.description').html('');
							 },
							 minLength: 2,
							 select: function( event, ui ) {
								 parent = $("input:focus").closest('.group-set-border');
								 parent.children('.form-item').children('input.cae').val(ui.item.data.caeipi).addClass('disabled');

								 parent.children('.form-item').children('select.pro-select').children('option:contains('+ui.item.data.society.toUpperCase()+')').attr("SELECTED","SELECTED");
								 parent.children('.form-item').children('select.pro-select').addClass('disabled');

								 //$('option:contains('+oldValue+')', this).attr("selected", "selected");

								 songwriterName.addClass("disabled");
								 songwriterName.trigger('click');
								 songwriterName.trigger('blur');

								 parent.children('.verified-messages').show();
								 parent.children('.verified-messages').children('.form-item').show();
								 parent.children('.verified-messages').children('.form-item').children('input').removeClass('hidden').show().trigger('click');
								 parent.children('.verified-messages').children('.form-item').children('.description').html('Verified');

							 }
						 });
	*/



};

// -- Initiate File Uploader
MD2SongFunc.init_upload_form = function(){

	$('.progress').hide();
	$('.upload-play-button').remove();

    // -- File upload init. Everytime a new file is selected, it automatically process in the backend and
    // returns back the fid which we assign to our hidden field that the backend saves
    $('#song_form_main_wrapper .form-file').each(function(){
      $(this).fileupload({
        dataType: 'json',
        progressInterval: 10,

        // On submit we want to validate that the file is an mp3, we do this by
        // checking the mime type of the file
        submit: function(e, data) {
            // If the file is not an mp3, we need to cancel the upload and set the error message
            // .type and .value properties are not defined in IE8/9, so check those first
            if (data.files[0].type === undefined && data.files[0].name) {
                // Check for an mp3 extension, return false if not found
                if (data.files[0].name.indexOf('.mp3') === -1) {
                    setReport('error', 'Upload Failed', 'Please upload MP3 tracks only.');
                    hideReport();
                    return false;
                }
            }
            // If the user is on a browser that supports
            else if (data.files[0].type !== 'audio/mp3' && data.files[0].type !== 'audio/mpeg'
                && data.files[0].type !== 'audio/mpeg3' && data.files[0].type !== 'audio/x-mpeg-3') {
                setReport('error', 'Upload Failed', 'Please upload MP3 tracks only.');
                hideReport();
                return false;
            }

            // We also need to check the size of the uploaded file, which must be less than 32MB
            // the .size property is not defined in IE8/9, so those users will only get server side validation
            if (data.files[0].size !== undefined && data.files[0].size >= 32*1024*1024 /* 32MB */) {
                setReport('error', 'Upload Failed', 'Maximum file size of 32MB exceeded.  Please try a smaller file.');
                hideReport();
                return false;
            }
        },

        start: function(e) {
          //console.log('song file upload');
          var id = $(e.target).attr('id');
      	  $("#edit-group-basic-track-track").removeClass("error");

      	  var progressbar = $('#' + id).parent().find('.description .progress');
      	  progressbar.show();
        },

        progressall: function (e, data) {
          var progress = (parseInt(data.loaded / data.total * 100, 10) * 450) / 100;
          var id = $(e.target).attr('id');
          var progressbar = $('#' + id).parent().find('.description .progress');
          //console.log("PROGRESS:"+progress);
          //progressbar.show();
          progress = progress
          progressbar.find('.bar').animate({width: progress}, 4000);
        },

        done: function (e, data) {
          var progressbar = $(e.target).parent().find('.description .progress');
          progressbar.find('.bar').animate({width: 450}, 500);

          setTimeout(function() {
        	  progressbar.hide();
          },1000);

          if (data.result === undefined || data.result.options === undefined || data.result.options.file === undefined) {
            setReport('error', 'Upload failed', 'Upload failed. Please try again.');
            hideReport();
            return false;
          }

          //console.log(file.name);

          var file = data.result.options.file;
          if (file.error !== undefined) {
            setReport('error', 'Upload failed', file.error);
            hideReport();
            return false;
          }

          // Set the field id
          $('#edit-group-basic-song-fid').val(file.fid);
          //console.log(file.filename);
          //console.log(data);

          /*
          // Set the play button
          playbuttonHtml = '<a class="playlist-big-play upload-play-button" href="javascript:void(0);" style="display: block;">'+
                              '<span title="play" class="playicon"></span>'+
                              '<span title="pause" style="" class="pauseicon"></span>'+
                           '</a>';*/

          uploadSt = setTimeout(function(){
        	  //$('#edit-group-basic-track-track').before(playbuttonHtml);
              $('#edit-group-basic-track-fid').val(file.fid);
              setReport('success', 'File Uploaded', 'File uploaded');
              $("input.error").removeClass('error');
              //$("label.edit-group-basic-track-track").html('<label for="edit-group-basic-track-track" class="edit-group-basic-track-track label-default">Upload Successful!</label>');
              //$("input#edit-group-basic-track-track").css('visibility','hidden');
              $("#edit-group-basic-track-track-wrapper label").html(file.filename);
              //$("#edit-group-basic-track-track-wrapper label").html("new_file_name.here");
              hideReport();
              delete uploadSt;
          },2000);
        }
      });
    });
};

// Initiate Multigroups
MD2SongFunc.init_clone_fields = function(){
    $('#songwriters').form_clone();
    $('#publishers').form_clone();
};

// -- One time function call to change some theming and styling
MD2SongFunc.form_theme_changes = function() {

	md2_build_dynamic_menu();

	// -- Add styles to main form title
	$("#md2-song-upload-form legend").addClass('brick museoslab');

	// -- Additional song info label
	$(".additional-desc").siblings('.form-item').children('label').width(400).css('text-align','left');
	$("label[for='edit-group-basic-admin-additional-unique-minimum']").width(24).css('text-align','left');

	// -- Track Title
	$("#edit-group-basic-track-track-wrapper").siblings('h4').css('margin-bottom','0px');

	// << Start editing Forms Style Changes Via Javascript
	// -- Samples Field
	if($("#edit-group-basic-samples-any-samples").val() == '1'){
		$("#edit-group-basic-samples-any-samples-cleared-wrapper").show();
	}

	// -- Custom Exclusion
	if($("#edit-group-basic-admin-additional-additional-exclusions-2253").is(":checked")){
		$("#edit-group-basic-admin-additional-custom-exclusion-wrapper").show();
    }

	// -- Unique Minimum Field
	if($("input.minimum").val() != '' && $("input.minimum").val() != '0'){
		$("input#edit-group-basic-admin-additional-unique-minimum").trigger('click');
		$("input.minimum").removeClass('disabled');
	} else {
		$("input.minimum").addClass('disabled');
	}

	// -- PRO Setup
	// .required class is removed before validation init if there is no affiliation
	$("select.pro-select").each(function(){
		if($(this).val() != '0'){
			//$(this).closest('.group-set-border').children("[id*='cae-number-wrapper']").children('input').addClass('required');
		} else {
			$(this).closest('.group-set-border').children("[id*='cae-number-wrapper']").children('input').removeClass('required');
		}
	});

	// @todo...
	// Mp3 js
	// Minimum js
	// ?????

}

// -- Validte the Form / Frontend
MD2SongFunc.validate_form = function() {
	fieldErrors = 0;
	console.log('Admin Flag: ' + adminFlag);

	// Force submit for admins, this is secured on the server-side... so don't even try
	if(adminFlag == '1'){
		md2_song_submit_form();
	    return true;
	}

	// -- Loop each required field
	$('.form-item .required:visible').each(function(){
    	// Don't validate track this way...
    	if(typeof $(this).attr('id') != 'undefined' && $(this).attr('id') != 'edit-group-basic-track-track'){
    		MD2SongFunc.validator.element('#' + $(this).attr('id'));
    	}
    });

	fieldErrors = MD2SongFunc.validator.numberOfInvalids();

	// -- Special for track field
	if($("div#edit-group-basic-track-track-wrapper label.error").length){
		$("div#edit-group-basic-track-track-wrapper label.error").remove();
		fieldErrors = fieldErrors - 1;
	}

	// -- Special for Samples selections
	if($("select#edit-group-basic-samples-any-samples").val() == '1' && $("select#edit-group-basic-samples-any-samples-cleared").val() == '2'){
		$("select#edit-group-basic-samples-any-samples-cleared").after("<label id='sample-error-label' class='error'>Any samples must be cleared.</label>");
		fieldErrors = parseInt(fieldErrors) + parseInt(1);
	} else {
		$("label#sample-error-label").remove();
	}

	// -- If there are other errors other than track/mp3 then do them first, and scroll to them
	if(fieldErrors > 0){
		$(document).scrollTo($('label.error:visible').eq(0),2000,{offset:-150});
		return false;
	}

    // -- Now do Track FID validation
    fidValue = $("#edit-group-basic-track-fid").val();
	if(fidValue == ''){
    	fieldErrors = fieldErrors + 1;
    	$("#edit-group-basic-track-track").addClass("error");
        setReport('error', 'Upload an MP3', 'Please upload an MP3.');
        hideReport();
        $(document).scrollTo($('input.error:visible').eq(0),2000,{offset:-150});
		return false;
    }

	// Validate Split
	//console.log();
	if(!MD2SongFunc.validate_splits()){
		return false;
	}

    // Submit the form
    md2_song_submit_form();
    return true;
}

// -- Validate Splits on the frontend
MD2SongFunc.validate_splits = function() {

	if(adminFlag == 1){
		return true;
	}

	// Okay this could be more dynamic but this works because its simple...
	var bmiSongWriters 		= 0;
	var bmiPublishers 		= 0;

	var sesacSongWriters 	= 0;
	var sesacPublishers 	= 0;

	var otherSongWriters 	= 0;
	var otherPublishers 	= 0;

	var noAffil			 	= 0;

	// -- Song Writers
	$("#songwriters .pro-select").each(function(e){
		textValue = $(this).children("option:selected").text();
		splitValue = $(this).closest(".group-set-border").children(".form-item").children('input.split').val();

		if(textValue == "BMI") {
			bmiSongWriters = bmiSongWriters + parseFloat(splitValue);
		}
		else if(textValue == "SESAC") {
			sesacSongWriters = sesacSongWriters + parseFloat(splitValue);
		}
		else if(textValue == "No Affiliation") {
			noAffil = 1;
			otherSongWriters = otherSongWriters + parseFloat(splitValue);
		}
		else {
			otherSongWriters = otherSongWriters + parseFloat(splitValue);
		}
	});

	// -- Publishers
	$("#publishers .pro-select").each(function(e){
		textValue = $(this).children("option:selected").text();
		splitValue = $(this).closest(".group-set-border").children(".form-item").children('input.split').val();

		if(textValue == "BMI"){
			bmiPublishers = bmiPublishers + parseFloat(splitValue);
		}
		else if(textValue == "SESAC"){
			sesacPublishers = sesacPublishers + parseFloat(splitValue);
		}
		else{
			otherPublishers = otherPublishers + parseFloat(splitValue);
		}
	});

	totalSongWritersPercentage = bmiSongWriters + sesacSongWriters + otherSongWriters;
	totalPublishersPercentage = bmiPublishers + sesacPublishers + otherPublishers;

	if(totalSongWritersPercentage != 100){
		setReport('error', 'Split Percentages', 'Your song writer\'s percentages do not add up to 100%');
        hideReport();
        $(document).scrollTo($('#songwriters').eq(0),2000,{offset:-150});
        return false;
	}

	if(totalPublishersPercentage != 100){
		setReport('error', 'Split Percentages', 'Your publisher\'s percentages do not add up to 100%');
        hideReport();
        $(document).scrollTo($('#publishers').eq(0),2000,{offset:-150});
        return false;
	}

	// BMI MATCH UP IF THERE IS NO NO AFFILIATION SWS
	if(bmiSongWriters != bmiPublishers && noAffil == 0){
		report = "Your BMI song writer and publisher split percentages must be equal to each other. For example, if you have two BMI songwriters for a total of 50% and one BMI publisher, that publisher must be 50% also.";
		setReport('error', 'Split Percentages', report);
        $(document).scrollTo($('#songwriters').eq(0),2000,{offset:-150});
		return false;
	}

	// SESAC MATCH UP IF THERE IS NO NO AFFILIATION SWS
	if(sesacSongWriters != sesacPublishers && noAffil == 0){
		report = "Your SESAC song writer and publisher split percentages must be equal to each other. For example, if you have two SESAC songwriters for a total of 50% and one SESAC publisher, that publisher must be 50% also.";
		setReport('error', 'Split Percentages', report);
        $(document).scrollTo($('#songwriters').eq(0),2000,{offset:-150});
		return false;
	}

	return true;
}

MD2SongFunc.redirect_upload_song = function() {

  //console.log("Redirect Here:");
  setReport('success', 'Song Saved Successfully', '<b>Your song was saved successfully.</b><br><i>Your changes will be on the site<br>in the next few minutes.</i>');
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
function md2_song_submit_form() {
  $(MD2SongFunc.form_id).submit();

  /*{
  success: function(ajaxResponse){
	  console.log('Ajax Response:');
	  console.log(ajaxResponse);
  }
}*/

  // If the user just finished doing the Biography
  // Add some leeway time to save the content before proceeding to Uploading the song page
  //var num = MD2SongFunc.get_current_step();
  //if (num == 4) {
    var html = '<br/><p>Your song is being saved. Thank you for your patience!</p>\
    <img style=\'margin:30px;\' src=\'/sites/all/themes/md_fusion/images/ajax-loader.gif\' />';
    setReport('success', 'Saving...', html);
    md2_song_save_before_exit();
  //}
}

// Having a hard time tying to the submit event so what I'll do is just watch for the save button status
// I'm just watching the value of the save button. If it's not loading, then it's done. Dirty? :D.
function md2_song_save_before_exit() {
  setTimeout(function() {

    var done = 1;
    $('.form-submit:visible').each(function(){
      if ($(this).val() == 'Loading...') {
        done = 0; return;
      }
    });

    if (done == 1) {
    	MD2SongFunc.redirect_upload_song();
    }
    else {
    	md2_song_save_before_exit();
    }

  }, 5000);
}

function md2_build_dynamic_menu() {
	var menuHtml = '';
	var i = 0;
	$("form#md2-song-upload-form h4").each(function(){
		menuHtml = menuHtml + '<li><a class="rl-dyn-link" data-ref="'+i+'" href="javascript:void(0)">'+$(this).html()+'</a></li>';
		++i;
	});

	$("ul.artists-right-menu li.rl-spacer").before(menuHtml);
}

// Docready, init if loading the upload form page only
$(document).ready(function() {

	// URL / First Variable
	stateObject = $.bbq.getState();		// get entire state
	for (first in stateObject) break;	// get first

	// -- Initiate the songform
	if(strstr(first.toLowerCase(),"upload-song") || strstr(first.toLowerCase(),"edit-song")){
		songForm = MD2SongFunc.init();
	}

	// << Begin Events, these never need to be recreated, removed, or anything, bcuz they use $(document).on
	// bcuz they work forever even on elements that don't exist yet...
	$(document)
	// -- Change event for Samples dropdown
	.on("change","#edit-group-basic-samples-any-samples",function(e){
		if($(this).val() == '1'){
			$("#edit-group-basic-samples-any-samples-cleared-wrapper").show();
		} else {
			$("#edit-group-basic-samples-any-samples-cleared-wrapper").hide();
		}
	})
	// -- Change event for PRO dropdowns
	.on("change","select.pro-select",function(e){

		console.log($(this).val());

		if($(this).val() == '0'){
			// remove required
			$(this).closest('.group-set-border').children("[id*='cae-number-wrapper']").children('input').removeClass('required');
			var label = $(this).closest('.group-set-border').children("[id*='cae-number-wrapper']").find('span').remove();

		} else {
			// add required
			$(this).closest('.group-set-border').children("[id*='cae-number-wrapper']").children('input').addClass('required');
			var label = $(this).closest('.group-set-border').children("[id*='cae-number-wrapper']").find('label');
		    var str = label.html();
		    if(str !== null){
		    	if (str.search('form-required') < 0) {
			      label.prepend('<span title="This field is required." class="form-required">*</span>');
			    }
		    }

		}

		// << Extra validation rules...
		  // [This is a hack!] Because of this multistep thing, we can't explicity require all the fields needed to be required
		  // Using the class name "required", we are fooling the users via the validate js that the fields are requried
		  $('.dashboard-form-wrapper form .required').each(function(){
		    var label = $(this).parent().find('label');
		    var str = label.html();
		    if(str !== null){
		    	if (str.search('form-required') < 0) {
			      label.prepend('<span title="This field is required." class="form-required">*</span>');
			    }
		    }
		  });


		/*
		if($(this).val() != '0'){
			$(this).closest('.group-set-border').children("[id*='cae-number-wrapper']").children('input').addClass('required');
		} else {
			$(this).closest('.group-set-border').children("[id*='cae-number-wrapper']").children('input').removeClass('required');
		}
		*/

	})
	// -- Clicking custom exclusions
	//.on("click","#edit-group-basic-admin-additional-additional-exclusions-2251",function(e){
	.on("click","#edit-group-basic-admin-additional-additional-exclusions-2253",function(e){

		if($(this).is(':checked')){
			$("#edit-group-basic-admin-additional-custom-exclusion-wrapper").show();
		} else {
			$("#edit-group-basic-admin-additional-custom-exclusion-wrapper").hide();
		}

	})
	// -- Clicking Unique Min checkbox
	.on("click","#edit-group-basic-admin-additional-unique-minimum",function(e){

		console.log('click');
		if($(this).is(':checked')){
			$("#edit-group-basic-admin-additional-dollar-minimum").removeClass('disabled');
		} else {
			$("#edit-group-basic-admin-additional-dollar-minimum").addClass('disabled');
		}

	})
	// -- Clicking a disabled field
	.on("focus",".disabled",function(e) {

		e.preventDefault();
		$(this).blur();

	})
	// -- Click event for submission/saving
	.on("click","#song_form_main_wrapper .form-submit",function(e) {

		e.preventDefault();
		console.log('clicked save');
		MD2SongFunc.validate_form();

	})
	// -- Clicking a taxonomy checkboxes
	.on("click",".format-checkboxes .form-checkbox",function(e) {
		console.log('clicked taxonomy');
		var thisParent = $(this).val();
		if($(this).is(':checked')){
			console.log('Checked!');
			// If this item has children show the children
			$("[data-parent='"+thisParent+"']").show();
		} else {
			$("[data-parent='"+thisParent+"']").hide();
			// Uncheck all children
			console.log('Not Checked...');
		}
	})
	// --  Click
	.on("click","a.rl-dyn-link",function(e) {
		var numa = $(this).attr('data-ref');
		console.log(numa);
		$(document).scrollTo($('form#md2-song-upload-form h4').eq(numa),1500,{offset:-95});
	})
	// -- Click clones
	.on("click","#songwriters a.btn-clone",function(e){
        //MD2SongFunc.form_theme_changes(); // for song upload form
		$("select.pro-select").trigger('change');
	})
	// -- Click clones
	.on("click","#publishers a.btn-clone",function(e){
        //MD2SongFunc.form_theme_changes(); // for song upload form
		$("select.pro-select").trigger('change');
	});

});

// Cleanup and re-init if navigating to the upload form page only
$(window).bind( 'hashchange', function(e) {

	// -- Reinititate the song form
	//console.log('Song Upload/Edit Form FIRST: ' + first);
	if(strstr(first.toLowerCase(),"upload-song") || strstr(first.toLowerCase(),"edit-song")){
		// A little extra help for js garbage cleenup
		if(typeof(songForm) != 'undefined'){ delete songForm; }
		songForm = MD2SongFunc.init();
	}
});
