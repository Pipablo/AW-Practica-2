var connection = require("../Conexion");
var config = require("../../config.js");

module.exports = {
    leerDatosCurso: leerDatosCurso,
    leerHorario: leerHorario,
    leerPlazasRestantes: leerPlazasRestantes
};

function leerDatosCurso(id, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "select * " +
                    "from curso " +
                    "where id = ?;";
            conexion.query(sql, [id], function (err, resultado) {
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

function leerHorario(id_curso, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var nombreTabla = `horarios_` + id_curso;
            var sql = "SELECT * " +
                    "FROM information_schema.tables " +
                    "WHERE table_schema = ? " +
                    "AND table_name = ? " +
                    "LIMIT 1;";
            conexion.query(sql, [config.dbName, nombreTabla], function (err, resultado) {
                if (!err) {
                    if (resultado.length !== 0) {
                        var sql = "select dia, hora_inicio, hora_fin " +
                                "from horarios_" + id_curso;
                        conexion.query(sql, [id_curso], function (err, resultado) {
                            if (!err) {
                                callback(null, resultado);
                            } else {
                                callback(err);
                            }
                            conexion.end();
                        });
                    } else {
                        callback(null, []);
                    }
                } else {
                    callback(err);
                }
            });
        } else {
            callback();
        }
    });
}

function leerPlazasRestantes(callback) {
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