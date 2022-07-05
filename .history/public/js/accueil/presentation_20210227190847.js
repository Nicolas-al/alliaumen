$(document).ready(function () {

// menu
let menu = $('.menu');
let menuI = $('.menu > i');
let menuP = $('.menu > p');

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

let url = $(location).attr('href');
let urlHome = 'https://localhost:8001/accueil';

if (url === urlHome){
	$('#footer').hide();
	setTimeout(function(){
		$('#footer').show();
	}, 8500)

}

// $.ajax({
// 	url: '/',
// 	type: 'GET',
// 	data: 'animation=start',
// 	success: function(code_html, statut){ 
// 		console.log(statut)
// 	}

// });

});
