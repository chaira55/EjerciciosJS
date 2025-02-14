function capitalizarPalabras(frase) {
    return frase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
//split = divide la frase en arrays separados por un espacio
//map(word) = capitalia la primera letra de cada elemento del array
//join une toda la frase de nuevo

console.log(capitalizarPalabras("hola mundo")) // "Hola Mundo"
console.log(capitalizarPalabras("make it real")) // "Make It Real"
console.log(capitalizarPalabras("")) // ""
    