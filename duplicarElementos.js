function duplicar(numeros){
    let nuevoArreglo = [];

    for(let i = 0; i < numeros.length; i++){
        nuevoArreglo.push(numeros[i] * 2);

    }
    return nuevoArreglo;
}

console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([6, 3, 9, 10])) // []
