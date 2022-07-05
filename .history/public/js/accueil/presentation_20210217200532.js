$(document).ready(function () {


let blockText = $('#block_text');
let loader = $('.loader');
setTimeout(function(){
	blockText.hide();
	loader.show();
}, 18000)
setTimeout(function(){
	loader.hide();
})
});