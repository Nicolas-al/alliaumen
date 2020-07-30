$(document).ready(function () {
    // $('#profil').hover( function(){
       
        
        
    // });

    var blockDown = $('.block-down>i')
    var profil = $('#profil');
    profil.on("click", function(){
        blockDown.removeClass("double-down")
        
        $('#profil_panel').fadeIn(2000).delay(1000);
        $('#block_profil').css({
        "margin" : "unset"
        });
        $(this).css({ "background" : "#353548" })
        console.log('weeee');
    })  
});