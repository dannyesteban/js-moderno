///(function(){
///    
///console.log('desde un IIFE');
///})();

// porque {} 
import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import {Empresa} from './empresa.js'

console.log(mostrarInformacion('esteban', 6000));

tieneSaldo(6000);

const cliente = new Cliente('Pacsy', 750);

console.log(cliente.mostrarInformacion());



const empresa = new Empresa('Codigo Esteban',5454658,'Developer');
console.log(empresa);


nuevaFuncion();
