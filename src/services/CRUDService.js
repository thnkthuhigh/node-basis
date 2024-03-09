const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const getUsersByID = async (userID) => {
  let [results, fields] = await connection.query(
    "select * FROM Users u WHERE id = ?",
    [userID]
  );

  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserById = async (email, name, city, userID) => {
  let [results, fields] = await connection.query(
    `UPDATE Users 
    SET email = ?, name = ?, city = ?
    WHERE id = ?`,
    [email, name, city, userID]
  );
};

const deleteUserById = async (id) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id = ?`,
    [id]
  );
};

module.exports = { getAllUsers, getUsersByID, updateUserById, deleteUserById };
