const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTarea = document.getElementById("lista-de-tareas");

const agregarTarea = () => {
  if (input.value) {
    // si el elemento input tiene informacion o si esta vacio
    // crear tarea
    let tareaNueva = document.createElement("div"); // se crea un elemento html
    tareaNueva.classList.add("tarea"); // se le agrega una clase al elemento creado

    // texto ingresado por el ussario
    let texto = document.createElement("p");
    texto.innerText = input.value; // al elemento creado p se le asigna el valor del input ingresado por el usuario
    tareaNueva.appendChild(texto); // append child no permite agregar elementos hijos al contenedor padre

    // crear agreagar contenedor de iconos
    let iconos = document.createElement("div");
    iconos.classList.add("iconos");
    tareaNueva.appendChild(iconos); // append child no permite agregar elementos hijos al contenedor padre

    // iconos
    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar"); // de esta manera le agregamos varias clases a un elemento al mismp tiempo
    completar.addEventListener("click", completarTarea);

    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar"); // de esta manera le agregamos varias clases a un elemento al mismp tiempo
    eliminar.addEventListener("click", eliminarTarea);

    iconos.append(completar, eliminar); // append permite introducir varios elemntos hijos dentro de su padre

    // agregar tarea a la lista
    listaDeTarea.appendChild(tareaNueva);
  } else {
    alert("agrega una tarea");
  }
};

const completarTarea = (e) => {
  let tarea = e.target.parentNode.parentNode; // de esta ,amera navegamos atraves del dom hasta llegar al elemento que necesitamos
  tarea.classList.toggle("completada"); // togle sirve para vr si un elemento tiene una clase la elimina y si no la tiene se la agrega
};

const eliminarTarea = (e) => {
  let tarea = e.target.parentNode.parentNode; // de esta ,amera navegamos atraves del dom hasta llegar al elemento que necesitamos
  tarea.remove(); // eliminamos un elemento del dom
};

boton.addEventListener("click", agregarTarea);

input.addEventListener('keydown', (e) =>{
  if(e.key ==='Enter'){
    agregarTarea();
  }
})
