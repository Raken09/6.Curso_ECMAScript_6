// Antes los parametros por defecto se colocaban asi:
function newFuntion(name, age, country) {
    var name = name || 'Edward';
    var age = age || 21;
    var country = country || 'NE';
    console.log(name, age, country);
}

// Depues de ECMAScript 6+:
function newFunction2(name = "Edward", age = 21, country = 'NE') {
    console.log(name, age, country);
}

newFunction2(); // Devuelve los valores por defecto.
newFunction2('Juan', 25, 'ES');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`; // es6 "Template literals"
console.log(epicPhrase2);

//Multilinea strings

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit \n"
+ "Otra frase que se necesite";

// es6 
let lorem2 = `Otra frase epica que necesitamos
otra frase epica
`;

console.log(lorem);
console.log(lorem2);

// Desestructuración de objetos
let person = {
    'name': "Juan",
    'age': 25,
    'country': 'ES'
}

console.log(person.name, person.age, person.country);

// es6
let {name, age, country} = person;
console.log(name); // Selecciono las variables que quiero mostrar.

// Desestructuración de arrays
let team1 = ["Oscar", "Juan", "Antonio"];
let team2 = ["Valeria", "Sara", "Miguel"];

let education = ["David", ...team1, ...team2];

console.log(education);

// Uso del let
// Con let, el scope de la variable es local, 
//solo puede ser accedida desde el bloque.
{
    var globalVar = "Globa Var";
}

{
    let localVar = "Local Var"; 
    console.log(localVar);
}

console.log(globalVar);

// Uso del const
// Constante que no se puede modificar.

const a = "b";
a = "a";
console.log(a);

//*****************
let name = "Juan";
let age = 25;

obj = {name: name, age: age}; // es5

ob2 = {name, age};  // es6
console.log(ob2);

// Arrow functions

const names = [
    {name: "Juan", age: 25},
    {name: "Antonio", age: 26},
]

let listOfnNames = names.map(function(item) {
    console.log(item.name);
}
,
let ,listOfNames2 = names.map(item => console.log(item.name)));

const listOfNames3 = (name,age,country) => {
    //...
}

const listOfNames4 = name => {
    //...
}

const square = num => num * num;

// Promesas (sirve para el asincronismo)

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Hello");
        } else {
            reject("Error");
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("Hola"))
    .catch(error => console.log(error));

// Clases
    class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    add(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.add(2, 3));

// Modulos (import y export)

import {helloo} from './module';

hello();

