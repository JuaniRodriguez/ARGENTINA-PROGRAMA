//TAREA 1:

for(let i=3;i<=22;i+=3) {
    console.log(i)
}


//TAREA 2:
let numero=10;
while(numero>0) {
    console.log(numero);
    numero--;
}

//TAREA 3:

for(i=1;i<=50;i++) {
    if(((i%3)==0) && ((i%5)==0)) {
        console.log("FizzBuzz");
    } else if((i%3)==0) {
        console.log("Fizz");
    } else if((i%5)==0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}

//TAREA 4:

function calcularPromedio(numeros=[]) {
    let sumaTotal=0;
    for(i=0;i<numeros.length;i++) {
        sumaTotal=sumaTotal + Number(numeros[i]);

    }
    console.log(`el promedio de los numeros es ${sumaTotal/numeros.length}`)
}
