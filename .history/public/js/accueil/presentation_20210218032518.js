$(document).ready(function () {

// menu
let menu = $('.menu i');
console.log(menu);
for(let i=0; i< menu.length; i++){
	console.log('MOUSE');
	$(menu[i]).on('mouseenter', function(){
		console.log('MOUSE');
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