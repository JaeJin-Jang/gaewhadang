$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 6200) {
        $('.right').addClass('right_down2');
    } else {
        $('.right').removeClass('right_down2');
    }
});

