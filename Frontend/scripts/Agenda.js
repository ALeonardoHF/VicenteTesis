// lista de todo la agenda disponible

const tabla = document.querySelector("#tabla-agenda");

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