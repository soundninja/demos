var smg = smg || {};
smg['pi'] = smg['pi'] || {};

(function($, pi){

    pi.sponsored_content = {
        init: function() {
            this.init_interrupter();            
        },

        init_interrupter: function() {
            var $interrupters = $('.wp-pi-sponsored-content-interrupter');

            $interrupters.each(function(){
                var $this = $(this);

                // Only do carousel if there are more than one
                if($this.find('li').length > 1) {
                    var interrupterOptions = {
                        scroll: 1
                    };

                    // Auto scroll hack
                    if(sm_interrupter_settings && sm_interrupter_settings['auto_scroll']) {
                        var fnHandle;
                        interrupterOptions['auto'] = 5;
                        interrupterOptions['itemLastOutCallback'] = function(carousel, el, i, dir) {
                            if(dir == "next" && i == carousel.list.children.length) {
                                fnHandle = setTimeout(
                                    function(){ carousel.scroll(1); }, 
                                    interrupterOptions['auto'] * 1000
                                );
                            } else if(fnHandle) {
                                clearTimeout(fnHandle);
                            }
                        };
                    }

                    $this.jcarousel(interrupterOptions);
                }
            });

            if(smg.isTouch) {
                this.init_touch();
            }
        },

        init_touch: function() {
            var $interrupters = $('.wp-pi-sponsored-content-interrupter');

            $interrupters.each(function() {
                var $this = $(this);

                if($this.find('li').length > 1) {
                    // Only need it if it's a carousel
                    $this.find('li').swipe({
                        excludedElements: "button, input, select, textarea, .noSwipe",
                        triggerOnTouchEnd : true,
                        swipeRight : function(event, phase, direction, distance, fingers){
                            $this.jcarousel('prev');
                        },
                        swipeLeft : function(event, phase, direction, distance, fingers){
                            $this.jcarousel('next');
                        }
                    });
                }
            });
        }
    };

    $(document).ready(function(){ pi.sponsored_content.init(); });

})(jQuery, smg.pi);