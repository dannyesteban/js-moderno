//clase declaracion
class Cliente {

    constructor(nombre, saldo){
        this.nombre= nombre,
        this.saldo= saldo
    }

    mostrearInfo(){
        return `Cliente ${this.nombre} tu saldo es  ${this.saldo}`
    }

    static bienvenido(){
        return `Bienvenido al cajero`
    }

}

const esteban = new Cliente('Esteban',400)
console.log(esteban);
console.log(esteban.mostrearInfo());
console.log(Cliente.bienvenido());