const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ""
    }
});

carSchema.pre('save', function (next) {
    const car = this;
    if (car.isModified('price')) {
        car.price = (car.price * 1.2);
        return next();
    } else {
        return next();
    }
});

mongoose.model('car', carSchema);
