/* ==========================================
EJERCICIO 1.1 - CAMBIAR EL TEXTO
========================================== */

const botonCambiar = document.getElementById("botonCambiar");
const tituloBienvenida = document.getElementById("tituloBienvenida");

let contador = 0;

botonCambiar.addEventListener("click", function () {

contador++;

if (contador === 1) {
    tituloBienvenida.textContent =
        "¡Bienvenidos a Sabores del Mundo!";
} else if (contador === 2) {
    tituloBienvenida.textContent =
        "¡Esperamos que disfrutes las recetas!";
} else if (contador === 3) {
    tituloBienvenida.textContent =
        "¡Gracias por visitar nuestra página!";
} else {
    contador = 0;
    tituloBienvenida.textContent = "Bienvenidos";
}

});

/* ==========================================
EJERCICIO 1.2 - CAMBIAR TAMAÑO DEL TEXTO
========================================== */

const texto = document.getElementById("textoPagina");
const disminuir = document.getElementById("disminuir");
const normal = document.getElementById("normal");
const aumentar = document.getElementById("aumentar");

let tamaño = 16;

aumentar.addEventListener("click", function () {

if (tamaño < 30) {
    tamaño = tamaño + 2;
    texto.style.fontSize = tamaño + "px";
}

});

disminuir.addEventListener("click", function () {

if (tamaño > 10) {
    tamaño = tamaño - 2;
    texto.style.fontSize = tamaño + "px";
}

});

normal.addEventListener("click", function () {

tamaño = 16;
texto.style.fontSize = tamaño + "px";

});

/* ==========================================
EJERCICIO 2 - BOTÓN VOLVER ARRIBA
========================================== */

const botonArriba = document.getElementById("volverArriba");

window.addEventListener("scroll", function () {

if (window.scrollY > 300) {
    botonArriba.style.display = "block";
} else {
    botonArriba.style.display = "none";
}

});

botonArriba.addEventListener("click", function () {

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

});

/* ==========================================
EJERCICIO 3 - CARRUSEL
========================================== */

const imagenes = [

"https://www.parati.com.ar/wp-content/uploads/2026/05/EMPANADAS-DESTACADA-749x561.jpg.webp?v=2",

"https://cdn.blog.paulinacocina.net/wp-content/uploads/2023/09/pizza-margherita-paulina-cocina-recetas.jpg",

"https://file.adomicil.io/sushiroll.adomicil.io/_files/images/product/00nigiri-sampler-0604119059445392.png",

"https://www.laylita.com/recetas/wp-content/uploads/2021/02/Arepa-reina-pepiada-receta-venezolana.jpg"

];

const imagenCarrusel = document.getElementById("imagenCarrusel");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

let imagenActual = 0;

siguiente.addEventListener("click", function () {

imagenActual++;

if (imagenActual >= imagenes.length) {
    imagenActual = 0;
}

imagenCarrusel.src = imagenes[imagenActual];

});

anterior.addEventListener("click", function () {

imagenActual--;

if (imagenActual < 0) {
    imagenActual = imagenes.length - 1;
}

imagenCarrusel.src = imagenes[imagenActual];

});

/* ==========================================
BOTONES "VER MÁS" DE LOS CONTINENTES
========================================== */

document.querySelectorAll(".btn-ver-mas-continente").forEach(function (btn) {

btn.addEventListener("click", function () {

    const info = btn.previousElementSibling;

    info.classList.toggle("oculto");

    if (info.classList.contains("oculto")) {

        btn.textContent = "Ver más";

    } else {

        btn.textContent = "Ver menos";

    }

});

});

/* ==========================================
RECETAS
========================================== */

/*
Cuando se hace clic en "Ir a receta y curiosidades":

1. Se evita el enlace normal.
2. Se busca la zona de recetas.
3. Se ocultan todas las recetas.
4. Se busca la receta seleccionada.
5. Se muestra la zona de recetas.
6. Se muestra solamente la receta elegida.
7. La página baja automáticamente hasta la receta.
   */

document.querySelectorAll(".btn-receta").forEach(function (a) {

a.addEventListener("click", function (e) {

    e.preventDefault();

    const zonaRecetas =
        document.querySelector(".zona-recetas");

    const enlace = a.getAttribute("href");

    const detalle =
        document.querySelector(enlace);

    if (zonaRecetas && detalle) {

        /* Ocultamos todas las recetas */
        document.querySelectorAll(".receta-detallada").forEach(function (r) {

            r.classList.remove("activa");

        });

        /* Mostramos la zona completa */
        zonaRecetas.classList.add("activa");

        /* Mostramos la receta seleccionada */
        detalle.classList.add("activa");

        /* Bajamos hasta la zona de recetas */
        setTimeout(function () {

            zonaRecetas.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }

});

});

/* ==========================================
BOTONES "VOLVER" DE LAS RECETAS
========================================== */

document.querySelectorAll(".btn-volver").forEach(function (b) {

b.addEventListener("click", function (e) {

    e.preventDefault();

    const recetaActual =
        b.closest(".receta-detallada");

    const zonaRecetas =
        document.querySelector(".zona-recetas");

    /* Ocultamos la receta actual */
    if (recetaActual) {
        recetaActual.classList.remove("activa");
    }

    /* Ocultamos nuevamente toda la zona */
    if (zonaRecetas) {
        zonaRecetas.classList.remove("activa");
    }

    /* Volvemos al elemento indicado por el enlace */
    const destino =
        document.querySelector(b.getAttribute("href"));

    if (destino) {

        destino.scrollIntoView({
            behavior: "smooth"
        });

    }

});

});
/* ==========================================
 ENTREGA 3 - PARTE 2
 FORMULARIO DE CONTACTO
 ========================================== */

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const fechaNacimiento =
    document.getElementById("fechaNacimiento");

    const resultado = document.getElementById("resultado");
    if (nombre === "" || email === "" || mensaje === "") {

    resultado.textContent = "Por favor, completá todos los campos.";

} else {

    const fechaSeleccionada = new Date(fechaNacimiento.value);
    const fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaSeleccionada.getFullYear();

    const mes = fechaActual.getMonth() - fechaSeleccionada.getMonth();

    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaSeleccionada.getDate())) {
        edad--;
    }

    resultado.textContent =
        "¡Mensaje enviado correctamente! Tu edad es: " + edad + " años.";

    formulario.reset();

}

});
/* ==========================================
MODO OSCURO
========================================== */

const botonModo = document.getElementById("botonModo");

botonModo.addEventListener("click", function () {

    document.body.classList.toggle("modo-oscuro");

});

