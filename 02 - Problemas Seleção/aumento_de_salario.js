var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();
 
var salario = Number(input());
var total;
 
if(salario <= 1000) {
    total = salario + (salario*(20/100));
}
else if(salario <= 1500) {
    total = salario + (salario*(15/100));
}
else if(salario <= 2000) {
    total = salario + (salario*(10/100));
}
else if(salario > 2000) {
    total = salario + (salario*(5/100));
}
 
console.log(total.toFixed(2));