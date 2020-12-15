$(document).ready(function () {
    $("#textAreaFormContact")
        .keyup(function () {
            var value = $(this).val();
            $("#textAreaLength").text('Caracteres restantes: ' + (500 - value.length));
        })
        .keyup();
    $("#textAreaFormContact").focus(function(){
        $('#textAreaLength').fadeIn();
    });
    $("#textAreaFormContact").focusout(function(){
        $('#textAreaLength').fadeOut();
    });
});