$(document).ready(function () {
    $("#BotonAnadirImagen").click(function () {
        var id = $("#AnadirID").val();

        var imagen = JSON.stringify({
            
        });

        $.ajax({
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',

            data: imagen,

            url: "/insertarImagen/" + id,

            success: function (data, textStatus, jqXHR) {
                renderImagenAnadida();
                $("#mensaje").text("Imagen añadida con éxito");
            },

            error: function (jqXHR, textStatus, errorThrown) {
                renderMensajeError();
                $("#mensajeError").text("Se ha producido un error: " + errorThrown);
            }
        });
    });

    function renderImagenAnadida() {
        var page = $('.mensaje');
        page.removeClass('escondido');
        page.addClass('visible');

        $('.contenido .pagina').removeClass('visible');
        $('.contenido .pagina').addClass('escondido');
    }

    function renderMensajeError() {
        $('.contenido .pagina').removeClass('visible');
        $('.contenido .pagina').addClass('escondido');
        var page = $('.mensajeError');
        page.removeClass('escondido');
        page.addClass('visible');
    }
});


