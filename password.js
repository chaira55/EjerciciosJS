function password(contrasena){
    contrasena = contrasena.replace(/ /g, ""); //elimina los espacions ej: /_/g elimina los guin bajo
    contrasena = contrasena.toLowerCase();
    
    let nuevaContrasena = ""; 

    for (let letra of contrasena) {
        if (letra === "a") {
            nuevaContrasena += "4";
        } else if (letra === "e") {
            nuevaContrasena += "3";
        } else if (letra === "i") {
            nuevaContrasena += "1";
        } else if (letra === "o") {
            nuevaContrasena += "0";
        } else {
            nuevaContrasena += letra;
        }
    }

    return nuevaContrasena;
}


console.log(password("HOLA")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""