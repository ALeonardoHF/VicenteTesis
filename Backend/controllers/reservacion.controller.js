const sequelize = require('sequelize');
const db = require("../models");
const Reservacion = db.reservacion;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre || !req.body.telefono || !req.body.habitacion || !req.body.checkin) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const reservacion = {
    Articulo: req.body.articulo,
    Tipo_articulo: req.body.tipoarticulo,
    Precio: req.body.precio,
    Cantidad: req.body.cantidad
  };

  // Save Tutorial in the database
  Reservacion.create(reservacion)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Empleado."
      });
    });
}