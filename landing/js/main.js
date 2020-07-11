$(document).ready(function(){
    // seleccion boton preguntas frecuentes para mosstrar mas contenido

    var btn1 = document.querySelector('#btn1');
    var btn2 = document.querySelector('#btn2');
    var btn3 = document.querySelector('#btn3');
    var btn4 = document.querySelector('#btn4');
    var btn5 = document.querySelector('#btn5');

    var menu1 = document.querySelector('#drop-menu');
    var menu2 = document.querySelector('#drop-menu2');
    var menu3 = document.querySelector('#drop-menu3');
    var menu4 = document.querySelector('#drop-menu4');
    var menu5 = document.querySelector('#drop-menu5');
    var menu6 = document.querySelector('#drop-menu6');

    btn1.addEventListener('click', function(){
        if(menu1.style.display === "none")menu1.style.display = "block";
        else menu1.style.display = "none";
    });
    btn2.addEventListener('click', function(){
        if(menu2.style.display === "none")menu2.style.display = "block";
        else menu2.style.display = "none";
    });
    btn3.addEventListener('click', function(){
        if(menu3.style.display === "none")menu3.style.display = "block";
        else menu3.style.display = "none";
    });
    btn4.addEventListener('click', function(){
        if(menu4.style.display === "none")menu4.style.display = "block";
        else menu4.style.display = "none";
    });
    btn5.addEventListener('click', function(){
        if(menu5.style.display === "none")menu5.style.display = "block";
        else menu5.style.display = "none";
    });
    btn6.addEventListener('click', function(){
        if(menu6.style.display === "none")menu6.style.display = "block";
        else menu6.style.display = "none";
    });


 });

