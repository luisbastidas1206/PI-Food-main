const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resumen: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      salud: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pasos: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
