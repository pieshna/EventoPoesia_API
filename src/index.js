const express = require('express');
const cors = require('cors');
//const connection = require('./connection');
const calculoFecha =require('./Inscripcion/calculoFecha');

const app = express();

console.log(calculoFecha('1111-11-13','epica','2022-09-17'));

//connection

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
