// habilitar o input a partir do teclado
var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();


var tempo = Number (input());

var hora = Math.floor(tempo / 3600);

tempo = tempo % 3600;
var minuto = Math.floor(tempo / 60);

tempo = tempo % 60;
var segundos = tempo;

console.log(hora, minuto, segundos);