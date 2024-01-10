const salida = document.querySelector('#salida')
const mic = document.querySelector('#microfono')

mic.addEventListener('click', ejecutarSpeechAPI)

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.start()

    recognition.onstart = function () {
        salida.classList.add('mostrar')
        salida.textContent = 'Escuchando...'

    }

    recognition.onspeechend = function () {
        salida.textContent = 'Se dejo de grabar'
        recognition.stop()
    }

    recognition.onresult = function (e) {
        console.log(e.results);
        const {confidence, transcript }= e.results[0][0]
        speechSynthesis.innerHTML =`Grabando ${transcript}`
    }
}