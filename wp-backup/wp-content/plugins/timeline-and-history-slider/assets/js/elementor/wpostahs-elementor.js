( function($) {

	'use strict';

	jQuery(window).on('elementor/frontend/init', function() {

		/* Shortcode Element */
		elementorFrontend.hooks.addAction( 'frontend/element_ready/shortcode.default', function() {
			wpostahs_timeline_slider_init();
		});

		/* Text Editor Element */
		elementorFrontend.hooks.addAction( 'frontend/element_ready/text-editor.default', function() {
			wpostahs_timeline_slider_init();
		});

		/* Tabs Element */
		elementorFrontend.hooks.addAction( 'frontend/element_ready/tabs.default', function( $scope ) {

			/* Tweak for filter */
			$scope.find('.wpostahs-slider-nav').each(function( index ) {

				var slider_nav_id   	= jQuery(this).attr( 'id' );
				var wphtsp_slider_id 	= jQuery(this).attr( 'data-slider-nav-for' );

				$('.'+wphtsp_slider_id).css({'visibility': 'hidden', 'opacity': 0});
				$('#'+slider_nav_id).css({'visibility': 'hidden', 'opacity': 0});

				wpostahs_timeline_slider_init();

				setTimeout(function() {

					/* Tweak for slick slider */
					if( typeof(wphtsp_slider_id) !== 'undefined' && wphtsp_slider_id != '' ) {
						$('.'+wphtsp_slider_id).slick( 'setPosition' );
						$('.'+wphtsp_slider_id).css({'visibility': 'visible', 'opacity': 1});
					}

					if( typeof(slider_nav_id) !== 'undefined' && slider_nav_id != '' ) {
						$('#'+slider_nav_id).slick( 'setPosition' );
						$('#'+slider_nav_id).css({'visibility': 'visible', 'opacity': 1});
					}

				}, 300);
			});
		});

		/* Accordion Element */
		elementorFrontend.hooks.addAction( 'frontend/element_ready/accordion.default', function( $scope ) {

			/* Tweak for filter */
			$scope.find('.wpostahs-slider-nav').each(function( index ) {

				var slider_nav_id   	= jQuery(this).attr( 'id' );
				var wphtsp_slider_id 	= jQuery(this).attr( 'data-slider-nav-for' );

				$('.'+wphtsp_slider_id).css({'visibility': 'hidden', 'opacity': 0});
				$('#'+slider_nav_id).css({'visibility': 'hidden', 'opacity': 0});

				wpostahs_timeline_slider_init();

				setTimeout(function() {

					/* Tweak for slick slider */
					if( typeof(wphtsp_slider_id) !== 'undefined' && wphtsp_slider_id != '' ) {
						$('.'+wphtsp_slider_id).slick( 'setPosition' );
						$('.'+wphtsp_slider_id).css({'visibility': 'visible', 'opacity': 1});
					}

					if( typeof(slider_nav_id) !== 'undefined' && slider_nav_id != '' ) {
						$('#'+slider_nav_id).slick( 'setPosition' );
						$('#'+slider_nav_id).css({'visibility': 'visible', 'opacity': 1});
					}

				}, 300);
			});
		});

		/* Toggle Element */
		elementorFrontend.hooks.addAction( 'frontend/element_ready/toggle.default', function( $scope ) {

			/* Tweak for filter */
			$scope.find('.wpostahs-slider-nav').each(function( index ) {

				var slider_nav_id   	= jQuery(this).attr( 'id' );
				var wphtsp_slider_id 	= jQuery(this).attr( 'data-slider-nav-for' );

				$('.'+wphtsp_slider_id).css({'visibility': 'hidden', 'opacity': 0});
				$('#'+slider_nav_id).css({'visibility': 'hidden', 'opacity': 0});

				wpostahs_timeline_slider_init();

				setTimeout(function() {

					/* Tweak for slick slider */
					if( typeof(wphtsp_slider_id) !== 'undefined' && wphtsp_slider_id != '' ) {
						$('.'+wphtsp_slider_id).slick( 'setPosition' );
						$('.'+wphtsp_slider_id).css({'visibility': 'visible', 'opacity': 1});
					}

					if( typeof(slider_nav_id) !== 'undefined' && slider_nav_id != '' ) {
						$('#'+slider_nav_id).slick( 'setPosition' );
						$('#'+slider_nav_id).css({'visibility': 'visible', 'opacity': 1});
					}

				}, 300);
			});
		});
	});
})(jQuery);