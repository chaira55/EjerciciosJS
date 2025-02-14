function multiplicarArreglo (arreglo){
    let multiplicacion = 1;
    for(let numero of arreglo){
        multiplicacion *= numero;
    }
    return multiplicacion;
}

console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1