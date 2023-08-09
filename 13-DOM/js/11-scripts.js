const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')

// funcion anonima
/*btnFlotante.addEventListener('click',()=>{
    console.log('desite clck');
})*/

btnFlotante.addEventListener('click',mostrarOcultarFooter)

function  mostrarOcultarFooter(){
    console.log('desite clck')
    console.log(footer.classList)
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo')
        this.classList.remove('activo')
       this.textContent='Idioma y Moneda'
    }else{
        footer.classList.add('activo')
        btnFlotante.classList.add('activo')
        this.textContent='X Cerrar'
    }
}