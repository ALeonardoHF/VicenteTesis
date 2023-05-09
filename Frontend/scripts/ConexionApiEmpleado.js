const form = document.getElementById('empleadoForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const rol = document.getElementById('rol').value;

  console.log(nombre);
  console.log(apellido);
  console.log(rol);

  // Realizar la petición a través de Axios
  axios.post('http://localhost:3002/api/empleados/', {
    nombre: nombre,
    apellido: apellido,
    rol: rol
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    // mostrar los cambios dinamicos con una pequeña recarga de la pagina
    location.reload();
});