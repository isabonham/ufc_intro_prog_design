// habilitar o input a partir do teclado
var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift;


var lado1 = Number(input());
var lado2 = Number(input());
var lado3 = Number(input());

var p = (lado1 + lado2 + lado3) / 2;

var area = Math.sqrt(p*(p-lado1)*(p-lado2)*(p-lado3));

console.log(area.toFixed(2));