function banIp(commentId, portfolioId){

    // var idComment = document.querySelectorAll('.comment');

    // for(let i = 0; i <= idComment.length; i++)
    // {
    // var idStr = idComment[i].id;
    // console.log(idStr)

    // console.log(idStr);
    console.log(portfolioId);
    var path = path
        $.ajax({
            url: '/modo/' + portfolioId + '?action=ban',
            type: 'GET',
            dataType: 'html',
            success: function (code_html, statut) { // success est toujours en place, bien sûr !
                let balise = '#' + id;
                $(balise).css({
                    'display': 'none'
                });
                console.log(balise);
            },
        })
  
}
banIp();