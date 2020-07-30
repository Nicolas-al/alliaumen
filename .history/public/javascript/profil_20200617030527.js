$(document).ready(function () {
    $('#profil').hover( function(){
        console.log('weeee');
        $('#profil_panel').fadeIn(2000).delay(8000);
        $('#block_profil').css({
            "margin" : "unset"
        });
        $('.from-center').css({
            "background" : "#353648",
            "color" : "white";
        })
    });
    
});