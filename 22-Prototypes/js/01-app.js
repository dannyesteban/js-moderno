const cliente ={
    nombre:'Esteban',
    saldo: 500000
}

console.log(cliente);
console.log(typeof cliente);

function clientes(nombre,saldo){
    this.nombre= nombre,
    this.saldo=saldo
};

const esteban = new clientes('Dany',900)
console.log(esteban);