eventos();
    
function eventos() { 
    // AL cargar la web tomo cada input
    document.addEventListener('DOMContentLoaded', iniciar);
}


function iniciar() {    
    //tomo las variables del formulario
    const nombre = document.querySelector('#nombreFormulario');
    const telefono = document.querySelector('#telefonoFormulario');
    const correo = document.querySelector('#correoFormulario');
    const selector = document.querySelector('#selector');
    const terminos = document.querySelector('#terminos');

    const boton = document.querySelector('#envioFormulario');

    boton.addEventListener('click', function(e){
        if(nombre.value != "" && telefono.value != "" && correo.value != ""){
            if(!terminos.checked){
                e.preventDefault();
                document.querySelector('#alertaLlenarForm').style.display = "block";
                document.querySelector('#alertaLlenarForm').innerHTML="Debe aceptar los terminos";
                return false;   
            }
        }else{ 
            e.preventDefault();
            document.querySelector('#alertaLlenarForm').style.display = "block";
            return false;
        }
    });

    nombre.addEventListener('blur', validarInput);
    telefono.addEventListener('blur', validarInput);
    correo.addEventListener('blur', validarInput);

    //obtengo el valor del select para enviar
    selector.addEventListener('change', function(){
            var selectedOption = this.options[selector.selectedIndex];
            console.log(selectedOption.value + '- ' + selectedOption.text);
        }
    );

}
//funcion que valida que el campo tenga algo escrito
function validarInput() {
    //con this envio el input
    longitudActual(this);
    // Si esta validando el correo
    if(this.type == 'email'){
        validarCorreo(this);
    }
}

function longitudActual(input) {
    // Compruebo si tiene algo escrito el campo
    if(input.value.length > 0){
        input.style.borderBottomColor = 'green';
    }else{
        input.style.borderBottomColor = 'red';
    }
}

function validarCorreo(campo) {
    var msm = campo.value;
    // Busco si el email introducido tiene una arroba y lo determina el index
    if(msm.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
    }else{
        campo.style.borderBottomColor = 'red';
    }
}

