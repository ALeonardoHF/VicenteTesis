module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define("empleado", {
      idEmpleado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Apellido: {
        type: Sequelize.STRING
      },
      Rol: {
        type: Sequelize.STRING
      }
    }, {sequelize, timestamps:false});
  
    return Empleado;
  };