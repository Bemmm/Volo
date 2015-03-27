$(document).ready(function(){
    //Скріпт для загрузки фото
    $('.file-input a').on('click', function () {
        $('.input-file-btn').click();
    });

    $('.input-file-btn').on('change', function () {
        var $val = $(this).val().replace('C:\\fakepath\\', '');
        $('.file-input span').html($val);
    });
    //єбучий скріпт який коряво написаний і не паше, форма логіну
    $('#login').click(function(){
        $('.popupLogin').toggle('fast');
    });
    //ajax подгрузка сторінки з реєстрацією в сторінку індекс
    $('body').delegate('#reg','click',function(){
        //$(".wrapper").animate({width:'toggle'},350);
        $.ajax({
            url:'registration.html',
            success:function(page){

                $('.wrapper').html(page);
            }
        });
    });

    //ajax відправка данних користувача який логіниться на сервер
    $("#loginForm").submit(function() {

        var url = "/login"; // the script where you handle the form input.

        $.ajax({
            type: "POST",
            url: url,
            data: $("#loginForm").serialize(), // serializes the form's elements.
            success: function(data)
            {
                console.log(data); // show response from the php script.
            }
        });

        //return false; // avoid to execute the actual submit of the form.
    });


});


