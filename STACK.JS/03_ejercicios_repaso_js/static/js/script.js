console.log ("conexion correcta...");
// Solicitar:

// Nombre del cliente
// Peso del paquete (kg)
// Condiciones:

// Hasta 2 kg
// Más de 2 kg y hasta 5 kg
// Más de 5 kg y hasta 10 kg
// Más de 10 kg
// El programa debe indicar:

// Nombre del cliente
// Categoría del envío
// Valor correspondiente al despacho
function ejercicio1(){
    let nombreCliente = prompt("ingrese su nombre: ");
    let peso = parseInt(prompt("ingrese el peso de su pack: "))
    let mensaje =" ";
    let valorDespacho = 2000
    //condiciones_____
    if(peso > 0 && peso <=2){
        mensaje = ` ${nombreCliente} su Paquete pesa ${peso} kg
        \nValor despacho: ${valorDespacho * peso} `;
    }
    else if(peso > 2 && peso <= 5) {
                mensaje = ` ${nombreCliente} su Paquete pesa ${peso} kg
        \nValor despacho: ${valorDespacho * peso} `;        
    }
    else if(peso > 5 && peso<= 10) {
                mensaje = ` ${nombreCliente} su Paquete pesa ${peso} kg
        \nValor despacho: ${valorDespacho * peso} `;
    }
    else if (peso >10 && peso <= 50){
        mensaje = ` ${nombreCliente} su Paquete pesa ${peso} kg
        \nValor despacho: ${valorDespacho * peso} `;
    }
        
    else(
        mensaje ="ingrese valores validos"
    )
    alert(mensaje)
}
// Ejercicio 2: Acceso a Biblioteca
// Enunciado
// Una biblioteca posee dos tipos de usuarios:

// Estudiante
// Profesor
// Solicitar:

// Tipo de usuario
// Cantidad de libros solicitados
// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// Si el préstamo está permitido.
// Si supera el límite permitido.
// Mostrar un mensaje diferente según el tipo de usuario.
// Utilizar operadores lógicos para realizar las validaciones.
function ejercicio2(){
let tipo = prompt("eres estudiante o profesor?: ")
let cantidad = prompt("cuantos libros quieres solicitar?")
let mensaje =" "
if (tipo == "estudiante" && cantidad >0 && cantidad<=10){
    mensaje = `El Limite de prestamo al ser estudiante es de 10. puedes optar al prestamo`;
}
else if (tipo == "profesor" && cantidad >0 &&cantidad<=20){
    mensaje = `El Limite de prestamo al ser profesor es de 20. puedes optar al prestamo`;
}
else if (tipo == "estudiante" && cantidad > 10 && cantidad < 40){
    mensaje = `El Limite de prestamo al ser estudiante es de 10. NO puedes optar al prestamo`;
}
else if (tipo == "profesor" && cantidad >20 && cantidad < 40){
    mensaje = `El Limite de prestamo al ser profesor es de 20. NO puedes optar al prestamo`;
}
else(
    mensaje = "INGRESE TIPO O CANTIDADES CORRECTAS"
)
alert(mensaje)
}

// Ejercicio 3: Clasificación Deportiva
// Enunciado
// Solicitar:

// Nombre del participante
// Edad
// Clasificar al participante según su edad.
// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:
// Nombre
// Edad
// Categoría asignada
function ejercicio3()    
{
    let nombre = prompt("Nombre del participante: ")
    let edad = parseInt(prompt("Edad: "))
    if (edad >= 18 && edad >= 16) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 1`)
    } else if (edad <= 15 && edad >= 13) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 2`)
    } else if (edad <= 12 && edad >= 10) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 3`)
    } else if (edad <= 9 && edad >= 7) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 4`)
    }
}


// Ejercicio 4: Sistema de Bonificación
// Enunciado
// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// Nombre del trabajador
// Años de servicio
// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// Nombre
// Nivel de antigüedad
// Mensaje indicando si recibe o no bonificación.
function ejercicio4() {

    let nombre = prompt("Ingrese el nombre")
    let años = parseInt(prompt("ingrese los años de servicios"))
    if (años >= 30 && años >= 20) {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n Recibe bono de $200000`)
    } else if (años <= 19 && años >= 10) {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n Recibe bono de $150000`)
    } else if (años <= 9 && años >= 2) {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n Recibe bono de $100000`)
    } else {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n no recibe bono`)
    }
}

// Ejercicio 5: Evaluación de Velocidad
// Enunciado
// Solicitar:

// Nombre del conductor
// Velocidad registrada
// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// Nombre del conductor
// Velocidad
// Clasificación obtenida
// Requisitos Técnicos
// Cada ejercicio debe cumplir con:

// Una función independiente.
// Uso de prompt().
// Uso de al    ert().
// Uso de variables.
// Uso de if.
// Uso de else if.
// Uso de else.
// Uso de operadores de comparación.
// Uso de operadores lógicos cuando corresponda.
// Desafío Extra
// Agregar una o más de las siguientes mejoras:

// Validación de campos vacíos.
// Validación de datos numéricos.
// Mostrar mensajes utilizando emojis.
// Mostrar resultados dentro del HTML utilizando innerHTML.
// Cambiar colores o estilos mediante JavaScript según el resultado obtenido.
function ejercicio5() {
    let nombre = prompt("Ingrese el nombre del conductor")
    let vel = parseInt(prompt("ingrese la velocidad registrada (KM/h)"))
    if (vel <= 150 && vel >= 100) {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Una velocidad rapida`)
    } else if (vel <= 99 && vel >= 50) {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Una velocidad media`)
    } else if (vel <= 49 && vel >= 0) {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Una velocidad lenta`)
    } else {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Ha exedido el limite`)


    }
}


