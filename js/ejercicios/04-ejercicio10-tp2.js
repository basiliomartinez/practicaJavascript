const filas = parseInt(prompt("Ingresa la cantidad de filas"));
const columnas = parseInt(prompt("Ingresa la cantidad de columnas"));
let total = filas * columnas

document.writeln(`<table class="table table-striped-columns <tbody>"`);
for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  document.writeln(`<tr>`);

  for (let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++) {
    document.writeln(` <td>${total--}</td>`);
  }
  document.writeln(`</tr>`);
}

document.writeln(` 
  </tbody>
</table>`);
