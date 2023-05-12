// lista de todo el inventario disponible

// Modificar la interfaz de inventario, para que los 2 inputs number sean min='0'
// y no puedas agregar negativos a cantidad y a precio

const tabla = document.querySelector("#tabla-empleados");
const empleado = localStorage.getItem("user");
const empleadoJSON = JSON.parse(empleado);
if (localStorage.getItem("user") && localStorage.getItem("login") && empleadoJSON.Rol === "Administrador") {
    axios.get('http://localhost:3002/api/empleados/')
        .then(function (response) {
            response.data.forEach(function (dato) {
                console.log()
                const fila = document.createElement("tr");
                let password;

                if (dato.Rol == "Administrador") {
                    password = "N/A";
                } else {
                    password = dato.Password;
                }

                fila.innerHTML = `
            <td>${dato.NumeroEmpleado}</td>
            <td>${dato.Nombre}</td>
            <td>${dato.Apellido}</td>
            <td>${password}</td>
            <td>${dato.Rol}</td>
            `;
                tabla.appendChild(fila);

            });
        })
        .catch(function (error) {
            console.log(error);
        });


} else {
    redirectToNewPage();
}

function redirectToNewPage() {
    logOut();
    window.location.href = "/Frontend/Log In Empleado.html";
}

function logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("login");
    window.location.reload();
}