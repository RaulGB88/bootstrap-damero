var escalarTablero = function () {
  // Obtiene la lista de casillas blancas
  var casillasBlancas = document.getElementsByClassName("blancas");

  // Obtiene la lista de casillas negras
  var casillasNegras = document.getElementsByClassName("negras");

  // Obtiene el ancho de una casilla
  var anchoCasilla = casillasBlancas[0].clientWidth;

  // Altura de casillas igual que ancho
  for (var i = 0; i < casillasBlancas.length; i++) {
    casillasBlancas[i].style.height = "" + anchoCasilla + "px";
    casillasNegras[i].style.height = "" + anchoCasilla + "px";
  }
};

var iniciarAplicacion = function () {
  // Define el evento de cambio de tamaño del navegador
  window.addEventListener("resize", escalarTablero);

  // Escala el tablero
  escalarTablero();
};

// Inicio de ejecución del programa
window.addEventListener("load", iniciarAplicacion);