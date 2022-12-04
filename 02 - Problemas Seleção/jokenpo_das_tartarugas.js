var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var jog1 = String(input());
var jog2 = String(input());

if(jog1 === jog2) {
    console.log("empate");
}
else {
    if(jog1 === 'R' && jog2 === 'P') {
        console.log("jog2");
    }
    else if(jog1 === 'P' && jog2 === 'S') {
        console.log("jog2");
    }
    else if(jog1 === 'S' && jog2 === 'R') {
        console.log("jog2");
    }
    else {
        console.log("jog1");
    }
}