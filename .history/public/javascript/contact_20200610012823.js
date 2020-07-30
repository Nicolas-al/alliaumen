$(document).ready(function () {

        ($('.btn-primary')).click(function(){
            $('.modal_contact').show();
        })
        // $('.contact_Name').val();
        
        // var mail = $('.contatct_Mail').val();
        // var message = $('.contact_Message').val();

        // var name = $('.name').val();
        // var firstName = $('.firstname').val();

        console.log(name);

        $('#button_form').on('click', function(e){
            var name = $('#name').val();
            var firstName = $('#firstname').val();
            var mail = $('#mail').val();
            var message = $('#message').val();

            $.ajax({ 
                url: '/sendmail',
                type: 'POST',
                dataType : 'html', 
                data : 'name=' + name + '&firstname=' + firstName + '&mail=' + mail + '&message' + message,
                success: function (code_html, statut) { // success est toujours en place, bien sûr !
                    console.log(code_html);
                    alert('ca marche');
                    console.log(message);
                },
                error: function (resultat, statut, erreur) {
                    alert('zut');
                }               
            });
        });
});

