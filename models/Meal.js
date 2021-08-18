const { Model, DataTypes } = require("sequelize");
// const { Meal } = require(".");
const sequelize = require("../config/connection");

class Meal extends Model {}

Meal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // artist: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // exhibition_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    menu_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "menu",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "meal",
  }
);

module.exports = Meal;
