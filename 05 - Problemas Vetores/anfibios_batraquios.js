var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var vetor1 = input();
var vetor2 = input();

vetor1 = vetor1.split(" ");
vetor2 = vetor2.split(" ");

for (var i = 0; i < vetor1.length; i++) {
    vetor1[i] = Number (vetor1[i]);
}

for (var i = 0; i < vetor2.length; i++) {
    vetor2[i] = Number (vetor2[i]);
}

for (var i = 0; i < vetor1.length; i++) {
    for (var j = 0; j < vetor2.length; j++) {
        if (vetor1[i] === vetor2[j]) {
            vetor1.splice(i, 1);
            i--;
        }
    }
}

if (vetor1.length > 0) {
    console.log ("nao");
}
else {
    console.log ("sim");
}