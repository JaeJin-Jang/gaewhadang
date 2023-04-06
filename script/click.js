$( document ).ready(function() {
    $('.page1_choice button').click(function() {
        $(this).css({
            "background-color":"black" , 
            "color":"white",
            "font-weight":"bold", 
            "font-size":"15px"});
        $(this).siblings('button').css({
            "background-color":"#f6f6f6" , 
            "color":"black",
            "font-weight":"normal", 
            "font-size":"14px"
        });  
    });
});