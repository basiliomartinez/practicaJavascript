//usuarios
//propiedades: nombre, apellido, email, password, edad, dni, estado
//metodos: iniciarSecion, recupererPassword, cambiarEstado, mostrarDatos

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

  set email(nuevoEmail) {
    //si existe el nuevo email
    if (nuevoEmail) {
      this.#email = nuevoEmail;
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
