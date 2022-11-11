var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var thesesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    writers: [String],
    link: {
        type: String,
        required: true
    },
  
    publishDate: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Thesis', thesesSchema);