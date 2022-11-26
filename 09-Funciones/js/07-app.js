iniciarApp();
function iniciarApp() {
  console.log("Iniciando App....");
  segundaFn();
}

function segundaFn() {
  console.log("Segunda Funcion");
  usuarioAutenticado('Danny');
}

function usuarioAutenticado(usuario) {
  console.log("Validando.... espere");
  console.log(`Bienvenido ${usuario}`);
}