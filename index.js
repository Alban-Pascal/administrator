const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const db = require("./Config/db");
const { applyMiddleware } = require("redux");
const register = require("./routes/register");
const { response } = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.get("/structure", (req, res) => {
  res.send(db.query("SELECT structureName FROM addstructure"));
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  const ret = await user.save();
  res.json(ret);

  db;

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
});

app.get("/AddStructure", (req, res) => {
  res.send(result);
});
// db.query(
//   "INSERT INTO AddStucture (asset, username, email, town, information, numberStructures, manageSchedule, flyer, drinks) VALUES (?,?,?,?,?,?,?,?,?)",
//   [
//     asset,
//     username,
//     email,
//     town,
//     information,
//     numberStructures,
//     manageSchedule,
//     flyer,
//     drinks,
//   ],
//   (err, result) => {
//     console.log(err);
//   }
// );

// app.post("/login", (req, res) => {
// const email = req.body.email;
// const password = req.body.password;
//
// db.query(
// "SELECT * FROM user WHERE username = ? AND password = ?",
// [email, password],
// (err, result) => {
// if (err) {
// res.send({ err: err });
// }
// if (result.lengh > 0) {
// res.send(result);
// } else {
// res.send({ message: "Wrong username or password " });
// }
// }
// );
// });

app.get("/parkings", (req, res) => {
  res.send("Liste des parkings");
});
app.listen(9999, () => {
  console.log("Serveur à l'écoute");
});

const parkings = require("./parkings.json");
app.get("/parkings", (req, res) => {
  res.status(200).json(parkings);
});
app.listen(9999, () => {
  console.log("Serveur à l'écoute");
});

// app.listen(9999, () => {
//   console.log("running server");
// });
