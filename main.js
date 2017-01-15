var express = require("express");
var config = require("./config.js");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var ficherosEstaticos = path.join(__dirname, "public");
app.use(express.static(ficherosEstaticos));
app.use(bodyParser.json());


var curso = require("./modulos/Curso");

app.listen(config.port, function () {
    console.log("Servidor iniciado en el puerto " + config.port);
});
app.get("/", function (req, resp) {
    resp.redirect("HTML_Bienvenido_Practica2.html");
});

app.post("/crearCurso", function (request, response) {
    var titulo = request.body.titulo;
    var descripcion = request.body.descripcion;
    var fecha_inicio = request.body.fecha_inicio;
    var fecha_fin = request.body.fecha_fin;
    var localidad = request.body.localidad;
    var direccion = request.body.direccion;
    var plazas = request.body.plazas;
    curso.crear(titulo, descripcion, fecha_inicio, fecha_fin, localidad, direccion, plazas, null, function (err, resultado) {
        if (!err) {
            response.status(200);
            response.json({resultado: resultado});
            response.end();
        } else {
            response.status(400);
            response.end();
        }
    });
});

app.post("/buscarCurso", function (request, response) {
    var titulo = request.body.titulo;
    
    curso.buscar(titulo, function (err, resultado){
        if(!err){
             response.status(200);
            response.json({resultado: resultado});
            response.end();
        } else{
            response.status(400);
            response.end();
        }
    });
});