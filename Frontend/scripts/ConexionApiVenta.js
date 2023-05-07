const form = document.getElementById('ventaForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const articulo = document.getElementById('articulo').value;
  const tipoarticulo = "Inventario Externo";
  const precio = document.getElementById('precio').value;
  const cantidad = document.getElementById('cantidad').value;

  console.log(articulo);
  console.log(tipoarticulo);
  console.log(precio);
  console.log(cantidad);

  // Realizar la petición a través de Axios
  axios.post('http://localhost:3002/api/ventas/', {
    articulo: articulo,
    tipoarticulo: tipoarticulo,
    precio: precio,
    cantidad: cantidad
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    location.reload();
});