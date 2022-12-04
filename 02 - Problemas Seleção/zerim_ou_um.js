var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var jog1 = Number(input());
var jog2 = Number(input());
var jog3 = Number(input());

if(jog1 === jog2 && (jog1 === jog3)) {
    console.log("empate");
}
else if((jog2 === jog3) && (jog2 !== jog1)) {
    console.log("jog1");
}
else if((jog1 === jog3) && (jog1 !== jog2)) {
    console.log("jog2");
}
else if((jog1 === jog2) && (jog1 !== jog3)) {
    console.log("jog3");
}