function criarArray(numero) {
    let resultado = [];
    for (let i = 1; i <= numero; i++) {
        resultado.push(i);
    }
    return resultado;
}

console.log(criarArray(7)); 
