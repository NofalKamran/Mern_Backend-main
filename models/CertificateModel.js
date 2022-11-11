var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var certiSchema = new Schema({
    
    title: 
    {type: String, 
     required:true
    },
    institute: String,
    website: String,
    
    year:{
        type: Date,
        default: Date.now()
    },
   logo: String
});

module.exports = mongoose.model('Certifications', certiSchema);