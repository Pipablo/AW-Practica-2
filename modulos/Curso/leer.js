var connection = require("../Conexion");

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
                    "where id = '" + id + "';";
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

function leerHorario(id_curso, titulo, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "select * " +
                    "from horarios_'" + titulo +"' " +
                    "where id_curso = '" + id_curso +"';";
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
            });
        } else {

        }
    });
}