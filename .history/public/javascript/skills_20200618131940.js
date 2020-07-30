$(document).ready(function () {
    var blockLogo = $('#logo_skills');
    console.log(blockLogo.length);
    console.log('zut');
    for(i=0 ; i<blockLogo[i].length ; i++){
        console.log('zut');
        blockLogo.hover( function(){
            this.css({
                "width" : "65px"
            })
        })
    }
});