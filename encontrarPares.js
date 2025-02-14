function pares(numeros){
    let nuevoArreglo = [];
    for(num of numeros){
        if(num % 2 === 0){
            nuevoArreglo.push(num);
        }
    }
    return nuevoArreglo;
}

console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []
