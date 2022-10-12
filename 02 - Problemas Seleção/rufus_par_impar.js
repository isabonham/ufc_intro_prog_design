var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var op = String (input());
var jog1 = Number (input());
var jog2 = Number (input());

if (op === 'p') {
    if ((jog1 + jog2) % 2 === 0) {
        console.log ("Venceu");
    }
    else {
        console.log ("Perdeu");
    }
}
else if (op === 'i') {
    if ((jog1 + jog2) % 2 === 1) {
        console.log ("Venceu");
    }
    else {
        console.log ("Perdeu");
    }
}