const express = require('express');
const User = require('../models/User');
const Cake = require('../models/Cake');
const Order = require('../models/Order');

const router = express.Router();

// ruta para crear un usario de prueba
router.post('/create-user', async (req, res) => {
    try {
        const newUser = new User({
            name: 'Test User',
            email: 'test@example.com',
            password: 'test123',
            role: 'client',
        });
        await newUser.save();
        res.send('Usuario de prueba CREADO');
    }
    catch (err) {
        res.status(500).send('Error al crear usuario: ' + err.message);
    }
});

//ruta para crear una torta de prueba
router.post('/create-cake', async (req, res) => {
    try {
        const newCake = new Cake({
            name: 'Torta de Chocolate',
            description: 'Deliciosa torta de chocolate...',
            size: 'medium',
            flavor: 'chocolate',
            price: 185,
            design: 'clasico',
            image: 'https://example.com/torta.jpg'
        });
        await newCake.save();
        res.send('torta de prueba CREADA');
    }
    catch (err) {
        res.status(500).send('Error al crear torta: ' + err.message);
    }
});

//ruta para crear un pedido de prueba

router.post('/create-order', async (req, res) => {
    try {
        const user = await User.findOne({
            email: 'test@example.com'
        });
        const cake = await Cake.findOne({
            name: 'Torta de Chocolate'
        });
        const newOrder = new Order({
            user: user._id,
            cake: cake._id,
            quantity: 1,
            totalPrice: 180,
            deliveryDate: new Date(),
            status: 'pending',
            comments: 'Nada especial...'
        });
        await newOrder.save();
        res.send('Pedido de prueba CREADO');
    }
    catch (err) {
        res.status(500).send('Error al crear pedido: ' + err.message);
    }
});

module.exports = router;