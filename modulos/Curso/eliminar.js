var connection = require("../Conexion/getConexion");

module.exports = eliminar;

function eliminar(id, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "DELETE FROM `curso`" +
                    "WHERE `curso`.`id` = '" + id + "';";
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