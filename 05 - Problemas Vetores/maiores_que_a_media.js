var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var soma = 0;
var cont = 0;
var numeros = [];

for (var i = 1; i <= 6; i++) {
    numeros[i] = Number (input());
    soma += numeros[i];
}

var media = soma / 6;

for (var i = 1; i <= 6; i++) {
    if (numeros[i] > media) {
        cont++;
    }
}

console.log(media.toFixed(1));
console.log(cont);