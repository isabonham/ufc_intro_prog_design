// habilitar o input a partir do teclado
var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();


var velocidade = Number(input());
var tempo_minutos = Number (input());
var consumo = Number (input());

var tempo_horas = tempo_minutos / 60;
var distancia = velocidade * tempo_horas;
var desempenho = distancia / consumo;

console.log(desempenho.toFixed(2));