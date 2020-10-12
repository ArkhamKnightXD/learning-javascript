//Este archivo se encarga con lo que es el (dom document object model) Que esto es lo que se refiere a hacer nuestro sitio web interactivo
//Aqui siempre se trabajara con lo que es el document y de ahi utilizaremos las funciones correspondientes

//Si queremos acceder en el documento a un titulo o cualquier tag la forma mas facil de hacerlo 
//es mediante el id y esto lo hacemos asi:
//esto basicamente toma el tag completo incluyendo el id ejemplo <h1 id = "id">test</h1>
var h1 = document.getElementById("titulo");

var p = document.getElementById("parrafo");

//si deseamos que solo nos muestren el texto y no el tag completo utilizamos el metodo innerHtml
console.log(p.innerHTML);

//modificando el texto
h1.innerHTML = "nuevo texto";

// para cambiar el color, aqui lo que hacemos es asignarle una propiedad css para cambiar el color
h1.style.color = "red";
h1.style.background = "blue";

console.log(h1.innerHTML);

//trabajando en el parrafo
p.style.color = "blue";


//trabajando el boton
var button = document.getElementById("button");

function changeColor() {
    p.style.color = "olive";
}

//Cuando le pongo onclick con alert lo que hago es que cuando el usuario haga click 
//se ejecutara esta funcion que cambiara el color del parrafo esta es la mejor forma para trabajar onclick 
// siempre debemos llamar a la funcion sin los parentesis para que el onclick funcione, pues si llamamos la funcion con () esta se ejecutara autmoaticamente 

button.onclick = changeColor;


//acceder a un elemento html a travez de la clase nota si hay varios tags que tienen la misma clase este metodo nos retornara todos estos tags mediante un array
var parrafoClass = document.getElementsByClassName("lead");

//si quisieramos acceder a un parrafo especifico del array hariamos parrafoClass[1];
console.log(parrafoClass);


//De esta forma podemos identificar todos los parrafos que tenga nuestro sitio web
var cantidadParrafos = document.querySelectorAll("p");

console.log(cantidadParrafos);


var botonEvemt = document.getElementById("button");


//eventos con los eventos podemos detectar cuando se hacer click con el mouse o hover y mas y cuando se suelta el mouse sobre el boton o X elemento
botonEvemt.addEventListener("click", function() {
    console.log("me diste un click");
});

// a una funcion sin nombre se le dice funcion anonima, en los eventos no es necesario nombrar las funciones
botonEvemt.addEventListener("mouseover", function () {
    console.log("mouse hover")
});

botonEvemt.addEventListener("mouseout", function () {
    console.log("mouse bye")
});

