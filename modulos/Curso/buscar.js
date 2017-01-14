var connection = require("../Conexion");

module.exports = buscar;

function buscar(busqueda, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "SELECT * " + 
                    "FROM curso " +
                    "where titulo LIKE '%" + busqueda + "%'";
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