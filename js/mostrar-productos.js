import { main } from "./main.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(nombre, precio, imagen) {
  const producto = document.createElement("li");
  producto.className = "container-producto  ";
  producto.innerHTML = `
  <div class="descripcion-producto ">
        <img class="imagen-producto" src="${imagen}" />
        <h5 class="nombre-producto">${nombre}</h5>
        <p class="precio-producto"> $${precio}</p>
        <img class="trash-icon" src="./img/trash-icon.svg">
    </div> `;

  return producto;
}

async function listarProductos() {
  try {
    const listaAPI = await main.listarProductos();

    listaAPI.forEach((producto) =>
      lista.appendChild(
        crearCard(producto.nombre, producto.precio, producto.imagen)
      )
    );
  } catch {
    lista.innerHTML = `<h2 class="mensaje__nombre">Ha ocurrido un problema con la conexión :( </h2>`;
  }
}

listarProductos();
