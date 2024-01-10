const abrirBtn = document.querySelector('#abrir-pantalla-completa')
const salirBtn = document.querySelector('#salir-pantalla-completa')

abrirBtn.addEventListener('click', pantallCompleta)
salirBtn.addEventListener('click', salirPantalla)

function pantallCompleta() {
    document.documentElement.requestFullscreen()
}

function salirPantalla() {
    document.exitFullscreen();
}