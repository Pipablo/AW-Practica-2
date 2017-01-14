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
                    "WHERE table_schema = ' " + config.dbName + "' " +
                    "AND table_name = '" + nombre + "' " +
                    "LIMIT 1;";
            conexion.query(sql, function () {

                if (err) {
                    sql = "CREATE TABLE `" + config.dbName + "`.horarios_'" + nombre + "' " +
                            "(`id` INT NOT NULL AUTO_INCREMENT , `id_curso` INT NOT NULL , `dia` INT NOT NULL , `hora_inicio` INT NOT NULL , `hora_fin` INT NOT NULL , PRIMARY KEY (`id`)) " +
                            "ENGINE = InnoDB;";

                    conexion.query(sql, function (err, resultado) {
                        if (!err) {
                            sql = "insert into horarios_'" + nombre + "' " +
                                    "VALUES(id, dia, hora_inicio, hora_fin) " +
                                    "(NULL, '" + dia + "', '" + hora_inicio + "', '" + hora_fin + "';";

                            conexion.query(sql, function (err, resultado) {
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
                    sql = "insert into horarios_'" + nombre + "' " +
                            "VALUES(id, dia, hora_inicio, hora_fin) " +
                            "(NULL, '" + dia + "', '" + hora_inicio + "', '" + hora_fin + "';";

                    conexion.query(sql, function (err, resultado) {
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
