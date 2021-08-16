let array = [1, 2, 3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2])); // Imprime el valor y luego imprime el valor multiplicado por 2.


// trimStart trimEnd
let hello = "          hello world";
console.log(hello);
console.log(hello.trimStart()); // Elimina los espacios iniciales.

let hello2 = "hello world          ";
console.log(hello2.trimEnd()); // Elimina los espacios finales.);

try {

} catch {
    eror
}

// Generar un objeto construido con los elementos de un array.
let entries = [["name", "oscar"], ["age", "25"]];
console.log(Object.fromEntries(entries));

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description); // Permite acceder a la descripción de un objeto de tipo simbolo.