// Crea un programa donde el usuario ingrese un numero y le mostremos por pantalla a que dia de la semana pertenece. 1- Lunes

/*const opcion = parseInt(
  prompt(
    "Ingrese un numero de la semana: 1-Lunes, 2-Martes, 3-Miercoles, 4-Jueves, 5-Viernes, 6-Sabado, 7-Domingo"
  )
);

if(opcion===1){
    document.writeln('Lunes🙃')
}else if(opcion===2){
        document.writeln('Martes🥲')
}
else if(opcion===3){
        document.writeln('Miercoles🙂')
}
else if(opcion===4){
        document.writeln('Jueves😀')
}else if(opcion===5){
        document.writeln('Viernes😃')
}else if(opcion===6){
        document.writeln('Sabado😄')
}else if(opcion===7){
        document.writeln('Domingo😁')
}else{
    document.writeln('Ingresaste una opcion erronea')
} */

const opcion = parseInt(
  prompt(
    "Ingrese un numero de la semana: 1-Lunes, 2-Martes, 3-Miercoles, 4-Jueves, 5-Viernes, 6-Sabado, 7-Domingo"
  )
);
switch (opcion) {
  case "1":
  case "L":
  case 1:
    document.writeln("Lunes🙃");
    break;
  case 4:
    document.writeln("Jueves😎");
    break;
  case 2:
    document.writeln("Martes🥲");
    break;
  case 3:
    document.writeln("Miercoles🤓");
    break;
  case 5:
    document.writeln("Viernes🥳");
    break;
  case 6:
    document.writeln("Sabado🥳");
    break;
  case 7:
    document.writeln("Domingo🥳");
    break;
  default:
    document.writeln("Ingresaste una opcion erronea");
}
