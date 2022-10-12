// habilitar o input a partir do teclado
var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var mesada_joao = Number(input());
var mesada_paulo = Number(input());
var gasto_paulo = Number(input());

var total_paulo = mesada_paulo - gasto_paulo;

if (Math.abs(mesada_joao - total_paulo) <= 0.0001) {
    console.log ("Iguais");
}
else {
    console.log ("Diferentes");
}