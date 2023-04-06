$(function () {
    $('.page4_d2 > ifrmae').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});

$(document).ready(function () {
    $('.page4_mapbt .mapbt_2').click(function () {
        $('.page4_d2 .mapchange_2').css({
            "display": "block",
        });
        $('.page4_d2 ifrmae').siblings('button').css({
            "display": "none",
        });
    });
});  