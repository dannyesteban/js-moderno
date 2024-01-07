//clase declaracion
class Cliente {

    constructor(nombre, saldo){
        this.nombre= nombre,
        this.saldo= saldo
    }



}

const esteban = new Cliente('Esteban',400)
console.log(esteban);

// ----------------------- Clase expresion
const Cliente2 =class{

    constructor(nombre, saldo){
        this.nombre= nombre,
        this.saldo= saldo
    }


}

const esteban2 = new Cliente2('Esteban',600)
console.log(esteban2);