const { Menu } = require("../models");

const menudata = [
  {
    name: "Elementary School",
    // title: "look",
  },
  {
    name: "Middle School",
    // title: "look",
  },
  {
    name: "High School",
    // title: "look",
  },
  // {
  //   name: "Weekends",
  //   title: "look",
  // },
];

const seedMenu = () => Menu.bulkCreate(menudata);

module.exports = seedMenu;
