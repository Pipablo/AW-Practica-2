$(document).ready(function () {
    $("#crearCurso").on("click", function () {
        var id;

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
                plazas: plazas,
                
            }),

            success: function (data, textStatus, jqXHR) {
                renderMensaje();
                $("#mensaje").text(
                        "Se ha creado el curso " + data + " correctamente");
                id = data;
            },

            error: function (jqXHR, textStatus, errorThrown) {
                renderMensajeError();
                $("#mensajeError").text("Se ha producido un error: " + errorThrown);
            }

        });
         
       if($("#imagenCurso").val() !== undefined){

  
  var myFormData = new FormData($("#formularioCreacion")[0]);


        $.ajax({
            type: 'PUT',
            processData: false,
            contentType: false,
            data: myFormData,
            

            url: "/insertarImagen/" + id ,

            success: function (data, textStatus, jqXHR) {
                
                $("#mensaje").text("Imagen añadida con éxito");
            },

            error: function (jqXHR, textStatus, errorThrown) {
                renderMensajeError();
                $("#mensajeError").text("Se ha producido un error: " + errorThrown);
            }
        });
    }
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


