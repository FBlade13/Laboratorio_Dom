const botonesAgregar =
document.querySelectorAll(".btn-agregar");

const listaCarrito =
document.querySelector("#lista-carrito");

const badge =
document.querySelector("#badge");

const total =
document.querySelector("#total");

const vaciar =
document.querySelector("#btn-vaciar");

let cantidadItems = 0;
let totalAcumulado = 0;

// Eventos de los botones Agregar
botonesAgregar.forEach(boton => {

    boton.addEventListener("click", () => {

        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        agregarAlCarrito(nombre, precio);

    });

});

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {

    const li = document.createElement("li");

    li.classList.add("list-group-item");

    li.innerHTML = `
        ${nombre} - $${precio}
        <button class="btn btn-danger btn-sm btn-eliminar">
            ✕
        </button>
    `;

    listaCarrito.appendChild(li);

    cantidadItems++;
    totalAcumulado += precio;

    updateBadge();
    updateTotal();

    const btnEliminar =
    li.querySelector(".btn-eliminar");

    btnEliminar.addEventListener("click", () => {
        eliminarItem(li, precio);
    });

}

// Actualizar badge
function updateBadge() {

    badge.textContent = cantidadItems;

}

// Actualizar total
function updateTotal() {

    total.textContent =
    "$" +
    totalAcumulado.toLocaleString("es-CO", {
        minimumFractionDigits: 2
    });

}

// Eliminar producto
function eliminarItem(li, precio) {

    li.remove();

    cantidadItems--;

    totalAcumulado -= precio;

    updateBadge();
    updateTotal();

}

vaciar.addEventListener("click", ()=>{
    listaCarrito
    .querySelectorAll("li")
    .forEach(li => li.remove());

    cantidadItems =0;
    totalAcumulado =0;

    updateBadge();
});