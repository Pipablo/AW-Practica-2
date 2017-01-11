var connection = require("../Conexion/getConexion");
var config = require("../../config.js");

module.exports = crear;

function crear(partida, numeroCambiosTurno, callback) {
    var conexion = connection.getConexion();
    if (callback === undefined) {
        callback = function () {};
    }

    conexion.connect(function (err) {
        if (!err) {
            sql = "CREATE TABLE `" + config.dbName + "`. " + 
                  "( `id` INT NOT NULL AUTO_INCREMENT , `id_curso` INT NOT NULL , `dia` INT NOT NULL , `hora_inicio` INT NOT NULL , `hora_fin` INT NOT NULL , PRIMARY KEY (`id`)) " + 
                  "ENGINE = InnoDB;";
        }
    });
};

