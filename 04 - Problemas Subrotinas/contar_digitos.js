var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function contar_digitos (num) {
    var contador = 0;
    while (num > 0) {
        contador++;
        num = Math.floor(num / 10);
    }
    return contador;
}

var num = Number (input());

console.log (contar_digitos(num));