var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

// -------- sem registro --------
// function Aluno(nome, nota1, nota2, nota3) {
//     this.nome  = nome;
//     this.nota1 = nota1;
//     this.nota2 = nota2;
//     this.nota3 = nota3;
// }

// function registrarAluno () {
//     var aluno   = new Aluno();
//     aluno.nome  = input();
//     aluno.nota1 = Number(input());
//     aluno.nota2 = Number(input());
//     aluno.nota3 = Number(input());
    
//     return aluno;
// }

function Aluno() {
    this.nome = input();
    this.nota = [];
    for(var i = 0; i < 3; i++) {
        this.nota.push(Number(input()));
    }
}

function calcularMedia(aluno) {
    var soma = 0;
    for(var i = 0; i < 3; i++) {
        soma += aluno.nota[i];
    }
    var media = soma / 3;
    return media;
}

var alunox = new Aluno();
console.log(calcularMedia(alunox).toFixed(2));