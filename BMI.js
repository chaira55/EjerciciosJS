function bmi(peso, altura){
    var formula = peso / (altura*altura);
    if (formula < 18.5){
        return "Bajo de peso";
    } else if (formula >= 18.5 && formula < 25){
        return "Normal";
    } else if(formula >= 25 && formula < 30){
        return "Sobrepeso";
    } else{
        return "Obeso";
    }
}

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"
