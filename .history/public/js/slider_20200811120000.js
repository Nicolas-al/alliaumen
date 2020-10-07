$(document).ready(function () {

    let projectCard = $('.project_card');
    let project = $('.project');
    let infosProject = $('.panel_project');
    let opacitySlide = $('.opacity_slide');
    console.log(projectCard);
    console.log(project);

    for (let i=0 ; i < projectCard.length; i++)
    {
        $(projectCard[1]).css({
            "marginTop" : "-100px",
            "marginBottom" : "100px",
            "background" : "rgb(97, 95, 130);",
            "cursor" : "default"
        });
        for (let a=0 ; a < projectCard.length; a++)
        {
            $(projectCard[a]).click(function (){
                if ($(projectCard[i]).css('marginTop') === '-100px'){
                    $(projectCard[i]).css({
                        "marginTop" : "0px",
                        "marginBottom" : "0px",
                        "background" : "#353348",
                        "cursor" : "pointer"
                    })
                }
                $(projectCard[a]).css({
                    "marginTop" : "-100px",
                    "marginBottom" : "100px",
                    "background" : "rgb(97, 95, 130);",
                    "cursor" : "default"
                })
                // $(project[i]).hide();
                $(infosProject[i]).hide();
                $(opacitySlide[i]).hide();
                // $(project[a]).show();
                $(infosProject[a]).show();
                $(opacitySlide[a]).show();
            });
               
        
            if ($(projectCard[i]).css('marginTop') === '-100px')
            {
                // $(project[i]).show();
                $(infosProject[i]).show();
                $(opacitySlide[i]).show();
            }
            

        }
    }
})