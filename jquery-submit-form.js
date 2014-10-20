/*
 *  jQuery plugin to submit form on change of form element
 */

// Create closure.
(function( $ ) {
	// Create jQuery plugin
	$.fn.submitForm = function() {
		"use strict";

		// Loop through every element and return it for chainibility e.g. .showHidePassword().slideToggle()
		return this.each(function() {

			// Store element as jQuery object
			var $element = $(this);

			$element.on("change", function() {
				$(this).parents("form").trigger("submit");
			});

		});

	};

	// Get all elements with attribute "data-toggle-password"
	$( '[data-submit-form="true"]' ).submitForm();

})( jQuery );