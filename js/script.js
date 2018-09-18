(function ($) {
	"use strict";
	$(".carousel-inner .item:first-child").addClass("active");

	$('.testimonials').owlCarousel({
		loop: true,
		margin: 0,
		responsiveClass: true,
		autoplay: false,
		autoplayTimeout: 8000,
		smartSpeed: 1000,
		//      navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right" ></i>'],
		items: 1
	});

	$('.carousel').carousel();
})(jQuery);

