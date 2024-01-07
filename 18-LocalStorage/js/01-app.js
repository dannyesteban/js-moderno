localStorage.setItem('nombre',1)

const producto ={
    nombre:'monitor',
    precio:1800000
}

const protuctoString = JSON.stringify(producto);
console.log(protuctoString);
//sessionStorage.setItem('nombre','esteban')

localStorage.setItem('producto',protuctoString)

const mese =['enero','febrero','marzo']
const mesesString = JSON.stringify(mese);

localStorage.setItem('meses',mesesString)