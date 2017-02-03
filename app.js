var express = require("express");
var config = require("./config.js");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var multer = require("multer");
var multerFactory = multer({dest: "uploads/"});
var https = require("https");
var clavePrivada = fs.readFileSync("./" + config.private_key);
var certificado = fs.readFileSync("./" + config.certificate);



var ficherosEstaticos = path.join(__dirname, "public");
app.use(express.static(ficherosEstaticos));
app.use(bodyParser.json());


var curso = require("./modulos/Curso");

var servidor = https.createServer(
 { key: clavePrivada, cert: certificado }, app );
 
 servidor.listen(config.port, function () {
    console.log("Servidor iniciado en el puerto " + config.port);
});

app.get("/", function (request, response) {
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
    var imagen = request.body.imagen;
    curso.crear(titulo, descripcion, fecha_inicio, fecha_fin, localidad, direccion, plazas, imagen, function (err, resultado) {
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
    var num = request.query.num;
    var pos = request.query.pos;

    curso.buscar(titulo, num, pos, function (err, cursos) {
        if (!err) {
            response.status(200);
            response.json(cursos);
        } else {
            response.status(400);
            response.end();
        }
    });
});
app.get("/leerCurso", function (request, response) {
    var id = request.query.id;

    curso.leer.leerDatosCurso(id, function (err, cursoLeido) {
        if (!err) {
            curso.leer.leerHorario(id, function (err, horarios) {
                if (!err) {
                    
                    cursoLeido[0].horario = horarios;
                    response.status(200);
                    response.json(cursoLeido[0]);
                } else {
                    response.status(400);
                    response.end();
                }
            });
        } else {
            response.status(400);
            response.end();
        }
    });
});

app.put("/modificarCurso/:id", function (request, response) {
    var id = request.params.id;
    var titulo = request.body.titulo;
    var descripcion = request.body.descripcion;
    var fecha_inicio = request.body.fecha_inicio;
    var fecha_fin = request.body.fecha_fin;
    var localidad = request.body.localidad;
    var direccion = request.body.direccion;
    var plazas_disponibles = request.body.plazas_disponibles;

    curso.editar(id, titulo, descripcion, fecha_inicio, fecha_fin, localidad, direccion, plazas_disponibles, null, function (err, resultado) {
        if (!err) {
            response.status(200);
            response.json(resultado);
        } else {
            response.status(400);
            response.end();
        }
    });
});

app.put("/insertarHorario/:id", function (request, response) {
    var id = request.params.id;
    var dia = request.body.dia;
    var hora_inicio = request.body.hora_inicio;
    var hora_fin = request.body.hora_fin;

    curso.anadirHorario(id, dia, hora_inicio, hora_fin, function (err, resultado) {
        if (!err) {
            response.status(200);
            response.json(resultado);
        } else {
            response.status(500);
            response.end();
        }
    });
});

app.delete("/eliminarCurso/:id", function (request, response) {
    var id = request.params.id;


    curso.eliminar(id, function (err, resultado) {
        if (!err) {
            response.status(200);
            response.json(resultado);
        } else {
            response.status(500);
            response.end();
        }
    });
});

app.put("/insertarImagen/:id", multerFactory.single("imagen"),function (request, response){
   var id = request.params.id;
   var img=  request.file;
   var urlFichero = null; // URL del fichero dentro del servidor
   if(img){
                if (!fs.existsSync("./public/img/")) {
                    fs.mkdirSync("./public/img/");
                }
                if (!fs.existsSync("./public/img/cursos/")) {
                    fs.mkdirSync("./public/img/cursos/");
                }
                urlFichero = "img/cursos/" + img.filename;
                // Nombre del fichero destino
                var fichDestino = path.join("public", urlFichero);
                // Realizamos la copia
                fs.createReadStream(img.path)
                        .pipe(fs.createWriteStream(fichDestino));
            
   
   curso.modificarFoto(id, urlFichero, function (err, resultado){
        if (!err) {
            response.status(200);
            response.end();
            
        } else {
            response.status(500);
            response.end();
        }
   });
   }
   else{
       response.status(200);
       response.end();
            
   }
});
