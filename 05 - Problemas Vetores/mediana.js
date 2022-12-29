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
    return vetor;
}

function mediana(vetor) {
    ordenar(vetor);
    var media = 0;
    if(vetor.length % 2 === 0) {
        for(var i = 0; vetor.length > 2; i++) {
            vetor.splice(vetor.length - 1, 1);
            vetor.splice(i, 1);
            i--;
        }
        media = (vetor[0]+vetor[1]) / 2;
    }
    else {
        for(var j = 0; vetor.length > 1; j++) {
            vetor.splice(vetor.length - 1, 1);
            vetor.splice(j, 1);
            j--;
        }
        media = vetor[0];
    }
    return media;
}

var quant = Number(input());
var notas = input().split(" ").map(Number);
console.log(mediana(notas).toFixed(1));