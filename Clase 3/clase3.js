//Tarea 1:

let usuario=prompt("cual es tu nombre");

let minuscula=usuario.toLowerCase();

if(!/[a-z]$/i.test(usuario)) {
    console.log("solo puede introducir letras");
} else if (minuscula==="juan ignacio") {
    console.log(`hola tocayo, yo tambien me llamo ${usuario}`)
} else if(minuscula==="cata") {
    console.log(`hola ${usuario}, te llamas igual que mi hermana`)
} else if(minuscula.trim().length===0) {
    console.log("no ingresaste ningun nombre")
} else {
    console.log(`hola ${usuario}!`)
}





//Tarea 2:

let edad=prompt("decime tu edad");

if(!/[0-9]{1,2}/.test(edad)) {
    console.log("solo puede introducir entre uno y dos numeros")
}else if(edad==25) {
    console.log("tienes mi misma edad")
} else if(edad<25) {
    console.log("sos menor que yo")
} else if(edad>25){
    console.log("sos mayor que yo")
}





//TAREA 3:

let documento=(prompt("¿tenes documento?").toLowerCase());

if(documento===("si")) {
    let edad=prompt("ya que tenes documento,decime tu edad");

    if(edad>=18) {
        console.log("podes entrar al bar")
    } else {
        console.log("no puedes entrar al bar");
    } 
} else if(documento===("no")){
    console.log("debes tener documento para entrar al bar")
} else {
    console.log("no entendi la respuesta")
}
