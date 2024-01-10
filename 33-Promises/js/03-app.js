const aplicarDescuetno = new Promise((resolve, reject) => {
  const descuente = false

  if (descuente) {
    resolve("Descuento Aplicado")
  } else {
    reject("No se epliaco el descuento")
  }
})
//console.log(aplicarDescuetno)
aplicarDescuetno
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error))
