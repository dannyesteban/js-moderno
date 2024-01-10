window.addEventListener('online', actualizaEstado)
window.addEventListener('offline', actualizaEstado)

function actualizaEstado(){
    if (navigator.onLine) {
        console.log('Si esta Conectado');
    } else {
        console.log('No ests conectado');
    }
}