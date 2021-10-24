const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.post("/personas", function (req, res) {
  let persona = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    edad: req.body.edad,
  };
  personas.push(persona);
  res.send(personas);
});

app.put("/personas", function (req, res) {
  let nombre = req.body.nombre;
  let apellidos = req.body.apellidos;
  let edad = req.body.edad;
  for (let i = 0; i < personas.length; i++) {
    if (nombre === personas[i].nombre) {
      personas[i].apellidos = apellidos;
      personas[i].edad = edad;
    }
  }
  res.send({ mensaje: "Se ha editado correctamente" });
});

app.listen(3002);
