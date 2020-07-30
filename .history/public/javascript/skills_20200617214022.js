$(document).ready(function () {
    var blockLogo = $('#logo_skills');
    console.log($(blockLogo.length);
    console.log('zut');
    for(i=0 ; i<blockLogo.length ; i++){
        console.log('zut');
        blockLogo[i].hover( function(){
            console.log('merde');
            this.css({
                "width" : "65px"
            })
        })
    }
});