// funciones del teclado

const busqueda = document.querySelector('.busqueda')

// busqueda.addEventListener('keydown',()=>{
//     console.log('escribiendo...');
// }) 
// 
// busqueda.addEventListener('keyup',()=>{
//     console.log('sulta la tecla ...');
// }) 
// 
// 
// busqueda.addEventListener('copy',()=>{
//     console.log('copiar ...');
// }) 
// 
// busqueda.addEventListener('paste',()=>{
//     console.log('pegar ...');
// }) 
// 
// busqueda.addEventListener('cut',()=>{
//     console.log('cortar ...');
// }) 

// Lo que esta escribiendo
busqueda.addEventListener('input',(e)=>{
    if(e.target.value===''){
console.log('vacio');
    }   
 console.log(e.target.value);
}) 