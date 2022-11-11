var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var thesesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
         
    },
    ResearchArea: {
        type: String,
        
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
        
    }

});

module.exports = mongoose.model('Theses', thesesSchema);