import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Importar el modelo y el controlador
const Alumno = require('./model/Alumno');
const alumnoController = require('./controllers/alumnoController');

// Rutas para gestionar alumnos
app.get('/alumnos', alumnoController.getAlumnos);
app.post('/alumnos', alumnoController.createAlumno);
app.get('/alumnos/:id', alumnoController.getAlumnoById);
app.put('/alumnos/:id', alumnoController.updateAlumno);
app.delete('/alumnos/:id', alumnoController.deleteAlumno);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('Server Up en http://localhost:3000');
});
