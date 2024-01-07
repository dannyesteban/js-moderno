const nav = document.querySelector('.navegacion');

nav.addEventListener('click',()=>{
    console.log('click aqui');
    nav.style.backgroundColor='red'
})

nav.addEventListener('mouseenter',()=>{
    console.log('sobre el mouse');
})

nav.addEventListener('mouseout',()=>{
    console.log('saliendo ');
})

nav.addEventListener('mousedown',()=>{
    console.log('saliendo mousedown');
})

nav.addEventListener('mouseup',()=>{
    console.log('sueltas el click mouseup');
})

nav.addEventListener('dblclick',()=>{
    console.log('doble  click dblick');
})