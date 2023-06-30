// seleccionar objetos del DOM 
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');
const cronometro = document.getElementById('cronometro');

// variables del cronometro 
let [horas, minutos, segundos] = [0, 0, 0];
let intervaloDeTiermpo;
let estadoCronometro = 'pausado';

const actualizarConometro = () => {
  segundos++ // se aumenta los segundos en 1

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  // asignacion de formato 
  const segundosConFormato = asignatFormato(segundos);
  const minutosConFormato = asignatFormato(minutos);
  const horasConFormato = asignatFormato(horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`
}

const asignatFormato = (unidadDeTiempo) => unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;

botonInicioPausa.addEventListener('click', () => {
  if (estadoCronometro === 'pausado') {
     intervaloDeTiermpo = window.setInterval(actualizarConometro, 1000); // se define el tiempo en milisegundos para la actualizacion del cronometro
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-btn"></i>'; // se le asigna el icono de pausado al elemento boton
    botonInicioPausa.classList.remove('iniciar'); // se le elimina la clase al elemeto
    botonInicioPausa.classList.add('pausar'); // se le agrega la clase al elemento
    estadoCronometro = 'andando';
  } else {
    window.clearInterval(intervaloDeTiermpo); //eliminamos el intervalo de tiempo para detener el cronometro
    botonInicioPausa.innerHTML = '<i class="bi bi-play-btn"></i>"'
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';
  }
})

botonReiniciar.addEventListener('click', () => {
  window.clearInterval(intervaloDeTiermpo);

  horas = 0;
  minutos = 0;
  segundos = 0;

  // reiniciar 
  cronometro.innerText = '00:00:00';

  // actualizar botones 
  botonInicioPausa.innerHTML = '<i class="bi bi-play-btn"></i>"';
  botonInicioPausa.classList.remove('pausar');
  // botonInicioPausa.classList.add('iniciar');

  // actualizar estado cronometro 
  estadoCronometro = 'pausado';


})


console.log(botonInicioPausa);





