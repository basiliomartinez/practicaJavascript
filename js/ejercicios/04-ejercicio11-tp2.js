const nombre1 = prompt("Ingrese el primer nombre");
const edad1 = parseInt(prompt("Ingrese la primer edad"));
const nombre2 = prompt("Ingrese el segundo nombre");
const edad2 = parseInt(prompt("Ingrese la segundo edad"));
const nombre3 = prompt("Ingrese el tercer nombre");
const edad13 = parseInt(prompt("Ingrese la tercer edad"));

const edadMaxima = Math.max(edad1, edad2, edad13);
console.log(Math.max(edad1, edad2, edad13));

if (edadMaxima === edad1) {
  document.writeln(
    `La persona mas grande es ${nombre1} con la edad de ${edadMaxima}`
  );
} else if (edadMaxima === edad2) {
  document.writeln(
    `La persona mas grande es ${nombre2} con la edad de ${edadMaxima}`
  );
} else {
  document.writeln(
    `La persona mas grande es ${nombre3} con la edad de ${edadMaxima}`
  );
}
