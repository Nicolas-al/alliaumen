$(document).ready(function () {

        ($('.btn-primary')).click(function(){
            $('.modal_contact').show();
        })
        ($('.submit_contact')).click(function(){
            $.ajax({ 
                url: '{{path(send_mail)}}'
            })
        })
})

