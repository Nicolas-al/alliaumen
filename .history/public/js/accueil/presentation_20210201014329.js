let htmlP = document.getElementsByClassName('background-presentation');
// const txt = htmlP.substr(0);
for (let i=0; htmlP.length ; i++)
{
	console.log(htmlP[i]);
}
// console.log(htmlP);
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
