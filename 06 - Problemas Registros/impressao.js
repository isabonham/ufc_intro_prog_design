var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

// criando o objeto "aluno"
function Aluno (nome, matricula, disciplina, nota) {
    this.nome       = nome;
    this.matricula  = matricula;
    this.disciplina = disciplina;
    this.nota       = nota;
}

// criando um novo objeto do tipo aluno
var aluno = new Aluno ();

// populando meu objeto
aluno.nome = input();
aluno.matricula = Number (input());
aluno.disciplina = input();
aluno.nota = Number (input());

console.log ("Nome = "+aluno.nome);
console.log ("Matrícula = "+aluno.matricula);
console.log ("Disciplina = "+aluno. disciplina);
console.log ("Nota = "+aluno.nota.toFixed(1));