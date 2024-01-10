const paises = []

function nuevoPais(pais, callback) {
  paises.push(pais)
  console.log(`Agregado: ${pais}`)
  callback()
}

function mostrarPaise() {
  console.log(paises)
}

function iniciarCallbackHell() {
  setTimeout(() => {
    nuevoPais("Colombia", mostrarPaise)
    setTimeout(() => {
      nuevoPais("Alemania", mostrarPaise)
    }, 3000)
  }, 3000)
}

iniciarCallbackHell()
