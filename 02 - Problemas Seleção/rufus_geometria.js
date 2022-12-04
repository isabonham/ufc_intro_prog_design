var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var lado1 = Number(input());
var lado2 = Number(input());
var lado3 = Number(input());

if(((lado1 + lado2) > lado3) && ((lado2 + lado3) > lado1) && ((lado1 + lado3) > lado2)) {
    if((lado1 === lado2) && (lado2 === lado3)) {
        console.log("equilatero");
    }
    else if((lado1 !== lado2) && (lado2 !== lado3) && (lado3 !== lado1)) {
        console.log("escaleno");
    }
    else {
        console.log("isosceles");
    }
}
else {
    console.log("invalido");
}