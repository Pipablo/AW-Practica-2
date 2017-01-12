$(document).ready(function (){
    $("#lista #bc").click(function(){
    	renderBusquedaCurso()
    });
    $("#lista #cc").click(function(){
    	renderCrearCurso()
    });
    
});


function renderCrearCurso(){
	$('.contenido .pagina').removeClass('visible');
	$('.contenido .pagina').addClass('escondido');
    var page = $('.creacionCurso');
    page.addClass('visible');
  }

function renderBusquedaCurso(){
	$('.contenido .pagina').removeClass('visible');
	$('.contenido .pagina').addClass('escondido');
    var page = $('.busquedaCurso');
    page.addClass('visible');
  }