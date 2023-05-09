module.exports = app => {

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Empleados
  //////////////////////////////////////////////////////////////////////////////////////////////
  const empleados = require("../controllers/empleado.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/empleados/", empleados.create);

  // Retrieve all Tutorials
  // router.get("/", empleados.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", empleados.findAllPublished);

  // Retrieve a single Tutorial with id
  router.post("/empleados/find/", empleados.findOne);

  // Update a Tutorial with id
  router.put("/empleados/:id", empleados.update);

  // Delete a Tutorial with id
  // router.delete("/empleados/:id", empleados.delete);

  // Delete all Tutorials
  // router.delete("/", empleados.deleteAll);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Inventarios
  //////////////////////////////////////////////////////////////////////////////////////////////

  const inventarios = require("../controllers/inventario.controller.js");

  // Create a new Tutorial
  router.post("/inventarios/", inventarios.create);

  // Retrieve all Tutorials
  router.get("/inventarios/", inventarios.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", empleados.findAllPublished);

  // Retrieve a single Tutorial with id
  // router.get("/inventarios/:nombre", inventarios.findOne);

  // Update a Tutorial with id
  // router.put("/inventarios/:id", inventarios.update);

  // Delete a Tutorial with id
  // router.delete("/inventarios/:id", inventarios.delete);

  // Delete all Tutorials
  // router.delete("/", empleados.deleteAll);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Agenda
  //////////////////////////////////////////////////////////////////////////////////////////////


  const agendas = require("../controllers/agenda.controller.js");

  // Create a new Tutorial
  router.post("/agendas/", agendas.create);

  // Retrieve all Tutorials
  router.get("/agendas/", agendas.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", empleados.findAllPublished);

  // Retrieve a single Tutorial with id
  // router.get("/inventarios/:nombre", inventarios.findOne);

  // Update a Tutorial with id
  // router.put("/inventarios/:id", inventarios.update);

  // Delete a Tutorial with id
  // router.delete("/inventarios/:id", inventarios.delete);

  // Delete all Tutorials
  // router.delete("/", empleados.deleteAll);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Venta
  //////////////////////////////////////////////////////////////////////////////////////////////

  const ventas = require("../controllers/venta.controller.js");

  // Create a new Tutorial
  router.post("/ventas/", ventas.create);

  // Retrieve all Tutorials
  router.get("/ventas/", ventas.findAll);

  app.use('/api', router);
};