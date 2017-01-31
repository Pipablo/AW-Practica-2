var connection = require("../Conexion");

module.exports = buscar;

function buscar(busqueda, num, pos, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            busqueda = "%" + busqueda + "%";
            var sql = "SELECT * " +
                    "FROM curso " +
                    "where curso.titulo LIKE ? " +
                    "Order by fecha_inicio asc LIMIT ?,? ;";
            conexion.query(sql, [busqueda, Number(pos), Number(num)], function (err, buscar) {
                if (!err) {
                    sql = "SELECT COUNT(curso.titulo) as tam " +
                            "FROM curso " +
                            "where curso.titulo LIKE ? " +
                            "Order by fecha_inicio asc";
                    conexion.query(sql, [busqueda], function (err, tamano) {
                        if (!err) {
                            var tam = tamano[0].tam;
                            buscar[0].tamano=tam;
                            callback(null, buscar);
                        } else {
                            callback(err);
                        }
                    });
                } else {
                    callback(err);
                }
            });
        } else {
            callback(err);
        }
    });
}