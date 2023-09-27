//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

var n1 = prompt("n1 - ingresa un numero")
var n2 = prompt("n2 - ingresa otro numero")

if (n1 < n2) {
    alert(n1 + " El numero 1 es menor")
} else if (n1 > n2) {
   alert(n2 + " El numero 2 es menor") 
   
} else if (n1 = n2){
    alert("Los dos numero son iguales.")
}