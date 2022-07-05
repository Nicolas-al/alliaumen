$(document).ready(function () {

// menu
let menu = $('.menu');
let menuI = $('.menu > i');
let menuP = $('.menu > p');
console.log(menuI);

	// $(menu).on('mouseenter', function(){
	// 	console.log($(menu).index(this));
	// 	let index = $(menu).index(this);
	// 	$(menuI[index]).hide();
	// 	$(menuP[index]).show();
	// })
	// $(menu).on('mouseleave', function(){
	// 	console.log($(menuI).index(this));
	// 	let index = $(menu).index(this);
	// 	$(menuI[index]).show();
	// 	$(menuP[index]).hide();
	// })


// loader
let blockText = $('#block_text');
let loader = $('.loader');
setTimeout(function(){
	blockText.hide();
	loader.show();
	$('#footer').hide();
}, 6500)
setTimeout(function(){
	loader.hide();
	$('#footer').show();
}, 8500)
});