function max(numeros){
    let mayor = 0;
    for(num of numeros){
        if (num > mayor){
            mayor = num;
        }
    }
    return mayor;
}


console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9
