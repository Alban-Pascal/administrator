const db = require("../Config/db");

module.exports = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  dbdb.query(
    "INSERT INTO AddStucture (asset, username, email, town, information, numberStructures, manageSchedule, flyer, drinks) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      asset,
      username,
      email,
      town,
      information,
      numberStructures,
      manageSchedule,
      flyer,
      drinks,
    ],
    (err, result) => {
      console.log(err);
    }
  );
};
