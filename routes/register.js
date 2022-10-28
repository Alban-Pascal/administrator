const db = require("../Config/db");

module.exports = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO user (email, Password) VALUE (?, ?)",
    [email, password],
    (err, result) => {
      console.log(err);
    }
  );
};
