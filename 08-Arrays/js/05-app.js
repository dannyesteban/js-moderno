// Forma declarativa no modifica el objeto actual
const carrito = [];

const producto = {
  nombre: "Teclado",
  precion: 25000,
};

const producto2 = {
  nombre: "Mouse",
  precion: 15000,
};
const producto3 = {
  nombre: "Monitor",
  precion: 255000,
};

let resultado;

resultado = [...carrito, producto, producto2];
console.table(resultado);
resultado = [...resultado, producto3];
console.table(resultado);
