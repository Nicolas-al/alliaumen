$(document).ready(function () {


let htmlP = $('.background-presentation');
for(let i=0; i<htmlP.length; i++){
	let htmlPText = $(htmlP[i]).html();
	
	console.log(htmlPText.substr(0).length);
}
// const txt = htmlP.substr(0);

console.log(htmlP);
let i 	= 0 ;
function showLetters()
{
  let timeOut ;
  if(i < txt.length)
	{
	  htmlP.innerHTML += `<span>${txt[i]}</span>` ;
	  timeOut = setTimeout(showLetters,200)
	  i++
	}
	else
	{
	  clearTimeout(timeOut);
	  console.log("end")
	}
}
// showLetters();
});