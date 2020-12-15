$(document).ready(function () {
    $("#formulario").bind("submit", function () {
        // Capturamnos el boton de envío
        var btnEnviar = $("#btnEnviar");
        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            beforeSend: function () {
                btnEnviar.val("Enviando");
                btnEnviar.attr("disabled", "disabled");
            },
            complete: function (data) {
                btnEnviar.val("Enviar formulario");
                btnEnviar.removeAttr("disabled");
            },
            success: function (data) {
                document.getElementById("formulario").reset();
                $('#alertaExito').fadeIn();
                setTimeout(function () { $('#alertaExito').fadeOut(); }, 5000);
            },
            error: function (data) {
                $('#alertaError').fadeIn();
                setTimeout(function () { $('#alertaError').fadeOut(); }, 7500);
            }
        });
        return false;
    });
});