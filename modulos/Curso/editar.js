var connection = require("../Conexion");
module.exports = editar;

function editar(id, titulo, descripcion, fecha_inicio, fecha_fin, localidad, direccion, plazas_disponibles, imagen, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "update curso " +
                    "set titulo = ?, descripcion = ?, fecha_inicio = ?, fecha_fin = ?, localidad = ?, direccion = ?, plazas_disponibles = ?, imagen = ? " +
                    "where id = ?;";
            conexion.query(sql, [titulo, descripcion, fecha_inicio, fecha_fin, localidad, direccion, plazas_disponibles, imagen, id], function (err, resultado) {
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