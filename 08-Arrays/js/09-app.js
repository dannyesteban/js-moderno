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
carrito.forEach((element) => {
  console.log(element.nombre);
});
