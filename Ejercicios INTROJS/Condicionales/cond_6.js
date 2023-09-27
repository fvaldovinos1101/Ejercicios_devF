//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

var n1 = prompt("n1 - ingresa un numero")
var n2 = prompt("n2 - ingresa otro numero")
var n3 = prompt("n3 - ingresa otro numero")


if (n1 > n2 && n1 > n3) {
    alert("El numero 1 es mayor")
} else if (n2 > n1 && n2 > n3) {
    alert("El numero 2 es mayor")
} else if (n3 > n1 && n3 > n2) {
    alert("El numero 3 es mayor.")
}else{
    alert("los numero son iguales")
}