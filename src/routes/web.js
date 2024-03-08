const express = require("express");

const router = express.Router();
const {
  getHomepage,
  abcPage,
  postCreateUser,
  Create,
} = require("../controllers/homeController");

router.get("/", getHomepage);
// router.get("/", getHomepage);

router.get("/abc", abcPage);

router.get("/create", Create);

router.post("/create-user", postCreateUser);

module.exports = router;
