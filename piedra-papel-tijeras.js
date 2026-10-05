const opciones = document.querySelectorAll(".opcion");

const eleccionUsuario = document.getElementById("eleccionUsuario");
const eleccionComputadora = document.getElementById("eleccionComputadora");
const resultado = document.getElementById("resultado");
const marcador = document.getElementById("marcador");
const reiniciar = document.getElementById("reiniciar");

let puntosUsuario = 0;
let puntosComputadora = 0;


opciones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const usuario = boton.dataset.opcion;

        const opcionesComputadora = [
            "piedra",
            "papel",
            "tijera"
        ];

        const computadora =
            opcionesComputadora[
                Math.floor(Math.random() * 3)
            ];


        eleccionUsuario.textContent =
            "Tu elección: " + usuario;

        eleccionComputadora.textContent =
            "Elección de la computadora: " + computadora;


        if (usuario === computadora) {

            resultado.textContent = "¡Empate!";

        } else if (

            (usuario === "piedra" && computadora === "tijera") ||
            (usuario === "papel" && computadora === "piedra") ||
            (usuario === "tijera" && computadora === "papel")

        ) {

            resultado.textContent = "¡Ganaste!";
            puntosUsuario++;

        } else {

            resultado.textContent = "¡Ganó la computadora!";
            puntosComputadora++;

        }


        marcador.textContent =
            "Usuario: " + puntosUsuario +
            " | Computadora: " + puntosComputadora;

    });

});


reiniciar.addEventListener("click", function () {

    puntosUsuario = 0;
    puntosComputadora = 0;

    eleccionUsuario.textContent = "";
    eleccionComputadora.textContent = "";
    resultado.textContent = "";

    marcador.textContent =
        "Usuario: 0 | Computadora: 0";

});

