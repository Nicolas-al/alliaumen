$(document).ready(function () {
    // $('#profil').hover( function(){
       
        
        
    // });

    var blockDown = $('.block-down>i')
    var profil = $('#profil');
    profil.on("click", function(){
        blockDown.removeClass("double-down")
        blockDown.css({
            "marginTop" : "0px"
        });
        $('#profil_panel').fadeIn(2000).delay(8000);
        $('#block_profil').css({
        "margin" : "unset"
        });
        console.log('weeee');
    })
    
});