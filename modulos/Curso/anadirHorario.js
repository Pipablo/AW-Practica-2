var connection = require("../Conexion");
var config = require("../../config.js");

module.exports = anadirHorario;

function anadirHorario(nombre, dia, hora_inicio, hora_fin, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "SELECT *" +
                    "FROM information_schema.tables " +
                    "WHERE table_schema = ? " +
                    "AND table_name = ? " +
                    "LIMIT 1;";
            conexion.query(sql, [config.dbName, nombre], function () {

                if (err) {
                    sql = "CREATE TABLE ?.horarios_? " +
                            "(`id` INT NOT NULL AUTO_INCREMENT , `id_curso` INT NOT NULL , `dia` INT NOT NULL , `hora_inicio` INT NOT NULL , `hora_fin` INT NOT NULL , PRIMARY KEY (`id`)) " +
                            "ENGINE = InnoDB;";

                    conexion.query(sql, [config.dbName, nombre], function (err, resultado) {
                        if (!err) {
                            sql = "insert into horarios_? " +
                                    "VALUES(id, dia, hora_inicio, hora_fin) " +
                                    "(NULL, ?, ?, ?;";

                            conexion.query(sql, [nombre, dia, hora_inicio, hora_fin], function (err, resultado) {
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

                    conexion.query(sql, [nombre, dia, hora_inicio, hora_fin], function (err, resultado) {
                        if (!err) {
                            callback(null, resultado);
                        } else {
                            callback(err);
                        }
                    });
                }
            });
        }
    });
}
;
