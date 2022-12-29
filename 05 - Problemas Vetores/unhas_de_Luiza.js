var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function inteiro(vetor) {
    var numero = 0;
    
    for(var i = 0; i < vetor.length; i++) {
        numero *= 10;
        numero += vetor[i];
    }
    return numero;
}

var quant = Number(input());
var vetor = [];

for(var i = 0; i < quant; i++) {
    var num = Number(input());
    vetor.push(num);
}

console.log(inteiro(vetor));