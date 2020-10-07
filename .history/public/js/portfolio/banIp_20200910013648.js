function banIp(){
var idComment = document.querySelectorAll('.comment');
x = idComment.length;

for(let i = 0; i <= idComment.length; i++)
{
    var idStr = idComment[i].id;
    console.log(idStr)
}
// console.log(idStr);
console.log(x);

    // $.ajax({
    //     url: '/modo/' + id + '?action=deleteCom',
       
    // })
}
banIp();