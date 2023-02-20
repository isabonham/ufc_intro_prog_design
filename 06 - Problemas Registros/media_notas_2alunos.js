var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function Aluno(nome, matricula, disciplina, nota) {
    this.nome       = nome;
    this.matricula  = matricula;
    this.disciplina = disciplina;
    this.nota       = nota;
}

function registrarAluno() {
    var aluno = new Aluno();
    aluno.nome = input();
    aluno.matricula = Number(input());
    aluno.disciplina = input();
    aluno.nota = Number(input());
    
    return aluno;
}

function media(aluno1, aluno2) {
    var media = (aluno1.nota + aluno2.nota) / 2;
    return media;
}

var alunox = registrarAluno();
var alunoy = registrarAluno();

console.log("Média = " + media(alunox, alunoy).toFixed(2));