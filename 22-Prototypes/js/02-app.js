function clientes(nombre,saldo){
    this.nombre= nombre,
    this.saldo=saldo
};

const esteban = new clientes('Dany',900)
console.log(esteban);

function fortmatearCliente(clientes){
    const {nombre, saldo}=clientes
    return `El cliente ${nombre} tiene un saldo ${saldo}`
}

console.log(fortmatearCliente(esteban))

function empresa(nombre,saldo,categoria){
    this.nombre=nombre,
    this.saldo = saldo,
    this.categoria = categoria
}

function fortmatearEmpresa(empresa){
    const {nombre, saldo, categoria}=cce
    return `El cliente ${nombre} tiene un saldo ${saldo} y categoria ${categoria}`
}
const cce = new empresa('codigo con juna',700,'curso en linea')

console.log(fortmatearEmpresa(cce))

