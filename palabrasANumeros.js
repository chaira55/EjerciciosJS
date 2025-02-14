function palabrasAnumeros(palabras){
    let numeros = [];
    for(palabra of palabras){
        switch(palabra){
            case "cero": numeros.push(0); break;
            case "uno": numeros.push(1); break;
            case "dos": numeros.push(2); break;
            case "tres": numeros.push(3); break;
            case "cuatro": numeros.push(4); break;
            case "cinco": numeros.push(5); break;
            case "seis": numeros.push(6); break;
            case "siete": numeros.push(7); break;
            case "ocho": numeros.push(8); break;
            case "nueve": numeros.push(9); break;
            default: numeros.push(-1);
        }
    }

    return numeros;
}

console.log(palabrasAnumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
console.log(palabrasAnumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]
