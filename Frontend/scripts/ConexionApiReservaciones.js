const form = document.getElementById('reservacionForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const habitacion = document.getElementById('habitacion').value;
    const checkin = document.getElementById('checkin').value;
    var auxCheckIn = new Date(checkin);
    let checkOut = auxCheckIn.setHours(auxCheckIn.getHours() + parseInt(habitacion));
    let precio;


    switch (habitacion) {
        case "2":
            precio = 300;
            break;
        case "4":
            precio = 400;
            break;
        case "12":
            precio = 500;
            break;
        case "24":
            precio = 700;
            break;
    }

    // console.log('checkin :>> ', checkin);
    // console.log('auxCheckIn :>> ', auxCheckIn);
    console.log('checkOut :>> ', new Date(checkOut));
    console.log('precio :>> ', precio);
    // console.log('auxCheckIn :>> ', typeof auxCheckIn);
    // console.log('auxCheckIn :>> ', auxCheckIn instanceof Date);


    // console.log(producto);
    // console.log(cantidad);
    // console.log(auxPrecio);
    // console.log(auxVenta);

    // Realizar la petición a través de Axios
    //   axios.post('http://localhost:3002/api/inventarios/', {
    //     nombre: producto,
    //     precio: auxPrecio,
    //     cantidad: cantidad,
    //     venta: auxVenta
    //   })
    //     .then(function (response) {
    //       // console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //     location.reload();
});