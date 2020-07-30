$(document).ready(function () {
    var blockLogo = $('#logo_skills');
    for(i=0 ; i < blockLogo.lenght ; i++){
        blockLogo[i].hover( function(){
            console.log('merde');
            this.css({
                "width" : "65px"
            })
        })
    }
});