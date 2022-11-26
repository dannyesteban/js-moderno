// Metodos de propierdad
const reproductor = {
  reproducir: function (id = 0) {
    console.log(`reproduciendo ...${id}`);
  },
  pausar: function (id) {
    console.log(`pausando ...${id}`);
  },
};

reproductor.reproducir(50);
reproductor.pausar(50);
