const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Menu extends Model {}

Menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // starting_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    // ending_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "menu",
  }
);

module.exports = Menu;
