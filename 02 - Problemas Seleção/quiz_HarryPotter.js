var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

// console.log ("1 - A que casa pertencia Harry Potter e seus amigos?");
// console.log ("a) Hufflepuff");
// console.log ("b) Ravenclaw");
// console.log ("c) Slytherin");
// console.log ("d) Gryffindor"); // Resposta correta

var resposta1 = input();

// console.log ("2 - Qual o nome verdadeiro do personagem o qual é conhecido por aquele que não deve ser nomeado?");
// console.log ("a) Tom Riddle"); // Resposta correta
// console.log ("b) Draco Malfoy");
// console.log ("c) Bellatrix Lestrange");
// console.log ("d) Pedro Pettigrew");

var resposta2 = input();

// console.log ("3 - Quais dessa opções não é uma Relíquia da Morte?");
// console.log ("a) A varinha de sabugueiro");
// console.log ("b) A pedra da ressurreição");
// console.log ("c) A pedra filosofal"); // Resposta correta
// console.log ("d) A capa de invisibilidade");

var resposta3 = input();

// console.log ("4 - O ministério da magia proibiu o uso de três feitiços, conhecidos como as maldições imperdoáveis, por ela possuírem caráter maligno e o objetivo cruel. Marque opção abaixo que não corresponde a umas das maldições imperdoáveis");
// console.log ("a) Crucio");
// console.log ("b) Imperio");
// console.log ("c) Avada Kedavra");
// console.log ("d) Expecto Patronum"); // Resposta correta

var resposta4 = input();

var contador = 0;

if (resposta1 === 'd') {
    contador += 1;
}
if (resposta2 === 'a') {
    contador += 1;
}
if (resposta3 === 'c') {
    contador += 1;
}
if (resposta4 === 'd') {
    contador += 1;
}

if (contador === 0) {
    console.log ("Nunca assistiu");
}
else if (contador === 1) {
    console.log ("Ja ouviu falar");
}
else if (contador === 2) {
    console.log ("Interessado no assunto");
}
else if (contador === 3) {
    console.log ("Fa");
}
else if (contador === 4) {
    console.log ("Super fa");
}


// switch ( contador ) {
//     case 0:
//         console.log ("Nunca assistiu");
//         break;

//     case 1:
//         console.log ("Ja ouviu falar");
//         break;

//     case 2:
//         console.log ("Interessado no assunto");
//         break;
    
//     case 3:
//         console.log ("Fa");
//         break;

//     default:
//         console.log ("Super fa");
// }