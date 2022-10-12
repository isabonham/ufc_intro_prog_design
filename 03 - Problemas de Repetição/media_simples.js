var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number (input());
var nota = 0;
var soma = 0;
var media = 0;
var quant_origin = quant;

while (quant > 0) {
    nota = Number (input());
    soma += nota;
    quant --;
}

media = soma/quant_origin;

console.log (media.toFixed(1));