const producto = {
  nombre: "Teclado",
  precion: 25000,
};
let { nombre, precion } = producto;

console.table(nombre);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [, , c, d] = numeros;
console.log(c);
