$(document).ready(function () {


let blockText = $('#block_text');
let loader = $('.loader');
setTimeout(function(){
	blockText.hide();
	loader.show();
}, 10500)
setTimeout(function(){
	loader.hide();
}, 12500)
});