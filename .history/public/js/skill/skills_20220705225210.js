$(document).ready(function () {

    let container = $('#container_cv');
    // if($(container).css('display') == "none"){ 
    $('.n-logo').on('click', function(){
        console.log('aha');
        $(container).slideDown();

        // $(this).attr('id', 'cv_click2')
        $('.fa-times-circle').on('click', function(){
            $(container).hide();
        })
    
    setTimeout(function(){
                $(container).slideUp( 1000, function(){

              })
            }, 8000);
    // if($(container).css('display') == "block"){
    //     setTimeout(function(){
    //         $(container).slideUp( 2000, function() {
    //             $('#container_cv img').css({
    //                 'whidth' : '100%'
    //             })
    //           });
    //     }, 10000);

    //     $('#cv_click').on('click', function(){
    //         $(container).slideUp();
    //         console.log('weee');
    //     })
    })
    // $('#cv_click2').on('click', function(){
    //     console.log('wwwwwwwwww');
    //     $(container).slideUp();
    //     $(this).attr('id', 'cv_click')

    // })

        
    // })
    // }


    //progress bar
    $(".progresss-bar").each(function(i)
    {
      $(this).animate({
        width: $(this).attr('aria-valuenow') + '%'
      }, 5000);
    });




})   

