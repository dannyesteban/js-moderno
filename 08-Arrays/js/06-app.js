// Forma declarativa
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

const producto4 = {
  nombre: "parlantes",
  precion: 120000,
};

let resultado;

resultado = [...carrito, producto, producto2];
resultado = [...resultado, producto3, producto4];
console.table(resultado);

// eliminar posicion elemento
resultado.splice(2, 1);
console.table(resultado);

// eliminar ultima elemento
resultado.pop();
console.table(resultado);

// eliminar primero elemento
resultado.shift();
console.table(resultado);

// eliminar posicion elemento
resultado.shift(1, 2);
console.table(resultado);
