const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const puerto = 4000;

app.use(cors());

app.listen(puerto, () => {
  console.log(`Servidor Express corriendo en el puerto ${puerto}`);
});

const connection = mysql.createConnection({
  host: "161.132.47.47",
  user: "aradanda",
  password: "andrereyes",
  database: "proyectoiot",
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión:", err);
    return;
  }
  console.log("Conexión a la base de datos MySQL exitosa");

  app.get("/informacion", (req, res) => {
    connection.query("SELECT * FROM Informacion", (error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      res.json(results);
    });
  });
});
