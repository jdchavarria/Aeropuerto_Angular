const express = require('express');
var bodyparser = require('body-parser');
const cors = require('cors');


var Aeropuerto = require('./Controladores/Aeropuerto');
var Avion = require('./Controladores/Avion');
var Boleto = require('./Controladores/Boleto');
var Compra = require('./Controladores/Compra');
var Vuelo = require('./Controladores/Vuelo');

  //const client = new Client(connectionData)

const app = express();

app.use(bodyparser.json());


// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(cors());




//endpoints 
//Gets
app.get('/vuelos',Vuelo.getVuelos);
app.get('/asientos/:id',Vuelo.getAsientos);
app.get('/aviones',Avion.getAviones);
app.get('/aeropuertos',Aeropuerto.getAeropuertos);
app.get('/compras',Compra.getCompras);


//Post
app.post('/aeropuerto',Aeropuerto.addAeropuerto);
app.post('/avion',Avion.addAvion);
app.post('/vuelo',Vuelo.addVuelo);
app.post('/asientos',Avion.fillAsientos);
app.post('/boleto',Boleto.addBOLETO);
app.post('/compra',Compra.addCOMPRA);
module.exports=app;


