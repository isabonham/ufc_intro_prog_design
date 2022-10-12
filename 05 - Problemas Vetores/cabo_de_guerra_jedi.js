var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number (input());
var somaj = 0;
var somas = 0;
vetor = input();
vetor = vetor.split(" ");

for (var i = 0; i < vetor.length; i++) {
    vetor[i] = Number (vetor[i]);
}

var metade = vetor.length / 2;

for (var i = 0; i < metade; i++) {
    somaj += vetor [i];
}

for (var i = metade; i < vetor.length; i++) {
    somas += vetor [i];
}

if (somaj > somas) {
    console.log ("Jedi");
}
else if (somas > somaj) {
    console.log ("Sith");
}
else if (somas === somaj) {
    console.log ("empate");
}