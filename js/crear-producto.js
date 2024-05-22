import { main } from "./main.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  if (nombre.trim() === "" || precio.trim() === "" || imagen.trim() === "") {
    alert("Por favor completa todos los campos del formulario.");
    return;
  }

  try {
    const productoCreado = await main.enviarProducto(nombre, precio, imagen);
    console.log("Producto creado:", productoCreado);
  } catch (e) {
    console.log("Error al crear el producto:", e);
  }
}

formulario.addEventListener("submit", (evento) => crearProducto(evento));

/*----------------------------- 

import { main } from "./main.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  try {
    const productoCreado = await main.enviarProducto(nombre, precio, imagen);
    console.log('Producto creado:', productoCreado);
  } catch (e) {
    console.log('Error al crear el producto:', e);
  }
}

formulario.addEventListener("submit", (evento) => crearProducto(evento));
*/
