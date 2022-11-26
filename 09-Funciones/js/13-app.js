// Metodos de propierdad
const reproductor = {
  cancion: "",
  reproducir: (id = 0) => console.log(`reproduciendo ...${id}`),
  borrando: (id) => console.log(`Borrando ...${id}`),
  pausar: (id) => {
    console.log(`pausando ...${id}`);
  },
  set nuevaCancion(cancion){
    this.cancion = cancion;
    console.log(`Adicionando cancion ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`Cancion ${this.cancion}`);
  },
};

reproductor.reproducir(50);
reproductor.pausar(50);
reproductor.borrando(450);
reproductor.nuevaCancion="la pollera colora";
reproductor.obtenerCancion;
