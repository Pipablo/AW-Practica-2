var connection = require("../Conexion");
module.exports = eliminar;

function eliminar(id, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "DELETE FROM `curso`" +
                    "WHERE `curso`.`id` = ?;";
            conexion.query(sql, [id], function (err, resultado) {
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