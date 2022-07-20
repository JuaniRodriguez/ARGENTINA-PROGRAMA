
const $integrantes=document.querySelector("#integrantes");
const $calcular=document.querySelector("#calcular");
const $analisis=document.querySelector("#analisis");


function validarMiembros(miembro) {
    if(Math.sign(miembro)==-1) {
       return "la cantidad de integrantes no puede ser negativa";
    }
    if(!/[0-9]/.test(miembro)) {
        return "solo puede introducir numeros"
    }
    if(miembro==0) {
        return "la cantidad de integrantes no puede ser nula";
    }
    
    return ""; 
    
}

function validarEdades(edades) {

    let errores= {};

    for(i=0;i<edades.length;i++) {
        if(!/^[0-9]{1,2}$/.test(edades[i])) {
        let error="el valor introducido es incorrecto, debe ingresar un valor numerico positivo entre 1 y 2 caracteres";

        errores[`Integrante${i+1}`]=error; 

        }
    }   
     
    return errores;  
}

function manejarErroresEdades(errores) {

    const keys=Object.keys(errores);
    let contadorErrores=0;

    keys.forEach(function(key) {
        const error=errores[key]; 
        if(error) {
            const $errores=document.querySelector("#errores");
            const $lista=document.createElement("li");
            $lista.textContent=error;
            $lista.className="errorEdad";
            $errores.appendChild($lista);
            
            contadorErrores++;
        }

    })
            return contadorErrores;
}

function eliminarErroresEdades() {

    const $seleccion=document.querySelectorAll(".errorEdad");
    for(error of $seleccion) {
        error.remove();
    }
}
    

document.querySelector("#continuar").onclick=function (event) {     

    eliminarErroresIntegrantes();
    eliminarIntegrantes();
    eliminarErroresEdades();

    let cantidad=document.querySelector("#miembros").value;

    const errorMiembros=validarMiembros(cantidad);

    if(errorMiembros==="") {
   
        for(i=1;i<=cantidad;i++) {
            $contenedor=document.createElement("div");
            $contenedor.className="contenedor"; 
            $label=document.createElement("label");
            $label.innerHTML=` Edad integrante ${i}`; 
            $input=document.createElement("input");
            $input.setAttribute("type","number");
            $input.className="edades";  
            
            $label.appendChild($input);
            $contenedor.appendChild($label);
            $integrantes.appendChild($contenedor);
            
        }

        $calcular.classList.remove("oculto");

    } else {
        manejarErroresIntegrantes(errorMiembros);
    }
        event.preventDefault();
}



$calcular.onclick=function(event) { 

    eliminarErroresEdades();                   
    const $seleccion=document.querySelectorAll(".edades");
    const edades=[];

    for(let i=0;i<$seleccion.length;i++) {
        edades.push(Number($seleccion[i].value));
    }

    const validacionEdades=validarEdades(edades);

    if(manejarErroresEdades(validacionEdades)===0) {
        document.querySelector("#mayor").value=obtenerMayorNumero(edades);
        document.querySelector("#menor").value=obtenerMenorNumero(edades);
        document.querySelector("#promedio").value=promedio(edades);

        $analisis.classList.remove("oculto");

    }
   
    event.preventDefault();

}

function eliminarIntegrantes() {

    const $contenedores=document.querySelectorAll(".contenedor");

    for(let i=0;i<$contenedores.length;i++) {
        $contenedores[i].remove();
    }
}
 

const $reseteo=document.querySelector("#resetear");

$reseteo.onclick=function() {                       

    $calcular.classList.add("oculto");
    $analisis.classList.add("oculto");
    eliminarIntegrantes();
    eliminarErroresIntegrantes();
    eliminarErroresEdades();

}

function manejarErroresIntegrantes(errores) {

    const $miembros=document.querySelector("#miembros");

    if(errores) {
        const $errores=document.querySelector("#errores");
        const $lista=document.createElement("li");
        $lista.textContent=errores;
        $lista.className="errorIntegrante"
        $errores.appendChild($lista);   

    } else { 
        return "";
            
    }
    
} 

function eliminarErroresIntegrantes() {
   const $seleccion=document.querySelectorAll(".errorIntegrante");
    for(integrante of $seleccion) {
        integrante.remove();
    }
}













    
