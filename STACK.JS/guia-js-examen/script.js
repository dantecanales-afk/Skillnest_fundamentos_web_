// =====================================================================
//  GUÍA DE REPASO JS PAL EXAMEN
//  Todo sigue la misma receta: SELECCIONAR -> ESCUCHAR -> CAMBIAR
// =====================================================================


// =================== PARTE 1.A: contador en el mismo botón ===================

// Variable que parte en 0. Usamos "let" porque va a cambiar.
let contador = 0;

// Seleccionamos el botón por su id (el # es por el id).
const btnContador = document.querySelector("#btnContador");

// Cuando le hagan click...
btnContador.addEventListener("click", function () {
  // ...sumamos 1
  contador = contador + 1;
  // ...y escribimos el número dentro del MISMO botón
  btnContador.innerText = contador;
});


// =================== PARTE 1.B: contador en otro elemento ===================

let cuenta = 0;

// El párrafo donde se MUESTRA el número
const numero = document.querySelector("#numero");

// Los dos botones
const btnSumar = document.querySelector("#btnSumar");
const btnRestar = document.querySelector("#btnRestar");

btnSumar.addEventListener("click", function () {
  cuenta = cuenta + 1;
  numero.innerText = cuenta; // se muestra en el PÁRRAFO, no en el botón
});

btnRestar.addEventListener("click", function () {
  cuenta = cuenta - 1;
  numero.innerText = cuenta;
});


// =================== PARTE 2: cambiar propiedades ===================

// ---- 2.A Color ----
const titulo = document.querySelector("#titulo");
const btnColor = document.querySelector("#btnColor");

btnColor.addEventListener("click", function () {
  titulo.style.color = "red";              // color de la letra
  titulo.style.backgroundColor = "yellow"; // color de fondo (todo junto y con C mayúscula)
});

// ---- 2.B Tamaño ----
const btnTamano = document.querySelector("#btnTamano");

btnTamano.addEventListener("click", function () {
  titulo.style.fontSize = "40px"; // ¡no olvidar el "px"!
});

// ---- 2.C Value ----
const nombre = document.querySelector("#nombre");
const btnValue = document.querySelector("#btnValue");

btnValue.addEventListener("click", function () {
  nombre.value = "Hola profe, me saqué un 7"; // value NO lleva .style
});

// ---- 2.D Display (mostrar / ocultar) ----
const secreto = document.querySelector("#secreto");
const btnOcultar = document.querySelector("#btnOcultar");

btnOcultar.addEventListener("click", function () {
  // Preguntamos primero por "none" porque al inicio display está vacío ("")
  if (secreto.style.display === "none") {
    secreto.style.display = "block"; // lo mostramos
  } else {
    secreto.style.display = "none";  // lo escondemos
  }
});


// =================== PARTE 3: eliminar un elemento ===================

const caja = document.querySelector("#caja");
const btnEliminar = document.querySelector("#btnEliminar");

btnEliminar.addEventListener("click", function () {
  caja.remove(); // chao, se fue
});


// =================== PARTE 4: leer input / select y alert ===================

// ---- 4.A Barra de búsqueda ----
const buscador = document.querySelector("#buscador");
const btnBuscar = document.querySelector("#btnBuscar");

btnBuscar.addEventListener("click", function () {
  // El .value se lee ADENTRO del click, para que tenga lo que escribió el cliente
  const textoBuscado = buscador.value;
  alert("Buscaste: " + textoBuscado);
});

// ---- 4.B Select ----
const selectComida = document.querySelector("#selectComida");
const btnElegir = document.querySelector("#btnElegir");

btnElegir.addEventListener("click", function () {
  const comidaElegida = selectComida.value; // igual que un input: .value
  alert(`Elegiste: ${comidaElegida}. ¡Buena elección!`);
});


// =================== PARTE 5: cambiar el src de imágenes ===================

// ---- 5.A Con un botón ----
const foto = document.querySelector("#foto");
const btnCambiar = document.querySelector("#btnCambiar");

btnCambiar.addEventListener("click", function () {
  foto.src = "img/noche.svg"; // la ruta de la otra imagen
});

// ---- 5.B Hover con JS ----
const fotoHover = document.querySelector("#fotoHover");

// El mouse ENTRA a la imagen
fotoHover.addEventListener("mouseover", function () {
  fotoHover.src = "img/feliz.svg";
});

// El mouse SALE de la imagen (si no, se queda pegada en la feliz)
fotoHover.addEventListener("mouseout", function () {
  fotoHover.src = "img/triste.svg";
});
