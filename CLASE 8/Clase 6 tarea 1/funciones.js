function obtenerMayorNumero(numeros) {

    let mayorNumero=numeros[0];

    for(let i=1;i<numeros.length;i++) {
        if(numeros[i]>mayorNumero) {
            mayorNumero=numeros[i];
        }
    }
    return (mayorNumero);
}

function obtenerMenorNumero(numeros) {

    let menorNumero=numeros[0];

    for(let i=1;i<numeros.length;i++) {
        if(numeros[i]<menorNumero) {
            menorNumero=numeros[i];
        }
    }
    return (menorNumero);

}

function promedio(numeros) {

    let suma=0;

    for(let i=0;i<numeros.length;i++) {
        suma+=numeros[i];

    }
    return ((suma/numeros.length).toFixed(2))
}


function pruebaValidarMiembros() {

    console.assert(validarMiembros(-1)==="la cantidad de integrantes no puede ser negativa",
    "no se pudo validar si la cantidad de integrantes es negativa");
    
    console.assert(validarMiembros("-")==="solo puede introducir numeros",
    "no se pudo validar si se introdujo solo numeros");

    console.assert(validarMiembros(0)==="la cantidad de integrantes no puede ser nula",
    "no se pudo validar si la cantidad de miembros es nula");

    console.assert(validarMiembros(3)==="",
    "no se pudo validar si es correcto el numero de miembros")
}

function pruebaValidarEdades() {
    const errores=validarEdades([-1,1]);

    console.assert(errores.integrante1==="el valor introducido es incorrecto, debe ingresar un valor numerico positivo entre 1 y 2 caracteres",
    "validarEdades no funciono")
}


pruebaValidarMiembros();
pruebaValidarEdades();






