const express = require("express");
const app = express();

app.use(express.static("public"));

let personas = [
  {
    nombre: "Sílvia",
    apellidos: "Suan",
    edad: 32,
  },
  {
    nombre: "Carlos",
    apellidos: "Heredia",
    edad: 30,
  },
  {
    nombre: "Dídac",
    apellidos: "Suan",
    edad: 2,
  },
  {
    nombre: "Nil",
    apellidos: "Suan",
    edad: 0,
  },
];

app.get("/personas", function (req, res) {
  res.send(personas);
});

app.listen(3002);
