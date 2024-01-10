// Traversing the DOM
/*const navegacion = document.querySelector(".navegacion");
console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco son considerados en elementos
console.log(navegacion.children);*/

const card = document.querySelector(".card")
console.log(card.children[1].children[1].textContent)

console.log(card.children[0])
card.children[0].src = "img/hacer3.jpg"

// Traversing the DOM   children to Parent
console.log(card.parentElement.parentElement.parentElement)
// cambio de elemetos del mismo tipo
console.log(card.nextElementSibling.textContent)
// Regresa un elemento
//console.log(card.previousElementSibling.textContent);
// Eliminar objeto
const primerEnlace = document.querySelector("a")
primerEnlace.remove()
console.log("remove")

// Eliminar desde el padre
const navegacion = document.querySelector(".navegacion")
console.log(navegacion.children)
navegacion.removeChild(navegacion.children[2])
