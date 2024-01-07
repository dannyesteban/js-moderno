// eventos en formularios 

const formulario = document.querySelector('#formulario')

// e.preventDefault(); prevenir la acccion del elemento
// formulario.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(e.target.action);
// })

formulario.addEventListener('submit',validarFormulario)

function validarFormulario(e){
    e.preventDefault();
    console.log(e.target.action);
}