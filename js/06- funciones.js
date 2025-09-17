// como declarar o crear una funcion
function saludar() {
  document.writeln("Hola Mundo 🌎");
}

//funcion tradicional con parametros
function valorAleatorio(max, min) {
  const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  document.writeln(`<p> El numero aleatorio creado es: ${aleatorio}</p>`);
}

//funciones que retornan un valor
function suma (numero1, numero2){
    const total = numero1 + numero2
console.log(total)
return total
}


//invocar o llamar a una funcion
saludar();

const numeroMaximo = parseInt(prompt("Ingresa un numero maximo"));
const numeroMinimo = parseInt(prompt("Ingresa un numero minimo"));

valorAleatorio(numeroMaximo, numeroMinimo);

const resultado = suma(10, 24)
document.writeln(`<p> El resultado de la suma es: ${resultado}</p>`)