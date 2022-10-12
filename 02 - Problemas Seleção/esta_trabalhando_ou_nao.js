var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var dia = Number (input());
var hora = Number (input());
var minuto = Number (input());

if ((dia >= 2) && (dia <= 6)) {
    if (((hora >= 8) && (hora <= 11)) || ((hora >= 14) && (hora <= 17))) {
        console.log ("SIM");
    }
    else {
        console.log ("NAO");
    }
}
else if (dia === 7) {
    if ((hora >= 8) && (hora <= 11)) {
        console.log ("SIM");
    }
    else {
        console.log ("NAO");
    }
}
else {
    console.log ("NAO");
}
