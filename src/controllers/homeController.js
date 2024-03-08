const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  console.log(results);
  return res.render("home.ejs", { listUsers: results });
};

const abcPage = (req, res) => {
  return res.render("sample");
};

const Create = (req, res) => {
  return res.render("create.ejs");
};
const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  // console.log(email, name, city);
  // connection.query(` INSERT INTO Users (email, name, city) VALUES (?,?,?)`, [
  //   email,
  //   name,
  //   city,
  // ]);

  // connection.query("SELECT * FROM Users", function (err, results, fields) {
  //   console.log("Query results:", results);
  //   }

  let [results, fields] = await connection.query(
    ` INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [email, name, city]
  );
  console.log("check result", results);

  res.send("Create User succesed");
};

module.exports = {
  getHomepage,
  abcPage,
  postCreateUser,
  Create,
};
