const db = require("../Config/db");

res.send(db.query("SELECT structureName INTO addstructure"));
