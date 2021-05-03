const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    life: {
        type: String,
        required: true
    },
    res: {
        type: String,
        required: true
    },
    weapon: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Character', characterSchema);
