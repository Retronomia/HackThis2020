
function onLoad(){
    "use strict";
    /*==================================================================
    [ Focus input ]*/
    $('.val').each(function(){
        $(this).on('blur',function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        });
    });
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .val');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        console.log(check);
        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
        
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    
}
function confirmUser(){
    $.getJSON('data/users.json', function (data) {
        console.log(data['Users'][0]);
        $.each(data.Users, function(index, element) {
            console.log(element.Username,element.Password);
            if($('.uid').val()==element.Username){
                if($('.pwd').val()==element.Password){
                    localStorage.setItem("Username",$('.uid').val());
                    window.location.href = "home.html";
                }
            }
        });
        
    });
}
/*function confirmUser(){
        $.ajax({
            url: '/some_server_side_script',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                username: $('.uid').val(),
                password: $('.pwd').val(),
            }),
            success: function(result) {
                alert('success');
            }
        });
}*/