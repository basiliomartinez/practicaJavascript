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
    document.writeln(`<p>Mostrar todos los datos del objeto</p>`);
  },

  actualizarPrecio: (nuevoPrecio) => {
    document.writeln(`<p>Agregar el codigo para actualizar el precio</p>`);
  },

  mostrarEstado: () => {
    document.writeln(`<p>Mostrar si el funko esta habilitado o no</p>`);
  },
};

// mostrar un objeto
console.log(funko);
document.writeln(funko);
