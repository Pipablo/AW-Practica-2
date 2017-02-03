var connection = require("../Conexion");
module.exports = inscribir;

function inscribir(id_curso, id_usuario, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "insert into inscritos " +
                    "('id', 'id_curso', 'id_usuario') " +
                    "VALUES (NULL, ?, ?);";
            conexion.query(sql, [id_curso, id_usuario], function (err, resultado) {
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