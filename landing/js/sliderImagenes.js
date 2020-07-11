$(document).ready(function(){
    //tomo las tres imagenes
    const img1 = document.querySelector('#img1');

    var cont = 0;
    //guardo la ruta de esas imagenes
    // const imagenesUsar = [img1.getAttribute('src'), img2.getAttribute('src'), img3.getAttribute('src')];
    const imagenesUsar = ['img/sala1.png','img/hab2.jpg','img/hab3.jpg'];

    var izq = document.querySelector('.ir-izquierda'); 
    var der = document.querySelector('.ir-derecha'); 

    var radio1 = document.querySelector('#botonImagen1');
    var radio2 = document.querySelector('#botonImagen2');
    var radio3 = document.querySelector('#botonImagen3');

    radio1.classList.add('posicionRadios');
    
    izq.addEventListener('click', function() {
        let imagenPrincipal = $('#img1').attr('src');
    
        if(imagenPrincipal == imagenesUsar[0]){
            radio3.classList.add('posicionRadios');
            radio2.classList.remove('posicionRadios');
            radio1.classList.remove('posicionRadios');
        }else if(imagenPrincipal == imagenesUsar[1]){
            radio1.classList.add('posicionRadios');
            radio2.classList.remove('posicionRadios');
            radio3.classList.remove('posicionRadios');
        }else if(imagenPrincipal == imagenesUsar[2]){
            radio2.classList.add('posicionRadios');
            radio3.classList.remove('posicionRadios');
            radio1.classList.remove('posicionRadios');
        }

        if(cont > 0){
            img1.src = imagenesUsar[cont-1];
            cont--;
        }else{
            img1.src = imagenesUsar[imagenesUsar.length - 1];
            cont = imagenesUsar.length - 1;
        }  
    })

    der.addEventListener('click', function() {
        let imagenPrincipal = $('#img1').attr('src');

        if(imagenPrincipal == imagenesUsar[0]){
            radio2.classList.add('posicionRadios');
            radio1.classList.remove('posicionRadios');
            radio3.classList.remove('posicionRadios');
        }else if(imagenPrincipal == imagenesUsar[1]){
            radio3.classList.add('posicionRadios');
            radio1.classList.remove('posicionRadios');
            radio2.classList.remove('posicionRadios');
        }else if(imagenPrincipal == imagenesUsar[2]){
            radio1.classList.add('posicionRadios');
            radio2.classList.remove('posicionRadios');
            radio3.classList.remove('posicionRadios');
        }

        if(cont < (imagenesUsar.length-1)){
            img1.src = imagenesUsar[cont+1];
            cont++;
        }else{
            img1.src = imagenesUsar[0];
            cont = 0;
        }
    })

})
