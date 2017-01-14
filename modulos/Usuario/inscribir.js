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
                    "VALUES (NULL, '" + id_curso + "', '" + id_usuario + "'";
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