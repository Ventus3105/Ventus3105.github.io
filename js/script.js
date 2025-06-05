const rutasImagenes = ['img/slider/servicio_canario_de_empleo.png', 'img/slider/Logo-Ministerio-de-trabajo.jpg', 'img/slider/oxford-exam.jpg', 'img/slider/NFORMAR.png', 'img/slider/logo-insertia-default.jpg', 'img/slider/Fundacion-Calidad-Empleo.png']
const $imagen = document.getElementById('imagen');

let indice = 0;

function siguiente(){
    indice++

    if (indice == rutasImagenes.length){
        indice = 0;
    }

    actualizaContenidoImagenes();
}

function anterior(){
    indice--

    if (indice == -1){
        indice = rutasImagenes.length-1;
    }

    actualizaContenidoImagenes()
}

function actualizaContenidoImagenes(){
    $imagen.src = rutasImagenes.at(indice);

    let textoImagenes = rutasImagenes.at(indice).split('/')[1].split('.')[0];
    $imagen.alt = textoImagenes;
}