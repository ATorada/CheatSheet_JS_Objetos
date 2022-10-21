var enlaces = document.links;

function guardarEnlaces() {


document.open();
document.write('<p>yo soy tu hijo.</p>');
for (var i = 0; i < enlaces.length; i++){
document.write('<p>' + document.links[i] + '</p>');
}
document.write('<p>yo soy tu hijo.</p>');
document.close();
}