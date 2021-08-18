const { Meal } = require("../models");

const mealdata = [
  {
    title: "Burger",
    menu_id: 1,
    filename: "01-burger-lunch.jpg",
    description:
      "Two 100% fresh (never frozen) beef patties with your favorite toppings.",
  },
  {
    title: "Burger",
    menu_id: 2,
    filename: "01-burger-lunch.jpg",
    description:
      "Two 100% fresh (never frozen) beef patties with your favorite toppings.",
  },
  {
    title: "Burger",
    menu_id: 3,
    filename: "01-burger-lunch.jpg",
    description:
      "Two 100% fresh (never frozen) beef patties with your favorite toppings.",
  },

  {
    title: "BLT",
    menu_id: 1,
    filename: "02-blt.jpg",
    description:
      "Applewood smoked bacon with fresh tomato, crisp lettuce and ripe avocado on Texas Toast.",
  },
  {
    title: "BLT",
    menu_id: 2,
    filename: "02-blt.jpg",
    description:
      "Applewood smoked bacon with fresh tomato, crisp lettuce and ripe avocado on Texas Toast.",
  },
  {
    title: "BLT",
    menu_id: 3,
    filename: "02-blt.jpg",
    description:
      "Applewood smoked bacon with fresh tomato, crisp lettuce and ripe avocado on Texas Toast.",
  },
  {
    title: "Cobb Salad",
    menu_id: 1,
    filename: "03-salad.jpg",
    description: "Comes with grilled or fried chicken.",
  },
  {
    title: "Cobb Salad",
    menu_id: 2,
    filename: "03-salad.jpg",
    description: "Comes with grilled or fried chicken.",
  },
  {
    title: "Cobb Salad",
    menu_id: 3,
    filename: "03-salad.jpg",
    description: "Comes with grilled or fried chicken.",
  },
];

const seedMeals = () => Meal.bulkCreate(mealdata);

module.exports = seedMeals;
