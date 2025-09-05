const readline = require('readline-sync');

let palavra = readline.question('Insira uma palavra: ');
palavra = String(palavra);

const maiuscula = (palavra) => {
    return palavra.toUpperCase();
}

console.log(maiuscula(palavra));