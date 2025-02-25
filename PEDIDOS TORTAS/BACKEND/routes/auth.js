//Rutas para el REGISTRO y LOGIN 

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

//Registro
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();
        res.status(201).send('Usuario Registrado');
    }
    catch (err) {
        res.status(400).sendDate('Error al Registrar Usuario: ' + err.mensaje);
    }
});

//Login
router.post('/login', async (request, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Credenciales invalidas');
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send('Credenciales Invalidas');
        }
        const token = jwt.sign({
            _id: user._id,
            role: user.role
        },
            process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.send({ token });
    }
    catch (error) {
        res.status(400).send('Error al iniciar SESION: ' + error.message);
    }
});

module.exports = router;