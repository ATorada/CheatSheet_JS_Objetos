

function crearEnlaces() {

    var enlaces = document.links;
    var cantidadEnlaces = enlaces.length;

    for (let i = 0; i < cantidadEnlaces; i++) {
        let a = document.createElement('a');
        a.href = enlaces[i];
        a.innerText = enlaces[i];
        let br = document.createElement('br');
        document.body.appendChild(a);
        document.body.appendChild(br);
    }

}


function aparecerEnlaces() {

    var enlaces = document.links;
    var cantidadEnlaces = enlaces.length;

    for (let i = 0; i < cantidadEnlaces; i++) {
        let a = document.getElementsByTagName('a')[i];
        a.innerText = enlaces[i];
    }

}