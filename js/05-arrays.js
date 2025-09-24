//array vacio
const colores = [];
// array con datos
const juegos = [
  "aoe II",
  "half life",
  "minecraft",
  true,
  200.5,
  2025,
  "Pokemon",
];

//mostrar el array
console.log(colores);
console.log(juegos);
document.writeln(`<p>Array de colores: ${colores}</p>`);
document.writeln(`<p>Array de colores: ${juegos}</p>`);
document.writeln(`<p>Elemento del array: ${juegos[1]}</p>`);
document.writeln(`<p>Elemento del array: ${juegos[5]}</p>`);
document.writeln(`<p>Elemento del array: ${juegos[juegos.length - 1]}</p>`);
document.writeln(`<p>Elemento del array: ${juegos[20]}</p>`);
document.writeln(`<p>Cuantos elementos tiene el array: ${juegos.length}</p>`);

document.writeln(`<h3>Lista de juegos 🎮</h3>`);
document.writeln(`<ul class="list-group">
  <li class="list-group-item">${juegos[0]}</li>
  <li class="list-group-item">${juegos[1]}</li>
  <li class="list-group-item">${juegos[2]}</li>
  <li class="list-group-item">${juegos[3]}</li>
</ul><br>`);

//Estoy repitiendo codigo, me conviene hacer un bucle
document.writeln(`<br><h3>Lista de juegos 🎮</h3>`);

document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

//Agregar elementos en el  array
juegos.unshift("LOL");

document.writeln(
  `<br><h3>Agregar elementos al inicio array juegos 🎮 - cantidad de elementos: ${juegos.length}</h3>`
);

document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

juegos.push("VALORANT");
document.writeln(
  `<br><h3>Agregar elementos al final array juegos 🎮 - cantidad de elementos: ${juegos.length}</h3>`
);

document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

juegos.splice(5, 0, "CIUDADES");
document.writeln(
  `<br><h3>Agregar elementos  en el medio del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h3>`
);

document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

//Modificar elementos de un array
juegos[6] = "TERRARIA";
document.writeln(
  `<br><h3>Modificar un elemento  en el medio del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h3>`
);

document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);


juegos.shift()
document.writeln(
  `<br><h3>Borrar el primer elemento del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h3>`
);

document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);


juegos.pop()
document.writeln(
  `<br><h3>Borrar el ultimo elemento del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h3>`
);

document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);



juegos.splice(3,1)
document.writeln(
  `<br><h3>Borrar el  elemento del medio del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h3>`
);

document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);