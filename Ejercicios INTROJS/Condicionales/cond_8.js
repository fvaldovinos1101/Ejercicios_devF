/*8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, 
imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10. */

var calif = prompt("ingresa tu calificacion")

if (calif >= 11) {
    alert("ingresa una calificacion valida")
} else if(calif <= 5){
    alert("REPROBADO")
} else if(calif >= 6 && calif <=8){
    alert("Tienes calificacion regular")
}else if(calif == 9){
    alert("muy bien")
}else if( calif == 10){
    alert("Excelente")
}
