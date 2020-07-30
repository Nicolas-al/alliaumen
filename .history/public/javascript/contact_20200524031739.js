$(document).ready(function () {

        ($('.btn-primary')).click(function(){
            $('.modal_contact').show();
        })
        $('.submit_contact').on('click', function(e){
            $.ajax({ 
                url: "{{path('sendmail')}}",
                method: "POST",
                success: function (code_html, statut) { // success est toujours en place, bien sûr !
                    console.log('ok');
                },
                error: function (resultat, statut, erreur) {
                    console.log('raté');
                }                
            })
        })
})

