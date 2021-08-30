const User = require("./User");
const Menu = require("./Menu");
const Meal = require("./Meal");
const myMeal = require("./myMeal");

Menu.hasMany(Meal, {
  foreignKey: "menu_id",
});

Meal.belongsTo(Menu, {
  foreignKey: "menu_id",
});

User.hasMany(myMeal);

module.exports = { User, Menu, Meal, myMeal };
