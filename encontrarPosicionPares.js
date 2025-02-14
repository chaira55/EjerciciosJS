function posiciones(numeros){
    let posicion = [];

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            posicion.push(i);
        }
    }
    
    return posicion;
}

console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []
