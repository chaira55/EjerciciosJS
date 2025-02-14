function sumarRango(num1, num2){
    let suma = 0;
    for(let i = num1; i <= num2; i++){
        suma += i;
    }
    return suma;
}

console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0
