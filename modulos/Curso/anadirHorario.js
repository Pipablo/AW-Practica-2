var connection = require("../Conexion");
var config = require("../../config.js");

module.exports = anadirHorario;

function anadirHorario(id, dia, hora_inicio, hora_fin, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "SELECT *" +
                    "FROM information_schema.tables " +
                    "WHERE table_schema = ? " +
                    "AND table_name = horarios_? " +
                    "LIMIT 1;";
            conexion.query(sql, [config.dbName, id], function (err, resultado) {
                if (!err) {
                    if (resultado.length === 0) {
                        var nombreTabla = "horarios_" + id;
                        sql = "CREATE TABLE `aw - practica2`.`horarios_XXXXX` " +
                                "(`id` INT NOT NULL AUTO_INCREMENT , `dia` VARCHAR(10) NOT NULL , `hora_inicio` VARCHAR(5) NOT NULL , `hora_fin` VARCHAR(5) NOT NULL , PRIMARY KEY (`id`)) " +
                                "ENGINE = InnoDB;";

                        conexion.query(sql, /*[config.dbName, nombreTabla], */function (err, resultado) {
                            if (!err) {
                                sql = "insert into `horarios_XXXXX` " +
                                        "(id, dia, hora_inicio, hora_fin) " +
                                        "VALUES (NULL, ?, ?, ?);";

                                conexion.query(sql, [id, dia, hora_inicio, hora_fin], function (err, resultado) {
                                    if (!err) {
                                        callback(null, resultado);
                                    } else {
                                        callback(err);
                                    }
                                });
                            } else {
                                callback(err);
                            }
                        });
                    } else {
                        sql = "insert into horarios_? " +
                                "VALUES(id, dia, hora_inicio, hora_fin) " +
                                "(NULL, ?, ?, ?;";

                        conexion.query(sql, [id, dia, hora_inicio, hora_fin], function (err, resultado) {
                            if (!err) {
                                callback(null, resultado);
                            } else {
                                callback(err);
                            }
                        });
                    }
                } else {
                    callback(err);
                }
            });
        }
    });
}
