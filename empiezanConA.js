function empiezanConA(cadena){
    let conA = [];

    for(palabra of cadena){
        if(palabra.charAt(0) === "a" || palabra.charAt(0) === "A"){
            conA.push(palabra);
        }
    }

    return conA;
}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA(["amigo", "hola", "Antes"])) // []
