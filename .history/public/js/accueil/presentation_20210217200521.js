$(document).ready(function () {


let blockText = $('#block_text');
let loader = $('.loader');
setTimeout(function(){
	blockText.hide();
	loader.show();
})
setTimeout(function(){
	loader.hide();
})
});