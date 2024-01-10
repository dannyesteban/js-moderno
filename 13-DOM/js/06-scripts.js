const encabezado = document.querySelector(".contenido-hero h1");

console.log(encabezado);
console.log(encabezado.innerText); // si en el CSS - visibility hidden no lo va a encontas
console.log(encabezado.textContent); // en este si
console.log(encabezado.innerHTML);

document.querySelector(".contenido-hero h1").textContent = "Nuevo texto";
