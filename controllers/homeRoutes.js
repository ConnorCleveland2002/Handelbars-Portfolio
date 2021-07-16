const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/work", async (req, res) => {
    res.render("work");
});

// router.get("/", (req, res) => {
//   if (req.user) res.render("home", { js: ["home.js"] });
// });

module.exports = router;