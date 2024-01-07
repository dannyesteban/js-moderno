localStorage.removeItem('meses')


//Actualizar registtro se debe volver a cargar el dato

const mesesArray = JSON.parse(localStorage.getItem(producto))
console.log(mesesArray);

localStorage.clear();

