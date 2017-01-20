$(document).ready(function () {
    $("#crearCurso").on("click", function () {

        var titulo = $("#titulo").val();
        var descripcion = $("#descripcion").val();
        var fecha_inicio = $("#fecha_inicio").val();
        var fecha_fin = $("#fecha_fin").val();
        var localidad = $("#localidad").val();
        var direccion = $("#direccion").val();
        var plazas = $("#plazas").val();


        $.ajax({
            type: "POST",
            url: "/crearCurso",
            contentType: "application/json",
            data: JSON.stringify({
                titulo: titulo,
                descripcion: descripcion,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                localidad: localidad,
                direccion: direccion,
                plazas: plazas
            }),

            success: function (data, textStatus, jqXHR) {
                $("#mensaje").text(
                        "Se ha creado el curso " + data + " correctamente");
            },

            error: function (jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }

        });
    });
});


