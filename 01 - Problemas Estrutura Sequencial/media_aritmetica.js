// habilitar o input a partir do teclado
var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();


var num1 = Number(input());
var num2 = Number(input());

var media = (num1 + num2) / 2;

console.log (media);