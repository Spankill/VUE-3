const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size: {
        type: String,
        enum: ['smal', 'medium', 'large'],
        required: true
    },
    flavor: {
        type: String,
        enum: ['chocolate', 'vanilla', 'strawberry'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    design: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },  // URL de la imagen
});

module.exports = mongoose.model('Cake', cakeSchema);