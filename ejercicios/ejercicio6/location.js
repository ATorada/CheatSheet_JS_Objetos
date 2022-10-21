var count = 0;

function myUrl(){
    var parrafo = document.createElement('p');
    parrafo.innerText = location.href;
    document.body.appendChild(parrafo);
  
    /*document.open();
document.write(location.href);

document.close();
    location.host;*/
}

function recargar(){
    location.reload();
    count ++;
    document.getElementById("escribir").innerHTML = 'Estas recargando la página con el boton reload';
}