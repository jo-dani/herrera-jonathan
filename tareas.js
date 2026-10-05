const nuevaTarea = document.getElementById("nuevaTarea");
const agregarTarea = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

agregarTarea.addEventListener("click", function () {

    const texto = nuevaTarea.value.trim();

    if (texto === "") {
        alert("Por favor, escribí una tarea.");
        return;
    }

    const li = document.createElement("li");

    const textoTarea = document.createElement("span");
    textoTarea.textContent = texto;

    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = "✓";
    botonCompletar.classList.add("boton-completar");

    botonCompletar.addEventListener("click", function () {
        li.classList.toggle("completada");
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "✕";
    botonEliminar.classList.add("boton-eliminar");

    botonEliminar.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(textoTarea);
    li.appendChild(botonCompletar);
    li.appendChild(botonEliminar);

    listaTareas.appendChild(li);

    nuevaTarea.value = "";

});

