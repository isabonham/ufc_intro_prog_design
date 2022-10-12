var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();
 
var quant = Number (input());
var filai = [];
var filap = [];
 
// var filai = "";
// var filap = "";
 
var conti = 0;
var contp = 0;
 
var fila = input();
fila = fila.split(" ");
 
for(var i = 0; i < fila.length; i++) {
    fila[i] = Number(fila[i]);
}
 
// for (var j = 0; j < quant; j++) {
//     if (fila[j] % 2 === 1) {
//         filai.push(fila[j]);
//     }
//     else if (fila[j] % 2 === 0) {
//         filap.push(fila[j]);
//     }
// }
 
for (var j = 0; j < quant; j++) {
    if (fila[j] % 2 === 1) {
        filai += fila[j] + " ";
    }
    else if (fila[j] % 2 === 0) {
        filap += fila[j] + " ";
    }
}
 
console.log (filai);
console.log (filap);