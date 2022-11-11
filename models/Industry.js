var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var artworkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    category:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Artwork', artworkSchema);