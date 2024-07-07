let NumeroSecreto = 0;
let Intentos = 0;
let listasNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let NumeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   

    if (NumeroDeUsuario === NumeroSecreto) {
        asignarTextoElemento("p",`Acertates el Numero en ${Intentos} ${(Intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto.
        if(NumeroDeUsuario > NumeroSecreto) {
            asignarTextoElemento("p","El numero Secreto es menor");
        } else {
            asignarTextoElemento("p","El numero Secreto es mayor");
        } 
        Intentos++;
        limpiarCaja();

}
    return;
}

function limpiarCaja() {
   document.querySelector("#valorUsuario"). value = "";
   
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listasNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listasNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los numeros");
    } else 

    // si el nmumero generado esta includi en la lista hacemos una operacion si no otra
    if (listasNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else {
        listasNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del Numero Secreto");
    asignarTextoElemento(`p","Indica un Numero del 1 al ${numeroMaximo}`);
    NumeroSecreto =generarNumeroSecreto();
    Intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    // desavilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled",true);
}

condicionesIniciales();