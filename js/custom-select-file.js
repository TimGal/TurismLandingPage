$(() => {
    $('.file_upload > button.upload')
        .on('click', e => {
            $('.file_upload > input[type="file"]').click();
        })
})
