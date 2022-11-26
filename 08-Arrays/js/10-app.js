const carrito = [
  {
    nombre: "Teclado",
    precion: 25000,
  },

  {
    nombre: "Mouse",
    precion: 15000,
  },
  {
    nombre: "Monitor",
    precion: 255000,
  },
  {
    nombre: "parlantes",
    precion: 120000,
  },
];

console.table(carrito);

console.table(carrito.length);
const nuevo1 = carrito.forEach((element) => {
  return element.nombre;
});

const nuevo2 = carrito.map((element) => {
  return element.nombre;
});

console.log(nuevo1);
console.log(nuevo2);
