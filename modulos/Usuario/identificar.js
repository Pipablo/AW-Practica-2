var connection = require("../Conexion");

module.exports = identificar;

function identificar(partida, numeroCambiosTurno, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "";
            conexion.query(sql, function (err, resultado) {
                if (!err) {
                    callback(null, resultado);
                } else {
                    callback(err);
                }
                conexion.end();
            });
        } else {
            callback(err);
        }
    });
}