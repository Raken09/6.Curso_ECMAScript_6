const obj = {
    name: "oscar",
    age: 18,
    country : "Argentina",
}

let { country, ...all} = obj; // Nos permite obtener los valores de country y lo demas se guarda en all.
console.log(all);

const obj2 = {
    name: "oscar",
    age: 18,
};

const obj3 = {
    ...obj2, // Une obj2 con obj3
    country: "Colombia"
}

console.log(obj3);

const helloworld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve("Hola Mundo")
        : reject(new Error("Error"))
    });
}

helloworld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizado"));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2018-01-01");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

