var $ = jQuery.noConflict();
$(function($){
  $('.sharebox').sharrre({
    share: {
      twitter: true,
      stumbleupon:true,
      facebook: true,
//*   linkedin:true,
      pinterest: true,
      googlePlus: true
    },
    template: Drupal.settings.SSC.template,
    enableHover: false,
    enableTracking: Drupal.settings.SSC.ssc_ga_tracking,
    total: parseInt(Drupal.settings.SSC.ssc_min_to_show),
    urlCurl: Drupal.settings.SSC.share,
    render: function(api, options){
      $(api.element).on('click', '.twitter', function() {
        api.openPopup('twitter');
      });
      $(api.element).on('click', '.facebook', function() {
        api.openPopup('facebook');
      });
      $(api.element).on('click', '.googleplus', function() {
        api.openPopup('googlePlus');
      });
//*      $(api.element).on('click', '.linkedin', function() {
//*        api.openPopup('linkedin');
//*      });
      $(api.element).on('click', '.pinterest', function() {
        api.openPopup('pinterest');
      });
      $(api.element).on('click', '.stumbleupon', function() {
        api.openPopup('stumbleupon');
      });
    }
  });
//*  $(".sharebox").on('click', '.switch', function() {
//*      $(this).hide();
//*      $(this).siblings('.secondary').css('display', 'inline-block');
//*      $(this).siblings('.secondary').children('.switch2').show();
//*  }); 
//*  $(".sharebox").on('click', '.switch2', function() {
//*      $(this).parent('.secondary').siblings('.switch').show();
//*      $(this).parent('.secondary').hide();         
//*  }); 
});
