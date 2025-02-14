function numerosAPalabras(numeros){
    let palabras = [];
    for(num of numeros){
        switch(num){
            case 1: palabras.push("uno"); break;
            case 2: palabras.push("dos"); break;
            case 3: palabras.push("tres"); break;
            case 4: palabras.push("cuatro"); break;
            case 5: palabras.push("cinco"); break;
            case 6: palabras.push("seis"); break;
            case 7: palabras.push("siete"); break;
            case 8: palabras.push("ocho"); break;
            case 9: palabras.push("nueve"); break;
            default: console.log("Numero invalido");
        }
    }

    return palabras;
}

console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]
