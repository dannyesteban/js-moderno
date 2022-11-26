const producto ="  Nequi   "

const producto2 =String("televisor pulgadas 20")

const producto3 = new String("table de 7  con android ")


console.log(producto, producto2, producto3);

console.log(producto.length);
console.log(producto2.includes("pulgadas") );
console.log(producto2.includes("table") );

console.log(producto.concat(producto2));

console.log(`Hola pendejo  ${producto}`);


console.log(producto);
console.log(producto.trimStart());
console.log(producto.trim());
console.log(producto.trimEnd());


console.log(producto2.replace('pulgadas','"'));
console.log(producto2.slice(0,11));
console.log(producto2.substring(0,5));

const usuario="Esteban Acosta"

console.log(usuario.substring(0,1))
console.log(usuario.charAt(0))

console.log(usuario.repeat( 10))

console.log(usuario.split(' '))



const tweet = "Aprendiende #javascript en udemy"

console.log(tweet.split('#'))

console.log(tweet.toUpperCase())

console.log(tweet.toLowerCase())

console.log()