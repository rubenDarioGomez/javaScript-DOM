// seleccionar elemntos del dom
const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColor(){
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16) // random retorna un numero seudo aleatorio entre  0 y 1
    // floor devuelve un numero aprominado entero del resutado de random * 16

  colorHex += digitos[indiceAleatorio]; // a la variable colorHex se le van adicionado los digitos generados por el ciclo for
  }
  return colorHex;
}

boton.addEventListener('click', function(){ 
  let colorAleatorio = generarColor() // la variable colorAleatorio rebibe el valor retornado por la funcion  generarColor
  color.textContent = colorAleatorio; // al elemento p le actualizamos el valor generado por la funcion

document.body.style.backgroundColor = colorAleatorio // de esta manera actualizamos el color del fondo del body oara se sea el que genera la funcion
});
