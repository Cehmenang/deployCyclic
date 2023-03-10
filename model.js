import mongoose from 'mongoose'

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

export default mongoose.model('book', booksSchema)