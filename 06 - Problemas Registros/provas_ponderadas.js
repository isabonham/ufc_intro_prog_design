var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function Provas () {
    this.nota = input().split(" ").map(Number);
    this.peso = input().split(" ").map(Number);
}

Provas.prototype.mediaponderada = function () {
    var somam = 0;
    var somad = 0;
    for (var i = 0; i < this.nota.length; i++) {
        somam += this.nota[i]*this.peso[i];
        somad += this.peso[i];
    }
    var media = somam / somad;
    return media;
}

//Main
var quant = Number (input());
var provas = new Provas();
var mediap = provas.mediaponderada();
console.log (mediap.toFixed(2));