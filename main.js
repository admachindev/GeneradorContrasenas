let cantidad = document.getElementById ('cantidad');
let boton = document.getElementById ('generar');
let contrasena = document.getElementById ('contrasena');
let mensajeSeguridad = document.getElementById ('mensajeSeguridad');

const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()';

//FUNCION PARA CREAR LA CONTRASEÑA
function generar (){                                        
    let numeroDigitado = parseInt(cantidad.value);
    let password = '';

    if (numeroDigitado < 8 ||numeroDigitado > 15){
        alert("La cantidad de caracteres tiene que ser superior a 8 e inferior de 15.");
        return;
    }
    for (i =    0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random ()* cadenaCaracteres.length)] ;
        password += caracterAleatorio;  
    }
    contrasena.value = password;
}
//FUNCION QUE LIMPIA EL CAMPO PARA GENERAR NUEVA CONTRASEÑA
function limpiar(){
    contrasena.value = '';
    mensajeSeguridad.textContent ='';
}
//FUNCION QUE VALIDA LA SEGURIDAD DE LA CONTRASEÑA
function verificar(password){
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneCaracter = /[!@#$%^&*()]/.test(password);

    if(tieneMayuscula || tieneCaracter || tieneMinuscula || tieneNumero){
        alert("Está contraseña es segura.");
    } else{
        alert("Está contraseña no es segura, debe incluir letras minúsculas, mayúsculas, números y caracteres especiales.");
    }
}