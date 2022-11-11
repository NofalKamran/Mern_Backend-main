var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var confPaperSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    writers: [String],
    link: {
        type: String,
        required: true
    },
    citations: {
        citationCount: Number,
        citationLink: String
    },
    publishDate: {
        type: Date,
        default: Date.now()
    },
     publisher: String

});

module.exports = mongoose.model('ConferencePapers', confPaperSchema);