var connection = require("../Conexion");

module.exports = buscar;

function buscar(busqueda, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            busqueda = "%" + busqueda + "%";
            var sql = "SELECT * " +
                    "FROM curso " +
                    "where curso.titulo LIKE ?;";
            conexion.query(sql, [busqueda], function (err, resultado) {
                if (!err) {
                    callback(null, resultado);
                } else {
                    callback(err);
                }
            });
        } else {
            callback(err);
        }
    });
}