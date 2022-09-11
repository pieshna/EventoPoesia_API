const express = require('express');
const cors = require('cors');
const connection = require('./connection');
const calculoFecha =require('./Inscripcion/calculoFecha');

const app = express();


//connection

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

//routes
app.use('/api', require('./routes/inscripciones.routes'));


//starting the server

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
