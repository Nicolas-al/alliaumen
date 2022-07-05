$(document).ready(function () {

        // on click pour afficher le formulaire
        ($('.contact-button')).click(function(){
            $('.block').hide();
            $('.modal_contact').slideDown();
            $('#sidebar').on('click', function(){
                $('.modal_contact').hide();
                $('#visible-content').show();
            });
        });
        ($('#contact_menu')).click(function(){
            $('.modal_contact').slideDown();
            $('.block').hide();
            $('#sidebar').on('click', function(){
                $('.modal_contact').hide();
                $('#visible-content').show();
            });
        });


        if(window.location.pathname === '/#contact_box'){
            $('.modal_contact').show();
        }
       
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
                $('#visible-content').show();
                console.log($("#button_form > a").attr("href"));
                $("#button_form > a").attr("href", "#block_contact");
            }
        });    
});

