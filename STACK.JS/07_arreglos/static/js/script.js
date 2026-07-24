//variables a lista
let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

//transformar en array y mostrar
let nombres = ["Ana", "Pedro", "Maria", "Carlos"]

//mostrar a maria en una alerta
alert(nombres[2]);
let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "José"];
let datos = ["Carlos", 18, true];
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
//desafio
//pedro tiene 18 años y compro una sandia a $2300
let mensaje = `${alumnos[1]} tiene ${datos[1]} años y compro una ${frutas[3]} a ${compras[1]}`
alert(mensaje)

//la propiedad .length devuelve la cantidad de elementos
let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandía"];

console.log(frutas.length); // 4 -->conteo de elementos

//obtener el ultimo elemntos
let frutas3 = ["Manzana", "Pera", "Kiwi", "Sandía"];
let ultima = frutas[frutas.length - 1];
// variable.length-1 siempre trae el ultimo elemntos

console.log(ultima);

//desafio
//del arreglo ["hola", "a", "todos", "los", "programadores",]
//mostrar el penultimo y el ultimo
let todo = ["hola", "a", "todos", "los", "programadores"]
let ultimo = todo[todo.length - 1]
let penultimo = todo[todo.length - 2]
console.log(`${penultimo} ${ultimo}`)
let listaTareas = ["barrer", "cocinar", "Realizar comprar",];


function manipularArray(listaTareas) {
    //modificar un elemento del arreglo
    listaTareas[1] = "Construir";
    //añadir un elemento al final de la lista
    listaTareas.push("cocinar");
    //eliminar el ultimo elemento y mostrarlo
    let eliminado = listaTareas.pop();
    //añadir un elemento al inicio de la lista
    listaTareas.unshift("boxear");
    //eliminar el primer elemento de la lista
    eliminado += " " + listaTareas.shift();

    //mostrar resultado
    alert(listaTareas.join(" - "));
    alert("elementos eliminados: " + eliminado);
}



function ed() {
    let edades = [15, 18, 20, 14, 25]
    alert("la primera edad es " + edades[0] + ", la ultima edad es " + edades[edades.length - 1] + " y la cantidad de edades es " + edades.length)
}

function no() {
    let nombres = ["juan", "javier", "michael", "matias", "vicente"]
    for (let i = 0; i <= 4; i++) {
        alert(nombres[i])
    }
}



//ejemplo de sumar elementos
function sumas() {


    let ventas = [10000, 5000, 12000, 8000];

    let total = 0;

    for (let i = 0; i < ventas.length; i++) {

        total += ventas[i];

    }

    alert(`El resultado es ${total}`)
}


//calcular PROMEDIO
function CalculaPromedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {

        suma += notas[i];

    }

    let promedio = suma / notas.length;

    alert(`El promedio de las notas :${notas.join("/")} \n Promedio : ${promedio}`);
}



//condiciones dentro de bucle

//buscar el mayor
function buscarElementos() {
    let edades = [12, 15, 18, 20, 25, 35, 32, 54];
    let mayores = [];
    for (let i = 0; i < edades.length; i++) {
        //condicion para buscar a mayores
        if (edades[i] >= 18) {
            mayores.push(edades[i])//añade la posicion que cumple la condicion

        }
    }
    alert(`De la lista de edades: ${edades.join(" / ")} \nLos edades son ${mayores.join(" / ")}`)
}


//buscar el menor
function buscarmenor() {
    let numeros = [10, 35, 7, 90, 22, 22, 32, 34];

    let menor = numeros[0];
    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] < menor) {

            menor = numeros[i];

        }
        else if (numeros > mayor) {
            mayor = numeros[i]
        }
        else {
            console.log(`Valor repetido ${numeros[i]}`)
        }

    }

    alert(`De los numeros ${numeros.join(" / ")}
\nel mayor es ${mayor}
\nel menor es ${menor}`)
}
//ejemplo completo
//calcular ventas

//tarea  unir todos los console.log en una alerta
//eliminar al ultimo valor y mostrarlo
//añadir dos valores con .push(prompt)
function calcularVentas() {
    let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
    let total = 0;
    let mayores = [0];
    let contadorVentas = 0;
    let mayor = ventas[0];
    let valorEliminado = ventas.pop();
    let valor1 = parseInt(prompt("Ingrese primer valor"));
    let valor2 = parseInt(prompt("Ingrese segundo valor"));
    ventas.push(valor1, valor2);

    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
        if (ventas[i] > mayor) {
            mayor = ventas[i];
            if (ventas[i] >= 10000) {
                mayores.push(ventas[i])
                contadorVentas++;
            }
        }

    }

    alert(`Total de ventas: ${total} \nMayor: ${mayor}
        promedio: ${total / ventas.length}
        Valores sobres $10.000. ${mayores.join(' / ')}
        Conteo de mayores: ${contadorVentas}
        Valor Elminado: ${valorEliminado}`);
}