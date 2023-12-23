const Alumno = require('../model/Alumno');  // Asegúrate de que la ruta sea correcta

// Definir las funciones del controlador

// Obtener todos los alumnos
exports.getAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los alumnos');
  }
};

// Crear un nuevo alumno
exports.createAlumno = async (req, res) => {
  try {
    const nuevoAlumno = new Alumno(req.body);
    await nuevoAlumno.save();
    res.json({ message: 'Alumno creado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear un nuevo alumno');
  }
};

// Obtener un alumno por ID
exports.getAlumnoById = async (req, res) => {
  try {
    const alumno = await Alumno.findById(req.params.id);
    if (!alumno) {
      return res.status(404).json({ message: 'Alumno no encontrado' });
    }
    res.json(alumno);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el alumno');
  }
};

// Actualizar un alumno por ID
exports.updateAlumno = async (req, res) => {
  try {
    await Alumno.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Alumno actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el alumno');
  }
};

// Eliminar un alumno por ID
exports.deleteAlumno = async (req, res) => {
  try {
    await Alumno.findByIdAndDelete(req.params.id);
    res.json({ message: 'Alumno eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar el alumno');
  }
};
