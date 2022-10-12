var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number (input());

var vetor = input();
vetor = vetor.split(" ");

for (var i = 0; i < vetor.length; i++) {
    vetor[i] = Number (vetor[i]);
}

var pulos = 0;

for (var i = 1; i < vetor.length; i++) {
    if ((Math.abs(vetor[i] - vetor[i-1])) > 1) {
        pulos++;
    }
}

console.log (pulos);