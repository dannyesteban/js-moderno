export const nombreCliente = 'Danny'

export const ahorro = 500

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente ${nombre} - Ahorro ${ahorro}`
}

export function tieneSaldo(ahorro) {

    if (ahorro > 0) {
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

export class Cliente {

    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre} - Ahorro ${this.ahorro}`
    }

}

// son uno por nombre
export default function nuevaFuncion(){
    console.log('esta es nueva funcion');
}