function deleteCom(id) {
    $.ajax({
        url: '/modo/' + id,
        type: 'GET',
        dataType: 'html',
        success: function (code_html, statut) { // success est toujours en place, bien sûr !
            console.log('ok');
            let balise = '#' + id;
            $(balise).css({
                'display': 'none'
            });
            console.log('ok');
        },

        error: function (resultat, statut, erreur) {
            alert('error');
        }
    });
}