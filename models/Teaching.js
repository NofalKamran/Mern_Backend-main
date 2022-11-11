var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var interfaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Interface', interfaceSchema);