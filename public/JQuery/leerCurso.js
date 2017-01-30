$(document).ready(function () {
    var curso;
    $("#tabla_busqueda").on("click", ".leerCurso", function () {
        var id_curso = $(this).data('id');
        $.ajax({
            type: "GET",
            data: {
                id: id_curso
            },
            url: "/leerCurso",

            success: function (data, textStatus, jqXHR) {
                $("#infoCursoID").text(id_curso);
                $("#infoCursoTitulo").text(data.titulo);
                $("#infoCursoDescripcion").text(data.descripcion);
                $("#infoCursoLocalidad").text(data.localidad);
                $("#infoCursoDireccion").text(data.direccion);
                $("#infoCursoFecha_inicio").text(data.fecha_inicio);
                $("#infoCursoFecha_fin").text(data.fecha_fin);
                $("#infoCursoPlazas").text(data.plazas_disponibles);

                curso = data;
            },

            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Se ha producido un error: " + errorThrown);
            }


        });
    });

    $("#modificar").click(function () {
        $('#infoCurso').modal('toggle');
        renderModificarCurso();
        $("#ModID").val(curso.id);
        $("#Modtitulo").val(curso.titulo);
        $("#Moddescripcion").val(curso.descripcion);
        $("#Modfecha_inicio").val(curso.fecha_inicio);
        $("#Modfecha_fin").val(curso.fecha_fin);
        $("#Modlocalidad").val(curso.localidad);
        $("#Moddireccion").val(curso.direccion);
        $("#Modplazas").val(curso.plazas_disponibles);
    });

    $("#eliminar").click(function () {
        $('#infoCurso').modal('toggle');
        var id = curso.id;
        
        $.ajax({
            type: 'DELETE',
            dataType: 'json',
            contentType: 'application/json',
            
            url: "/eliminarCurso/" + id,
            
            success: function (data, textStatus, jqXHR) {
                
            },
            
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Se ha producido un error " + errorThrown)
            },
        });
    });
    function renderModificarCurso() {
        $('.contenido .pagina').removeClass('visible');
        $('.contenido .pagina').addClass('escondido');
        var page = $('.modificacionCurso');
        page.removeClass('escondido');
        page.addClass('visible');
    }
});