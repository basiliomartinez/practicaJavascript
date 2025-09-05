// Diseñar una programa que solicite una edad y diga si podemos votar
//menores de 16 años no pueden votar
// entre 18 y 69 años estamos obligados a votar
//16 y 17, y mayores a 70 años es optativo

let edad = parseInt(prompt('ingresa tu edad'))
console.log(edad)

if(edad<16){
    document.writeln ('No puedes votar')
}else{
    if(edad >= 18 && edad <=69)
        document.writeln('debes votar si o si ')
else{
    document.writeln('es optativo votar')
}
}