// habilitar o input a partir do teclado
var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();


var preco = Number(input());
var preco_unitario = preco/24;
 
var preco_4 = (preco_unitario * 4).toFixed(6);
var preco_8 = (preco_unitario * 8).toFixed(6);
var preco_12 = (preco_unitario * 12).toFixed(6);
var preco_16 = (preco_unitario * 16).toFixed(6);
 
console.log(preco_4, preco_8, preco_12, preco_16);