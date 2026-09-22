//Iniciar sesión
let sesión = document.getElementById("iniciarsesión");
let textosesion = sesión.textContent;

sesión.addEventListener("click", function () {
    let textosesion = sesión.textContent;
    if (textosesion === "Iniciar sesión") {

        this.innerText = "Cerrar sesión";
    } else {
        this.innerText = "Iniciar sesión";
    }
});
//Iniciar sesión

//Me gusta 12
let megusta = document.getElementById("megusta1")
let megustas = 12
megusta.addEventListener("click", function(){
    megustas++
    this.innerText = `${megustas} Me gusta`
})
//Me gusta 12

//Me gusta 30
let megustaa = document.getElementById("megusta2")
let megustass = 30
megustaa.addEventListener("click", function(){
    megustass++
    this.innerText = `${megustass} Me gusta`
})
//Me gusta 30

//ver perfil
let ver = document.getElementById("verPerfil")
ver.addEventListener("click", function(){
    alert(`Bienvenido a tu perfil.`)
})