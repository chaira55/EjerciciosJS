function numAsteriscos(arreglo){
    let contador = 0;
    
    for(asteriscos of arreglo){
        if(asteriscos === "*"){
            contador += 1;
        }
    }

    return contador;
}


console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0
