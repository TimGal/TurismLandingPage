$("a[name=scroll]").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор блока с атрибута href
		var id = $(this).attr('href');
		console.log(id);
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		var top = $(id).offset().top;
		console.log(top);
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});
