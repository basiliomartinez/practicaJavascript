// Objeto: notacion literal

/*
Propiedades:
codigo
nombre
tamaño
precio
marca
estado:true

Metodos:
actualizaPrecio (nuevo precio)
cambiaEstado(nuevo estado)  
 */

// Objeto vacio
const cancion = {};

//objeto con valores
const funko = {
  //definior propiedades
  //clave: valor (cuakquier tipo de dato en js)

  codigo: 867,
  precio: 20.5,
  nombre: "Tanjiro kamado",
  marca: "special edition",
  estado: true,

  //metodos
  mostrarDatos: function () {
    console.log(this)
    document.writeln(`<p><b>Funko: ${this.nombre}</b></p>`);
    document.writeln(`<ul>
<li>Codigo: ${this.codigo}</li>
<li>Precio: ${this.precio}</li>
<li>Marca: ${this.marca}</li>
<li>Estado: ${this.estado}</li>
    </ul>`);
  },

  actualizarPrecio: function (nuevoPrecio){
    console.log (this)
    console.log(this.precio)
    this.precio=nuevoPrecio
    document.writeln(`<p>El nuevo precio se: ${nuevoPrecio}</p>`);
  },

  mostrarEstado: () => {
    document.writeln(`<p>Mostrar si el funko esta habilitado o no</p>`);
  },
};

// mostrar un objeto
console.log(funko);
document.writeln(funko);
//mostrar las propiedades de un objeto
document.writeln(`<p>Codigo: ${funko.codigo}</p>`);
document.writeln(`<p>Codigo: ${funko.nombre}</p>`);
document.writeln(`<p>Precio: $ ${funko["precio"]}</p>`);
document.writeln(`<p>Tamaño: ${funko.tamanio}</p>`);
document.writeln(`<p>Marca: ${funko.marca}</p>`);
//modificar la propiedad de un objeto
funko.marca = "Exclusive Funko";
document.writeln(`<p>Marca: ${funko.marca}</p>`);
//agregar propiedades nuevas o metodos nuevos al objeto
funko.tamanio = "Regular";
document.writeln(`<p>Tamaño: ${funko.tamanio}</p>`);

console.log(funko);

funko.tienda = "No definido";
document.writeln(`<p>Tienda=${funko.tienda}</p>`);
//borrar la propiedad del objeto
delete funko.tienda;
document.writeln(`<p>Tienda: ${funko.tienda}</p>`);

//usar metodos del objeto
funko.mostrarDatos()
funko.actualizarPrecio(100)
funko.mostrarDatos()