function capitalizar(frase){
    return frase.charAt(0).toUpperCase() + frase.slice(1);
}


console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
