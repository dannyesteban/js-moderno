// Symbols apartir de esma 6 

const sym = Symbol();
const sym2 = Symbol()

console.log(sym);
console.log(sym2);

if(sym=== sym2){
    console.log('iguales')
}else{
    console.log('difentes')
}

const persona ={}

console.log(persona);

const nombre = Symbol();
const apellido = Symbol()

// Agrear nombre y apellido como llaves

persona[nombre]='Danny'
persona[apellido]='Acosta'
persona.saldo=5000

console.log(persona);

console.log(persona[nombre]);

// no son interables 

// Definir descripcion 

const nombreCliente = Symbol('Nombre del cliente')

const cliente={}

cliente[nombreCliente]='pedro'

console.log(cliente);
console.log(cliente[nombreCliente]);
