(function($){

  "use strict";

  $(function() {

        $('[data-masonry]').each(function(){

            var grid = $(this);

            grid.masonry({
                itemSelector: 'article',
                percentPosition: true,
                transitionDuration: 0
            });
        });

        var $content = $('#bh-content');

        $(document.body).on('post-load', function (e, obj) {

            setTimeout(function() {

                UIkit.init($content);

                $content.masonry('appended', obj.html);
                UIkit.$win.trigger('resize');

                // fix weird chrome bug
                setTimeout(function(){
                  $content.masonry('reloadItems').masonry('layout').masonry('resizeContainer');
                }, 1000);
            }, 100);
        });

        UIkit.$win.on('load', function() {
            setTimeout(function(){
                $('#bh-content').masonry('reloadItems').masonry('layout');
            }, 200);
        });


      $('.uk-offcanvas-bar .uk-nav-side').removeClass('uk-nav-side').addClass('uk-nav-offcanvas');

      /*
       * Search Focus
       */

      $('.bh-search-toggle').on('click', function(){
          setTimeout(function(){
              $('.bh-search-input').focus();
          }, 600);
      });

      /*
       * Search
       */

      var body   = $('body'),
          search = $('.bh-search');

      $('.bh-search-toggle').on('click', function(e){
          e.preventDefault();
          search.css( "z-index", "1" );
          body.addClass('bh-search-open');

      });

      $('.bh-search-close').on('click', function(e){
          e.preventDefault();
          body.removeClass('bh-search-open');

          $(".bh-search-background circle").one(UIkit.support.transition.end, function() {
              search.css( "z-index", "-1" );
          });

      });

      /*
       * Counter
       */

      if(window.countUp) {

          $('[data-count-up]').each(function(){

              var ele       = $(this),
                  options   = $.UIkit.Utils.options(ele.attr('data-count-up')) || {},
                  counter   = new countUp(this, options.start || 0, options.end || 100, 0, options.duration || 1.5, options);

              ele.on('inview.uk.scrollspy', function(){
                  counter.start();
              });

              var scrollspy = $.UIkit.scrollspy(ele);
          });
      }

  });


})(jQuery);
