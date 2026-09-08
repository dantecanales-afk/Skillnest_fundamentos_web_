document.addEventListener("DOMContentLoaded", function () {
    let modoBtn = document.getElementById("modoBtn");

    modoBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Cambiar el texto del botón
        if (document.body.classList.contains("dark-mode")) {
            modoBtn.innerText = "Modo Claro";
        } else {
            modoBtn.innerText = "Modo Oscuro";
        }
    });
});