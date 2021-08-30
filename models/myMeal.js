const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class myMeal extends Model {}

myMeal.init(
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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "mymeal",
  }
);

module.exports = myMeal;
