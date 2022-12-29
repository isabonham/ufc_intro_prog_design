var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function ordenar(vetor) {
    for(var i = 0; i < vetor.length; i++) {
        for(var j = 0; j < (vetor.length - i - 1); j++) {
            if(vetor[j] > vetor [j+1]) {
                var aux = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = aux;
            }
        }
    }
}

var quant = Number(input());

var vetor = input().split(" ").map(Number);
ordenar(vetor);

for(var i = 1; i < vetor.length; i++) {
    if(vetor[i-1] === vetor[i]) {
        vetor.splice(i, 1);
        i--;
    }
}

console.log(vetor);