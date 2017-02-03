$(document).ready(function () {
    $("#formImg").on("submit",function (event) {
        event.preventDefault();
        var id = $("#ImgID").val();
        var aux = $(this);
        var formData = new FormData();
        
        
        formData.append("imagen", aux[0][1].files[0],"imagen");
        

        $.ajax({
            type: 'PUT',

            data: formData,

            url: "/insertarImagen/" + id,
            cache: false,
            contentType: false,
	    processData: false,

            success: function (data, textStatus, jqXHR) {
                renderMensaje();
                $("#mensaje").text("Imagen añadida con éxito");
            },

            error: function (jqXHR, textStatus, errorThrown) {
                renderMensajeError();
                $("#mensajeError").text("Se ha producido un error: " + errorThrown);
            }
        });
    });

    function renderMensaje() {
        $('.contenido .pagina').removeClass('visible');
        $('.contenido .pagina').addClass('escondido');
        var page = $('.mensaje');
        page.removeClass('escondido');
        page.addClass('visible');
    }

    function renderMensajeError() {
        $('.contenido .pagina').removeClass('visible');
        $('.contenido .pagina').addClass('escondido');
        var page = $('.mensajeError');
        page.removeClass('escondido');
        page.addClass('visible');
    }
});


