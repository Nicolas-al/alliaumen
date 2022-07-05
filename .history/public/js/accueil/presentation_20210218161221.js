$(document).ready(function () {

// menu
let menuI = $('.menu > i');
let menuP = $('.menu > p');
console.log(menuI);

	$(menuI).on('mouseenter', function(){
		console.log($(menuI).index(this));

	})


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