var captcha;
$(document).ready(function(){
    $('#refresh').on('click',function(){
        
        $('#entercaptcha').val('');
        var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        captcha = chars[Math.floor(Math.random()*chars.length)];
        for (let i=0 ; i<5;i++){
          captcha = captcha+chars[Math.floor(Math.random()*chars.length)];
        }
        $('#newcaptcha').val(captcha);
    })

    $('#check').on('click',function(){
        var check = $('#entercaptcha').val();
        if(check == captcha){
            alert('CAPTCHA MATCHED');
            
        }
        else{
            alert('TRY AGAIN');
        }
    })
})








