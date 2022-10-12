var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function potencia(base, expoente) {
    var result = 1;
    
    for (var x = 1; x <= expoente; x++) {
        result = result*base;
    }
    
    return result;
}

function distancia_dois_pontos (x1, y1, x2, y2) {
    var distancia = Math.sqrt(potencia((x2 - x1), 2) + potencia((y2 - y1), 2));
    return distancia;
}

var x1 = Number (input());
var y1 = Number (input());
var x2 = Number (input());
var y2 = Number (input());

console.log (distancia_dois_pontos(x1, y1, x2, y2).toFixed(2));