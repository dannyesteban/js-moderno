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

class Empresa extends Cliente{

    constructor(nombre,saldo,telefono,categoria){
        super(nombre,saldo) // LLama los datos de la herencia 
        this.telefono= telefono,
        this.categoria= categoria

    }

    // rescribir un metodo
    static bienvenido(){
        return `Bienvenido al cajero de empresas`
    }

}

const esteban = new Cliente('Esteban',400)
const empresa = new Empresa('Codigo Esteban',500,30083013,'la fabrica')
console.log(empresa);

console.log(Cliente.bienvenido());
console.log(Empresa.bienvenido());