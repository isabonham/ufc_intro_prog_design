var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number (input());

var numeros = [quant];
var soma = 0;
var resp = "";

for (var i = 1; i <= quant; i++) {
    numeros[i] = Number (input());
    soma += numeros[i];
}

var media = soma / quant;

for (var i = 1; i <= 6; i++) {
    if (numeros[i] > media) {
        resp += "G ";
    }
    else if (numeros[i] < media) {
        resp += "P ";
    }
    else if (numeros[i] === media) {
        resp += "M ";
    }
}

console.log(media.toFixed(2));
console.log(resp);