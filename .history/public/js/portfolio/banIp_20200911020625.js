function banIp(commentId, portfolioId){

    console.log(portfolioId);
        $.ajax({
            url: '/modo/' + portfolioId + '?action=ban&commentId=' + $commentId,
            type: 'GET',
            dataType: 'html',
            success: function (code_html, statut) { // success est toujours en place, bien sûr !
                let balise = '#' + commentId;
                $(balise).css({
                    'display': 'none'
                });
                console.log(balise);
            },
        })
  
}
