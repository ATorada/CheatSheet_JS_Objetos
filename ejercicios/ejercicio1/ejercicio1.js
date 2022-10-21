function comprobarNavegador() {
    let datos = navigator.userAgent;

    let div = document.createElement('div');
    div.style.textAlign = 'center';

    let img = document.createElement('img');
    img.style.width = '450px';
    img.style.height = '400px';

    let p = document.createElement('p');

    if (datos.match("Firefox")) {
        img.src = 'img/zorro.jpg';

        let p = document.createElement('p');
        p.innerText = "¡Es Firefox!";

        div.appendChild(p);
        div.appendChild(img);

    } else if (datos.match("Chrome")) {
        img.src = 'img/chrome.png';

        p.innerText = "¡Es Chrome!";

        div.appendChild(p);
        div.appendChild(img);

    } else {
        p.innerText = "Este navegador no lo usa nadie";
        div.appendChild(p);
        if (navigator.onLine) {
            let firefox = document.createElement('a');

            firefox.innerHTML = "Descarga firefox";
            firefox.href = "https://www.mozilla.org/es-ES/firefox/new/";

            let chrome = document.createElement('a');

            chrome.innerHTML = "Descarga chrome";
            chrome.href = "https://www.google.com/intl/es_es/chrome/";

            div.appendChild(firefox);
            div.appendChild(document.createElement('br'));
            div.appendChild(chrome);
        } else {
            let p = document.createElement('p');
            p.innerText = "Se necesita internet para descargar un navegador decente";
            div.appendChild(p);
        }
    }
    document.body.appendChild(div);
}