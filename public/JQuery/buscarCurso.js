$(document).ready(function () {
    var numero = 5;
    $("#buscarCurso").click(function () {
        var titulo_curso = $("#busquedaTitulo").val();

        $.ajax({
            type: "GET",
            data: {
                titulo: titulo_curso,
                num: numero,
                pos: 0
            },
            url: "/buscarCurso",

            success: function (data, textStatus, jqXHR) {
                $("#tabla_busqueda tr").remove();
                $("#paginasTabla li").remove();
                data.forEach(function (curso) {
                    $("#tabla_busqueda").append(
                            $("<tr class = leerCurso  data-id=" + curso.id + " data-toggle=modal data-target=#infoCurso>").append(
                            $("<td>").text(curso.titulo),
                            $("<td>").text(curso.localidad),
                            $("<td>").text(curso.fecha_inicio),
                            $("<td>").text(curso.fecha_fin),
                            $("<td>").text(curso.plazas_disponibles)));
                });
                $("#tabla_busqueda tr").addClass("link");
                var numpaginas = data[0].tamano / numero;
                if (data[0].tamano % numero !== 0) {
                    numpaginas = numpaginas + 1;
                }
                for (var x = 1; x <= numpaginas; x++) {
                    if (x === 1) {
                        $("#paginasTabla").append(
                                $("<li class = active data-pag = " + x + ">").append(
                                $("<a>").text(x)));
                    } else {
                        $("#paginasTabla").append(
                                $("<li class = paginacion data-pag = " + x + ">").append(
                                $("<a>").text(x)));
                    }
                }
                $("#paginasTabla li").addClass("link");
            },

            error: function (jqXHR, textStatus, errorThrown) {
                renderMensajeError();
                $("#mensajeError").text("Se ha producido un error: " + errorThrown);
            }


        });
    });

    $("#paginasTabla").on("click", ".paginacion", function () {
        var titulo_curso = $("#busquedaTitulo").val();
        var aux = $(this).data("pag");
        var posicion = (Number(aux) - 1) * numero;
        $.ajax({
            type: "GET",
            data: {
                titulo: titulo_curso,
                num: numero,
                pos: posicion
            },
            url: "/buscarCurso",

            success: function (data, textStatus, jqXHR) {
                $("#tabla_busqueda tr").remove();
                $("#paginasTabla li").remove();
                data.forEach(function (curso) {
                    $("#tabla_busqueda").append(
                            $("<tr class = leerCurso  data-id=" + curso.id + " data-toggle=modal data-target=#infoCurso>").append(
                            $("<td>").text(curso.titulo),
                            $("<td>").text(curso.localidad),
                            $("<td>").text(curso.fecha_inicio),
                            $("<td>").text(curso.fecha_fin),
                            $("<td>").text(curso.plazas_disponibles)));
                });
                $("#tabla_busqueda tr").addClass("link");
                var numpaginas = data[0].tamano / numero;
                if (data[0].tamano % numero !== 0) {
                    numpaginas = numpaginas + 1;
                }
                for (var x = 1; x <= numpaginas; x++) {
                    if (x === Number(aux)) {
                        $("#paginasTabla").append(
                                $("<li class = active data-pag = " + x + ">").append(
                                $("<a>").text(x)));
                    } else {
                        $("#paginasTabla").append(
                                $("<li class = paginacion data-pag = " + x + ">").append(
                                $("<a>").text(x)));
                    }
                }
                $("#paginasTabla li").addClass("link");
            },

            error: function (jqXHR, textStatus, errorThrown) {
                renderMensajeError();
                $("#mensajeError").text("Se ha producido un error: " + errorThrown);
            }


        });

    });
    function renderMensajeError() {
        $('.contenido .pagina').removeClass('visible');
        $('.contenido .pagina').addClass('escondido');
        var page = $('.mensajeError');
        page.removeClass('escondido');
        page.addClass('visible');
    }
});
