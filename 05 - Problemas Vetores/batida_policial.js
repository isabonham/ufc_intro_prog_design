var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function ordenar(vetor) {
    for(var i = 0; i < vetor.length - 1; i++) {
        for(var j = 0; j < (vetor.length - i - 1); j++) {
            if(vetor[j] > vetor [j+1]) {
                var aux = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = aux;
            }
        }
    }
    return vetor;
}

var tam = Number(input());
var linha = input()
var vetor = linha.split(" ").map(Number);

if(linha[linha.length-1] === " ") {
    vetor.pop();
}

ordenar(vetor);

console.log(vetor);