var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var nota1 = Number (input());
var nota2 = Number (input());

var media = (nota1 + nota2) / 2;

console.log (media.toFixed(1));

if (media >= 7){
    console.log ("Aprovado");
}
else if (media >= 4) {
    console.log ("AF");
}
else {
    console.log ("Reprovado");
}