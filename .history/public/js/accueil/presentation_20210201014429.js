let htmlP = document.getElementsByClassName('background-presentation');
// const txt = htmlP.substr(0);

console.log(htmlP.length);
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
