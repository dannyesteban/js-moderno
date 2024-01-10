const notificarBtn = document.querySelector('#notificar')

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission()
        .then(res => {
            console.log('Resultado es: ' + res);
        })

})

const verNotificacion = document.querySelector('#verNotificacion')

verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/ccj.png',
            body: 'Holaaaaaaaaaaaaa'
        })

        notificacion.onclick = function () {
            window.open('https://www.datint.co')
        }
    }

})