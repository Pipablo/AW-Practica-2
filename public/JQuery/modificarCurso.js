$(document).ready(function () {
    $("#").click(function () {
        var titulo_curso = $("#").val();
        var descripcion = $("#").val();
        var fecha_inicio = $("#").val();
        var fecha_fin = $("#").val();
        var localidad = $("#").val();
        var direccion = $("#").val();
        var plazas_disponibles = $("#").val();

        $.ajax({
            type: "PUT",

            url: "/modificarCurso/:" + titulo_curso + "/" + descripcion + "/" + fecha_inicio + "/" + fecha_fin + "/" + localidad + "/" + direccion + "/" + plazas_disponibles,

            success: function (data, textStatus, jqXHR) {
                console.log("Se ha modificado correctamente");
            },

            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Se ha producido un error: " + errorThrown);
            }


        });
    });
});
