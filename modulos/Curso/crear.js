var connection = require("../Conexion/getConexion");
var config = require("../../config.js");

module.exports = crear;

function crear(titulo, descripcion, fecha_inicio, fecha_fin, localidad, direccion, plazas_disponibles, imagen, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "INSERT INTO `curso` " +
                    "(`id`, `titulo`, `descripcion`, `fecha_inicio`, `fecha_fin`, `localidad`, `direccion`, `plazas_disponibles`, `imagen`) " +
                    "VALUES (NULL, '" + titulo + "', '" + descripcion + "', '" + fecha_inicio + "', '" + fecha_fin + "', '" + localidad + "', '" + direccion + "', '" + plazas_disponibles + "', " + imagen + ");";
            conexion.query(sql, function (err, resultado) {
                if (!err) {
                    callback(null, resultado[0].id);
                } else {
                    callback(err);
                }
            });

        }
    });
}
;

