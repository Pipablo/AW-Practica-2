$(document).ready(function () {
        $("#botonModificarCurso").click(function () {
            var titulo_curso = $("#Modtitulo").val();
            var descripcion = $("#Moddescripcion").val();
            var fecha_inicio = $("#Modfecha_inicio").val();
            var fecha_fin = $("#Modfecha_fin").val();
            var localidad = $("#Modlocalidad").val();
            var direccion = $("#Moddireccion").val();
            var plazas_disponibles = $("#Modplazas").val();
            var id = $("#ModID").val();

            $.ajax({
                type: "PUT",

                url: "/modificarCurso/:" + titulo_curso + "/:" + id + "/:" + descripcion + "/:" + fecha_inicio + "/:" + fecha_fin + "/:" + localidad + "/:" + direccion + "/:" + plazas_disponibles,

                success: function (data, textStatus, jqXHR) {
                    console.log("Se ha modificado correctamente");
                },

                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("Se ha producido un error: " + errorThrown);
                }


            });
    });

   
});
