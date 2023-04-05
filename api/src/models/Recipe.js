const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'https://www.google.cl/url?sa=i&url=https%3A%2F%2Fwww.univision.com%2Ftemas%2Fratatouille&psig=AOvVaw0nyh9xZyx303ef3lQn_eNN&ust=1680793941912000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjWg8CDk_4CFQAAAAAdAAAAABAk'
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
