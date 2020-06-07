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

    $(".course img").click(function() {
        $("#graydisplay").html($(this).prop('outerHTML'));
        $("#graydisplay").fadeIn(200);
        $("#totop").hide();
    });
    $("#graydisplay, #graydisplay img").click(function() {
        $("#graydisplay").fadeOut(200);
        $("#totop").show();
    });
});