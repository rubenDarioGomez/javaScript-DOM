//Seleccionar elementos del DOM
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// almacenamiento de los valorers del input
let rojo = inputRojo.value; 
let verde = inputVerde.value;
let azul = inputAzul.value;

// se le asigna el valor del input al parrafo
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor()  {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB
}

inputRojo.addEventListener('change', (e) =>{
    rojo = e.target.value;
    textoRojo.innerText = rojo;
actualizarColor(rojo,verde,azul);
}) 

inputVerde.addEventListener('change', (e) =>{
    verde = e.target.value;
    textoVerde.innerText = verde;
actualizarColor(rojo,verde,azul);
}) 

inputAzul.addEventListener('change', (e) =>{
    azul = e.target.value;
    textoAzul.innerText = azul;
actualizarColor(rojo,verde,azul);
}) 



