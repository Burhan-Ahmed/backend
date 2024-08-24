const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    RoomNumber: {
        type: Number,
        required: true
    },
    RoomType: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    }
});

const Room = mongoose.model('ViewRoom', roomSchema);

module.exports = Room;
