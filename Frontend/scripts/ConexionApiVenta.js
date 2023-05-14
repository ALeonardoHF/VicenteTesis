const form = document.getElementById('ventaForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const articulo = document.getElementById('articulo').value;
  const tipoarticulo = "Inventario Externo";
  const precio = document.getElementById('precio').value;
  const cantidad = document.getElementById('cantidad').value;

  // Realizar la petición a través de Axios
  axios.post('http://localhost:3002/api/ventas/', {
    articulo: articulo,
    tipoarticulo: tipoarticulo,
    precio: precio,
    cantidad: cantidad
  })
    .then(function (response) {
      if (response.status == 200) {
        location.reload();
      }
    })
    .catch(function (error) {
      alert("Error, no existe el producto o la cantidad de venta supera el del inventario.");
    });
    form.reset(); 
  // location.reload();
});