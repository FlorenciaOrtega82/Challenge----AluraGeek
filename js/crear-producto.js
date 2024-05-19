import { main } from "./main.js";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(evento) {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  try {
    await main.enviarVideo(nombre, precio, imagen);
  } catch (e) {
    alert(e);
  }
}

formulario.addEventListener("submit", (evento) => crearVideo(evento));
console.log("hola");
