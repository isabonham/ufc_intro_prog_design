var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number (input());
var valores = input();
var chute1 = input();
var chute2 = input();

valores = valores.split(" ");
chute1 = chute1.split(" ");
chute2 = chute2.split(" ");

for (var i = 0; i < quant; i++) {
    valores[i] = Number (valores[i]);
    chute1[i] = Number (chute1[i]);
}

var primeiro = 0;
var segundo = 0;

for (var i = 0; i < quant; i++) {
    if (valores[i] < chute1[i]) {
        if (chute2[i] === 'm') {
            segundo++;
        }
        else {
            primeiro++;
        }
    }
    else if (valores[i] > chute1[i]) {
        if (chute2[i] === 'M') {
            segundo++;
        }
        else {
            primeiro++;
        }
    }
    else {
        primeiro++;
    }
}

if (primeiro > segundo) {
    console.log ("primeiro");
}
else if (segundo > primeiro) {
    console.log ("segundo");
}
else if (segundo === primeiro) {
    console.log ("empate");
}