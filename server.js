//Exportación de express para trabajar con node js y hacer peticiones HTTP 
const express = require("express"); 
const app = express();

//Con este get, se establece una ruta de consulta en el local host (http://localhost:5000/)
app.get("/",(req, res) =>{
    res.end("Estas en el server backend node");
});


//Configuración server básico | configuración de puerto con el método listen 
app.listen(5000, function (){
    console.log("El servidor está corriendo en puerto 5000");
});