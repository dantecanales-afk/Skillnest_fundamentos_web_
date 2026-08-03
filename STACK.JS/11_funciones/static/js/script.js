console.log("conexion exitosa")

// //ejemplo saludar sin parametros ()
// function saludar() {
//     alert("¡Hola, bienvenido!");
//funciones com parametros

function saludar(nombres) {
    alert("Hola," + nombres + "!")

    saludar("luis")
    saludar("ana")
}

function encontrarMayor() {
    function encontrarMaximo(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
        let numero1 = 10;
        let numero2 = 7;
        let maximo = encontrarMayor(numero1, numero2);
        alert(`el numero mayor entre ${numero1} y ${numero2} es ${maximo}`);
    }

}


function suma(a, b, c,) {
    return a + b - c
} function mostrarResultado() {
    let num1 = parseInt(prompt("ingrese valor"))
    let num2 = parseInt(prompt("ingrese valor"))
    let num3 = parseInt(prompt("ingrese valor"))
    let resultado = suma(num1, num2, num3)
    alert(`la ejecucion de ${num1} + ${num2} - ${num3} = ${resultado}`)
}



/*crea una funcion que reciba un parametro 
y permita a traves de un bucle contar hasta este

ej: se recibe el numero 5 y muestra : 1-2-3-4-5*/
/*añadir una condicion que el  valor no sea mayor a 100*/ 

function contarHasta(numero) {
    let numeros = [];
    for (let i = 1; i <= numero; i++) {
        numeros.push(i);
    }

    return numeros.join("-");
}
function mostrarConteo(){
    let num = parseInt(prompt("ingrese un numero"))
    if(num <=100){
    let resultado = contarHasta(num);
    alert(`el conteo es ${resultado}`)
}
else{
    alert("ingrese un valor menor o igual a 100 para que el vicente se calle")
}
}
