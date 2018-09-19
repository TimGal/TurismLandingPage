"use strict";

$(() => {
    $('.file_upload > button.upload')
        .on('click', e => {
            $('input[type="file"]', e.target.parentElement).click()
        });

    $('input[type="file"]').on('change', e => {
        console.log($(e.target).prop("files"))
    })
})
