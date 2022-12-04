var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var numero = Number(input());

if(numero > 0) {
    console.log("positivo");
}
else if(numero < 0) {
    console.log("negativo");
}
else {
    console.log("nulo");
}