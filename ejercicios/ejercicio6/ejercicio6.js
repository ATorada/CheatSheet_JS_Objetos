var count = 0;

function myUrl() {
    var parrafo = document.createElement('p');
    parrafo.innerText = location.href;
    document.body.appendChild(parrafo);
}

function recargar() {
    document.getElementById("escribir").innerHTML = 'La página se recargará en 5 segundos ¡Gracias por darle al botón reload!';
    setTimeout(function () {
        location.reload();
    }, 5000)
}