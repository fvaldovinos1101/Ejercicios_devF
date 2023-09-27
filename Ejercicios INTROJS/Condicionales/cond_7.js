//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
//otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.


var dia = prompt("ingresa un dia")

if (dia === "lunes") {
    alert("ponte a chambear")
} else if (dia === "viernes") {
    alert("saca las guamas")
} else if (dia === "sabado") {
    alert("hay que conectarla papa")
} else if (dia === "domingo") {
    alert("curame la cruz")
} else if (dia === "jueves")
    alert("sacate un venenito")
else {
    alert("es mitad de semana pa")
}