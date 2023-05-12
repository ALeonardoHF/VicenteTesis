const form = document.getElementById('empleadoForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const password = document.getElementById('password').value;
  const rol = document.getElementById('rol').value;

  // Realizar la petición a través de Axios
  axios.post('http://localhost:3002/api/empleados/', {
    nombre: nombre,
    apellido: apellido,
    password: password,
    rol: rol
  })
    .then(function (response) {
      
    })
    .catch(function (error) {
      console.log(error);
    });

    // mostrar los cambios dinamicos con una pequeña recarga de la pagina
    location.reload();
});

function redirectToNewPage() {
  window.location.href = "/Frontend/Log In Empleado.html";
}

function redirectToMenu() {
  const empleado = localStorage.getItem("user");
  const empleadoJSON = JSON.parse(empleado);
  // Comprobar si se ha producido la condición
  if (localStorage.getItem("user") && empleadoJSON.Rol === "Administrador") {
      // Cambiar la ubicación de la página actual a la nueva página
      window.location.href = "/Frontend/Interfaz_administrador.html";
  } else if (localStorage.getItem("user")) {
      // Cambiar la ubicación de la página actual a la nueva página
      window.location.href = "/Frontend/Interfaz Empleado.html";
  } else {
      // Repetir la misma acción
      redirectToNewPage();
  }
}

function logOut() {
  localStorage.removeItem("user");
  localStorage.removeItem("login");
  window.location.reload();
}