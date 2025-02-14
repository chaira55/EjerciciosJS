function distancia(string1, string2){
    let diferencia = 0;

    for(let i = 0; i < string1.length; i++){
        if(string1[i] != string2[i]){
            diferencia += 1;
        }
    }

    return diferencia;
    
}

console.log(distancia("hola", "hola")) // 0 
console.log(distancia("sol", "tol")) // 1 
console.log(distancia("carro", "correr")) // 3 