const mongoose = require('mongoose');
const airplaneSchema = mongoose.Schema({
    airplaneId: {
        type:Number,
        required: true
    },
    airplaneName: {
        type:String,
        required: true
    },
    station: {
        type:Number,
        required: true
    },
    isReady: {
        type:Boolean,
        required: true
    },
    passedLanding: {
        type:Boolean,
        required: true
    },
},)
module.exports = mongoose.model('Airplane', airplaneSchema);