import { main } from "./main.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(nombre, precio, imagen) {
  const producto = document.createElement("li");
  producto.className = "videos__item";
  producto.innerHTML = `
    <div class="descripcion-video">
        <img class="imagen-producto" src="${imagen}" />
        <h5 class="descripcion-producto">${nombre}</h5>
        <p class="descripcion-producto"> $${precio}</p>
    </div> `;

  return producto;
}

async function listarVideos() {
  try {
    const listaAPI = await main.listarVideos();

    listaAPI.forEach((producto) =>
      lista.appendChild(
        crearCard(producto.nombre, producto.precio, producto.imagen)
      )
    );
  } catch {
    lista.innerHTML = `<h2 class="mensaje__nombre">Ha ocurrido un problema con la conexión :( </h2>`;
  }
}

listarVideos();
