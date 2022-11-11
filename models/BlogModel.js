let Mongoose = require('mongoose')

const blog_schema = new Mongoose.Schema({
    id: Mongoose.Schema.Types.ObjectId,
    title: String,
    Date_created: {
        type: Date,
        default: Date.now()
    },
    author: Mongoose.Schema({
        name: String,
        Email: String
    }),
    imgSrc: String,
    blog_data: String
})

const blog = Mongoose.model('blog', blog_schema)

module.exports = blog