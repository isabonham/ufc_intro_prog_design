var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var ultron = Number (input());
var inimigos = Number (input());

var contador = 0;

for (var i = 1; i <= inimigos; i++) {
    var inimigo = Number (input())
    if (inimigo === ultron) {
        contador += 1;
    }
}

console.log (contador);