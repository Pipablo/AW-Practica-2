$(document).ready(function () {
    $("#CrearCurso").on("click", function () {

        var titulo = $("#titulo").val();

        $.ajax({
            type: "POST",
            url: "/buscarCurso",
            contentType: "application/json",
            data: JSON.stringify({
                titulo: titulo
            }),

            success: function (data, textStatus, jqXHR) {
                $("#mensaje").text(
                        "Se ha creado el curso " + data.resultado + " correctamente");
            },

            error: function (jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }

        });
    });
});
