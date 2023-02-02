//Conexión a la BD utilizando la libreria mongoose. Esta nos permite utilizar node js y hacer la conexión. 
const mongoose = require('mongoose');
//URL de la BD de mongo compass al final /CRUD_MERN_STACK es el nombre que va a tener la BD
mongoose.connect('mongodb://127.0.0.1:27017/CRUD_MERN_STACK'); 

const objetoBD = mongoose.connection;

objetoBD.on("connected", ()=>{console.log("conexión correcta a Mongo BD")});
objetoBD.on("error", ()=>{console.log("error en conexión Mongo BD")});

module.exports = mongoose;