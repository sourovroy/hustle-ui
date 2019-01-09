import jQuery from 'jquery';
import '../../library/dist/js/hustle-ui';

( function( $ ) {

	$( 'body' ).ready( function() {

		// Load pop-up
		$( '.hustle-popup' ).each( function() {

			const popup = $( this );
			const delay = $( this ).data( 'delay' );

			HUI.popupLoad( popup, delay );

		});

		// Load slide-in
		$( '.hustle-slidein' ).each( function() {

			const slidein = $( this );
			const delay = $( this ).data( 'delay' );

			HUI.slideinLoad( slidein, delay );

		});

		// Load inline
		$( '.hustle-inline' ).each( function() {
			HUI.inlineLoad( this );
		});

		// Close module
		$( '.hustle-button-close' ).each( function() {

			const close = $( this );

			HUI.popupClose( close );
			HUI.slideinClose( close );

		});

		// Submit button
		HUI.buttonSubmit( 800 );

		// GDPR checkbox
		HUI.checkboxGdpr( 800 );

		// Filled input
		HUI.inputFilled();

		// Required input
		HUI.inputRequired( 800 );

	});

}( jQuery ) );
