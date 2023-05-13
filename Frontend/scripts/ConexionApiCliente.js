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

    if (password !== confirmPassword) {
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
            redirectToLoginCliente();
        })
        .catch(function (error) {
            console.log(error);
        });

    // mostrar los cambios dinamicos con una pequeña recarga de la pagina
    // location.reload();
});

function redirectToLoginCliente() {
      window.location.href = "/Frontend/Log_In_Cliente.html";
  }