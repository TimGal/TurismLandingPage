var testimonials_carousel = null;

(function ($) {
	"use strict";
	$(".carousel-inner .item:first-child").addClass("active");

	testimonials_carousel = $('.testimonials').owlCarousel({
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

$("document").ready(function () {

	$.ajax({
		url: "getPollResult.php",
		type: "POST",
		success: function (response) {
			response = JSON.parse(response);

			$.each(response, (name, group) => {
				var sum = 0;
				for (let item of group) {
					sum += item.counter;
				}
				for (let item of group) {
					item.percentage = Math.floor(item.counter * 100 / sum);
					let pollContainer = $('input[type="radio"][value="' + item.id + '"][name="' + name + '"]').parent();
					$('.progress > span', pollContainer).html(item.percentage + '%');
					$('.progress > progress', pollContainer).val(item.percentage);

				}
				console.log(group);
				$('.progress').css('display', 'flex');
			});
		},
		error: function (response) {
			//обработка ошибок при отправке
		}
	});

	$('form[name="polls"]').on('submit', e => {
		e.preventDefault();
		var answers = $('input.polls:checked');
		$.ajax({
			url: "sendOrderForm.php",
			type: "POST",
			data: $('form[name="polls"]').serialize(),
			success: function (response) {
				response = JSON.parse(response);

				$.each(response, (name, group) => {
					var sum = 0;
					for (let item of group) {
						sum += item.counter;
					}
					for (let item of group) {
						item.percentage = Math.floor(item.counter * 100 / sum);
						let pollContainer = $('input[type="radio"][value="' + item.id + '"][name="' + name + '"]').parent();
						$('.progress > span', pollContainer).html(item.percentage + '%');
						$('.progress > progress', pollContainer).val(item.percentage);

					}
					console.log(group);
				});
			},
			error: function (response) {
				//обработка ошибок при отправке
			}
		});
		console.log(answers);
		$('.progress').css('display', 'flex');
	});

	$('form[name="anketa"]').on('submit', e => {
		e.preventDefault();
		var answers = $('input.polls:checked');
		$.ajax({
			url: "anketa.php",
			type: "POST",
			data: $('form[name="anketa"]').serialize(),
			success: function (response) {
				document.body.appendChild("");
			},
			error: function (response) {
				//обработка ошибок при отправке
			}
		});

		$('.progress').css('display', 'flex');
	});
});
