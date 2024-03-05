const connection = require("../config/database");

const getHomepage = (rep, res) => {
  res.render("sample");
};

const abcPage = (rep, res) => {
  connection.query("SELECT * FROM Users", function (err, results, fields) {
    console.log("Query results:", results); // results contains rows returned by server
    console.log("Query fields:", fields); // fields contains extra meta data about results, if available
    res.send(JSON.stringify(results));
  });
};

module.exports = {
  getHomepage,
  abcPage,
};
