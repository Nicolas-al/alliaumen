$(document).ready(function () {
    $('#profil').hover( function(){
        console.log('weeee');
        $('#profil_panel').delay(8000).fadeIn(2000);
        $('#block_profil').css({
            "margin" : "unset"
        });
        $('.from-center').css({
            "background" : "#353648",
            "color" : "white"
        })
    });
    
});