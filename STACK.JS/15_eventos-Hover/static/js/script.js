const boton = document.getElementById("miBoton");

let title = document.querySelector(".texto");
alert("TITULOTIO"); // <h1 id="title">¡Hola, mundo!</h1>
//Diferencias: GetElementById selecciona solo los tipos ids de
//querySelector tiene la posibilidad de señeccionar id clase o etiqueta 

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
});



texto.innerText = "nuestra Pagina web"
