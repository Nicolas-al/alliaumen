$(document).ready(function () {

// menu
let menu = $('.menu');
let menuI = $('.menu > i');
let menuP = $('.menu > p');
console.log(menuI);

	$(menu).on('mouseenter', function(){
		console.log($(menuI).index(this));
		let index = $(menuI).index(this);
		$(menuI[index]).hide();
		$(menuP[index]).show();
	})
	$(menu).on('mouseleave', function(){
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