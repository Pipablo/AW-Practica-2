var connection = require("../Conexion/getConexion");
var config = require("../../config.js");

module.exports = anadirHorario;

function anadirHorario(nombre, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            var sql = "CREATE TABLE `" + config.dbName + "`.'" + nombre + "' " +
                    "(`id` INT NOT NULL AUTO_INCREMENT , `id_curso` INT NOT NULL , `dia` INT NOT NULL , `hora_inicio` INT NOT NULL , `hora_fin` INT NOT NULL , PRIMARY KEY (`id`)) " +
                    "ENGINE = InnoDB;";
            
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
;
