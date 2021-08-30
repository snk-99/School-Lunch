const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
// const myMealroutes = require("./myMeal-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("/mymeal", myMealroutes);

// failure return
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
