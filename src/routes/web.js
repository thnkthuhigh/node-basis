const express = require("express");

const router = express.Router();
const {
  getHomepage,
  abcPage,
  postCreateUser,
  Create,
  getUpdateUser,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);
// router.get("/", getHomepage);

router.get("/abc", abcPage);

router.get("/create", Create);

router.get("/edit/:id", getUpdateUser);

router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);

router.post("/delete-user", postHandleRemoveUser);

module.exports = router;
