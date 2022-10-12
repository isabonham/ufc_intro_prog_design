var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number (input());

var soldados = 0;
var rebeldes = 0;

while (quant > 0) {
    var combatente = Number (input());
    if (combatente%2 === 0) {
        rebeldes += combatente;
    }
    else {
        soldados += combatente;
    }
    quant--;
}

if (rebeldes > soldados) {
    console.log ("rebeldes");
}
else if (soldados > rebeldes) {
    console.log ("soldados");
}
else {
    console.log ("empate");
}