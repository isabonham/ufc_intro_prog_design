var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number(input());

var vetor = input();
vetor = vetor.split(" ");

var vetori = [];

for(var i = vetor.length - 1; i >= 0; i--) {
    vetori.push(vetor[i]);
}

console.log(vetori);