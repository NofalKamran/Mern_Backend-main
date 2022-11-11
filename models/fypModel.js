var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var thesesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true
    },
    ResearchArea: {
        type: String,
        required: true
    },
    writers: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    Status: [String],
    Degree: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        default: Date.now()
    },
    Description:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Thesis', thesesSchema);