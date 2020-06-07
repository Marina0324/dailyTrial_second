`user strict`

{
    $(function(){
        $("#slidetoggle_button").on("click", function() {
            $("#slidetoggle_menu").slideToggle(); 
            $("#slidetoggle_menu").toggleClass("active"); 
        });
    });
  
}