(function($){$(document).ready(function(){$(document).on('click','a.gofollow',function(){var tracker=$(this).attr("data-track");var debug=$(this).attr("data-debug");$.post(click_object.ajax_url,{'action':'adrotate_click','track':tracker});if(debug==1)alert('Tracker: '+ tracker+'\nclick_object.ajax_url: '+click_object.ajax_url);});});}(jQuery));