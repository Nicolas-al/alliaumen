function deleteCom(id) {
    $.ajax({
        url: '/modo/' + id + '?action=deleteCom',
        type: 'GET',
        dataType: 'html',
        success: function (code_html, statut) { // success est toujours en place, bien sûr !
            console.log('ok');
            let balise = '#' + id;
            $(balise).css({
                'display': 'none'
            });
            console.log(code_html, statut);
        },

        error: function (resultat, statut, erreur) {
           console.log(resultat, statut );
        }
    });
}