//Crear un programa que tenga un arays de peliculas. Queremos pedirle al usuario que realice alguna accion. opciones: 1 - encontrar alguna peli en el array 2-filtrar peliculas que contengas alguna parte del nombre 3-mostrar todas las peliculas del array

function mostrarMensaje(mensaje) {
  console.log(mensaje);
  document.writeln(mensaje);
}
const peliculas = [
  "El señor de los anillos",
  "Jurassic Park",
  "John Wick",
  "Jurassic park: El mundo perdido",
  "Interstelar",
  "Jurassic World",
];
console.log(peliculas);

const opcion = parseInt(
  prompt(
    "Seleccionar una opcion: 1 - encontrar alguna peli en el array, 2-filtrar peliculas que contengas alguna parte del nombre, 3-mostrar todas las peliculas del array"
  )
);

do {
  switch (opcion) {
    case 1:
      // Pedir al usuario la peli que quiere buscar
      const peliBuscada = prompt("Ingresa la pelicula que quieres buscar");

      //Buscar la pelicula y mostrar por pantalla si la encontre, si no mostrar un mensaje de pelicula no encontrada
      const coincidencia = peliculas.find(
        (pelicula) => pelicula.toLowerCase() === peliBuscada.toLowerCase()
      );
      console.log(coincidencia);
      //falsies= false, '', undefine, null

      if (coincidencia) {
        mostrarMensaje("Pelicula encontrada 🎬 " + peliBuscada);
      } else {
        mostrarMensaje("No encontraste la pelicula seleccionada 🙃");
      }

      break;
    case 2:
      break;
    case 3:
      mostrarMensaje("<p>Mostrar todos los elementos del array</p>");
      peliculas.forEach((itemPelicula) => mostrarMensaje(itemPelicula));
      break;
    default:
  }
} while (confirm("Queres realizar otra opcion?"));
