//clase declaracion
class Cliente {

      // privado #
    #nombre;

    setNombre(nombre){
        this.#nombre= nombre
    }

    getNombre(){
        return this.#nombre
    }
/*
    constructor(nombre, saldo){
      
        this.#nombre= nombre,
        this.saldo= saldo
    }

    mostrearInfo(){
        return `Cliente ${this.#nombre} tu saldo es  ${this.saldo}`
    }

    static bienvenido(){
        return `Bienvenido al cajero`
    }
*/
}

const esteban = new Cliente()
esteban.setNombre('Esteban')
console.log(esteban.getNombre());

