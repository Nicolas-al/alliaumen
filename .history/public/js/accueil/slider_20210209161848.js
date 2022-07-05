$(document).ready(function () {

    let projectCard = $('.project_card');
    let project = $('.project');
    let infosProject = $('.panel_project');
    let opacityCards = $('.opacity_cards');
    let slides = $('.panel_project');

    console.log(projectCard);
    console.log(project);
    var x = window.matchMedia("(max-width: 500px)")

    if (!x.matches) { // If media query matches
        // console.log('cool');
        // for (let i=0 ; i < projectCard.length; i++)
        // {
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

        //     for (let j=0; j < opacityCards.length; j++){
        //         $(opacityCards[0]).css({
        //             "opacity" : 0,
        //         });         
        //     for (let a=0 ; a < projectCard.length; a++)
        //     {
        //         $(projectCard[a]).click(function (){
        //             if ($(projectCard[i]).css('marginTop') === '-100px'){
        //                 $(projectCard[i]).css({
        //                     "marginTop" : "0px",
        //                     "marginBottom" : "0px",
        //                     "background" : "white",
        //                     "z-index" : 1,
        //                     "cursor" : "pointer"
        //                 })
        //                 $(opacityCards[j]).css({
        //                     "opacity" : 0.4,
        //                 });                  
        //             }
        //             $(opacityCards[a]).css({
        //                 "opacity" : 0,
        //             });              
        //             $(projectCard[a]).css({
        //                 "marginTop" : "-100px",
        //                 "marginBottom" : "100px",
        //                 "background" : "white;",
        //                 "z-index" : 5,
        //                 "cursor" : "default"
        //             })
        //             $(infosProject[i]).hide();
        //             $(infosProject[a]).show();
        //         });         
        //         if ($(projectCard[i]).css('marginTop') === '-100px')
        //         {
        //             $(infosProject[i]).show();
        //         }
            
        //     }
        // }
        // }
        let index = 0;
        //   slider();
        let startSlide = setInterval(() => { slider()   
        }, 5000);

        $(projectCard).on('click', function(){
            console.log($(this).index())
            index = $(this).index();
            nextSlide(index);
            // startSlide;
        })

        function nextSlide(index){

            console.log(slides[index]);
            for(let i=0; i<slides.length; i++){
                if($(slides[i]).css('display') == "block"){
                    console.log(slides[this]);
                    // $(slides[i]).css({
                    //     'display' : 'none'
                    // })
                }
            }
     
                // }
           
            // console.log($(slides[this]));

                // clearInterval(startSlide);

                // $(slides[index]).css({
                //     'display' : 'block'
                // })
                // this.index++;
                // if (index > slides.length){
                //     index = 0;  
                // }
                // $(slides[index]).css({
                //     'display' : 'none'
                // })
                // startSlide;
                

        // slides[index].style.opacity = 0;
        // this.index++;
        // if (this.index > 4){
        //     this.index = 0;  
        // }
        // this.slides[this.index].style.opacity = 1;
        // this.lectureAuto = setInterval(this.scrollSlides.bind(this), this.duration);
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