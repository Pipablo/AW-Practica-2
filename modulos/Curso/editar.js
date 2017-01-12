var connection = require("../Conexion/getConexion");

module.exports = editar;

function editar(id, titulo, descripcion, fecha_inicio, fecha_fin, localidad, direccion, plazas_disponibles, imagen, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "update curso " +
                    "set titulo = '" + titulo + "', descripcion = '" + descripcion + "', fecha_inicio = '" + fecha_inicio + "', fecha_fin = '" + fecha_fin + "', localidad = '" + localidad + "', direccion = '" + direccion + "', plazas_disponibles = '" + plazas_disponibles + "', imagen = '" + imagen + "' " +
                    "where id = '" + id + "';";
            conexion.query(sql, function (err, resultado) {
                if (!err) {
                    callback(null, resultado);
                } else {
                    callback(err);
                }
            });
        } else {

        }
    });
}