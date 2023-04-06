$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 50) {
        $('.right').addClass('right_down');
    } else {
        $('.right').removeClass('right_down');
    }
});

