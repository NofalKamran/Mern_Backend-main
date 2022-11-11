var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var degSchema = new Schema({
    designation:{
        type:String,
        required: true
    },
    title: String,
    university: String,
    theses: String,
    specialization: String,
    date:{
        type: Date,
        default: Date.now()
    },
   logo: String
});

module.exports = mongoose.model('Degree', degSchema);