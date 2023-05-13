const loginForm = document.getElementById('clienteLogin');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post('http://localhost:3002/api/auth/login/cliente', {
        email: email,
        password: password
    }).then(function (response) {
        console.log(response);
        localStorage.setItem("cliente", JSON.stringify(response.data));
        localStorage.setItem("loginCliente", true);
        redirectToNewPage()
    })
        .catch(function (error) {
            console.log(error);
        });
});

function redirectToNewPage() {
    const cliente = localStorage.getItem("cliente");
    const clienteJSON = JSON.parse(cliente);
    // Comprobar si se ha producido la condición
    if (localStorage.getItem("cliente")) {
        // Cambiar la ubicación de la página actual a la nueva página
        window.location.href = "/Frontend/Interfaz Cliente.html";
    } else {
        // Repetir la misma acción
        redirectToNewPage();
    }
}