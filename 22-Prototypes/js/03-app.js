// funciones esclusivas a un objeto
 
function clientes(nombre,saldo){
    this.nombre= nombre,
    this.saldo=saldo
}
 clientes.prototype.tipoCLiente= function(){

    let tipo 

    if(this.saldo > 1000){
        tipo='Gold'
    }else{
        tipo= 'platino'
    }
    
    return tipo;
 }   

const danny = new clientes('Dany',1900)
//danny.tipoCLiente();
console.log(danny.tipoCLiente())


function empresa(nombre,saldo,categoria){
    this.nombre=nombre,
    this.saldo = saldo,
    this.categoria = categoria
}


const cce = new empresa('codigo con juna',700,'curso en linea')
//console.log(cce);