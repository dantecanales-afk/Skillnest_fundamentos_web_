
let hamburguesaEspecial = {

    pan: "Pan brioche",

    carne: "Pollo crujiente",

    queso: "Suizo",

    extras: [

        "Lechuga",

        "Pepinos",

        "Miel"

    ],

    mostrarIngredientes: function () {

        console.log("Pan:", this.pan);

        console.log("Carne:", this.carne);

        console.log("Queso:", this.queso);

        console.log(

            "Extras:",

            this.extras.join(", ")

        );

    }

};

// DESAFIO acceder al pan
console.log(hamburguesaEspecial.pan)

hamburguesaEspecial.mostrarIngredientes()

//objeto con
//Objeto con metodo automovil>
let automovil = {

    auto: "Honda civic",

    modelo: "EJ1 Coupé (1993)",

    Motor: "Spoon Engines",

    Turbo: "T66 Turbo",

    OxidoNitroso: "NOS",

    Escape: "Motec system exhaust",

    extras: [

        "Wings West",

        "Aleron aluminio estilo R33 GT-R",

        "Neon de bajo de los chasis color verde fosforescente",

        "Llantas Axis Se7ven de 17 o 18 pulgadas",

        "Suspensión TEIN Flex Z / Street Advance Z"
    ],


    piezasdeauto: function () {

        alert(`Auto: ${this.auto}
Motor: ${this.Motor}
Modelo: ${this.modelo}
Turbo: ${this.Turbo}
Oxido De Nitroso: ${this.OxidoNitroso}
Escape: ${this.Escape}
Extras: ${this.extras.join("\n")}`);



    }
};

automovil.piezasdeauto()


