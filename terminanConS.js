function terminanConS(cadena){
    let conS = [];

    for(palabra of cadena){
        if(palabra.slice(-1) === "s" || palabra.slice(-1) === "S"){
            conS.push(palabra);
        }
    }

    return conS;
}

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []
