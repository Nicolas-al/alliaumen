$(document).ready(function () {

    var blockDown = $('.block-down>i')
    var profil = $('#profil');
    var x = window.matchMedia("(max-width: 702px)");
    var blockSkills = $('#block_competences');
    profil.on("click", function(){
        blockDown.removeClass("double-down");
        $('#profil_panel').fadeIn(2000).delay(1000);
        $('#block_profil').css({
        "margin" : "unset"
        });
        $(this).css({ 
            "background" : "#353548",
            "color" : "white"
        })
        if (x.matches) { // If media query matches
            margin-top: 5%;
          }
        console.log('weeee');
    })  
});