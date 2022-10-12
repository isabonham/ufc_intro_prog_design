var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function quantdig(num) {
    var aux = 0
    var cont = 0
    while(num > 0) {
        aux = num % 10;
        num = Math.floor(num / 10);
        cont++;
    }
    return cont;
}

function decompor(num) {
    var vetor = [];
    var tamanho = quantdig(num);
    
    for (var i = tamanho - 1; i >= 0; i--) {
        vetor [i] = num % 10;
        num = Math.floor(num/10);
    }
    
    return vetor;
}

var numero = Number (input());

console.log(decompor(numero));