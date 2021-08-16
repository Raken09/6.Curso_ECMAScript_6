const datos = {
    fronted: "Oscar",
    backend: "Pablo",
    desing: "Juan",
}

const entries = Object.entries(datos) // Crea un arreglo con los objetos 
console.log(entries)
console.log(entries.length)

const datos2 = {
    fronted: "Oscar",
    backend: "Pablo",
    desing: "Juan",
}

const values = Object.values(datos) // Crea un arreglo solo con los valores
console.log(values)
console.log(values.length)

const string = "Hello"; // 5 caracteres
console.log(string.padStart(7, "hi")); // Quiero que la cadena tenga maximo 7 caracteres y que se agregue "hi" al principio.
console.log(string.padEnd(12, " ------")); // Quiero que la cadena tenga maximo 12 caracteres y que se agregue al final.
console.log("food".padEnd(12, " ------")); // Quiero que la cadena tenga maximo 12 caracteres y que se agregue al final.

const obj = {
    name: "Oscar", // La coma establece que puede seguir un valor o nó
}

// Async y await

const helloworld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Hello World"), 3000)
        : reject(new Error("Error"))
    });
};

const hellowAsyn = async () => {
    const hello = await helloworld();
    console.log(hello); 
}

hellowAsyn();

const anotherFucntion = async () => {
    try {
        const hello = await helloworld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFucntion();