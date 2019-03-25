$('document').ready(function() {
    console.log('Document ready');



    $('img').click(function(){
        var newImg = $(this).attr('alt-img-src');

        $(this).attr('src',newImg);
    })

});