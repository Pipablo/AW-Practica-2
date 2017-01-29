var express = require("express");
var config = require("./config.js");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var ficherosEstaticos = path.join(__dirname, "public");
app.use(express.static(ficherosEstaticos));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var curso = require("./modulos/Curso");

app.listen(config.port, function () {
    console.log("Servidor iniciado en el puerto " + config.port);
});
app.get("/" ,function (request, response) {
    response.redirect("index.html");
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
            response.json(resultado);
        } else {
            response.status(400);
            response.end();
        }
    });
});

app.get("/buscarCurso", function (request, response) {
    var titulo = request.query.titulo;
    
    curso.buscar(titulo, function (err, cursos){
        if(!err){
            response.status(200);
            response.json(cursos);
        } else{
            response.status(400);
            response.end();
        }
    });
});
app.get("/leerCurso", function (request, response) {
    var id = request.query.id;
    
    curso.leer.leerDatosCurso(id, function (err, curso){
        if(!err){
            response.status(200);
            response.json(curso[0]);
        } else{
            response.status(400);
            response.end();
        }
    });
});

app.put("/modificarCurso/:titulo/:id/:descripcion/:fecha_inicio/:fecha_fin/:localidad/:direccion/:plazas_disponibles", function (request, response) {
    var id = request.params.id;
    var titulo = request.params.titulo;
    var descripcion = request.params.descripcion;
    var fecha_inicio = request.params.fecha_inicio;
    var fecha_fin = request.params.fecha_fin;
    var localidad = request.params.localidad;
    var direccion = request.params.direccion;
    var plazas_disponibles = request.params.plazas_disponibles;
    
    curso.editar(id, titulo, descripcion, fecha_inicio, fecha_fin, localidad, direccion, plazas_disponibles, function (err, resultado){
       if(!err){
           response.status(200);
           response.json(resultado);
       } else{
           response.status(400);
           response.end();
       }
    });
});