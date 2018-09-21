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
		e.preventDefault();
		var answers = $('input.polls:checked');
		$.ajax({
		  url: "sendOrderForm.php",
		  type: "POST",
		  data: $('#polls').serialize(),
		  success: function(response) {
			//обработка успешной отправки
		  },
		  error: function(response) {
			//обработка ошибок при отправке
		 }
		});
		console.log(answers);
		$('.progress').css('display','flex');
	});
});
