// habilitar o input a partir do teclado
var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();


var numero1 = Number(input());
var numero2 = Number(input());
 
var soma = numero1 + numero2;
var subtracao = numero1 - numero2;
var multiplicacao = numero1 * numero2;
var divisao = numero1 / numero2;
var resto = numero1 % numero2;
 
console.log (soma);
console.log (subtracao);
console.log (multiplicacao);
console.log (divisao.toFixed(2));
console.log (resto);