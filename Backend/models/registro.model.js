const db = require("../models");

module.exports = (sequelize, Sequelize) => {
    const Registro = sequelize.define("registro", {
        idRegistro: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Llegada: {
            type: Sequelize.TIME,
            allowNull: false
        },
        Salida: {
            type: Sequelize.TIME,
            allowNull: false
        },
        TiempoEstancia: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Huespedes: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ModeloAuto: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, { sequelize, timestamps: false });

    // Registro.belongsTo(db.cliente, {foreignKey: 'idCliente'});

    return Registro;
};