function contarOcorrencias(array, valor) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            contador++;
        }
    }
    return contador;
}

let numeros = [1, 2, 3, 2, 4, 2, 5];
console.log(contarOcorrencias(numeros, 2)); 
