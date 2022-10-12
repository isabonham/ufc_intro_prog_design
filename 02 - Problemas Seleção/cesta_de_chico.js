var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var cesta = Number (input());
var b = Number (input());
var g = Number (input());
var m = Number (input());

var frutas = b + g + m;

var tempo = 1;

if (cesta >= frutas) {
    tempo = tempo;
}

else {
    while (cesta < frutas) {
        tempo += 1;
        frutas -= cesta;
    }
}
console.log (tempo);