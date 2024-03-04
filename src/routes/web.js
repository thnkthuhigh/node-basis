const express = require("express");

const router = express.Router();
const { getHomepage, abcPage } = require("../controllers/homeController");

router.get("/", (req, res) => {
  res.render("sample");
});
router.get("/abc", abcPage);

module.exports = router;
