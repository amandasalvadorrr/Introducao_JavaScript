const readline = require('readline-sync');

let palavra = String(readline.question('Escreva a palavra: '));
let invertida = palavra.split("").reverse().join("");

if (palavra === invertida){
    console.log('A palavra ' + palavra + ' é um palíndormo');
} else {
    console.log('A palavra ' + palavra + ' não é um palíndormo');
}