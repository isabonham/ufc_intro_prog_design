var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var maior = 0;
var menor = 200;

var x = 0;

while (x < 5) {
    var num = Number (input());
    if (num < menor) {
        menor = num;
    }
    if (num > maior) {
        maior = num;
    }
    x++;
}

var soma = menor + maior;

console.log (soma);