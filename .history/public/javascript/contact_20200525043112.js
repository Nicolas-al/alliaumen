$(document).ready(function () {

        ($('.btn-primary')).click(function(){
            $('.modal_contact').show();
        })
        var name = $('.contact_Name').val();
        var firstName = $('.contact_FirstName').val();
        var mail = $('.contatct_Mail').val();
        var message = $('.contact_Message').val();


        $('.submit_contact').on('click', function(e){
            $.ajax({ 
                url: Routing.generate('contact'),
                type: 'POST', 
                success: function (code_html, statut) { // success est toujours en place, bien sûr !
                    alert('ok');
                },
                error: function (resultat, statut, erreur) {
                    console.log(name);
                    console.log(statut);
                    console.log(erreur);
                    alert('zut');

                },                
            })
        })
})

