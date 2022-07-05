$(document).ready(function () {

// menu
let menuI = $('.menu > i');
let menuP = $('.menu > p');
console.log(menuI);
for(let i=0; i< menuI.length; i++){
	$(menuI[i]).on('mouseenter', function(){
		console.log($(menu[i]).index());
		// $(this).hide();

	})
}

// loader
let blockText = $('#block_text');
let loader = $('.loader');
setTimeout(function(){
	blockText.hide();
	loader.show();
}, 6500)
setTimeout(function(){
	loader.hide();
}, 8500)
});