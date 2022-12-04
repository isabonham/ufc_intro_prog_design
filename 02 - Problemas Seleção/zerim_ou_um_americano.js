var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var jog1 = Number(input());
var jog2 = Number(input());
var jog3 = Number(input());
var jog4 = Number(input());

var dedos = jog1 + jog2 + jog3 + jog4;

if(dedos === 0) {
    console.log("nenhum");
}
else if(dedos % 4 === 1) {
    console.log("jog1");
}
else if(dedos % 4 === 2) {
    console.log("jog2");
}
else if(dedos % 4 === 3) {
    console.log("jog3");
}
else if(dedos % 4 === 0) {
    console.log("jog4");
}