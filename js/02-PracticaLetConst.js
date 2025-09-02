const precioProducto = parseFloatm(prompt("Ingrese el valor del producto"));

let precioFinal = precioProducto;

if (precioProducto > 2000) {
  const descuento = precioProducto * 0.25;
  precioFinal = precioProducto - descuento;
  document.writeln("El descuento del producto es de $");
}
