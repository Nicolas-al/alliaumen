$(document).ready(function () {

    let projectCard = $('.project_card');
    let project = $('.project');
    let infosProject = $('.panel_project');
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
                "z-index" : 1,
                "opacity" : 1,
                "cursor" : "default"
            });
            for (let a=0 ; a < projectCard.length; a++)
            {
                $(projectCard[a]).click(function (){
                    if ($(projectCard[i]).css('marginTop') === '-100px'){
                        $(projectCard[i]).css({
                            "marginTop" : "0px",
                            "marginBottom" : "0px",
                            "background" : "white",
                            "opacity" : 0.3,
                            "cursor" : "pointer"
                        })
                    }
                    $(projectCard[a]).css({
                        "marginTop" : "-100px",
                        "marginBottom" : "100px",
                        "background" : "white;",
                        "opacity" : 1,
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
      } else {
        
      };
    
});