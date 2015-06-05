(function($){

	$(document).ready(function(){
		//Vars
		var $nav = $('.nav li, .nav-footer li'),
			$navHolder = $('.nav'),
			$btnNav = $('.btn-nav a'),
			$dropdown = $('.nav ul ul, .nav-footer ul ul'),
			$inputs = $('input[title], textarea');


		//Dropdown

		$dropdown.hide();
		mobile();
		function mobile () {
			if ( $(window).width() > 625 ) {
				$('.news-slider .slides').carouFredSel({
					scroll: {
						fx: 'fade',
						pauseOnHover: true
					},

				});

				$nav.on('mouseenter', function() {
					var $this = $(this);

					$this.find($dropdown).stop(true, true).fadeIn();
				}).on('mouseleave', function() {
					var $this = $(this);

					$this.find($dropdown).stop(true, true).fadeOut();
				});
			} else { 
				//Sliders
				$('.news-slider .slides').carouFredSel({
					auto: 0,
					scroll: {
						fx: 'directscroll',
						duration: 10000,
						pauseOnHover: true,
						easing: 'linear'
					}


				});

				$nav.on('click', 'a', function(e) {
					var $this = $(this),
						$parent = $this.parent();

					$parent.find($dropdown).stop(true, true).slideToggle();

					$parent.toggleClass('active');
if($parent.hasClass("menu-item-has-children")){
					e.preventDefault();
}

				});
			}
		}

		$btnNav.on('click', function(e) {
			$navHolder.stop(true, true).slideToggle();	

			e.preventDefault();
							
		});

		$('.btn-nav-footer').on('click', function(e) {
			$('.nav-footer').stop(true, true).slideToggle();	

			e.preventDefault();
							
		});

		window.onresize = function() {
		  if ( $(window).width() > 768 ) {
		  	$navHolder.show();
		  }
		};


		//Sliders

		$('.slider .slides').carouFredSel({
			pagination: { 
				container: '.paging',
				anchorBuilder: true
			},
			scroll: {
				pauseOnHover: true
			},
			next: '.next',
			prev: '.prev'
		});

		$('.slider-gallery .slides').carouFredSel({
			pagination: { 
				container: '.pagination',
				anchorBuilder: true
			},
			scroll: {
				pauseOnHover: true
			}
		});

		//To Top
		$('.btn-go-top').on('click', function(e){
			$('html, body').animate({scrollTop: 0}, 700);

			e.preventDefault();
		});

		//Blink Fields
		$inputs.on('focusin', function(){

				if (this.value == this.title) {
					this.value = '';
				}

			}).on('focusout', function(){

				if (!this.value) {
					this.value = this.title;
				}

			});


	});
	

})(jQuery)