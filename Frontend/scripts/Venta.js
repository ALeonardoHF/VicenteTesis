// lista de todo el inventario disponible

const tabla = document.querySelector("#tabla-venta");

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


