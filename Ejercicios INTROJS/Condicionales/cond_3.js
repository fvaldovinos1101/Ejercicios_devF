//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

var n1 = prompt("escribe un numero")
if ((n1 % 2) === 0) {
    alert(n1 + " es un numero par")
} else {
    alert(n1 + " no es un numero par")
}