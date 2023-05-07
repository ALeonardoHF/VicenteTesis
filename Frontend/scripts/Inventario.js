// lista de todo el inventario disponible

// Modificar la interfaz de inventario, para que los 2 inputs number sean min='0'
// y no puedas agregar negativos a cantidad y a precio

const tabla = document.querySelector("#tabla-inventario");

axios.get('http://localhost:3002/api/inventarios/')
    .then(function (response) {
        response.data.forEach(function (dato) {
            const fila = document.createElement("tr");
            let precio;

            if (dato.Precio == null) {
                dato.Precio = 'Inventario Interno';
            } 

            fila.innerHTML = `
            <td>${dato.Nombre}</td>
            <td>${dato.Cantidad}</td>
            <td>${dato.Precio}</td>
            `;
            tabla.appendChild(fila);
            
        });
    })
    .catch(function (error) {
        console.log(error);
    });



