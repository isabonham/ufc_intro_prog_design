var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var num = 0;
var soma = 0;
var contador = 0;

while (num >= 0) {
    if (num%2 === 1) {
        soma += num;
        contador++;
    }
    num = Number (input());
}

var media = soma/contador;

console.log (media.toFixed(1));