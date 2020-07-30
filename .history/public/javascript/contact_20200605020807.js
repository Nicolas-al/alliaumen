$(document).ready(function () {

        ($('.btn-primary')).click(function(){
            $('.modal_contact').show();
        })
        // $('.contact_Name').val();
        var name = $('.name').val();
        var firstName = $('.name').val();
        var mail = $('.contatct_Mail').val();
        var message = $('.contact_Message').val();


        $('#button_form').on('click', function(e){
            $.ajax({ 
                url: '/sendmail',
                type: 'POST',
                dataType : 'html', 
                data : 'name=' + name + '&firstname=' + firstName,
                success: function (code_html, statut) { // success est toujours en place, bien sûr !
                    console.log(code_html);

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

