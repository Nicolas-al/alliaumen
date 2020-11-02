$(document).ready(function () {

        var url = new URL('https://localhost:8000/#contact_form');
        // on click pour afficher le formulaire
        ($('#form_button')).click(function(){
            $('.modal_contact').show();
            $('#visible-content').hide();
            $('#sidebar').on('click', function(){
                $('.modal_contact').hide();
                $('#visible-content').show();
            });
        });
        // $( window ).load(function() { 
        //     if (url.hash != '#contact_form'){
        //         $('.modal_contact').hide();
        //         $('#visible-content').show();
        //     }
        // });
        //on attribut un href au btn de validation du formulaire
        if($('.modal_contact').hide()){
            console.log($('#form_link').attr("href"));
            $('#form_link').attr("href", "#contact_form");
        }
        // on click pour valider le formulaire
        $('#button_form').on('click', function(e){
            var name = $('#name').val();
            var firstName = $('#firstname').val();
            var mail = $('#mail').val();
            var message = $('#message').val();
            // si des champs sont vides : message erreur
            if (name === "" || firstName === "" || mail === "" || message === ""){
                var errorsForm = $('#errors_form').text("Un ou plusieurs champs ne sont pas remplis");
                errorsForm.fadeIn(300).delay(8000).fadeOut(1000);
            }
            // si tout es ok on fait une requete ajax
            else{
                $.ajax({ 
                    url: '/sendmail',
                    type: 'POST',
                    dataType : 'html', 
                    data : 'name=' + name + '&firstname=' + firstName + '&mail=' + mail + '&message=' + message,
                    success: function (code_html, statut) { // success est toujours en place, bien sûr !
                        console.log(code_html);
                    },
                    error: function (resultat, statut, erreur) {
                    }               
                });
                name = $('#name').val("");
                firstName = $('#firstname').val("");
                mail = $('#mail').val("");; 
                message = $('#message').val("");
                $('.modal_contact').hide();
                console.log($("#button_form > a").attr("href"));
                $("#button_form > a").attr("href", "#block_contact");
            }
        });    
});

