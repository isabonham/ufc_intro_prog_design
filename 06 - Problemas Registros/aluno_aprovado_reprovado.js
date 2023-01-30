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

function situacao(aluno) {
    if(aluno.nota >= 7) {
        console.log(aluno.nome+" aprovado(a) em "+aluno.disciplina);
    }
    else {
        console.log(aluno.nome+" reprovado(a) em "+aluno.disciplina);
    }
}

var alunox = registrarAluno();
situacao(alunox);