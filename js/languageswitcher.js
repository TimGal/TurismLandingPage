$("document").ready(function() {


	var LANGUAGE = false;
	$.redrawLanguage = function (lang) {
  $.ajax({
    url : 'languages/' + lang + '.json', //тянем файл с языком
    dataType : 'json',
    success : function (response) {
      LANGUAGE = response;
      $('body').find("[lng]").each(function () {
        var lng = LANGUAGE[ $(this).attr('lng') ];
        var tag = $(this)[0].tagName.toLowerCase();

        switch (tag) {
          case "input":
          $(this).val(lng);
          break;
          default:
          $(this).html(lng);
          break;
        }
      });


    }
  });
}

$.getLanguage = function (key) {
  if (typeof(LANGUAGE[key]) != 'undefined') {
    return LANGUAGE[key];
  }
  return key;
}

//test
$('#ru').on('click', function(e){
  e.preventDefault();
  var
    $this = $(this);
    $.redrawLanguage('rus');
		$('#ru').addClass("active");
		$('#en').removeClass("active");
});

$('#en').on('click', function(e){
  e.preventDefault();
  var
    $this = $(this);
    $.redrawLanguage('eng');
		$('#en').addClass("active");
		$('#ru').removeClass("active");
});


});
