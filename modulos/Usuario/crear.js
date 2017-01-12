var connection = require("../Conexion/getConexion");

module.exports = crear;

function crear(nombre, apellidos, correo, contraseña, sexo, fecha_nacimiento, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "insert into usuarios " +
                    "(`id`, `nombre`, `apellidos`, `correo`, `contraseña`, `sexo`, `fecha_nacimiento`) " +
                    "VALUES (NULL, '" + nombre + "', '" + apellidos + "', '" + correo + "', '" + contraseña + "', '" + sexo + "', '" + fecha_nacimiento + "');";
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