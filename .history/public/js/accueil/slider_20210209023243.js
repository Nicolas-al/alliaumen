$(document).ready(function () {

    let projectCard = $('.project_card');
    let project = $('.project');
    let infosProject = $('.panel_project');
    let opacityCards = $('.opacity_cards');
    console.log(projectCard);
    console.log(project);
    var x = window.matchMedia("(max-width: 500px)")

    if (!x.matches) { // If media query matches
        console.log('cool');
        for (let i=0 ; i < projectCard.length; i++)
        {
            $(projectCard[0]).css({
                "marginTop" : "-100px",
                "marginBottom" : "100px",
                "background" : "white",
                "z-index" : 5,
                "cursor" : "default"
            }); 
            for (let j=0; j < opacityCards.length; j++){
                $(opacityCards[0]).css({
                    "opacity" : 0,
                });         
            for (let a=0 ; a < projectCard.length; a++)
            {
                $(projectCard[a]).click(function (){
                    if ($(projectCard[i]).css('marginTop') === '-100px'){
                        $(projectCard[i]).css({
                            "marginTop" : "0px",
                            "marginBottom" : "0px",
                            "background" : "white",
                            "z-index" : 1,
                            "cursor" : "pointer"
                        })
                        $(opacityCards[j]).css({
                            "opacity" : 0.4,
                        });                  
                    }
                    $(opacityCards[a]).css({
                        "opacity" : 0,
                    });              
                    $(projectCard[a]).css({
                        "marginTop" : "-100px",
                        "marginBottom" : "100px",
                        "background" : "white;",
                        "z-index" : 5,
                        "cursor" : "default"
                    })
                    $(infosProject[i]).hide();
                    $(infosProject[a]).show();
                });         
                if ($(projectCard[i]).css('marginTop') === '-100px')
                {
                    $(infosProject[i]).show();
                }
            
            }
        }
        }
      } 
      slider();
    //   setInterval(() => { slider()   
    //   }, 2000);
      function slider(){
        let slides = $('.panel_project');
        let index = 0;
        console.log(slides[index]);
        // $(slides[index]).css({
        //     'display' : 'none'
        // })
        if(index < slides.length -1){
            index++;
        }
        else{
            index = 0;
        }
        console.log(index);
        


        // slides.each(function(index) {
        //     console.log((this + index));
        //     if($(this).css('display') == 'block'){
        //         console.log('Pollll');
        //         $(this).css({
        //             'display' : 'none'
        //         })
        //         console.log($(this).index(index));
        //         console.log($(this).index(index));
        //         index = index + 1
        //         console.log(index);
        //     };
        // });

        // for(let i=0; i<slides.length ; i++){
        //     if(slides[i].css('display') == 'block'){
        //         $(this).css({
        //             'display' : 'none'
        //         })
        //         console.log($(this).index());
        //     }
            
        // }



      }

    
});