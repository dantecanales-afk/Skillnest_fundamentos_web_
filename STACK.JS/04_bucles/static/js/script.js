console.log("prueba de conexion")
/*ejemplo bucle for*/
function contarhasta5() {
    for (let i = 0; i <= 5; i++) {
        alert(i);
    }

}
function cuentaregresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}


function recorrerlista() {
    //lista es un tipo de datos en ingles se conoce como array/lista/arreglo
    //[] = ["nombre", 4, true, [2,4]]
    /*
    let nombre = "carlos"
    alert(nombre)
    let nombres = ["carlos", "maria"]
    alert(nombres [0]) --> esto imprime carlos
    alert(nombres [1]) --> esto imprime maria
    alert(nombres[0].lenght);--> 6
    alert(nombres.lenght;)-->
    */
    let usuarios = ["Ana", "Luis", "María"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

/*ejemplo bucle while*/
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        console.log("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}
function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos...${datosPendientes} de 5`);
        datosPendientes--;
    }
}


function validarContrasena() {
for(var i = 3; i < 10; i += 2) { alert(i); }
}   