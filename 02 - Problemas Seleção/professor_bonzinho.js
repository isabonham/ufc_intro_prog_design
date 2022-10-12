var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var nota1 = Number (input());
var nota2 = Number (input());
var nota3 = Number (input());
var trabalho = Number (input());

var menor_nota = 0;
var media;

if ((nota1 < nota2) && (nota1 < nota3)) {
    menor_nota = nota1;
}
else if ((nota2 < nota1) && (nota2 < nota3)) {
    menor_nota = nota2;
}
else {
    menor_nota = nota3;
}

media = (nota1 + nota2 + nota3 - menor_nota + trabalho) / 3;

if (media >= 7) {
    console.log ("Aprovado com " + media.toFixed(1));
}
else {
    console.log ("Final com " + media.toFixed(1));
}