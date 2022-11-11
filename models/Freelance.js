var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var graphicsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Graphic', graphicsSchema);