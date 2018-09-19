"use strict";

$(() => {
    $('.file_upload > button.upload')
        .on('click', e => {
            $('input[type="file"]', e.target.parentElement).click()
        });

    $('input[type="file"]').on('change', e => {
        var fileInput = $(e.target);
        var filesList = $('ul.file-contain', e.target.parentElement)
        console.log(fileInput.prop('files').length);
        if(fileInput.prop('files').length > 0){
            filesList.html('');
        }
        for(let file of fileInput.prop('files')){
            console.log(file);
		  	var maxLength = 16;
		  	var file_length = file.name.lenght;
		  	var fileName = file.name;
		  	if (file_length < maxLength) {
			} else {
			  var fileLeft = file.name.substring(0, 8);
			  var fileRight = file.name.substring(file.name.length - 8, file.name.length)
			  fileName = fileLeft +  "..." + fileRight;
			}
            filesList.append('<li>'+fileName+'</li>');
        }
    })
})
