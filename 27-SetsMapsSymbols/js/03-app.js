// Maps  lista ordenas en llave y valor

const cliente = new Map();

cliente.set('nombre','Karen')
cliente.set('tipo','primiun')
cliente.set('saldo',8000)

console.log(cliente);

console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));


cliente.delete('saldo')
console.log(cliente);


cliente.clear()
console.log(cliente);



const paciente = new Map([['nombre','paciente'],['cuerto','101']])

console.log(paciente);

paciente.forEach((e)=>{

    console.log(e);

})