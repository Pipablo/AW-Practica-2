var connection = require("../Conexion");
module.exports = leer;

function leer(id_usuario, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "select titulo, localidad, fecha_inicio, fecha_fin " + 
                    "from curso, inscritos, usuarios " +
                    "where curso.id = inscritos.id_curso and inscritos.id_usuario = usuarios.id and usuario.id = '" + id_usuario + "';";
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