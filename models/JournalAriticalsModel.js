var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var JArticalSchema = new Schema({
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
    impactFaction: Number,
    category: {
        type: String,

    }

});

module.exports = mongoose.model('JournalArticals', JArticalSchema);