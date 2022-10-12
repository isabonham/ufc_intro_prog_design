var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var jog1 = Number (input());
var jog2 = String (input());
var valor = Number (input());

if (valor < jog1) {
    if (jog2 === 'm') {
        console.log ("segundo");   
    }
    else {
        console.log ("primeiro");
    }
}
else if (valor > jog1) {
    if (jog2 === 'M') {
        console.log ("segundo");
    }
    else {
        console.log ("primeiro");
    }
}
else {
    console.log ("primeiro");
}