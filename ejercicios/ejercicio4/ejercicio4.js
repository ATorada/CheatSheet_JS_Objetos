var numeroPaginas = history.length;
var count = numeroPaginas;

function volverAtras() {
  history.back();
}

function irAdelante() {
  history.forward();
}

function volverPrincipio() {
  history.go(numeroPaginas * -1);
}

function irFinal() {
  history.go(numeroPaginas);
}
