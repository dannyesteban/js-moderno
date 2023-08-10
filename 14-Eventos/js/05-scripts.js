// evnetos con el scroll

window.addEventListener('scroll',()=>{
   // console.log('scroll');
   // const scrollPx=window.scrollY

    const premium = document.querySelector('.premium')

    const  ubucacion = premium.getBoundingClientRect()

  //  console.log(ubucacion);
    if(ubucacion.top < 100){
        console.log('El elemento ya esta visible');
    }else{
        console.log('aun no ');

    }
})