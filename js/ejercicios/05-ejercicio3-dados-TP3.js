const sumas = [];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.ceil(Math.random() * 6);
  let dado2 = Math.ceil(Math.random() * 6);
  let suma = dado1 + dado2;
  sumas.push(suma);
}
console.log(sumas);
sumas.sort((a, b) => a - b);
console.log(sumas);

if (sumas) {
  let repeticiones = 1;
  for (i = 0; i < sumas.length; i++) {
    if (sumas[i] === sumas[i + 1]) {
      repeticiones++;
    } else {
      document.writeln(
        `<p> El numero ${sumas[i]} se repite ${repeticiones} veces</p>`
      );
      repeticiones = 1;
    }
  }
}
