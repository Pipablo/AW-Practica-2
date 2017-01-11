var connection = require("../Conexion/getConexion");

module.exports = editar;

function editar(partida, numeroCambiosTurno, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
        }
    });
};