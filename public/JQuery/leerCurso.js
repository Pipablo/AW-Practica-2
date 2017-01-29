$(document).ready(function () {
    $("#tabla_busqueda").on("click",".leerCurso",function (){
        var id_curso = $(this).data('id');
        $.ajax({
            type:"GET",
            data: {
                id: id_curso
            },
            url:"/leerCurso",
            
            success: function(data, textStatus, jqXHR){
            	 $("#infoCursoTitulo").text(data.titulo);
            	 $("#infoCursoLocalidad").text(data.localidad);
            	 $("#infoCursoDireccion").text(data.direccion);
            	 $("#infoCursoDescripcion").text(data.descripcion);
            },
            
            error: function(jqXHR, textStatus, errorThrown){
               console.log("Se ha producido un error: " + errorThrown);
            }
               
            
        });
    });
});