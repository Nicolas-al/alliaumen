function banIp(id){

    // var idComment = document.querySelectorAll('.comment');

    // for(let i = 0; i <= idComment.length; i++)
    // {
    // var idStr = idComment[i].id;
    // console.log(idStr)

    // console.log(idStr);
    console.log(id);
        $.ajax({
            url: '/modo/' + id + '?action=ban',
            type: 'GET',
            dataType: 'html',
            success: function (code_html, statut) { // success est toujours en place, bien sûr !
                console.log('ok');
                let balise = '#' + id;
                $(balise).css({
                    'display': 'none'
                });
                console.log(balise);
            },
        })
  
}
banIp();