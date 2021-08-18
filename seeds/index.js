const sequelize = require("../config/connection");
const seedMenu = require("./menuData");
const seedMeals = require("./mealData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMenu();

  await seedMeals();

  process.exit(0);
};

seedAll();
