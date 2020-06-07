$(function(){

    $("#slidetoggle_button").on("click", function() {
        $("#slidetoggle_menu").slideToggle(); 
        $("#slidetoggle_menu").toggleClass("active"); 
    });

    $("#totop").hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $("#totop").fadeIn(300);
        } else {
            $("#totop").fadeOut();
        }
    });
    $("#totop").click(function(){
        $('body, html').animate({ scrollTop: 0 }, 500);
    });


});