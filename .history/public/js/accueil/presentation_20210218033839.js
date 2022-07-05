$(document).ready(function () {

// menu
let menuI = $('.menu > i');
let menuP = $('.menu > p');
console.log(menu);
// for(let i=0; i< menu.length; i++){
	$(menuI).on('mouseenter', function(){
		console.log($(this));
		$(this).hide();
	})
// }

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