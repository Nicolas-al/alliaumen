function deleteCom(commentId) {
    $.ajax({
        url: '/modo/delete-com/?action=deleteCom&commentId=' + commentId,
        type: 'GET',
        dataType: 'html',
        success: function (code_html, statut) { // success est toujours en place, bien sûr !
            console.log('ok');
            let balise = '#' + commentId;
            $(balise).css({
                'display': 'none'
            });
            console.log(balise);
        },

        error: function (resultat, statut, erreur) {
           console.log(resultat, statut );
        }
    });
}