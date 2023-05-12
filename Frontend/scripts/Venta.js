// lista de todo el inventario disponible

const tabla = document.querySelector("#tabla-venta");

if (localStorage.getItem("user") && localStorage.getItem("login")) {
    axios.get('http://localhost:3002/api/ventas/')
        .then(function (response) {
            response.data.forEach(function (dato) {
                const fila = document.createElement("tr");
                let total = dato.Total.toFixed(2);

                fila.innerHTML = `
            <td>${dato.Articulo}</td>
            <td>${dato.Cantidad}</td>
            <td>$ ${dato.Precio}</td>
            <td>$ ${total}</td>
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