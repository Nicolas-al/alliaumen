$(document).ready(function () {


let face = $('.face');
for(let i=0; i<face.length ; i++){
	if ($(face[i]).css('transform') === "rotateY(180deg)"){
		console.log(i);
	}
}



// showLetters();
});