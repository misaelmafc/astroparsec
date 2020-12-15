$(document).ready(function () {
    $(function (){
        tabla();

        setInterval(tabla, 2000);

    });

    function tabla(){
        $.ajax({
            url: '../php/datos.php',
            type: 'POST',
            success: function(res){
                var js = JSON.parse(res);
                var tabla;
                for(var i = 0; i < js.length; i++){
                    tabla+= '<tr><td>'+js[i].id+'</td><td>'+js[i].nombre+'</td><td>'+js[i].email+'</td><td>'+js[i].mensaje+'</td></tr>';
                }
                $('#tbody').html(tabla);
            }
        });
    }

    $('#btnUpdate').click(function(){
        tabla();
    });
});