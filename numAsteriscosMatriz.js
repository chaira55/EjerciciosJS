function numAsteriscos(arreglo){
    let contador = 0;

    for(let i = 0; i < arreglo.length; i++){
        for(let j = 0; j < arreglo[i].length; j++){
            if( arreglo[i][j] === "*"){
                contador += 1;
            }
        }
    }

    return contador;
}

console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
//5  