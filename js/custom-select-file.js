"use strict";

$(() => {
    $('.file_upload > button.upload')
        .on('click', e => {
            $('input[type="file"]',e.target.parentElement).click()
        })
})

