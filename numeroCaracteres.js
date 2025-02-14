function numeroDeCaracteres(string, caracter){
    var contador = 0;
    for(caracterBuscar of string){
        if(caracterBuscar === caracter){
            contador += 1;
        }
    }
    return contador;
}

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4
