function numeroDeAes(palabra){
    var contardor = 0;
    for (letra of palabra){
        if(letra === "a" || letra === "A"){
            contardor += 1;
        }
    }
    return contardor;
}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
