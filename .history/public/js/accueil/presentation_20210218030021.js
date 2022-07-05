$(document).ready(function () {

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