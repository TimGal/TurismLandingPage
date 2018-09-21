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
		nav: true,
		dots: false,
		navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
		items: 1
	});

	$('.carousel').carousel();
})(jQuery);

$("document").ready(function() {
	$('form[name="polls"]').on('submit', e => {
		var form = $(e.target);

		var answers = $('input.polls:checked');
		console.log(answers);
	})
});
