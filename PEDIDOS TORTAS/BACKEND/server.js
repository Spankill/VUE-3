//Importamos dependencias necesarias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require("./routes/auth");
require('dotenv').config();


const app = express();    //inciamos la aplicacion express
const PORT = process.env.PORT || 3001;  //Definimos el puerto y arrancamos el SERVER


app.use("/backend/routes/auth", authRoutes);    //Configuramos rutas


//middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',   //permitimos todos los dominios o especificamos uno
}));
app.use(express.json());

const testRoutes = require('./routes/test');   // importa las rutas de prueba
app.use('/test', testRoutes);


//Conectar a MongoDB ATLAS 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {});
        console.log('Conectado a MongoDB Atlas');
    } catch (error) {
        console.error('Error de conexión a MongoDB Atlas:', error.message);
        process.exit(1); // Detener la aplicación si no se puede conectar a la base de datos
    }
};



//Rutas Basicas
app.get('/', (req, res) => {
    res.send('API de Pedidos de Tortas');
})

//manejo global de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ mensaje: 'algo salio mal en el servidor' });  //si hay un error, respondemos con codigo 500 y mensaje de error
})


//Iniciamos el Servidor
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Servidor Corriendo en https://localhost: ${PORT}`);
        });
    }
    catch (error) {
        console.error("Error en el inicio del Servidor: ", error.mensaje);
    }
};




startServer();
