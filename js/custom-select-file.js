"use strict";

$(() => {
    $('.file_upload > button.upload')
        .on('click', e => {
            $('input[type="file"]', e.target.parentElement).click()
        });

    $('input[type="file"]').on('change', e => {
        var fileInput = $(e.target);
        var filesList = $('ul.file-contain', e.target.parentElement)
        console.log(fileInput.prop('files').length)
        if(fileInput.prop('files').length > 0){
            filesList.html('');
        }
        for(let file of fileInput.prop('files')){
            console.log(file)
            filesList.append('<li>'+file.name+'</li>')
        }
    })
})
