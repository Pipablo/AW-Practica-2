var connection = require("../Conexion");

module.exports = modificarFoto;

function modificarFoto(id, imagen, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "update curso " +
                    "set imagen = " + imagen +
                    "where id = " + id;
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