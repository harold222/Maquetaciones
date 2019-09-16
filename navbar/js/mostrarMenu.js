function accion(){
    var as = document.getElementsByClassName('nav-enlace'); /* Tomo el nombre de esas etiquetas a */
    for (let i = 0; i < as.length; i++) {
        as[i].classList.toggle('desaparece'); /* Si tiene esta clase la elimina*/
    }
}