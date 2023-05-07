const db = require("../models");

module.exports = (sequelize, Sequelize) => {
    const Reservacion = sequelize.define("reservacion", {
        idReservacion: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CheckIn: {
            type: Sequelize.DATE,
            allowNull: false
        },
        CheckOut: {
            type: Sequelize.DATE,
            allowNull: false
        },
        TiempoEstancia: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Precio: {
            type: Sequelize.STRING,
            allowNull: false
        },
        CodigoAuth: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, { sequelize, timestamps: false });

    // Reservacion.belongsTo(db.cliente, {foreignKey: 'idCliente'});

    return Reservacion;
};