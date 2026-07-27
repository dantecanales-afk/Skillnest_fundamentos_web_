// Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:
// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en consola los objetos de cada pizza creada.
function pizagrande(){
function pizzaOven(corteza, salsa, quesos, ingredientes) {
    let pizza = {};
    pizza.corteza = corteza;
    pizza.salsa = salsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

let p1 = pizzaOven(
    "tradicional",
    "tradicional",
    "mozarella",
    ["peperoni", "salchicha", ],
);
let p2 = pizzaOven("tradicional", "marinara", "mozarella y feta", ["champiñones","aceitunas","cebollas"],)

console.log(p1);
alert(`Pizza lanzada a mano\nIngredientes:
    corteza: ${p2.corteza}
    salsa: ${p2.salsa}
    quesos: ${p2.quesos}
    ingredentes: ${p2.ingredientes.join(" - ")}`)

    let p3 = pizzaOven("gruesa","carozzi","cheddar", ["piña","peperoni"],)
    console.log(p3);
    alert(`Pizza giansito\nIngredientes:
        Corteza: ${p3.corteza}
        Salsa: ${p3.salsa}
        Quesos: ${p3.quesos}
        Ingredientes: ${p3.ingredientes.join(" - ")}`)

        let p4 = pizzaOven("extra blanda","tradicional","mozarella",["carnes","pollo"],)

        console.log(p4);
        alert(`Pizza arielwebillo\nIngredientes:
            Corteza: ${p4.corteza}
            Salsa: ${p4.salsa}
            Quesos: ${p4.quesos}
            Ingredientes: ${p4.ingredientes.join(" - ")}`)
}