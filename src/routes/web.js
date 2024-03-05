const express = require("express");

const router = express.Router();
const { getHomepage, abcPage } = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/abc", abcPage);

module.exports = router;
