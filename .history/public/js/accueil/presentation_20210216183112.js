$(document).ready(function () {


let face = $('.face');
// for(let i=0; i<face.length ; i++){
// 	if ($(face[i]).css('-webkit-transform') === "rotateY(180deg)"){
// 		console.log(i);
// 	}
// }
setInterval(() => { hiddenFace(4)   
}, 12000);
// setInterval(() => { hiddenFace(4)   
// }, 12000);

function hiddenFace(face){
	$(face[face]).css({
		'visibility' : 'hidden'
	})
}

// showLetters();
});