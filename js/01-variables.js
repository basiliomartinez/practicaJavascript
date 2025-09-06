// Esto es un comentario

/*
Esto es un comentario
de 
multiples lineas
*/

// Como mandar mensajes

console.log("hola mundo");
console.info("hola mundo");
console.warn("hola mundo");
console.error("hola mundo");

document.writeln("hola mundo");
document.writeln("<h1 class='tex-blue'>hola mundo</h1>");

// ventanas emergentes

//alert("practica de alert");

// variables var-let-const

const taiga ='https://tree.taiga.io/project/earias08-comision-web16/us/74?kanban-include_attachments=1&kanban-include_tasks=1&kanban-status=10453682'

console.log(taiga)
document.writeln('<p>'+taiga+'</p>')
document.writeln(taiga)
document.writeln('un nuevo texto')

let curso = 'fullstack MERN'

document.writeln (curso)
document.writeln('<p>'+curso+'</p>')
document.writeln('<br>' + curso)

curso= 'Netxjs' // string
document.writeln('<br>' + curso)

const anio= 2025 //numbre
const encendido= false //boolean

//Solicitar al usuario su nombre y saludarlo por pantalla

const nombreUsuario= prompt('Ingresa tu nombre')
console.log(nombreUsuario)
document.writeln('<br> Bienvenido ' + nombreUsuario + ' 😎')
document.writeln(`<br> Hola ${nombreUsuario} 😊 `)