//Como esto trabajando directamente con la consola para imprimir este utilizo console
console.log("hello world");


//De esta forma indico los errores
console.error("la aplicacion ha fallado por tal razon prueba");



//Pero si lo que deseo es trabajar con el documento html para mostrar mi mensaje utilizo document
//Ademas de que al texto puedo agregarle cualquier tag html
document.write("<h1>hello world</h1>");


// Tipos de datos en javascript

//string
//var es para indicar que esto es una variable
// tambien se puede utilizar let se utilizar var y let dependiendo de ciertas situaciones
var hello = "hello";
let username = "john";

console.log(hello);

//number
var number = 10000; 
var numberFloat = -2.3;

console.log(numberFloat);

//boolean
var trueVar = true;
var falseVar = false;

//array
var stringArray = ['joe','kar','martha'];
var numberArray = [1,2,3];
var booleanArray = [true,false,true];

//constantes
const PI = 3.1416;

console.log(PI);

console.log(stringArray);

//objetos

// Estos son los objetos de javascript estos son los famosos json
var person = {
    "username" : 'ryan',
    "score" : 70.4,
    "hours" : 14,
    "professional" : true 
};

console.log(person);


//operadores

let number1 = 5;
let number2 = 7;

var resultado = number1 + number2;
var resultado2 = number1 - number2;
var resultado3 = number1 * number2;
var resultado4 = number1 / number2;


console.log(resultado);

//concatenar
let nombre = "carlos";
let apellido = "rodriguez";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

//operadores de comparacion en javascript son iguales que en otros lenguajes
// >  < >= <= == != 

let numero1 = 4;
let numero2 = 7;

let result = numero1 != numero2;

console.log(result);


//Condicionales tambien se puede utilizar === ademas de ==

if (result == true) {

    console.log("el resultado fue true");
} else{

    console.log("el resultado fue false");
}

let score = 70;

//el else if se utiliza cuando 2 condicionales se cumplen al mismo tiempo pero solo deseamos que se ejecute 1
if (score > 30) {

    console.log("necesitas practicar mas");
} else if (score > 15) {
    console.log("Estas mejorando");
}



//switch case

let typeCard = "Credit Card";

switch (typeCard) {
    case "Debit Card":
        console.log("Esta es una tarjeta de debito");
        break;

        case "Credit Card":
            console.log("Esta es una tarjeta de credito");
            break;

    default:
        console.log("no es ninguna tarjeta");
        break;
}



//Bucles