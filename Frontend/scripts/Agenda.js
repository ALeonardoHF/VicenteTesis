// lista de todo la agenda disponible

const tabla = document.querySelector("#tabla-agenda");

if (localStorage.getItem("user") && localStorage.getItem("login")) {
    axios.get('http://localhost:3002/api/agendas/')
        .then(function (response) {
            response.data.forEach(function (dato) {
                const fila = document.createElement("tr");


                fila.innerHTML = `
            <td>${dato.Nombre}</td>
            <td>${dato.Profesion}</td>
            <td>${dato.Info_Rel}</td>
            <td>${dato.NumTel}</td>
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
    window.location.href = "/Frontend/Log In Empleado.html";

}

function logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("login");
    window.location.reload();
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