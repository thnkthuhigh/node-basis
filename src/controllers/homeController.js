const connection = require("../config/database");

const getHomepage = (req, res) => {
  res.render("sample");
};

const abcPage = (req, res) => {
  return res.render("home.ejs");
};

const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  console.log(email, name, city);

  connection.query(
    ` INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);

      res.send(`create user successfully`);
    }
  );
};

module.exports = {
  getHomepage,
  abcPage,
  postCreateUser,
};
