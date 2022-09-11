const mongoose = require('mongoose');

const inscripcionSchema = mongoose.Schema({
    carnet: {
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
    },
    fechaAParticipar: {
        type: Date,
        required: true
    },

});

module.exports = mongoose.model('Inscripcion', inscripcionSchema);
