var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function Aluno () {
    this.nome = input();
    this.nota = [];
    for (var i = 0; i < 3; i++) {
        this.nota.push(Number (input()));
    }
}

function calcularMedia (aluno) {
    var soma = 0;
    for (var i = 0; i < 3; i++) {
        soma += aluno.nota[i];
    }
    var media = soma / 3;
    return media;
}

function situacao (aluno) {
    if (calcularMedia(aluno) >= 7) {
        console.log (aluno.nome, calcularMedia(aluno).toFixed(2));
    }
}

var quant = Number (input());

var turma = [];

for (var i = 0; i < quant; i++) {
    turma.push(new Aluno());
}

for (var i = 0; i < quant; i++) {
    situacao(turma[i]);
}