$(document).ready(function () {
    $("#BotonAnadirClase").click(function () {
        var id = $("#AnadirID").val();
        var dia_nuevo = $("#dia").val();
        var hora_inicio_nuevo = $("#hora_inicio").val();
        var hora_fin_nuevo = $("#hora_fin").val();

        var clase = JSON.stringify({
            dia: dia_nuevo,
            hora_inicio: hora_inicio_nuevo,
            hora_fin: hora_fin_nuevo
        });

        $.ajax({
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',

            data: clase,

            url: "/insertarHorario/" + id,

            success: function (data, textStatus, jqXHR) {
                renderClaseañadida();
            },

            error: function (jqXHR, textStatus, errorThrown) {
                renderMensajeError();
                $("#mensajeError").text("Se ha producido un error: " + errorThrown);
            }
        });
    });

    $("#BotonAnadirClase+").click(function () {
        var id = $("#AnadirID").val();
        var dia_nuevo = $("#dia").val();
        var hora_inicio_nuevo = $("#hora_inicio").val();
        var hora_fin_nuevo = $("#hora_fin").val();

        var clase = JSON.stringify({
            dia: dia_nuevo,
            hora_inicio: hora_inicio_nuevo,
            hora_fin: hora_fin_nuevo
        });

        $.ajax({
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',

            data: clase,

            url: "/insertarHorario/" + id,

            success: function (data, textStatus, jqXHR) {
                renderAnadirMasClases();
            },

            error: function (jqXHR, textStatus, errorThrown) {
                renderMensajeError();
                $("#mensajeError").text("Se ha producido un error: " + errorThrown);
            }
        });
    });
    
    function renderAnadirMasClases() {        
        var page = $('.mensaje');
        page.removeClass('escondido');
        page.addClass('visible');
    }
    
    function renderClaseañadida() { 
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


