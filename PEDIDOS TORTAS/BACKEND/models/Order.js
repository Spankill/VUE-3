const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },   //referencia al usuario
    cake: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cake',
        required: true
    },   //referencia a la torta
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
});

module.exports = mongoose.model('Order', orderSchema);