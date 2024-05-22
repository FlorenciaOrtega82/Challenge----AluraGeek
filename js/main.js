//const url = await fetch("http://localhost:5500/productos");
const url = "http://localhost:5500/productos/";

async function listarProductos() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Ha ocurrido un error al listar los productos");
  }
  const productos = await response.json();
  return productos;
}

async function enviarProducto(nombre, precio, imagen, id) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      id: id,
    }),
  });

  if (!response.ok) {
    throw new Error("Ha ocurrido un error al enviar el producto");
  }
  const productoCreado = await response.json();
  return productoCreado;
}

const deleteProduct = async (id) => {
  const response = await fetch(`${url}${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(
      `Ha ocurrido un error al eliminar el producto con ID: ${id}`
    );
  }

  const resultado = await response.json();
  return resultado;
};

export const main = {
  listarProductos,
  enviarProducto,
  deleteProduct,
};

/*---------------
const baseUrl = "http://localhost:5500/productos";

async function listarProductos() {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error("Ha ocurrido un error al listar los productos");
  }
  const productos = await response.json();
  return productos;
}

async function enviarProducto(nombre, precio, imagen) {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      precio: precio,
      imagen: imagen,
    }),
  });

  if (!response.ok) {
    throw new Error("Ha ocurrido un error al enviar el producto");
  }
  const productoCreado = await response.json();
  return productoCreado;
}

const deleteProduct = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(
      `Ha ocurrido un error al eliminar el producto con ID: ${id}`
    );
  }

  const resultado = await response.json();
  return resultado;
};*/
