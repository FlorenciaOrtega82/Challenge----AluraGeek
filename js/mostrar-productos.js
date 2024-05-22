import { main } from "./main.js";
/*TODO Arreglar error de muestra de productos  */
const lista = document.querySelector("[data-lista]");

export default function crearCard(nombre, precio, imagen, id) {
  const producto = document.createElement("li");
  producto.className = "container-producto  ";
  producto.innerHTML = `
  <div class="descripcion-producto ">
        <img class="imagen-producto" src="${imagen}" />
        <h5 class="nombre-producto">${nombre}</h5>
        <p class="precio-producto"> $${precio}</p>
        <button class="icono-borrar" data-id="${id}">
          <div class="icono-basurero">
            <img class="trash-icon" src="./img/trash-icon.svg">
          </div>
        </button>

    </div> `;

  const deleteButton = producto.querySelector(".icono-borrar");
  deleteButton.addEventListener("click", () => {
    main
      .deleteProduct(id + 1)
      .then(() => {
        producto.remove();
      })
      .catch((error) => console.log(error));
  });

  return producto;
}

async function listarProductos() {
  try {
    const listaAPI = await main.enviarProducto();

    listaAPI.forEach((producto) =>
      lista.appendChild(
        crearCard(
          producto.nombre,
          producto.precio,
          producto.imagen,
          producto.id
        )
      )
    );
  } catch (error) {
    console.log(error);
  }
}

listarProductos();
