//usuarios
//propiedades: nombre, apellido, email, password, edad, dni, estado
//metodos: iniciarSecion, recupererPassword, cambiarEstado, mostrarDatos

//Nuevo concepto===Herencia===

//Alumnos
//curso, asistencia, notas, modulos, rollingcoins
//actualizacionRollingCoins, mostrarDatos, actualizacionAsistencia, agregarNotas, mostrarModulo, actualizarModulo

class Usuario {
  //diseñar las propiedades

  //encapsulo o protejo datos
  #email;
  #password;
  constructor(nombreParam, apellido, email, password, edad, dni) {
    //clave: valor
    this.nombre = nombreParam;
    this.apellido = apellido;
    this.#email = email;
    this.#password = password;
    this.edad = edad;
    this.dni = dni;
    this.estado = true; //propiedades por defecto
  }

  //diseñar get y set
  get email() {
    return this.#email;
  }

  get getPassword() {
    return this.#password;
  }

  set email(nuevoEmail) {
    //si existe el nuevo email
    if (nuevoEmail) {
      this.#email = nuevoEmail;
    }
  }

  set setPassword(nuevoPassword) {
    if (nuevoPassword.length > 0) {
      this.#password = nuevoPassword;
    }
  }

  //Diseñar los metodos
  mostrarDatos() {
    document.writeln(`<h3>Usuario</h3>`);
    document.writeln(`<ul>
  <li>Nombre y Apellido: ${(this.nombre, this.apellido)} </li>
  <li>email: ${this.#email} </li>
  <li>dni: ${this.dni} </li>
  </ul>`);
  }
}

// TODO Herencia
class Alumno extends Usuario {
  #asistencia;
  #notas;
  #modulos;
  #rollingcoins;
  #curso;

  constructor(nombreParam, apellido, email, password, edad, dni, curso) {
    // Super invoca al constructor de la clase padre o base.
    super(nombreParam, apellido, email, password, edad, dni);
    this.#curso = curso;
    this.#asistencia = 0;
    this.#notas = 0;
    this.#modulos = 1;
    this.#rollingcoins = 0;
  }
  //Agrego los get y set
  get curso() {
    return this.#curso;
  }
  get asistencia() {
    return this.#asistencia;
  }
  get notas() {
    return this.#notas;
  }
  get modulos() {
    return this.#modulos;
  }
  get rollingCoins() {
    return this.#rollingcoins;
  }

  set asistencia(nuevaAsistencia) {
    this.#asistencia = nuevaAsistencia;
  }
  set notas(nuevaNota) {
    if (nuevaNota > 0 && nuevaNota <= 10) {
      this.#notas = nuevaNota;
    }
  }
  set modulos(nuevoModulo) {
    this.#modulos = nuevoModulo;
  }
  set rollingCoins(nuevoRollingCoins) {
    this.#rollingcoins = nuevoRollingCoins;
  }

//Metodos
otorgarRollincoins(cantidad){
 //this.#rollingcoins= this.#rollingcoins + cantidad 
this.#rollingcoins += cantidad
}

}

// implementar o usar mi clase
const marcos = new Usuario(
  "Marcos",
  "Molina",
  "marcos@email.com",
  "123asdA@sdfs",
  25,
  "40222333"
);

const Valentina = new Usuario(
  "Valentina",
  "Iramain",
  "valen@email.com",
  "123asdA@sdfs",
  30,
  "50224330"
);

console.log(marcos);
marcos.mostrarDatos();
console.log(Valentina);
Valentina.mostrarDatos();

document.writeln(`<p>Email de Marcos: ${marcos.email}</p>`);
//Actualizo o cambio un dato
marcos.email = "marcosmolina@mail.com";
console.log(marcos);
marcos.mostrarDatos();

// Muestro el password de Valentina con get
document.writeln(`<p>Password de Valentina: ${Valentina.getPassword}</p>`);

//Cambio el password de Valentina con set
Valentina.setPassword = prompt("Ingresa un nuevo password");
document.writeln(`<p>El nuevo password es: ${Valentina.getPassword}</p>`);

// Usar la nueva clase Alumno
const lisandro = new Alumno(
  "Lisandro",
  "Araoz",
  "lisandro@mail.com",
  "124jkljfkld",
  22,
  "40333222",
  "FullStack MERN"
);

console.log(lisandro);
lisandro.mostrarDatos();

document.writeln(`<p>Rollincoins de ${lisandro.nombre}: ${lisandro.rollingCoins}</p>`)

lisandro.otorgarRollincoins(3)
document.writeln(`<p>Rollincoins de ${lisandro.nombre}: ${lisandro.rollingCoins}</p>`)
