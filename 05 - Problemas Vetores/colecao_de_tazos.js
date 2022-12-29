var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function maior(vetor) {
    var maior = 0;
    for(var i = 0; i < vetor.length; i++) {
        if(vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    return maior;
}

function contar_repetidos(vetor) {
    var tazos_mais = [];
    var quant_tazos = [];
    
    for(var i = 0; i < vetor[vetor.length-1]; i++) {
        quant_tazos.push(0);
    }
    
    for(var j = 0; j < vetor.length; j++) {
        quant_tazos[vetor[j]-1]++;
    }
    
    var quant_repeticao = maior(quant_tazos);
    
    for(var k = 0; k < vetor[vetor.length-1]; k++) {
        if(quant_tazos[k] === quant_repeticao) {
            tazos_mais.push(k+1);
        }
    }
    return tazos_mais;
}

var quant = Number(input());
var tazos = input().split(" ").map(Number);

console.log(contar_repetidos(tazos));