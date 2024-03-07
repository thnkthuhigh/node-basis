const express = require("express");

const router = express.Router();
const {
  getHomepage,
  abcPage,
  postCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);
// router.get("/", getHomepage);

router.get("/abc", abcPage);

router.post("/create-user", postCreateUser);

module.exports = router;
