var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();
 
var filho1 = Number(input());
var filho2 = Number(input());
var filho3 = Number(input());
 
if(filho1 < filho2 && filho1 < filho3) {
    if(filho2 < filho3) {
        console.log("P M G");
    }
    else {
        console.log("P G M");
    }
}
if(filho2 < filho1 && filho2 < filho3) {
    if(filho1 < filho3) {
        console.log("M P G");
    }
    else {
        console.log("G P M");
    }
}
if(filho3 < filho2 && filho3 < filho1) {
    if(filho1 < filho2) {
        console.log("M G P");
    }
    else {
        console.log("G M P");
    }
}