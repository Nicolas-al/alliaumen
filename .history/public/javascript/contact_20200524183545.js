$(document).ready(function () {

        ($('.btn-primary')).click(function(){
            $('.modal_contact').show();
        })
        var name = $('.contact_Name').val();
        var firstName = $('.contact_FirstName').val();
        var name = $('.contatct_mail').val();
        var name = $('.contact_mail').val();


        $('.submit_contact').on('click', function(e){
            $.ajax({ 
                url: "{{path('main')}}",
                type: 'POST',
                data: {
 
                    ZoneID: ZoneID
 
                },
                success: function (code_html, statut) { // success est toujours en place, bien sûr !
                    alert('ok');
                },
                error: function (resultat, statut, erreur) {
                    console.log(resultat);
                    console.log(statut);
                    console.log(erreur);
                    alert('zut');

                }                
            })
        })
})

