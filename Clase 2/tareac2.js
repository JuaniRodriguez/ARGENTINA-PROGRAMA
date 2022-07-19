function sumar(num1,num2) {
    return num1+num2;  
}

function restar(num1,num2) {
    return num1-num2;
}


let operador=prompt("introduzca el signo + o -");
let numero1=Number(prompt("introduzca el primer valor"));
let numero2=Number(prompt("introduzca el segundo valor"));

let resultado;

if(operador==="+") {
    resultado=sumar(numero1,numero2)
} else if(operador==="-") {
    resultado=restar(numero1,numero2)
} else {
    console.log("debe introducir + o -")
}

if(operador!=="") {
console.log(`el resultado de ${numero1} ${operador} ${numero2} es ${resultado}`)
}
   

