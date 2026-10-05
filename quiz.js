const preguntas = document.querySelectorAll(".pregunta");
const botonFinalizar = document.getElementById("finalizar");
const resultado = document.getElementById("resultado");

const respuestasCorrectas = [
    "Argentina",
    "Japón",
    "Italia",
    "Perú",
    "Tailandia"
];

preguntas.forEach(function (pregunta) {

    const botones = pregunta.querySelectorAll("button");

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            botones.forEach(function (b) {
                b.classList.remove("seleccionada");
            });

            boton.classList.add("seleccionada");

        });

    });

});


botonFinalizar.addEventListener("click", function () {

    let puntaje = 0;

    preguntas.forEach(function (pregunta, indice) {

        const seleccionada = pregunta.querySelector(".seleccionada");

        if (seleccionada) {

            if (seleccionada.textContent === respuestasCorrectas[indice]) {
                puntaje++;
            }

        }

    });

    resultado.textContent =
        "Obtuviste " + puntaje + " de " + preguntas.length + " respuestas correctas.";

});

