var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function Aluno (nome, matricula, disciplina, nota) {
    this.nome       = nome;
    this.matricula  = matricula;
    this.disciplina = disciplina;
    this.nota       = nota;
}

function registrarAluno () {
    var aluno = new Aluno ();
    aluno.nome = input();
    aluno.matricula = Number (input());
    aluno.disciplina = input();
    aluno.nota = Number (input());
    
    return aluno;
}

function mostrarMaiorNota (aluno1, aluno2) {
    if (aluno1.nota > aluno2.nota) {
        console.log (aluno1.nome, ",", aluno1.nota.toFixed(1));
    }
    else if (aluno1.nota < aluno2.nota) {
        console.log (aluno2.nome, ",", aluno2.nota.toFixed(1));
    }
    else {
        console.log (aluno1.nome, "e", aluno2.nome, ",", aluno1.nota.toFixed(1));
    }
}

var aluno1 = registrarAluno();
var aluno2 = registrarAluno();

mostrarMaiorNota(aluno1, aluno2);