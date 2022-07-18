//TAREA 1:
/*
function edad(año,nacimiento) {
    

    if(!/[0-9]{4}$/.test(año)) {
        return "debe introducir un valor numerico de año de 4 digitos";
    }else if(!/[0-9]{4}$/.test(nacimiento)) {
        return "debe introducir un valor numerico de nacimiento de 4 digitos";
    }else if(Number(año)>2022) {
        return "el año no puede ser mayor que 2022";
    } else if(Math.sign(Number(año))==-1) {
        return "el año no puede ser negativo";
    } else if(Number(nacimiento)>2022) {
        return " el nacimiento no puede ser mayor que 2022";
    } else {
        return `Tienes ${Number(año)-Number(nacimiento)} años `
    }
 
}   
 
const añoactual=prompt("introduce el año actual");
const nacimiento=prompt("introduce tu año de nacimiento");

console.log(edad(añoactual,nacimiento))

*/
//TAREA 2:

function salarioMensual(salarioanual) {
    if(!/[0-9]$/.test(salarioanual)) {
        return "debe introducir un valor numerico";
    } else {
        return `tu salario mensual es de $${salarioanual/12}`    
    }
     
}

function salarioDiario(salarioanual) {
    if(!/[0-9]$/.test(salarioanual)) {
        return "debe introducir un valor numerico";
    } else {
        return `tu salario diario es de $${salarioanual/30/12}`    
    }  
}

let pregunta=prompt("decime tu salario anual");

console.log(salarioMensual(pregunta));
console.log(salarioDiario(pregunta))