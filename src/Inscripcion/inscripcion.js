const Estudiante = require ('../models/estudiante');
const Inscripcion = require ('../models/inscripcion');
const CalculoFecha = require ('../Inscripcion/calculoFecha');

const estudianteNuevo = async (req, res) => {
    const estudiante = new Estudiante({
        carnet: req.body.carnet,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        genero: req.body.genero,
        telefono: req.body.telefono,
        fechaNacimiento: new Date(req.body.fechaNacimiento),
        carrera: req.body.carrera,
        //generoPoesia: req.body.generoPoesia
    });
    const inscripcion = new Inscripcion({
        carnet: req.body.carnet,
        generoPoesia: req.body.generoPoesia,
        fechaAParticipar: CalculoFecha(req.body.carnet, req.body.generoPoesia, Date.now())
    });
    try {
        const estudianteGuardado = await estudiante.save();
        const inscripcionGuardada = await inscripcion.save();
        res.json({estudianteGuardado,inscripcionGuardada});
    } catch (error) {
        res.json({ message: error });
    }
}

const inscripcionNueva = async (req, res) => {
    const inscripcion = new Inscripcion({
        carnet: req.body.carnet,
        generoPoesia: req.body.generoPoesia,
        fechaAParticipar: CalculoFecha(req.body.carnet, req.body.generoPoesia, Date.now())
    });
    try {
        const inscripcionGuardada = await inscripcion.save();
        res.json(inscripcionGuardada);
    } catch (error) {
        res.json({ message: error });
    }
}

const obtenerEstudiantesPorCarnet = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find({ carnet: req.params.carnet });
        res.json(estudiantes);
    } catch (error) {
        res.json({ message: error });
    }
}

const obtenerInscripcionesPorCarnet = async (req, res) => {
    try {
        const inscripciones = await Inscripcion.find({ carnet: req.params.carnet });
        res.json(inscripciones);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = { estudianteNuevo, inscripcionNueva, obtenerEstudiantesPorCarnet, obtenerInscripcionesPorCarnet };