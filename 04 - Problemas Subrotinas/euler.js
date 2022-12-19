var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function fatorial(num) {
    var fat = 1;
    for(var x = 1; x <= num; x++) {
        fat *= x;
    }
    return fat;
}

function euler(num) {
    var soma = 1;
    for(var x = 1; x < num; x++) {
        soma += (1/fatorial(x));
    }
    return soma;
}

var numero = Number(input());

console.log(euler(numero).toFixed(6));