var connection = require("../Conexion");


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
                    "VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?);";
            conexion.query(sql, [titulo, descripcion, fecha_inicio, fecha_fin, localidad, direccion, plazas_disponibles, imagen], function (err, resultado) {
                if (!err) {
                    callback(null, resultado.insertId);
                } else {
                    callback(err);
                }
                conexion.end();
            });

        }
    });
}

