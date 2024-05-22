const url = await fetch("http://localhost:5500/productos");

async function listarProductos() {
  const conexionConvertida = await url.json();
  return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen, id) {
  url,
    {
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
    };

  const conexionConvertida = url.json();

  if (!url.ok) {
    throw new Error("Ha ocurrido un error al enviar el producto");
  }
  return conexionConvertida;
}

const deleteProduct = (id) => {
  return fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const main = {
  listarProductos,
  enviarProducto,
  deleteProduct,
};
