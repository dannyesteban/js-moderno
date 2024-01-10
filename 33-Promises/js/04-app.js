const paises = []

const nuevoPais = (pais) =>
  new Promise((resolver) => {
    setTimeout(() => {
      paises.push(pais)
      resolver(`Agregado: ${pais}`)
    }, 2000)
  })

nuevoPais("Colombia")
  .then((resultado) => {
    console.log(resultado)
    console.log(paises)
    return nuevoPais("Francias")
  })
  .then((resultado) => {
    console.log(resultado)
    console.log(paises)
  })
