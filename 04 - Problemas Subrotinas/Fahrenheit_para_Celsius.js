var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var F = Number (input());

function converte_para_celsius (temperatura) {
    var C = (temperatura - 32) * 5/9;
    return C;
}

console.log(converte_para_celsius(F).toFixed(6));