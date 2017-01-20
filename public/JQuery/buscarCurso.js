$(document).ready(function () {
    $("#buscarCurso").on("click", function () {

        var titulo_curso = $("#busquedaTitulo").val();

        $.ajax({
            type: "get",
            url: "/buscarCurso",
            data: {
                titulo: titulo_curso
            },

            success: function (data, textStatus, jqXHR) {
                data.forEach(function (curso) {
                    $("#tabla_busqueda").append(
                            $("<tr>").append($("<td>").text(curso.titulo), $("<td>").text(curso.localidad), $("<td>").text(curso.fecha_inicio), $("<td>").text(curso.fecha_fin), $("<td>").text(curso.plazas_disponibles))
                            );
                });
                console.log(data);
            },

            error: function (jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }

        });
    });
});
