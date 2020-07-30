$(document).ready(function () {

        ($('.btn-primary')).click(function(){
            $('.modal_contact').show();
        })
        $('.submit_contact').on('click', function(e){
            $.ajax({ 
                url: "https://127.0.0.1:8001/sendmail",
                type: 'POST',
                success: function (code_html, statut) { // success est toujours en place, bien sûr !
                    alert('ok');
                },
                error: function (resultat, statut, erreur) {
                    console.log(resultat);
                }                
            })
        })
})

