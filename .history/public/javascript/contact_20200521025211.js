$(document).ready(function () {

        ($('.btn-primary')).click(function(){
            $('.modal_contact').show();
        })
        $('.submit_contact').on('click', function(){
            $.ajax({ 
                url: '{{path(sendmail)}}',
                type: 'POST',
                dataType: 'html',
                success: function (code_html, statut) { // success est toujours en place, bien sûr !
                    console.log('ok');
                }
            })
        })
})

