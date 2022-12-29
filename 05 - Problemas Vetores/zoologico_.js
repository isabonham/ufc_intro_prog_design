var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number(input());
var animais = input().split(" ").map(Number);

function pesquisar_casais(vetor) {
    var quant = 0;
    for(var i = 0; i < vetor.length; i++) {
        for(var j = 0; j < vetor.length; j++) {
            if(vetor[i] === (vetor[j]*-1)) {
                quant++;
                vetor.splice(i, 1);
                vetor.splice(j, 1);
            }
        }
    }
    return quant;
}

var quant_casais = pesquisar_casais(animais);
console.log(quant_casais);