const mongoose = require('mongoose');

const estudianteSchema = mongoose.Schema({
    carnet: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    carrera: {
        type: String,
        required: true
    },
    generoPoesia: {
        type: String,
        required: true
    },
    fechaInscripcion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Estudiante', estudianteSchema);