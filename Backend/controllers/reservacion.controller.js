const authenticator = require('authenticator-cli');
const moment = require('moment');
const sequelize = require('sequelize');
const db = require("../models");
const Cliente = db.cliente;
const Reservacion = db.reservacion;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.nombre || !req.body.telefono || !req.body.habitacion || !req.body.checkin || !req.body.checkout || !req.body.precio || !req.body.clienteId || !req.body.huespedes) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  let fechaAux = new Date(req.body.checkin);
  fechaAux.setHours(fechaAux.getHours() + 1);
  // let fechaAux2 = new Date(req.body.checkout);

  const cId = req.body.clienteId;

  // Buscar si el cliente existe, si existe obtener el idCliente
  let clienteExiste = await Cliente.findOne({ where: { idCliente: cId } });

  // genera el authenticator code
  const kAuth = authenticator.generateKey();
  const codigoAuth = authenticator.generateToken(kAuth);

  // Create a Tutorial
  const reservacion = {
    CheckIn: fechaAux,
    CheckOut: req.body.checkout,
    TiempoEstancia: req.body.habitacion,
    Precio: req.body.precio,
    CodigoAuth: codigoAuth,
    Telefono: req.body.telefono,
    clienteIdCliente: clienteExiste.dataValues.idCliente,
    Huespedes: req.body.huespedes
  };

  // Save Tutorial in the database
  Reservacion.create(reservacion)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(404).send({
        message:
          "Some error occurred while creating Reservacion."
      });
    });
}



exports.findAllClient = (req, res) => {
  const id = req.params.id;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Reservacion.findAll({ where: { clienteIdCliente: id } })
      .then(data => {
        // console.log('data :>> ', data);
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
                  err.message || "Some error occurred while retrieving tutorials."
          });
      });
};

exports.findAllEmpleado = (req, res) => {

  Reservacion.findAll()
      .then(data => {
        // console.log('data :>> ', data);
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
                  err.message || "Some error occurred while retrieving tutorials."
          });
      });
};