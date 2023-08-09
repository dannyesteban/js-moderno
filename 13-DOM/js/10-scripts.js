// nuevo enlace
const enlace = document.createElement('A');

enlace.textContent='Nuevo Enlace';

enlace.href='/nuevo-enlace'

enlace.target='_blank'

enlace.onclick=miFuncion;

console.log(enlace);

// selecionar navegacion
const navegacion= document.querySelector('.navegacion');
//navegacion.appendChild(enlace);
console.log(navegacion.children)
navegacion.insertBefore(enlace,navegacion.children[1]);

function miFuncion(){
    alert('diste click')
}

// crear card
const parrafo1 = document.createElement('p');
parrafo1.textContent='Concierto';
parrafo1.classList.add('categoria','concierto');
console.log(parrafo1);

const parrafo2 = document.createElement('p');
parrafo2.textContent='Concierto de Rock';
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p');
parrafo3.textContent='$80.000 por persona';
parrafo3.classList.add('precio')

// crear div clase info

const info = document.createElement('div')
info.classList.add('info')
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear imagen

const imagen = document.createElement('img')
imagen.src ="img/hacer2.jpg"
imagen.alt="Texto alternativo"

//Crear card
const card = document.createElement('div')
card.classList.add('card')
card.appendChild(imagen)
card.appendChild(info);

// insertar html
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.insertBefore(card,contenedor.children[0])




