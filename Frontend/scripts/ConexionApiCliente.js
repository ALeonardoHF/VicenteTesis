const form = document.getElementById('clienteForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    console.log(nombre);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);

    if (password != confirmPassword) {
        alert("El password debe coincidir.!");
        return;
    }

    //   Realizar la petición a través de Axios
    axios.post('http://localhost:3002/api/clientes/', {
        nombre: nombre,
        email: email,
        password: password
    })
        .then(function (response) {
            if (response.data.msg == "Ok" && response.status == 200) {
                // Guardar la información del usuario en el localStorage
                redirectToNewPage();   
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    // mostrar los cambios dinamicos con una pequeña recarga de la pagina
    // location.reload();
});

function redirectToNewPage() {
    // Comprobar si se ha producido la condición
    if (localStorage.getItem("user")) {
      // Cambiar la ubicación de la página actual a la nueva página
      window.location.href = "/Frontend/Log_In_Cliente.html";
    } else {
      // Repetir la misma acción
      redirectToNewPage();
    }
  }