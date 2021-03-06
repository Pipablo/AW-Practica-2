$(document).ready(function () {
    $("#botonModificarCurso").click(function () {
        var cam_titulo_curso = $("#Modtitulo").val();
        var cam_descripcion = $("#Moddescripcion").val();
        var cam_fecha_inicio = $("#Modfecha_inicio").val();
        var cam_fecha_fin = $("#Modfecha_fin").val();
        var cam_localidad = $("#Modlocalidad").val();
        var cam_direccion = $("#Moddireccion").val();
        var cam_plazas_disponibles = $("#Modplazas").val();
        var cam_id = $("#ModID").val();

        var CURSO = JSON.stringify({
            titulo: cam_titulo_curso,
            descripcion: cam_descripcion,
            fecha_inicio: cam_fecha_inicio,
            fecha_fin: cam_fecha_fin,
            localidad: cam_localidad,
            direccion: cam_direccion,
            plazas_disponibles: cam_plazas_disponibles
        });

        $.ajax({
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',

            data: CURSO,

            url: "/modificarCurso/" + cam_id,

            success: function (data, textStatus, jqXHR) {
                $("#tabla_busqueda tr").remove();
                $("#paginasTabla li").remove();
                renderMensaje();
                $("#mensaje").text("Se ha modificado con exito el curso " + cam_id);
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

    function renderMensaje() {
        $('.contenido .pagina').removeClass('visible');
        $('.contenido .pagina').addClass('escondido');
        var page = $('.mensaje');
        page.removeClass('escondido');
        page.addClass('visible');
    }
});
