// sets  lista de varoles , no tiene valores repetidos, sin clave valor
const carrito = new Set()


carrito.add('camisa')
carrito.add('disco 1')
carrito.add('disco 2')
carrito.add('disco 3')

console.log(carrito.size);

console.log(carrito.has('camisa'))

//carrito.delete('disco 1')
//carrito.clear()
/*
carrito.forEach((producto, index, pertenece) => {
    console.log(producto);
    console.log(index);
    console.log(pertenece);
})*/

console.log(carrito);

// ejemplo 

const numeros =[10,20,30,40,50,10,20]

const noDuplicados = new Set(numeros)
console.log(noDuplicados);
