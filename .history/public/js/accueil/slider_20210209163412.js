$(document).ready(function () {

    let projectCard = $('.project_card');
    let project = $('.project');
    let opacityCards = $('.opacity_cards');
    let slides = $('.panel_project');
    var x = window.matchMedia("(max-width: 500px)")

    if (!x.matches) { // If media query matches
            $(projectCard[0]).css({
                "marginTop" : "-100px",
                "marginBottom" : "100px",
                "background" : "white",
                "z-index" : 5,
                "cursor" : "default"
            }); 
            $(slides[0]).css({
                "display" : "block",
            }); 

      
        let index = 0;
        let startSlide = setInterval(() => { slider()   
        }, 5000);

        $(projectCard).on('click', function(){
            console.log($(this).index())
            index = $(this).index();
            nextSlide(index);
            $(slides[index]).css({
                'display' : 'block'
            })
            $(projectCard[index]).css({
                "marginTop" : "-100px",
                "marginBottom" : "100px",
                "background" : "white;",
                "z-index" : 5,
                "cursor" : "default"
            })
            $(opacityCards[index]).css({
                "opacity" : 0,
            }); 

        })

        function nextSlide(index){
            for(let i=0; i<slides.length; i++){
                if($(slides[i]).css('display') === "block"){
                    index = $(slides[i]).index()
                    $(slides[index]).css({
                        'display' : 'none'
                    })
                    $(projectCard[index]).css({
                        "marginTop" : "0px",
                        "marginBottom" : "0px",
                        "background" : "white",
                        "z-index" : 1,
                        "cursor" : "pointer"
                    })
                    $(opacityCards[index]).css({
                        "opacity" : 0.4,
                    });   
                }
            }
        }
        

        function slider(){
            console.log(slides[index]);
            $(slides[index]).css({
                'display' : 'none'
            })
            $(projectCard[index]).css({
                "marginTop" : "0px",
                "marginBottom" : "0px",
                "background" : "white",
                "z-index" : 1,
                "cursor" : "pointer"
            })
            $(opacityCards[index]).css({
                "opacity" : 0.4,
            }); 
            if(index < slides.length - 1){
                index++;
                console.log(slides[index])
                $(slides[index]).css({
                    'display' : 'block'
                })
                $(projectCard[index]).css({
                    "marginTop" : "-100px",
                    "marginBottom" : "100px",
                    "background" : "white;",
                    "z-index" : 5,
                    "cursor" : "default"
                })
                $(opacityCards[index]).css({
                    "opacity" : 0,
                }); 
            }
            else{
                index = 0;
                $(slides[index]).css({
                    "display" : "block",
                }); 
            }
            console.log(index);
        }



    }
    
});