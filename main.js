
var express = require("express");
var config = require("./config.js");
var app = express();

var ficherosEstaticos = path.join(__dirname, "public");
app.use(express.static(ficherosEstaticos));

app.listen(config.port, function () {
    console.log("Servidor iniciado en el puerto " + config.port);
});

