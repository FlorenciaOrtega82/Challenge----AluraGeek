async function listarVideos() {
  const conexion = await fetch("http://localhost:5500/productos");
  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

async function enviarVideo(nombre, precio, imagen) {
  const conexion = await fetch("http://localhost:5500/productos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      precio: precio,
      imagen: imagen,
    }),
  });

  const conexionConvertida = conexion.json();

  if (!conexion.ok) {
    throw new Error("Ha ocurrido un error al enviar el producto");
  }
  return conexionConvertida;
}

export const main = {
  listarVideos,
  enviarVideo,
};
