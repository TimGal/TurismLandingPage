var wrapper = $(".file_upload"),
	inp = wrapper.find("input"),
	btn = wrapper.find("button"),
	lbl = wrapper.find("div");
btn.focus(function () {
	inp.focus()
});
// Crutches for the :focus style:
inp.focus(function () {
	wrapper.addClass("focus");
}).blur(function () {
	wrapper.removeClass("focus");
});

btn.add(lbl).click(function () {
	inp.click();
});

btn.focus(function () {
	wrapper.addClass("focus");
}).blur(function () {
	wrapper.removeClass("focus");
});

var file_api = (window.File && window.FileReader && window.FileList && window.Blob) ? true : false;

inp.change(function () {
	var file_name = [];
	if (file_api && inp[0].files[0]) {
		var numFiles = inp.files.lenght;
		for (var i = 0, numFiles = files.length; i < numFiles; i++) {
			file_name.push(inp.files[i].name);
		}
	}
 else
	file_name = inp.val().replace("C:\\fakepath\\", '');

if (!file_name.length)
	return;

if (lbl.is(":visible")) {
	lbl.text(file_name);
	btn.text("Загрузить");
} else
	btn.text(file_name);
}).change();

$(window).resize(function () {
	$(".file_upload input").triggerHandler("change");
});
