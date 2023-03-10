const mongoose = require('mongoose')

const Schema = mongoose.Schema
const booksSchema = new Schema({ 
    title: {
        trim: true,
        type: String,
        required: true
    },
    author: {
        trim: true,
        type: String,
        required: true
    }
})

module.exports = mongoose.model('book', booksSchema)