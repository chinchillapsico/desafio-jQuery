$(document).ready(function(){
  //nueva página
  $("a").attr('target', '_blank');

  //cambiar color a rojo si es clickeado
  $("h2").click(function(){
    $( this ).css('color', 'red');
  });

  //iconos (agrega un icono de acuerdo al número del hijo de sesión)
  $("ul li:nth-child(1) a").prepend("<i class='fab fa-fw fa-facebook-f'></i>");
  $("ul li:nth-child(2) a").prepend("<i class='fab fa-fw fa-instagram'></i>");
  $("ul li:nth-child(3) a").prepend("<i class='fab fa-fw fa-twitter' ></i>");
  $("ul li:nth-child(4) a").prepend("<i class='fab fa-fw fa-pinterest'></i>");

  //link (a la segunda sesión, 4to hijo agrega el link)
  $("section:nth-child(3) ul li:nth-child(4)" ).append("<ul><li><a href='#'>link 4.a</a></li></ul>" );

  //5to elemento (a la segunda sesión, luego del 4to hijo agrega un 5to)
 $( "section:nth-child(3) ul li:nth-child(4)" ).after( "<li><a href='#'>link 5</a></li>" );

});
