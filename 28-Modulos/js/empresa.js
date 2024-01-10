import { Cliente } from "./cliente.js";

export class Empresa extends Cliente {
    constructor(nombre, ahorro, categorio) {
        super(nombre, ahorro)
        this.categorio = categorio;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre} - Ahorro ${this.ahorro} - Categoria: ${this.categorio}`
    }
}
