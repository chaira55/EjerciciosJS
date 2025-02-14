function min(numeros){
    let menor = 0;
    for(num of numeros){
        if(menor == 0){
            menor = num;
        } else if(num < menor){
            menor = num;
        }
    }
    return menor;
}


console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2
