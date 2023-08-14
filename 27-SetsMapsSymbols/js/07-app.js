// Generador funcion que retorna un 

function *crearGenerador(){
    yield 1
    yield 'Esteban'
    yield 2+2
    yield true
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next().done);
console.log(iterador);
