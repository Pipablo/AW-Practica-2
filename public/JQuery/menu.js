$(document).ready(function () {
    $("#lista #bc").click(function () {
        renderBusquedaCurso()
    });
    $("#lista #cc").click(function () {
        renderCrearCurso()
    });
    $("#buscarCurso").on("click", function () {
        renderBusquedaCurso()
    });
});

function renderCrearCurso() {
    $('.contenido .pagina').removeClass('visible');
    $('.contenido .pagina').addClass('escondido');
    var page = $('.creacionCurso');
    page.removeClass('escondido');
    page.addClass('visible');
}

function renderBusquedaCurso() {
    $('.contenido .pagina').removeClass('visible');
    $('.contenido .pagina').addClass('escondido');
    var page = $('.busquedaCurso');
    page.removeClass('escondido');
    page.addClass('visible');
}