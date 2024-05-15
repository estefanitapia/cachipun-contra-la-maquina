// Con la función promt le solicitamos al usuario que ingrese datos y con parseint lo transformamos.
let cantidadDeJugadas = parseInt(prompt("¿Cuantas veces deseas jugar?"));
// A estas variables se les irá sumando ++ para saber quien fue el ganador.
let person = 0;
let machine = 0;
//Este for irá recorriendo la cantidad de jugadas que indique el usuario.
for (let i = 0; i<= cantidadDeJugadas; i++){
    // Variable que solicita al usuario que ingrese su jugada.
    let personPlay = prompt ("Seleccione la jugada: Piedra, Papel o Tijera").toLocaleLowerCase();
    // Variable que realiza la jugada de la maquina, esta determina la jugada: 0 = Piedra, 1 = Papel, 2 = Tijera
    let machinePlay = Math.floor(Math.random()*3);
    // Variable que almacena el resultado del juego.
    let result;

    if (personPlay == "piedra"){
        if (machinePlay == 0) {
            result = "¡HAN EMPATADO!.";
        } else if (machinePlay == 1){
            result = "¡Perdiste! la máquina escogió papel.";
            machine++;
        } else {
            result = "¡Gantaste! La máquina escogió Tijera.";
            person++;
        }
    } else if (personPlay == "papel"){
        if (machinePlay == 0) {
            result = "¡Gantaste! La máquina escogió Piedra.";
            person++;
        } else if (machinePlay == 1){
            result = "¡HAN EMPATADO!.";
        } else {
            result = "¡Perdiste! la máquina escogió Tijera.";
            machine++;
        }
    } else if (personPlay == "tijera"){
        if (machinePlay == 0) {
            result = "¡Perdiste! la máquina escogió Piedra.";
            machine++;
        } else if (machinePlay == 1){
            result = "¡Gantaste! La máquina escogió Papel.";
            person++;
        } else {
            result = "¡HAN EMPATADO!.";
        }
    } else {
        result = "Por favor, ingrese una jugada válida, las opciones son: Piedra, Papel o Tijera.";
    }
    // Mostrando el resultado al usuario.
    alert (result);
}
// Muestra el resultado final de la partida.
if (person > machine) {
    alert("¡ERES EL GANADOR! ¡Felicidades!");
} else if (person < machine) {
    alert("¡Has perdido!, la máquina ganó la partida");
} else {
    alert ("¡EMPATE!, inténtalo nuevamente");
}
// Funcion que recarga la partida.
function volveraJugar() {
    location.reload();
}