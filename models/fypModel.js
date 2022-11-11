var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FYPSchema = new Schema({
    Title:{
        type:String,
        required: true,
    },
    link: {
        type: String,
       
    },
    publishDate:{
        type: Date,
        default: Date.now()
    },
    ResearchArea: {
        type: String,
    },
    Tool: {
        type: String,
    },
    Student: {
        type: String,
         required:true
    },
    image: {
        type: String,
    },
    Description:{
        type: String,  
    }
});

module.exports = mongoose.model('FYP', FYPSchema);