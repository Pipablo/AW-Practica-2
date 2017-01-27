$(document).ready(function () {
    $("#buscarCurso").click(function (){
        var titulo_curso = $("#busquedaTitulo").val();
        $.ajax({
            type:"GET",
            data: {
                titulo: titulo_curso
            },
            url:"/buscarCurso",
            
            success: function(data, textStatus, jqXHR){
               data.forEach(function (curso){
                   $("#tabla_busqueda").append(
                           $("<tr>").append($("<td>").text(curso.titulo), $("<td>").text(curso.localidad), $("<td>").text(curso.fecha_inicio), $("<td>").text(curso.fecha_fin), $("<td>").text(curso.plazas_disponibles)));
               }); 
            },
            
            error: function(jqXHR, textStatus, errorThrown){
               console.log("Se ha producido un error: " + errorThrown);
            }
               
            
        });
    });
});
