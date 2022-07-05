$(document).ready(function () {

// menu
let menuI = $('.menu > i');
let menuP = $('.menu > p');
console.log(menuI);

	$(menuI).on('mouseenter', function(){
		console.log($(menuI).index(this));
		let index = $(menuI).index(this);
		$(menuI[index]).hide();
		$(menuP[index]).show();
	})
	$(menuP).on('mouseleave', function(){
		console.log($(menuI).index(this));
		let index = $(menuI).index(this);
		$(menuI[index]).show();
		$(menuP[index]).hide();
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