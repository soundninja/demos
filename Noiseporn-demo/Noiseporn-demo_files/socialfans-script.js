(function($) {
    $.fn.animateNumbers = function(number, duration, ease, stop) {
        return this.each(function() {
            var $this = jQuery(this);
            var start = parseInt($this.text().replace(/,/g, ""));

            if (isNaN(start))
                start = 0;

            jQuery({value: start}).animate({value: number}, {
                duration: duration == undefined ? 1000 : duration,
                easing: ease == undefined ? "swing" : ease,
                step: function() {
                    $this.text(Math.floor(this.value));
                },
                complete: function() {
                    $this.text(stop);
                }
            });
        });
    };
})(jQuery);

jQuery(function($) {

    var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (screenWidth <= 320)
    {
        jQuery('.sf-front').each(function() {

            var main_link = jQuery(this).find('a');
            var effect_link = jQuery(this).siblings('.sf-mask').find('a');

            main_link.attr('href', effect_link.attr('href'));

        });
    }

    handleAnimateNumbers();

    handleLazyLoad();

});

function handleAnimateNumbers() {

    var containerEl = jQuery('.sf-widget-holder');

    containerEl.each(function() {

        if (jQuery(this).data('animate_numbers')) {

            jQuery(this).find('.sf-block').each(function() {

                var count = jQuery(this).data('count');
                var stop = jQuery(this).data('count_formated');
                var countEl = jQuery(this).find('.sf-front').find('span.sf-social-count');

                animateNumbers(countEl, count, stop, containerEl.data('duration'));

            });

        }

    });
}

function handleLazyLoad() {


    jQuery('.sf-widget-holder').each(function() {

        var containerEl = jQuery(this);
        var duration = jQuery(this).data('duration');
        var is_lazy = jQuery(this).data('is_lazy');
        var animate_numbers = jQuery(this).data('animate_numbers');

        if (duration || duration != undefined)
            duration = duration * 1000;

        if (is_lazy) {

            var lazyEl = containerEl.find('.sf-widget-lazy');

            handleLazyScroll(containerEl);

            jQuery.ajax({
                url: SfcounterObject.ajaxurl,
                data: {action: 'sfcounter'},
                type: 'POST',
                dataType: 'json',
                success: function(response) {
                    lazyEl.prev('.sf-loader-holder').remove();
                    lazyEl.removeClass('sf-widget-lazy');

                    lazyEl.find('.sf-block').each(function() {

                        var socialName = jQuery(this).data('social');
                        var countEl = jQuery(this).find('.sf-front').find('span.sf-social-count');

                        var count = response.social[socialName]['count'];
                        var stop = response.social[socialName]['count_formated'];

                        if (animate_numbers) {
                            animateNumbers(countEl, count, stop, duration);
                        } else {
                            countEl.html(stop);
                        }
                    });
                },
                error: function() {
                    lazyEl.prev('.sf-loader-holder').remove();
										lazyEl.removeClass('sf-widget-lazy');
                }
            });
        }

    });
}

function animateNumbers(el, count, stop, max_duration) {

    var duration = 0;

    if (!count || isNaN(count))
        count = 0;
    else
        duration = ((count / 1000) * 50);

    if (duration > max_duration) {
        duration = max_duration;
    }

    el.animateNumbers(count, duration, 'swing', stop);

}

function handleLazyScroll(el) {

    jQuery(window).scroll(function() {
        updateMargin(el);
    });
}

function updateMargin(el) {

    var docTop = jQuery(window).scrollTop();
    var elmTop = el.offset().top;
    var elmBot = el.height();

    var margin = 50;

    if (docTop > elmTop) {
        margin = (docTop - elmTop + 50);

        if ((elmTop + margin - 20) > elmBot) {
            margin = (elmBot - 20 - 250);
        }
    }
    
    el.find('.sf-loader-holder').css('margin-top', margin);

}