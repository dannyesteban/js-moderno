// eventos event bubbling  --- delegation

const carDiv= document.querySelector('.card');


carDiv.addEventListener('click',(e)=>{

    if(e.target.classList.contains('titulo')){
        console.log('click en titulo');
    }
    if(e.target.classList.contains('precio')){
        console.log('click en precio');
    }

    if(e.target.classList.contains('card')){
        console.log('click en card');
    }

})

