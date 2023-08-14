// weakset  solo objetos

const weakset = new WeakSet();

const cliente ={
    nombre :'Esteban',
    saldo: 500
}

//const nombre ='danny'

weakset.add(cliente)

//weakset.add(nombre)

//console.log(weakset.has(cliente));


console.log(weakset);