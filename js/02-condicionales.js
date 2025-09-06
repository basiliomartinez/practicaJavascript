// Condicionales simples
/*
If (condicion) {
Codigo a ejecutar si se cumple la condicion
}
*/

// Condicionales dobles
/*
If (condicion) {
Codigo a ejecutar si se cumple la condicion
} else {
 Codigo a ejecutar si no cumple la condicion}
*/

// Pedir al usuario una edad y decir si es mayor de edad o no
// 18 años es mayor de edad

let edad = parseInt(prompt("ingresa tu edad"));
console.log(edad);

console.log(isNaN("Hola")); // True
console.log(isNaN("18"));
console.log(isNaN(18));

if (isNaN(edad)) {
  document.writeln("Edad no valida");
} else {
  if (edad >= 18) {
    document.writeln("Sos mayor de edad 😎");
  } else {
    document.writeln("Sos menor de edad 👑");
  }
}
