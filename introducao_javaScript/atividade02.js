const readline = require('readline-sync');

let nota1 = readline.question('Digite a primeira nota (0-10): ');
nota1 = Number(nota1);

let nota2 = readline.question('Digite a segunda nota (0-10): ');
nota2 = Number(nota2);

let nota3 = readline.question('Digite a terceira nota (0-10): ');
nota3 = Number(nota3);

let soma = nota1+nota2+nota3;
let media = soma/3;

if (media >= 7){
    console.log('Aprovado!');
} else if ( media >= 5 ){
    console.log('Em exame!');
} else {
    console.log('Reprovado!');
}