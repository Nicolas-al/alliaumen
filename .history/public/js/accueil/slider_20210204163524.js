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
                for( let g=0; g<opacityCards.length; g++){

                
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
                    $(projectCard[a]).css({
                        "marginTop" : "-100px",
                        "marginBottom" : "100px",
                        "background" : "white;",
                        "z-index" : 2,
                        "cursor" : "default"
                    })
                    $(opacityCards[g]).css({
                        "opacity" : 0.4,
                    });

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
      } else {
        
      };
    
});